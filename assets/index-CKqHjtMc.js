(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var mh={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function kx(){if(z_)return zo;z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var B_;function Xx(){return B_||(B_=1,mh.exports=kx()),mh.exports}var Xt=Xx(),gh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Wx(){if(I_)return le;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(L,$,yt){this.props=L,this.context=$,this.refs=b,this.updater=yt||S}x.prototype.isReactComponent={},x.prototype.setState=function(L,$){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,$,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function y(){}y.prototype=x.prototype;function z(L,$,yt){this.props=L,this.context=$,this.refs=b,this.updater=yt||S}var U=z.prototype=new y;U.constructor=z,E(U,x.prototype),U.isPureReactComponent=!0;var R=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function B(L,$,yt,St,Q,gt){return yt=gt.ref,{$$typeof:r,type:L,key:$,ref:yt!==void 0?yt:null,props:gt}}function V(L,$){return B(L.type,$,void 0,void 0,void 0,L.props)}function D(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function C(L){var $={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return $[yt]})}var H=/\/+/g;function st(L,$){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):$.toString(36)}function tt(){}function ht(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(tt,tt):(L.status="pending",L.then(function($){L.status==="pending"&&(L.status="fulfilled",L.value=$)},function($){L.status==="pending"&&(L.status="rejected",L.reason=$)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ut(L,$,yt,St,Q){var gt=typeof L;(gt==="undefined"||gt==="boolean")&&(L=null);var ot=!1;if(L===null)ot=!0;else switch(gt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(L.$$typeof){case r:case t:ot=!0;break;case g:return ot=L._init,ut(ot(L._payload),$,yt,St,Q)}}if(ot)return Q=Q(L),ot=St===""?"."+st(L,0):St,R(Q)?(yt="",ot!=null&&(yt=ot.replace(H,"$&/")+"/"),ut(Q,$,yt,"",function(Wt){return Wt})):Q!=null&&(D(Q)&&(Q=V(Q,yt+(Q.key==null||L&&L.key===Q.key?"":(""+Q.key).replace(H,"$&/")+"/")+ot)),$.push(Q)),1;ot=0;var At=St===""?".":St+":";if(R(L))for(var Rt=0;Rt<L.length;Rt++)St=L[Rt],gt=At+st(St,Rt),ot+=ut(St,$,yt,gt,Q);else if(Rt=v(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(St=L.next()).done;)St=St.value,gt=At+st(St,Rt++),ot+=ut(St,$,yt,gt,Q);else if(gt==="object"){if(typeof L.then=="function")return ut(ht(L),$,yt,St,Q);throw $=String(L),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ot}function P(L,$,yt){if(L==null)return L;var St=[],Q=0;return ut(L,St,"","",function(gt){return $.call(yt,gt,Q++)}),St}function q(L){if(L._status===-1){var $=L._result;$=$(),$.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=$)}if(L._status===1)return L._result.default;throw L._result}var X=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return le.Children={map:P,forEach:function(L,$,yt){P(L,function(){$.apply(this,arguments)},yt)},count:function(L){var $=0;return P(L,function(){$++}),$},toArray:function(L){return P(L,function($){return $})||[]},only:function(L){if(!D(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=z,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cloneElement=function(L,$,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=E({},L.props),Q=L.key,gt=void 0;if($!=null)for(ot in $.ref!==void 0&&(gt=void 0),$.key!==void 0&&(Q=""+$.key),$)!O.call($,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&$.ref===void 0||(St[ot]=$[ot]);var ot=arguments.length-2;if(ot===1)St.children=yt;else if(1<ot){for(var At=Array(ot),Rt=0;Rt<ot;Rt++)At[Rt]=arguments[Rt+2];St.children=At}return B(L.type,Q,void 0,void 0,gt,St)},le.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},le.createElement=function(L,$,yt){var St,Q={},gt=null;if($!=null)for(St in $.key!==void 0&&(gt=""+$.key),$)O.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(Q[St]=$[St]);var ot=arguments.length-2;if(ot===1)Q.children=yt;else if(1<ot){for(var At=Array(ot),Rt=0;Rt<ot;Rt++)At[Rt]=arguments[Rt+2];Q.children=At}if(L&&L.defaultProps)for(St in ot=L.defaultProps,ot)Q[St]===void 0&&(Q[St]=ot[St]);return B(L,gt,void 0,void 0,null,Q)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=D,le.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:q}},le.memo=function(L,$){return{$$typeof:p,type:L,compare:$===void 0?null:$}},le.startTransition=function(L){var $=F.T,yt={};F.T=yt;try{var St=L(),Q=F.S;Q!==null&&Q(yt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(xt,X)}catch(gt){X(gt)}finally{F.T=$}},le.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},le.use=function(L){return F.H.use(L)},le.useActionState=function(L,$,yt){return F.H.useActionState(L,$,yt)},le.useCallback=function(L,$){return F.H.useCallback(L,$)},le.useContext=function(L){return F.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,$){return F.H.useDeferredValue(L,$)},le.useEffect=function(L,$,yt){var St=F.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,$)},le.useId=function(){return F.H.useId()},le.useImperativeHandle=function(L,$,yt){return F.H.useImperativeHandle(L,$,yt)},le.useInsertionEffect=function(L,$){return F.H.useInsertionEffect(L,$)},le.useLayoutEffect=function(L,$){return F.H.useLayoutEffect(L,$)},le.useMemo=function(L,$){return F.H.useMemo(L,$)},le.useOptimistic=function(L,$){return F.H.useOptimistic(L,$)},le.useReducer=function(L,$,yt){return F.H.useReducer(L,$,yt)},le.useRef=function(L){return F.H.useRef(L)},le.useState=function(L){return F.H.useState(L)},le.useSyncExternalStore=function(L,$,yt){return F.H.useSyncExternalStore(L,$,yt)},le.useTransition=function(){return F.H.useTransition()},le.version="19.1.0",le}var F_;function qd(){return F_||(F_=1,gh.exports=Wx()),gh.exports}var me=qd(),_h={exports:{}},Bo={},vh={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function qx(){return H_||(H_=1,function(r){function t(P,q){var X=P.length;P.push(q);t:for(;0<X;){var xt=X-1>>>1,L=P[xt];if(0<l(L,q))P[xt]=q,P[X]=L,X=xt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var q=P[0],X=P.pop();if(X!==q){P[0]=X;t:for(var xt=0,L=P.length,$=L>>>1;xt<$;){var yt=2*(xt+1)-1,St=P[yt],Q=yt+1,gt=P[Q];if(0>l(St,X))Q<L&&0>l(gt,St)?(P[xt]=gt,P[Q]=X,xt=Q):(P[xt]=St,P[yt]=X,xt=yt);else if(Q<L&&0>l(gt,X))P[xt]=gt,P[Q]=X,xt=Q;else break t}}return q}function l(P,q){var X=P.sortIndex-q.sortIndex;return X!==0?X:P.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,v=3,S=!1,E=!1,b=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(P){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=P)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function F(P){if(b=!1,R(P),!E)if(i(m)!==null)E=!0,O||(O=!0,st());else{var q=i(p);q!==null&&ut(F,q.startTime-P)}}var O=!1,B=-1,V=5,D=-1;function C(){return x?!0:!(r.unstable_now()-D<V)}function H(){if(x=!1,O){var P=r.unstable_now();D=P;var q=!0;try{t:{E=!1,b&&(b=!1,z(B),B=-1),S=!0;var X=v;try{e:{for(R(P),_=i(m);_!==null&&!(_.expirationTime>P&&C());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,v=_.priorityLevel;var L=xt(_.expirationTime<=P);if(P=r.unstable_now(),typeof L=="function"){_.callback=L,R(P),q=!0;break e}_===i(m)&&s(m),R(P)}else s(m);_=i(m)}if(_!==null)q=!0;else{var $=i(p);$!==null&&ut(F,$.startTime-P),q=!1}}break t}finally{_=null,v=X,S=!1}q=void 0}}finally{q?st():O=!1}}}var st;if(typeof U=="function")st=function(){U(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ht=tt.port2;tt.port1.onmessage=H,st=function(){ht.postMessage(null)}}else st=function(){y(H,0)};function ut(P,q){B=y(function(){P(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(P){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var X=v;v=q;try{return P()}finally{v=X}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=v;v=P;try{return q()}finally{v=X}},r.unstable_scheduleCallback=function(P,q,X){var xt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?xt+X:xt):X=xt,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=X+L,P={id:g++,callback:q,priorityLevel:P,startTime:X,expirationTime:L,sortIndex:-1},X>xt?(P.sortIndex=X,t(p,P),i(m)===null&&P===i(p)&&(b?(z(B),B=-1):b=!0,ut(F,X-xt))):(P.sortIndex=L,t(m,P),E||S||(E=!0,O||(O=!0,st()))),P},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(P){var q=v;return function(){var X=v;v=q;try{return P.apply(this,arguments)}finally{v=X}}}}(yh)),yh}var G_;function Yx(){return G_||(G_=1,vh.exports=qx()),vh.exports}var xh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function jx(){if(V_)return Nn;V_=1;var r=qd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.0",Nn}var k_;function Zx(){if(k_)return xh.exports;k_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),xh.exports=jx(),xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function Kx(){if(X_)return Bo;X_=1;var r=Yx(),t=qd(),i=Zx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=h;break}if(A===o){M=!0,o=u,a=h;break}A=A.sibling}if(!M){for(A=h.child;A;){if(A===a){M=!0,a=h,o=u;break}if(A===o){M=!0,o=h,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case F:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},xt=[],L=-1;function $(e){return{current:e}}function yt(e){0>L||(e.current=xt[L],xt[L]=null,L--)}function St(e,n){L++,xt[L]=e.current,e.current=n}var Q=$(null),gt=$(null),ot=$(null),At=$(null);function Rt(e,n){switch(St(ot,n),St(gt,e),St(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Q),St(Q,e)}function Wt(){yt(Q),yt(gt),yt(ot)}function Gt(e){e.memoizedState!==null&&St(At,e);var n=Q.current,a=f_(n,e.type);n!==a&&(St(gt,e),St(Q,a))}function Oe(e){gt.current===e&&(yt(Q),yt(gt)),At.current===e&&(yt(At),Uo._currentValue=X)}var Ce=Object.prototype.hasOwnProperty,oe=r.unstable_scheduleCallback,G=r.unstable_cancelCallback,Cn=r.unstable_shouldYield,se=r.unstable_requestPaint,Qt=r.unstable_now,Ft=r.unstable_getCurrentPriorityLevel,De=r.unstable_ImmediatePriority,Vt=r.unstable_UserBlockingPriority,N=r.unstable_NormalPriority,T=r.unstable_LowPriority,nt=r.unstable_IdlePriority,mt=r.log,Mt=r.unstable_setDisableYieldValue,ft=null,Lt=null;function Et(e){if(typeof mt=="function"&&Mt(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(ft,e)}catch{}}var wt=Math.clz32?Math.clz32:Bt,Yt=Math.log,bt=Math.LN2;function Bt(e){return e>>>=0,e===0?32:31-(Yt(e)/bt|0)|0}var Kt=256,te=4194304;function Pt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function he(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Pt(o):(M&=A,M!==0?u=Pt(M):a||(a=A&~e,a!==0&&(u=Pt(a))))):(A=o&~h,A!==0?u=Pt(A):M!==0?u=Pt(M):a||(a=o&~e,a!==0&&(u=Pt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ae(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Kt;return Kt<<=1,(Kt&4194048)===0&&(Kt=256),e}function Nt(){var e=te;return te<<=1,(te&62914560)===0&&(te=4194304),e}function ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _t(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zt(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(a=M&~a;0<a;){var dt=31-wt(a),vt=1<<dt;A[dt]=0,I[dt]=-1;var it=et[dt];if(it!==null)for(et[dt]=null,dt=0;dt<it.length;dt++){var at=it[dt];at!==null&&(at.lane&=-536870913)}a&=~vt}o!==0&&Ot(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Ot(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-wt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function re(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-wt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ke(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function sn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:D_(e.type))}function Zn(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var vn=Math.random().toString(36).slice(2),un="__reactFiber$"+vn,bn="__reactProps$"+vn,Fn="__reactContainer$"+vn,$a="__reactEvents$"+vn,al="__reactListeners$"+vn,sl="__reactHandles$"+vn,ts="__reactResources$"+vn,ga="__reactMarker$"+vn;function _a(e){delete e[un],delete e[bn],delete e[$a],delete e[al],delete e[sl]}function Ii(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=m_(e);e!==null;){if(a=e[un])return a;e=m_(e)}return n}e=a,a=e.parentNode}return null}function Fi(e){if(e=e[un]||e[Fn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function es(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function va(e){var n=e[ts];return n||(n=e[ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[ga]=!0}var rl=new Set,ol={};function Hi(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(ol[e]=n,e=0;e<n.length;e++)rl.add(n[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},lt={};function K(e){return Ce.call(lt,e)?!0:Ce.call(rt,e)?!1:Z.test(e)?lt[e]=!0:(rt[e]=!0,!1)}function Tt(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var It,ne;function jt(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+ne}var qt=!1;function _e(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(at){var it=at}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(at){it=at}e.call(vt.prototype)}}else{try{throw Error()}catch(at){it=at}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],A=h[1];if(M&&A){var I=M.split(`
`),et=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var dt=`
`+I[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Te(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return jt("Activity");default:return""}}function je(e){try{var n="";do n+=Te(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(e){var n=Se(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){e._valueTracker||(e._valueTracker=Zt(e))}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Se(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function Xe(e){return e.replace(ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gi(e,n,a,o,u,h,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Un(e,M,xe(n)):a!=null?Un(e,M,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+xe(A):e.removeAttribute("name")}function Ge(e,n,a,o,u,h,M,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Un(e,n,a){n==="number"&&Dn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ut(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function wi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Vi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Vi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function fp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&up(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&up(e,h,n[h])}function du(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return Vv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Os=null;function hp(e){var n=Fi(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[bn]||null;if(!u)throw Error(s(90));Gi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ee(o)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fn(e,!!a.multiple,n,!1)}}}var gu=!1;function dp(e,n,a){if(gu)return e(n,a);gu=!0;try{var o=e(n);return o}finally{if(gu=!1,(Ns!==null||Os!==null)&&(Yl(),Ns&&(n=Ns,e=Os,Os=Ns=null,hp(n),e)))for(n=0;n<e.length;n++)hp(e[n])}}function kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(ki)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){_u=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{_u=!1}var xa=null,vu=null,cl=null;function pp(){if(cl)return cl;var e,n=vu,a=n.length,o,u="value"in xa?xa.value:xa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function mp(){return!1}function Hn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fl:mp,this.isPropagationStopped=mp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Hn(ns),Wr=g({},ns,{view:0,detail:0}),kv=Hn(Wr),yu,xu,qr,dl=g({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(yu=e.screenX-qr.screenX,xu=e.screenY-qr.screenY):xu=yu=0,qr=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:xu}}),gp=Hn(dl),Xv=g({},dl,{dataTransfer:0}),Wv=Hn(Xv),qv=g({},Wr,{relatedTarget:0}),Su=Hn(qv),Yv=g({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Hn(Yv),Zv=g({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kv=Hn(Zv),Qv=g({},ns,{data:0}),_p=Hn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ty[e])?!!n[e]:!1}function Mu(){return ey}var ny=g({},Wr,{key:function(e){if(e.key){var n=Jv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$v[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),iy=Hn(ny),ay=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Hn(ay),sy=g({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),ry=Hn(sy),oy=g({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Hn(oy),cy=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=Hn(cy),fy=g({},ns,{newState:0,oldState:0}),hy=Hn(fy),dy=[9,13,27,32],Eu=ki&&"CompositionEvent"in window,Yr=null;ki&&"documentMode"in document&&(Yr=document.documentMode);var py=ki&&"TextEvent"in window&&!Yr,yp=ki&&(!Eu||Yr&&8<Yr&&11>=Yr),xp=" ",Sp=!1;function Mp(e,n){switch(e){case"keyup":return dy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ps=!1;function my(e,n){switch(e){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(Sp=!0,xp);case"textInput":return e=n.data,e===xp&&Sp?null:e;default:return null}}function gy(e,n){if(Ps)return e==="compositionend"||!Eu&&Mp(e,n)?(e=pp(),cl=vu=xa=null,Ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return yp&&n.locale!=="ko"?null:n.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!_y[e.type]:n==="textarea"}function Tp(e,n,a,o){Ns?Os?Os.push(o):Os=[o]:Ns=o,n=$l(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var jr=null,Zr=null;function vy(e){s_(e,0)}function pl(e){var n=es(e);if(Ee(n))return e}function Ap(e,n){if(e==="change")return n}var Rp=!1;if(ki){var bu;if(ki){var Tu="oninput"in document;if(!Tu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Tu=typeof wp.oninput=="function"}bu=Tu}else bu=!1;Rp=bu&&(!document.documentMode||9<document.documentMode)}function Cp(){jr&&(jr.detachEvent("onpropertychange",Dp),Zr=jr=null)}function Dp(e){if(e.propertyName==="value"&&pl(Zr)){var n=[];Tp(n,Zr,e,mu(e)),dp(vy,n)}}function yy(e,n,a){e==="focusin"?(Cp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",Dp)):e==="focusout"&&Cp()}function xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(Zr)}function Sy(e,n){if(e==="click")return pl(n)}function My(e,n){if(e==="input"||e==="change")return pl(n)}function Ey(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Ey;function Kr(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ce.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lp(e,n){var a=Up(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function Np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Dn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Dn(e.document)}return n}function Au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var by=ki&&"documentMode"in document&&11>=document.documentMode,zs=null,Ru=null,Qr=null,wu=!1;function Pp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||zs==null||zs!==Dn(o)||(o=zs,"selectionStart"in o&&Au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qr&&Kr(Qr,o)||(Qr=o,o=$l(Ru,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=zs)))}function is(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Bs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},Cu={},zp={};ki&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function as(e){if(Cu[e])return Cu[e];if(!Bs[e])return e;var n=Bs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return Cu[e]=n[a];return e}var Bp=as("animationend"),Ip=as("animationiteration"),Fp=as("animationstart"),Ty=as("transitionrun"),Ay=as("transitionstart"),Ry=as("transitioncancel"),Hp=as("transitionend"),Gp=new Map,Du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Du.push("scrollEnd");function _i(e,n){Gp.set(e,n),Hi(n,[e])}var Vp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:je(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:je(n)}}var li=[],Is=0,Uu=0;function ml(){for(var e=Is,n=Uu=Is=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var h=li[n];if(li[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&kp(a,u,h)}}function gl(e,n,a,o){li[Is++]=e,li[Is++]=n,li[Is++]=a,li[Is++]=o,Uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Lu(e,n,a,o){return gl(e,n,a,o),_l(e)}function Fs(e,n){return gl(e,null,null,n),_l(e)}function kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-wt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function _l(e){if(50<Eo)throw Eo=0,Ff=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hs={};function wy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new wy(e,n,a,o)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")Nu(e)&&(M=1);else if(typeof e=="string")M=Dx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,a,n,u),e.elementType=D,e.lanes=h,e;case E:return ss(a.children,u,h,n);case b:M=8,u|=24;break;case x:return e=Qn(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case F:return e=Qn(13,a,n,u),e.elementType=F,e.lanes=h,e;case O:return e=Qn(19,a,n,u),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:M=10;break t;case z:M=9;break t;case R:M=11;break t;case B:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ss(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Ou(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Pu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Gs=[],Vs=0,yl=null,xl=0,ci=[],ui=0,rs=null,Wi=1,qi="";function os(e,n){Gs[Vs++]=xl,Gs[Vs++]=yl,yl=e,xl=n}function Wp(e,n,a){ci[ui++]=Wi,ci[ui++]=qi,ci[ui++]=rs,rs=e;var o=Wi;e=qi;var u=32-wt(o)-1;o&=~(1<<u),a+=1;var h=32-wt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Wi=1<<32-wt(n)+u|a<<u|o,qi=h+e}else Wi=1<<h|a<<u|o,qi=e}function zu(e){e.return!==null&&(os(e,1),Wp(e,1,0))}function Bu(e){for(;e===yl;)yl=Gs[--Vs],Gs[Vs]=null,xl=Gs[--Vs],Gs[Vs]=null;for(;e===rs;)rs=ci[--ui],ci[ui]=null,qi=ci[--ui],ci[ui]=null,Wi=ci[--ui],ci[ui]=null}var zn=null,Qe=null,we=!1,ls=null,Ci=!1,Iu=Error(s(519));function cs(e){var n=Error(s(418,""));throw to(oi(n,e)),Iu}function qp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[bn]=o,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)ye(To[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ke(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Tn(n,o.value,o.defaultValue,o.children),Ke(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||c_(n.textContent,a)?(o.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),o.onScroll!=null&&ye("scroll",n),o.onScrollEnd!=null&&ye("scrollend",n),o.onClick!=null&&(n.onclick=tc),n=!0):n=!1,n||cs(e)}function Yp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:zn=zn.return}}function Jr(e){if(e!==zn)return!1;if(!we)return Yp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&Qe&&cs(e),Yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Qe=yi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Qe=null}}else n===27?(n=Qe,za(e.type)?(e=sh,sh=null,Qe=e):Qe=n):Qe=zn?yi(e.stateNode.nextSibling):null;return!0}function $r(){Qe=zn=null,we=!1}function jp(){var e=ls;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),ls=null),e}function to(e){ls===null?ls=[e]:ls.push(e)}var Fu=$(null),us=null,Yi=null;function Sa(e,n,a){St(Fu,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=Fu.current,yt(Fu)}function Hu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Gu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Hu(h.return,a,e),o||(M=null);break t}h=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Hu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function eo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;Kn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===At.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Gu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){us=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Zp(us,e)}function Ml(e,n){return us===null&&fs(e),Zp(e,n)}function Zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(e===null)throw Error(s(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return a}var Cy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dy=r.unstable_scheduleCallback,Uy=r.unstable_NormalPriority,hn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vu(){return{controller:new Cy,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Dy(Uy,function(){e.controller.abort()})}var io=null,ku=0,ks=0,Xs=null;function Ly(e,n){if(io===null){var a=io=[];ku=0,ks=qf(),Xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,n.then(Kp,Kp),n}function Kp(){if(--ku===0&&io!==null){Xs!==null&&(Xs.status="fulfilled");var e=io;io=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ny(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ly(e,n),Qp!==null&&Qp(e,n)};var hs=$(null);function Xu(){var e=hs.current;return e!==null?e:We.pooledCache}function El(e,n){n===null?St(hs,hs.current):St(hs,n.pool)}function Jp(){var e=Xu();return e===null?null:{parent:hn._currentValue,pool:e}}var ao=Error(s(460)),$p=Error(s(474)),bl=Error(s(542)),Wu={then:function(){}};function tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tl(){}function em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Tl,Tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e;default:if(typeof n.status=="string")n.then(Tl,Tl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e}throw so=n,ao}}var so=null;function nm(){if(so===null)throw Error(s(459));var e=so;return so=null,e}function im(e){if(e===ao||e===bl)throw Error(s(483))}var Ma=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),kp(e,null,a),n}return gl(e,o,n,a),_l(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,re(e,a)}}function ju(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Zu=!1;function oo(){if(Zu){var e=Xs;if(e!==null)throw e}}function lo(e,n,a,o){Zu=!1;var u=e.updateQueue;Ma=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,et=I.next;I.next=null,M===null?h=et:M.next=et,M=I;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==M&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=I))}if(h!==null){var vt=u.baseState;M=0,dt=et=I=null,A=h;do{var it=A.lane&-536870913,at=it!==A.lane;if(at?(Me&it)===it:(o&it)===it){it!==0&&it===ks&&(Zu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,Jt=A;it=n;var Ie=a;switch(Jt.tag){case 1:if(ie=Jt.payload,typeof ie=="function"){vt=ie.call(Ie,vt,it);break t}vt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=Jt.payload,it=typeof ie=="function"?ie.call(Ie,vt,it):ie,it==null)break t;vt=g({},vt,it);break t;case 2:Ma=!0}}it=A.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=u.callbacks,at===null?u.callbacks=[it]:at.push(it))}else at={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=at,I=vt):dt=dt.next=at,M|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;at=A,A=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);dt===null&&(I=vt),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),La|=M,e.lanes=M,e.memoizedState=vt}}function am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)am(a[e],n)}var Ws=$(null),Al=$(0);function rm(e,n){e=ea,St(Al,e),St(Ws,n),ea=e|n.baseLanes}function Ku(){St(Al,ea),St(Ws,Ws.current)}function Qu(){ea=Al.current,yt(Ws),yt(Al)}var Ta=0,de=null,ze=null,on=null,Rl=!1,qs=!1,ds=!1,wl=0,co=0,Ys=null,Oy=0;function en(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,h){return Ta=h,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?km:Xm,ds=!1,h=a(o,u),ds=!1,qs&&(h=lm(n,a,o,u)),om(e),h}function om(e){P.H=Ol;var n=ze!==null&&ze.next!==null;if(Ta=0,on=ze=de=null,Rl=!1,co=0,Ys=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&Sl(e)&&(xn=!0))}function lm(e,n,a,o){de=e;var u=0;do{if(qs&&(Ys=null),co=0,qs=!1,25<=u)throw Error(s(301));if(u+=1,on=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Gy,h=n(a,o)}while(qs);return h}function Py(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(de.flags|=1024),n}function tf(){var e=wl!==0;return wl=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}Ta=0,on=ze=de=null,qs=!1,co=wl=0,Ys=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?de.memoizedState=on=e:on=on.next=e,on}function ln(){if(ze===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=on===null?de.memoizedState:on.next;if(n!==null)on=n,ze=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},on===null?de.memoizedState=on=e:on=on.next=e}return on}function af(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,Ys===null&&(Ys=[]),e=em(Ys,e,n),n=de,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?km:Xm),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===U)return Ln(e)}throw Error(s(438,String(e)))}function sf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=af(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Zi(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=ln();return rf(n,ze,e)}function rf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=M=null,I=null,et=n,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(Me&vt)===vt:(Ta&vt)===vt){var it=et.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===ks&&(dt=!0);else if((Ta&it)===it){et=et.next,it===ks&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(A=I=vt,M=h):I=I.next=vt,de.lanes|=it,La|=it;vt=et.action,ds&&a(h,vt),h=et.hasEagerState?et.eagerState:a(h,vt)}else it={lane:vt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(A=I=it,M=h):I=I.next=it,de.lanes|=vt,La|=vt;et=et.next}while(et!==null&&et!==n);if(I===null?M=h:I.next=A,!Kn(h,e.memoizedState)&&(xn=!0,dt&&(a=Xs,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function of(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);Kn(h,n.memoizedState)||(xn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function cm(e,n,a){var o=de,u=ln(),h=we;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Kn((ze||u).memoizedState,a);M&&(u.memoizedState=a,xn=!0),u=u.queue;var A=hm.bind(null,o,u,e);if(fo(2048,8,A,[e]),u.getSnapshot!==n||M||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,js(9,Ul(),fm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));h||(Ta&124)!==0||um(o,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=af(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function pm(e){var n=Fs(e,2);n!==null&&ni(n,e,2)}function lf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),ds){Et(!0);try{a()}finally{Et(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,rf(e,ze,typeof o=="function"?o:Zi)}function zy(e,n,a,o,u){if(Nl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};P.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,gm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=P.T,M={};P.T=M;try{var A=a(u,o),I=P.S;I!==null&&I(M,A),_m(e,n,A)}catch(et){cf(e,n,et)}finally{P.T=h}}else try{h=a(u,o),_m(e,n,h)}catch(et){cf(e,n,et)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(e,n,o)},function(o){return cf(e,n,o)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function cf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==o)}e.action=null}function ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function xm(e,n){return n}function Sm(e,n){if(we){var a=We.formState;if(a!==null){t:{var o=de;if(we){if(Qe){e:{for(var u=Qe,h=Ci;u.nodeType!==8;){if(!h){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qe=yi(u.nextSibling),o=u.data==="F!";break t}}cs(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,de,o),o.dispatch=a,o=lf(!1),h=pf.bind(null,de,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=zy.bind(null,de,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Mm(e){var n=ln();return Em(n,ze,e)}function Em(e,n,a){if(n=rf(e,n,xm)[0],e=Dl(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(M){throw M===ao?bl:M}else o=n;n=ln();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,js(9,Ul(),By.bind(null,u,a),null)),[o,h,e]}function By(e,n){e.action=n}function bm(e){var n=ln(),a=ze;if(a!==null)return Em(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function js(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=af(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ul(){return{destroy:void 0,resource:void 0}}function Tm(){return ln().memoizedState}function Ll(e,n,a,o){var u=Gn();o=o===void 0?null:o,de.flags|=e,u.memoizedState=js(1|n,Ul(),a,o)}function fo(e,n,a,o){var u=ln();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&Ju(o,ze.memoizedState.deps)?u.memoizedState=js(n,h,a,o):(de.flags|=e,u.memoizedState=js(1|n,h,a,o))}function Am(e,n){Ll(8390656,8,e,n)}function Rm(e,n){fo(2048,8,e,n)}function wm(e,n){return fo(4,2,e,n)}function Cm(e,n){return fo(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,fo(4,4,Dm.bind(null,n,e),a)}function uf(){}function Lm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),ds){Et(!0);try{e()}finally{Et(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(Ta&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=zg(),de.lanes|=e,La|=e,a)}function Om(e,n,a,o){return Kn(a,n)?a:Ws.current!==null?(e=ff(e,a,o),Kn(e,n)||(xn=!0),e):(Ta&42)===0?(xn=!0,e.memoizedState=a):(e=zg(),de.lanes|=e,La|=e,n)}function Pm(e,n,a,o,u){var h=q.p;q.p=h!==0&&8>h?h:8;var M=P.T,A={};P.T=A,pf(e,!1,n,a);try{var I=u(),et=P.S;if(et!==null&&et(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=Ny(I,o);ho(e,n,dt,ei(e))}else ho(e,n,o,ei(e))}catch(vt){ho(e,n,{then:function(){},status:"rejected",reason:vt},ei())}finally{q.p=h,P.T=M}}function Iy(){}function hf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=zm(e).queue;Pm(e,u,n,X,a===null?Iy:function(){return Bm(e),a(o)})}function zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bm(e){var n=zm(e).next.queue;ho(e,n,{},ei())}function df(){return Ln(Uo)}function Im(){return ln().memoizedState}function Fm(){return ln().memoizedState}function Fy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ea(a);var o=ba(n,e,a);o!==null&&(ni(o,n,a),ro(o,n,a)),n={cache:Vu()},e.payload=n;return}n=n.return}}function Hy(e,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Gm(n,a):(a=Lu(e,n,a,o),a!==null&&(ni(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=ei();ho(e,n,a,o)}function ho(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Gm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,A=h(M,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,M))return gl(e,n,u,0),We===null&&ml(),!1}catch{}finally{}if(a=Lu(e,n,u,o),a!==null)return ni(a,e,o),Vm(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:qf(),action:o,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(s(479))}else n=Lu(e,a,o,2),n!==null&&ni(n,e,2)}function Nl(e){var n=e.alternate;return e===de||n!==null&&n===de}function Gm(e,n){qs=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,re(e,a)}}var Ol={readContext:Ln,use:Cl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},km={readContext:Ln,use:Cl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(ds){Et(!0);try{e()}finally{Et(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(ds){Et(!0);try{a(n)}finally{Et(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Hy.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=lf(e);var n=e.queue,a=Hm.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=Gn();return ff(a,e,n)},useTransition:function(){var e=lf(!1);return e=Pm.bind(null,de,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Gn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Me&124)!==0||um(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Am(hm.bind(null,o,h,e),[e]),o.flags|=2048,js(9,Ul(),fm.bind(null,o,h,a,n),null),a},useId:function(){var e=Gn(),n=We.identifierPrefix;if(we){var a=qi,o=Wi;a=(o&~(1<<32-wt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Oy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:Sm,useActionState:Sm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:sf,useCacheRefresh:function(){return Gn().memoizedState=Fy.bind(null,de)}},Xm={readContext:Ln,use:Cl,useCallback:Lm,useContext:Ln,useEffect:Rm,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Nm,useReducer:Dl,useRef:Tm,useState:function(){return Dl(Zi)},useDebugValue:uf,useDeferredValue:function(e,n){var a=ln();return Om(a,ze.memoizedState,e,n)},useTransition:function(){var e=Dl(Zi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:cm,useId:Im,useHostTransitionStatus:df,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=ln();return mm(a,ze,e,n)},useMemoCache:sf,useCacheRefresh:Fm},Gy={readContext:Ln,use:Cl,useCallback:Lm,useContext:Ln,useEffect:Rm,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Nm,useReducer:of,useRef:Tm,useState:function(){return of(Zi)},useDebugValue:uf,useDeferredValue:function(e,n){var a=ln();return ze===null?ff(a,e,n):Om(a,ze.memoizedState,e,n)},useTransition:function(){var e=of(Zi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:cm,useId:Im,useHostTransitionStatus:df,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=ln();return ze!==null?mm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:sf,useCacheRefresh:Fm},Zs=null,po=0;function Pl(e){var n=po;return po+=1,Zs===null&&(Zs=[]),em(Zs,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wm(e){var n=e._init;return n(e._payload)}function qm(e){function n(j,k){if(e){var J=j.deletions;J===null?(j.deletions=[k],j.flags|=16):J.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Xi(j,k),j.index=0,j.sibling=null,j}function h(j,k,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<k?(j.flags|=67108866,k):J):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,J,pt){return k===null||k.tag!==6?(k=Ou(J,j.mode,pt),k.return=j,k):(k=u(k,J),k.return=j,k)}function I(j,k,J,pt){var Ht=J.type;return Ht===E?dt(j,k,J.props.children,pt,J.key):k!==null&&(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===V&&Wm(Ht)===k.type)?(k=u(k,J.props),mo(k,J),k.return=j,k):(k=vl(J.type,J.key,J.props,null,j.mode,pt),mo(k,J),k.return=j,k)}function et(j,k,J,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Pu(J,j.mode,pt),k.return=j,k):(k=u(k,J.children||[]),k.return=j,k)}function dt(j,k,J,pt,Ht){return k===null||k.tag!==7?(k=ss(J,j.mode,pt,Ht),k.return=j,k):(k=u(k,J),k.return=j,k)}function vt(j,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ou(""+k,j.mode,J),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return J=vl(k.type,k.key,k.props,null,j.mode,J),mo(J,k),J.return=j,J;case S:return k=Pu(k,j.mode,J),k.return=j,k;case V:var pt=k._init;return k=pt(k._payload),vt(j,k,J)}if(ut(k)||st(k))return k=ss(k,j.mode,J,null),k.return=j,k;if(typeof k.then=="function")return vt(j,Pl(k),J);if(k.$$typeof===U)return vt(j,Ml(j,k),J);zl(j,k)}return null}function it(j,k,J,pt){var Ht=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:A(j,k,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Ht?I(j,k,J,pt):null;case S:return J.key===Ht?et(j,k,J,pt):null;case V:return Ht=J._init,J=Ht(J._payload),it(j,k,J,pt)}if(ut(J)||st(J))return Ht!==null?null:dt(j,k,J,pt,null);if(typeof J.then=="function")return it(j,k,Pl(J),pt);if(J.$$typeof===U)return it(j,k,Ml(j,J),pt);zl(j,J)}return null}function at(j,k,J,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,A(k,j,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return j=j.get(pt.key===null?J:pt.key)||null,I(k,j,pt,Ht);case S:return j=j.get(pt.key===null?J:pt.key)||null,et(k,j,pt,Ht);case V:var pe=pt._init;return pt=pe(pt._payload),at(j,k,J,pt,Ht)}if(ut(pt)||st(pt))return j=j.get(J)||null,dt(k,j,pt,Ht,null);if(typeof pt.then=="function")return at(j,k,J,Pl(pt),Ht);if(pt.$$typeof===U)return at(j,k,J,Ml(k,pt),Ht);zl(k,pt)}return null}function ie(j,k,J,pt){for(var Ht=null,pe=null,kt=k,ee=k=0,Mn=null;kt!==null&&ee<J.length;ee++){kt.index>ee?(Mn=kt,kt=null):Mn=kt.sibling;var Ae=it(j,kt,J[ee],pt);if(Ae===null){kt===null&&(kt=Mn);break}e&&kt&&Ae.alternate===null&&n(j,kt),k=h(Ae,k,ee),pe===null?Ht=Ae:pe.sibling=Ae,pe=Ae,kt=Mn}if(ee===J.length)return a(j,kt),we&&os(j,ee),Ht;if(kt===null){for(;ee<J.length;ee++)kt=vt(j,J[ee],pt),kt!==null&&(k=h(kt,k,ee),pe===null?Ht=kt:pe.sibling=kt,pe=kt);return we&&os(j,ee),Ht}for(kt=o(kt);ee<J.length;ee++)Mn=at(kt,j,ee,J[ee],pt),Mn!==null&&(e&&Mn.alternate!==null&&kt.delete(Mn.key===null?ee:Mn.key),k=h(Mn,k,ee),pe===null?Ht=Mn:pe.sibling=Mn,pe=Mn);return e&&kt.forEach(function(Ga){return n(j,Ga)}),we&&os(j,ee),Ht}function Jt(j,k,J,pt){if(J==null)throw Error(s(151));for(var Ht=null,pe=null,kt=k,ee=k=0,Mn=null,Ae=J.next();kt!==null&&!Ae.done;ee++,Ae=J.next()){kt.index>ee?(Mn=kt,kt=null):Mn=kt.sibling;var Ga=it(j,kt,Ae.value,pt);if(Ga===null){kt===null&&(kt=Mn);break}e&&kt&&Ga.alternate===null&&n(j,kt),k=h(Ga,k,ee),pe===null?Ht=Ga:pe.sibling=Ga,pe=Ga,kt=Mn}if(Ae.done)return a(j,kt),we&&os(j,ee),Ht;if(kt===null){for(;!Ae.done;ee++,Ae=J.next())Ae=vt(j,Ae.value,pt),Ae!==null&&(k=h(Ae,k,ee),pe===null?Ht=Ae:pe.sibling=Ae,pe=Ae);return we&&os(j,ee),Ht}for(kt=o(kt);!Ae.done;ee++,Ae=J.next())Ae=at(kt,j,ee,Ae.value,pt),Ae!==null&&(e&&Ae.alternate!==null&&kt.delete(Ae.key===null?ee:Ae.key),k=h(Ae,k,ee),pe===null?Ht=Ae:pe.sibling=Ae,pe=Ae);return e&&kt.forEach(function(Vx){return n(j,Vx)}),we&&os(j,ee),Ht}function Ie(j,k,J,pt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Ht=J.key;k!==null;){if(k.key===Ht){if(Ht=J.type,Ht===E){if(k.tag===7){a(j,k.sibling),pt=u(k,J.props.children),pt.return=j,j=pt;break t}}else if(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===V&&Wm(Ht)===k.type){a(j,k.sibling),pt=u(k,J.props),mo(pt,J),pt.return=j,j=pt;break t}a(j,k);break}else n(j,k);k=k.sibling}J.type===E?(pt=ss(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=vl(J.type,J.key,J.props,null,j.mode,pt),mo(pt,J),pt.return=j,j=pt)}return M(j);case S:t:{for(Ht=J.key;k!==null;){if(k.key===Ht)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(j,k.sibling),pt=u(k,J.children||[]),pt.return=j,j=pt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}pt=Pu(J,j.mode,pt),pt.return=j,j=pt}return M(j);case V:return Ht=J._init,J=Ht(J._payload),Ie(j,k,J,pt)}if(ut(J))return ie(j,k,J,pt);if(st(J)){if(Ht=st(J),typeof Ht!="function")throw Error(s(150));return J=Ht.call(J),Jt(j,k,J,pt)}if(typeof J.then=="function")return Ie(j,k,Pl(J),pt);if(J.$$typeof===U)return Ie(j,k,Ml(j,J),pt);zl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(j,k.sibling),pt=u(k,J),pt.return=j,j=pt):(a(j,k),pt=Ou(J,j.mode,pt),pt.return=j,j=pt),M(j)):a(j,k)}return function(j,k,J,pt){try{po=0;var Ht=Ie(j,k,J,pt);return Zs=null,Ht}catch(kt){if(kt===ao||kt===bl)throw kt;var pe=Qn(29,kt,null,j.mode);return pe.lanes=pt,pe.return=j,pe}finally{}}}var Ks=qm(!0),Ym=qm(!1),fi=$(null),Di=null;function Aa(e){var n=e.alternate;St(dn,dn.current&1),St(fi,e),Di===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(Di=e)}function jm(e){if(e.tag===22){if(St(dn,dn.current),St(fi,e),Di===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Di=e)}}else Ra()}function Ra(){St(dn,dn.current),St(fi,fi.current)}function Ki(e){yt(fi),Di===e&&(Di=null),yt(dn)}var dn=$(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ah(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(ni(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(ni(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,a),n!==null&&(ni(n,e,a),ro(n,e,a))}};function Zm(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,o)||!Kr(u,h):!0}function Km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&gf.enqueueReplaceState(n,n.state,null)}function ps(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qm(e){Il(e)}function Jm(e){console.error(e)}function $m(e){Il(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function _f(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function eg(e){return e=Ea(e),e.tag=3,e}function ng(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){tg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){tg(n,a,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Vy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 13:return Di===null?Gf():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Wu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Wu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(s(435,a.tag))}return kf(e,o,u),Gf(),!1}if(we)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(e=Error(s(422),{cause:o}),to(oi(e,a)))):(o!==Iu&&(n=Error(s(423),{cause:o}),to(oi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=oi(o,a),u=_f(e.stateNode,o,u),ju(e,u),Je!==4&&(Je=2)),!1;var h=Error(s(520),{cause:o});if(h=oi(h,a),Mo===null?Mo=[h]:Mo.push(h),Je!==4&&(Je=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=_f(a.stateNode,o,e),ju(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Na===null||!Na.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=eg(u),ng(u,e,a,o),ju(a,u),!1}a=a.return}while(a!==null);return!1}var ig=Error(s(461)),xn=!1;function An(e,n,a,o){n.child=e===null?Ym(n,null,a,o):Ks(n,e.child,a,o)}function ag(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return fs(n),o=$u(e,n,a,M,h,u),A=tf(),e!==null&&!xn?(ef(e,n,u),Qi(e,n,u)):(we&&A&&zu(n),n.flags|=1,An(e,n,o,u),n.child)}function sg(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,rg(e,n,h,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Tf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(M,o)&&e.ref===n.ref)return Qi(e,n,u)}return n.flags|=1,e=Xi(h,o),e.ref=n.ref,e.return=n,n.child=e}function rg(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Kr(h,o)&&e.ref===n.ref)if(xn=!1,n.pendingProps=o=h,Tf(e,u))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Qi(e,n,u)}return vf(e,n,a,o,u)}function og(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return lg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,h!==null?h.cachePool:null),h!==null?rm(n,h):Ku(),jm(n);else return n.lanes=n.childLanes=536870912,lg(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(El(n,h.cachePool),rm(n,h),Ra(),n.memoizedState=null):(e!==null&&El(n,null),Ku(),Ra());return An(e,n,u,a),n.child}function lg(e,n,a,o){var u=Xu();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&El(n,null),Ku(),jm(n),e!==null&&eo(e,n,o,!0),null}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function vf(e,n,a,o,u){return fs(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!xn?(ef(e,n,u),Qi(e,n,u)):(we&&o&&zu(n),n.flags|=1,An(e,n,a,u),n.child)}function cg(e,n,a,o,u,h){return fs(n),n.updateQueue=null,a=lm(n,o,a,u),om(e),o=tf(),e!==null&&!xn?(ef(e,n,h),Qi(e,n,h)):(we&&o&&zu(n),n.flags|=1,An(e,n,a,h),n.child)}function ug(e,n,a,o,u){if(fs(n),n.stateNode===null){var h=Hs,M=a.contextType;typeof M=="object"&&M!==null&&(h=Ln(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=gf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},qu(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Ln(M):Hs,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(mf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&gf.enqueueReplaceState(h,h.state,null),lo(n,o,h,u),oo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,I=ps(a,A);h.props=I;var et=h.context,dt=a.contextType;M=Hs,typeof dt=="object"&&dt!==null&&(M=Ln(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||et!==M)&&Km(n,h,o,M),Ma=!1;var it=n.memoizedState;h.state=it,lo(n,o,h,u),oo(),et=n.memoizedState,A||it!==et||Ma?(typeof vt=="function"&&(mf(n,a,vt,o),et=n.memoizedState),(I=Ma||Zm(n,a,I,o,it,et,M))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=M,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Yu(e,n),M=n.memoizedProps,dt=ps(a,M),h.props=dt,vt=n.pendingProps,it=h.context,et=a.contextType,I=Hs,typeof et=="object"&&et!==null&&(I=Ln(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==vt||it!==I)&&Km(n,h,o,I),Ma=!1,it=n.memoizedState,h.state=it,lo(n,o,h,u),oo();var at=n.memoizedState;M!==vt||it!==at||Ma||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof A=="function"&&(mf(n,a,A,o),at=n.memoizedState),(dt=Ma||Zm(n,a,dt,o,it,at,I)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,at,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,at,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),h.props=o,h.state=at,h.context=I,o=dt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Hl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ks(n,e.child,null,u),n.child=Ks(n,null,a,u)):An(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Qi(e,n,u),e}function fg(e,n,a,o){return $r(),n.flags|=256,An(e,n,a,o),n.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:Jp()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function hg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Aa(n):Ra(),we){var A=Qe,I;if(I=A){t:{for(I=A,A=Ci;I.nodeType!==8;){if(!A){A=null;break t}if(I=yi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(n.memoizedState={dehydrated:A,treeContext:rs!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},I=Qn(18,null,null,0),I.stateNode=A,I.return=n,n.child=I,zn=n,Qe=null,I=!0):I=!1}I||cs(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return ah(A)?n.lanes=32:n.lanes=536870912,null;Ki(n)}return A=o.children,o=o.fallback,u?(Ra(),u=n.mode,A=Gl({mode:"hidden",children:A},u),o=ss(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=xf(a),u.childLanes=Sf(e,M,a),n.memoizedState=yf,o):(Aa(n),Mf(n,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(Aa(n),n.flags&=-257,n=Ef(e,n,a)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),u=o.fallback,A=n.mode,o=Gl({mode:"visible",children:o.children},A),u=ss(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Ks(n,e.child,null,a),o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(e,M,a),n.memoizedState=yf,n=u);else if(Aa(n),ah(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(s(419)),o.stack="",o.digest=M,to({value:o,source:null,stack:null}),n=Ef(e,n,a)}else if(xn||eo(e,n,a,!1),M=(a&e.childLanes)!==0,xn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:ke(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Fs(e,o),ni(M,e,o),ig;A.data==="$?"||Gf(),n=Ef(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Qe=yi(A.nextSibling),zn=n,we=!0,ls=null,Ci=!1,e!==null&&(ci[ui++]=Wi,ci[ui++]=qi,ci[ui++]=rs,Wi=e.id,qi=e.overflow,rs=n),n=Mf(n,o.children),n.flags|=4096);return n}return u?(Ra(),u=o.fallback,A=n.mode,I=e.child,et=I.sibling,o=Xi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?u=Xi(et,u):(u=ss(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=xf(a):(I=A.cachePool,I!==null?(et=hn._currentValue,I=I.parent!==et?{parent:et,pool:et}:I):I=Jp(),A={baseLanes:A.baseLanes|a,cachePool:I}),u.memoizedState=A,u.childLanes=Sf(e,M,a),n.memoizedState=yf,o):(Aa(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Mf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ef(e,n,a){return Ks(n,e.child,null,a),e=Mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Hu(e.return,n,a)}function bf(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function pg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(An(e,n,o.children,a),o=dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,a,n);else if(e.tag===19)dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(dn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}bf(n,!0,a,null,h);break;case"together":bf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Tf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function ky(e,n,a){switch(n.tag){case 3:Rt(n,n.stateNode.containerInfo),Sa(n,hn,e.memoizedState.cache),$r();break;case 27:case 5:Gt(n);break;case 4:Rt(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hg(e,n,a):(Aa(n),e=Qi(e,n,a),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return pg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(dn,dn.current),o)break;return null;case 22:case 23:return n.lanes=0,og(e,n,a);case 24:Sa(n,hn,e.memoizedState.cache)}return Qi(e,n,a)}function mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!Tf(e,a)&&(n.flags&128)===0)return xn=!1,ky(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,we&&(n.flags&1048576)!==0&&Wp(n,xl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Nu(o)?(e=ps(o,e),n.tag=1,n=ug(null,n,o,e,a)):(n.tag=0,n=vf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===R){n.tag=11,n=ag(null,n,o,e,a);break t}else if(u===B){n.tag=14,n=sg(null,n,o,e,a);break t}}throw n=ht(o)||o,Error(s(306,n,""))}}return n;case 0:return vf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ps(o,n.pendingProps),ug(e,n,o,u,a);case 3:t:{if(Rt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Yu(e,n),lo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Sa(n,hn,o),o!==h.cache&&Gu(n,[hn],a,!0),oo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=fg(e,n,o,a);break t}else if(o!==u){u=oi(Error(s(424)),n),to(u),n=fg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=yi(e.firstChild),zn=n,we=!0,ls=null,Ci=!0,a=Ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($r(),o===u){n=Qi(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=y_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=ec(ot.current).createElement(a),o[un]=n,o[bn]=e,wn(o,a,e),rn(o),n.stateNode=o):n.memoizedState=y_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&we&&(o=n.stateNode=g_(n.type,n.pendingProps,ot.current),zn=n,Ci=!0,u=Qe,za(n.type)?(sh=u,Qe=yi(o.firstChild)):Qe=u),An(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Qe)&&(o=_x(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,zn=n,Qe=yi(o.firstChild),Ci=!1,u=!0):u=!1),u||cs(n)),Gt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,eh(u,h)?o=null:M!==null&&eh(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,Py,null,null,a),Uo._currentValue=u),Hl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Qe)&&(a=vx(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,zn=n,Qe=null,e=!0):e=!1),e||cs(n)),null;case 13:return hg(e,n,a);case 4:return Rt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ks(n,null,o,a):An(e,n,o,a),n.child;case 11:return ag(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fs(n),u=Ln(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return sg(e,n,n.type,n.pendingProps,a);case 15:return rg(e,n,n.type,n.pendingProps,a);case 19:return pg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Gl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Xi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return og(e,n,a);case 24:return fs(n),o=Ln(hn),e===null?(u=Xu(),u===null&&(u=We,h=Vu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},qu(n),Sa(n,hn,u)):((e.lanes&a)!==0&&(Yu(e,n),lo(n,null,null,a),oo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,hn,o)):(o=h.cache,Sa(n,hn,o),o!==u.cache&&Gu(n,[hn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ji(e){e.flags|=4}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!b_(n)){if(n=fi.current,n!==null&&((Me&4194048)===Me?Di!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Di))throw so=Wu,$p;e.flags|=8192}}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Nt():536870912,e.lanes|=n,tr|=n)}function go(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Xy(e,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(hn),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Ji(n),a!==null?(Ze(n),gg(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ji(n),Ze(n),gg(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ji(n),Ze(n),n.flags&=-16777217),null;case 27:Oe(n),a=ot.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Q.current,Jr(n)?qp(n):(e=g_(u,o,a),n.stateNode=e,Ji(n))}return Ze(n),null;case 5:if(Oe(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(e=Q.current,Jr(n))qp(n);else{switch(u=ec(ot.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[un]=n,e[bn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(wn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ji(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ot.current,Jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||c_(e.nodeValue,a)),e||cs(n)}else e=ec(e).createTextNode(o),e[un]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else $r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=jp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ki(n),n):(Ki(n),null)}if(Ki(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Ze(n),null;case 4:return Wt(),e===null&&Kf(n.stateNode.containerInfo),Ze(n),null;case 10:return ji(n.type),Ze(n),null;case 19:if(yt(dn),u=n.memoizedState,u===null)return Ze(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)go(u,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Bl(e),h!==null){for(n.flags|=128,go(u,!1),e=h.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xp(a,e),a=a.sibling;return St(dn,dn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Qt()>Wl&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304)}else{if(!o)if(e=Bl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),go(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!we)return Ze(n),null}else 2*Qt()-u.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Qt(),n.sibling=null,e=dn.current,St(dn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return Ki(n),Qu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&yt(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(hn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wy(e,n){switch(Bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(hn),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Oe(n),null;case 13:if(Ki(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$r()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yt(dn),null;case 4:return Wt(),null;case 10:return ji(n.type),null;case 22:case 23:return Ki(n),Qu(),e!==null&&yt(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(hn),null;case 25:return null;default:return null}}function _g(e,n){switch(Bu(n),n.tag){case 3:ji(hn),Wt();break;case 26:case 27:case 5:Oe(n);break;case 4:Wt();break;case 13:Ki(n);break;case 19:yt(dn);break;case 10:ji(n.type);break;case 22:case 23:Ki(n),Qu(),e!==null&&yt(hs);break;case 24:ji(hn)}}function _o(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){Ve(n,n.return,A)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var I=a,et=A;try{et()}catch(dt){Ve(u,I,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ve(n,n.return,dt)}}function vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{sm(n,a)}catch(o){Ve(e,e.return,o)}}}function yg(e,n,a){a.props=ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Ui(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function xg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Af(e,n,a){try{var o=e.stateNode;hx(o,e.type,a,n),o[bn]=n}catch(u){Ve(e,e.return,u)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=tc));else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(wf(e,n,a),e=e.sibling;e!==null;)wf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function Mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[un]=e,n[bn]=a}catch(h){Ve(e,e.return,h)}}var $i=!1,nn=!1,Cf=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function qy(e,n){if(e=e.containerInfo,$f=oc,e=Op(e),Au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,A=-1,I=-1,et=0,dt=0,vt=e,it=null;e:for(;;){for(var at;vt!==a||u!==0&&vt.nodeType!==3||(A=M+u),vt!==h||o!==0&&vt.nodeType!==3||(I=M+o),vt.nodeType===3&&(M+=vt.nodeValue.length),(at=vt.firstChild)!==null;)it=vt,vt=at;for(;;){if(vt===e)break e;if(it===a&&++et===u&&(A=M),it===h&&++dt===o&&(I=M),(at=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=at}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:e,selectionRange:a},oc=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ie=ps(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ie,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Ve(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function bg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(e,a),o&4&&_o(5,a);break;case 1:if(Ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ve(a,a.return,M)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ve(a,a.return,M)}}o&64&&vg(a),o&512&&vo(a,a.return);break;case 3:if(Ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(e,n)}catch(M){Ve(a,a.return,M)}}break;case 27:n===null&&o&4&&Mg(a);case 26:case 5:Ca(e,a),n===null&&o&4&&xg(a),o&512&&vo(a,a.return);break;case 12:Ca(e,a);break;case 13:Ca(e,a),o&4&&Rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ex.bind(null,a),yx(e,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||nn,u=$i;var h=nn;$i=o,(nn=n)&&!h?Da(e,a,(a.subtreeFlags&8772)!==0):Ca(e,a),$i=u,nn=h}break;case 30:break;default:Ca(e,a)}}function Tg(e){var n=e.alternate;n!==null&&(e.alternate=null,Tg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&_a(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Vn=!1;function ta(e,n,a){for(a=a.child;a!==null;)Ag(e,n,a),a=a.sibling}function Ag(e,n,a){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:nn||Ui(a,n),ta(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ui(a,n);var o=Ye,u=Vn;za(a.type)&&(Ye=a.stateNode,Vn=!1),ta(e,n,a),Ro(a.stateNode),Ye=o,Vn=u;break;case 5:nn||Ui(a,n);case 6:if(o=Ye,u=Vn,Ye=null,ta(e,n,a),Ye=o,Vn=u,Ye!==null)if(Vn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Ve(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Ve(a,n,h)}break;case 18:Ye!==null&&(Vn?(e=Ye,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Po(e)):p_(Ye,a.stateNode));break;case 4:o=Ye,u=Vn,Ye=a.stateNode.containerInfo,Vn=!0,ta(e,n,a),Ye=o,Vn=u;break;case 0:case 11:case 14:case 15:nn||wa(2,a,n),nn||wa(4,a,n),ta(e,n,a);break;case 1:nn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&yg(a,n,o)),ta(e,n,a);break;case 21:ta(e,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,ta(e,n,a),nn=o;break;default:ta(e,n,a)}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Po(e)}catch(a){Ve(n,n.return,a)}}function Yy(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Eg),n;default:throw Error(s(435,e.tag))}}function Df(e,n){var a=Yy(e);n.forEach(function(o){var u=nx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){Ye=A.stateNode,Vn=!1;break t}break;case 5:Ye=A.stateNode,Vn=!1;break t;case 3:case 4:Ye=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(Ye===null)throw Error(s(160));Ag(h,M,u),Ye=null,Vn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wg(n,e),n=n.sibling}var vi=null;function wg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),$n(e),o&4&&(wa(3,e,e.return),_o(3,e),wa(5,e,e.return));break;case 1:Jn(n,e),$n(e),o&512&&(nn||a===null||Ui(a,a.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Jn(n,e),$n(e),o&512&&(nn||a===null||Ui(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ga]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),wn(h,o,a),h[un]=e,rn(h),o=h;break t;case"link":var M=M_("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(h=M[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=M_("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(h=M[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}h=u.createElement(o),wn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[un]=e,rn(h),o=h}e.stateNode=o}else E_(u,e.type,e.stateNode);else e.stateNode=S_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?E_(u,e.type,e.stateNode):S_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Af(e,e.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,e),$n(e),o&512&&(nn||a===null||Ui(a,a.return)),a!==null&&o&4&&Af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,e),$n(e),o&512&&(nn||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{wi(u,"")}catch(at){Ve(e,e.return,at)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Af(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Cf=!0);break;case 6:if(Jn(n,e),$n(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Ve(e,e.return,at)}}break;case 3:if(ac=null,u=vi,vi=nc(n.containerInfo),Jn(n,e),vi=u,$n(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Po(n.containerInfo)}catch(at){Ve(e,e.return,at)}Cf&&(Cf=!1,Cg(e));break;case 4:o=vi,vi=nc(e.stateNode.containerInfo),Jn(n,e),$n(e),vi=o;break;case 12:Jn(n,e),$n(e);break;case 13:Jn(n,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zf=Qt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Df(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,et=$i,dt=nn;if($i=et||u,nn=dt||I,Jn(n,e),nn=dt,$i=et,$n(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||$i||nn||ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=I.stateNode;var vt=I.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){Ve(I,I.return,at)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(at){Ve(I,I.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Df(e,a))));break;case 19:Jn(n,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Df(e,o)));break;case 30:break;case 21:break;default:Jn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Sg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Rf(e);kl(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(wi(M,""),a.flags&=-33);var A=Rf(e);kl(e,A,M);break;case 3:case 4:var I=a.stateNode.containerInfo,et=Rf(e);wf(e,et,I);break;default:throw Error(s(161))}}catch(dt){Ve(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bg(e,n.alternate,n),n=n.sibling}function ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),ms(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&yg(n,n.return,a),ms(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ui(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}e=e.sibling}}function Da(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Da(u,h,a),_o(4,h);break;case 1:if(Da(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ve(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)am(I[u],A)}catch(et){Ve(o,o.return,et)}}a&&M&64&&vg(h),vo(h,h.return);break;case 27:Mg(h);case 26:case 5:Da(u,h,a),a&&o===null&&M&4&&xg(h),vo(h,h.return);break;case 12:Da(u,h,a);break;case 13:Da(u,h,a),a&&M&4&&Rg(u,h);break;case 22:h.memoizedState===null&&Da(u,h,a),vo(h,h.return);break;case 30:break;default:Da(u,h,a)}n=n.sibling}}function Uf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dg(e,n,a,o),n=n.sibling}function Dg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&_o(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,A=h.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ve(n,n.return,I)}}else Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Li(e,n,a,o):yo(e,n):h._visibility&2?Li(e,n,a,o):(h._visibility|=2,Qs(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Uf(M,n);break;case 24:Li(e,n,a,o),u&2048&&Lf(n.alternate,n);break;default:Li(e,n,a,o)}}function Qs(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,A=a,I=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:Qs(h,M,A,I,u),_o(8,M);break;case 23:break;case 22:var dt=M.stateNode;M.memoizedState!==null?dt._visibility&2?Qs(h,M,A,I,u):yo(h,M):(dt._visibility|=2,Qs(h,M,A,I,u)),u&&et&2048&&Uf(M.alternate,M);break;case 24:Qs(h,M,A,I,u),u&&et&2048&&Lf(M.alternate,M);break;default:Qs(h,M,A,I,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Uf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Lf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var xo=8192;function Js(e){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 26:Js(e),e.flags&xo&&e.memoizedState!==null&&Lx(vi,e.memoizedState,e.memoizedProps);break;case 5:Js(e);break;case 3:case 4:var n=vi;vi=nc(e.stateNode.containerInfo),Js(e),vi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,Js(e),xo=n):Js(e));break;default:Js(e)}}function Lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Og(o,e)}Lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ng(e),e=e.sibling}function Ng(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&wa(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):So(e);break;default:So(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Og(o,e)}Lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function Og(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(Tg(o),o===a){Sn=null;break t}if(u!==null){u.return=h,Sn=u;break t}Sn=h}}}var jy={getCacheForType:function(e){var n=Ln(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Zy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,We=null,ve=null,Me=0,Le=0,ti=null,Ua=!1,$s=!1,Nf=!1,ea=0,Je=0,La=0,gs=0,Of=0,hi=0,tr=0,Mo=null,kn=null,Pf=!1,zf=0,Wl=1/0,ql=null,Na=null,Rn=0,Oa=null,er=null,nr=0,Bf=0,If=null,Pg=null,Eo=0,Ff=null;function ei(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(P.T!==null){var e=ks;return e!==0?e:qf()}return be()}function zg(){hi===0&&(hi=(Me&536870912)===0||we?W():536870912);var e=fi.current;return e!==null&&(e.flags|=32),hi}function ni(e,n,a){(e===We&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(ir(e,0),Pa(e,Me,hi,!1)),_t(e,a),((Ue&2)===0||e!==We)&&(e===We&&((Ue&2)===0&&(gs|=a),Je===4&&Pa(e,Me,hi,!1)),Ni(e))}function Bg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ae(e,n),u=o?Jy(e,n):Vf(e,n,!0),h=o;do{if(u===0){$s&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Ky(a)){u=Vf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=Mo;var I=A.current.memoizedState.isDehydrated;if(I&&(ir(A,M).flags|=256),M=Vf(A,M,!1),M!==2){if(Nf&&!I){A.errorRecoveryDisabledLanes|=h,gs|=h,u=4;break t}h=kn,kn=u,h!==null&&(kn===null?kn=h:kn.push.apply(kn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){ir(e,0),Pa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,hi,!Ua);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=zf+300-Qt(),10<u)){if(Pa(o,n,hi,!Ua),he(o,0,!0)!==0)break t;o.timeoutHandle=h_(Ig.bind(null,o,a,kn,ql,Pf,n,hi,gs,tr,Ua,h,2,-0,0),u);break t}Ig(o,a,kn,ql,Pf,n,hi,gs,tr,Ua,h,0,-0,0)}}break}while(!0);Ni(e)}function Ig(e,n,a,o,u,h,M,A,I,et,dt,vt,it,at){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:Ux},Ug(n),vt=Nx(),vt!==null)){e.cancelPendingCommit=vt(Wg.bind(null,e,n,h,a,o,u,M,A,I,dt,1,it,at)),Pa(e,h,M,!et);return}Wg(e,n,h,a,o,u,M,A,I)}function Ky(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Kn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~Of,n&=~gs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-wt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Ot(e,a,n)}function Yl(){return(Ue&6)===0?(bo(0),!1):!0}function Hf(){if(ve!==null){if(Le===0)var e=ve.return;else e=ve,Yi=us=null,nf(e),Zs=null,po=0,e=ve;for(;e!==null;)_g(e.alternate,e),e=e.return;ve=null}}function ir(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,px(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Hf(),We=e,ve=a=Xi(e.current,null),Me=n,Le=0,ti=null,Ua=!1,$s=ae(e,n),Nf=!1,tr=hi=Of=gs=La=Je=0,kn=Mo=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-wt(o),h=1<<u;n|=e[u],o&=~h}return ea=n,ml(),a}function Fg(e,n){de=null,P.H=Ol,n===ao||n===bl?(n=nm(),Le=3):n===$p?(n=nm(),Le=4):Le=n===ig?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ve===null&&(Je=1,Fl(e,oi(n,e.current)))}function Hg(){var e=P.H;return P.H=Ol,e===null?Ol:e}function Gg(){var e=P.A;return P.A=jy,e}function Gf(){Je=4,Ua||(Me&4194048)!==Me&&fi.current!==null||($s=!0),(La&134217727)===0&&(gs&134217727)===0||We===null||Pa(We,Me,hi,!1)}function Vf(e,n,a){var o=Ue;Ue|=2;var u=Hg(),h=Gg();(We!==e||Me!==n)&&(ql=null,ir(e,n)),n=!1;var M=Je;t:do try{if(Le!==0&&ve!==null){var A=ve,I=ti;switch(Le){case 8:Hf(),M=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var et=Le;if(Le=0,ti=null,ar(e,A,I,et),a&&$s){M=0;break t}break;default:et=Le,Le=0,ti=null,ar(e,A,I,et)}}Qy(),M=Je;break}catch(dt){Fg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Yi=us=null,Ue=o,P.H=u,P.A=h,ve===null&&(We=null,Me=0,ml()),M}function Qy(){for(;ve!==null;)Vg(ve)}function Jy(e,n){var a=Ue;Ue|=2;var o=Hg(),u=Gg();We!==e||Me!==n?(ql=null,Wl=Qt()+500,ir(e,n)):$s=ae(e,n);t:do try{if(Le!==0&&ve!==null){n=ve;var h=ti;e:switch(Le){case 1:Le=0,ti=null,ar(e,n,h,1);break;case 2:case 9:if(tm(h)){Le=0,ti=null,kg(n);break}n=function(){Le!==2&&Le!==9||We!==e||(Le=7),Ni(e)},h.then(n,n);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:tm(h)?(Le=0,ti=null,kg(n)):(Le=0,ti=null,ar(e,n,h,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var A=ve;if(!M||b_(M)){Le=0,ti=null;var I=A.sibling;if(I!==null)ve=I;else{var et=A.return;et!==null?(ve=et,jl(et)):ve=null}break e}}Le=0,ti=null,ar(e,n,h,5);break;case 6:Le=0,ti=null,ar(e,n,h,6);break;case 8:Hf(),Je=6;break t;default:throw Error(s(462))}}$y();break}catch(dt){Fg(e,dt)}while(!0);return Yi=us=null,P.H=o,P.A=u,Ue=a,ve!==null?0:(We=null,Me=0,ml(),Je)}function $y(){for(;ve!==null&&!Cn();)Vg(ve)}function Vg(e){var n=mg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?jl(e):ve=n}function kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=cg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:nf(n);default:_g(a,n),n=ve=Xp(n,ea),n=mg(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?jl(e):ve=n}function ar(e,n,a,o){Yi=us=null,nf(n),Zs=null,po=0;var u=n.return;try{if(Vy(e,u,n,a,Me)){Je=1,Fl(e,oi(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;Je=1,Fl(e,oi(a,e.current)),ve=null;return}n.flags&32768?(we||o===1?e=!0:$s||(Me&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xg(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){Xg(n,Ua);return}e=n.return;var a=Xy(n.alternate,n,ea);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);Je===0&&(Je=5)}function Xg(e,n){do{var a=Wy(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);Je=6,ve=null}function Wg(e,n,a,o,u,h,M,A,I){e.cancelPendingCommit=null;do Zl();while(Rn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Uu,zt(e,a,h,M,A,I),e===We&&(ve=We=null,Me=0),er=n,Oa=e,nr=a,Bf=h,If=u,Pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ix(N,function(){return Kg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=q.p,q.p=2,M=Ue,Ue|=4;try{qy(e,n,a)}finally{Ue=M,q.p=u,P.T=o}}Rn=1,qg(),Yg(),jg()}}function qg(){if(Rn===1){Rn=0;var e=Oa,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=Ue;Ue|=4;try{wg(n,e);var h=th,M=Op(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(M!==A&&A&&A.ownerDocument&&Np(A.ownerDocument.documentElement,A)){if(I!==null&&Au(A)){var et=I.start,dt=I.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var vt=A.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ie=A.textContent.length,Jt=Math.min(I.start,ie),Ie=I.end===void 0?Jt:Math.min(I.end,ie);!at.extend&&Jt>Ie&&(M=Ie,Ie=Jt,Jt=M);var j=Lp(A,Jt),k=Lp(A,Ie);if(j&&k&&(at.rangeCount!==1||at.anchorNode!==j.node||at.anchorOffset!==j.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var J=vt.createRange();J.setStart(j.node,j.offset),at.removeAllRanges(),Jt>Ie?(at.addRange(J),at.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),at.addRange(J))}}}}for(vt=[],at=A;at=at.parentNode;)at.nodeType===1&&vt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var pt=vt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}oc=!!$f,th=$f=null}finally{Ue=u,q.p=o,P.T=a}}e.current=n,Rn=2}}function Yg(){if(Rn===2){Rn=0;var e=Oa,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=Ue;Ue|=4;try{bg(e,n.alternate,n)}finally{Ue=u,q.p=o,P.T=a}}Rn=3}}function jg(){if(Rn===4||Rn===3){Rn=0,se();var e=Oa,n=er,a=nr,o=Pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,er=Oa=null,Zg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Na=null),sn(a),n=n.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=q.p,q.p=2,P.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];h(A.value,{componentStack:A.stack})}}finally{P.T=n,q.p=u}}(nr&3)!==0&&Zl(),Ni(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Ff?Eo++:(Eo=0,Ff=e):Eo=0,bo(0)}}function Zg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function Zl(e){return qg(),Yg(),jg(),Kg()}function Kg(){if(Rn!==5)return!1;var e=Oa,n=Bf;Bf=0;var a=sn(nr),o=P.T,u=q.p;try{q.p=32>a?32:a,P.T=null,a=If,If=null;var h=Oa,M=nr;if(Rn=0,er=Oa=null,nr=0,(Ue&6)!==0)throw Error(s(331));var A=Ue;if(Ue|=4,Ng(h.current),Dg(h,h.current,M,a),Ue=A,bo(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(ft,h)}catch{}return!0}finally{q.p=u,P.T=o,Zg(e,n)}}function Qg(e,n,a){n=oi(a,n),n=_f(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(_t(e,2),Ni(e))}function Ve(e,n,a){if(e.tag===3)Qg(e,e,a);else for(;n!==null;){if(n.tag===3){Qg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){e=oi(a,e),a=eg(2),o=ba(n,a,2),o!==null&&(ng(a,o,n,e),_t(o,2),Ni(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Zy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Nf=!0,u.add(a),e=tx.bind(null,e,n,a),n.then(e,e))}function tx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Me&a)===a&&(Je===4||Je===3&&(Me&62914560)===Me&&300>Qt()-zf?(Ue&2)===0&&ir(e,0):Of|=a,tr===Me&&(tr=0)),Ni(e)}function Jg(e,n){n===0&&(n=Nt()),e=Fs(e,n),e!==null&&(_t(e,n),Ni(e))}function ex(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Jg(e,a)}function nx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Jg(e,a)}function ix(e,n){return oe(e,n)}var Kl=null,sr=null,Xf=!1,Ql=!1,Wf=!1,_s=0;function Ni(e){e!==sr&&e.next===null&&(sr===null?Kl=sr=e:sr=sr.next=e),Ql=!0,Xf||(Xf=!0,sx())}function bo(e,n){if(!Wf&&Ql){Wf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-wt(42|e)+1)-1,h&=u&~(M&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,n_(o,h))}else h=Me,h=he(o,o===We?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ae(o,h)||(a=!0,n_(o,h));o=o.next}while(a);Wf=!1}}function ax(){$g()}function $g(){Ql=Xf=!1;var e=0;_s!==0&&(dx()&&(e=_s),_s=0);for(var n=Qt(),a=null,o=Kl;o!==null;){var u=o.next,h=t_(o,n);h===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(sr=a)):(a=o,(e!==0||(h&3)!==0)&&(Ql=!0)),o=u}bo(e)}function t_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-wt(h),A=1<<M,I=u[M];I===-1?((A&a)===0||(A&o)!==0)&&(u[M]=Pe(A,n)):I<=n&&(e.expiredLanes|=A),h&=~A}if(n=We,a=Me,a=he(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&G(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ae(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&G(o),sn(a)){case 2:case 8:a=Vt;break;case 32:a=N;break;case 268435456:a=nt;break;default:a=N}return o=e_.bind(null,e),a=oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&G(o),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=Me;return o=he(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Bg(e,o,n),t_(e,Qt()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,n){if(Zl())return null;Bg(e,n,!0)}function sx(){mx(function(){(Ue&6)!==0?oe(De,ax):$g()})}function qf(){return _s===0&&(_s=W()),_s}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function a_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function rx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=i_((u[bn]||null).action),M=o.submitter;M&&(n=(n=M[bn]||null)?i_(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var A=new hl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var I=M?a_(u,M):new FormData(u);hf(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=M?a_(u,M):new FormData(u),hf(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var Yf=0;Yf<Du.length;Yf++){var jf=Du[Yf],ox=jf.toLowerCase(),lx=jf[0].toUpperCase()+jf.slice(1);_i(ox,"on"+lx)}_i(Bp,"onAnimationEnd"),_i(Ip,"onAnimationIteration"),_i(Fp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Ty,"onTransitionRun"),_i(Ay,"onTransitionStart"),_i(Ry,"onTransitionCancel"),_i(Hp,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],I=A.instance,et=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(dt){Il(dt)}u.currentTarget=null,h=I}else for(M=0;M<o.length;M++){if(A=o[M],I=A.instance,et=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=et;try{h(u)}catch(dt){Il(dt)}u.currentTarget=null,h=I}}}}function ye(e,n){var a=n[$a];a===void 0&&(a=n[$a]=new Set);var o=e+"__bubble";a.has(o)||(r_(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),r_(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[Jl]){e[Jl]=!0,rl.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Zf("selectionchange",!1,n))}}function r_(e,n,a,o){switch(D_(n)){case 2:var u=zx;break;case 8:u=Bx;break;default:u=uh}a=u.bind(null,n,a,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Ii(A),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){o=h=M;continue t}A=A.parentNode}}o=o.return}dp(function(){var et=h,dt=mu(a),vt=[];t:{var it=Gp.get(e);if(it!==void 0){var at=hl,ie=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":at=iy;break;case"focusin":ie="focus",at=Su;break;case"focusout":ie="blur",at=Su;break;case"beforeblur":case"afterblur":at=Su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=ry;break;case Bp:case Ip:case Fp:at=jv;break;case Hp:at=ly;break;case"scroll":case"scrollend":at=kv;break;case"wheel":at=uy;break;case"copy":case"cut":case"paste":at=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=vp;break;case"toggle":case"beforetoggle":at=hy}var Jt=(n&4)!==0,Ie=!Jt&&(e==="scroll"||e==="scrollend"),j=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var k=et,J;k!==null;){var pt=k;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=kr(k,j),pt!=null&&Jt.push(Ao(k,pt,J))),Ie)break;k=k.return}0<Jt.length&&(it=new at(it,ie,null,a,dt),vt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==pu&&(ie=a.relatedTarget||a.fromElement)&&(Ii(ie)||ie[Fn]))break t;if((at||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ie=a.relatedTarget||a.toElement,at=et,ie=ie?Ii(ie):null,ie!==null&&(Ie=c(ie),Jt=ie.tag,ie!==Ie||Jt!==5&&Jt!==27&&Jt!==6)&&(ie=null)):(at=null,ie=et),at!==ie)){if(Jt=gp,pt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=vp,pt="onPointerLeave",j="onPointerEnter",k="pointer"),Ie=at==null?it:es(at),J=ie==null?it:es(ie),it=new Jt(pt,k+"leave",at,a,dt),it.target=Ie,it.relatedTarget=J,pt=null,Ii(dt)===et&&(Jt=new Jt(j,k+"enter",ie,a,dt),Jt.target=J,Jt.relatedTarget=Ie,pt=Jt),Ie=pt,at&&ie)e:{for(Jt=at,j=ie,k=0,J=Jt;J;J=rr(J))k++;for(J=0,pt=j;pt;pt=rr(pt))J++;for(;0<k-J;)Jt=rr(Jt),k--;for(;0<J-k;)j=rr(j),J--;for(;k--;){if(Jt===j||j!==null&&Jt===j.alternate)break e;Jt=rr(Jt),j=rr(j)}Jt=null}else Jt=null;at!==null&&o_(vt,it,at,Jt,!1),ie!==null&&Ie!==null&&o_(vt,Ie,ie,Jt,!0)}}t:{if(it=et?es(et):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Ht=Ap;else if(bp(it))if(Rp)Ht=My;else{Ht=xy;var pe=yy}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&du(et.elementType)&&(Ht=Ap):Ht=Sy;if(Ht&&(Ht=Ht(e,et))){Tp(vt,Ht,a,dt);break t}pe&&pe(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&Un(it,"number",it.value)}switch(pe=et?es(et):window,e){case"focusin":(bp(pe)||pe.contentEditable==="true")&&(zs=pe,Ru=et,Qr=null);break;case"focusout":Qr=Ru=zs=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Pp(vt,a,dt);break;case"selectionchange":if(by)break;case"keydown":case"keyup":Pp(vt,a,dt)}var kt;if(Eu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Ps?Mp(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(yp&&a.locale!=="ko"&&(Ps||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ps&&(kt=pp()):(xa=dt,vu="value"in xa?xa.value:xa.textContent,Ps=!0)),pe=$l(et,ee),0<pe.length&&(ee=new _p(ee,e,null,a,dt),vt.push({event:ee,listeners:pe}),kt?ee.data=kt:(kt=Ep(a),kt!==null&&(ee.data=kt)))),(kt=py?my(e,a):gy(e,a))&&(ee=$l(et,"onBeforeInput"),0<ee.length&&(pe=new _p("onBeforeInput","beforeinput",null,a,dt),vt.push({event:pe,listeners:ee}),pe.data=kt)),rx(vt,e,et,a,dt)}s_(vt,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=kr(e,a),u!=null&&o.unshift(Ao(e,u,h)),u=kr(e,n),u!=null&&o.push(Ao(e,u,h))),e.tag===3)return o;e=e.return}return[]}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var A=a,I=A.alternate,et=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||et===null||(I=et,u?(et=kr(a,h),et!=null&&M.unshift(Ao(a,et,I))):u||(et=kr(a,h),et!=null&&M.push(Ao(a,et,I)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var ux=/\r\n?/g,fx=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(ux,`
`).replace(fx,"")}function c_(e,n){return n=l_(n),l_(e)===n}function tc(){}function Be(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||wi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&wi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":fp(e,o,h);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=tc);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,Tt(e,a,o))}}function Jf(e,n,a,o,u,h){switch(a){case"style":fp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?wi(e,o):(typeof o=="number"||typeof o=="bigint")&&wi(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ol.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[bn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,h,M,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":ye("invalid",e);var A=h=M=u=null,I=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":M=dt;break;case"checked":I=dt;break;case"defaultChecked":et=dt;break;case"value":h=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Be(e,n,o,dt,a,null)}}Ge(e,h,A,I,et,M,u,!1),Ke(e);return;case"select":ye("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Be(e,n,u,A,a,null)}n=h,a=M,e.multiple=!!o,n!=null?fn(e,!!o,n,!1):a!=null&&fn(e,!!o,a,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Be(e,n,M,A,a,null)}Tn(e,o,u,h),Ke(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,I,o,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)ye(To[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,et,o,a,null)}return;default:if(du(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Jf(e,n,dt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function hx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,A=null,I=null,et=null,dt=null;for(at in a){var vt=a[at];if(a.hasOwnProperty(at)&&vt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":I=vt;default:o.hasOwnProperty(at)||Be(e,n,at,null,o,vt)}}for(var it in o){var at=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(at!=null||vt!=null))switch(it){case"type":h=at;break;case"name":u=at;break;case"checked":et=at;break;case"defaultChecked":dt=at;break;case"value":M=at;break;case"defaultValue":A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:at!==vt&&Be(e,n,it,at,o,vt)}}Gi(e,M,A,I,et,dt,h,u);return;case"select":at=M=A=it=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":at=I;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":it=h;break;case"defaultValue":A=h;break;case"multiple":M=h;default:h!==I&&Be(e,n,u,h,o,I)}n=A,a=M,o=at,it!=null?fn(e,!!a,it,!1):!!o!=!!a&&(n!=null?fn(e,!!a,n,!0):fn(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":it=u;break;case"defaultValue":at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Be(e,n,M,u,o,h)}yn(e,it,at);return;case"option":for(var ie in a)if(it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Be(e,n,ie,null,o,it)}for(I in o)if(it=o[I],at=a[I],o.hasOwnProperty(I)&&it!==at&&(it!=null||at!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Be(e,n,I,it,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!o.hasOwnProperty(Jt)&&Be(e,n,Jt,null,o,it);for(et in o)if(it=o[et],at=a[et],o.hasOwnProperty(et)&&it!==at&&(it!=null||at!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Be(e,n,et,it,o,at)}return;default:if(du(n)){for(var Ie in a)it=a[Ie],a.hasOwnProperty(Ie)&&it!==void 0&&!o.hasOwnProperty(Ie)&&Jf(e,n,Ie,void 0,o,it);for(dt in o)it=o[dt],at=a[dt],!o.hasOwnProperty(dt)||it===at||it===void 0&&at===void 0||Jf(e,n,dt,it,o,at);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&Be(e,n,j,null,o,it);for(vt in o)it=o[vt],at=a[vt],!o.hasOwnProperty(vt)||it===at||it==null&&at==null||Be(e,n,vt,it,o,at)}var $f=null,th=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function dx(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(gx)}:h_;function gx(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function p_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Ro(M.documentElement),a&2&&Ro(M.body),a&4)for(a=M.head,Ro(a),M=a.firstChild;M;){var A=M.nextSibling,I=M.nodeName;M[ga]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(h),Po(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Po(n)}function ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),_a(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _x(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ga])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function vx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var sh=null;function m_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function g_(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);_a(e)}var di=new Map,__=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=q.d;q.d={f:xx,r:Sx,D:Mx,C:Ex,L:bx,m:Tx,X:Rx,S:Ax,M:wx};function xx(){var e=na.f(),n=Yl();return e||n}function Sx(e){var n=Fi(e);n!==null&&n.tag===5&&n.type==="form"?Bm(n):na.r(e)}var or=typeof document>"u"?null:document;function v_(e,n,a){var o=or;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),__.has(u)||(__.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),rn(n),o.head.appendChild(n)))}}function Mx(e){na.D(e),v_("dns-prefetch",e,null)}function Ex(e,n){na.C(e,n),v_("preconnect",e,n)}function bx(e,n,a){na.L(e,n,a);var o=or;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var h=u;switch(n){case"style":h=lr(e);break;case"script":h=cr(e)}di.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(wo(h))||n==="script"&&o.querySelector(Co(h))||(n=o.createElement("link"),wn(n,"link",e),rn(n),o.head.appendChild(n)))}}function Tx(e,n){na.m(e,n);var a=or;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=cr(e)}if(!di.has(h)&&(e=g({rel:"modulepreload",href:e},n),di.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(h)))return}o=a.createElement("link"),wn(o,"link",e),rn(o),a.head.appendChild(o)}}}function Ax(e,n,a){na.S(e,n,a);var o=or;if(o&&e){var u=va(o).hoistableStyles,h=lr(e);n=n||"default";var M=u.get(h);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(wo(h)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(h))&&rh(e,a);var I=M=o.createElement("link");rn(I),wn(I,"link",e),I._p=new Promise(function(et,dt){I.onload=et,I.onerror=dt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(h,M)}}}function Rx(e,n){na.X(e,n);var a=or;if(a&&e){var o=va(a).hoistableScripts,u=cr(e),h=o.get(u);h||(h=a.querySelector(Co(u)),h||(e=g({src:e,async:!0},n),(n=di.get(u))&&oh(e,n),h=a.createElement("script"),rn(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function wx(e,n){na.M(e,n);var a=or;if(a&&e){var o=va(a).hoistableScripts,u=cr(e),h=o.get(u);h||(h=a.querySelector(Co(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&oh(e,n),h=a.createElement("script"),rn(h),wn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function y_(e,n,a,o){var u=(u=ot.current)?nc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var h=va(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(wo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),h||Cx(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cr(a),a=va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function lr(e){return'href="'+Xe(e)+'"'}function wo(e){return'link[rel="stylesheet"]['+e+"]"}function x_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Cx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),rn(n),e.head.appendChild(n))}function cr(e){return'[src="'+Xe(e)+'"]'}function Co(e){return"script[async]"+e}function S_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),wn(o,"style",u),ic(o,a.precedence,e),n.instance=o;case"stylesheet":u=lr(a.href);var h=e.querySelector(wo(u));if(h)return n.state.loading|=4,n.instance=h,rn(h),h;o=x_(a),(u=di.get(u))&&rh(o,u),h=(e.ownerDocument||e).createElement("link"),rn(h);var M=h;return M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),wn(h,"link",o),n.state.loading|=4,ic(h,a.precedence,e),n.instance=h;case"script":return h=cr(a.src),(u=e.querySelector(Co(h)))?(n.instance=u,rn(u),u):(o=a,(u=di.get(h))&&(o=g({},a),oh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,e));return n.instance}function ic(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function M_(e,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[ga]||h[un]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(h):o.set(M,[h])}}return o}function E_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Dx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function Ux(){}function Lx(e,n,a){if(Do===null)throw Error(s(475));var o=Do;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=lr(a.href),h=e.querySelector(wo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=sc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,rn(h);return}h=e.ownerDocument||e,a=x_(a),(u=di.get(u))&&rh(a,u),h=h.createElement("link"),rn(h);var M=h;M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),wn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=sc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Nx(){if(Do===null)throw Error(s(475));var e=Do;return e.stylesheets&&e.count===0&&lh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&lh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sc(){if(this.count--,this.count===0){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function lh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(Ox,e),rc=null,sc.call(e))}function Ox(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var o=a.get(null);else{a=new Map,rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Px(e,n,a,o,u,h,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function T_(e,n,a,o,u,h,M,A,I,et,dt,vt){return e=new Px(e,n,a,M,A,I,et,vt),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),e.current=h,h.stateNode=e,n=Vu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},qu(h),e}function A_(e){return e?(e=Hs,e):Hs}function R_(e,n,a,o,u,h){u=A_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ba(e,o,n),a!==null&&(ni(a,e,n),ro(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ch(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function C_(e){if(e.tag===13){var n=Fs(e,67108864);n!==null&&ni(n,e,67108864),ch(e,67108864)}}var oc=!0;function zx(e,n,a,o){var u=P.T;P.T=null;var h=q.p;try{q.p=2,uh(e,n,a,o)}finally{q.p=h,P.T=u}}function Bx(e,n,a,o){var u=P.T;P.T=null;var h=q.p;try{q.p=8,uh(e,n,a,o)}finally{q.p=h,P.T=u}}function uh(e,n,a,o){if(oc){var u=fh(o);if(u===null)Qf(e,n,o,lc,a),U_(e,o);else if(Fx(u,e,n,a,o))o.stopPropagation();else if(U_(e,o),n&4&&-1<Ix.indexOf(e)){for(;u!==null;){var h=Fi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Pt(h.pendingLanes);if(M!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var I=1<<31-wt(M);A.entanglements[1]|=I,M&=~I}Ni(h),(Ue&6)===0&&(Wl=Qt()+500,bo(0))}}break;case 13:A=Fs(h,2),A!==null&&ni(A,h,2),Yl(),ch(h,2)}if(h=fh(o),h===null&&Qf(e,n,o,lc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function fh(e){return e=mu(e),hh(e)}var lc=null;function hh(e){if(lc=null,e=Ii(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function D_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case De:return 2;case Vt:return 8;case N:case T:return 32;case nt:return 268435456;default:return 32}default:return 32}}var dh=!1,Ba=null,Ia=null,Fa=null,Lo=new Map,No=new Map,Ha=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,n){switch(e){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Fi(n),n!==null&&C_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Fx(e,n,a,o,u){switch(n){case"focusin":return Ba=Oo(Ba,e,n,a,o,u),!0;case"dragenter":return Ia=Oo(Ia,e,n,a,o,u),!0;case"mouseover":return Fa=Oo(Fa,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Lo.set(h,Oo(Lo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,No.set(h,Oo(No.get(h)||null,e,n,a,o,u)),!0}return!1}function L_(e){var n=Ii(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Zn(e.priority,function(){if(a.tag===13){var o=ei();o=ke(o);var u=Fs(a,o);u!==null&&ni(u,a,o),ch(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);pu=o,a.target.dispatchEvent(o),pu=null}else return n=Fi(a),n!==null&&C_(n),e.blockedOn=a,!1;n.shift()}return!0}function N_(e,n,a){cc(e)&&a.delete(n)}function Hx(){dh=!1,Ba!==null&&cc(Ba)&&(Ba=null),Ia!==null&&cc(Ia)&&(Ia=null),Fa!==null&&cc(Fa)&&(Fa=null),Lo.forEach(N_),No.forEach(N_)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Hx)))}var fc=null;function O_(e){fc!==e&&(fc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(hh(o||a)===null)continue;break}var h=Fi(a);h!==null&&(e.splice(n,3),n-=3,hf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Po(e){function n(I){return uc(I,e)}Ba!==null&&uc(Ba,e),Ia!==null&&uc(Ia,e),Fa!==null&&uc(Fa,e),Lo.forEach(n),No.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)L_(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[bn]||null;if(typeof h=="function")M||O_(a);else if(M){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[bn]||null)A=M.formAction;else if(hh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),O_(a)}}}function ph(e){this._internalRoot=e}hc.prototype.render=ph.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();R_(a,o,e,n,null,null)},hc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;R_(e.current,2,null,e,null,null),Yl(),n[Fn]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&L_(e)}};var P_=t.version;if(P_!=="19.1.0")throw Error(s(527,P_,"19.1.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Gx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ft=dc.inject(Gx),Lt=dc}catch{}}return Bo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Qm,h=Jm,M=$m,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=T_(e,1,!1,null,null,a,o,u,h,M,A,null),e[Fn]=n.current,Kf(e),new ph(n)},Bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Qm,M=Jm,A=$m,I=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=T_(e,1,!0,n,a??null,o,u,h,M,A,I,et),n.context=A_(null),a=n.current,o=ei(),o=ke(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,_t(n,a),Ni(n),e[Fn]=n.current,Kf(e),new hc(n)},Bo.version="19.1.0",Bo}var W_;function Qx(){if(W_)return _h.exports;W_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=Kx(),_h.exports}var Jx=Qx();const $x=({onFile:r,onSelectModel:t,onRender:i,canRender:s,models:l})=>Xt.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(135deg, #23243a 0%, #2d2e4a 100%)"},children:Xt.jsxs("div",{style:{background:"rgba(30, 30, 40, 0.95)",borderRadius:16,boxShadow:"0 8px 32px rgba(0,0,0,0.25)",padding:"40px 32px",display:"flex",flexDirection:"column",alignItems:"center",gap:24,maxWidth:400,width:"100%"},children:[Xt.jsx("h2",{style:{color:"#fff",marginBottom:0,fontWeight:700,fontSize:28},children:"Three.js Model Viewer"}),Xt.jsx("h3",{style:{color:"#fff",marginBottom:8,fontWeight:300,fontSize:17},children:"by James Vuong"}),Xt.jsxs("p",{style:{color:"#bbb",marginBottom:0,textAlign:"center",fontSize:16},children:["Upload a ",Xt.jsx("b",{children:".stl"})," or ",Xt.jsx("b",{children:".obj"})," file, or select a test model below.",Xt.jsx("br",{}),Xt.jsx("span",{style:{color:"#888",fontSize:13},children:"(Other file types are not supported.)"})]}),Xt.jsx("input",{type:"file",accept:".stl,.obj",style:{margin:"8px 0",fontSize:16},onChange:c=>{c.target.files&&c.target.files[0]&&r(c.target.files[0])}}),Xt.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[Xt.jsx("span",{style:{marginRight:8,color:"#bbb"},children:"Or select a test model:"}),Xt.jsxs("select",{onChange:c=>c.target.value&&t(c.target.value),defaultValue:"",style:{padding:"8px 16px",borderRadius:6,border:"1px solid #444",background:"#23243a",color:"#fff",fontSize:16},children:[Xt.jsx("option",{value:"",disabled:!0,children:"Select model..."}),l.map(c=>Xt.jsx("option",{value:c.url,children:c.name},c.url))]})]}),Xt.jsx("button",{style:{marginTop:8,padding:"12px 36px",fontSize:20,fontWeight:600,borderRadius:8,background:s?"linear-gradient(90deg, #5a4fff 0%, #7c6fff 100%)":"#444",color:"#fff",border:"none",boxShadow:s?"0 2px 8px rgba(90,79,255,0.15)":"none",cursor:s?"pointer":"not-allowed",transition:"all 0.2s",opacity:s?1:.6,width:"100%",maxWidth:300},onClick:i,disabled:!s,children:"Render"})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="176",Ur={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tS=0,q_=1,eS=2,lv=1,nS=2,ca=3,Qa=0,qn=1,fa=2,Za=0,Lr=1,Y_=2,j_=3,Z_=4,iS=5,Ts=100,aS=101,sS=102,rS=103,oS=104,lS=200,cS=201,uS=202,fS=203,id=204,ad=205,hS=206,dS=207,pS=208,mS=209,gS=210,_S=211,vS=212,yS=213,xS=214,sd=0,rd=1,od=2,Pr=3,ld=4,cd=5,ud=6,fd=7,jd=0,SS=1,MS=2,Ka=0,ES=1,bS=2,TS=3,AS=4,RS=5,wS=6,CS=7,cv=300,zr=301,Br=302,hd=303,dd=304,cu=306,pd=1e3,Rs=1001,md=1002,Ti=1003,DS=1004,pc=1005,Pi=1006,Sh=1007,ws=1008,Bi=1009,uv=1010,fv=1011,Zo=1012,Zd=1013,Cs=1014,ha=1015,el=1016,Kd=1017,Qd=1018,Ko=1020,hv=35902,dv=1021,pv=1022,bi=1023,Qo=1026,Jo=1027,mv=1028,Jd=1029,gv=1030,$d=1031,tp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,gd=35840,_d=35841,vd=35842,yd=35843,xd=36196,Sd=37492,Md=37496,Ed=37808,bd=37809,Td=37810,Ad=37811,Rd=37812,wd=37813,Cd=37814,Dd=37815,Ud=37816,Ld=37817,Nd=37818,Od=37819,Pd=37820,zd=37821,Qc=36492,Bd=36494,Id=36495,_v=36283,Fd=36284,Hd=36285,Gd=36286,US=3200,LS=3201,ep=0,NS=1,ja="",Wn="srgb",Ir="srgb-linear",eu="linear",Fe="srgb",ur=7680,K_=519,OS=512,PS=513,zS=514,vv=515,BS=516,IS=517,FS=518,HS=519,Vd=35044,Q_="300 es",da=2e3,nu=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J_=1234567;const Nr=Math.PI/180,$o=180/Math.PI;function pa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function ge(r,t,i){return Math.max(t,Math.min(i,r))}function np(r,t){return(r%t+t)%t}function GS(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function VS(r,t,i){return r!==t?(i-r)/(t-r):0}function jo(r,t,i){return(1-i)*r+i*t}function kS(r,t,i,s){return jo(r,t,1-Math.exp(-i*s))}function XS(r,t=1){return t-Math.abs(np(r,t*2)-t)}function WS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function qS(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function YS(r,t){return r+Math.floor(Math.random()*(t-r+1))}function jS(r,t){return r+Math.random()*(t-r)}function ZS(r){return r*(.5-Math.random())}function KS(r){r!==void 0&&(J_=r);let t=J_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function QS(r){return r*Nr}function JS(r){return r*$o}function $S(r){return(r&r-1)===0&&r!==0}function tM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function eM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((t+s)/2),g=f((t+s)/2),_=c((t-s)/2),v=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*g,m*_,m*v,d*p);break;case"YZY":r.set(m*v,d*g,m*_,d*p);break;case"ZXZ":r.set(m*_,m*v,d*g,d*p);break;case"XZX":r.set(d*g,m*E,m*S,d*p);break;case"YXY":r.set(m*S,d*g,m*E,d*p);break;case"ZYZ":r.set(m*E,m*S,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ei(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const iu={DEG2RAD:Nr,RAD2DEG:$o,generateUUID:pa,clamp:ge,euclideanModulo:np,mapLinear:GS,inverseLerp:VS,lerp:jo,damp:kS,pingpong:XS,smoothstep:WS,smootherstep:qS,randInt:YS,randFloat:jS,randFloatSpread:ZS,seededRandom:KS,degToRad:QS,radToDeg:JS,isPowerOfTwo:$S,ceilPowerOfTwo:tM,floorPowerOfTwo:eM,setQuaternionFromProperEuler:nM,normalize:Ne,denormalize:Ei};class $t{constructor(t=0,i=0){$t.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,s,l,c,f,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],S=s[5],E=s[8],b=l[0],x=l[3],y=l[6],z=l[1],U=l[4],R=l[7],F=l[2],O=l[5],B=l[8];return c[0]=f*b+d*z+m*F,c[3]=f*x+d*U+m*O,c[6]=f*y+d*R+m*B,c[1]=p*b+g*z+_*F,c[4]=p*x+g*U+_*O,c[7]=p*y+g*R+_*B,c[2]=v*b+S*z+E*F,c[5]=v*x+S*U+E*O,c[8]=v*y+S*R+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-s*c*g+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*f-d*p,v=d*m-g*c,S=p*c-f*m,E=i*_+s*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*p-g*s)*b,t[2]=(d*s-l*f)*b,t[3]=v*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(s*m-p*i)*b,t[8]=(f*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Mh.makeScale(t,i)),this}rotate(t){return this.premultiply(Mh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Mh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new ce;function yv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function au(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function iM(){const r=au("canvas");return r.style.display="block",r}const $_={};function Jc(r){r in $_||($_[r]=!0,console.warn(r))}function aM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function sM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const t0=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e0=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oM(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Fe&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=Or(l.r),l.g=Or(l.g),l.b=Or(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ja?eu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:t,whitePoint:s,transfer:eu,toXYZ:t0,fromXYZ:e0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:t0,fromXYZ:e0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const Re=oM();function ma(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Or(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fr;class lM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{fr===void 0&&(fr=au("canvas")),fr.width=t.width,fr.height=t.height;const l=fr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=fr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=au("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ma(i[s]/255)*255):i[s]=ma(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cM=0;class ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=pa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Eh(l[f].image)):c.push(Eh(l[f]))}else c=Eh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Eh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uM=0;class Yn extends Ls{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=Rs,l=Rs,c=Pi,f=ws,d=bi,m=Bi,p=Yn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=pa(),this.name="",this.source=new ip(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case Rs:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case Rs:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=cv;Yn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],b=m[2],x=m[6],y=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,R=(S+1)/2,F=(y+1)/2,O=(g+v)/4,B=(_+b)/4,V=(E+x)/4;return U>R&&U>F?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=O/s,c=B/s):R>F?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=O/l,c=V/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=B/c,l=V/c),this.set(s,l,c,i),this}let z=Math.sqrt((x-E)*(x-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(x-E)/z,this.y=(_-b)/z,this.z=(v-g)/z,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends Ls{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Yn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends fM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class xv extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(_!==b||m!==v||p!==S||g!==E){let x=1-d;const y=m*v+p*S+g*E+_*b,z=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const F=Math.sqrt(U),O=Math.atan2(F,y*z);x=Math.sin(x*O)/F,d=Math.sin(d*O)/F}const R=d*z;if(m=m*x+v*R,p=p*x+S*R,g=g*x+E*R,_=_*x+b*R,x===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=F,p*=F,g*=F,_*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*_+m*S-p*v,t[i+1]=m*E+g*v+p*_-d*S,t[i+2]=p*E+g*S+d*v-m*_,t[i+3]=g*E-d*_-m*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),v=m(s/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"YZX":this._x=v*g*_+p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_-v*S*E;break;case"XZY":this._x=v*g*_-p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-s*p,this._z=c*g+f*p+s*m-l*d,this._w=f*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=f*_+this._w*v,this._x=s*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(n0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(n0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),g=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ge(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ge(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bh=new Y,n0=new Us;class Hr{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),gc.subVectors(this.max,Io),hr.subVectors(t.a,Io),dr.subVectors(t.b,Io),pr.subVectors(t.c,Io),Va.subVectors(dr,hr),ka.subVectors(pr,dr),vs.subVectors(hr,pr);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-vs.z,vs.y,Va.z,0,-Va.x,ka.z,0,-ka.x,vs.z,0,-vs.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-vs.y,vs.x,0];return!Th(i,hr,dr,pr,gc)||(i=[1,0,0,0,1,0,0,0,1],!Th(i,hr,dr,pr,gc))?!1:(_c.crossVectors(Va,ka),i=[_c.x,_c.y,_c.z],Th(i,hr,dr,pr,gc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ia=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xi=new Y,mc=new Hr,hr=new Y,dr=new Y,pr=new Y,Va=new Y,ka=new Y,vs=new Y,Io=new Y,gc=new Y,_c=new Y,ys=new Y;function Th(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){ys.fromArray(r,c);const d=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),m=t.dot(ys),p=i.dot(ys),g=s.dot(ys);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const dM=new Hr,Fo=new Y,Ah=new Y;class Gr{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):dM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Fo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(Ah)),this.expandByPoint(Fo.copy(t.center).sub(Ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const aa=new Y,Rh=new Y,vc=new Y,Xa=new Y,wh=new Y,yc=new Y,Ch=new Y;class nl{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Rh.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(Rh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(vc),d=Xa.dot(this.direction),m=-Xa.dot(vc),p=Xa.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*m-d,v=f*d-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,S=_*(_+f*v+2*d)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Rh).addScaledVector(vc,v),S}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,s,l,c){wh.subVectors(i,t),yc.subVectors(s,t),Ch.crossVectors(wh,yc);let f=this.direction.dot(Ch),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Xa.subVectors(this.origin,t);const m=d*this.direction.dot(yc.crossVectors(Xa,yc));if(m<0)return null;const p=d*this.direction.dot(wh.cross(Xa));if(p<0||m+p>f)return null;const g=-d*Xa.dot(Ch);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,s,l,c,f,d,m,p,g,_,v,S,E,b,x){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,g,_,v,S,E,b,x)}set(t,i,s,l,c,f,d,m,p,g,_,v,S,E,b,x){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=m,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=b,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/mr.setFromMatrixColumn(t,0).length(),c=1/mr.setFromMatrixColumn(t,1).length(),f=1/mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=d*g,b=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=v-b*p,i[9]=-d*m,i[2]=b-v*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,S=m*_,E=p*g,b=p*_;i[0]=v+b*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=b+v*d,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,S=m*_,E=p*g,b=p*_;i[0]=v-b*d,i[4]=-f*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=b-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=d*g,b=d*_;i[0]=m*g,i[4]=E*p-S,i[8]=v*p+b,i[1]=m*_,i[5]=b*p+v,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,S=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+E,i[10]=v-b*_}else if(t.order==="XZY"){const v=f*m,S=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+b,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=b*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pM,t,mM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Wa.crossVectors(s,ii),Wa.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Wa.crossVectors(s,ii)),Wa.normalize(),xc.crossVectors(ii,Wa),l[0]=Wa.x,l[4]=xc.x,l[8]=ii.x,l[1]=Wa.y,l[5]=xc.y,l[9]=ii.y,l[2]=Wa.z,l[6]=xc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],S=s[13],E=s[2],b=s[6],x=s[10],y=s[14],z=s[3],U=s[7],R=s[11],F=s[15],O=l[0],B=l[4],V=l[8],D=l[12],C=l[1],H=l[5],st=l[9],tt=l[13],ht=l[2],ut=l[6],P=l[10],q=l[14],X=l[3],xt=l[7],L=l[11],$=l[15];return c[0]=f*O+d*C+m*ht+p*X,c[4]=f*B+d*H+m*ut+p*xt,c[8]=f*V+d*st+m*P+p*L,c[12]=f*D+d*tt+m*q+p*$,c[1]=g*O+_*C+v*ht+S*X,c[5]=g*B+_*H+v*ut+S*xt,c[9]=g*V+_*st+v*P+S*L,c[13]=g*D+_*tt+v*q+S*$,c[2]=E*O+b*C+x*ht+y*X,c[6]=E*B+b*H+x*ut+y*xt,c[10]=E*V+b*st+x*P+y*L,c[14]=E*D+b*tt+x*q+y*$,c[3]=z*O+U*C+R*ht+F*X,c[7]=z*B+U*H+R*ut+F*xt,c[11]=z*V+U*st+R*P+F*L,c[15]=z*D+U*tt+R*q+F*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],b=t[7],x=t[11],y=t[15];return E*(+c*m*_-l*p*_-c*d*v+s*p*v+l*d*S-s*m*S)+b*(+i*m*S-i*p*v+c*f*v-l*f*S+l*p*g-c*m*g)+x*(+i*p*_-i*d*S-c*f*_+s*f*S+c*d*g-s*p*g)+y*(-l*d*g-i*m*_+i*d*v+l*f*_-s*f*v+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],b=t[13],x=t[14],y=t[15],z=_*x*p-b*v*p+b*m*S-d*x*S-_*m*y+d*v*y,U=E*v*p-g*x*p-E*m*S+f*x*S+g*m*y-f*v*y,R=g*b*p-E*_*p+E*d*S-f*b*S-g*d*y+f*_*y,F=E*_*m-g*b*m-E*d*v+f*b*v+g*d*x-f*_*x,O=i*z+s*U+l*R+c*F;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/O;return t[0]=z*B,t[1]=(b*v*c-_*x*c-b*l*S+s*x*S+_*l*y-s*v*y)*B,t[2]=(d*x*c-b*m*c+b*l*p-s*x*p-d*l*y+s*m*y)*B,t[3]=(_*m*c-d*v*c-_*l*p+s*v*p+d*l*S-s*m*S)*B,t[4]=U*B,t[5]=(g*x*c-E*v*c+E*l*S-i*x*S-g*l*y+i*v*y)*B,t[6]=(E*m*c-f*x*c-E*l*p+i*x*p+f*l*y-i*m*y)*B,t[7]=(f*v*c-g*m*c+g*l*p-i*v*p-f*l*S+i*m*S)*B,t[8]=R*B,t[9]=(E*_*c-g*b*c-E*s*S+i*b*S+g*s*y-i*_*y)*B,t[10]=(f*b*c-E*d*c+E*s*p-i*b*p-f*s*y+i*d*y)*B,t[11]=(g*d*c-f*_*c-g*s*p+i*_*p+f*s*S-i*d*S)*B,t[12]=F*B,t[13]=(g*b*l-E*_*l+E*s*v-i*b*v-g*s*x+i*_*x)*B,t[14]=(E*d*l-f*b*l-E*s*m+i*b*m+f*s*x-i*d*x)*B,t[15]=(f*_*l-g*d*l+g*s*m-i*_*m-f*s*v+i*d*v)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,v=c*p,S=c*g,E=c*_,b=f*g,x=f*_,y=d*_,z=m*p,U=m*g,R=m*_,F=s.x,O=s.y,B=s.z;return l[0]=(1-(b+y))*F,l[1]=(S+R)*F,l[2]=(E-U)*F,l[3]=0,l[4]=(S-R)*O,l[5]=(1-(v+y))*O,l[6]=(x+z)*O,l[7]=0,l[8]=(E+U)*B,l[9]=(x-z)*B,l[10]=(1-(v+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=mr.set(l[0],l[1],l[2]).length();const f=mr.set(l[4],l[5],l[6]).length(),d=mr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/c,g=1/f,_=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=da){const m=this.elements,p=2*c/(i-t),g=2*c/(s-l),_=(i+t)/(i-t),v=(s+l)/(s-l);let S,E;if(d===da)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===nu)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=da){const m=this.elements,p=1/(i-t),g=1/(s-l),_=1/(f-c),v=(i+t)*p,S=(s+l)*g;let E,b;if(d===da)E=(f+c)*_,b=-2*_;else if(d===nu)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const mr=new Y,Si=new qe,pM=new Y(0,0,0),mM=new Y(1,1,1),Wa=new Y,xc=new Y,ii=new Y,i0=new qe,a0=new Us;class Ai{constructor(t=0,i=0,s=0,l=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ge(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ge(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return i0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return a0.setFromEuler(this),this.setFromQuaternion(a0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class ap{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gM=0;const s0=new Y,gr=new Us,sa=new qe,Sc=new Y,Ho=new Y,_M=new Y,vM=new Us,r0=new Y(1,0,0),o0=new Y(0,1,0),l0=new Y(0,0,1),c0={type:"added"},yM={type:"removed"},_r={type:"childadded",child:null},Dh={type:"childremoved",child:null};class mn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new Y,i=new Ai,s=new Us,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new ce}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(r0,t)}rotateY(t){return this.rotateOnAxis(o0,t)}rotateZ(t){return this.rotateOnAxis(l0,t)}translateOnAxis(t,i){return s0.copy(t).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(r0,t)}translateY(t){return this.translateOnAxis(o0,t)}translateZ(t){return this.translateOnAxis(l0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Sc.copy(t):Sc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Ho,Sc,this.up):sa.lookAt(Sc,Ho,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),gr.setFromRotationMatrix(sa),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c0),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(yM),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c0),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,t,_M),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,vM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}mn.DEFAULT_UP=new Y(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Y,ra=new Y,Uh=new Y,oa=new Y,vr=new Y,yr=new Y,u0=new Y,Lh=new Y,Nh=new Y,Oh=new Y,Ph=new tn,zh=new tn,Bh=new tn;class si{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Mi.subVectors(l,i),ra.subVectors(s,i),Uh.subVectors(t,i);const f=Mi.dot(Mi),d=Mi.dot(ra),m=Mi.dot(Uh),p=ra.dot(ra),g=ra.dot(Uh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(p*m-d*g)*v,E=(f*g-d*m)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(f,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Ph.setScalar(0),zh.setScalar(0),Bh.setScalar(0),Ph.fromBufferAttribute(t,i),zh.fromBufferAttribute(t,s),Bh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ph,c.x),f.addScaledVector(zh,c.y),f.addScaledVector(Bh,c.z),f}static isFrontFacing(t,i,s,l){return Mi.subVectors(s,i),ra.subVectors(t,i),Mi.cross(ra).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Mi.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return si.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;vr.subVectors(l,s),yr.subVectors(c,s),Lh.subVectors(t,s);const m=vr.dot(Lh),p=yr.dot(Lh);if(m<=0&&p<=0)return i.copy(s);Nh.subVectors(t,l);const g=vr.dot(Nh),_=yr.dot(Nh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(vr,f);Oh.subVectors(t,c);const S=vr.dot(Oh),E=yr.dot(Oh);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(yr,d);const x=g*E-S*_;if(x<=0&&_-g>=0&&S-E>=0)return u0.subVectors(c,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(u0,d);const y=1/(x+b+v);return f=b*y,d=v*y,i.copy(s).addScaledVector(vr,f).addScaledVector(yr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Ih(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=s,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Re.workingColorSpace){if(t=np(t,1),i=ge(i,0,1),s=ge(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Ih(f,c,t+1/3),this.g=Ih(f,c,t),this.b=Ih(f,c,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=Wn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wn){const s=Sv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Or(t.r),this.g=Or(t.g),this.b=Or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Re.fromWorkingColorSpace(Pn.copy(this),t),Math.round(ge(Pn.r*255,0,255))*65536+Math.round(ge(Pn.g*255,0,255))*256+Math.round(ge(Pn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Wn){Re.fromWorkingColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==Wn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+i,qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(qa),t.getHSL(Mc);const s=jo(qa.h,Mc.h,i),l=jo(qa.s,Mc.s,i),c=jo(qa.l,Mc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ue;ue.NAMES=Sv;let xM=0;class Ri extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=Lr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==id&&(s.blendSrc=this.blendSrc),this.blendDst!==ad&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sp extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new Y,Ec=new $t;let SM=0;class jn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Vd,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(t),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ei(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ne(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ei(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ei(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ei(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ei(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Ne(i,this.array),s=Ne(s,this.array),l=Ne(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Ne(i,this.array),s=Ne(s,this.array),l=Ne(l,this.array),c=Ne(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vd&&(t.usage=this.usage),t}}class Mv extends jn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ev extends jn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class $e extends jn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let MM=0;const pi=new qe,Fh=new mn,xr=new Y,ai=new Hr,Go=new Hr,En=new Y;class an extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yv(t)?Ev:Mv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ce().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return Fh.lookAt(t),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $e(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ai.min,Go.min),ai.expandByPoint(En),En.addVectors(ai.max,Go.max),ai.expandByPoint(En)):(ai.expandByPoint(Go.min),ai.expandByPoint(Go.max))}ai.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)En.fromBufferAttribute(d,p),m&&(xr.fromBufferAttribute(t,p),En.add(xr)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new Y,m[V]=new Y;const p=new Y,g=new Y,_=new Y,v=new $t,S=new $t,E=new $t,b=new Y,x=new Y;function y(V,D,C){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,D),_.fromBufferAttribute(s,C),v.fromBufferAttribute(c,V),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(p),_.sub(p),S.sub(v),E.sub(v);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(H),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),d[V].add(b),d[D].add(b),d[C].add(b),m[V].add(x),m[D].add(x),m[C].add(x))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let V=0,D=z.length;V<D;++V){const C=z[V],H=C.start,st=C.count;for(let tt=H,ht=H+st;tt<ht;tt+=3)y(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new Y,R=new Y,F=new Y,O=new Y;function B(V){F.fromBufferAttribute(l,V),O.copy(F);const D=d[V];U.copy(D),U.sub(F.multiplyScalar(F.dot(D))).normalize(),R.crossVectors(O,D);const H=R.dot(m[V])<0?-1:1;f.setXYZW(V,U.x,U.y,U.z,H)}for(let V=0,D=z.length;V<D;++V){const C=z[V],H=C.start,st=C.count;for(let tt=H,ht=H+st;tt<ht;tt+=3)B(t.getX(tt+0)),B(t.getX(tt+1)),B(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new jn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new Y,c=new Y,f=new Y,d=new Y,m=new Y,p=new Y,g=new Y,_=new Y;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),b=t.getX(v+1),x=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,x),d.add(g),m.add(g),p.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let b=0,x=m.length;b<x;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*g;for(let y=0;y<g;y++)v[E++]=p[S++]}return new jn(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new an,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=t(v,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f0=new qe,xs=new nl,bc=new Gr,h0=new Y,Tc=new Y,Ac=new Y,Rc=new Y,Hh=new Y,wc=new Y,d0=new Y,Cc=new Y;class ri extends mn{constructor(t=new an,i=new sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){wc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Hh.fromBufferAttribute(_,t),f?wc.addScaledVector(Hh,g):wc.addScaledVector(Hh.sub(i),g))}i.add(wc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),xs.copy(t.ray).recast(t.near),!(bc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(bc,h0)===null||xs.origin.distanceToSquared(h0)>(t.far-t.near)**2))&&(f0.copy(c).invert(),xs.copy(t.ray).applyMatrix4(f0),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,xs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const x=v[E],y=f[x.materialIndex],z=Math.max(x.start,S.start),U=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=z,F=U;R<F;R+=3){const O=d.getX(R),B=d.getX(R+1),V=d.getX(R+2);l=Dc(this,y,t,s,p,g,_,O,B,V),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=E,y=b;x<y;x+=3){const z=d.getX(x),U=d.getX(x+1),R=d.getX(x+2);l=Dc(this,f,t,s,p,g,_,z,U,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const x=v[E],y=f[x.materialIndex],z=Math.max(x.start,S.start),U=Math.min(m.count,Math.min(x.start+x.count,S.start+S.count));for(let R=z,F=U;R<F;R+=3){const O=R,B=R+1,V=R+2;l=Dc(this,y,t,s,p,g,_,O,B,V),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let x=E,y=b;x<y;x+=3){const z=x,U=x+1,R=x+2;l=Dc(this,f,t,s,p,g,_,z,U,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function EM(r,t,i,s,l,c,f,d){let m;if(t.side===qn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===Qa,d),m===null)return null;Cc.copy(d),Cc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:r}}function Dc(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Tc),r.getVertexPosition(m,Ac),r.getVertexPosition(p,Rc);const g=EM(r,t,i,s,Tc,Ac,Rc,d0);if(g){const _=new Y;si.getBarycoord(d0,Tc,Ac,Rc,_),l&&(g.uv=si.getInterpolatedAttribute(l,d,m,p,_,new $t)),c&&(g.uv1=si.getInterpolatedAttribute(c,d,m,p,_,new $t)),f&&(g.normal=si.getInterpolatedAttribute(f,d,m,p,_,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new Y,materialIndex:0};si.getNormal(Tc,Ac,Rc,v.normal),g.face=v,g.barycoord=_}return g}class il extends an{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(_,2));function E(b,x,y,z,U,R,F,O,B,V,D){const C=R/B,H=F/V,st=R/2,tt=F/2,ht=O/2,ut=B+1,P=V+1;let q=0,X=0;const xt=new Y;for(let L=0;L<P;L++){const $=L*H-tt;for(let yt=0;yt<ut;yt++){const St=yt*C-st;xt[b]=St*z,xt[x]=$*U,xt[y]=ht,p.push(xt.x,xt.y,xt.z),xt[b]=0,xt[x]=0,xt[y]=O>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(yt/B),_.push(1-L/V),q+=1}}for(let L=0;L<V;L++)for(let $=0;$<B;$++){const yt=v+$+ut*L,St=v+$+ut*(L+1),Q=v+($+1)+ut*(L+1),gt=v+($+1)+ut*L;m.push(yt,St,gt),m.push(St,Q,gt),X+=6}d.addGroup(S,X,D),S+=X,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Fr(r[i]);for(const l in s)t[l]=s[l]}return t}function bM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function bv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const TM={clone:Fr,merge:In};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=bM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=da}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new Y,p0=new $t,m0=new $t;class gi extends Tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,i){return this.getViewBounds(t,p0,m0),i.subVectors(m0,p0)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,Mr=1;class wM extends mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Sr,Mr,t,i);l.layers=this.layers,this.add(l);const c=new gi(Sr,Mr,t,i);c.layers=this.layers,this.add(c);const f=new gi(Sr,Mr,t,i);f.layers=this.layers,this.add(f);const d=new gi(Sr,Mr,t,i);d.layers=this.layers,this.add(d);const m=new gi(Sr,Mr,t,i);m.layers=this.layers,this.add(m);const p=new gi(Sr,Mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===da)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===nu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Av extends Yn{constructor(t=[],i=zr,s,l,c,f,d,m,p,g){super(t,i,s,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class CM extends Ds{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Fr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Za});c.uniforms.tEquirect.value=i;const f=new ri(l,c),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=Pi),new wM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Cr extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const x=i.getJointPose(b,s),y=this._getHandJoint(p,b);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Cr;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class UM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class LM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Vd,this.updateRanges=[],this.version=0,this.uuid=pa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new Y;class su{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ei(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Ne(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ei(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ei(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ei(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ei(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ne(i,this.array),s=Ne(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ne(i,this.array),s=Ne(s,this.array),l=Ne(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ne(i,this.array),s=Ne(s,this.array),l=Ne(l,this.array),c=Ne(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new jn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new su(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rp extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Er;const Vo=new Y,br=new Y,Tr=new Y,Ar=new $t,ko=new $t,Rv=new qe,Uc=new Y,Xo=new Y,Lc=new Y,g0=new $t,Vh=new $t,_0=new $t;class wv extends mn{constructor(t=new rp){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new an;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new LM(i,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new su(s,3,0,!1)),Er.setAttribute("uv",new su(s,2,3,!1))}this.geometry=Er,this.material=t,this.center=new $t(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Rv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Tr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;Nc(Uc.set(-.5,-.5,0),Tr,f,br,l,c),Nc(Xo.set(.5,-.5,0),Tr,f,br,l,c),Nc(Lc.set(.5,.5,0),Tr,f,br,l,c),g0.set(0,0),Vh.set(1,0),_0.set(1,1);let d=t.ray.intersectTriangle(Uc,Xo,Lc,!1,Vo);if(d===null&&(Nc(Xo.set(-.5,.5,0),Tr,f,br,l,c),Vh.set(0,1),d=t.ray.intersectTriangle(Uc,Lc,Xo,!1,Vo),d===null))return;const m=t.ray.origin.distanceTo(Vo);m<t.near||m>t.far||i.push({distance:m,point:Vo.clone(),uv:si.getInterpolation(Vo,Uc,Xo,Lc,g0,Vh,_0,new $t),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nc(r,t,i,s,l,c){Ar.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ko.x=c*Ar.x-l*Ar.y,ko.y=l*Ar.x+c*Ar.y):ko.copy(Ar),r.copy(t),r.x+=ko.x,r.y+=ko.y,r.applyMatrix4(Rv)}const kh=new Y,NM=new Y,OM=new ce;class ua{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=kh.subVectors(s,i).cross(NM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(kh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||OM.getNormalMatrix(t),l=this.coplanarPoint(kh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Gr,Oc=new Y;class op{constructor(t=new ua,i=new ua,s=new ua,l=new ua,c=new ua,f=new ua){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=da){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],b=l[10],x=l[11],y=l[12],z=l[13],U=l[14],R=l[15];if(s[0].setComponents(m-c,v-p,x-S,R-y).normalize(),s[1].setComponents(m+c,v+p,x+S,R+y).normalize(),s[2].setComponents(m+f,v+g,x+E,R+z).normalize(),s[3].setComponents(m-f,v-g,x-E,R-z).normalize(),s[4].setComponents(m-d,v-_,x-b,R-U).normalize(),i===da)s[5].setComponents(m+d,v+_,x+b,R+U).normalize();else if(i===nu)s[5].setComponents(d,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zi extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ru=new Y,ou=new Y,v0=new qe,Wo=new nl,Pc=new Gr,Xh=new Y,y0=new Y;class tl extends mn{constructor(t=new an,i=new zi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ru.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ru.distanceTo(ou);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;v0.copy(l).invert(),Wo.copy(t.ray).applyMatrix4(v0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let b=S,x=E-1;b<x;b+=p){const y=g.getX(b),z=g.getX(b+1),U=zc(this,t,Wo,m,y,z,b);U&&i.push(U)}if(this.isLineLoop){const b=g.getX(E-1),x=g.getX(S),y=zc(this,t,Wo,m,b,x,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=S,x=E-1;b<x;b+=p){const y=zc(this,t,Wo,m,b,b+1,b);y&&i.push(y)}if(this.isLineLoop){const b=zc(this,t,Wo,m,E-1,S,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(ru.fromBufferAttribute(d,l),ou.fromBufferAttribute(d,c),i.distanceSqToSegment(ru,ou,Xh,y0)>s)return;Xh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Xh);if(!(p<t.near||p>t.far))return{distance:p,point:y0.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const x0=new Y,S0=new Y;class lu extends tl{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)x0.fromBufferAttribute(i,l),S0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+x0.distanceTo(S0);t.setAttribute("lineDistance",new $e(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qo extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const M0=new qe,kd=new nl,Bc=new Gr,Ic=new Y;class Wh extends mn{constructor(t=new an,i=new qo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;M0.copy(l).invert(),kd.copy(t.ray).applyMatrix4(M0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=v,b=S;E<b;E++){const x=p.getX(E);Ic.fromBufferAttribute(_,x),E0(Ic,x,m,l,t,i,this)}}else{const v=Math.max(0,f.start),S=Math.min(_.count,f.start+f.count);for(let E=v,b=S;E<b;E++)Ic.fromBufferAttribute(_,E),E0(Ic,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function E0(r,t,i,s,l,c,f){const d=kd.distanceSqToPoint(r);if(d<i){const m=new Y;kd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Cv extends Yn{constructor(t,i,s=Cs,l,c,f,d=Ti,m=Ti,p,g=Qo){if(g!==Qo&&g!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ip(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Fc=new Y,Hc=new Y,qh=new Y,Gc=new si;class PM extends an{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Nr*i),f=t.getIndex(),d=t.getAttribute("position"),m=f?f.count:d.count,p=[0,0,0],g=["a","b","c"],_=new Array(3),v={},S=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:x,c:y}=Gc;if(b.fromBufferAttribute(d,p[0]),x.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),Gc.getNormal(qh),_[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,_[1]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,_[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let z=0;z<3;z++){const U=(z+1)%3,R=_[z],F=_[U],O=Gc[g[z]],B=Gc[g[U]],V=`${R}_${F}`,D=`${F}_${R}`;D in v&&v[D]?(qh.dot(v[D].normal)<=c&&(S.push(O.x,O.y,O.z),S.push(B.x,B.y,B.z)),v[D]=null):V in v||(v[V]={index0:p[z],index1:p[U],normal:qh.clone()})}}for(const E in v)if(v[E]){const{index0:b,index1:x}=v[E];Fc.fromBufferAttribute(d,b),Hc.fromBufferAttribute(d,x),S.push(Fc.x,Fc.y,Fc.z),S.push(Hc.x,Hc.y,Hc.z)}this.setAttribute("position",new $e(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class uu extends an{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,v=i/m,S=[],E=[],b=[],x=[];for(let y=0;y<g;y++){const z=y*v-f;for(let U=0;U<p;U++){const R=U*_-c;E.push(R,-z,0),b.push(0,0,1),x.push(U/d),x.push(1-y/m)}}for(let y=0;y<m;y++)for(let z=0;z<d;z++){const U=z+p*y,R=z+p*(y+1),F=z+1+p*(y+1),O=z+1+p*y;S.push(U,R,O),S.push(R,F,O)}this.setIndex(S),this.setAttribute("position",new $e(E,3)),this.setAttribute("normal",new $e(b,3)),this.setAttribute("uv",new $e(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class zM extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class BM extends Ri{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class IM extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FM extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const b0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class HM{constructor(t,i,s){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,d),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const GM=new HM;class fu{constructor(t){this.manager=t!==void 0?t:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fu.DEFAULT_MATERIAL_NAME="__DEFAULT";const la={};class VM extends Error{constructor(t,i){super(t),this.response=i}}class Dv extends fu{constructor(t){super(t),this.mimeType="",this.responseType=""}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=b0.get(t);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(la[t]!==void 0){la[t].push({onLoad:i,onProgress:s,onError:l});return}la[t]=[],la[t].push({onLoad:i,onProgress:s,onError:l});const f=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=la[t],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let b=0;const x=new ReadableStream({start(y){z();function z(){_.read().then(({done:U,value:R})=>{if(U)y.close();else{b+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:S});for(let O=0,B=g.length;O<B;O++){const V=g[O];V.onProgress&&V.onProgress(F)}y.enqueue(R),z()}},U=>{y.error(U)})}}});return new Response(x)}else throw new VM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),v=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{b0.add(t,p);const g=la[t];delete la[t];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=la[t];if(g===void 0)throw this.manager.itemError(t),p;delete la[t];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Uv extends mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Yh=new qe,T0=new Y,A0=new Y;class kM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;T0.setFromMatrixPosition(t.matrixWorld),i.position.copy(T0),A0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A0),i.updateMatrixWorld(),Yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lv extends Tv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class XM extends kM{constructor(){super(new Lv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WM extends Uv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new XM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qM extends Uv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class YM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const R0=new qe;class Nv{constructor(t,i,s=0,l=1/0){this.ray=new nl(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return R0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R0),this}intersectObject(t,i=!0,s=[]){return Xd(t,this,s,i),s.sort(w0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Xd(t[l],this,s,i);return s.sort(w0),s}}function w0(r,t){return r.distance-t.distance}function Xd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Xd(c[f],t,i,!0)}}class C0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ge(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jM extends tl{constructor(t,i=1,s=16776960){const l=s,c=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],f=new an;f.setAttribute("position",new $e(c,3)),f.computeBoundingSphere(),super(f,new zi({color:l,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=i;const d=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],m=new an;m.setAttribute("position",new $e(d,3)),m.computeBoundingSphere(),this.add(new ri(m,new sp({color:l,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}class D0 extends lu{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new an;l.setAttribute("position",new $e(i,3)),l.setAttribute("color",new $e(s,3));const c=new zi({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new ue,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class ZM extends Ls{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function U0(r,t,i,s){const l=KM(s);switch(i){case dv:return r*t;case mv:return r*t/l.components*l.byteLength;case Jd:return r*t/l.components*l.byteLength;case gv:return r*t*2/l.components*l.byteLength;case $d:return r*t*2/l.components*l.byteLength;case pv:return r*t*3/l.components*l.byteLength;case bi:return r*t*4/l.components*l.byteLength;case tp:return r*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case yd:return Math.max(r,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(r,8)*Math.max(t,8)/2;case xd:case Sd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case wd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Qc:case Bd:case Id:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _v:case Fd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Hd:case Gd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KM(r){switch(r){case Bi:case uv:return{byteLength:1,components:1};case Zo:case fv:case el:return{byteLength:2,components:1};case Kd:case Qd:return{byteLength:2,components:4};case Cs:case Zd:case ha:return{byteLength:4,components:1};case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function QM(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],b=_[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const b=_[S];r.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",CE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ob=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ab=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:JM,alphahash_pars_fragment:$M,alphamap_fragment:tE,alphamap_pars_fragment:eE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:rE,batching_vertex:oE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:fE,bumpmap_pars_fragment:hE,clipping_planes_fragment:dE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:_E,color_pars_fragment:vE,color_pars_vertex:yE,color_vertex:xE,common:SE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:EE,displacementmap_pars_vertex:bE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:RE,colorspace_fragment:wE,colorspace_pars_fragment:CE,envmap_fragment:DE,envmap_common_pars_fragment:UE,envmap_pars_fragment:LE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:XE,envmap_vertex:OE,fog_vertex:PE,fog_pars_vertex:zE,fog_fragment:BE,fog_pars_fragment:IE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:HE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:VE,lights_pars_begin:kE,lights_toon_fragment:WE,lights_toon_pars_fragment:qE,lights_phong_fragment:YE,lights_phong_pars_fragment:jE,lights_physical_fragment:ZE,lights_physical_pars_fragment:KE,lights_fragment_begin:QE,lights_fragment_maps:JE,lights_fragment_end:$E,logdepthbuf_fragment:tb,logdepthbuf_pars_fragment:eb,logdepthbuf_pars_vertex:nb,logdepthbuf_vertex:ib,map_fragment:ab,map_pars_fragment:sb,map_particle_fragment:rb,map_particle_pars_fragment:ob,metalnessmap_fragment:lb,metalnessmap_pars_fragment:cb,morphinstance_vertex:ub,morphcolor_vertex:fb,morphnormal_vertex:hb,morphtarget_pars_vertex:db,morphtarget_vertex:pb,normal_fragment_begin:mb,normal_fragment_maps:gb,normal_pars_fragment:_b,normal_pars_vertex:vb,normal_vertex:yb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:Mb,clearcoat_pars_fragment:Eb,iridescence_pars_fragment:bb,opaque_fragment:Tb,packing:Ab,premultiplied_alpha_fragment:Rb,project_vertex:wb,dithering_fragment:Cb,dithering_pars_fragment:Db,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Lb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Ob,shadowmap_vertex:Pb,shadowmask_pars_fragment:zb,skinbase_vertex:Bb,skinning_pars_vertex:Ib,skinning_vertex:Fb,skinnormal_vertex:Hb,specularmap_fragment:Gb,specularmap_pars_fragment:Vb,tonemapping_fragment:kb,tonemapping_pars_fragment:Xb,transmission_fragment:Wb,transmission_pars_fragment:qb,uv_pars_fragment:Yb,uv_pars_vertex:jb,uv_vertex:Zb,worldpos_vertex:Kb,background_vert:Qb,background_frag:Jb,backgroundCube_vert:$b,backgroundCube_frag:tT,cube_vert:eT,cube_frag:nT,depth_vert:iT,depth_frag:aT,distanceRGBA_vert:sT,distanceRGBA_frag:rT,equirect_vert:oT,equirect_frag:lT,linedashed_vert:cT,linedashed_frag:uT,meshbasic_vert:fT,meshbasic_frag:hT,meshlambert_vert:dT,meshlambert_frag:pT,meshmatcap_vert:mT,meshmatcap_frag:gT,meshnormal_vert:_T,meshnormal_frag:vT,meshphong_vert:yT,meshphong_frag:xT,meshphysical_vert:ST,meshphysical_frag:MT,meshtoon_vert:ET,meshtoon_frag:bT,points_vert:TT,points_frag:AT,shadow_vert:RT,shadow_frag:wT,sprite_vert:CT,sprite_frag:DT},Ut={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Oi={basic:{uniforms:In([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:In([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ue(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:In([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:In([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:In([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ue(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:In([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:In([Ut.points,Ut.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:In([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:In([Ut.common,Ut.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:In([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:In([Ut.sprite,Ut.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:In([Ut.common,Ut.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:In([Ut.lights,Ut.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Vc={r:0,b:0,g:0},Ms=new Ai,UT=new qe;function LT(r,t,i,s,l,c,f){const d=new ue(0);let m=c===!0?0:1,p,g,_=null,v=0,S=null;function E(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?i:t).get(R)),R}function b(U){let R=!1;const F=E(U);F===null?y(d,m):F&&F.isColor&&(y(F,1),R=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(U,R){const F=E(R);F&&(F.isCubeTexture||F.mapping===cu)?(g===void 0&&(g=new ri(new il(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Fr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,B,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ms.copy(R.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(Ms)),g.material.toneMapped=Re.getTransfer(F.colorSpace)!==Fe,(_!==F||v!==F.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=F,v=F.version,S=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ri(new uu(2,2),new Ja({name:"BackgroundMaterial",uniforms:Fr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Re.getTransfer(F.colorSpace)!==Fe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||v!==F.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=F,v=F.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,R){U.getRGB(Vc,bv(r)),s.buffers.color.setClear(Vc.r,Vc.g,Vc.b,R,f)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,R=1){d.set(U),m=R,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,y(d,m)},render:b,addToRenderList:x,dispose:z}}function NT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(C,H,st,tt,ht){let ut=!1;const P=_(tt,st,H);c!==P&&(c=P,p(c.object)),ut=S(C,tt,st,ht),ut&&E(C,tt,st,ht),ht!==null&&t.update(ht,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,R(C,H,st,tt),ht!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,H,st){const tt=st.wireframe===!0;let ht=s[C.id];ht===void 0&&(ht={},s[C.id]=ht);let ut=ht[H.id];ut===void 0&&(ut={},ht[H.id]=ut);let P=ut[tt];return P===void 0&&(P=v(m()),ut[tt]=P),P}function v(C){const H=[],st=[],tt=[];for(let ht=0;ht<i;ht++)H[ht]=0,st[ht]=0,tt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:tt,object:C,attributes:{},index:null}}function S(C,H,st,tt){const ht=c.attributes,ut=H.attributes;let P=0;const q=st.getAttributes();for(const X in q)if(q[X].location>=0){const L=ht[X];let $=ut[X];if($===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),L===void 0||L.attribute!==$||$&&L.data!==$.data)return!0;P++}return c.attributesNum!==P||c.index!==tt}function E(C,H,st,tt){const ht={},ut=H.attributes;let P=0;const q=st.getAttributes();for(const X in q)if(q[X].location>=0){let L=ut[X];L===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const $={};$.attribute=L,L&&L.data&&($.data=L.data),ht[X]=$,P++}c.attributes=ht,c.attributesNum=P,c.index=tt}function b(){const C=c.newAttributes;for(let H=0,st=C.length;H<st;H++)C[H]=0}function x(C){y(C,0)}function y(C,H){const st=c.newAttributes,tt=c.enabledAttributes,ht=c.attributeDivisors;st[C]=1,tt[C]===0&&(r.enableVertexAttribArray(C),tt[C]=1),ht[C]!==H&&(r.vertexAttribDivisor(C,H),ht[C]=H)}function z(){const C=c.newAttributes,H=c.enabledAttributes;for(let st=0,tt=H.length;st<tt;st++)H[st]!==C[st]&&(r.disableVertexAttribArray(st),H[st]=0)}function U(C,H,st,tt,ht,ut,P){P===!0?r.vertexAttribIPointer(C,H,st,ht,ut):r.vertexAttribPointer(C,H,st,tt,ht,ut)}function R(C,H,st,tt){b();const ht=tt.attributes,ut=st.getAttributes(),P=H.defaultAttributeValues;for(const q in ut){const X=ut[q];if(X.location>=0){let xt=ht[q];if(xt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const L=xt.normalized,$=xt.itemSize,yt=t.get(xt);if(yt===void 0)continue;const St=yt.buffer,Q=yt.type,gt=yt.bytesPerElement,ot=Q===r.INT||Q===r.UNSIGNED_INT||xt.gpuType===Zd;if(xt.isInterleavedBufferAttribute){const At=xt.data,Rt=At.stride,Wt=xt.offset;if(At.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)y(X.location+Gt,At.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)x(X.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Gt=0;Gt<X.locationSize;Gt++)U(X.location+Gt,$/X.locationSize,Q,L,Rt*gt,(Wt+$/X.locationSize*Gt)*gt,ot)}else{if(xt.isInstancedBufferAttribute){for(let At=0;At<X.locationSize;At++)y(X.location+At,xt.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let At=0;At<X.locationSize;At++)x(X.location+At);r.bindBuffer(r.ARRAY_BUFFER,St);for(let At=0;At<X.locationSize;At++)U(X.location+At,$/X.locationSize,Q,L,$*gt,$/X.locationSize*At*gt,ot)}}else if(P!==void 0){const L=P[q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(X.location,L);break;case 3:r.vertexAttrib3fv(X.location,L);break;case 4:r.vertexAttrib4fv(X.location,L);break;default:r.vertexAttrib1fv(X.location,L)}}}}z()}function F(){V();for(const C in s){const H=s[C];for(const st in H){const tt=H[st];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete H[st]}delete s[C]}}function O(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const st in H){const tt=H[st];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete H[st]}delete s[C.id]}function B(C){for(const H in s){const st=s[H];if(st[C.id]===void 0)continue;const tt=st[C.id];for(const ht in tt)g(tt[ht].object),delete tt[ht];delete st[C.id]}}function V(){D(),f=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:x,disableUnusedAttributes:z}}function OT(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,s,1)}function m(p,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function PT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==bi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const V=B===el&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Bi&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ha&&!V)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:R,vertexTextures:F,maxSamples:O}}function zT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ua,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||s!==0||l;return l=v,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,y=r.get(_);if(!l||E===null||E.length===0||c&&!x)c?g(null):p();else{const z=c?0:s,U=z*4;let R=y.clippingState||null;m.value=R,R=g(E,v,U,S);for(let F=0;F!==U;++F)R[F]=i[F];y.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,S,E){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=m.value,E!==!0||x===null){const y=S+b*4,z=v.matrixWorldInverse;d.getNormalMatrix(z),(x===null||x.length<y)&&(x=new Float32Array(y));for(let U=0,R=S;U!==b;++U,R+=4)f.copy(_[U]).applyMatrix4(z,d),f.normal.toArray(x,R),x[R+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function BT(r){let t=new WeakMap;function i(f,d){return d===hd?f.mapping=zr:d===dd&&(f.mapping=Br),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===hd||d===dd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new CM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Dr=4,L0=[.125,.215,.35,.446,.526,.582],As=20,jh=new Lv,N0=new ue;let Zh=null,Kh=0,Qh=0,Jh=!1;const bs=(1+Math.sqrt(5))/2,Rr=1/bs,O0=[new Y(-bs,Rr,0),new Y(bs,Rr,0),new Y(-Rr,0,bs),new Y(Rr,0,bs),new Y(0,bs,-Rr),new Y(0,bs,Rr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],IT=new Y;class P0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=IT}=c;Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zh,Kh,Qh),this._renderer.xr.enabled=Jh,t.scissorTest=!1,kc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zr||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zh=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:el,format:bi,colorSpace:Ir,depthBuffer:!1},l=z0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(c)),this._blurMaterial=HT(c,t,i)}return l}_compileMaterial(t){const i=new ri(this._lodPlanes[0],t);this._renderer.compile(i,jh)}_sceneToCubeUV(t,i,s,l,c){const m=new gi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(N0),_.toneMapping=Ka,_.autoClear=!1;const E=new sp({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),b=new ri(new il,E);let x=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,x=!0):(E.color.copy(N0),x=!0);for(let z=0;z<6;z++){const U=z%3;U===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[z],c.y,c.z)):U===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[z]));const R=this._cubeSize;kc(l,U*R,z>2?R:0,R,R),_.setRenderTarget(l),x&&_.render(b,m),_.render(t,m)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===zr||t.mapping===Br;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;kc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,jh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=O0[(l-c-1)%O0.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ri(this._lodPlanes[l],p),v=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*As-1),b=c/E,x=isFinite(c)?1+Math.floor(g*b):As;x>As&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${As}`);const y=[];let z=0;for(let B=0;B<As;++B){const V=B/b,D=Math.exp(-V*V/2);y.push(D),B===0?z+=D:B<x&&(z+=2*D)}for(let B=0;B<y.length;B++)y[B]=y[B]/z;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-s;const R=this._sizeLods[l],F=3*R*(l>U-Dr?l-U+Dr:0),O=4*(this._cubeSize-R);kc(i,F,O,3*R,2*R),m.setRenderTarget(i),m.render(_,jh)}}function FT(r){const t=[],i=[],s=[];let l=r;const c=r-Dr+1+L0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>r-Dr?m=L0[f-r+Dr-1]:f===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,x=2,y=1,z=new Float32Array(b*E*S),U=new Float32Array(x*E*S),R=new Float32Array(y*E*S);for(let O=0;O<S;O++){const B=O%3*2/3-1,V=O>2?0:-1,D=[B,V,0,B+2/3,V,0,B+2/3,V+1,0,B,V,0,B+2/3,V+1,0,B,V+1,0];z.set(D,b*E*O),U.set(v,x*E*O);const C=[O,O,O,O,O,O];R.set(C,y*E*O)}const F=new an;F.setAttribute("position",new jn(z,b)),F.setAttribute("uv",new jn(U,x)),F.setAttribute("faceIndex",new jn(R,y)),t.push(F),l>Dr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function z0(r,t,i){const s=new Ds(r,t,i);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function HT(r,t,i){const s=new Float32Array(As),l=new Y(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function B0(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function I0(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===hd||m===dd,g=m===zr||m===Br;if(p||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new P0(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new P0(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function VT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Jc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function kT(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,E=_.attributes.position;let b=0;if(S!==null){const z=S.array;b=S.version;for(let U=0,R=z.length;U<R;U+=3){const F=z[U+0],O=z[U+1],B=z[U+2];v.push(F,O,O,B,B,F)}}else if(E!==void 0){const z=E.array;b=E.version;for(let U=0,R=z.length/3-1;U<R;U+=3){const F=U+0,O=U+1,B=U+2;v.push(F,O,O,B,B,F)}}else return;const x=new(yv(v)?Ev:Mv)(v,1);x.version=b;const y=c.get(_);y&&t.remove(y),c.set(_,x)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function XT(r,t,i){let s;function l(v){s=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,S){r.drawElements(s,S,c,v*f),i.update(S,s,1)}function p(v,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,v*f,E),i.update(S,s,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,v,0,E);let x=0;for(let y=0;y<E;y++)x+=S[y];i.update(x,s,1)}function _(v,S,E,b){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/f,S[y],b[y]);else{x.multiDrawElementsInstancedWEBGL(s,S,0,c,v,0,b,0,E);let y=0;for(let z=0;z<E;z++)y+=S[z]*b[z];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function WT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function qT(r,t,i){const s=new WeakMap,l=new tn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let C=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let R=0;E===!0&&(R=1),b===!0&&(R=2),x===!0&&(R=3);let F=d.attributes.position.count*R,O=1;F>t.maxTextureSize&&(O=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const B=new Float32Array(F*O*4*_),V=new xv(B,F,O,_);V.type=ha,V.needsUpdate=!0;const D=R*4;for(let H=0;H<_;H++){const st=y[H],tt=z[H],ht=U[H],ut=F*O*4*H;for(let P=0;P<st.count;P++){const q=P*D;E===!0&&(l.fromBufferAttribute(st,P),B[ut+q+0]=l.x,B[ut+q+1]=l.y,B[ut+q+2]=l.z,B[ut+q+3]=0),b===!0&&(l.fromBufferAttribute(tt,P),B[ut+q+4]=l.x,B[ut+q+5]=l.y,B[ut+q+6]=l.z,B[ut+q+7]=0),x===!0&&(l.fromBufferAttribute(ht,P),B[ut+q+8]=l.x,B[ut+q+9]=l.y,B[ut+q+10]=l.z,B[ut+q+11]=ht.itemSize===4?l.w:1)}}v={count:_,texture:V,size:new $t(F,O)},s.set(d,v),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function YT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const Pv=new Yn,F0=new Cv(1,1),zv=new xv,Bv=new hM,Iv=new Av,H0=[],G0=[],V0=new Float32Array(16),k0=new Float32Array(9),X0=new Float32Array(4);function Vr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=H0[l];if(c===void 0&&(c=new Float32Array(l),H0[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function hu(r,t){let i=G0[t];i===void 0&&(i=new Int32Array(t),G0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function jT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function JT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;X0.set(s),r.uniformMatrix2fv(this.addr,!1,X0),_n(i,s)}}function $T(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;k0.set(s),r.uniformMatrix3fv(this.addr,!1,k0),_n(i,s)}}function tA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;V0.set(s),r.uniformMatrix4fv(this.addr,!1,V0),_n(i,s)}}function eA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function nA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function sA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function rA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function cA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(F0.compareFunction=vv,c=F0):c=Pv,i.setTexture2D(t||c,l)}function uA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Bv,l)}function fA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Iv,l)}function hA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||zv,l)}function dA(r){switch(r){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}function pA(r,t){r.uniform1fv(this.addr,t)}function mA(r,t){const i=Vr(t,this.size,2);r.uniform2fv(this.addr,i)}function gA(r,t){const i=Vr(t,this.size,3);r.uniform3fv(this.addr,i)}function _A(r,t){const i=Vr(t,this.size,4);r.uniform4fv(this.addr,i)}function vA(r,t){const i=Vr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function yA(r,t){const i=Vr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function xA(r,t){const i=Vr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function SA(r,t){r.uniform1iv(this.addr,t)}function MA(r,t){r.uniform2iv(this.addr,t)}function EA(r,t){r.uniform3iv(this.addr,t)}function bA(r,t){r.uniform4iv(this.addr,t)}function TA(r,t){r.uniform1uiv(this.addr,t)}function AA(r,t){r.uniform2uiv(this.addr,t)}function RA(r,t){r.uniform3uiv(this.addr,t)}function wA(r,t){r.uniform4uiv(this.addr,t)}function CA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Pv,c[f])}function DA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Bv,c[f])}function UA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Iv,c[f])}function LA(r,t,i){const s=this.cache,l=t.length,c=hu(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||zv,c[f])}function NA(r){switch(r){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return yA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return LA}}class OA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=dA(i.type)}}class PA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NA(i.type)}}class zA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function W0(r,t){r.seq.push(t),r.map[t.id]=t}function BA(r,t,i){const s=r.name,l=s.length;for($h.lastIndex=0;;){const c=$h.exec(s),f=$h.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){W0(i,p===void 0?new OA(d,r,t):new PA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new zA(d),W0(i,_)),i=_}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);BA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function q0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const IA=37297;let FA=0;function HA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Y0=new ce;function GA(r){Re._getMatrix(Y0,Re.workingColorSpace,r);const t=`mat3( ${Y0.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(r)){case eu:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function j0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+HA(r.getShaderSource(t),f)}else return l}function VA(r,t){const i=GA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function kA(r,t){let i;switch(t){case ES:i="Linear";break;case bS:i="Reinhard";break;case TS:i="Cineon";break;case AS:i="ACESFilmic";break;case wS:i="AgX";break;case CS:i="Neutral";break;case RS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new Y;function XA(){Re.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function qA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function YA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Yo(r){return r!==""}function Z0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(r){return r.replace(jA,KA)}const ZA=new Map;function KA(r,t){let i=fe[t];if(i===void 0){const s=ZA.get(t);if(s!==void 0)i=fe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Wd(i)}const QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(r){return r.replace(QA,JA)}function JA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $A(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===nS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function t1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case Br:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function n1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jd:t="ENVMAP_BLENDING_MULTIPLY";break;case SS:t="ENVMAP_BLENDING_MIX";break;case MS:t="ENVMAP_BLENDING_ADD";break}return t}function i1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function a1(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=$A(i),p=t1(i),g=e1(i),_=n1(i),v=i1(i),S=WA(i),E=qA(c),b=l.createProgram();let x,y,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),y.length>0&&(y+=`
`)):(x=[J0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),y=[J0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ka?kA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,VA("linearToOutputTexel",i.outputColorSpace),XA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=Wd(f),f=Z0(f,i),f=K0(f,i),d=Wd(d),d=Z0(d,i),d=K0(d,i),f=Q0(f),d=Q0(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",i.glslVersion===Q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=z+x+f,R=z+y+d,F=q0(l,l.VERTEX_SHADER,U),O=q0(l,l.FRAGMENT_SHADER,R);l.attachShader(b,F),l.attachShader(b,O),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(H){if(r.debug.checkShaderErrors){const st=l.getProgramInfoLog(b).trim(),tt=l.getShaderInfoLog(F).trim(),ht=l.getShaderInfoLog(O).trim();let ut=!0,P=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ut=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,b,F,O);else{const q=j0(l,F,"vertex"),X=j0(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+q+`
`+X)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(tt===""||ht==="")&&(P=!1);P&&(H.diagnostics={runnable:ut,programLog:st,vertexShader:{log:tt,prefix:x},fragmentShader:{log:ht,prefix:y}})}l.deleteShader(F),l.deleteShader(O),V=new $c(l,b),D=YA(l,b)}let V;this.getUniforms=function(){return V===void 0&&B(this),V};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,IA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=O,this}let s1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new o1(t),i.set(t,s)),s}}class o1{constructor(t){this.id=s1++,this.code=t,this.usedTimes=0}}function l1(r,t,i,s,l,c,f){const d=new ap,m=new r1,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,C,H,st,tt){const ht=st.fog,ut=tt.geometry,P=D.isMeshStandardMaterial?st.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),X=q&&q.mapping===cu?q.image.height:null,xt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const L=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=L!==void 0?L.length:0;let yt=0;ut.morphAttributes.position!==void 0&&(yt=1),ut.morphAttributes.normal!==void 0&&(yt=2),ut.morphAttributes.color!==void 0&&(yt=3);let St,Q,gt,ot;if(xt){const be=Oi[xt];St=be.vertexShader,Q=be.fragmentShader}else St=D.vertexShader,Q=D.fragmentShader,m.update(D),gt=m.getVertexShaderID(D),ot=m.getFragmentShaderID(D);const At=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Wt=tt.isInstancedMesh===!0,Gt=tt.isBatchedMesh===!0,Oe=!!D.map,Ce=!!D.matcap,oe=!!q,G=!!D.aoMap,Cn=!!D.lightMap,se=!!D.bumpMap,Qt=!!D.normalMap,Ft=!!D.displacementMap,De=!!D.emissiveMap,Vt=!!D.metalnessMap,N=!!D.roughnessMap,T=D.anisotropy>0,nt=D.clearcoat>0,mt=D.dispersion>0,Mt=D.iridescence>0,ft=D.sheen>0,Lt=D.transmission>0,Et=T&&!!D.anisotropyMap,wt=nt&&!!D.clearcoatMap,Yt=nt&&!!D.clearcoatNormalMap,bt=nt&&!!D.clearcoatRoughnessMap,Bt=Mt&&!!D.iridescenceMap,Kt=Mt&&!!D.iridescenceThicknessMap,te=ft&&!!D.sheenColorMap,Pt=ft&&!!D.sheenRoughnessMap,he=!!D.specularMap,ae=!!D.specularColorMap,Pe=!!D.specularIntensityMap,W=Lt&&!!D.transmissionMap,Nt=Lt&&!!D.thicknessMap,ct=!!D.gradientMap,_t=!!D.alphaMap,zt=D.alphaTest>0,Ot=!!D.alphaHash,re=!!D.extensions;let ke=Ka;D.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ke=r.toneMapping);const sn={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:Q,defines:D.defines,customVertexShaderID:gt,customFragmentShaderID:ot,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Gt,batchingColor:Gt&&tt._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&tt.instanceColor!==null,instancingMorph:Wt&&tt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?r.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ir,alphaToCoverage:!!D.alphaToCoverage,map:Oe,matcap:Ce,envMap:oe,envMapMode:oe&&q.mapping,envMapCubeUVHeight:X,aoMap:G,lightMap:Cn,bumpMap:se,normalMap:Qt,displacementMap:v&&Ft,emissiveMap:De,normalMapObjectSpace:Qt&&D.normalMapType===NS,normalMapTangentSpace:Qt&&D.normalMapType===ep,metalnessMap:Vt,roughnessMap:N,anisotropy:T,anisotropyMap:Et,clearcoat:nt,clearcoatMap:wt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:Mt,iridescenceMap:Bt,iridescenceThicknessMap:Kt,sheen:ft,sheenColorMap:te,sheenRoughnessMap:Pt,specularMap:he,specularColorMap:ae,specularIntensityMap:Pe,transmission:Lt,transmissionMap:W,thicknessMap:Nt,gradientMap:ct,opaque:D.transparent===!1&&D.blending===Lr&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:zt,alphaHash:Ot,combine:D.combine,mapUv:Oe&&b(D.map.channel),aoMapUv:G&&b(D.aoMap.channel),lightMapUv:Cn&&b(D.lightMap.channel),bumpMapUv:se&&b(D.bumpMap.channel),normalMapUv:Qt&&b(D.normalMap.channel),displacementMapUv:Ft&&b(D.displacementMap.channel),emissiveMapUv:De&&b(D.emissiveMap.channel),metalnessMapUv:Vt&&b(D.metalnessMap.channel),roughnessMapUv:N&&b(D.roughnessMap.channel),anisotropyMapUv:Et&&b(D.anisotropyMap.channel),clearcoatMapUv:wt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:te&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(D.sheenRoughnessMap.channel),specularMapUv:he&&b(D.specularMap.channel),specularColorMapUv:ae&&b(D.specularColorMap.channel),specularIntensityMapUv:Pe&&b(D.specularIntensityMap.channel),transmissionMapUv:W&&b(D.transmissionMap.channel),thicknessMapUv:Nt&&b(D.thicknessMap.channel),alphaMapUv:_t&&b(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Qt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ut.attributes.uv&&(Oe||_t),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Rt,skinning:tt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:yt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Oe&&D.map.isVideoTexture===!0&&Re.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:De&&D.emissiveMap.isVideoTexture===!0&&Re.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===fa,flipSided:D.side===qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:re&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&D.extensions.multiDraw===!0||Gt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(z(C,D),U(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function z(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function R(D){const C=E[D.type];let H;if(C){const st=Oi[C];H=TM.clone(st.uniforms)}else H=D.uniforms;return H}function F(D,C){let H;for(let st=0,tt=g.length;st<tt;st++){const ht=g[st];if(ht.cacheKey===C){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new a1(r,C,D,c),g.push(H)),H}function O(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function V(){m.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:R,acquireProgram:F,releaseProgram:O,releaseShaderCache:B,programs:g,dispose:V}}function c1(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function u1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function tv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,v,S,E,b,x){let y=r[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:b,group:x},r[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=b,y.group=x),t++,y}function d(_,v,S,E,b,x){const y=f(_,v,S,E,b,x);S.transmission>0?s.push(y):S.transparent===!0?l.push(y):i.push(y)}function m(_,v,S,E,b,x){const y=f(_,v,S,E,b,x);S.transmission>0?s.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function p(_,v){i.length>1&&i.sort(_||u1),s.length>1&&s.sort(v||$0),l.length>1&&l.sort(v||$0)}function g(){for(let _=t,v=r.length;_<v;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function f1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new tv,r.set(s,[f])):l>=c.length?(f=new tv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function h1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new ue};break;case"SpotLight":i={position:new Y,direction:new Y,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=i,i}}}function d1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let p1=0;function m1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function g1(r){const t=new h1,i=d1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new qe,f=new qe;function d(p){let g=0,_=0,v=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,E=0,b=0,x=0,y=0,z=0,U=0,R=0,F=0,O=0,B=0;p.sort(m1);for(let D=0,C=p.length;D<C;D++){const H=p[D],st=H.color,tt=H.intensity,ht=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*tt,_+=st.g*tt,v+=st.b*tt;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],tt);B++}else if(H.isDirectionalLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.directionalShadow[S]=X,s.directionalShadowMap[S]=ut,s.directionalShadowMatrix[S]=H.shadow.matrix,z++}s.directional[S]=P,S++}else if(H.isSpotLight){const P=t.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(st).multiplyScalar(tt),P.distance=ht,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[b]=P;const q=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,q.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[b]=q.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.spotShadow[b]=X,s.spotShadowMap[b]=ut,R++}b++}else if(H.isRectAreaLight){const P=t.get(H);P.color.copy(st).multiplyScalar(tt),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=P,x++}else if(H.isPointLight){const P=t.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const q=H.shadow,X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=ut,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=P,E++}else if(H.isHemisphereLight){const P=t.get(H);P.skyColor.copy(H.color).multiplyScalar(tt),P.groundColor.copy(H.groundColor).multiplyScalar(tt),s.hemi[y]=P,y++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==b||V.rectAreaLength!==x||V.hemiLength!==y||V.numDirectionalShadows!==z||V.numPointShadows!==U||V.numSpotShadows!==R||V.numSpotMaps!==F||V.numLightProbes!==B)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=x,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=R+F-O,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=B,V.directionalLength=S,V.pointLength=E,V.spotLength=b,V.rectAreaLength=x,V.hemiLength=y,V.numDirectionalShadows=z,V.numPointShadows=U,V.numSpotShadows=R,V.numSpotMaps=F,V.numLightProbes=B,s.version=p1++)}function m(p,g){let _=0,v=0,S=0,E=0,b=0;const x=g.matrixWorldInverse;for(let y=0,z=p.length;y<z;y++){const U=p[y];if(U.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),_++}else if(U.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),S++}else if(U.isRectAreaLight){const R=s.rectArea[E];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(x),f.identity(),c.copy(U.matrixWorld),c.premultiply(x),f.extractRotation(c),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const R=s.point[v];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(x),v++}else if(U.isHemisphereLight){const R=s.hemi[b];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(x),b++}}}return{setup:d,setupView:m,state:s}}function ev(r){const t=new g1(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function _1(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new ev(r),t.set(l,[d])):c>=f.length?(d=new ev(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x1(r,t,i){let s=new op;const l=new $t,c=new $t,f=new tn,d=new IM({depthPacking:LS}),m=new FM,p={},g=i.maxTextureSize,_={[Qa]:qn,[qn]:Qa,[fa]:fa},v=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:v1,fragmentShader:y1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new an;E.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ri(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let y=this.type;this.render=function(O,B,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),st=r.state;st.setBlending(Za),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const tt=y!==ca&&this.type===ca,ht=y===ca&&this.type!==ca;for(let ut=0,P=O.length;ut<P;ut++){const q=O[ut],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const xt=X.getFrameExtents();if(l.multiply(xt),c.copy(X.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,X.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,X.mapSize.y=c.y)),X.map===null||tt===!0||ht===!0){const $=this.type!==ca?{minFilter:Ti,magFilter:Ti}:{};X.map!==null&&X.map.dispose(),X.map=new Ds(l.x,l.y,$),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const L=X.getViewportCount();for(let $=0;$<L;$++){const yt=X.getViewport($);f.set(c.x*yt.x,c.y*yt.y,c.x*yt.z,c.y*yt.w),st.viewport(f),X.updateMatrices(q,$),s=X.getFrustum(),R(B,V,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===ca&&z(X,V),X.needsUpdate=!1}y=this.type,x.needsUpdate=!1,r.setRenderTarget(D,C,H)};function z(O,B){const V=t.update(b);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ds(l.x,l.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(B,null,V,v,b,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(B,null,V,S,b,null)}function U(O,B,V,D){let C=null;const H=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)C=H;else if(C=V.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const st=C.uuid,tt=B.uuid;let ht=p[st];ht===void 0&&(ht={},p[st]=ht);let ut=ht[tt];ut===void 0&&(ut=C.clone(),ht[tt]=ut,B.addEventListener("dispose",F)),C=ut}if(C.visible=B.visible,C.wireframe=B.wireframe,D===ca?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:_[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const st=r.properties.get(C);st.light=V}return C}function R(O,B,V,D,C){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===ca)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const tt=t.update(O),ht=O.material;if(Array.isArray(ht)){const ut=tt.groups;for(let P=0,q=ut.length;P<q;P++){const X=ut[P],xt=ht[X.materialIndex];if(xt&&xt.visible){const L=U(O,xt,D,C);O.onBeforeShadow(r,O,B,V,tt,L,X),r.renderBufferDirect(V,null,tt,L,O,X),O.onAfterShadow(r,O,B,V,tt,L,X)}}}else if(ht.visible){const ut=U(O,ht,D,C);O.onBeforeShadow(r,O,B,V,tt,ut,null),r.renderBufferDirect(V,null,tt,ut,O,null),O.onAfterShadow(r,O,B,V,tt,ut,null)}}const st=O.children;for(let tt=0,ht=st.length;tt<ht;tt++)R(st[tt],B,V,D,C)}function F(O){O.target.removeEventListener("dispose",F);for(const V in p){const D=p[V],C=O.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const S1={[sd]:rd,[od]:ud,[ld]:fd,[Pr]:cd,[rd]:sd,[ud]:od,[fd]:ld,[cd]:Pr};function M1(r,t){function i(){let W=!1;const Nt=new tn;let ct=null;const _t=new tn(0,0,0,0);return{setMask:function(zt){ct!==zt&&!W&&(r.colorMask(zt,zt,zt,zt),ct=zt)},setLocked:function(zt){W=zt},setClear:function(zt,Ot,re,ke,sn){sn===!0&&(zt*=ke,Ot*=ke,re*=ke),Nt.set(zt,Ot,re,ke),_t.equals(Nt)===!1&&(r.clearColor(zt,Ot,re,ke),_t.copy(Nt))},reset:function(){W=!1,ct=null,_t.set(-1,0,0,0)}}}function s(){let W=!1,Nt=!1,ct=null,_t=null,zt=null;return{setReversed:function(Ot){if(Nt!==Ot){const re=t.get("EXT_clip_control");Ot?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT),Nt=Ot;const ke=zt;zt=null,this.setClear(ke)}},getReversed:function(){return Nt},setTest:function(Ot){Ot?At(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(Ot){ct!==Ot&&!W&&(r.depthMask(Ot),ct=Ot)},setFunc:function(Ot){if(Nt&&(Ot=S1[Ot]),_t!==Ot){switch(Ot){case sd:r.depthFunc(r.NEVER);break;case rd:r.depthFunc(r.ALWAYS);break;case od:r.depthFunc(r.LESS);break;case Pr:r.depthFunc(r.LEQUAL);break;case ld:r.depthFunc(r.EQUAL);break;case cd:r.depthFunc(r.GEQUAL);break;case ud:r.depthFunc(r.GREATER);break;case fd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=Ot}},setLocked:function(Ot){W=Ot},setClear:function(Ot){zt!==Ot&&(Nt&&(Ot=1-Ot),r.clearDepth(Ot),zt=Ot)},reset:function(){W=!1,ct=null,_t=null,zt=null,Nt=!1}}}function l(){let W=!1,Nt=null,ct=null,_t=null,zt=null,Ot=null,re=null,ke=null,sn=null;return{setTest:function(be){W||(be?At(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(be){Nt!==be&&!W&&(r.stencilMask(be),Nt=be)},setFunc:function(be,Zn,vn){(ct!==be||_t!==Zn||zt!==vn)&&(r.stencilFunc(be,Zn,vn),ct=be,_t=Zn,zt=vn)},setOp:function(be,Zn,vn){(Ot!==be||re!==Zn||ke!==vn)&&(r.stencilOp(be,Zn,vn),Ot=be,re=Zn,ke=vn)},setLocked:function(be){W=be},setClear:function(be){sn!==be&&(r.clearStencil(be),sn=be)},reset:function(){W=!1,Nt=null,ct=null,_t=null,zt=null,Ot=null,re=null,ke=null,sn=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,b=!1,x=null,y=null,z=null,U=null,R=null,F=null,O=null,B=new ue(0,0,0),V=0,D=!1,C=null,H=null,st=null,tt=null,ht=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),P=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),P=q>=2);let xt=null,L={};const $=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),St=new tn().fromArray($),Q=new tn().fromArray(yt);function gt(W,Nt,ct,_t){const zt=new Uint8Array(4),Ot=r.createTexture();r.bindTexture(W,Ot),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let re=0;re<ct;re++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Nt+re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Ot}const ot={};ot[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),ot[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ot[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),At(r.DEPTH_TEST),f.setFunc(Pr),se(!1),Qt(q_),At(r.CULL_FACE),G(Za);function At(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function Rt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Wt(W,Nt){return _[W]!==Nt?(r.bindFramebuffer(W,Nt),_[W]=Nt,W===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Nt),W===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Gt(W,Nt){let ct=S,_t=!1;if(W){ct=v.get(Nt),ct===void 0&&(ct=[],v.set(Nt,ct));const zt=W.textures;if(ct.length!==zt.length||ct[0]!==r.COLOR_ATTACHMENT0){for(let Ot=0,re=zt.length;Ot<re;Ot++)ct[Ot]=r.COLOR_ATTACHMENT0+Ot;ct.length=zt.length,_t=!0}}else ct[0]!==r.BACK&&(ct[0]=r.BACK,_t=!0);_t&&r.drawBuffers(ct)}function Oe(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Ce={[Ts]:r.FUNC_ADD,[aS]:r.FUNC_SUBTRACT,[sS]:r.FUNC_REVERSE_SUBTRACT};Ce[rS]=r.MIN,Ce[oS]=r.MAX;const oe={[lS]:r.ZERO,[cS]:r.ONE,[uS]:r.SRC_COLOR,[id]:r.SRC_ALPHA,[gS]:r.SRC_ALPHA_SATURATE,[pS]:r.DST_COLOR,[hS]:r.DST_ALPHA,[fS]:r.ONE_MINUS_SRC_COLOR,[ad]:r.ONE_MINUS_SRC_ALPHA,[mS]:r.ONE_MINUS_DST_COLOR,[dS]:r.ONE_MINUS_DST_ALPHA,[_S]:r.CONSTANT_COLOR,[vS]:r.ONE_MINUS_CONSTANT_COLOR,[yS]:r.CONSTANT_ALPHA,[xS]:r.ONE_MINUS_CONSTANT_ALPHA};function G(W,Nt,ct,_t,zt,Ot,re,ke,sn,be){if(W===Za){b===!0&&(Rt(r.BLEND),b=!1);return}if(b===!1&&(At(r.BLEND),b=!0),W!==iS){if(W!==x||be!==D){if((y!==Ts||R!==Ts)&&(r.blendEquation(r.FUNC_ADD),y=Ts,R=Ts),be)switch(W){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFunc(r.ONE,r.ONE);break;case j_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case j_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}z=null,U=null,F=null,O=null,B.set(0,0,0),V=0,x=W,D=be}return}zt=zt||Nt,Ot=Ot||ct,re=re||_t,(Nt!==y||zt!==R)&&(r.blendEquationSeparate(Ce[Nt],Ce[zt]),y=Nt,R=zt),(ct!==z||_t!==U||Ot!==F||re!==O)&&(r.blendFuncSeparate(oe[ct],oe[_t],oe[Ot],oe[re]),z=ct,U=_t,F=Ot,O=re),(ke.equals(B)===!1||sn!==V)&&(r.blendColor(ke.r,ke.g,ke.b,sn),B.copy(ke),V=sn),x=W,D=!1}function Cn(W,Nt){W.side===fa?Rt(r.CULL_FACE):At(r.CULL_FACE);let ct=W.side===qn;Nt&&(ct=!ct),se(ct),W.blending===Lr&&W.transparent===!1?G(Za):G(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),De(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?At(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){C!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),C=W)}function Qt(W){W!==tS?(At(r.CULL_FACE),W!==H&&(W===q_?r.cullFace(r.BACK):W===eS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),H=W}function Ft(W){W!==st&&(P&&r.lineWidth(W),st=W)}function De(W,Nt,ct){W?(At(r.POLYGON_OFFSET_FILL),(tt!==Nt||ht!==ct)&&(r.polygonOffset(Nt,ct),tt=Nt,ht=ct)):Rt(r.POLYGON_OFFSET_FILL)}function Vt(W){W?At(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function N(W){W===void 0&&(W=r.TEXTURE0+ut-1),xt!==W&&(r.activeTexture(W),xt=W)}function T(W,Nt,ct){ct===void 0&&(xt===null?ct=r.TEXTURE0+ut-1:ct=xt);let _t=L[ct];_t===void 0&&(_t={type:void 0,texture:void 0},L[ct]=_t),(_t.type!==W||_t.texture!==Nt)&&(xt!==ct&&(r.activeTexture(ct),xt=ct),r.bindTexture(W,Nt||ot[W]),_t.type=W,_t.texture=Nt)}function nt(){const W=L[xt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function mt(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(W){St.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),St.copy(W))}function Pt(W){Q.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function he(W,Nt){let ct=p.get(Nt);ct===void 0&&(ct=new WeakMap,p.set(Nt,ct));let _t=ct.get(W);_t===void 0&&(_t=r.getUniformBlockIndex(Nt,W.name),ct.set(W,_t))}function ae(W,Nt){const _t=p.get(Nt).get(W);m.get(Nt)!==_t&&(r.uniformBlockBinding(Nt,_t,W.__bindingPointIndex),m.set(Nt,_t))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xt=null,L={},_={},v=new WeakMap,S=[],E=null,b=!1,x=null,y=null,z=null,U=null,R=null,F=null,O=null,B=new ue(0,0,0),V=0,D=!1,C=null,H=null,st=null,tt=null,ht=null,St.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:At,disable:Rt,bindFramebuffer:Wt,drawBuffers:Gt,useProgram:Oe,setBlending:G,setMaterial:Cn,setFlipSided:se,setCullFace:Qt,setLineWidth:Ft,setPolygonOffset:De,setScissorTest:Vt,activeTexture:N,bindTexture:T,unbindTexture:nt,compressedTexImage2D:mt,compressedTexImage3D:Mt,texImage2D:Bt,texImage3D:Kt,updateUBOMapping:he,uniformBlockBinding:ae,texStorage2D:Yt,texStorage3D:bt,texSubImage2D:ft,texSubImage3D:Lt,compressedTexSubImage2D:Et,compressedTexSubImage3D:wt,scissor:te,viewport:Pt,reset:Pe}}function E1(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new $t,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return S?new OffscreenCanvas(N,T):au("canvas")}function b(N,T,nt){let mt=1;const Mt=Vt(N);if((Mt.width>nt||Mt.height>nt)&&(mt=nt/Math.max(Mt.width,Mt.height)),mt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(mt*Mt.width),Lt=Math.floor(mt*Mt.height);_===void 0&&(_=E(ft,Lt));const Et=T?E(ft,Lt):_;return Et.width=ft,Et.height=Lt,Et.getContext("2d").drawImage(N,0,0,ft,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ft+"x"+Lt+")."),Et}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function x(N){return N.generateMipmaps}function y(N){r.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,T,nt,mt,Mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=T;if(T===r.RED&&(nt===r.FLOAT&&(ft=r.R32F),nt===r.HALF_FLOAT&&(ft=r.R16F),nt===r.UNSIGNED_BYTE&&(ft=r.R8)),T===r.RED_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.R8UI),nt===r.UNSIGNED_SHORT&&(ft=r.R16UI),nt===r.UNSIGNED_INT&&(ft=r.R32UI),nt===r.BYTE&&(ft=r.R8I),nt===r.SHORT&&(ft=r.R16I),nt===r.INT&&(ft=r.R32I)),T===r.RG&&(nt===r.FLOAT&&(ft=r.RG32F),nt===r.HALF_FLOAT&&(ft=r.RG16F),nt===r.UNSIGNED_BYTE&&(ft=r.RG8)),T===r.RG_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.RG8UI),nt===r.UNSIGNED_SHORT&&(ft=r.RG16UI),nt===r.UNSIGNED_INT&&(ft=r.RG32UI),nt===r.BYTE&&(ft=r.RG8I),nt===r.SHORT&&(ft=r.RG16I),nt===r.INT&&(ft=r.RG32I)),T===r.RGB_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),nt===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),nt===r.UNSIGNED_INT&&(ft=r.RGB32UI),nt===r.BYTE&&(ft=r.RGB8I),nt===r.SHORT&&(ft=r.RGB16I),nt===r.INT&&(ft=r.RGB32I)),T===r.RGBA_INTEGER&&(nt===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),nt===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),nt===r.UNSIGNED_INT&&(ft=r.RGBA32UI),nt===r.BYTE&&(ft=r.RGBA8I),nt===r.SHORT&&(ft=r.RGBA16I),nt===r.INT&&(ft=r.RGBA32I)),T===r.RGB&&nt===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),T===r.RGBA){const Lt=Mt?eu:Re.getTransfer(mt);nt===r.FLOAT&&(ft=r.RGBA32F),nt===r.HALF_FLOAT&&(ft=r.RGBA16F),nt===r.UNSIGNED_BYTE&&(ft=Lt===Fe?r.SRGB8_ALPHA8:r.RGBA8),nt===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),nt===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function R(N,T){let nt;return N?T===null||T===Cs||T===Ko?nt=r.DEPTH24_STENCIL8:T===ha?nt=r.DEPTH32F_STENCIL8:T===Zo&&(nt=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cs||T===Ko?nt=r.DEPTH_COMPONENT24:T===ha?nt=r.DEPTH_COMPONENT32F:T===Zo&&(nt=r.DEPTH_COMPONENT16),nt}function F(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ti&&N.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function O(N){const T=N.target;T.removeEventListener("dispose",O),V(T),T.isVideoTexture&&g.delete(T)}function B(N){const T=N.target;T.removeEventListener("dispose",B),C(T)}function V(N){const T=s.get(N);if(T.__webglInit===void 0)return;const nt=N.source,mt=v.get(nt);if(mt){const Mt=mt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(N),Object.keys(mt).length===0&&v.delete(nt)}s.remove(N)}function D(N){const T=s.get(N);r.deleteTexture(T.__webglTexture);const nt=N.source,mt=v.get(nt);delete mt[T.__cacheKey],f.memory.textures--}function C(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let Mt=0;Mt<T.__webglFramebuffer[mt].length;Mt++)r.deleteFramebuffer(T.__webglFramebuffer[mt][Mt]);else r.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[mt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=N.textures;for(let mt=0,Mt=nt.length;mt<Mt;mt++){const ft=s.get(nt[mt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),s.remove(nt[mt])}s.remove(N)}let H=0;function st(){H=0}function tt(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function ht(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ut(N,T){const nt=s.get(N);if(N.isVideoTexture&&Ft(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const mt=N.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(nt,N,T);return}}i.bindTexture(r.TEXTURE_2D,nt.__webglTexture,r.TEXTURE0+T)}function P(N,T){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){Q(nt,N,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,nt.__webglTexture,r.TEXTURE0+T)}function q(N,T){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){Q(nt,N,T);return}i.bindTexture(r.TEXTURE_3D,nt.__webglTexture,r.TEXTURE0+T)}function X(N,T){const nt=s.get(N);if(N.version>0&&nt.__version!==N.version){gt(nt,N,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture,r.TEXTURE0+T)}const xt={[pd]:r.REPEAT,[Rs]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},L={[Ti]:r.NEAREST,[DS]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[Sh]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},$={[OS]:r.NEVER,[HS]:r.ALWAYS,[PS]:r.LESS,[vv]:r.LEQUAL,[zS]:r.EQUAL,[FS]:r.GEQUAL,[BS]:r.GREATER,[IS]:r.NOTEQUAL};function yt(N,T){if(T.type===ha&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===Sh||T.magFilter===pc||T.magFilter===ws||T.minFilter===Pi||T.minFilter===Sh||T.minFilter===pc||T.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,xt[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,xt[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,xt[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ti||T.minFilter!==pc&&T.minFilter!==ws||T.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function St(N,T){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",O));const mt=T.source;let Mt=v.get(mt);Mt===void 0&&(Mt={},v.set(mt,Mt));const ft=ht(T);if(ft!==N.__cacheKey){Mt[ft]===void 0&&(Mt[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),Mt[ft].usedTimes++;const Lt=Mt[N.__cacheKey];Lt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&D(T)),N.__cacheKey=ft,N.__webglTexture=Mt[ft].texture}return nt}function Q(N,T,nt){let mt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=r.TEXTURE_3D);const Mt=St(N,T),ft=T.source;i.bindTexture(mt,N.__webglTexture,r.TEXTURE0+nt);const Lt=s.get(ft);if(ft.version!==Lt.__version||Mt===!0){i.activeTexture(r.TEXTURE0+nt);const Et=Re.getPrimaries(Re.workingColorSpace),wt=T.colorSpace===ja?null:Re.getPrimaries(T.colorSpace),Yt=T.colorSpace===ja||Et===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let bt=b(T.image,!1,l.maxTextureSize);bt=De(T,bt);const Bt=c.convert(T.format,T.colorSpace),Kt=c.convert(T.type);let te=U(T.internalFormat,Bt,Kt,T.colorSpace,T.isVideoTexture);yt(mt,T);let Pt;const he=T.mipmaps,ae=T.isVideoTexture!==!0,Pe=Lt.__version===void 0||Mt===!0,W=ft.dataReady,Nt=F(T,bt);if(T.isDepthTexture)te=R(T.format===Jo,T.type),Pe&&(ae?i.texStorage2D(r.TEXTURE_2D,1,te,bt.width,bt.height):i.texImage2D(r.TEXTURE_2D,0,te,bt.width,bt.height,0,Bt,Kt,null));else if(T.isDataTexture)if(he.length>0){ae&&Pe&&i.texStorage2D(r.TEXTURE_2D,Nt,te,he[0].width,he[0].height);for(let ct=0,_t=he.length;ct<_t;ct++)Pt=he[ct],ae?W&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,Bt,Kt,Pt.data):i.texImage2D(r.TEXTURE_2D,ct,te,Pt.width,Pt.height,0,Bt,Kt,Pt.data);T.generateMipmaps=!1}else ae?(Pe&&i.texStorage2D(r.TEXTURE_2D,Nt,te,bt.width,bt.height),W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt.width,bt.height,Bt,Kt,bt.data)):i.texImage2D(r.TEXTURE_2D,0,te,bt.width,bt.height,0,Bt,Kt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,te,he[0].width,he[0].height,bt.depth);for(let ct=0,_t=he.length;ct<_t;ct++)if(Pt=he[ct],T.format!==bi)if(Bt!==null)if(ae){if(W)if(T.layerUpdates.size>0){const zt=U0(Pt.width,Pt.height,T.format,T.type);for(const Ot of T.layerUpdates){const re=Pt.data.subarray(Ot*zt/Pt.data.BYTES_PER_ELEMENT,(Ot+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Ot,Pt.width,Pt.height,1,Bt,re)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,bt.depth,Bt,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,te,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,Pt.width,Pt.height,bt.depth,Bt,Kt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ct,te,Pt.width,Pt.height,bt.depth,0,Bt,Kt,Pt.data)}else{ae&&Pe&&i.texStorage2D(r.TEXTURE_2D,Nt,te,he[0].width,he[0].height);for(let ct=0,_t=he.length;ct<_t;ct++)Pt=he[ct],T.format!==bi?Bt!==null?ae?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,Bt,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,ct,te,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?W&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Pt.width,Pt.height,Bt,Kt,Pt.data):i.texImage2D(r.TEXTURE_2D,ct,te,Pt.width,Pt.height,0,Bt,Kt,Pt.data)}else if(T.isDataArrayTexture)if(ae){if(Pe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Nt,te,bt.width,bt.height,bt.depth),W)if(T.layerUpdates.size>0){const ct=U0(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const zt=bt.data.subarray(_t*ct/bt.data.BYTES_PER_ELEMENT,(_t+1)*ct/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Bt,Kt,zt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Kt,bt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,te,bt.width,bt.height,bt.depth,0,Bt,Kt,bt.data);else if(T.isData3DTexture)ae?(Pe&&i.texStorage3D(r.TEXTURE_3D,Nt,te,bt.width,bt.height,bt.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Bt,Kt,bt.data)):i.texImage3D(r.TEXTURE_3D,0,te,bt.width,bt.height,bt.depth,0,Bt,Kt,bt.data);else if(T.isFramebufferTexture){if(Pe)if(ae)i.texStorage2D(r.TEXTURE_2D,Nt,te,bt.width,bt.height);else{let ct=bt.width,_t=bt.height;for(let zt=0;zt<Nt;zt++)i.texImage2D(r.TEXTURE_2D,zt,te,ct,_t,0,Bt,Kt,null),ct>>=1,_t>>=1}}else if(he.length>0){if(ae&&Pe){const ct=Vt(he[0]);i.texStorage2D(r.TEXTURE_2D,Nt,te,ct.width,ct.height)}for(let ct=0,_t=he.length;ct<_t;ct++)Pt=he[ct],ae?W&&i.texSubImage2D(r.TEXTURE_2D,ct,0,0,Bt,Kt,Pt):i.texImage2D(r.TEXTURE_2D,ct,te,Bt,Kt,Pt);T.generateMipmaps=!1}else if(ae){if(Pe){const ct=Vt(bt);i.texStorage2D(r.TEXTURE_2D,Nt,te,ct.width,ct.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Kt,bt)}else i.texImage2D(r.TEXTURE_2D,0,te,Bt,Kt,bt);x(T)&&y(mt),Lt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function gt(N,T,nt){if(T.image.length!==6)return;const mt=St(N,T),Mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+nt);const ft=s.get(Mt);if(Mt.version!==ft.__version||mt===!0){i.activeTexture(r.TEXTURE0+nt);const Lt=Re.getPrimaries(Re.workingColorSpace),Et=T.colorSpace===ja?null:Re.getPrimaries(T.colorSpace),wt=T.colorSpace===ja||Lt===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Yt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!Yt&&!bt?Bt[_t]=b(T.image[_t],!0,l.maxCubemapSize):Bt[_t]=bt?T.image[_t].image:T.image[_t],Bt[_t]=De(T,Bt[_t]);const Kt=Bt[0],te=c.convert(T.format,T.colorSpace),Pt=c.convert(T.type),he=U(T.internalFormat,te,Pt,T.colorSpace),ae=T.isVideoTexture!==!0,Pe=ft.__version===void 0||mt===!0,W=Mt.dataReady;let Nt=F(T,Kt);yt(r.TEXTURE_CUBE_MAP,T);let ct;if(Yt){ae&&Pe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,he,Kt.width,Kt.height);for(let _t=0;_t<6;_t++){ct=Bt[_t].mipmaps;for(let zt=0;zt<ct.length;zt++){const Ot=ct[zt];T.format!==bi?te!==null?ae?W&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Ot.width,Ot.height,te,Ot.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,he,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,0,0,Ot.width,Ot.height,te,Pt,Ot.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt,he,Ot.width,Ot.height,0,te,Pt,Ot.data)}}}else{if(ct=T.mipmaps,ae&&Pe){ct.length>0&&Nt++;const _t=Vt(Bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Nt,he,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ae?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,te,Pt,Bt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,Bt[_t].width,Bt[_t].height,0,te,Pt,Bt[_t].data);for(let zt=0;zt<ct.length;zt++){const re=ct[zt].image[_t].image;ae?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,re.width,re.height,te,Pt,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,he,re.width,re.height,0,te,Pt,re.data)}}else{ae?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,te,Pt,Bt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,he,te,Pt,Bt[_t]);for(let zt=0;zt<ct.length;zt++){const Ot=ct[zt];ae?W&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,0,0,te,Pt,Ot.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,zt+1,he,te,Pt,Ot.image[_t])}}}x(T)&&y(r.TEXTURE_CUBE_MAP),ft.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ot(N,T,nt,mt,Mt,ft){const Lt=c.convert(nt.format,nt.colorSpace),Et=c.convert(nt.type),wt=U(nt.internalFormat,Lt,Et,nt.colorSpace),Yt=s.get(T),bt=s.get(nt);if(bt.__renderTarget=T,!Yt.__hasExternalTextures){const Bt=Math.max(1,T.width>>ft),Kt=Math.max(1,T.height>>ft);Mt===r.TEXTURE_3D||Mt===r.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ft,wt,Bt,Kt,T.depth,0,Lt,Et,null):i.texImage2D(Mt,ft,wt,Bt,Kt,0,Lt,Et,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),Qt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,mt,Mt,bt.__webglTexture,0,se(T)):(Mt===r.TEXTURE_2D||Mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,mt,Mt,bt.__webglTexture,ft),i.bindFramebuffer(r.FRAMEBUFFER,null)}function At(N,T,nt){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const mt=T.depthTexture,Mt=mt&&mt.isDepthTexture?mt.type:null,ft=R(T.stencilBuffer,Mt),Lt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=se(T);Qt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,ft,T.width,T.height):nt?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,ft,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ft,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,N)}else{const mt=T.textures;for(let Mt=0;Mt<mt.length;Mt++){const ft=mt[Mt],Lt=c.convert(ft.format,ft.colorSpace),Et=c.convert(ft.type),wt=U(ft.internalFormat,Lt,Et,ft.colorSpace),Yt=se(T);nt&&Qt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,wt,T.width,T.height):Qt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,wt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,wt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const Mt=mt.__webglTexture,ft=se(T);if(T.depthTexture.format===Qo)Qt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Jo)Qt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0,ft):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Wt(N){const T=s.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const mt=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",Mt)};mt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=mt}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=N.texture.mipmaps;mt&&mt.length>0?Rt(T.__webglFramebuffer[0],N):Rt(T.__webglFramebuffer,N)}else if(nt){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=r.createRenderbuffer(),At(T.__webglDepthbuffer[mt],N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[mt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ft)}}else{const mt=N.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),At(T.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,ft)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(N,T,nt){const mt=s.get(N);T!==void 0&&ot(mt.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),nt!==void 0&&Wt(N)}function Oe(N){const T=N.texture,nt=s.get(N),mt=s.get(T);N.addEventListener("dispose",B);const Mt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Lt=Mt.length>1;if(Lt||(mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture()),mt.__version=T.version,f.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Et]=[];for(let wt=0;wt<T.mipmaps.length;wt++)nt.__webglFramebuffer[Et][wt]=r.createFramebuffer()}else nt.__webglFramebuffer[Et]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)nt.__webglFramebuffer[Et]=r.createFramebuffer()}else nt.__webglFramebuffer=r.createFramebuffer();if(Lt)for(let Et=0,wt=Mt.length;Et<wt;Et++){const Yt=s.get(Mt[Et]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&Qt(N)===!1){nt.__webglMultisampledFramebuffer=r.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Et=0;Et<Mt.length;Et++){const wt=Mt[Et];nt.__webglColorRenderbuffer[Et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,nt.__webglColorRenderbuffer[Et]);const Yt=c.convert(wt.format,wt.colorSpace),bt=c.convert(wt.type),Bt=U(wt.internalFormat,Yt,bt,wt.colorSpace,N.isXRRenderTarget===!0),Kt=se(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Bt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Et])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=r.createRenderbuffer(),At(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){i.bindTexture(r.TEXTURE_CUBE_MAP,mt.__webglTexture),yt(r.TEXTURE_CUBE_MAP,T);for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)ot(nt.__webglFramebuffer[Et][wt],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,wt);else ot(nt.__webglFramebuffer[Et],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);x(T)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let Et=0,wt=Mt.length;Et<wt;Et++){const Yt=Mt[Et],bt=s.get(Yt);i.bindTexture(r.TEXTURE_2D,bt.__webglTexture),yt(r.TEXTURE_2D,Yt),ot(nt.__webglFramebuffer,N,Yt,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,0),x(Yt)&&y(r.TEXTURE_2D)}i.unbindTexture()}else{let Et=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,mt.__webglTexture),yt(Et,T),T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)ot(nt.__webglFramebuffer[wt],N,T,r.COLOR_ATTACHMENT0,Et,wt);else ot(nt.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,Et,0);x(T)&&y(Et),i.unbindTexture()}N.depthBuffer&&Wt(N)}function Ce(N){const T=N.textures;for(let nt=0,mt=T.length;nt<mt;nt++){const Mt=T[nt];if(x(Mt)){const ft=z(N),Lt=s.get(Mt).__webglTexture;i.bindTexture(ft,Lt),y(ft),i.unbindTexture()}}}const oe=[],G=[];function Cn(N){if(N.samples>0){if(Qt(N)===!1){const T=N.textures,nt=N.width,mt=N.height;let Mt=r.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=s.get(N),Et=T.length>1;if(Et)for(let Yt=0;Yt<T.length;Yt++)i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const wt=N.texture.mipmaps;wt&&wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Yt=0;Yt<T.length;Yt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=r.STENCIL_BUFFER_BIT)),Et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Yt]);const bt=s.get(T[Yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,bt,0)}r.blitFramebuffer(0,0,nt,mt,0,0,nt,mt,Mt,r.NEAREST),m===!0&&(oe.length=0,G.length=0,oe.push(r.COLOR_ATTACHMENT0+Yt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(oe.push(ft),G.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,G)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Et)for(let Yt=0;Yt<T.length;Yt++){i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.RENDERBUFFER,Lt.__webglColorRenderbuffer[Yt]);const bt=s.get(T[Yt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Lt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Yt,r.TEXTURE_2D,bt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function se(N){return Math.min(l.maxSamples,N.samples)}function Qt(N){const T=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ft(N){const T=f.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function De(N,T){const nt=N.colorSpace,mt=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Ir&&nt!==ja&&(Re.getTransfer(nt)===Fe?(mt!==bi||Mt!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Vt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=st,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Qt}function b1(r,t){function i(s,l=ja){let c;const f=Re.getTransfer(l);if(s===Bi)return r.UNSIGNED_BYTE;if(s===Kd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===hv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===uv)return r.BYTE;if(s===fv)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===Zd)return r.INT;if(s===Cs)return r.UNSIGNED_INT;if(s===ha)return r.FLOAT;if(s===el)return r.HALF_FLOAT;if(s===dv)return r.ALPHA;if(s===pv)return r.RGB;if(s===bi)return r.RGBA;if(s===Qo)return r.DEPTH_COMPONENT;if(s===Jo)return r.DEPTH_STENCIL;if(s===mv)return r.RED;if(s===Jd)return r.RED_INTEGER;if(s===gv)return r.RG;if(s===$d)return r.RG_INTEGER;if(s===tp)return r.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===_d||s===vd||s===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xd||s===Sd||s===Md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xd||s===Sd)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Md)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===wd||s===Cd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ed)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ud)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ld)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qc||s===Bd||s===Id)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Qc)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_v||s===Fd||s===Hd||s===Gd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Qc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Fd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Yn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ja({vertexShader:T1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ri(new uu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w1 extends Ls{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,S=null,E=null;const b=new R1,x=i.getContextAttributes();let y=null,z=null;const U=[],R=[],F=new $t;let O=null;const B=new gi;B.viewport=new tn;const V=new gi;V.viewport=new tn;const D=[B,V],C=new YM;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let gt=U[Q];return gt===void 0&&(gt=new Gh,U[Q]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(Q){let gt=U[Q];return gt===void 0&&(gt=new Gh,U[Q]=gt),gt.getGripSpace()},this.getHand=function(Q){let gt=U[Q];return gt===void 0&&(gt=new Gh,U[Q]=gt),gt.getHandSpace()};function tt(Q){const gt=R.indexOf(Q.inputSource);if(gt===-1)return;const ot=U[gt];ot!==void 0&&(ot.update(Q.inputSource,Q.frame,p||f),ot.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ht(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<U.length;Q++){const gt=R[Q];gt!==null&&(R[Q]=null,U[Q].disconnect(gt))}H=null,st=null,b.reset(),t.setRenderTarget(y),S=null,v=null,_=null,l=null,z=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(O),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",ut),x.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,At=null,Rt=null;x.depth&&(Rt=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=x.stencil?Jo:Qo,At=x.stencil?Ko:Cs);const Wt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(Wt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),z=new Ds(v.textureWidth,v.textureHeight,{format:bi,type:Bi,depthTexture:new Cv(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new Ds(S.framebufferWidth,S.framebufferHeight,{format:bi,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ut(Q){for(let gt=0;gt<Q.removed.length;gt++){const ot=Q.removed[gt],At=R.indexOf(ot);At>=0&&(R[At]=null,U[At].disconnect(ot))}for(let gt=0;gt<Q.added.length;gt++){const ot=Q.added[gt];let At=R.indexOf(ot);if(At===-1){for(let Wt=0;Wt<U.length;Wt++)if(Wt>=R.length){R.push(ot),At=Wt;break}else if(R[Wt]===null){R[Wt]=ot,At=Wt;break}if(At===-1)break}const Rt=U[At];Rt&&Rt.connect(ot)}}const P=new Y,q=new Y;function X(Q,gt,ot){P.setFromMatrixPosition(gt.matrixWorld),q.setFromMatrixPosition(ot.matrixWorld);const At=P.distanceTo(q),Rt=gt.projectionMatrix.elements,Wt=ot.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),Oe=Rt[14]/(Rt[10]+1),Ce=(Rt[9]+1)/Rt[5],oe=(Rt[9]-1)/Rt[5],G=(Rt[8]-1)/Rt[0],Cn=(Wt[8]+1)/Wt[0],se=Gt*G,Qt=Gt*Cn,Ft=At/(-G+Cn),De=Ft*-G;if(gt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(De),Q.translateZ(Ft),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Rt[10]===-1)Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Vt=Gt+Ft,N=Oe+Ft,T=se-De,nt=Qt+(At-De),mt=Ce*Oe/N*Vt,Mt=oe*Oe/N*Vt;Q.projectionMatrix.makePerspective(T,nt,mt,Mt,Vt,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xt(Q,gt){gt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(gt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let gt=Q.near,ot=Q.far;b.texture!==null&&(b.depthNear>0&&(gt=b.depthNear),b.depthFar>0&&(ot=b.depthFar)),C.near=V.near=B.near=gt,C.far=V.far=B.far=ot,(H!==C.near||st!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,st=C.far),B.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,C.layers.mask=B.layers.mask|V.layers.mask;const At=Q.parent,Rt=C.cameras;xt(C,At);for(let Wt=0;Wt<Rt.length;Wt++)xt(Rt[Wt],At);Rt.length===2?X(C,B,V):C.projectionMatrix.copy(B.projectionMatrix),L(Q,C,At)};function L(Q,gt,ot){ot===null?Q.matrix.copy(gt.matrixWorld):(Q.matrix.copy(ot.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(gt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(gt.projectionMatrix),Q.projectionMatrixInverse.copy(gt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$o*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let $=null;function yt(Q,gt){if(g=gt.getViewerPose(p||f),E=gt,g!==null){const ot=g.views;S!==null&&(t.setRenderTargetFramebuffer(z,S.framebuffer),t.setRenderTarget(z));let At=!1;ot.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Gt=0;Gt<ot.length;Gt++){const Oe=ot[Gt];let Ce=null;if(S!==null)Ce=S.getViewport(Oe);else{const G=_.getViewSubImage(v,Oe);Ce=G.viewport,Gt===0&&(t.setRenderTargetTextures(z,G.colorTexture,G.depthStencilTexture),t.setRenderTarget(z))}let oe=D[Gt];oe===void 0&&(oe=new gi,oe.layers.enable(Gt),oe.viewport=new tn,D[Gt]=oe),oe.matrix.fromArray(Oe.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Oe.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Gt===0&&(C.matrix.copy(oe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(oe)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Gt=_.getDepthInformation(ot[0]);Gt&&Gt.isValid&&Gt.texture&&b.init(t,Gt,l.renderState)}}for(let ot=0;ot<U.length;ot++){const At=R[ot],Rt=U[ot];At!==null&&Rt!==void 0&&Rt.update(At,gt,p||f)}$&&$(Q,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),E=null}const St=new Ov;St.setAnimationLoop(yt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const Es=new Ai,C1=new qe;function D1(r,t){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function s(x,y){y.color.getRGB(x.fogColor.value,bv(r)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,z,U,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(x,y):y.isMeshToonMaterial?(c(x,y),_(x,y)):y.isMeshPhongMaterial?(c(x,y),g(x,y)):y.isMeshStandardMaterial?(c(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(c(x,y),E(x,y)):y.isMeshDepthMaterial?c(x,y):y.isMeshDistanceMaterial?(c(x,y),b(x,y)):y.isMeshNormalMaterial?c(x,y):y.isLineBasicMaterial?(f(x,y),y.isLineDashedMaterial&&d(x,y)):y.isPointsMaterial?m(x,y,z,U):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===qn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===qn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const z=t.get(y),U=z.envMap,R=z.envMapRotation;U&&(x.envMap.value=U,Es.copy(R),Es.x*=-1,Es.y*=-1,Es.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),x.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Es)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function f(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function d(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function m(x,y,z,U){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*z,x.scale.value=U*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,z){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function b(x,y){const z=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function U1(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const R=U.program;s.uniformBlockBinding(z,R)}function p(z,U){let R=l[z.id];R===void 0&&(E(z),R=g(z),l[z.id]=R,z.addEventListener("dispose",x));const F=U.program;s.updateUBOMapping(z,F);const O=t.render.frame;c[z.id]!==O&&(v(z),c[z.id]=O)}function g(z){const U=_();z.__bindingPointIndex=U;const R=r.createBuffer(),F=z.__size,O=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,F,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,R),R}function _(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const U=l[z.id],R=z.uniforms,F=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let O=0,B=R.length;O<B;O++){const V=Array.isArray(R[O])?R[O]:[R[O]];for(let D=0,C=V.length;D<C;D++){const H=V[D];if(S(H,O,D,F)===!0){const st=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ut=0;ut<tt.length;ut++){const P=tt[ut],q=b(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,st+ht,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,ht),ht+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,st,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(z,U,R,F){const O=z.value,B=U+"_"+R;if(F[B]===void 0)return typeof O=="number"||typeof O=="boolean"?F[B]=O:F[B]=O.clone(),!0;{const V=F[B];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return F[B]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function E(z){const U=z.uniforms;let R=0;const F=16;for(let B=0,V=U.length;B<V;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,H=D.length;C<H;C++){const st=D[C],tt=Array.isArray(st.value)?st.value:[st.value];for(let ht=0,ut=tt.length;ht<ut;ht++){const P=tt[ht],q=b(P),X=R%F,xt=X%q.boundary,L=X+xt;R+=xt,L!==0&&F-L<q.storage&&(R+=F-L),st.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=R,R+=q.storage}}}const O=R%F;return O>0&&(R+=F-O),z.__size=R,z.__cache={},this}function b(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function x(z){const U=z.target;U.removeEventListener("dispose",x);const R=f.indexOf(U.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const z in l)r.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:m,update:p,dispose:y}}class L1{constructor(t={}){const{canvas:i=iM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let x=null,y=null;const z=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let F=!1;this._outputColorSpace=Wn;let O=0,B=0,V=null,D=-1,C=null;const H=new tn,st=new tn;let tt=null;const ht=new ue(0);let ut=0,P=i.width,q=i.height,X=1,xt=null,L=null;const $=new tn(0,0,P,q),yt=new tn(0,0,P,q);let St=!1;const Q=new op;let gt=!1,ot=!1;const At=new qe,Rt=new qe,Wt=new Y,Gt=new tn,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function oe(){return V===null?X:1}let G=s;function Cn(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),G===null){const Z="webgl2";if(G=Cn(Z,w),G===null)throw Cn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,Qt,Ft,De,Vt,N,T,nt,mt,Mt,ft,Lt,Et,wt,Yt,bt,Bt,Kt,te,Pt,he,ae,Pe,W;function Nt(){se=new VT(G),se.init(),ae=new b1(G,se),Qt=new PT(G,se,t,ae),Ft=new M1(G,se),Qt.reverseDepthBuffer&&v&&Ft.buffers.depth.setReversed(!0),De=new WT(G),Vt=new c1,N=new E1(G,se,Ft,Vt,Qt,ae,De),T=new BT(R),nt=new GT(R),mt=new QM(G),Pe=new NT(G,mt),Mt=new kT(G,mt,De,Pe),ft=new YT(G,Mt,mt,De),te=new qT(G,Qt,N),bt=new zT(Vt),Lt=new l1(R,T,nt,se,Qt,Pe,bt),Et=new D1(R,Vt),wt=new f1,Yt=new _1(se),Kt=new LT(R,T,nt,Ft,ft,S,m),Bt=new x1(R,ft,Qt),W=new U1(G,De,Qt,Ft),Pt=new OT(G,se,De),he=new XT(G,se,De),De.programs=Lt.programs,R.capabilities=Qt,R.extensions=se,R.properties=Vt,R.renderLists=wt,R.shadowMap=Bt,R.state=Ft,R.info=De}Nt();const ct=new w1(R,G);this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(P,q,!1))},this.getSize=function(w){return w.set(P,q)},this.setSize=function(w,Z,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,q=Z,i.width=Math.floor(w*X),i.height=Math.floor(Z*X),rt===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(P*X,q*X).floor()},this.setDrawingBufferSize=function(w,Z,rt){P=w,q=Z,X=rt,i.width=Math.floor(w*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,Z,rt,lt){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,Z,rt,lt),Ft.viewport(H.copy($).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,Z,rt,lt){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,Z,rt,lt),Ft.scissor(st.copy(yt).multiplyScalar(X).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){Ft.setScissorTest(St=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,rt=!0){let lt=0;if(w){let K=!1;if(V!==null){const Tt=V.texture.format;K=Tt===tp||Tt===$d||Tt===Jd}if(K){const Tt=V.texture.type,Ct=Tt===Bi||Tt===Cs||Tt===Zo||Tt===Ko||Tt===Kd||Tt===Qd,Dt=Kt.getClearColor(),It=Kt.getClearAlpha(),ne=Dt.r,jt=Dt.g,qt=Dt.b;Ct?(E[0]=ne,E[1]=jt,E[2]=qt,E[3]=It,G.clearBufferuiv(G.COLOR,0,E)):(b[0]=ne,b[1]=jt,b[2]=qt,b[3]=It,G.clearBufferiv(G.COLOR,0,b))}else lt|=G.COLOR_BUFFER_BIT}Z&&(lt|=G.DEPTH_BUFFER_BIT),rt&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),Kt.dispose(),wt.dispose(),Yt.dispose(),Vt.dispose(),T.dispose(),nt.dispose(),ft.dispose(),Pe.dispose(),W.dispose(),Lt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",un),ct.removeEventListener("sessionend",bn),Fn.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const w=De.autoReset,Z=Bt.enabled,rt=Bt.autoUpdate,lt=Bt.needsUpdate,K=Bt.type;Nt(),De.autoReset=w,Bt.enabled=Z,Bt.autoUpdate=rt,Bt.needsUpdate=lt,Bt.type=K}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function re(w){const Z=w.target;Z.removeEventListener("dispose",re),ke(Z)}function ke(w){sn(w),Vt.remove(w)}function sn(w){const Z=Vt.get(w).programs;Z!==void 0&&(Z.forEach(function(rt){Lt.releaseProgram(rt)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,rt,lt,K,Tt){Z===null&&(Z=Oe);const Ct=K.isMesh&&K.matrixWorld.determinant()<0,Dt=es(w,Z,rt,lt,K);Ft.setMaterial(lt,Ct);let It=rt.index,ne=1;if(lt.wireframe===!0){if(It=Mt.getWireframeAttribute(rt),It===void 0)return;ne=2}const jt=rt.drawRange,qt=rt.attributes.position;let _e=jt.start*ne,Te=(jt.start+jt.count)*ne;Tt!==null&&(_e=Math.max(_e,Tt.start*ne),Te=Math.min(Te,(Tt.start+Tt.count)*ne)),It!==null?(_e=Math.max(_e,0),Te=Math.min(Te,It.count)):qt!=null&&(_e=Math.max(_e,0),Te=Math.min(Te,qt.count));const je=Te-_e;if(je<0||je===1/0)return;Pe.setup(K,lt,Dt,rt,It);let xe,Se=Pt;if(It!==null&&(xe=mt.get(It),Se=he,Se.setIndex(xe)),K.isMesh)lt.wireframe===!0?(Ft.setLineWidth(lt.wireframeLinewidth*oe()),Se.setMode(G.LINES)):Se.setMode(G.TRIANGLES);else if(K.isLine){let Zt=lt.linewidth;Zt===void 0&&(Zt=1),Ft.setLineWidth(Zt*oe()),K.isLineSegments?Se.setMode(G.LINES):K.isLineLoop?Se.setMode(G.LINE_LOOP):Se.setMode(G.LINE_STRIP)}else K.isPoints?Se.setMode(G.POINTS):K.isSprite&&Se.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Jc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Se.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Zt=K._multiDrawStarts,Ke=K._multiDrawCounts,Ee=K._multiDrawCount,Dn=It?mt.get(It).bytesPerElement:1,ya=Vt.get(lt).currentProgram.getUniforms();for(let Xe=0;Xe<Ee;Xe++)ya.setValue(G,"_gl_DrawID",Xe),Se.render(Zt[Xe]/Dn,Ke[Xe])}else if(K.isInstancedMesh)Se.renderInstances(_e,je,K.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ke=Math.min(rt.instanceCount,Zt);Se.renderInstances(_e,je,Ke)}else Se.render(_e,je)};function be(w,Z,rt){w.transparent===!0&&w.side===fa&&w.forceSinglePass===!1?(w.side=qn,w.needsUpdate=!0,_a(w,Z,rt),w.side=Qa,w.needsUpdate=!0,_a(w,Z,rt),w.side=fa):_a(w,Z,rt)}this.compile=function(w,Z,rt=null){rt===null&&(rt=w),y=Yt.get(rt),y.init(Z),U.push(y),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),w!==rt&&w.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights();const lt=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Tt=K.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const Dt=Tt[Ct];be(Dt,rt,K),lt.add(Dt)}else be(Tt,rt,K),lt.add(Tt)}),y=U.pop(),lt},this.compileAsync=function(w,Z,rt=null){const lt=this.compile(w,Z,rt);return new Promise(K=>{function Tt(){if(lt.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&lt.delete(Ct)}),lt.size===0){K(w);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Zn=null;function vn(w){Zn&&Zn(w)}function un(){Fn.stop()}function bn(){Fn.start()}const Fn=new Ov;Fn.setAnimationLoop(vn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(w){Zn=w,ct.setAnimationLoop(w),w===null?Fn.stop():Fn.start()},ct.addEventListener("sessionstart",un),ct.addEventListener("sessionend",bn),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Z),Z=ct.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,Z,V),y=Yt.get(w,U.length),y.init(Z),U.push(y),Rt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Q.setFromProjectionMatrix(Rt),ot=this.localClippingEnabled,gt=bt.init(this.clippingPlanes,ot),x=wt.get(w,z.length),x.init(),z.push(x),ct.enabled===!0&&ct.isPresenting===!0){const Tt=R.xr.getDepthSensingMesh();Tt!==null&&$a(Tt,Z,-1/0,R.sortObjects)}$a(w,Z,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(xt,L),Ce=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ce&&Kt.addToRenderList(x,w),this.info.render.frame++,gt===!0&&bt.beginShadows();const rt=y.state.shadowsArray;Bt.render(rt,w,Z),gt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=x.opaque,K=x.transmissive;if(y.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(K.length>0)for(let Ct=0,Dt=Tt.length;Ct<Dt;Ct++){const It=Tt[Ct];sl(lt,K,w,It)}Ce&&Kt.render(w);for(let Ct=0,Dt=Tt.length;Ct<Dt;Ct++){const It=Tt[Ct];al(x,w,It,It.viewport)}}else K.length>0&&sl(lt,K,w,Z),Ce&&Kt.render(w),al(x,w,Z);V!==null&&B===0&&(N.updateMultisampleRenderTarget(V),N.updateRenderTargetMipmap(V)),w.isScene===!0&&w.onAfterRender(R,w,Z),Pe.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(y=U[U.length-1],gt===!0&&bt.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,z.pop(),z.length>0?x=z[z.length-1]:x=null};function $a(w,Z,rt,lt){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){lt&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const Ct=ft.update(w),Dt=w.material;Dt.visible&&x.push(w,Ct,Dt,rt,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Ct=ft.update(w),Dt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Gt.copy(Ct.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(Dt)){const It=Ct.groups;for(let ne=0,jt=It.length;ne<jt;ne++){const qt=It[ne],_e=Dt[qt.materialIndex];_e&&_e.visible&&x.push(w,Ct,_e,rt,Gt.z,qt)}}else Dt.visible&&x.push(w,Ct,Dt,rt,Gt.z,null)}}const Tt=w.children;for(let Ct=0,Dt=Tt.length;Ct<Dt;Ct++)$a(Tt[Ct],Z,rt,lt)}function al(w,Z,rt,lt){const K=w.opaque,Tt=w.transmissive,Ct=w.transparent;y.setupLightsView(rt),gt===!0&&bt.setGlobalState(R.clippingPlanes,rt),lt&&Ft.viewport(H.copy(lt)),K.length>0&&ts(K,Z,rt),Tt.length>0&&ts(Tt,Z,rt),Ct.length>0&&ts(Ct,Z,rt),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function sl(w,Z,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new Ds(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?el:Bi,minFilter:ws,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[lt.id],Ct=lt.viewport||H;Tt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);const Dt=R.getRenderTarget();R.setRenderTarget(Tt),R.getClearColor(ht),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),Ce&&Kt.render(rt);const It=R.toneMapping;R.toneMapping=Ka;const ne=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),gt===!0&&bt.setGlobalState(R.clippingPlanes,lt),ts(w,rt,lt),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let qt=0,_e=Z.length;qt<_e;qt++){const Te=Z[qt],je=Te.object,xe=Te.geometry,Se=Te.material,Zt=Te.group;if(Se.side===fa&&je.layers.test(lt.layers)){const Ke=Se.side;Se.side=qn,Se.needsUpdate=!0,ga(je,rt,lt,xe,Se,Zt),Se.side=Ke,Se.needsUpdate=!0,jt=!0}}jt===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Dt),R.setClearColor(ht,ut),ne!==void 0&&(lt.viewport=ne),R.toneMapping=It}function ts(w,Z,rt){const lt=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Tt=w.length;K<Tt;K++){const Ct=w[K],Dt=Ct.object,It=Ct.geometry,ne=Ct.group;let jt=Ct.material;jt.allowOverride===!0&&lt!==null&&(jt=lt),Dt.layers.test(rt.layers)&&ga(Dt,Z,rt,It,jt,ne)}}function ga(w,Z,rt,lt,K,Tt){w.onBeforeRender(R,Z,rt,lt,K,Tt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(R,Z,rt,lt,w,Tt),K.transparent===!0&&K.side===fa&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,R.renderBufferDirect(rt,Z,lt,K,w,Tt),K.side=Qa,K.needsUpdate=!0,R.renderBufferDirect(rt,Z,lt,K,w,Tt),K.side=fa):R.renderBufferDirect(rt,Z,lt,K,w,Tt),w.onAfterRender(R,Z,rt,lt,K,Tt)}function _a(w,Z,rt){Z.isScene!==!0&&(Z=Oe);const lt=Vt.get(w),K=y.state.lights,Tt=y.state.shadowsArray,Ct=K.state.version,Dt=Lt.getParameters(w,K.state,Tt,Z,rt),It=Lt.getProgramCacheKey(Dt);let ne=lt.programs;lt.environment=w.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(w.isMeshStandardMaterial?nt:T).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,ne===void 0&&(w.addEventListener("dispose",re),ne=new Map,lt.programs=ne);let jt=ne.get(It);if(jt!==void 0){if(lt.currentProgram===jt&&lt.lightsStateVersion===Ct)return Fi(w,Dt),jt}else Dt.uniforms=Lt.getUniforms(w),w.onBeforeCompile(Dt,R),jt=Lt.acquireProgram(Dt,It),ne.set(It,jt),lt.uniforms=Dt.uniforms;const qt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=bt.uniform),Fi(w,Dt),lt.needsLights=rn(w),lt.lightsStateVersion=Ct,lt.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=jt,lt.uniformsList=null,jt}function Ii(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=$c.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Fi(w,Z){const rt=Vt.get(w);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function es(w,Z,rt,lt,K){Z.isScene!==!0&&(Z=Oe),N.resetTextureUnits();const Tt=Z.fog,Ct=lt.isMeshStandardMaterial?Z.environment:null,Dt=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ir,It=(lt.isMeshStandardMaterial?nt:T).get(lt.envMap||Ct),ne=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,jt=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,Te=!!rt.morphAttributes.color;let je=Ka;lt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(je=R.toneMapping);const xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Se=xe!==void 0?xe.length:0,Zt=Vt.get(lt),Ke=y.state.lights;if(gt===!0&&(ot===!0||w!==C)){const yn=w===C&&lt.id===D;bt.setState(lt,w,yn)}let Ee=!1;lt.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ke.state.version||Zt.outputColorSpace!==Dt||K.isBatchedMesh&&Zt.batching===!1||!K.isBatchedMesh&&Zt.batching===!0||K.isBatchedMesh&&Zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Zt.instancing===!1||!K.isInstancedMesh&&Zt.instancing===!0||K.isSkinnedMesh&&Zt.skinning===!1||!K.isSkinnedMesh&&Zt.skinning===!0||K.isInstancedMesh&&Zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Zt.instancingMorph===!1&&K.morphTexture!==null||Zt.envMap!==It||lt.fog===!0&&Zt.fog!==Tt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==bt.numPlanes||Zt.numIntersection!==bt.numIntersection)||Zt.vertexAlphas!==ne||Zt.vertexTangents!==jt||Zt.morphTargets!==qt||Zt.morphNormals!==_e||Zt.morphColors!==Te||Zt.toneMapping!==je||Zt.morphTargetsCount!==Se)&&(Ee=!0):(Ee=!0,Zt.__version=lt.version);let Dn=Zt.currentProgram;Ee===!0&&(Dn=_a(lt,Z,K));let ya=!1,Xe=!1,Gi=!1;const Ge=Dn.getUniforms(),Un=Zt.uniforms;if(Ft.useProgram(Dn.program)&&(ya=!0,Xe=!0,Gi=!0),lt.id!==D&&(D=lt.id,Xe=!0),ya||C!==w){Ft.buffers.depth.getReversed()?(At.copy(w.projectionMatrix),sM(At),rM(At),Ge.setValue(G,"projectionMatrix",At)):Ge.setValue(G,"projectionMatrix",w.projectionMatrix),Ge.setValue(G,"viewMatrix",w.matrixWorldInverse);const Tn=Ge.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,Wt.setFromMatrixPosition(w.matrixWorld)),Qt.logarithmicDepthBuffer&&Ge.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ge.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Xe=!0,Gi=!0)}if(K.isSkinnedMesh){Ge.setOptional(G,K,"bindMatrix"),Ge.setOptional(G,K,"bindMatrixInverse");const yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ge.setValue(G,"boneTexture",yn.boneTexture,N))}K.isBatchedMesh&&(Ge.setOptional(G,K,"batchingTexture"),Ge.setValue(G,"batchingTexture",K._matricesTexture,N),Ge.setOptional(G,K,"batchingIdTexture"),Ge.setValue(G,"batchingIdTexture",K._indirectTexture,N),Ge.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Ge.setValue(G,"batchingColorTexture",K._colorsTexture,N));const fn=rt.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&te.update(K,rt,Dn),(Xe||Zt.receiveShadow!==K.receiveShadow)&&(Zt.receiveShadow=K.receiveShadow,Ge.setValue(G,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Un.envMap.value=It,Un.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(Un.envMapIntensity.value=Z.environmentIntensity),Xe&&(Ge.setValue(G,"toneMappingExposure",R.toneMappingExposure),Zt.needsLights&&va(Un,Gi),Tt&&lt.fog===!0&&Et.refreshFogUniforms(Un,Tt),Et.refreshMaterialUniforms(Un,lt,X,q,y.state.transmissionRenderTarget[w.id]),$c.upload(G,Ii(Zt),Un,N)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&($c.upload(G,Ii(Zt),Un,N),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ge.setValue(G,"center",K.center),Ge.setValue(G,"modelViewMatrix",K.modelViewMatrix),Ge.setValue(G,"normalMatrix",K.normalMatrix),Ge.setValue(G,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const yn=lt.uniformsGroups;for(let Tn=0,wi=yn.length;Tn<wi;Tn++){const Vi=yn[Tn];W.update(Vi,Dn),W.bind(Vi,Dn)}}return Dn}function va(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function rn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(w,Z,rt){const lt=Vt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Vt.get(w.texture).__webglTexture=Z,Vt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:rt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const rt=Vt.get(w);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const rl=G.createFramebuffer();this.setRenderTarget=function(w,Z=0,rt=0){V=w,O=Z,B=rt;let lt=!0,K=null,Tt=!1,Ct=!1;if(w){const It=Vt.get(w);if(It.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(G.FRAMEBUFFER,null),lt=!1;else if(It.__webglFramebuffer===void 0)N.setupRenderTarget(w);else if(It.__hasExternalTextures)N.rebindTextures(w,Vt.get(w.texture).__webglTexture,Vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qt=w.depthTexture;if(It.__boundDepthTexture!==qt){if(qt!==null&&Vt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(w)}}const ne=w.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Ct=!0);const jt=Vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[Z])?K=jt[Z][rt]:K=jt[Z],Tt=!0):w.samples>0&&N.useMultisampledRTT(w)===!1?K=Vt.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?K=jt[rt]:K=jt,H.copy(w.viewport),st.copy(w.scissor),tt=w.scissorTest}else H.copy($).multiplyScalar(X).floor(),st.copy(yt).multiplyScalar(X).floor(),tt=St;if(rt!==0&&(K=rl),Ft.bindFramebuffer(G.FRAMEBUFFER,K)&&lt&&Ft.drawBuffers(w,K),Ft.viewport(H),Ft.scissor(st),Ft.setScissorTest(tt),Tt){const It=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,rt)}else if(Ct){const It=Vt.get(w.texture),ne=Z;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.__webglTexture,rt,ne)}else if(w!==null&&rt!==0){const It=Vt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,It.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(w,Z,rt,lt,K,Tt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){Ft.bindFramebuffer(G.FRAMEBUFFER,Dt);try{const It=w.texture,ne=It.format,jt=It.type;if(!Qt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-lt&&rt>=0&&rt<=w.height-K&&G.readPixels(Z,rt,lt,K,ae.convert(ne),ae.convert(jt),Tt)}finally{const It=V!==null?Vt.get(V).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,Z,rt,lt,K,Tt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(Z>=0&&Z<=w.width-lt&&rt>=0&&rt<=w.height-K){Ft.bindFramebuffer(G.FRAMEBUFFER,Dt);const It=w.texture,ne=It.format,jt=It.type;if(!Qt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,qt),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(Z,rt,lt,K,ae.convert(ne),ae.convert(jt),0);const _e=V!==null?Vt.get(V).__webglFramebuffer:null;Ft.bindFramebuffer(G.FRAMEBUFFER,_e);const Te=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await aM(G,Te,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,qt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(qt),G.deleteSync(Te),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,rt=0){const lt=Math.pow(2,-rt),K=Math.floor(w.image.width*lt),Tt=Math.floor(w.image.height*lt),Ct=Z!==null?Z.x:0,Dt=Z!==null?Z.y:0;N.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ct,Dt,K,Tt),Ft.unbindTexture()};const ol=G.createFramebuffer(),Hi=G.createFramebuffer();this.copyTextureToTexture=function(w,Z,rt=null,lt=null,K=0,Tt=null){Tt===null&&(K!==0?(Jc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=K,K=0):Tt=0);let Ct,Dt,It,ne,jt,qt,_e,Te,je;const xe=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(rt!==null)Ct=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,ne=rt.min.x,jt=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const fn=Math.pow(2,-K);Ct=Math.floor(xe.width*fn),Dt=Math.floor(xe.height*fn),w.isDataArrayTexture?It=xe.depth:w.isData3DTexture?It=Math.floor(xe.depth*fn):It=1,ne=0,jt=0,qt=0}lt!==null?(_e=lt.x,Te=lt.y,je=lt.z):(_e=0,Te=0,je=0);const Se=ae.convert(Z.format),Zt=ae.convert(Z.type);let Ke;Z.isData3DTexture?(N.setTexture3D(Z,0),Ke=G.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),Ke=G.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),Ke=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ee=G.getParameter(G.UNPACK_ROW_LENGTH),Dn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ya=G.getParameter(G.UNPACK_SKIP_PIXELS),Xe=G.getParameter(G.UNPACK_SKIP_ROWS),Gi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ne),G.pixelStorei(G.UNPACK_SKIP_ROWS,jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const Ge=w.isDataArrayTexture||w.isData3DTexture,Un=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const fn=Vt.get(w),yn=Vt.get(Z),Tn=Vt.get(fn.__renderTarget),wi=Vt.get(yn.__renderTarget);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Vi=0;Vi<It;Vi++)Ge&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(w).__webglTexture,K,qt+Vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Vt.get(Z).__webglTexture,Tt,je+Vi)),G.blitFramebuffer(ne,jt,Ct,Dt,_e,Te,Ct,Dt,G.DEPTH_BUFFER_BIT,G.NEAREST);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||Vt.has(w)){const fn=Vt.get(w),yn=Vt.get(Z);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,ol),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hi);for(let Tn=0;Tn<It;Tn++)Ge?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,K,qt+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,K),Un?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,Tt,je+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,Tt),K!==0?G.blitFramebuffer(ne,jt,Ct,Dt,_e,Te,Ct,Dt,G.COLOR_BUFFER_BIT,G.NEAREST):Un?G.copyTexSubImage3D(Ke,Tt,_e,Te,je+Tn,ne,jt,Ct,Dt):G.copyTexSubImage2D(Ke,Tt,_e,Te,ne,jt,Ct,Dt);Ft.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Ke,Tt,_e,Te,je,Ct,Dt,It,Se,Zt,xe.data):Z.isCompressedArrayTexture?G.compressedTexSubImage3D(Ke,Tt,_e,Te,je,Ct,Dt,It,Se,xe.data):G.texSubImage3D(Ke,Tt,_e,Te,je,Ct,Dt,It,Se,Zt,xe):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,_e,Te,Ct,Dt,Se,Zt,xe.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,_e,Te,xe.width,xe.height,Se,xe.data):G.texSubImage2D(G.TEXTURE_2D,Tt,_e,Te,Ct,Dt,Se,Zt,xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Dn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ya),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Gi),Tt===0&&Z.generateMipmaps&&G.generateMipmap(Ke),Ft.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,rt=null,lt=null,K=0){return Jc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Z,rt,lt,K)},this.initRenderTarget=function(w){Vt.get(w).__webglFramebuffer===void 0&&N.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){O=0,B=0,V=null,Ft.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const nv={type:"change"},cp={type:"start"},Fv={type:"end"},Wc=new nl,iv=new ua,N1=Math.cos(70*iu.DEG2RAD),pn=new Y,Xn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},td=1e-6;class O1 extends ZM{constructor(t,i=null){super(t,i),this.state=He.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Us,this._lastTargetPosition=new Y,this._quat=new Us().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new C0,this._sphericalDelta=new C0,this._scale=1,this._panOffset=new Y,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new Y,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z1.bind(this),this._onPointerDown=P1.bind(this),this._onPointerUp=B1.bind(this),this._onContextMenu=X1.bind(this),this._onMouseWheel=H1.bind(this),this._onKeyDown=G1.bind(this),this._onTouchStart=V1.bind(this),this._onTouchMove=k1.bind(this),this._onMouseDown=I1.bind(this),this._onMouseMove=F1.bind(this),this._interceptControlDown=W1.bind(this),this._interceptControlUp=q1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nv),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;pn.copy(i).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),i.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=pn.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<N1?this.object.lookAt(this.target):(iv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(iv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>td||8*(1-this._lastQuaternion.dot(this.object.quaternion))>td||this._lastTargetPosition.distanceToSquared(this.target)>td?(this.dispatchEvent(nv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){pn.setFromMatrixColumn(i,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,i){this.screenSpacePanning===!0?pn.setFromMatrixColumn(i,1):(pn.setFromMatrixColumn(i,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let c=pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,d=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new $t,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function P1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function z1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function B1(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function I1(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=He.DOLLY;break;case Ur.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}break;case Ur.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(cp)}function F1(r){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function H1(r){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(r.preventDefault(),this.dispatchEvent(cp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fv))}function G1(r){this.enabled!==!1&&this._handleKeyDown(r)}function V1(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=He.TOUCH_ROTATE;break;case wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=He.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(cp)}function k1(r){switch(this._trackPointer(r),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=He.NONE}}function X1(r){this.enabled!==!1&&r.preventDefault()}function W1(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q1(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Y1 extends fu{constructor(t){super(t)}load(t,i,s,l){const c=this,f=new Dv(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}parse(t){function i(p){const g=new DataView(p),_=32/8*3+32/8*3*3+16/8,v=g.getUint32(80,!0);if(80+32/8+v*_===g.byteLength)return!0;const E=[115,111,108,105,100];for(let b=0;b<5;b++)if(s(E,g,b))return!1;return!0}function s(p,g,_){for(let v=0,S=p.length;v<S;v++)if(p[v]!==g.getUint8(_+v))return!1;return!0}function l(p){const g=new DataView(p),_=g.getUint32(80,!0);let v,S,E,b=!1,x,y,z,U,R;for(let H=0;H<70;H++)g.getUint32(H,!1)==1129270351&&g.getUint8(H+4)==82&&g.getUint8(H+5)==61&&(b=!0,x=new Float32Array(_*3*3),y=g.getUint8(H+6)/255,z=g.getUint8(H+7)/255,U=g.getUint8(H+8)/255,R=g.getUint8(H+9)/255);const F=84,O=12*4+2,B=new an,V=new Float32Array(_*3*3),D=new Float32Array(_*3*3),C=new ue;for(let H=0;H<_;H++){const st=F+H*O,tt=g.getFloat32(st,!0),ht=g.getFloat32(st+4,!0),ut=g.getFloat32(st+8,!0);if(b){const P=g.getUint16(st+48,!0);(P&32768)===0?(v=(P&31)/31,S=(P>>5&31)/31,E=(P>>10&31)/31):(v=y,S=z,E=U)}for(let P=1;P<=3;P++){const q=st+P*12,X=H*3*3+(P-1)*3;V[X]=g.getFloat32(q,!0),V[X+1]=g.getFloat32(q+4,!0),V[X+2]=g.getFloat32(q+8,!0),D[X]=tt,D[X+1]=ht,D[X+2]=ut,b&&(C.setRGB(v,S,E,Wn),x[X]=C.r,x[X+1]=C.g,x[X+2]=C.b)}}return B.setAttribute("position",new jn(V,3)),B.setAttribute("normal",new jn(D,3)),b&&(B.setAttribute("color",new jn(x,3)),B.hasColors=!0,B.alpha=R),B}function c(p){const g=new an,_=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let E=0;const b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+b+b+b,"g"),y=new RegExp("normal"+b+b+b,"g"),z=[],U=[],R=[],F=new Y;let O,B=0,V=0,D=0;for(;(O=_.exec(p))!==null;){V=D;const C=O[0],H=(O=S.exec(C))!==null?O[1]:"";for(R.push(H);(O=v.exec(C))!==null;){let ht=0,ut=0;const P=O[0];for(;(O=y.exec(P))!==null;)F.x=parseFloat(O[1]),F.y=parseFloat(O[2]),F.z=parseFloat(O[3]),ut++;for(;(O=x.exec(P))!==null;)z.push(parseFloat(O[1]),parseFloat(O[2]),parseFloat(O[3])),U.push(F.x,F.y,F.z),ht++,D++;ut!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),ht!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const st=V,tt=D-V;g.userData.groupNames=R,g.addGroup(st,tt,B),B++}return g.setAttribute("position",new $e(z,3)),g.setAttribute("normal",new $e(U,3)),g}function f(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const g=new Uint8Array(p.length);for(let _=0;_<p.length;_++)g[_]=p.charCodeAt(_)&255;return g.buffer||g}else return p}const m=d(t);return i(m)?l(m):c(f(t))}}const j1=/^[og]\s*(.+)?/,Z1=/^mtllib /,K1=/^usemtl /,Q1=/^usemap /,av=/\s+/,sv=new Y,ed=new Y,rv=new Y,ov=new Y,mi=new Y,qc=new ue;function J1(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const s=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,c){const f=this._finalize(!1);f&&(f.inherited||f.groupCount<=0)&&this.materials.splice(f.index,1);const d={index:this.materials.length,name:l||"",mtllib:Array.isArray(c)&&c.length>0?c[c.length-1]:"",smooth:f!==void 0?f.smooth:this.smooth,groupStart:f!==void 0?f.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const c=this.currentMaterial();if(c&&c.groupEnd===-1&&(c.groupEnd=this.geometry.vertices.length/3,c.groupCount=c.groupEnd-c.groupStart,c.inherited=!1),l&&this.materials.length>1)for(let f=this.materials.length-1;f>=0;f--)this.materials[f].groupCount<=0&&this.materials.splice(f,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),c}},s&&s.name&&typeof s.clone=="function"){const l=s.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseNormalIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/3)*3},parseUVIndex:function(t,i){const s=parseInt(t,10);return(s>=0?s-1:s+i/2)*2},addVertex:function(t,i,s){const l=this.vertices,c=this.object.geometry.vertices;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,s){const l=this.normals,c=this.object.geometry.normals;c.push(l[t+0],l[t+1],l[t+2]),c.push(l[i+0],l[i+1],l[i+2]),c.push(l[s+0],l[s+1],l[s+2])},addFaceNormal:function(t,i,s){const l=this.vertices,c=this.object.geometry.normals;sv.fromArray(l,t),ed.fromArray(l,i),rv.fromArray(l,s),mi.subVectors(rv,ed),ov.subVectors(sv,ed),mi.cross(ov),mi.normalize(),c.push(mi.x,mi.y,mi.z),c.push(mi.x,mi.y,mi.z),c.push(mi.x,mi.y,mi.z)},addColor:function(t,i,s){const l=this.colors,c=this.object.geometry.colors;l[t]!==void 0&&c.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&c.push(l[i+0],l[i+1],l[i+2]),l[s]!==void 0&&c.push(l[s+0],l[s+1],l[s+2])},addUV:function(t,i,s){const l=this.uvs,c=this.object.geometry.uvs;c.push(l[t+0],l[t+1]),c.push(l[i+0],l[i+1]),c.push(l[s+0],l[s+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,s,l,c,f,d,m,p){const g=this.vertices.length;let _=this.parseVertexIndex(t,g),v=this.parseVertexIndex(i,g),S=this.parseVertexIndex(s,g);if(this.addVertex(_,v,S),this.addColor(_,v,S),d!==void 0&&d!==""){const E=this.normals.length;_=this.parseNormalIndex(d,E),v=this.parseNormalIndex(m,E),S=this.parseNormalIndex(p,E),this.addNormal(_,v,S)}else this.addFaceNormal(_,v,S);if(l!==void 0&&l!==""){const E=this.uvs.length;_=this.parseUVIndex(l,E),v=this.parseUVIndex(c,E),S=this.parseUVIndex(f,E),this.addUV(_,v,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let s=0,l=t.length;s<l;s++){const c=this.parseVertexIndex(t[s],i);this.addVertexPoint(c),this.addColor(c)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const s=this.vertices.length,l=this.uvs.length;for(let c=0,f=t.length;c<f;c++)this.addVertexLine(this.parseVertexIndex(t[c],s));for(let c=0,f=i.length;c<f;c++)this.addUVLine(this.parseUVIndex(i[c],l))}};return r.startObject("",!1),r}class $1 extends fu{constructor(t){super(t),this.materials=null}load(t,i,s,l){const c=this,f=new Dv(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new J1;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const s=t.split(`
`);let l=[];for(let d=0,m=s.length;d<m;d++){const p=s[d].trimStart();if(p.length===0)continue;const g=p.charAt(0);if(g!=="#")if(g==="v"){const _=p.split(av);switch(_[0]){case"v":i.vertices.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3])),_.length>=7?(qc.setRGB(parseFloat(_[4]),parseFloat(_[5]),parseFloat(_[6]),Wn),i.colors.push(qc.r,qc.g,qc.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(_[1]),parseFloat(_[2]),parseFloat(_[3]));break;case"vt":i.uvs.push(parseFloat(_[1]),parseFloat(_[2]));break}}else if(g==="f"){const v=p.slice(1).trim().split(av),S=[];for(let b=0,x=v.length;b<x;b++){const y=v[b];if(y.length>0){const z=y.split("/");S.push(z)}}const E=S[0];for(let b=1,x=S.length-1;b<x;b++){const y=S[b],z=S[b+1];i.addFace(E[0],y[0],z[0],E[1],y[1],z[1],E[2],y[2],z[2])}}else if(g==="l"){const _=p.substring(1).trim().split(" ");let v=[];const S=[];if(p.indexOf("/")===-1)v=_;else for(let E=0,b=_.length;E<b;E++){const x=_[E].split("/");x[0]!==""&&v.push(x[0]),x[1]!==""&&S.push(x[1])}i.addLineGeometry(v,S)}else if(g==="p"){const v=p.slice(1).trim().split(" ");i.addPointGeometry(v)}else if((l=j1.exec(p))!==null){const _=(" "+l[0].slice(1).trim()).slice(1);i.startObject(_)}else if(K1.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(Z1.test(p))i.materialLibraries.push(p.substring(7).trim());else if(Q1.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(g==="s"){if(l=p.split(" "),l.length>1){const v=l[1].trim().toLowerCase();i.object.smooth=v!=="0"&&v!=="off"}else i.object.smooth=!0;const _=i.object.currentMaterial();_&&(_.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const c=new Cr;if(c.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let d=0,m=i.objects.length;d<m;d++){const p=i.objects[d],g=p.geometry,_=p.materials,v=g.type==="Line",S=g.type==="Points";let E=!1;if(g.vertices.length===0)continue;const b=new an;b.setAttribute("position",new $e(g.vertices,3)),g.normals.length>0&&b.setAttribute("normal",new $e(g.normals,3)),g.colors.length>0&&(E=!0,b.setAttribute("color",new $e(g.colors,3))),g.hasUVIndices===!0&&b.setAttribute("uv",new $e(g.uvs,2));const x=[];for(let z=0,U=_.length;z<U;z++){const R=_[z],F=R.name+"_"+R.smooth+"_"+E;let O=i.materials[F];if(this.materials!==null){if(O=this.materials.create(R.name),v&&O&&!(O instanceof zi)){const B=new zi;Ri.prototype.copy.call(B,O),B.color.copy(O.color),O=B}else if(S&&O&&!(O instanceof qo)){const B=new qo({size:10,sizeAttenuation:!1});Ri.prototype.copy.call(B,O),B.color.copy(O.color),B.map=O.map,O=B}}O===void 0&&(v?O=new zi:S?O=new qo({size:1,sizeAttenuation:!1}):O=new BM,O.name=R.name,O.flatShading=!R.smooth,O.vertexColors=E,i.materials[F]=O),x.push(O)}let y;if(x.length>1){for(let z=0,U=_.length;z<U;z++){const R=_[z];b.addGroup(R.groupStart,R.groupCount,z)}v?y=new lu(b,x):S?y=new Wh(b,x):y=new ri(b,x)}else v?y=new lu(b,x[0]):S?y=new Wh(b,x[0]):y=new ri(b,x[0]);y.name=p.name,c.add(y)}else if(i.vertices.length>0){const d=new qo({size:1,sizeAttenuation:!1}),m=new an;m.setAttribute("position",new $e(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new $e(i.colors,3)),d.vertexColors=!0);const p=new Wh(m,d);c.add(p)}return c}}const tR=({facesVisible:r,edgesVisible:t,faceColor:i,edgeColor:s,axesVisible:l,isClippingEnabled:c,toolMode:f,onToggleFaces:d,onToggleEdges:m,onFaceColorChange:p,onEdgeColorChange:g,onResetView:_,onToggleAxes:v,onToolModeChange:S,onClearMeasurements:E,onClearAngleMeasurements:b,onToggleClipping:x,onClippingMoveForward:y,onClippingMoveBackward:z,onSetClippingAxis:U})=>Xt.jsxs("div",{className:"toolbar",children:[Xt.jsxs("button",{onClick:d,children:["Faces: ",r?"On":"Off"]}),Xt.jsxs("button",{onClick:m,children:["Edges: ",t?"On":"Off"]}),Xt.jsxs("label",{children:["Face",Xt.jsx("input",{type:"color",value:i,onChange:R=>p(R.target.value)})]}),Xt.jsxs("label",{children:["Edge",Xt.jsx("input",{type:"color",value:s,onChange:R=>g(R.target.value)})]}),Xt.jsx("button",{onClick:_,children:"Reset View"}),Xt.jsx("button",{onClick:v,children:l?"Hide Axes":"Show Axes"}),Xt.jsxs("div",{className:"tool-controls",children:[Xt.jsx("button",{onClick:()=>S(f==="distance"?"none":"distance"),style:{backgroundColor:f==="distance"?"#4CAF50":void 0,color:f==="distance"?"white":void 0},children:f==="distance"?"Exit Distance Tool":"Distance Tool"}),Xt.jsx("button",{onClick:E,disabled:f!=="distance",children:"Clear Distance Measurements"}),Xt.jsx("button",{onClick:()=>S(f==="angle"?"none":"angle"),style:{backgroundColor:f==="angle"?"#4CAF50":void 0,color:f==="angle"?"white":void 0},children:f==="angle"?"Exit Angle Tool":"Angle Tool"}),Xt.jsx("button",{onClick:b,disabled:f!=="angle",children:"Clear Angle Measurements"}),Xt.jsx("button",{onClick:x,style:{backgroundColor:c?"#4CAF50":void 0,color:c?"white":void 0},children:c?"Disable Clipping":"Enable Clipping"}),c&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsx("button",{onClick:y,children:"Move Forward"}),Xt.jsx("button",{onClick:z,children:"Move Backward"}),Xt.jsxs("div",{className:"axis-buttons",children:[Xt.jsx("button",{onClick:()=>U("x"),children:"X"}),Xt.jsx("button",{onClick:()=>U("y"),children:"Y"}),Xt.jsx("button",{onClick:()=>U("z"),children:"Z"})]})]})]})]});function Hv(r){if(!r.face)return null;const i=r.object.geometry.attributes.position;if(!i)return null;const s=new Y().fromBufferAttribute(i,r.face.a),l=new Y().fromBufferAttribute(i,r.face.b),c=new Y().fromBufferAttribute(i,r.face.c);r.object.localToWorld(s),r.object.localToWorld(l),r.object.localToWorld(c);const f=r.point;return[s,l,c].reduce((m,p)=>p.distanceTo(f)<m.distanceTo(f)?p:m)}function eR(r,t,i,s,l){const c=new Nv,f=new $t,d=[],m=[],p=[],g=[];let _=!1;function v(U){if(!_)return;const R=i.domElement.getBoundingClientRect();f.x=(U.clientX-R.left)/R.width*2-1,f.y=-((U.clientY-R.top)/R.height)*2+1,c.setFromCamera(f,t);const F=c.intersectObject(l);if(F.length>0){const O=Hv(F[0]);if(!O)return;d.push(O);const B=new rp({color:16711680}),V=new wv(B);if(V.position.copy(O),r.add(V),g.push(V),S(),d.length===2){const D=new an().setFromPoints(d),C=new tl(D,new zi({color:16776960}));r.add(C),p.push(C);const H=d[0].distanceTo(d[1]),st=d[0].clone().add(d[1]).multiplyScalar(.5),tt=document.createElement("div");tt.style.position="absolute",tt.style.color="#ffff00",tt.style.padding="4px",tt.style.background="rgba(0, 0, 0, 0.7)",tt.style.borderRadius="4px",tt.textContent=`${H.toFixed(3)} units`;const ht=document.getElementById("viewer-label-overlay");ht&&ht.appendChild(tt),m.push({element:tt,position:st}),d.length=0}}}function S(){g.forEach(R=>{const F=t.position.distanceTo(R.position),O=iu.degToRad(t.fov),B=2*Math.tan(O/2)*F,V=16/i.domElement.clientHeight*B;R.scale.set(V,V,1)})}function E(){const U=document.getElementById("viewer-label-overlay"),R=U?U.offsetWidth:window.innerWidth,F=U?U.offsetHeight:window.innerHeight;m.forEach(({element:O,position:B})=>{const V=B.clone().project(t);O.style.left=(V.x+1)*R/2+"px",O.style.top=(-V.y+1)*F/2+"px"}),S()}s.addEventListener("change",E),window.addEventListener("resize",E);function b(){_=!0,i.domElement.style.cursor="crosshair",i.domElement.addEventListener("click",v)}function x(){_=!1,i.domElement.style.cursor="auto",i.domElement.removeEventListener("click",v)}function y(){d.length=0,p.forEach(R=>{r.remove(R),R.geometry.dispose(),R.material.dispose&&R.material.dispose()}),p.length=0,g.forEach(R=>{r.remove(R),R.material.dispose()}),g.length=0;const U=document.getElementById("viewer-label-overlay");m.forEach(R=>{U&&U.contains(R.element)?U.removeChild(R.element):R.element.parentElement&&R.element.parentElement.removeChild(R.element)}),m.length=0}function z(){x(),y(),s.removeEventListener("change",E),window.removeEventListener("resize",E)}return{enable:b,disable:x,clear:y,dispose:z,isEnabled:()=>_}}function nR(r,t,i,s,l){const c=new Nv,f=new $t,d=[],m=[],p=[],g=[];let _=!1;function v(U){if(!_)return;const R=i.domElement.getBoundingClientRect();f.x=(U.clientX-R.left)/R.width*2-1,f.y=-((U.clientY-R.top)/R.height)*2+1,c.setFromCamera(f,t);const F=c.intersectObject(l);if(F.length>0){const O=Hv(F[0]);if(!O)return;d.push(O);const B=new rp({color:65280}),V=new wv(B);if(V.position.copy(O),r.add(V),g.push(V),S(),d.length===3){const[D,C,H]=d,st=new an().setFromPoints([C,D]),tt=new an().setFromPoints([C,H]),ht=new tl(st,new zi({color:65280})),ut=new tl(tt,new zi({color:65280}));r.add(ht),r.add(ut),p.push(ht,ut);const P=D.clone().sub(C),q=H.clone().sub(C),X=P.angleTo(q),xt=iu.radToDeg(X),L=document.createElement("div");L.style.position="absolute",L.style.color="#00ff00",L.style.padding="4px",L.style.background="rgba(0, 0, 0, 0.7)",L.style.borderRadius="4px",L.textContent=`${xt.toFixed(1)}°`;const $=document.getElementById("viewer-label-overlay");$&&$.appendChild(L),m.push({element:L,position:C.clone()}),d.length=0}}}function S(){g.forEach(R=>{const F=t.position.distanceTo(R.position),O=iu.degToRad(t.fov),B=2*Math.tan(O/2)*F,V=16/i.domElement.clientHeight*B;R.scale.set(V,V,1)})}function E(){const U=document.getElementById("viewer-label-overlay"),R=U?U.offsetWidth:window.innerWidth,F=U?U.offsetHeight:window.innerHeight;m.forEach(({element:O,position:B})=>{const V=B.clone().project(t);O.style.left=(V.x+1)*R/2+"px",O.style.top=(-V.y+1)*F/2+"px"}),S()}s.addEventListener("change",E),window.addEventListener("resize",E);function b(){_=!0,i.domElement.style.cursor="crosshair",i.domElement.addEventListener("click",v)}function x(){_=!1,i.domElement.style.cursor="auto",i.domElement.removeEventListener("click",v)}function y(){d.length=0,p.forEach(R=>{r.remove(R),R.geometry.dispose(),R.material.dispose&&R.material.dispose()}),p.length=0,g.forEach(R=>{r.remove(R),R.material.dispose()}),g.length=0;const U=document.getElementById("viewer-label-overlay");m.forEach(R=>{U&&U.contains(R.element)?U.removeChild(R.element):R.element.parentElement&&R.element.parentElement.removeChild(R.element)}),m.length=0}function z(){x(),y(),s.removeEventListener("change",E),window.removeEventListener("resize",E)}return{enable:b,disable:x,clear:y,dispose:z,isEnabled:()=>_}}function iR(r,t,i="x"){const s=new Y(1,0,0),l=new ua(s.clone(),0);r.localClippingEnabled=!0;const c=new jM(l,100,16776960);c.visible=!1,t.add(c);let f=!1;function d(v){v==="x"&&l.normal.set(1,0,0),v==="y"&&l.normal.set(0,1,0),v==="z"&&l.normal.set(0,0,1),l.constant=0,c.updateMatrixWorld(!0)}function m(v){l.constant+=v}function p(){f=!0,r.clippingPlanes=[l],c.visible=!0}function g(){f=!1,r.clippingPlanes=[],c.visible=!1}function _(){t.remove(c)}return d(i),{enable:p,disable:g,dispose:_,setAxis:d,move:m,isEnabled:()=>f}}function aR(r,t,i,s){const l=new Hr().setFromObject(r),c=l.getCenter(new Y);r.position.sub(c);const f=l.getBoundingSphere(new Gr),d=t.fov*(Math.PI/180),m=s.clientWidth/s.clientHeight,p=2*Math.atan(Math.tan(d/2)*m),g=f.radius/Math.tan(d/2),_=f.radius/Math.tan(p/2),v=Math.max(g,_)*1.2;return t.position.set(v,v,v),t.up.set(0,1,0),t.lookAt(0,0,0),i.target.set(0,0,0),i.update(),l}function tu(r){if(r.isMesh)return r;for(const t of r.children){const i=tu(t);if(i)return i}return null}const sR=({file:r,modelUrl:t})=>{const i=me.useRef(null),[s,l]=me.useState(!0),[c,f]=me.useState(!0),[d,m]=me.useState("#6699ff"),[p,g]=me.useState("#ffffff"),[_,v]=me.useState(!1),[S,E]=me.useState("none"),[b,x]=me.useState(!1),[y,z]=me.useState(!1),[U,R]=me.useState(null),F=me.useRef(null),O=me.useRef(null),B=me.useRef(null),V=me.useRef(null),D=me.useRef(null),C=me.useRef(null),H=me.useRef(null),st=me.useRef(null),tt=me.useRef(null),ht=me.useRef(new Y),ut=me.useRef(new Y),P=me.useRef(null),q=me.useRef(null),X=1e6;me.useEffect(()=>{var nt,mt,Mt,ft,Lt;if(!i.current)return;z(!0),R(null),B.current&&i.current.contains(B.current.domElement)&&i.current.removeChild(B.current.domElement),(nt=B.current)==null||nt.dispose(),P.current&&(P.current.geometry.dispose(),(Mt=(mt=P.current.material).dispose)==null||Mt.call(mt),P.current=null),q.current&&(q.current.clear(),q.current=null);const ot=window.innerWidth,At=window.innerHeight,Rt=new UM;Rt.background=new ue(2236979),F.current=Rt;const Wt=new gi(75,ot/At,.01,1e4);Wt.position.set(0,0,100),O.current=Wt;const Gt=new L1({antialias:!0});Gt.setSize(ot,At),B.current=Gt,i.current.appendChild(Gt.domElement);const Oe=new qM(16777215,1),Ce=new WM(16777215,.7);Ce.position.set(10,10,10),Rt.add(Oe,Ce);const oe=new D0(X);oe.visible=_,C.current=oe,Rt.add(oe);const G=new O1(Wt,Gt.domElement);G.enableDamping=!0,G.dampingFactor=.03,V.current=G;const Cn=iR(Gt,Rt,"x");tt.current=Cn;let se=null,Qt="",Ft;r?(Qt=((ft=r.name.split(".").pop())==null?void 0:ft.toLowerCase())||"",Ft=URL.createObjectURL(r)):t&&(Qt=((Lt=t.split(".").pop())==null?void 0:Lt.toLowerCase())||"",Ft=t);async function De(){try{if(!Ft)throw new Error("No file or URL provided");if(console.log("Loading model:",Ft,"with extension:",Qt),Qt==="stl"){const Et=new Y1,wt=await new Promise((bt,Bt)=>Et.load(Ft,bt,void 0,Bt)),Yt=new zM({color:d});se=new ri(wt,Yt)}else if(Qt==="obj"){const Et=new $1;se=await new Promise((wt,Yt)=>Et.load(Ft,wt,void 0,Yt)),se.traverse(wt=>{wt.isMesh&&wt.material&&wt.material.color&&wt.material.color.set(d)})}else throw new Error("Unsupported file type");if(se){D.current=se;const Et=tu(se),wt=new Cr;if(se&&wt.add(se),Et&&Et.geometry){const Yt=new PM(Et.geometry),bt=new lu(Yt,new zi({color:p}));bt.visible=c,wt.add(bt),P.current=bt}q.current=wt,Rt.add(wt),Et&&(H.current=eR(Rt,Wt,Gt,G,Et),st.current=nR(Rt,Wt,Gt,G,Et)),aR(wt,Wt,G,i.current),ht.current.copy(Wt.position),ut.current.copy(G.target)}z(!1)}catch(Et){R(Et.message||"Error loading model"),z(!1)}}De();let Vt;const N=()=>{Vt=requestAnimationFrame(N),G.update(),Gt.render(Rt,Wt)};N();const T=()=>{const Et=window.innerWidth,wt=window.innerHeight;Wt.aspect=Et/wt,Wt.updateProjectionMatrix(),Gt.setSize(Et,wt)};return window.addEventListener("resize",T),()=>{var Et,wt;window.removeEventListener("resize",T),cancelAnimationFrame(Vt),Gt.dispose(),i.current&&Gt.domElement.parentNode===i.current&&i.current.removeChild(Gt.domElement),r&&Ft&&URL.revokeObjectURL(Ft),P.current&&(P.current.geometry.dispose(),(wt=(Et=P.current.material).dispose)==null||wt.call(Et),P.current=null),q.current&&(q.current.clear(),q.current=null)}},[r,t]),me.useEffect(()=>{P.current&&(P.current.visible=c)},[c]),me.useEffect(()=>{const ot=D.current&&tu(D.current);ot&&(ot.visible=s)},[s]),me.useEffect(()=>{var At,Rt;const ot=D.current&&tu(D.current);ot&&ot.material&&ot.material.type==="MeshStandardMaterial"&&ot.material.color.set(d),D.current&&((Rt=(At=D.current).traverse)==null||Rt.call(At,Wt=>{Wt.isMesh&&Wt.material&&Wt.material.color&&Wt.material.color.set(d)}))},[d]),me.useEffect(()=>{P.current&&P.current.material.color.set(p)},[p]),me.useEffect(()=>{C.current&&(C.current.visible=_)},[_]);const xt=()=>{O.current&&V.current&&(O.current.position.copy(ht.current),V.current.target.copy(ut.current),V.current.update())},L=()=>{x(ot=>tt.current?(ot?tt.current.disable():tt.current.enable(),!ot):ot)},$=()=>{var ot;return(ot=tt.current)==null?void 0:ot.move(1)},yt=()=>{var ot;return(ot=tt.current)==null?void 0:ot.move(-1)},St=ot=>{var At;return(At=tt.current)==null?void 0:At.setAxis(ot)};me.useEffect(()=>{H.current&&(S==="distance"?H.current.enable():H.current.disable()),st.current&&(S==="angle"?st.current.enable():st.current.disable())},[S]);const Q=()=>{var ot;return(ot=H.current)==null?void 0:ot.clear()},gt=()=>{var ot;return(ot=st.current)==null?void 0:ot.clear()};return me.useEffect(()=>{if(C.current&&F.current&&(F.current.remove(C.current),C.current=null),_&&F.current){const ot=new D0(X);ot.visible=!0,C.current=ot,F.current.add(ot)}},[_,F.current]),Xt.jsxs("div",{className:"app-container",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1e3,background:"#222233"},children:[Xt.jsx(tR,{facesVisible:s,edgesVisible:c,faceColor:d,edgeColor:p,axesVisible:_,isClippingEnabled:b,toolMode:S,onToggleFaces:()=>l(ot=>!ot),onToggleEdges:()=>f(ot=>!ot),onFaceColorChange:m,onEdgeColorChange:g,onResetView:xt,onToggleAxes:()=>v(ot=>!ot),onToolModeChange:E,onClearMeasurements:Q,onClearAngleMeasurements:gt,onToggleClipping:L,onClippingMoveForward:$,onClippingMoveBackward:yt,onSetClippingAxis:St}),Xt.jsxs("div",{ref:i,className:"three-canvas",style:{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,background:"#222233"},children:[y&&Xt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#fff",fontSize:28,display:"flex",flexDirection:"column",alignItems:"center",zIndex:3e3},children:[Xt.jsx("div",{className:"spinner",style:{width:48,height:48,border:"6px solid #444",borderTop:"6px solid #fff",borderRadius:"50%",animation:"spin 1s linear infinite",marginBottom:16}}),"Loading model...",Xt.jsx("style",{children:"@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }"})]}),U&&Xt.jsx("div",{style:{position:"absolute",top:16,left:16,color:"red"},children:U}),!r&&!t&&!y&&!U&&Xt.jsx("div",{style:{position:"absolute",top:16,left:16,color:"#fff"},children:"No model loaded"}),Xt.jsx("div",{id:"viewer-label-overlay",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:2e3}})]})]})},nd="/three.js-viewer/models/",rR=()=>{const[r,t]=me.useState(null),[i,s]=me.useState(null),[l,c]=me.useState([]),[f,d]=me.useState(!1);return me.useEffect(()=>{c([{name:"Test STL",url:nd+"test1.stl"},{name:"Test STL 2",url:nd+"test2.stl"},{name:"Test OBJ",url:nd+"test3.obj"}])},[]),me.useEffect(()=>{d(!1)},[r,i]),Xt.jsxs(Xt.Fragment,{children:[!f&&Xt.jsx($x,{onFile:m=>{t(m),s(null)},onSelectModel:m=>{s(m),t(null)},onRender:()=>d(!0),canRender:!!r||!!i,models:l}),f&&Xt.jsxs(Xt.Fragment,{children:[Xt.jsx("button",{style:{position:"absolute",top:24,left:24,zIndex:2001,marginBottom:0,fontSize:18,padding:"8px 18px",borderRadius:8,background:"#23243a",color:"#fff",border:"none",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.12)"},onClick:()=>d(!1),children:"← Back"}),Xt.jsx(sR,{file:r||void 0,modelUrl:i||void 0})]})]})};Jx.createRoot(document.getElementById("root")).render(Xt.jsx(me.StrictMode,{children:Xt.jsx(rR,{})}));
