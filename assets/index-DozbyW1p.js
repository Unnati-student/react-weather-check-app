(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const D of document.querySelectorAll('link[rel="modulepreload"]'))A(D);new MutationObserver(D=>{for(const U of D)if(U.type==="childList")for(const t0 of U.addedNodes)t0.tagName==="LINK"&&t0.rel==="modulepreload"&&A(t0)}).observe(document,{childList:!0,subtree:!0});function y(D){const U={};return D.integrity&&(U.integrity=D.integrity),D.referrerPolicy&&(U.referrerPolicy=D.referrerPolicy),D.crossOrigin==="use-credentials"?U.credentials="include":D.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function A(D){if(D.ep)return;D.ep=!0;const U=y(D);fetch(D.href,U)}})();function De(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var k5={exports:{}},z3={},_5={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ln;function je(){if(Ln)return V;Ln=1;var s=Symbol.for("react.element"),R=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),t0=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),x0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),J=Symbol.iterator;function Z(f){return f===null||typeof f!="object"?null:(f=J&&f[J]||f["@@iterator"],typeof f=="function"?f:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T0=Object.assign,j={};function O(f,m,F){this.props=f,this.context=m,this.refs=j,this.updater=F||N0}O.prototype.isReactComponent={},O.prototype.setState=function(f,m){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,m,"setState")},O.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function o0(){}o0.prototype=O.prototype;function v0(f,m,F){this.props=f,this.context=m,this.refs=j,this.updater=F||N0}var y0=v0.prototype=new o0;y0.constructor=v0,T0(y0,O.prototype),y0.isPureReactComponent=!0;var k0=Array.isArray,n1=Object.prototype.hasOwnProperty,B0={current:null},R0={key:!0,ref:!0,__self:!0,__source:!0};function X0(f,m,F){var I,Q={},G=null,q=null;if(m!=null)for(I in m.ref!==void 0&&(q=m.ref),m.key!==void 0&&(G=""+m.key),m)n1.call(m,I)&&!R0.hasOwnProperty(I)&&(Q[I]=m[I]);var Y=arguments.length-2;if(Y===1)Q.children=F;else if(1<Y){for(var r0=Array(Y),$0=0;$0<Y;$0++)r0[$0]=arguments[$0+2];Q.children=r0}if(f&&f.defaultProps)for(I in Y=f.defaultProps,Y)Q[I]===void 0&&(Q[I]=Y[I]);return{$$typeof:s,type:f,key:G,ref:q,props:Q,_owner:B0.current}}function W1(f,m){return{$$typeof:s,type:f.type,key:m,ref:f.ref,props:f.props,_owner:f._owner}}function m1(f){return typeof f=="object"&&f!==null&&f.$$typeof===s}function Z1(f){var m={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(F){return m[F]})}var d1=/\/+/g;function U0(f,m){return typeof f=="object"&&f!==null&&f.key!=null?Z1(""+f.key):m.toString(36)}function e1(f,m,F,I,Q){var G=typeof f;(G==="undefined"||G==="boolean")&&(f=null);var q=!1;if(f===null)q=!0;else switch(G){case"string":case"number":q=!0;break;case"object":switch(f.$$typeof){case s:case R:q=!0}}if(q)return q=f,Q=Q(q),f=I===""?"."+U0(q,0):I,k0(Q)?(F="",f!=null&&(F=f.replace(d1,"$&/")+"/"),e1(Q,m,F,"",function($0){return $0})):Q!=null&&(m1(Q)&&(Q=W1(Q,F+(!Q.key||q&&q.key===Q.key?"":(""+Q.key).replace(d1,"$&/")+"/")+f)),m.push(Q)),1;if(q=0,I=I===""?".":I+":",k0(f))for(var Y=0;Y<f.length;Y++){G=f[Y];var r0=I+U0(G,Y);q+=e1(G,m,F,r0,Q)}else if(r0=Z(f),typeof r0=="function")for(f=r0.call(f),Y=0;!(G=f.next()).done;)G=G.value,r0=I+U0(G,Y++),q+=e1(G,m,F,r0,Q);else if(G==="object")throw m=String(f),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.");return q}function f1(f,m,F){if(f==null)return f;var I=[],Q=0;return e1(f,I,"","",function(G){return m.call(F,G,Q++)}),I}function D0(f){if(f._status===-1){var m=f._result;m=m(),m.then(function(F){(f._status===0||f._status===-1)&&(f._status=1,f._result=F)},function(F){(f._status===0||f._status===-1)&&(f._status=2,f._result=F)}),f._status===-1&&(f._status=0,f._result=m)}if(f._status===1)return f._result.default;throw f._result}var u0={current:null},C={transition:null},H={ReactCurrentDispatcher:u0,ReactCurrentBatchConfig:C,ReactCurrentOwner:B0};function k(){throw Error("act(...) is not supported in production builds of React.")}return V.Children={map:f1,forEach:function(f,m,F){f1(f,function(){m.apply(this,arguments)},F)},count:function(f){var m=0;return f1(f,function(){m++}),m},toArray:function(f){return f1(f,function(m){return m})||[]},only:function(f){if(!m1(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},V.Component=O,V.Fragment=y,V.Profiler=D,V.PureComponent=v0,V.StrictMode=A,V.Suspense=B,V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,V.act=k,V.cloneElement=function(f,m,F){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var I=T0({},f.props),Q=f.key,G=f.ref,q=f._owner;if(m!=null){if(m.ref!==void 0&&(G=m.ref,q=B0.current),m.key!==void 0&&(Q=""+m.key),f.type&&f.type.defaultProps)var Y=f.type.defaultProps;for(r0 in m)n1.call(m,r0)&&!R0.hasOwnProperty(r0)&&(I[r0]=m[r0]===void 0&&Y!==void 0?Y[r0]:m[r0])}var r0=arguments.length-2;if(r0===1)I.children=F;else if(1<r0){Y=Array(r0);for(var $0=0;$0<r0;$0++)Y[$0]=arguments[$0+2];I.children=Y}return{$$typeof:s,type:f.type,key:Q,ref:G,props:I,_owner:q}},V.createContext=function(f){return f={$$typeof:t0,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:U,_context:f},f.Consumer=f},V.createElement=X0,V.createFactory=function(f){var m=X0.bind(null,f);return m.type=f,m},V.createRef=function(){return{current:null}},V.forwardRef=function(f){return{$$typeof:e0,render:f}},V.isValidElement=m1,V.lazy=function(f){return{$$typeof:d0,_payload:{_status:-1,_result:f},_init:D0}},V.memo=function(f,m){return{$$typeof:x0,type:f,compare:m===void 0?null:m}},V.startTransition=function(f){var m=C.transition;C.transition={};try{f()}finally{C.transition=m}},V.unstable_act=k,V.useCallback=function(f,m){return u0.current.useCallback(f,m)},V.useContext=function(f){return u0.current.useContext(f)},V.useDebugValue=function(){},V.useDeferredValue=function(f){return u0.current.useDeferredValue(f)},V.useEffect=function(f,m){return u0.current.useEffect(f,m)},V.useId=function(){return u0.current.useId()},V.useImperativeHandle=function(f,m,F){return u0.current.useImperativeHandle(f,m,F)},V.useInsertionEffect=function(f,m){return u0.current.useInsertionEffect(f,m)},V.useLayoutEffect=function(f,m){return u0.current.useLayoutEffect(f,m)},V.useMemo=function(f,m){return u0.current.useMemo(f,m)},V.useReducer=function(f,m,F){return u0.current.useReducer(f,m,F)},V.useRef=function(f){return u0.current.useRef(f)},V.useState=function(f){return u0.current.useState(f)},V.useSyncExternalStore=function(f,m,F){return u0.current.useSyncExternalStore(f,m,F)},V.useTransition=function(){return u0.current.useTransition()},V.version="18.3.1",V}var Wn;function B5(){return Wn||(Wn=1,_5.exports=je()),_5.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function Fe(){if(En)return z3;En=1;var s=B5(),R=Symbol.for("react.element"),y=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function t0(e0,B,x0){var d0,J={},Z=null,N0=null;x0!==void 0&&(Z=""+x0),B.key!==void 0&&(Z=""+B.key),B.ref!==void 0&&(N0=B.ref);for(d0 in B)A.call(B,d0)&&!U.hasOwnProperty(d0)&&(J[d0]=B[d0]);if(e0&&e0.defaultProps)for(d0 in B=e0.defaultProps,B)J[d0]===void 0&&(J[d0]=B[d0]);return{$$typeof:R,type:e0,key:Z,ref:N0,props:J,_owner:D.current}}return z3.Fragment=y,z3.jsx=t0,z3.jsxs=t0,z3}var Nn;function Ve(){return Nn||(Nn=1,k5.exports=Fe()),k5.exports}var P=Ve(),L1=B5();const Y1=De(L1);var B4={},L5={exports:{}},A0={},W5={exports:{}},E5={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bn;function Oe(){return Bn||(Bn=1,(function(s){function R(C,H){var k=C.length;C.push(H);t:for(;0<k;){var f=k-1>>>1,m=C[f];if(0<D(m,H))C[f]=H,C[k]=m,k=f;else break t}}function y(C){return C.length===0?null:C[0]}function A(C){if(C.length===0)return null;var H=C[0],k=C.pop();if(k!==H){C[0]=k;t:for(var f=0,m=C.length,F=m>>>1;f<F;){var I=2*(f+1)-1,Q=C[I],G=I+1,q=C[G];if(0>D(Q,k))G<m&&0>D(q,Q)?(C[f]=q,C[G]=k,f=G):(C[f]=Q,C[I]=k,f=I);else if(G<m&&0>D(q,k))C[f]=q,C[G]=k,f=G;else break t}}return H}function D(C,H){var k=C.sortIndex-H.sortIndex;return k!==0?k:C.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;s.unstable_now=function(){return U.now()}}else{var t0=Date,e0=t0.now();s.unstable_now=function(){return t0.now()-e0}}var B=[],x0=[],d0=1,J=null,Z=3,N0=!1,T0=!1,j=!1,O=typeof setTimeout=="function"?setTimeout:null,o0=typeof clearTimeout=="function"?clearTimeout:null,v0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y0(C){for(var H=y(x0);H!==null;){if(H.callback===null)A(x0);else if(H.startTime<=C)A(x0),H.sortIndex=H.expirationTime,R(B,H);else break;H=y(x0)}}function k0(C){if(j=!1,y0(C),!T0)if(y(B)!==null)T0=!0,D0(n1);else{var H=y(x0);H!==null&&u0(k0,H.startTime-C)}}function n1(C,H){T0=!1,j&&(j=!1,o0(X0),X0=-1),N0=!0;var k=Z;try{for(y0(H),J=y(B);J!==null&&(!(J.expirationTime>H)||C&&!Z1());){var f=J.callback;if(typeof f=="function"){J.callback=null,Z=J.priorityLevel;var m=f(J.expirationTime<=H);H=s.unstable_now(),typeof m=="function"?J.callback=m:J===y(B)&&A(B),y0(H)}else A(B);J=y(B)}if(J!==null)var F=!0;else{var I=y(x0);I!==null&&u0(k0,I.startTime-H),F=!1}return F}finally{J=null,Z=k,N0=!1}}var B0=!1,R0=null,X0=-1,W1=5,m1=-1;function Z1(){return!(s.unstable_now()-m1<W1)}function d1(){if(R0!==null){var C=s.unstable_now();m1=C;var H=!0;try{H=R0(!0,C)}finally{H?U0():(B0=!1,R0=null)}}else B0=!1}var U0;if(typeof v0=="function")U0=function(){v0(d1)};else if(typeof MessageChannel<"u"){var e1=new MessageChannel,f1=e1.port2;e1.port1.onmessage=d1,U0=function(){f1.postMessage(null)}}else U0=function(){O(d1,0)};function D0(C){R0=C,B0||(B0=!0,U0())}function u0(C,H){X0=O(function(){C(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_continueExecution=function(){T0||N0||(T0=!0,D0(n1))},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W1=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return Z},s.unstable_getFirstCallbackNode=function(){return y(B)},s.unstable_next=function(C){switch(Z){case 1:case 2:case 3:var H=3;break;default:H=Z}var k=Z;Z=H;try{return C()}finally{Z=k}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(C,H){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var k=Z;Z=C;try{return H()}finally{Z=k}},s.unstable_scheduleCallback=function(C,H,k){var f=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?f+k:f):k=f,C){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=k+m,C={id:d0++,callback:H,priorityLevel:C,startTime:k,expirationTime:m,sortIndex:-1},k>f?(C.sortIndex=k,R(x0,C),y(B)===null&&C===y(x0)&&(j?(o0(X0),X0=-1):j=!0,u0(k0,k-f))):(C.sortIndex=m,R(B,C),T0||N0||(T0=!0,D0(n1))),C},s.unstable_shouldYield=Z1,s.unstable_wrapCallback=function(C){var H=Z;return function(){var k=Z;Z=H;try{return C.apply(this,arguments)}finally{Z=k}}}})(E5)),E5}var Pn;function Ie(){return Pn||(Pn=1,W5.exports=Oe()),W5.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hn;function Ae(){if(Hn)return A0;Hn=1;var s=B5(),R=Ie();function y(t){for(var c="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)c+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A=new Set,D={};function U(t,c){t0(t,c),t0(t+"Capture",c)}function t0(t,c){for(D[t]=c,t=0;t<c.length;t++)A.add(c[t])}var e0=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B=Object.prototype.hasOwnProperty,x0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d0={},J={};function Z(t){return B.call(J,t)?!0:B.call(d0,t)?!1:x0.test(t)?J[t]=!0:(d0[t]=!0,!1)}function N0(t,c,n,e){if(n!==null&&n.type===0)return!1;switch(typeof c){case"function":case"symbol":return!0;case"boolean":return e?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T0(t,c,n,e){if(c===null||typeof c>"u"||N0(t,c,n,e))return!0;if(e)return!1;if(n!==null)switch(n.type){case 3:return!c;case 4:return c===!1;case 5:return isNaN(c);case 6:return isNaN(c)||1>c}return!1}function j(t,c,n,e,r,l,i){this.acceptsBooleans=c===2||c===3||c===4,this.attributeName=e,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=c,this.sanitizeURL=l,this.removeEmptyString=i}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){O[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var c=t[0];O[c]=new j(c,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){O[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){O[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){O[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){O[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){O[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){O[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){O[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var o0=/[\-:]([a-z])/g;function v0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var c=t.replace(o0,v0);O[c]=new j(c,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var c=t.replace(o0,v0);O[c]=new j(c,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var c=t.replace(o0,v0);O[c]=new j(c,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){O[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),O.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){O[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function y0(t,c,n,e){var r=O.hasOwnProperty(c)?O[c]:null;(r!==null?r.type!==0:e||!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N")&&(T0(c,n,r,e)&&(n=null),e||r===null?Z(c)&&(n===null?t.removeAttribute(c):t.setAttribute(c,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(c=r.attributeName,e=r.attributeNamespace,n===null?t.removeAttribute(c):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,e?t.setAttributeNS(e,c,n):t.setAttribute(c,n))))}var k0=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,n1=Symbol.for("react.element"),B0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),W1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),Z1=Symbol.for("react.context"),d1=Symbol.for("react.forward_ref"),U0=Symbol.for("react.suspense"),e1=Symbol.for("react.suspense_list"),f1=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),C=Symbol.iterator;function H(t){return t===null||typeof t!="object"?null:(t=C&&t[C]||t["@@iterator"],typeof t=="function"?t:null)}var k=Object.assign,f;function m(t){if(f===void 0)try{throw Error()}catch(n){var c=n.stack.trim().match(/\n( *(at )?)/);f=c&&c[1]||""}return`
`+f+t}var F=!1;function I(t,c){if(!t||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(c)if(c=function(){throw Error()},Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(v){var e=v}Reflect.construct(t,[],c)}else{try{c.call()}catch(v){e=v}t.call(c.prototype)}else{try{throw Error()}catch(v){e=v}t()}}catch(v){if(v&&e&&typeof v.stack=="string"){for(var r=v.stack.split(`
`),l=e.stack.split(`
`),i=r.length-1,o=l.length-1;1<=i&&0<=o&&r[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(r[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||r[i]!==l[o]){var a=`
`+r[i].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=i&&0<=o);break}}}finally{F=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?m(t):""}function Q(t){switch(t.tag){case 5:return m(t.type);case 16:return m("Lazy");case 13:return m("Suspense");case 19:return m("SuspenseList");case 0:case 2:case 15:return t=I(t.type,!1),t;case 11:return t=I(t.type.render,!1),t;case 1:return t=I(t.type,!0),t;default:return""}}function G(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R0:return"Fragment";case B0:return"Portal";case W1:return"Profiler";case X0:return"StrictMode";case U0:return"Suspense";case e1:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z1:return(t.displayName||"Context")+".Consumer";case m1:return(t._context.displayName||"Context")+".Provider";case d1:var c=t.render;return t=t.displayName,t||(t=c.displayName||c.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case f1:return c=t.displayName||null,c!==null?c:G(t.type)||"Memo";case D0:c=t._payload,t=t._init;try{return G(t(c))}catch{}}return null}function q(t){var c=t.type;switch(t.tag){case 24:return"Cache";case 9:return(c.displayName||"Context")+".Consumer";case 10:return(c._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=c.render,t=t.displayName||t.name||"",c.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return c;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return G(c);case 8:return c===X0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof c=="function")return c.displayName||c.name||null;if(typeof c=="string")return c}return null}function Y(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r0(t){var c=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(c==="checkbox"||c==="radio")}function $0(t){var c=r0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,c),e=""+t[c];if(!t.hasOwnProperty(c)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,l=n.set;return Object.defineProperty(t,c,{configurable:!0,get:function(){return r.call(this)},set:function(i){e=""+i,l.call(this,i)}}),Object.defineProperty(t,c,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[c]}}}}function M3(t){t._valueTracker||(t._valueTracker=$0(t))}function P5(t){if(!t)return!1;var c=t._valueTracker;if(!c)return!0;var n=c.getValue(),e="";return t&&(e=r0(t)?t.checked?"true":"false":t.value),t=e,t!==n?(c.setValue(t),!0):!1}function C3(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function P4(t,c){var n=c.checked;return k({},c,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function H5(t,c){var n=c.defaultValue==null?"":c.defaultValue,e=c.checked!=null?c.checked:c.defaultChecked;n=Y(c.value!=null?c.value:n),t._wrapperState={initialChecked:e,initialValue:n,controlled:c.type==="checkbox"||c.type==="radio"?c.checked!=null:c.value!=null}}function T5(t,c){c=c.checked,c!=null&&y0(t,"checked",c,!1)}function H4(t,c){T5(t,c);var n=Y(c.value),e=c.type;if(n!=null)e==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(e==="submit"||e==="reset"){t.removeAttribute("value");return}c.hasOwnProperty("value")?T4(t,c.type,n):c.hasOwnProperty("defaultValue")&&T4(t,c.type,Y(c.defaultValue)),c.checked==null&&c.defaultChecked!=null&&(t.defaultChecked=!!c.defaultChecked)}function R5(t,c,n){if(c.hasOwnProperty("value")||c.hasOwnProperty("defaultValue")){var e=c.type;if(!(e!=="submit"&&e!=="reset"||c.value!==void 0&&c.value!==null))return;c=""+t._wrapperState.initialValue,n||c===t.value||(t.value=c),t.defaultValue=c}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function T4(t,c,n){(c!=="number"||C3(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var R2=Array.isArray;function a2(t,c,n,e){if(t=t.options,c){c={};for(var r=0;r<n.length;r++)c["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=c.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&e&&(t[n].defaultSelected=!0)}else{for(n=""+Y(n),c=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,e&&(t[r].defaultSelected=!0);return}c!==null||t[r].disabled||(c=t[r])}c!==null&&(c.selected=!0)}}function R4(t,c){if(c.dangerouslySetInnerHTML!=null)throw Error(y(91));return k({},c,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D5(t,c){var n=c.value;if(n==null){if(n=c.children,c=c.defaultValue,n!=null){if(c!=null)throw Error(y(92));if(R2(n)){if(1<n.length)throw Error(y(93));n=n[0]}c=n}c==null&&(c=""),n=c}t._wrapperState={initialValue:Y(n)}}function j5(t,c){var n=Y(c.value),e=Y(c.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),c.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),e!=null&&(t.defaultValue=""+e)}function F5(t){var c=t.textContent;c===t._wrapperState.initialValue&&c!==""&&c!==null&&(t.value=c)}function V5(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function D4(t,c){return t==null||t==="http://www.w3.org/1999/xhtml"?V5(c):t==="http://www.w3.org/2000/svg"&&c==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var w3,O5=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(c,n,e,r){MSApp.execUnsafeLocalFunction(function(){return t(c,n,e,r)})}:t})(function(t,c){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=c;else{for(w3=w3||document.createElement("div"),w3.innerHTML="<svg>"+c.valueOf().toString()+"</svg>",c=w3.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;c.firstChild;)t.appendChild(c.firstChild)}});function D2(t,c){if(c){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=c;return}}t.textContent=c}var j2={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},On=["Webkit","ms","Moz","O"];Object.keys(j2).forEach(function(t){On.forEach(function(c){c=c+t.charAt(0).toUpperCase()+t.substring(1),j2[c]=j2[t]})});function I5(t,c,n){return c==null||typeof c=="boolean"||c===""?"":n||typeof c!="number"||c===0||j2.hasOwnProperty(t)&&j2[t]?(""+c).trim():c+"px"}function A5(t,c){t=t.style;for(var n in c)if(c.hasOwnProperty(n)){var e=n.indexOf("--")===0,r=I5(n,c[n],e);n==="float"&&(n="cssFloat"),e?t.setProperty(n,r):t[n]=r}}var In=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function j4(t,c){if(c){if(In[t]&&(c.children!=null||c.dangerouslySetInnerHTML!=null))throw Error(y(137,t));if(c.dangerouslySetInnerHTML!=null){if(c.children!=null)throw Error(y(60));if(typeof c.dangerouslySetInnerHTML!="object"||!("__html"in c.dangerouslySetInnerHTML))throw Error(y(61))}if(c.style!=null&&typeof c.style!="object")throw Error(y(62))}}function F4(t,c){if(t.indexOf("-")===-1)return typeof c.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V4=null;function O4(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var I4=null,d2=null,f2=null;function U5(t){if(t=l3(t)){if(typeof I4!="function")throw Error(y(280));var c=t.stateNode;c&&(c=G3(c),I4(t.stateNode,t.type,c))}}function $5(t){d2?f2?f2.push(t):f2=[t]:d2=t}function Q5(){if(d2){var t=d2,c=f2;if(f2=d2=null,U5(t),c)for(t=0;t<c.length;t++)U5(c[t])}}function G5(t,c){return t(c)}function K5(){}var A4=!1;function Y5(t,c,n){if(A4)return t(c,n);A4=!0;try{return G5(t,c,n)}finally{A4=!1,(d2!==null||f2!==null)&&(K5(),Q5())}}function F2(t,c){var n=t.stateNode;if(n===null)return null;var e=G3(n);if(e===null)return null;n=e[c];t:switch(c){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(y(231,c,typeof n));return n}var U4=!1;if(e0)try{var V2={};Object.defineProperty(V2,"passive",{get:function(){U4=!0}}),window.addEventListener("test",V2,V2),window.removeEventListener("test",V2,V2)}catch{U4=!1}function An(t,c,n,e,r,l,i,o,a){var v=Array.prototype.slice.call(arguments,3);try{c.apply(n,v)}catch(x){this.onError(x)}}var O2=!1,S3=null,k3=!1,$4=null,Un={onError:function(t){O2=!0,S3=t}};function $n(t,c,n,e,r,l,i,o,a){O2=!1,S3=null,An.apply(Un,arguments)}function Qn(t,c,n,e,r,l,i,o,a){if($n.apply(this,arguments),O2){if(O2){var v=S3;O2=!1,S3=null}else throw Error(y(198));k3||(k3=!0,$4=v)}}function J1(t){var c=t,n=t;if(t.alternate)for(;c.return;)c=c.return;else{t=c;do c=t,(c.flags&4098)!==0&&(n=c.return),t=c.return;while(t)}return c.tag===3?n:null}function X5(t){if(t.tag===13){var c=t.memoizedState;if(c===null&&(t=t.alternate,t!==null&&(c=t.memoizedState)),c!==null)return c.dehydrated}return null}function Z5(t){if(J1(t)!==t)throw Error(y(188))}function Gn(t){var c=t.alternate;if(!c){if(c=J1(t),c===null)throw Error(y(188));return c!==t?null:t}for(var n=t,e=c;;){var r=n.return;if(r===null)break;var l=r.alternate;if(l===null){if(e=r.return,e!==null){n=e;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===n)return Z5(r),t;if(l===e)return Z5(r),c;l=l.sibling}throw Error(y(188))}if(n.return!==e.return)n=r,e=l;else{for(var i=!1,o=r.child;o;){if(o===n){i=!0,n=r,e=l;break}if(o===e){i=!0,e=r,n=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===n){i=!0,n=l,e=r;break}if(o===e){i=!0,e=l,n=r;break}o=o.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==e)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?t:c}function J5(t){return t=Gn(t),t!==null?q5(t):null}function q5(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var c=q5(t);if(c!==null)return c;t=t.sibling}return null}var b5=R.unstable_scheduleCallback,tt=R.unstable_cancelCallback,Kn=R.unstable_shouldYield,Yn=R.unstable_requestPaint,f0=R.unstable_now,Xn=R.unstable_getCurrentPriorityLevel,Q4=R.unstable_ImmediatePriority,ct=R.unstable_UserBlockingPriority,_3=R.unstable_NormalPriority,Zn=R.unstable_LowPriority,nt=R.unstable_IdlePriority,L3=null,p1=null;function Jn(t){if(p1&&typeof p1.onCommitFiberRoot=="function")try{p1.onCommitFiberRoot(L3,t,void 0,(t.current.flags&128)===128)}catch{}}var r1=Math.clz32?Math.clz32:t7,qn=Math.log,bn=Math.LN2;function t7(t){return t>>>=0,t===0?32:31-(qn(t)/bn|0)|0}var W3=64,E3=4194304;function I2(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function N3(t,c){var n=t.pendingLanes;if(n===0)return 0;var e=0,r=t.suspendedLanes,l=t.pingedLanes,i=n&268435455;if(i!==0){var o=i&~r;o!==0?e=I2(o):(l&=i,l!==0&&(e=I2(l)))}else i=n&~r,i!==0?e=I2(i):l!==0&&(e=I2(l));if(e===0)return 0;if(c!==0&&c!==e&&(c&r)===0&&(r=e&-e,l=c&-c,r>=l||r===16&&(l&4194240)!==0))return c;if((e&4)!==0&&(e|=n&16),c=t.entangledLanes,c!==0)for(t=t.entanglements,c&=e;0<c;)n=31-r1(c),r=1<<n,e|=t[n],c&=~r;return e}function c7(t,c){switch(t){case 1:case 2:case 4:return c+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return c+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n7(t,c){for(var n=t.suspendedLanes,e=t.pingedLanes,r=t.expirationTimes,l=t.pendingLanes;0<l;){var i=31-r1(l),o=1<<i,a=r[i];a===-1?((o&n)===0||(o&e)!==0)&&(r[i]=c7(o,c)):a<=c&&(t.expiredLanes|=o),l&=~o}}function G4(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function et(){var t=W3;return W3<<=1,(W3&4194240)===0&&(W3=64),t}function K4(t){for(var c=[],n=0;31>n;n++)c.push(t);return c}function A2(t,c,n){t.pendingLanes|=c,c!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,c=31-r1(c),t[c]=n}function e7(t,c){var n=t.pendingLanes&~c;t.pendingLanes=c,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=c,t.mutableReadLanes&=c,t.entangledLanes&=c,c=t.entanglements;var e=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-r1(n),l=1<<r;c[r]=0,e[r]=-1,t[r]=-1,n&=~l}}function Y4(t,c){var n=t.entangledLanes|=c;for(t=t.entanglements;n;){var e=31-r1(n),r=1<<e;r&c|t[e]&c&&(t[e]|=c),n&=~r}}var X=0;function rt(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var lt,X4,st,it,ot,Z4=!1,B3=[],E1=null,N1=null,B1=null,U2=new Map,$2=new Map,P1=[],r7="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ut(t,c){switch(t){case"focusin":case"focusout":E1=null;break;case"dragenter":case"dragleave":N1=null;break;case"mouseover":case"mouseout":B1=null;break;case"pointerover":case"pointerout":U2.delete(c.pointerId);break;case"gotpointercapture":case"lostpointercapture":$2.delete(c.pointerId)}}function Q2(t,c,n,e,r,l){return t===null||t.nativeEvent!==l?(t={blockedOn:c,domEventName:n,eventSystemFlags:e,nativeEvent:l,targetContainers:[r]},c!==null&&(c=l3(c),c!==null&&X4(c)),t):(t.eventSystemFlags|=e,c=t.targetContainers,r!==null&&c.indexOf(r)===-1&&c.push(r),t)}function l7(t,c,n,e,r){switch(c){case"focusin":return E1=Q2(E1,t,c,n,e,r),!0;case"dragenter":return N1=Q2(N1,t,c,n,e,r),!0;case"mouseover":return B1=Q2(B1,t,c,n,e,r),!0;case"pointerover":var l=r.pointerId;return U2.set(l,Q2(U2.get(l)||null,t,c,n,e,r)),!0;case"gotpointercapture":return l=r.pointerId,$2.set(l,Q2($2.get(l)||null,t,c,n,e,r)),!0}return!1}function at(t){var c=q1(t.target);if(c!==null){var n=J1(c);if(n!==null){if(c=n.tag,c===13){if(c=X5(n),c!==null){t.blockedOn=c,ot(t.priority,function(){st(n)});return}}else if(c===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function P3(t){if(t.blockedOn!==null)return!1;for(var c=t.targetContainers;0<c.length;){var n=q4(t.domEventName,t.eventSystemFlags,c[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var e=new n.constructor(n.type,n);V4=e,n.target.dispatchEvent(e),V4=null}else return c=l3(n),c!==null&&X4(c),t.blockedOn=n,!1;c.shift()}return!0}function dt(t,c,n){P3(t)&&n.delete(c)}function s7(){Z4=!1,E1!==null&&P3(E1)&&(E1=null),N1!==null&&P3(N1)&&(N1=null),B1!==null&&P3(B1)&&(B1=null),U2.forEach(dt),$2.forEach(dt)}function G2(t,c){t.blockedOn===c&&(t.blockedOn=null,Z4||(Z4=!0,R.unstable_scheduleCallback(R.unstable_NormalPriority,s7)))}function K2(t){function c(r){return G2(r,t)}if(0<B3.length){G2(B3[0],t);for(var n=1;n<B3.length;n++){var e=B3[n];e.blockedOn===t&&(e.blockedOn=null)}}for(E1!==null&&G2(E1,t),N1!==null&&G2(N1,t),B1!==null&&G2(B1,t),U2.forEach(c),$2.forEach(c),n=0;n<P1.length;n++)e=P1[n],e.blockedOn===t&&(e.blockedOn=null);for(;0<P1.length&&(n=P1[0],n.blockedOn===null);)at(n),n.blockedOn===null&&P1.shift()}var p2=k0.ReactCurrentBatchConfig,H3=!0;function i7(t,c,n,e){var r=X,l=p2.transition;p2.transition=null;try{X=1,J4(t,c,n,e)}finally{X=r,p2.transition=l}}function o7(t,c,n,e){var r=X,l=p2.transition;p2.transition=null;try{X=4,J4(t,c,n,e)}finally{X=r,p2.transition=l}}function J4(t,c,n,e){if(H3){var r=q4(t,c,n,e);if(r===null)v6(t,c,e,T3,n),ut(t,e);else if(l7(r,t,c,n,e))e.stopPropagation();else if(ut(t,e),c&4&&-1<r7.indexOf(t)){for(;r!==null;){var l=l3(r);if(l!==null&&lt(l),l=q4(t,c,n,e),l===null&&v6(t,c,e,T3,n),l===r)break;r=l}r!==null&&e.stopPropagation()}else v6(t,c,e,null,n)}}var T3=null;function q4(t,c,n,e){if(T3=null,t=O4(e),t=q1(t),t!==null)if(c=J1(t),c===null)t=null;else if(n=c.tag,n===13){if(t=X5(c),t!==null)return t;t=null}else if(n===3){if(c.stateNode.current.memoizedState.isDehydrated)return c.tag===3?c.stateNode.containerInfo:null;t=null}else c!==t&&(t=null);return T3=t,null}function ft(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xn()){case Q4:return 1;case ct:return 4;case _3:case Zn:return 16;case nt:return 536870912;default:return 16}default:return 16}}var H1=null,b4=null,R3=null;function pt(){if(R3)return R3;var t,c=b4,n=c.length,e,r="value"in H1?H1.value:H1.textContent,l=r.length;for(t=0;t<n&&c[t]===r[t];t++);var i=n-t;for(e=1;e<=i&&c[n-e]===r[l-e];e++);return R3=r.slice(t,1<e?1-e:void 0)}function D3(t){var c=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&c===13&&(t=13)):t=c,t===10&&(t=13),32<=t||t===13?t:0}function j3(){return!0}function ht(){return!1}function Q0(t){function c(n,e,r,l,i){this._reactName=n,this._targetInst=r,this.type=e,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?j3:ht,this.isPropagationStopped=ht,this}return k(c.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=j3)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=j3)},persist:function(){},isPersistent:j3}),c}var h2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},t6=Q0(h2),Y2=k({},h2,{view:0,detail:0}),u7=Q0(Y2),c6,n6,X2,F3=k({},Y2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:r6,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==X2&&(X2&&t.type==="mousemove"?(c6=t.screenX-X2.screenX,n6=t.screenY-X2.screenY):n6=c6=0,X2=t),c6)},movementY:function(t){return"movementY"in t?t.movementY:n6}}),vt=Q0(F3),a7=k({},F3,{dataTransfer:0}),d7=Q0(a7),f7=k({},Y2,{relatedTarget:0}),e6=Q0(f7),p7=k({},h2,{animationName:0,elapsedTime:0,pseudoElement:0}),h7=Q0(p7),v7=k({},h2,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y7=Q0(v7),g7=k({},h2,{data:0}),yt=Q0(g7),m7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M7(t){var c=this.nativeEvent;return c.getModifierState?c.getModifierState(t):(t=z7[t])?!!c[t]:!1}function r6(){return M7}var C7=k({},Y2,{key:function(t){if(t.key){var c=m7[t.key]||t.key;if(c!=="Unidentified")return c}return t.type==="keypress"?(t=D3(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x7[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:r6,charCode:function(t){return t.type==="keypress"?D3(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?D3(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),w7=Q0(C7),S7=k({},F3,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gt=Q0(S7),k7=k({},Y2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:r6}),_7=Q0(k7),L7=k({},h2,{propertyName:0,elapsedTime:0,pseudoElement:0}),W7=Q0(L7),E7=k({},F3,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N7=Q0(E7),B7=[9,13,27,32],l6=e0&&"CompositionEvent"in window,Z2=null;e0&&"documentMode"in document&&(Z2=document.documentMode);var P7=e0&&"TextEvent"in window&&!Z2,mt=e0&&(!l6||Z2&&8<Z2&&11>=Z2),xt=" ",zt=!1;function Mt(t,c){switch(t){case"keyup":return B7.indexOf(c.keyCode)!==-1;case"keydown":return c.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ct(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var v2=!1;function H7(t,c){switch(t){case"compositionend":return Ct(c);case"keypress":return c.which!==32?null:(zt=!0,xt);case"textInput":return t=c.data,t===xt&&zt?null:t;default:return null}}function T7(t,c){if(v2)return t==="compositionend"||!l6&&Mt(t,c)?(t=pt(),R3=b4=H1=null,v2=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(c.ctrlKey||c.altKey||c.metaKey)||c.ctrlKey&&c.altKey){if(c.char&&1<c.char.length)return c.char;if(c.which)return String.fromCharCode(c.which)}return null;case"compositionend":return mt&&c.locale!=="ko"?null:c.data;default:return null}}var R7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wt(t){var c=t&&t.nodeName&&t.nodeName.toLowerCase();return c==="input"?!!R7[t.type]:c==="textarea"}function St(t,c,n,e){$5(e),c=U3(c,"onChange"),0<c.length&&(n=new t6("onChange","change",null,n,e),t.push({event:n,listeners:c}))}var J2=null,q2=null;function D7(t){At(t,0)}function V3(t){var c=z2(t);if(P5(c))return t}function j7(t,c){if(t==="change")return c}var kt=!1;if(e0){var s6;if(e0){var i6="oninput"in document;if(!i6){var _t=document.createElement("div");_t.setAttribute("oninput","return;"),i6=typeof _t.oninput=="function"}s6=i6}else s6=!1;kt=s6&&(!document.documentMode||9<document.documentMode)}function Lt(){J2&&(J2.detachEvent("onpropertychange",Wt),q2=J2=null)}function Wt(t){if(t.propertyName==="value"&&V3(q2)){var c=[];St(c,q2,t,O4(t)),Y5(D7,c)}}function F7(t,c,n){t==="focusin"?(Lt(),J2=c,q2=n,J2.attachEvent("onpropertychange",Wt)):t==="focusout"&&Lt()}function V7(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return V3(q2)}function O7(t,c){if(t==="click")return V3(c)}function I7(t,c){if(t==="input"||t==="change")return V3(c)}function A7(t,c){return t===c&&(t!==0||1/t===1/c)||t!==t&&c!==c}var l1=typeof Object.is=="function"?Object.is:A7;function b2(t,c){if(l1(t,c))return!0;if(typeof t!="object"||t===null||typeof c!="object"||c===null)return!1;var n=Object.keys(t),e=Object.keys(c);if(n.length!==e.length)return!1;for(e=0;e<n.length;e++){var r=n[e];if(!B.call(c,r)||!l1(t[r],c[r]))return!1}return!0}function Et(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nt(t,c){var n=Et(t);t=0;for(var e;n;){if(n.nodeType===3){if(e=t+n.textContent.length,t<=c&&e>=c)return{node:n,offset:c-t};t=e}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Et(n)}}function Bt(t,c){return t&&c?t===c?!0:t&&t.nodeType===3?!1:c&&c.nodeType===3?Bt(t,c.parentNode):"contains"in t?t.contains(c):t.compareDocumentPosition?!!(t.compareDocumentPosition(c)&16):!1:!1}function Pt(){for(var t=window,c=C3();c instanceof t.HTMLIFrameElement;){try{var n=typeof c.contentWindow.location.href=="string"}catch{n=!1}if(n)t=c.contentWindow;else break;c=C3(t.document)}return c}function o6(t){var c=t&&t.nodeName&&t.nodeName.toLowerCase();return c&&(c==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||c==="textarea"||t.contentEditable==="true")}function U7(t){var c=Pt(),n=t.focusedElem,e=t.selectionRange;if(c!==n&&n&&n.ownerDocument&&Bt(n.ownerDocument.documentElement,n)){if(e!==null&&o6(n)){if(c=e.start,t=e.end,t===void 0&&(t=c),"selectionStart"in n)n.selectionStart=c,n.selectionEnd=Math.min(t,n.value.length);else if(t=(c=n.ownerDocument||document)&&c.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,l=Math.min(e.start,r);e=e.end===void 0?l:Math.min(e.end,r),!t.extend&&l>e&&(r=e,e=l,l=r),r=Nt(n,l);var i=Nt(n,e);r&&i&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&(c=c.createRange(),c.setStart(r.node,r.offset),t.removeAllRanges(),l>e?(t.addRange(c),t.extend(i.node,i.offset)):(c.setEnd(i.node,i.offset),t.addRange(c)))}}for(c=[],t=n;t=t.parentNode;)t.nodeType===1&&c.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<c.length;n++)t=c[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $7=e0&&"documentMode"in document&&11>=document.documentMode,y2=null,u6=null,t3=null,a6=!1;function Ht(t,c,n){var e=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;a6||y2==null||y2!==C3(e)||(e=y2,"selectionStart"in e&&o6(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),t3&&b2(t3,e)||(t3=e,e=U3(u6,"onSelect"),0<e.length&&(c=new t6("onSelect","select",null,c,n),t.push({event:c,listeners:e}),c.target=y2)))}function O3(t,c){var n={};return n[t.toLowerCase()]=c.toLowerCase(),n["Webkit"+t]="webkit"+c,n["Moz"+t]="moz"+c,n}var g2={animationend:O3("Animation","AnimationEnd"),animationiteration:O3("Animation","AnimationIteration"),animationstart:O3("Animation","AnimationStart"),transitionend:O3("Transition","TransitionEnd")},d6={},Tt={};e0&&(Tt=document.createElement("div").style,"AnimationEvent"in window||(delete g2.animationend.animation,delete g2.animationiteration.animation,delete g2.animationstart.animation),"TransitionEvent"in window||delete g2.transitionend.transition);function I3(t){if(d6[t])return d6[t];if(!g2[t])return t;var c=g2[t],n;for(n in c)if(c.hasOwnProperty(n)&&n in Tt)return d6[t]=c[n];return t}var Rt=I3("animationend"),Dt=I3("animationiteration"),jt=I3("animationstart"),Ft=I3("transitionend"),Vt=new Map,Ot="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function T1(t,c){Vt.set(t,c),U(c,[t])}for(var f6=0;f6<Ot.length;f6++){var p6=Ot[f6],Q7=p6.toLowerCase(),G7=p6[0].toUpperCase()+p6.slice(1);T1(Q7,"on"+G7)}T1(Rt,"onAnimationEnd"),T1(Dt,"onAnimationIteration"),T1(jt,"onAnimationStart"),T1("dblclick","onDoubleClick"),T1("focusin","onFocus"),T1("focusout","onBlur"),T1(Ft,"onTransitionEnd"),t0("onMouseEnter",["mouseout","mouseover"]),t0("onMouseLeave",["mouseout","mouseover"]),t0("onPointerEnter",["pointerout","pointerover"]),t0("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var c3="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K7=new Set("cancel close invalid load scroll toggle".split(" ").concat(c3));function It(t,c,n){var e=t.type||"unknown-event";t.currentTarget=n,Qn(e,c,void 0,t),t.currentTarget=null}function At(t,c){c=(c&4)!==0;for(var n=0;n<t.length;n++){var e=t[n],r=e.event;e=e.listeners;t:{var l=void 0;if(c)for(var i=e.length-1;0<=i;i--){var o=e[i],a=o.instance,v=o.currentTarget;if(o=o.listener,a!==l&&r.isPropagationStopped())break t;It(r,o,v),l=a}else for(i=0;i<e.length;i++){if(o=e[i],a=o.instance,v=o.currentTarget,o=o.listener,a!==l&&r.isPropagationStopped())break t;It(r,o,v),l=a}}}if(k3)throw t=$4,k3=!1,$4=null,t}function c0(t,c){var n=c[M6];n===void 0&&(n=c[M6]=new Set);var e=t+"__bubble";n.has(e)||(Ut(c,t,2,!1),n.add(e))}function h6(t,c,n){var e=0;c&&(e|=4),Ut(n,t,e,c)}var A3="_reactListening"+Math.random().toString(36).slice(2);function n3(t){if(!t[A3]){t[A3]=!0,A.forEach(function(n){n!=="selectionchange"&&(K7.has(n)||h6(n,!1,t),h6(n,!0,t))});var c=t.nodeType===9?t:t.ownerDocument;c===null||c[A3]||(c[A3]=!0,h6("selectionchange",!1,c))}}function Ut(t,c,n,e){switch(ft(c)){case 1:var r=i7;break;case 4:r=o7;break;default:r=J4}n=r.bind(null,c,n,t),r=void 0,!U4||c!=="touchstart"&&c!=="touchmove"&&c!=="wheel"||(r=!0),e?r!==void 0?t.addEventListener(c,n,{capture:!0,passive:r}):t.addEventListener(c,n,!0):r!==void 0?t.addEventListener(c,n,{passive:r}):t.addEventListener(c,n,!1)}function v6(t,c,n,e,r){var l=e;if((c&1)===0&&(c&2)===0&&e!==null)t:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var o=e.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(i===4)for(i=e.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;i=i.return}for(;o!==null;){if(i=q1(o),i===null)return;if(a=i.tag,a===5||a===6){e=l=i;continue t}o=o.parentNode}}e=e.return}Y5(function(){var v=l,x=O4(n),z=[];t:{var g=Vt.get(t);if(g!==void 0){var w=t6,_=t;switch(t){case"keypress":if(D3(n)===0)break t;case"keydown":case"keyup":w=w7;break;case"focusin":_="focus",w=e6;break;case"focusout":_="blur",w=e6;break;case"beforeblur":case"afterblur":w=e6;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=d7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=_7;break;case Rt:case Dt:case jt:w=h7;break;case Ft:w=W7;break;case"scroll":w=u7;break;case"wheel":w=N7;break;case"copy":case"cut":case"paste":w=y7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=gt}var L=(c&4)!==0,p0=!L&&t==="scroll",p=L?g!==null?g+"Capture":null:g;L=[];for(var d=v,h;d!==null;){h=d;var M=h.stateNode;if(h.tag===5&&M!==null&&(h=M,p!==null&&(M=F2(d,p),M!=null&&L.push(e3(d,M,h)))),p0)break;d=d.return}0<L.length&&(g=new w(g,_,null,n,x),z.push({event:g,listeners:L}))}}if((c&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==V4&&(_=n.relatedTarget||n.fromElement)&&(q1(_)||_[x1]))break t;if((w||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,w?(_=n.relatedTarget||n.toElement,w=v,_=_?q1(_):null,_!==null&&(p0=J1(_),_!==p0||_.tag!==5&&_.tag!==6)&&(_=null)):(w=null,_=v),w!==_)){if(L=vt,M="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(L=gt,M="onPointerLeave",p="onPointerEnter",d="pointer"),p0=w==null?g:z2(w),h=_==null?g:z2(_),g=new L(M,d+"leave",w,n,x),g.target=p0,g.relatedTarget=h,M=null,q1(x)===v&&(L=new L(p,d+"enter",_,n,x),L.target=h,L.relatedTarget=p0,M=L),p0=M,w&&_)c:{for(L=w,p=_,d=0,h=L;h;h=m2(h))d++;for(h=0,M=p;M;M=m2(M))h++;for(;0<d-h;)L=m2(L),d--;for(;0<h-d;)p=m2(p),h--;for(;d--;){if(L===p||p!==null&&L===p.alternate)break c;L=m2(L),p=m2(p)}L=null}else L=null;w!==null&&$t(z,g,w,L,!1),_!==null&&p0!==null&&$t(z,p0,_,L,!0)}}t:{if(g=v?z2(v):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var W=j7;else if(wt(g))if(kt)W=I7;else{W=V7;var E=F7}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(W=O7);if(W&&(W=W(t,v))){St(z,W,n,x);break t}E&&E(t,g,v),t==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&T4(g,"number",g.value)}switch(E=v?z2(v):window,t){case"focusin":(wt(E)||E.contentEditable==="true")&&(y2=E,u6=v,t3=null);break;case"focusout":t3=u6=y2=null;break;case"mousedown":a6=!0;break;case"contextmenu":case"mouseup":case"dragend":a6=!1,Ht(z,n,x);break;case"selectionchange":if($7)break;case"keydown":case"keyup":Ht(z,n,x)}var N;if(l6)t:{switch(t){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else v2?Mt(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(mt&&n.locale!=="ko"&&(v2||T!=="onCompositionStart"?T==="onCompositionEnd"&&v2&&(N=pt()):(H1=x,b4="value"in H1?H1.value:H1.textContent,v2=!0)),E=U3(v,T),0<E.length&&(T=new yt(T,t,null,n,x),z.push({event:T,listeners:E}),N?T.data=N:(N=Ct(n),N!==null&&(T.data=N)))),(N=P7?H7(t,n):T7(t,n))&&(v=U3(v,"onBeforeInput"),0<v.length&&(x=new yt("onBeforeInput","beforeinput",null,n,x),z.push({event:x,listeners:v}),x.data=N))}At(z,c)})}function e3(t,c,n){return{instance:t,listener:c,currentTarget:n}}function U3(t,c){for(var n=c+"Capture",e=[];t!==null;){var r=t,l=r.stateNode;r.tag===5&&l!==null&&(r=l,l=F2(t,n),l!=null&&e.unshift(e3(t,l,r)),l=F2(t,c),l!=null&&e.push(e3(t,l,r))),t=t.return}return e}function m2(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $t(t,c,n,e,r){for(var l=c._reactName,i=[];n!==null&&n!==e;){var o=n,a=o.alternate,v=o.stateNode;if(a!==null&&a===e)break;o.tag===5&&v!==null&&(o=v,r?(a=F2(n,l),a!=null&&i.unshift(e3(n,a,o))):r||(a=F2(n,l),a!=null&&i.push(e3(n,a,o)))),n=n.return}i.length!==0&&t.push({event:c,listeners:i})}var Y7=/\r\n?/g,X7=/\u0000|\uFFFD/g;function Qt(t){return(typeof t=="string"?t:""+t).replace(Y7,`
`).replace(X7,"")}function $3(t,c,n){if(c=Qt(c),Qt(t)!==c&&n)throw Error(y(425))}function Q3(){}var y6=null,g6=null;function m6(t,c){return t==="textarea"||t==="noscript"||typeof c.children=="string"||typeof c.children=="number"||typeof c.dangerouslySetInnerHTML=="object"&&c.dangerouslySetInnerHTML!==null&&c.dangerouslySetInnerHTML.__html!=null}var x6=typeof setTimeout=="function"?setTimeout:void 0,Z7=typeof clearTimeout=="function"?clearTimeout:void 0,Gt=typeof Promise=="function"?Promise:void 0,J7=typeof queueMicrotask=="function"?queueMicrotask:typeof Gt<"u"?function(t){return Gt.resolve(null).then(t).catch(q7)}:x6;function q7(t){setTimeout(function(){throw t})}function z6(t,c){var n=c,e=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0){t.removeChild(r),K2(c);return}e--}else n!=="$"&&n!=="$?"&&n!=="$!"||e++;n=r}while(n);K2(c)}function R1(t){for(;t!=null;t=t.nextSibling){var c=t.nodeType;if(c===1||c===3)break;if(c===8){if(c=t.data,c==="$"||c==="$!"||c==="$?")break;if(c==="/$")return null}}return t}function Kt(t){t=t.previousSibling;for(var c=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(c===0)return t;c--}else n==="/$"&&c++}t=t.previousSibling}return null}var x2=Math.random().toString(36).slice(2),h1="__reactFiber$"+x2,r3="__reactProps$"+x2,x1="__reactContainer$"+x2,M6="__reactEvents$"+x2,b7="__reactListeners$"+x2,te="__reactHandles$"+x2;function q1(t){var c=t[h1];if(c)return c;for(var n=t.parentNode;n;){if(c=n[x1]||n[h1]){if(n=c.alternate,c.child!==null||n!==null&&n.child!==null)for(t=Kt(t);t!==null;){if(n=t[h1])return n;t=Kt(t)}return c}t=n,n=t.parentNode}return null}function l3(t){return t=t[h1]||t[x1],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function z2(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(y(33))}function G3(t){return t[r3]||null}var C6=[],M2=-1;function D1(t){return{current:t}}function n0(t){0>M2||(t.current=C6[M2],C6[M2]=null,M2--)}function b(t,c){M2++,C6[M2]=t.current,t.current=c}var j1={},_0=D1(j1),j0=D1(!1),b1=j1;function C2(t,c){var n=t.type.contextTypes;if(!n)return j1;var e=t.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===c)return e.__reactInternalMemoizedMaskedChildContext;var r={},l;for(l in n)r[l]=c[l];return e&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=r),r}function F0(t){return t=t.childContextTypes,t!=null}function K3(){n0(j0),n0(_0)}function Yt(t,c,n){if(_0.current!==j1)throw Error(y(168));b(_0,c),b(j0,n)}function Xt(t,c,n){var e=t.stateNode;if(c=c.childContextTypes,typeof e.getChildContext!="function")return n;e=e.getChildContext();for(var r in e)if(!(r in c))throw Error(y(108,q(t)||"Unknown",r));return k({},n,e)}function Y3(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||j1,b1=_0.current,b(_0,t),b(j0,j0.current),!0}function Zt(t,c,n){var e=t.stateNode;if(!e)throw Error(y(169));n?(t=Xt(t,c,b1),e.__reactInternalMemoizedMergedChildContext=t,n0(j0),n0(_0),b(_0,t)):n0(j0),b(j0,n)}var z1=null,X3=!1,w6=!1;function Jt(t){z1===null?z1=[t]:z1.push(t)}function ce(t){X3=!0,Jt(t)}function F1(){if(!w6&&z1!==null){w6=!0;var t=0,c=X;try{var n=z1;for(X=1;t<n.length;t++){var e=n[t];do e=e(!0);while(e!==null)}z1=null,X3=!1}catch(r){throw z1!==null&&(z1=z1.slice(t+1)),b5(Q4,F1),r}finally{X=c,w6=!1}}return null}var w2=[],S2=0,Z3=null,J3=0,Z0=[],J0=0,t2=null,M1=1,C1="";function c2(t,c){w2[S2++]=J3,w2[S2++]=Z3,Z3=t,J3=c}function qt(t,c,n){Z0[J0++]=M1,Z0[J0++]=C1,Z0[J0++]=t2,t2=t;var e=M1;t=C1;var r=32-r1(e)-1;e&=~(1<<r),n+=1;var l=32-r1(c)+r;if(30<l){var i=r-r%5;l=(e&(1<<i)-1).toString(32),e>>=i,r-=i,M1=1<<32-r1(c)+r|n<<r|e,C1=l+t}else M1=1<<l|n<<r|e,C1=t}function S6(t){t.return!==null&&(c2(t,1),qt(t,1,0))}function k6(t){for(;t===Z3;)Z3=w2[--S2],w2[S2]=null,J3=w2[--S2],w2[S2]=null;for(;t===t2;)t2=Z0[--J0],Z0[J0]=null,C1=Z0[--J0],Z0[J0]=null,M1=Z0[--J0],Z0[J0]=null}var G0=null,K0=null,l0=!1,s1=null;function bt(t,c){var n=c1(5,null,null,0);n.elementType="DELETED",n.stateNode=c,n.return=t,c=t.deletions,c===null?(t.deletions=[n],t.flags|=16):c.push(n)}function tc(t,c){switch(t.tag){case 5:var n=t.type;return c=c.nodeType!==1||n.toLowerCase()!==c.nodeName.toLowerCase()?null:c,c!==null?(t.stateNode=c,G0=t,K0=R1(c.firstChild),!0):!1;case 6:return c=t.pendingProps===""||c.nodeType!==3?null:c,c!==null?(t.stateNode=c,G0=t,K0=null,!0):!1;case 13:return c=c.nodeType!==8?null:c,c!==null?(n=t2!==null?{id:M1,overflow:C1}:null,t.memoizedState={dehydrated:c,treeContext:n,retryLane:1073741824},n=c1(18,null,null,0),n.stateNode=c,n.return=t,t.child=n,G0=t,K0=null,!0):!1;default:return!1}}function _6(t){return(t.mode&1)!==0&&(t.flags&128)===0}function L6(t){if(l0){var c=K0;if(c){var n=c;if(!tc(t,c)){if(_6(t))throw Error(y(418));c=R1(n.nextSibling);var e=G0;c&&tc(t,c)?bt(e,n):(t.flags=t.flags&-4097|2,l0=!1,G0=t)}}else{if(_6(t))throw Error(y(418));t.flags=t.flags&-4097|2,l0=!1,G0=t}}}function cc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;G0=t}function q3(t){if(t!==G0)return!1;if(!l0)return cc(t),l0=!0,!1;var c;if((c=t.tag!==3)&&!(c=t.tag!==5)&&(c=t.type,c=c!=="head"&&c!=="body"&&!m6(t.type,t.memoizedProps)),c&&(c=K0)){if(_6(t))throw nc(),Error(y(418));for(;c;)bt(t,c),c=R1(c.nextSibling)}if(cc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));t:{for(t=t.nextSibling,c=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(c===0){K0=R1(t.nextSibling);break t}c--}else n!=="$"&&n!=="$!"&&n!=="$?"||c++}t=t.nextSibling}K0=null}}else K0=G0?R1(t.stateNode.nextSibling):null;return!0}function nc(){for(var t=K0;t;)t=R1(t.nextSibling)}function k2(){K0=G0=null,l0=!1}function W6(t){s1===null?s1=[t]:s1.push(t)}var ne=k0.ReactCurrentBatchConfig;function s3(t,c,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var e=n.stateNode}if(!e)throw Error(y(147,t));var r=e,l=""+t;return c!==null&&c.ref!==null&&typeof c.ref=="function"&&c.ref._stringRef===l?c.ref:(c=function(i){var o=r.refs;i===null?delete o[l]:o[l]=i},c._stringRef=l,c)}if(typeof t!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,t))}return t}function b3(t,c){throw t=Object.prototype.toString.call(c),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":t))}function ec(t){var c=t._init;return c(t._payload)}function rc(t){function c(p,d){if(t){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)c(p,d),d=d.sibling;return null}function e(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function r(p,d){return p=G1(p,d),p.index=0,p.sibling=null,p}function l(p,d,h){return p.index=h,t?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return t&&p.alternate===null&&(p.flags|=2),p}function o(p,d,h,M){return d===null||d.tag!==6?(d=x5(h,p.mode,M),d.return=p,d):(d=r(d,h),d.return=p,d)}function a(p,d,h,M){var W=h.type;return W===R0?x(p,d,h.props.children,M,h.key):d!==null&&(d.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===D0&&ec(W)===d.type)?(M=r(d,h.props),M.ref=s3(p,d,h),M.return=p,M):(M=w4(h.type,h.key,h.props,null,p.mode,M),M.ref=s3(p,d,h),M.return=p,M)}function v(p,d,h,M){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=z5(h,p.mode,M),d.return=p,d):(d=r(d,h.children||[]),d.return=p,d)}function x(p,d,h,M,W){return d===null||d.tag!==7?(d=u2(h,p.mode,M,W),d.return=p,d):(d=r(d,h),d.return=p,d)}function z(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=x5(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case n1:return h=w4(d.type,d.key,d.props,null,p.mode,h),h.ref=s3(p,null,d),h.return=p,h;case B0:return d=z5(d,p.mode,h),d.return=p,d;case D0:var M=d._init;return z(p,M(d._payload),h)}if(R2(d)||H(d))return d=u2(d,p.mode,h,null),d.return=p,d;b3(p,d)}return null}function g(p,d,h,M){var W=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return W!==null?null:o(p,d,""+h,M);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case n1:return h.key===W?a(p,d,h,M):null;case B0:return h.key===W?v(p,d,h,M):null;case D0:return W=h._init,g(p,d,W(h._payload),M)}if(R2(h)||H(h))return W!==null?null:x(p,d,h,M,null);b3(p,h)}return null}function w(p,d,h,M,W){if(typeof M=="string"&&M!==""||typeof M=="number")return p=p.get(h)||null,o(d,p,""+M,W);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case n1:return p=p.get(M.key===null?h:M.key)||null,a(d,p,M,W);case B0:return p=p.get(M.key===null?h:M.key)||null,v(d,p,M,W);case D0:var E=M._init;return w(p,d,h,E(M._payload),W)}if(R2(M)||H(M))return p=p.get(h)||null,x(d,p,M,W,null);b3(d,M)}return null}function _(p,d,h,M){for(var W=null,E=null,N=d,T=d=0,C0=null;N!==null&&T<h.length;T++){N.index>T?(C0=N,N=null):C0=N.sibling;var K=g(p,N,h[T],M);if(K===null){N===null&&(N=C0);break}t&&N&&K.alternate===null&&c(p,N),d=l(K,d,T),E===null?W=K:E.sibling=K,E=K,N=C0}if(T===h.length)return n(p,N),l0&&c2(p,T),W;if(N===null){for(;T<h.length;T++)N=z(p,h[T],M),N!==null&&(d=l(N,d,T),E===null?W=N:E.sibling=N,E=N);return l0&&c2(p,T),W}for(N=e(p,N);T<h.length;T++)C0=w(N,p,T,h[T],M),C0!==null&&(t&&C0.alternate!==null&&N.delete(C0.key===null?T:C0.key),d=l(C0,d,T),E===null?W=C0:E.sibling=C0,E=C0);return t&&N.forEach(function(K1){return c(p,K1)}),l0&&c2(p,T),W}function L(p,d,h,M){var W=H(h);if(typeof W!="function")throw Error(y(150));if(h=W.call(h),h==null)throw Error(y(151));for(var E=W=null,N=d,T=d=0,C0=null,K=h.next();N!==null&&!K.done;T++,K=h.next()){N.index>T?(C0=N,N=null):C0=N.sibling;var K1=g(p,N,K.value,M);if(K1===null){N===null&&(N=C0);break}t&&N&&K1.alternate===null&&c(p,N),d=l(K1,d,T),E===null?W=K1:E.sibling=K1,E=K1,N=C0}if(K.done)return n(p,N),l0&&c2(p,T),W;if(N===null){for(;!K.done;T++,K=h.next())K=z(p,K.value,M),K!==null&&(d=l(K,d,T),E===null?W=K:E.sibling=K,E=K);return l0&&c2(p,T),W}for(N=e(p,N);!K.done;T++,K=h.next())K=w(N,p,T,K.value,M),K!==null&&(t&&K.alternate!==null&&N.delete(K.key===null?T:K.key),d=l(K,d,T),E===null?W=K:E.sibling=K,E=K);return t&&N.forEach(function(Re){return c(p,Re)}),l0&&c2(p,T),W}function p0(p,d,h,M){if(typeof h=="object"&&h!==null&&h.type===R0&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case n1:t:{for(var W=h.key,E=d;E!==null;){if(E.key===W){if(W=h.type,W===R0){if(E.tag===7){n(p,E.sibling),d=r(E,h.props.children),d.return=p,p=d;break t}}else if(E.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===D0&&ec(W)===E.type){n(p,E.sibling),d=r(E,h.props),d.ref=s3(p,E,h),d.return=p,p=d;break t}n(p,E);break}else c(p,E);E=E.sibling}h.type===R0?(d=u2(h.props.children,p.mode,M,h.key),d.return=p,p=d):(M=w4(h.type,h.key,h.props,null,p.mode,M),M.ref=s3(p,d,h),M.return=p,p=M)}return i(p);case B0:t:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=r(d,h.children||[]),d.return=p,p=d;break t}else{n(p,d);break}else c(p,d);d=d.sibling}d=z5(h,p.mode,M),d.return=p,p=d}return i(p);case D0:return E=h._init,p0(p,d,E(h._payload),M)}if(R2(h))return _(p,d,h,M);if(H(h))return L(p,d,h,M);b3(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=r(d,h),d.return=p,p=d):(n(p,d),d=x5(h,p.mode,M),d.return=p,p=d),i(p)):n(p,d)}return p0}var _2=rc(!0),lc=rc(!1),t4=D1(null),c4=null,L2=null,E6=null;function N6(){E6=L2=c4=null}function B6(t){var c=t4.current;n0(t4),t._currentValue=c}function P6(t,c,n){for(;t!==null;){var e=t.alternate;if((t.childLanes&c)!==c?(t.childLanes|=c,e!==null&&(e.childLanes|=c)):e!==null&&(e.childLanes&c)!==c&&(e.childLanes|=c),t===n)break;t=t.return}}function W2(t,c){c4=t,E6=L2=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&c)!==0&&(V0=!0),t.firstContext=null)}function q0(t){var c=t._currentValue;if(E6!==t)if(t={context:t,memoizedValue:c,next:null},L2===null){if(c4===null)throw Error(y(308));L2=t,c4.dependencies={lanes:0,firstContext:t}}else L2=L2.next=t;return c}var n2=null;function H6(t){n2===null?n2=[t]:n2.push(t)}function sc(t,c,n,e){var r=c.interleaved;return r===null?(n.next=n,H6(c)):(n.next=r.next,r.next=n),c.interleaved=n,w1(t,e)}function w1(t,c){t.lanes|=c;var n=t.alternate;for(n!==null&&(n.lanes|=c),n=t,t=t.return;t!==null;)t.childLanes|=c,n=t.alternate,n!==null&&(n.childLanes|=c),n=t,t=t.return;return n.tag===3?n.stateNode:null}var V1=!1;function T6(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ic(t,c){t=t.updateQueue,c.updateQueue===t&&(c.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function S1(t,c){return{eventTime:t,lane:c,tag:0,payload:null,callback:null,next:null}}function O1(t,c,n){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,($&2)!==0){var r=e.pending;return r===null?c.next=c:(c.next=r.next,r.next=c),e.pending=c,w1(t,n)}return r=e.interleaved,r===null?(c.next=c,H6(e)):(c.next=r.next,r.next=c),e.interleaved=c,w1(t,n)}function n4(t,c,n){if(c=c.updateQueue,c!==null&&(c=c.shared,(n&4194240)!==0)){var e=c.lanes;e&=t.pendingLanes,n|=e,c.lanes=n,Y4(t,n)}}function oc(t,c){var n=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,n===e)){var r=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?r=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?r=l=c:l=l.next=c}else r=l=c;n={baseState:e.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:e.shared,effects:e.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=c:t.next=c,n.lastBaseUpdate=c}function e4(t,c,n,e){var r=t.updateQueue;V1=!1;var l=r.firstBaseUpdate,i=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var a=o,v=a.next;a.next=null,i===null?l=v:i.next=v,i=a;var x=t.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==i&&(o===null?x.firstBaseUpdate=v:o.next=v,x.lastBaseUpdate=a))}if(l!==null){var z=r.baseState;i=0,x=v=a=null,o=l;do{var g=o.lane,w=o.eventTime;if((e&g)===g){x!==null&&(x=x.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});t:{var _=t,L=o;switch(g=c,w=n,L.tag){case 1:if(_=L.payload,typeof _=="function"){z=_.call(w,z,g);break t}z=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=L.payload,g=typeof _=="function"?_.call(w,z,g):_,g==null)break t;z=k({},z,g);break t;case 2:V1=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,g=r.effects,g===null?r.effects=[o]:g.push(o))}else w={eventTime:w,lane:g,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(v=x=w,a=z):x=x.next=w,i|=g;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;g=o,o=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(x===null&&(a=z),r.baseState=a,r.firstBaseUpdate=v,r.lastBaseUpdate=x,c=r.shared.interleaved,c!==null){r=c;do i|=r.lane,r=r.next;while(r!==c)}else l===null&&(r.shared.lanes=0);l2|=i,t.lanes=i,t.memoizedState=z}}function uc(t,c,n){if(t=c.effects,c.effects=null,t!==null)for(c=0;c<t.length;c++){var e=t[c],r=e.callback;if(r!==null){if(e.callback=null,e=n,typeof r!="function")throw Error(y(191,r));r.call(e)}}}var i3={},v1=D1(i3),o3=D1(i3),u3=D1(i3);function e2(t){if(t===i3)throw Error(y(174));return t}function R6(t,c){switch(b(u3,c),b(o3,t),b(v1,i3),t=c.nodeType,t){case 9:case 11:c=(c=c.documentElement)?c.namespaceURI:D4(null,"");break;default:t=t===8?c.parentNode:c,c=t.namespaceURI||null,t=t.tagName,c=D4(c,t)}n0(v1),b(v1,c)}function E2(){n0(v1),n0(o3),n0(u3)}function ac(t){e2(u3.current);var c=e2(v1.current),n=D4(c,t.type);c!==n&&(b(o3,t),b(v1,n))}function D6(t){o3.current===t&&(n0(v1),n0(o3))}var s0=D1(0);function r4(t){for(var c=t;c!==null;){if(c.tag===13){var n=c.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return c}else if(c.tag===19&&c.memoizedProps.revealOrder!==void 0){if((c.flags&128)!==0)return c}else if(c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break;for(;c.sibling===null;){if(c.return===null||c.return===t)return null;c=c.return}c.sibling.return=c.return,c=c.sibling}return null}var j6=[];function F6(){for(var t=0;t<j6.length;t++)j6[t]._workInProgressVersionPrimary=null;j6.length=0}var l4=k0.ReactCurrentDispatcher,V6=k0.ReactCurrentBatchConfig,r2=0,i0=null,g0=null,z0=null,s4=!1,a3=!1,d3=0,ee=0;function L0(){throw Error(y(321))}function O6(t,c){if(c===null)return!1;for(var n=0;n<c.length&&n<t.length;n++)if(!l1(t[n],c[n]))return!1;return!0}function I6(t,c,n,e,r,l){if(r2=l,i0=c,c.memoizedState=null,c.updateQueue=null,c.lanes=0,l4.current=t===null||t.memoizedState===null?ie:oe,t=n(e,r),a3){l=0;do{if(a3=!1,d3=0,25<=l)throw Error(y(301));l+=1,z0=g0=null,c.updateQueue=null,l4.current=ue,t=n(e,r)}while(a3)}if(l4.current=u4,c=g0!==null&&g0.next!==null,r2=0,z0=g0=i0=null,s4=!1,c)throw Error(y(300));return t}function A6(){var t=d3!==0;return d3=0,t}function y1(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return z0===null?i0.memoizedState=z0=t:z0=z0.next=t,z0}function b0(){if(g0===null){var t=i0.alternate;t=t!==null?t.memoizedState:null}else t=g0.next;var c=z0===null?i0.memoizedState:z0.next;if(c!==null)z0=c,g0=t;else{if(t===null)throw Error(y(310));g0=t,t={memoizedState:g0.memoizedState,baseState:g0.baseState,baseQueue:g0.baseQueue,queue:g0.queue,next:null},z0===null?i0.memoizedState=z0=t:z0=z0.next=t}return z0}function f3(t,c){return typeof c=="function"?c(t):c}function U6(t){var c=b0(),n=c.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var e=g0,r=e.baseQueue,l=n.pending;if(l!==null){if(r!==null){var i=r.next;r.next=l.next,l.next=i}e.baseQueue=r=l,n.pending=null}if(r!==null){l=r.next,e=e.baseState;var o=i=null,a=null,v=l;do{var x=v.lane;if((r2&x)===x)a!==null&&(a=a.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),e=v.hasEagerState?v.eagerState:t(e,v.action);else{var z={lane:x,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};a===null?(o=a=z,i=e):a=a.next=z,i0.lanes|=x,l2|=x}v=v.next}while(v!==null&&v!==l);a===null?i=e:a.next=o,l1(e,c.memoizedState)||(V0=!0),c.memoizedState=e,c.baseState=i,c.baseQueue=a,n.lastRenderedState=e}if(t=n.interleaved,t!==null){r=t;do l=r.lane,i0.lanes|=l,l2|=l,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[c.memoizedState,n.dispatch]}function $6(t){var c=b0(),n=c.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var e=n.dispatch,r=n.pending,l=c.memoizedState;if(r!==null){n.pending=null;var i=r=r.next;do l=t(l,i.action),i=i.next;while(i!==r);l1(l,c.memoizedState)||(V0=!0),c.memoizedState=l,c.baseQueue===null&&(c.baseState=l),n.lastRenderedState=l}return[l,e]}function dc(){}function fc(t,c){var n=i0,e=b0(),r=c(),l=!l1(e.memoizedState,r);if(l&&(e.memoizedState=r,V0=!0),e=e.queue,Q6(vc.bind(null,n,e,t),[t]),e.getSnapshot!==c||l||z0!==null&&z0.memoizedState.tag&1){if(n.flags|=2048,p3(9,hc.bind(null,n,e,r,c),void 0,null),M0===null)throw Error(y(349));(r2&30)!==0||pc(n,c,r)}return r}function pc(t,c,n){t.flags|=16384,t={getSnapshot:c,value:n},c=i0.updateQueue,c===null?(c={lastEffect:null,stores:null},i0.updateQueue=c,c.stores=[t]):(n=c.stores,n===null?c.stores=[t]:n.push(t))}function hc(t,c,n,e){c.value=n,c.getSnapshot=e,yc(c)&&gc(t)}function vc(t,c,n){return n(function(){yc(c)&&gc(t)})}function yc(t){var c=t.getSnapshot;t=t.value;try{var n=c();return!l1(t,n)}catch{return!0}}function gc(t){var c=w1(t,1);c!==null&&a1(c,t,1,-1)}function mc(t){var c=y1();return typeof t=="function"&&(t=t()),c.memoizedState=c.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:f3,lastRenderedState:t},c.queue=t,t=t.dispatch=se.bind(null,i0,t),[c.memoizedState,t]}function p3(t,c,n,e){return t={tag:t,create:c,destroy:n,deps:e,next:null},c=i0.updateQueue,c===null?(c={lastEffect:null,stores:null},i0.updateQueue=c,c.lastEffect=t.next=t):(n=c.lastEffect,n===null?c.lastEffect=t.next=t:(e=n.next,n.next=t,t.next=e,c.lastEffect=t)),t}function xc(){return b0().memoizedState}function i4(t,c,n,e){var r=y1();i0.flags|=t,r.memoizedState=p3(1|c,n,void 0,e===void 0?null:e)}function o4(t,c,n,e){var r=b0();e=e===void 0?null:e;var l=void 0;if(g0!==null){var i=g0.memoizedState;if(l=i.destroy,e!==null&&O6(e,i.deps)){r.memoizedState=p3(c,n,l,e);return}}i0.flags|=t,r.memoizedState=p3(1|c,n,l,e)}function zc(t,c){return i4(8390656,8,t,c)}function Q6(t,c){return o4(2048,8,t,c)}function Mc(t,c){return o4(4,2,t,c)}function Cc(t,c){return o4(4,4,t,c)}function wc(t,c){if(typeof c=="function")return t=t(),c(t),function(){c(null)};if(c!=null)return t=t(),c.current=t,function(){c.current=null}}function Sc(t,c,n){return n=n!=null?n.concat([t]):null,o4(4,4,wc.bind(null,c,t),n)}function G6(){}function kc(t,c){var n=b0();c=c===void 0?null:c;var e=n.memoizedState;return e!==null&&c!==null&&O6(c,e[1])?e[0]:(n.memoizedState=[t,c],t)}function _c(t,c){var n=b0();c=c===void 0?null:c;var e=n.memoizedState;return e!==null&&c!==null&&O6(c,e[1])?e[0]:(t=t(),n.memoizedState=[t,c],t)}function Lc(t,c,n){return(r2&21)===0?(t.baseState&&(t.baseState=!1,V0=!0),t.memoizedState=n):(l1(n,c)||(n=et(),i0.lanes|=n,l2|=n,t.baseState=!0),c)}function re(t,c){var n=X;X=n!==0&&4>n?n:4,t(!0);var e=V6.transition;V6.transition={};try{t(!1),c()}finally{X=n,V6.transition=e}}function Wc(){return b0().memoizedState}function le(t,c,n){var e=$1(t);if(n={lane:e,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(t))Nc(c,n);else if(n=sc(t,c,n,e),n!==null){var r=H0();a1(n,t,e,r),Bc(n,c,e)}}function se(t,c,n){var e=$1(t),r={lane:e,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(t))Nc(c,r);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=c.lastRenderedReducer,l!==null))try{var i=c.lastRenderedState,o=l(i,n);if(r.hasEagerState=!0,r.eagerState=o,l1(o,i)){var a=c.interleaved;a===null?(r.next=r,H6(c)):(r.next=a.next,a.next=r),c.interleaved=r;return}}catch{}finally{}n=sc(t,c,r,e),n!==null&&(r=H0(),a1(n,t,e,r),Bc(n,c,e))}}function Ec(t){var c=t.alternate;return t===i0||c!==null&&c===i0}function Nc(t,c){a3=s4=!0;var n=t.pending;n===null?c.next=c:(c.next=n.next,n.next=c),t.pending=c}function Bc(t,c,n){if((n&4194240)!==0){var e=c.lanes;e&=t.pendingLanes,n|=e,c.lanes=n,Y4(t,n)}}var u4={readContext:q0,useCallback:L0,useContext:L0,useEffect:L0,useImperativeHandle:L0,useInsertionEffect:L0,useLayoutEffect:L0,useMemo:L0,useReducer:L0,useRef:L0,useState:L0,useDebugValue:L0,useDeferredValue:L0,useTransition:L0,useMutableSource:L0,useSyncExternalStore:L0,useId:L0,unstable_isNewReconciler:!1},ie={readContext:q0,useCallback:function(t,c){return y1().memoizedState=[t,c===void 0?null:c],t},useContext:q0,useEffect:zc,useImperativeHandle:function(t,c,n){return n=n!=null?n.concat([t]):null,i4(4194308,4,wc.bind(null,c,t),n)},useLayoutEffect:function(t,c){return i4(4194308,4,t,c)},useInsertionEffect:function(t,c){return i4(4,2,t,c)},useMemo:function(t,c){var n=y1();return c=c===void 0?null:c,t=t(),n.memoizedState=[t,c],t},useReducer:function(t,c,n){var e=y1();return c=n!==void 0?n(c):c,e.memoizedState=e.baseState=c,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},e.queue=t,t=t.dispatch=le.bind(null,i0,t),[e.memoizedState,t]},useRef:function(t){var c=y1();return t={current:t},c.memoizedState=t},useState:mc,useDebugValue:G6,useDeferredValue:function(t){return y1().memoizedState=t},useTransition:function(){var t=mc(!1),c=t[0];return t=re.bind(null,t[1]),y1().memoizedState=t,[c,t]},useMutableSource:function(){},useSyncExternalStore:function(t,c,n){var e=i0,r=y1();if(l0){if(n===void 0)throw Error(y(407));n=n()}else{if(n=c(),M0===null)throw Error(y(349));(r2&30)!==0||pc(e,c,n)}r.memoizedState=n;var l={value:n,getSnapshot:c};return r.queue=l,zc(vc.bind(null,e,l,t),[t]),e.flags|=2048,p3(9,hc.bind(null,e,l,n,c),void 0,null),n},useId:function(){var t=y1(),c=M0.identifierPrefix;if(l0){var n=C1,e=M1;n=(e&~(1<<32-r1(e)-1)).toString(32)+n,c=":"+c+"R"+n,n=d3++,0<n&&(c+="H"+n.toString(32)),c+=":"}else n=ee++,c=":"+c+"r"+n.toString(32)+":";return t.memoizedState=c},unstable_isNewReconciler:!1},oe={readContext:q0,useCallback:kc,useContext:q0,useEffect:Q6,useImperativeHandle:Sc,useInsertionEffect:Mc,useLayoutEffect:Cc,useMemo:_c,useReducer:U6,useRef:xc,useState:function(){return U6(f3)},useDebugValue:G6,useDeferredValue:function(t){var c=b0();return Lc(c,g0.memoizedState,t)},useTransition:function(){var t=U6(f3)[0],c=b0().memoizedState;return[t,c]},useMutableSource:dc,useSyncExternalStore:fc,useId:Wc,unstable_isNewReconciler:!1},ue={readContext:q0,useCallback:kc,useContext:q0,useEffect:Q6,useImperativeHandle:Sc,useInsertionEffect:Mc,useLayoutEffect:Cc,useMemo:_c,useReducer:$6,useRef:xc,useState:function(){return $6(f3)},useDebugValue:G6,useDeferredValue:function(t){var c=b0();return g0===null?c.memoizedState=t:Lc(c,g0.memoizedState,t)},useTransition:function(){var t=$6(f3)[0],c=b0().memoizedState;return[t,c]},useMutableSource:dc,useSyncExternalStore:fc,useId:Wc,unstable_isNewReconciler:!1};function i1(t,c){if(t&&t.defaultProps){c=k({},c),t=t.defaultProps;for(var n in t)c[n]===void 0&&(c[n]=t[n]);return c}return c}function K6(t,c,n,e){c=t.memoizedState,n=n(e,c),n=n==null?c:k({},c,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var a4={isMounted:function(t){return(t=t._reactInternals)?J1(t)===t:!1},enqueueSetState:function(t,c,n){t=t._reactInternals;var e=H0(),r=$1(t),l=S1(e,r);l.payload=c,n!=null&&(l.callback=n),c=O1(t,l,r),c!==null&&(a1(c,t,r,e),n4(c,t,r))},enqueueReplaceState:function(t,c,n){t=t._reactInternals;var e=H0(),r=$1(t),l=S1(e,r);l.tag=1,l.payload=c,n!=null&&(l.callback=n),c=O1(t,l,r),c!==null&&(a1(c,t,r,e),n4(c,t,r))},enqueueForceUpdate:function(t,c){t=t._reactInternals;var n=H0(),e=$1(t),r=S1(n,e);r.tag=2,c!=null&&(r.callback=c),c=O1(t,r,e),c!==null&&(a1(c,t,e,n),n4(c,t,e))}};function Pc(t,c,n,e,r,l,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,l,i):c.prototype&&c.prototype.isPureReactComponent?!b2(n,e)||!b2(r,l):!0}function Hc(t,c,n){var e=!1,r=j1,l=c.contextType;return typeof l=="object"&&l!==null?l=q0(l):(r=F0(c)?b1:_0.current,e=c.contextTypes,l=(e=e!=null)?C2(t,r):j1),c=new c(n,l),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=a4,t.stateNode=c,c._reactInternals=t,e&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=l),c}function Tc(t,c,n,e){t=c.state,typeof c.componentWillReceiveProps=="function"&&c.componentWillReceiveProps(n,e),typeof c.UNSAFE_componentWillReceiveProps=="function"&&c.UNSAFE_componentWillReceiveProps(n,e),c.state!==t&&a4.enqueueReplaceState(c,c.state,null)}function Y6(t,c,n,e){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},T6(t);var l=c.contextType;typeof l=="object"&&l!==null?r.context=q0(l):(l=F0(c)?b1:_0.current,r.context=C2(t,l)),r.state=t.memoizedState,l=c.getDerivedStateFromProps,typeof l=="function"&&(K6(t,c,l,n),r.state=t.memoizedState),typeof c.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(c=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),c!==r.state&&a4.enqueueReplaceState(r,r.state,null),e4(t,n,r,e),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function N2(t,c){try{var n="",e=c;do n+=Q(e),e=e.return;while(e);var r=n}catch(l){r=`
Error generating stack: `+l.message+`
`+l.stack}return{value:t,source:c,stack:r,digest:null}}function X6(t,c,n){return{value:t,source:null,stack:n??null,digest:c??null}}function Z6(t,c){try{console.error(c.value)}catch(n){setTimeout(function(){throw n})}}var ae=typeof WeakMap=="function"?WeakMap:Map;function Rc(t,c,n){n=S1(-1,n),n.tag=3,n.payload={element:null};var e=c.value;return n.callback=function(){g4||(g4=!0,d5=e),Z6(t,c)},n}function Dc(t,c,n){n=S1(-1,n),n.tag=3;var e=t.type.getDerivedStateFromError;if(typeof e=="function"){var r=c.value;n.payload=function(){return e(r)},n.callback=function(){Z6(t,c)}}var l=t.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Z6(t,c),typeof e!="function"&&(A1===null?A1=new Set([this]):A1.add(this));var i=c.stack;this.componentDidCatch(c.value,{componentStack:i!==null?i:""})}),n}function jc(t,c,n){var e=t.pingCache;if(e===null){e=t.pingCache=new ae;var r=new Set;e.set(c,r)}else r=e.get(c),r===void 0&&(r=new Set,e.set(c,r));r.has(n)||(r.add(n),t=Se.bind(null,t,c,n),c.then(t,t))}function Fc(t){do{var c;if((c=t.tag===13)&&(c=t.memoizedState,c=c!==null?c.dehydrated!==null:!0),c)return t;t=t.return}while(t!==null);return null}function Vc(t,c,n,e,r){return(t.mode&1)===0?(t===c?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(c=S1(-1,1),c.tag=2,O1(n,c,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var de=k0.ReactCurrentOwner,V0=!1;function P0(t,c,n,e){c.child=t===null?lc(c,null,n,e):_2(c,t.child,n,e)}function Oc(t,c,n,e,r){n=n.render;var l=c.ref;return W2(c,r),e=I6(t,c,n,e,l,r),n=A6(),t!==null&&!V0?(c.updateQueue=t.updateQueue,c.flags&=-2053,t.lanes&=~r,k1(t,c,r)):(l0&&n&&S6(c),c.flags|=1,P0(t,c,e,r),c.child)}function Ic(t,c,n,e,r){if(t===null){var l=n.type;return typeof l=="function"&&!m5(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(c.tag=15,c.type=l,Ac(t,c,l,e,r)):(t=w4(n.type,null,e,c,c.mode,r),t.ref=c.ref,t.return=c,c.child=t)}if(l=t.child,(t.lanes&r)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:b2,n(i,e)&&t.ref===c.ref)return k1(t,c,r)}return c.flags|=1,t=G1(l,e),t.ref=c.ref,t.return=c,c.child=t}function Ac(t,c,n,e,r){if(t!==null){var l=t.memoizedProps;if(b2(l,e)&&t.ref===c.ref)if(V0=!1,c.pendingProps=e=l,(t.lanes&r)!==0)(t.flags&131072)!==0&&(V0=!0);else return c.lanes=t.lanes,k1(t,c,r)}return J6(t,c,n,e,r)}function Uc(t,c,n){var e=c.pendingProps,r=e.children,l=t!==null?t.memoizedState:null;if(e.mode==="hidden")if((c.mode&1)===0)c.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(P2,Y0),Y0|=n;else{if((n&1073741824)===0)return t=l!==null?l.baseLanes|n:n,c.lanes=c.childLanes=1073741824,c.memoizedState={baseLanes:t,cachePool:null,transitions:null},c.updateQueue=null,b(P2,Y0),Y0|=t,null;c.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=l!==null?l.baseLanes:n,b(P2,Y0),Y0|=e}else l!==null?(e=l.baseLanes|n,c.memoizedState=null):e=n,b(P2,Y0),Y0|=e;return P0(t,c,r,n),c.child}function $c(t,c){var n=c.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(c.flags|=512,c.flags|=2097152)}function J6(t,c,n,e,r){var l=F0(n)?b1:_0.current;return l=C2(c,l),W2(c,r),n=I6(t,c,n,e,l,r),e=A6(),t!==null&&!V0?(c.updateQueue=t.updateQueue,c.flags&=-2053,t.lanes&=~r,k1(t,c,r)):(l0&&e&&S6(c),c.flags|=1,P0(t,c,n,r),c.child)}function Qc(t,c,n,e,r){if(F0(n)){var l=!0;Y3(c)}else l=!1;if(W2(c,r),c.stateNode===null)f4(t,c),Hc(c,n,e),Y6(c,n,e,r),e=!0;else if(t===null){var i=c.stateNode,o=c.memoizedProps;i.props=o;var a=i.context,v=n.contextType;typeof v=="object"&&v!==null?v=q0(v):(v=F0(n)?b1:_0.current,v=C2(c,v));var x=n.getDerivedStateFromProps,z=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function";z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==e||a!==v)&&Tc(c,i,e,v),V1=!1;var g=c.memoizedState;i.state=g,e4(c,e,i,r),a=c.memoizedState,o!==e||g!==a||j0.current||V1?(typeof x=="function"&&(K6(c,n,x,e),a=c.memoizedState),(o=V1||Pc(c,n,o,e,g,a,v))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(c.flags|=4194308)):(typeof i.componentDidMount=="function"&&(c.flags|=4194308),c.memoizedProps=e,c.memoizedState=a),i.props=e,i.state=a,i.context=v,e=o):(typeof i.componentDidMount=="function"&&(c.flags|=4194308),e=!1)}else{i=c.stateNode,ic(t,c),o=c.memoizedProps,v=c.type===c.elementType?o:i1(c.type,o),i.props=v,z=c.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=q0(a):(a=F0(n)?b1:_0.current,a=C2(c,a));var w=n.getDerivedStateFromProps;(x=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==z||g!==a)&&Tc(c,i,e,a),V1=!1,g=c.memoizedState,i.state=g,e4(c,e,i,r);var _=c.memoizedState;o!==z||g!==_||j0.current||V1?(typeof w=="function"&&(K6(c,n,w,e),_=c.memoizedState),(v=V1||Pc(c,n,v,e,g,_,a)||!1)?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,_,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,_,a)),typeof i.componentDidUpdate=="function"&&(c.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(c.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(c.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(c.flags|=1024),c.memoizedProps=e,c.memoizedState=_),i.props=e,i.state=_,i.context=a,e=v):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(c.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(c.flags|=1024),e=!1)}return q6(t,c,n,e,l,r)}function q6(t,c,n,e,r,l){$c(t,c);var i=(c.flags&128)!==0;if(!e&&!i)return r&&Zt(c,n,!1),k1(t,c,l);e=c.stateNode,de.current=c;var o=i&&typeof n.getDerivedStateFromError!="function"?null:e.render();return c.flags|=1,t!==null&&i?(c.child=_2(c,t.child,null,l),c.child=_2(c,null,o,l)):P0(t,c,o,l),c.memoizedState=e.state,r&&Zt(c,n,!0),c.child}function Gc(t){var c=t.stateNode;c.pendingContext?Yt(t,c.pendingContext,c.pendingContext!==c.context):c.context&&Yt(t,c.context,!1),R6(t,c.containerInfo)}function Kc(t,c,n,e,r){return k2(),W6(r),c.flags|=256,P0(t,c,n,e),c.child}var b6={dehydrated:null,treeContext:null,retryLane:0};function t5(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yc(t,c,n){var e=c.pendingProps,r=s0.current,l=!1,i=(c.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(l=!0,c.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),b(s0,r&1),t===null)return L6(c),t=c.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((c.mode&1)===0?c.lanes=1:t.data==="$!"?c.lanes=8:c.lanes=1073741824,null):(i=e.children,t=e.fallback,l?(e=c.mode,l=c.child,i={mode:"hidden",children:i},(e&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=S4(i,e,0,null),t=u2(t,e,n,null),l.return=c,t.return=c,l.sibling=t,c.child=l,c.child.memoizedState=t5(n),c.memoizedState=b6,t):c5(c,i));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return fe(t,c,i,e,o,r,n);if(l){l=e.fallback,i=c.mode,r=t.child,o=r.sibling;var a={mode:"hidden",children:e.children};return(i&1)===0&&c.child!==r?(e=c.child,e.childLanes=0,e.pendingProps=a,c.deletions=null):(e=G1(r,a),e.subtreeFlags=r.subtreeFlags&14680064),o!==null?l=G1(o,l):(l=u2(l,i,n,null),l.flags|=2),l.return=c,e.return=c,e.sibling=l,c.child=e,e=l,l=c.child,i=t.child.memoizedState,i=i===null?t5(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=t.childLanes&~n,c.memoizedState=b6,e}return l=t.child,t=l.sibling,e=G1(l,{mode:"visible",children:e.children}),(c.mode&1)===0&&(e.lanes=n),e.return=c,e.sibling=null,t!==null&&(n=c.deletions,n===null?(c.deletions=[t],c.flags|=16):n.push(t)),c.child=e,c.memoizedState=null,e}function c5(t,c){return c=S4({mode:"visible",children:c},t.mode,0,null),c.return=t,t.child=c}function d4(t,c,n,e){return e!==null&&W6(e),_2(c,t.child,null,n),t=c5(c,c.pendingProps.children),t.flags|=2,c.memoizedState=null,t}function fe(t,c,n,e,r,l,i){if(n)return c.flags&256?(c.flags&=-257,e=X6(Error(y(422))),d4(t,c,i,e)):c.memoizedState!==null?(c.child=t.child,c.flags|=128,null):(l=e.fallback,r=c.mode,e=S4({mode:"visible",children:e.children},r,0,null),l=u2(l,r,i,null),l.flags|=2,e.return=c,l.return=c,e.sibling=l,c.child=e,(c.mode&1)!==0&&_2(c,t.child,null,i),c.child.memoizedState=t5(i),c.memoizedState=b6,l);if((c.mode&1)===0)return d4(t,c,i,null);if(r.data==="$!"){if(e=r.nextSibling&&r.nextSibling.dataset,e)var o=e.dgst;return e=o,l=Error(y(419)),e=X6(l,e,void 0),d4(t,c,i,e)}if(o=(i&t.childLanes)!==0,V0||o){if(e=M0,e!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(e.suspendedLanes|i))!==0?0:r,r!==0&&r!==l.retryLane&&(l.retryLane=r,w1(t,r),a1(e,t,r,-1))}return g5(),e=X6(Error(y(421))),d4(t,c,i,e)}return r.data==="$?"?(c.flags|=128,c.child=t.child,c=ke.bind(null,t),r._reactRetry=c,null):(t=l.treeContext,K0=R1(r.nextSibling),G0=c,l0=!0,s1=null,t!==null&&(Z0[J0++]=M1,Z0[J0++]=C1,Z0[J0++]=t2,M1=t.id,C1=t.overflow,t2=c),c=c5(c,e.children),c.flags|=4096,c)}function Xc(t,c,n){t.lanes|=c;var e=t.alternate;e!==null&&(e.lanes|=c),P6(t.return,c,n)}function n5(t,c,n,e,r){var l=t.memoizedState;l===null?t.memoizedState={isBackwards:c,rendering:null,renderingStartTime:0,last:e,tail:n,tailMode:r}:(l.isBackwards=c,l.rendering=null,l.renderingStartTime=0,l.last=e,l.tail=n,l.tailMode=r)}function Zc(t,c,n){var e=c.pendingProps,r=e.revealOrder,l=e.tail;if(P0(t,c,e.children,n),e=s0.current,(e&2)!==0)e=e&1|2,c.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=c.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xc(t,n,c);else if(t.tag===19)Xc(t,n,c);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===c)break t;for(;t.sibling===null;){if(t.return===null||t.return===c)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}e&=1}if(b(s0,e),(c.mode&1)===0)c.memoizedState=null;else switch(r){case"forwards":for(n=c.child,r=null;n!==null;)t=n.alternate,t!==null&&r4(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=c.child,c.child=null):(r=n.sibling,n.sibling=null),n5(c,!1,r,n,l);break;case"backwards":for(n=null,r=c.child,c.child=null;r!==null;){if(t=r.alternate,t!==null&&r4(t)===null){c.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}n5(c,!0,n,null,l);break;case"together":n5(c,!1,null,null,void 0);break;default:c.memoizedState=null}return c.child}function f4(t,c){(c.mode&1)===0&&t!==null&&(t.alternate=null,c.alternate=null,c.flags|=2)}function k1(t,c,n){if(t!==null&&(c.dependencies=t.dependencies),l2|=c.lanes,(n&c.childLanes)===0)return null;if(t!==null&&c.child!==t.child)throw Error(y(153));if(c.child!==null){for(t=c.child,n=G1(t,t.pendingProps),c.child=n,n.return=c;t.sibling!==null;)t=t.sibling,n=n.sibling=G1(t,t.pendingProps),n.return=c;n.sibling=null}return c.child}function pe(t,c,n){switch(c.tag){case 3:Gc(c),k2();break;case 5:ac(c);break;case 1:F0(c.type)&&Y3(c);break;case 4:R6(c,c.stateNode.containerInfo);break;case 10:var e=c.type._context,r=c.memoizedProps.value;b(t4,e._currentValue),e._currentValue=r;break;case 13:if(e=c.memoizedState,e!==null)return e.dehydrated!==null?(b(s0,s0.current&1),c.flags|=128,null):(n&c.child.childLanes)!==0?Yc(t,c,n):(b(s0,s0.current&1),t=k1(t,c,n),t!==null?t.sibling:null);b(s0,s0.current&1);break;case 19:if(e=(n&c.childLanes)!==0,(t.flags&128)!==0){if(e)return Zc(t,c,n);c.flags|=128}if(r=c.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),b(s0,s0.current),e)break;return null;case 22:case 23:return c.lanes=0,Uc(t,c,n)}return k1(t,c,n)}var Jc,e5,qc,bc;Jc=function(t,c){for(var n=c.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===c)break;for(;n.sibling===null;){if(n.return===null||n.return===c)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},e5=function(){},qc=function(t,c,n,e){var r=t.memoizedProps;if(r!==e){t=c.stateNode,e2(v1.current);var l=null;switch(n){case"input":r=P4(t,r),e=P4(t,e),l=[];break;case"select":r=k({},r,{value:void 0}),e=k({},e,{value:void 0}),l=[];break;case"textarea":r=R4(t,r),e=R4(t,e),l=[];break;default:typeof r.onClick!="function"&&typeof e.onClick=="function"&&(t.onclick=Q3)}j4(n,e);var i;n=null;for(v in r)if(!e.hasOwnProperty(v)&&r.hasOwnProperty(v)&&r[v]!=null)if(v==="style"){var o=r[v];for(i in o)o.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(D.hasOwnProperty(v)?l||(l=[]):(l=l||[]).push(v,null));for(v in e){var a=e[v];if(o=r!=null?r[v]:void 0,e.hasOwnProperty(v)&&a!==o&&(a!=null||o!=null))if(v==="style")if(o){for(i in o)!o.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&o[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(v,n)),n=a;else v==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(v,a)):v==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(v,""+a):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(D.hasOwnProperty(v)?(a!=null&&v==="onScroll"&&c0("scroll",t),l||o===a||(l=[])):(l=l||[]).push(v,a))}n&&(l=l||[]).push("style",n);var v=l;(c.updateQueue=v)&&(c.flags|=4)}},bc=function(t,c,n,e){n!==e&&(c.flags|=4)};function h3(t,c){if(!l0)switch(t.tailMode){case"hidden":c=t.tail;for(var n=null;c!==null;)c.alternate!==null&&(n=c),c=c.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?c||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function W0(t){var c=t.alternate!==null&&t.alternate.child===t.child,n=0,e=0;if(c)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,e|=r.subtreeFlags&14680064,e|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,e|=r.subtreeFlags,e|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=e,t.childLanes=n,c}function he(t,c,n){var e=c.pendingProps;switch(k6(c),c.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W0(c),null;case 1:return F0(c.type)&&K3(),W0(c),null;case 3:return e=c.stateNode,E2(),n0(j0),n0(_0),F6(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(q3(c)?c.flags|=4:t===null||t.memoizedState.isDehydrated&&(c.flags&256)===0||(c.flags|=1024,s1!==null&&(h5(s1),s1=null))),e5(t,c),W0(c),null;case 5:D6(c);var r=e2(u3.current);if(n=c.type,t!==null&&c.stateNode!=null)qc(t,c,n,e,r),t.ref!==c.ref&&(c.flags|=512,c.flags|=2097152);else{if(!e){if(c.stateNode===null)throw Error(y(166));return W0(c),null}if(t=e2(v1.current),q3(c)){e=c.stateNode,n=c.type;var l=c.memoizedProps;switch(e[h1]=c,e[r3]=l,t=(c.mode&1)!==0,n){case"dialog":c0("cancel",e),c0("close",e);break;case"iframe":case"object":case"embed":c0("load",e);break;case"video":case"audio":for(r=0;r<c3.length;r++)c0(c3[r],e);break;case"source":c0("error",e);break;case"img":case"image":case"link":c0("error",e),c0("load",e);break;case"details":c0("toggle",e);break;case"input":H5(e,l),c0("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c0("invalid",e);break;case"textarea":D5(e,l),c0("invalid",e)}j4(n,l),r=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?e.textContent!==o&&(l.suppressHydrationWarning!==!0&&$3(e.textContent,o,t),r=["children",o]):typeof o=="number"&&e.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&$3(e.textContent,o,t),r=["children",""+o]):D.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&c0("scroll",e)}switch(n){case"input":M3(e),R5(e,l,!0);break;case"textarea":M3(e),F5(e);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(e.onclick=Q3)}e=r,c.updateQueue=e,e!==null&&(c.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V5(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof e.is=="string"?t=i.createElement(n,{is:e.is}):(t=i.createElement(n),n==="select"&&(i=t,e.multiple?i.multiple=!0:e.size&&(i.size=e.size))):t=i.createElementNS(t,n),t[h1]=c,t[r3]=e,Jc(t,c,!1,!1),c.stateNode=t;t:{switch(i=F4(n,e),n){case"dialog":c0("cancel",t),c0("close",t),r=e;break;case"iframe":case"object":case"embed":c0("load",t),r=e;break;case"video":case"audio":for(r=0;r<c3.length;r++)c0(c3[r],t);r=e;break;case"source":c0("error",t),r=e;break;case"img":case"image":case"link":c0("error",t),c0("load",t),r=e;break;case"details":c0("toggle",t),r=e;break;case"input":H5(t,e),r=P4(t,e),c0("invalid",t);break;case"option":r=e;break;case"select":t._wrapperState={wasMultiple:!!e.multiple},r=k({},e,{value:void 0}),c0("invalid",t);break;case"textarea":D5(t,e),r=R4(t,e),c0("invalid",t);break;default:r=e}j4(n,r),o=r;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?A5(t,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&O5(t,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&D2(t,a):typeof a=="number"&&D2(t,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(D.hasOwnProperty(l)?a!=null&&l==="onScroll"&&c0("scroll",t):a!=null&&y0(t,l,a,i))}switch(n){case"input":M3(t),R5(t,e,!1);break;case"textarea":M3(t),F5(t);break;case"option":e.value!=null&&t.setAttribute("value",""+Y(e.value));break;case"select":t.multiple=!!e.multiple,l=e.value,l!=null?a2(t,!!e.multiple,l,!1):e.defaultValue!=null&&a2(t,!!e.multiple,e.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Q3)}switch(n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}}e&&(c.flags|=4)}c.ref!==null&&(c.flags|=512,c.flags|=2097152)}return W0(c),null;case 6:if(t&&c.stateNode!=null)bc(t,c,t.memoizedProps,e);else{if(typeof e!="string"&&c.stateNode===null)throw Error(y(166));if(n=e2(u3.current),e2(v1.current),q3(c)){if(e=c.stateNode,n=c.memoizedProps,e[h1]=c,(l=e.nodeValue!==n)&&(t=G0,t!==null))switch(t.tag){case 3:$3(e.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$3(e.nodeValue,n,(t.mode&1)!==0)}l&&(c.flags|=4)}else e=(n.nodeType===9?n:n.ownerDocument).createTextNode(e),e[h1]=c,c.stateNode=e}return W0(c),null;case 13:if(n0(s0),e=c.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l0&&K0!==null&&(c.mode&1)!==0&&(c.flags&128)===0)nc(),k2(),c.flags|=98560,l=!1;else if(l=q3(c),e!==null&&e.dehydrated!==null){if(t===null){if(!l)throw Error(y(318));if(l=c.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[h1]=c}else k2(),(c.flags&128)===0&&(c.memoizedState=null),c.flags|=4;W0(c),l=!1}else s1!==null&&(h5(s1),s1=null),l=!0;if(!l)return c.flags&65536?c:null}return(c.flags&128)!==0?(c.lanes=n,c):(e=e!==null,e!==(t!==null&&t.memoizedState!==null)&&e&&(c.child.flags|=8192,(c.mode&1)!==0&&(t===null||(s0.current&1)!==0?m0===0&&(m0=3):g5())),c.updateQueue!==null&&(c.flags|=4),W0(c),null);case 4:return E2(),e5(t,c),t===null&&n3(c.stateNode.containerInfo),W0(c),null;case 10:return B6(c.type._context),W0(c),null;case 17:return F0(c.type)&&K3(),W0(c),null;case 19:if(n0(s0),l=c.memoizedState,l===null)return W0(c),null;if(e=(c.flags&128)!==0,i=l.rendering,i===null)if(e)h3(l,!1);else{if(m0!==0||t!==null&&(t.flags&128)!==0)for(t=c.child;t!==null;){if(i=r4(t),i!==null){for(c.flags|=128,h3(l,!1),e=i.updateQueue,e!==null&&(c.updateQueue=e,c.flags|=4),c.subtreeFlags=0,e=n,n=c.child;n!==null;)l=n,t=e,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,t=i.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return b(s0,s0.current&1|2),c.child}t=t.sibling}l.tail!==null&&f0()>H2&&(c.flags|=128,e=!0,h3(l,!1),c.lanes=4194304)}else{if(!e)if(t=r4(i),t!==null){if(c.flags|=128,e=!0,n=t.updateQueue,n!==null&&(c.updateQueue=n,c.flags|=4),h3(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!l0)return W0(c),null}else 2*f0()-l.renderingStartTime>H2&&n!==1073741824&&(c.flags|=128,e=!0,h3(l,!1),c.lanes=4194304);l.isBackwards?(i.sibling=c.child,c.child=i):(n=l.last,n!==null?n.sibling=i:c.child=i,l.last=i)}return l.tail!==null?(c=l.tail,l.rendering=c,l.tail=c.sibling,l.renderingStartTime=f0(),c.sibling=null,n=s0.current,b(s0,e?n&1|2:n&1),c):(W0(c),null);case 22:case 23:return y5(),e=c.memoizedState!==null,t!==null&&t.memoizedState!==null!==e&&(c.flags|=8192),e&&(c.mode&1)!==0?(Y0&1073741824)!==0&&(W0(c),c.subtreeFlags&6&&(c.flags|=8192)):W0(c),null;case 24:return null;case 25:return null}throw Error(y(156,c.tag))}function ve(t,c){switch(k6(c),c.tag){case 1:return F0(c.type)&&K3(),t=c.flags,t&65536?(c.flags=t&-65537|128,c):null;case 3:return E2(),n0(j0),n0(_0),F6(),t=c.flags,(t&65536)!==0&&(t&128)===0?(c.flags=t&-65537|128,c):null;case 5:return D6(c),null;case 13:if(n0(s0),t=c.memoizedState,t!==null&&t.dehydrated!==null){if(c.alternate===null)throw Error(y(340));k2()}return t=c.flags,t&65536?(c.flags=t&-65537|128,c):null;case 19:return n0(s0),null;case 4:return E2(),null;case 10:return B6(c.type._context),null;case 22:case 23:return y5(),null;case 24:return null;default:return null}}var p4=!1,E0=!1,ye=typeof WeakSet=="function"?WeakSet:Set,S=null;function B2(t,c){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(e){a0(t,c,e)}else n.current=null}function r5(t,c,n){try{n()}catch(e){a0(t,c,e)}}var tn=!1;function ge(t,c){if(y6=H3,t=Pt(),o6(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var e=n.getSelection&&n.getSelection();if(e&&e.rangeCount!==0){n=e.anchorNode;var r=e.anchorOffset,l=e.focusNode;e=e.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var i=0,o=-1,a=-1,v=0,x=0,z=t,g=null;c:for(;;){for(var w;z!==n||r!==0&&z.nodeType!==3||(o=i+r),z!==l||e!==0&&z.nodeType!==3||(a=i+e),z.nodeType===3&&(i+=z.nodeValue.length),(w=z.firstChild)!==null;)g=z,z=w;for(;;){if(z===t)break c;if(g===n&&++v===r&&(o=i),g===l&&++x===e&&(a=i),(w=z.nextSibling)!==null)break;z=g,g=z.parentNode}z=w}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(g6={focusedElem:t,selectionRange:n},H3=!1,S=c;S!==null;)if(c=S,t=c.child,(c.subtreeFlags&1028)!==0&&t!==null)t.return=c,S=t;else for(;S!==null;){c=S;try{var _=c.alternate;if((c.flags&1024)!==0)switch(c.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var L=_.memoizedProps,p0=_.memoizedState,p=c.stateNode,d=p.getSnapshotBeforeUpdate(c.elementType===c.type?L:i1(c.type,L),p0);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=c.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(M){a0(c,c.return,M)}if(t=c.sibling,t!==null){t.return=c.return,S=t;break}S=c.return}return _=tn,tn=!1,_}function v3(t,c,n){var e=c.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var l=r.destroy;r.destroy=void 0,l!==void 0&&r5(c,n,l)}r=r.next}while(r!==e)}}function h4(t,c){if(c=c.updateQueue,c=c!==null?c.lastEffect:null,c!==null){var n=c=c.next;do{if((n.tag&t)===t){var e=n.create;n.destroy=e()}n=n.next}while(n!==c)}}function l5(t){var c=t.ref;if(c!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof c=="function"?c(t):c.current=t}}function cn(t){var c=t.alternate;c!==null&&(t.alternate=null,cn(c)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(c=t.stateNode,c!==null&&(delete c[h1],delete c[r3],delete c[M6],delete c[b7],delete c[te])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nn(t){return t.tag===5||t.tag===3||t.tag===4}function en(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||nn(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function s5(t,c,n){var e=t.tag;if(e===5||e===6)t=t.stateNode,c?n.nodeType===8?n.parentNode.insertBefore(t,c):n.insertBefore(t,c):(n.nodeType===8?(c=n.parentNode,c.insertBefore(t,n)):(c=n,c.appendChild(t)),n=n._reactRootContainer,n!=null||c.onclick!==null||(c.onclick=Q3));else if(e!==4&&(t=t.child,t!==null))for(s5(t,c,n),t=t.sibling;t!==null;)s5(t,c,n),t=t.sibling}function i5(t,c,n){var e=t.tag;if(e===5||e===6)t=t.stateNode,c?n.insertBefore(t,c):n.appendChild(t);else if(e!==4&&(t=t.child,t!==null))for(i5(t,c,n),t=t.sibling;t!==null;)i5(t,c,n),t=t.sibling}var w0=null,o1=!1;function I1(t,c,n){for(n=n.child;n!==null;)rn(t,c,n),n=n.sibling}function rn(t,c,n){if(p1&&typeof p1.onCommitFiberUnmount=="function")try{p1.onCommitFiberUnmount(L3,n)}catch{}switch(n.tag){case 5:E0||B2(n,c);case 6:var e=w0,r=o1;w0=null,I1(t,c,n),w0=e,o1=r,w0!==null&&(o1?(t=w0,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):w0.removeChild(n.stateNode));break;case 18:w0!==null&&(o1?(t=w0,n=n.stateNode,t.nodeType===8?z6(t.parentNode,n):t.nodeType===1&&z6(t,n),K2(t)):z6(w0,n.stateNode));break;case 4:e=w0,r=o1,w0=n.stateNode.containerInfo,o1=!0,I1(t,c,n),w0=e,o1=r;break;case 0:case 11:case 14:case 15:if(!E0&&(e=n.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){r=e=e.next;do{var l=r,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&r5(n,c,i),r=r.next}while(r!==e)}I1(t,c,n);break;case 1:if(!E0&&(B2(n,c),e=n.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=n.memoizedProps,e.state=n.memoizedState,e.componentWillUnmount()}catch(o){a0(n,c,o)}I1(t,c,n);break;case 21:I1(t,c,n);break;case 22:n.mode&1?(E0=(e=E0)||n.memoizedState!==null,I1(t,c,n),E0=e):I1(t,c,n);break;default:I1(t,c,n)}}function ln(t){var c=t.updateQueue;if(c!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ye),c.forEach(function(e){var r=_e.bind(null,t,e);n.has(e)||(n.add(e),e.then(r,r))})}}function u1(t,c){var n=c.deletions;if(n!==null)for(var e=0;e<n.length;e++){var r=n[e];try{var l=t,i=c,o=i;t:for(;o!==null;){switch(o.tag){case 5:w0=o.stateNode,o1=!1;break t;case 3:w0=o.stateNode.containerInfo,o1=!0;break t;case 4:w0=o.stateNode.containerInfo,o1=!0;break t}o=o.return}if(w0===null)throw Error(y(160));rn(l,i,r),w0=null,o1=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(v){a0(r,c,v)}}if(c.subtreeFlags&12854)for(c=c.child;c!==null;)sn(c,t),c=c.sibling}function sn(t,c){var n=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u1(c,t),g1(t),e&4){try{v3(3,t,t.return),h4(3,t)}catch(L){a0(t,t.return,L)}try{v3(5,t,t.return)}catch(L){a0(t,t.return,L)}}break;case 1:u1(c,t),g1(t),e&512&&n!==null&&B2(n,n.return);break;case 5:if(u1(c,t),g1(t),e&512&&n!==null&&B2(n,n.return),t.flags&32){var r=t.stateNode;try{D2(r,"")}catch(L){a0(t,t.return,L)}}if(e&4&&(r=t.stateNode,r!=null)){var l=t.memoizedProps,i=n!==null?n.memoizedProps:l,o=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&T5(r,l),F4(o,i);var v=F4(o,l);for(i=0;i<a.length;i+=2){var x=a[i],z=a[i+1];x==="style"?A5(r,z):x==="dangerouslySetInnerHTML"?O5(r,z):x==="children"?D2(r,z):y0(r,x,z,v)}switch(o){case"input":H4(r,l);break;case"textarea":j5(r,l);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?a2(r,!!l.multiple,w,!1):g!==!!l.multiple&&(l.defaultValue!=null?a2(r,!!l.multiple,l.defaultValue,!0):a2(r,!!l.multiple,l.multiple?[]:"",!1))}r[r3]=l}catch(L){a0(t,t.return,L)}}break;case 6:if(u1(c,t),g1(t),e&4){if(t.stateNode===null)throw Error(y(162));r=t.stateNode,l=t.memoizedProps;try{r.nodeValue=l}catch(L){a0(t,t.return,L)}}break;case 3:if(u1(c,t),g1(t),e&4&&n!==null&&n.memoizedState.isDehydrated)try{K2(c.containerInfo)}catch(L){a0(t,t.return,L)}break;case 4:u1(c,t),g1(t);break;case 13:u1(c,t),g1(t),r=t.child,r.flags&8192&&(l=r.memoizedState!==null,r.stateNode.isHidden=l,!l||r.alternate!==null&&r.alternate.memoizedState!==null||(a5=f0())),e&4&&ln(t);break;case 22:if(x=n!==null&&n.memoizedState!==null,t.mode&1?(E0=(v=E0)||x,u1(c,t),E0=v):u1(c,t),g1(t),e&8192){if(v=t.memoizedState!==null,(t.stateNode.isHidden=v)&&!x&&(t.mode&1)!==0)for(S=t,x=t.child;x!==null;){for(z=S=x;S!==null;){switch(g=S,w=g.child,g.tag){case 0:case 11:case 14:case 15:v3(4,g,g.return);break;case 1:B2(g,g.return);var _=g.stateNode;if(typeof _.componentWillUnmount=="function"){e=g,n=g.return;try{c=e,_.props=c.memoizedProps,_.state=c.memoizedState,_.componentWillUnmount()}catch(L){a0(e,n,L)}}break;case 5:B2(g,g.return);break;case 22:if(g.memoizedState!==null){an(z);continue}}w!==null?(w.return=g,S=w):an(z)}x=x.sibling}t:for(x=null,z=t;;){if(z.tag===5){if(x===null){x=z;try{r=z.stateNode,v?(l=r.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=z.stateNode,a=z.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=I5("display",i))}catch(L){a0(t,t.return,L)}}}else if(z.tag===6){if(x===null)try{z.stateNode.nodeValue=v?"":z.memoizedProps}catch(L){a0(t,t.return,L)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===t)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===t)break t;for(;z.sibling===null;){if(z.return===null||z.return===t)break t;x===z&&(x=null),z=z.return}x===z&&(x=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:u1(c,t),g1(t),e&4&&ln(t);break;case 21:break;default:u1(c,t),g1(t)}}function g1(t){var c=t.flags;if(c&2){try{t:{for(var n=t.return;n!==null;){if(nn(n)){var e=n;break t}n=n.return}throw Error(y(160))}switch(e.tag){case 5:var r=e.stateNode;e.flags&32&&(D2(r,""),e.flags&=-33);var l=en(t);i5(t,l,r);break;case 3:case 4:var i=e.stateNode.containerInfo,o=en(t);s5(t,o,i);break;default:throw Error(y(161))}}catch(a){a0(t,t.return,a)}t.flags&=-3}c&4096&&(t.flags&=-4097)}function me(t,c,n){S=t,on(t)}function on(t,c,n){for(var e=(t.mode&1)!==0;S!==null;){var r=S,l=r.child;if(r.tag===22&&e){var i=r.memoizedState!==null||p4;if(!i){var o=r.alternate,a=o!==null&&o.memoizedState!==null||E0;o=p4;var v=E0;if(p4=i,(E0=a)&&!v)for(S=r;S!==null;)i=S,a=i.child,i.tag===22&&i.memoizedState!==null?dn(r):a!==null?(a.return=i,S=a):dn(r);for(;l!==null;)S=l,on(l),l=l.sibling;S=r,p4=o,E0=v}un(t)}else(r.subtreeFlags&8772)!==0&&l!==null?(l.return=r,S=l):un(t)}}function un(t){for(;S!==null;){var c=S;if((c.flags&8772)!==0){var n=c.alternate;try{if((c.flags&8772)!==0)switch(c.tag){case 0:case 11:case 15:E0||h4(5,c);break;case 1:var e=c.stateNode;if(c.flags&4&&!E0)if(n===null)e.componentDidMount();else{var r=c.elementType===c.type?n.memoizedProps:i1(c.type,n.memoizedProps);e.componentDidUpdate(r,n.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var l=c.updateQueue;l!==null&&uc(c,l,e);break;case 3:var i=c.updateQueue;if(i!==null){if(n=null,c.child!==null)switch(c.child.tag){case 5:n=c.child.stateNode;break;case 1:n=c.child.stateNode}uc(c,i,n)}break;case 5:var o=c.stateNode;if(n===null&&c.flags&4){n=o;var a=c.memoizedProps;switch(c.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(c.memoizedState===null){var v=c.alternate;if(v!==null){var x=v.memoizedState;if(x!==null){var z=x.dehydrated;z!==null&&K2(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}E0||c.flags&512&&l5(c)}catch(g){a0(c,c.return,g)}}if(c===t){S=null;break}if(n=c.sibling,n!==null){n.return=c.return,S=n;break}S=c.return}}function an(t){for(;S!==null;){var c=S;if(c===t){S=null;break}var n=c.sibling;if(n!==null){n.return=c.return,S=n;break}S=c.return}}function dn(t){for(;S!==null;){var c=S;try{switch(c.tag){case 0:case 11:case 15:var n=c.return;try{h4(4,c)}catch(a){a0(c,n,a)}break;case 1:var e=c.stateNode;if(typeof e.componentDidMount=="function"){var r=c.return;try{e.componentDidMount()}catch(a){a0(c,r,a)}}var l=c.return;try{l5(c)}catch(a){a0(c,l,a)}break;case 5:var i=c.return;try{l5(c)}catch(a){a0(c,i,a)}}}catch(a){a0(c,c.return,a)}if(c===t){S=null;break}var o=c.sibling;if(o!==null){o.return=c.return,S=o;break}S=c.return}}var xe=Math.ceil,v4=k0.ReactCurrentDispatcher,o5=k0.ReactCurrentOwner,t1=k0.ReactCurrentBatchConfig,$=0,M0=null,h0=null,S0=0,Y0=0,P2=D1(0),m0=0,y3=null,l2=0,y4=0,u5=0,g3=null,O0=null,a5=0,H2=1/0,_1=null,g4=!1,d5=null,A1=null,m4=!1,U1=null,x4=0,m3=0,f5=null,z4=-1,M4=0;function H0(){return($&6)!==0?f0():z4!==-1?z4:z4=f0()}function $1(t){return(t.mode&1)===0?1:($&2)!==0&&S0!==0?S0&-S0:ne.transition!==null?(M4===0&&(M4=et()),M4):(t=X,t!==0||(t=window.event,t=t===void 0?16:ft(t.type)),t)}function a1(t,c,n,e){if(50<m3)throw m3=0,f5=null,Error(y(185));A2(t,n,e),(($&2)===0||t!==M0)&&(t===M0&&(($&2)===0&&(y4|=n),m0===4&&Q1(t,S0)),I0(t,e),n===1&&$===0&&(c.mode&1)===0&&(H2=f0()+500,X3&&F1()))}function I0(t,c){var n=t.callbackNode;n7(t,c);var e=N3(t,t===M0?S0:0);if(e===0)n!==null&&tt(n),t.callbackNode=null,t.callbackPriority=0;else if(c=e&-e,t.callbackPriority!==c){if(n!=null&&tt(n),c===1)t.tag===0?ce(pn.bind(null,t)):Jt(pn.bind(null,t)),J7(function(){($&6)===0&&F1()}),n=null;else{switch(rt(e)){case 1:n=Q4;break;case 4:n=ct;break;case 16:n=_3;break;case 536870912:n=nt;break;default:n=_3}n=Mn(n,fn.bind(null,t))}t.callbackPriority=c,t.callbackNode=n}}function fn(t,c){if(z4=-1,M4=0,($&6)!==0)throw Error(y(327));var n=t.callbackNode;if(T2()&&t.callbackNode!==n)return null;var e=N3(t,t===M0?S0:0);if(e===0)return null;if((e&30)!==0||(e&t.expiredLanes)!==0||c)c=C4(t,e);else{c=e;var r=$;$|=2;var l=vn();(M0!==t||S0!==c)&&(_1=null,H2=f0()+500,i2(t,c));do try{Ce();break}catch(o){hn(t,o)}while(!0);N6(),v4.current=l,$=r,h0!==null?c=0:(M0=null,S0=0,c=m0)}if(c!==0){if(c===2&&(r=G4(t),r!==0&&(e=r,c=p5(t,r))),c===1)throw n=y3,i2(t,0),Q1(t,e),I0(t,f0()),n;if(c===6)Q1(t,e);else{if(r=t.current.alternate,(e&30)===0&&!ze(r)&&(c=C4(t,e),c===2&&(l=G4(t),l!==0&&(e=l,c=p5(t,l))),c===1))throw n=y3,i2(t,0),Q1(t,e),I0(t,f0()),n;switch(t.finishedWork=r,t.finishedLanes=e,c){case 0:case 1:throw Error(y(345));case 2:o2(t,O0,_1);break;case 3:if(Q1(t,e),(e&130023424)===e&&(c=a5+500-f0(),10<c)){if(N3(t,0)!==0)break;if(r=t.suspendedLanes,(r&e)!==e){H0(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=x6(o2.bind(null,t,O0,_1),c);break}o2(t,O0,_1);break;case 4:if(Q1(t,e),(e&4194240)===e)break;for(c=t.eventTimes,r=-1;0<e;){var i=31-r1(e);l=1<<i,i=c[i],i>r&&(r=i),e&=~l}if(e=r,e=f0()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*xe(e/1960))-e,10<e){t.timeoutHandle=x6(o2.bind(null,t,O0,_1),e);break}o2(t,O0,_1);break;case 5:o2(t,O0,_1);break;default:throw Error(y(329))}}}return I0(t,f0()),t.callbackNode===n?fn.bind(null,t):null}function p5(t,c){var n=g3;return t.current.memoizedState.isDehydrated&&(i2(t,c).flags|=256),t=C4(t,c),t!==2&&(c=O0,O0=n,c!==null&&h5(c)),t}function h5(t){O0===null?O0=t:O0.push.apply(O0,t)}function ze(t){for(var c=t;;){if(c.flags&16384){var n=c.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var e=0;e<n.length;e++){var r=n[e],l=r.getSnapshot;r=r.value;try{if(!l1(l(),r))return!1}catch{return!1}}}if(n=c.child,c.subtreeFlags&16384&&n!==null)n.return=c,c=n;else{if(c===t)break;for(;c.sibling===null;){if(c.return===null||c.return===t)return!0;c=c.return}c.sibling.return=c.return,c=c.sibling}}return!0}function Q1(t,c){for(c&=~u5,c&=~y4,t.suspendedLanes|=c,t.pingedLanes&=~c,t=t.expirationTimes;0<c;){var n=31-r1(c),e=1<<n;t[n]=-1,c&=~e}}function pn(t){if(($&6)!==0)throw Error(y(327));T2();var c=N3(t,0);if((c&1)===0)return I0(t,f0()),null;var n=C4(t,c);if(t.tag!==0&&n===2){var e=G4(t);e!==0&&(c=e,n=p5(t,e))}if(n===1)throw n=y3,i2(t,0),Q1(t,c),I0(t,f0()),n;if(n===6)throw Error(y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=c,o2(t,O0,_1),I0(t,f0()),null}function v5(t,c){var n=$;$|=1;try{return t(c)}finally{$=n,$===0&&(H2=f0()+500,X3&&F1())}}function s2(t){U1!==null&&U1.tag===0&&($&6)===0&&T2();var c=$;$|=1;var n=t1.transition,e=X;try{if(t1.transition=null,X=1,t)return t()}finally{X=e,t1.transition=n,$=c,($&6)===0&&F1()}}function y5(){Y0=P2.current,n0(P2)}function i2(t,c){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z7(n)),h0!==null)for(n=h0.return;n!==null;){var e=n;switch(k6(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&K3();break;case 3:E2(),n0(j0),n0(_0),F6();break;case 5:D6(e);break;case 4:E2();break;case 13:n0(s0);break;case 19:n0(s0);break;case 10:B6(e.type._context);break;case 22:case 23:y5()}n=n.return}if(M0=t,h0=t=G1(t.current,null),S0=Y0=c,m0=0,y3=null,u5=y4=l2=0,O0=g3=null,n2!==null){for(c=0;c<n2.length;c++)if(n=n2[c],e=n.interleaved,e!==null){n.interleaved=null;var r=e.next,l=n.pending;if(l!==null){var i=l.next;l.next=r,e.next=i}n.pending=e}n2=null}return t}function hn(t,c){do{var n=h0;try{if(N6(),l4.current=u4,s4){for(var e=i0.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}s4=!1}if(r2=0,z0=g0=i0=null,a3=!1,d3=0,o5.current=null,n===null||n.return===null){m0=1,y3=c,h0=null;break}t:{var l=t,i=n.return,o=n,a=c;if(c=S0,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var v=a,x=o,z=x.tag;if((x.mode&1)===0&&(z===0||z===11||z===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var w=Fc(i);if(w!==null){w.flags&=-257,Vc(w,i,o,l,c),w.mode&1&&jc(l,v,c),c=w,a=v;var _=c.updateQueue;if(_===null){var L=new Set;L.add(a),c.updateQueue=L}else _.add(a);break t}else{if((c&1)===0){jc(l,v,c),g5();break t}a=Error(y(426))}}else if(l0&&o.mode&1){var p0=Fc(i);if(p0!==null){(p0.flags&65536)===0&&(p0.flags|=256),Vc(p0,i,o,l,c),W6(N2(a,o));break t}}l=a=N2(a,o),m0!==4&&(m0=2),g3===null?g3=[l]:g3.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,c&=-c,l.lanes|=c;var p=Rc(l,a,c);oc(l,p);break t;case 1:o=a;var d=l.type,h=l.stateNode;if((l.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(A1===null||!A1.has(h)))){l.flags|=65536,c&=-c,l.lanes|=c;var M=Dc(l,o,c);oc(l,M);break t}}l=l.return}while(l!==null)}gn(n)}catch(W){c=W,h0===n&&n!==null&&(h0=n=n.return);continue}break}while(!0)}function vn(){var t=v4.current;return v4.current=u4,t===null?u4:t}function g5(){(m0===0||m0===3||m0===2)&&(m0=4),M0===null||(l2&268435455)===0&&(y4&268435455)===0||Q1(M0,S0)}function C4(t,c){var n=$;$|=2;var e=vn();(M0!==t||S0!==c)&&(_1=null,i2(t,c));do try{Me();break}catch(r){hn(t,r)}while(!0);if(N6(),$=n,v4.current=e,h0!==null)throw Error(y(261));return M0=null,S0=0,m0}function Me(){for(;h0!==null;)yn(h0)}function Ce(){for(;h0!==null&&!Kn();)yn(h0)}function yn(t){var c=zn(t.alternate,t,Y0);t.memoizedProps=t.pendingProps,c===null?gn(t):h0=c,o5.current=null}function gn(t){var c=t;do{var n=c.alternate;if(t=c.return,(c.flags&32768)===0){if(n=he(n,c,Y0),n!==null){h0=n;return}}else{if(n=ve(n,c),n!==null){n.flags&=32767,h0=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{m0=6,h0=null;return}}if(c=c.sibling,c!==null){h0=c;return}h0=c=t}while(c!==null);m0===0&&(m0=5)}function o2(t,c,n){var e=X,r=t1.transition;try{t1.transition=null,X=1,we(t,c,n,e)}finally{t1.transition=r,X=e}return null}function we(t,c,n,e){do T2();while(U1!==null);if(($&6)!==0)throw Error(y(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(y(177));t.callbackNode=null,t.callbackPriority=0;var l=n.lanes|n.childLanes;if(e7(t,l),t===M0&&(h0=M0=null,S0=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||m4||(m4=!0,Mn(_3,function(){return T2(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=t1.transition,t1.transition=null;var i=X;X=1;var o=$;$|=4,o5.current=null,ge(t,n),sn(n,t),U7(g6),H3=!!y6,g6=y6=null,t.current=n,me(n),Yn(),$=o,X=i,t1.transition=l}else t.current=n;if(m4&&(m4=!1,U1=t,x4=r),l=t.pendingLanes,l===0&&(A1=null),Jn(n.stateNode),I0(t,f0()),c!==null)for(e=t.onRecoverableError,n=0;n<c.length;n++)r=c[n],e(r.value,{componentStack:r.stack,digest:r.digest});if(g4)throw g4=!1,t=d5,d5=null,t;return(x4&1)!==0&&t.tag!==0&&T2(),l=t.pendingLanes,(l&1)!==0?t===f5?m3++:(m3=0,f5=t):m3=0,F1(),null}function T2(){if(U1!==null){var t=rt(x4),c=t1.transition,n=X;try{if(t1.transition=null,X=16>t?16:t,U1===null)var e=!1;else{if(t=U1,U1=null,x4=0,($&6)!==0)throw Error(y(331));var r=$;for($|=4,S=t.current;S!==null;){var l=S,i=l.child;if((S.flags&16)!==0){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var v=o[a];for(S=v;S!==null;){var x=S;switch(x.tag){case 0:case 11:case 15:v3(8,x,l)}var z=x.child;if(z!==null)z.return=x,S=z;else for(;S!==null;){x=S;var g=x.sibling,w=x.return;if(cn(x),x===v){S=null;break}if(g!==null){g.return=w,S=g;break}S=w}}}var _=l.alternate;if(_!==null){var L=_.child;if(L!==null){_.child=null;do{var p0=L.sibling;L.sibling=null,L=p0}while(L!==null)}}S=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,S=i;else t:for(;S!==null;){if(l=S,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:v3(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,S=p;break t}S=l.return}}var d=t.current;for(S=d;S!==null;){i=S;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,S=h;else t:for(i=d;S!==null;){if(o=S,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:h4(9,o)}}catch(W){a0(o,o.return,W)}if(o===i){S=null;break t}var M=o.sibling;if(M!==null){M.return=o.return,S=M;break t}S=o.return}}if($=r,F1(),p1&&typeof p1.onPostCommitFiberRoot=="function")try{p1.onPostCommitFiberRoot(L3,t)}catch{}e=!0}return e}finally{X=n,t1.transition=c}}return!1}function mn(t,c,n){c=N2(n,c),c=Rc(t,c,1),t=O1(t,c,1),c=H0(),t!==null&&(A2(t,1,c),I0(t,c))}function a0(t,c,n){if(t.tag===3)mn(t,t,n);else for(;c!==null;){if(c.tag===3){mn(c,t,n);break}else if(c.tag===1){var e=c.stateNode;if(typeof c.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(A1===null||!A1.has(e))){t=N2(n,t),t=Dc(c,t,1),c=O1(c,t,1),t=H0(),c!==null&&(A2(c,1,t),I0(c,t));break}}c=c.return}}function Se(t,c,n){var e=t.pingCache;e!==null&&e.delete(c),c=H0(),t.pingedLanes|=t.suspendedLanes&n,M0===t&&(S0&n)===n&&(m0===4||m0===3&&(S0&130023424)===S0&&500>f0()-a5?i2(t,0):u5|=n),I0(t,c)}function xn(t,c){c===0&&((t.mode&1)===0?c=1:(c=E3,E3<<=1,(E3&130023424)===0&&(E3=4194304)));var n=H0();t=w1(t,c),t!==null&&(A2(t,c,n),I0(t,n))}function ke(t){var c=t.memoizedState,n=0;c!==null&&(n=c.retryLane),xn(t,n)}function _e(t,c){var n=0;switch(t.tag){case 13:var e=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:e=t.stateNode;break;default:throw Error(y(314))}e!==null&&e.delete(c),xn(t,n)}var zn;zn=function(t,c,n){if(t!==null)if(t.memoizedProps!==c.pendingProps||j0.current)V0=!0;else{if((t.lanes&n)===0&&(c.flags&128)===0)return V0=!1,pe(t,c,n);V0=(t.flags&131072)!==0}else V0=!1,l0&&(c.flags&1048576)!==0&&qt(c,J3,c.index);switch(c.lanes=0,c.tag){case 2:var e=c.type;f4(t,c),t=c.pendingProps;var r=C2(c,_0.current);W2(c,n),r=I6(null,c,e,t,r,n);var l=A6();return c.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(c.tag=1,c.memoizedState=null,c.updateQueue=null,F0(e)?(l=!0,Y3(c)):l=!1,c.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,T6(c),r.updater=a4,c.stateNode=r,r._reactInternals=c,Y6(c,e,t,n),c=q6(null,c,e,!0,l,n)):(c.tag=0,l0&&l&&S6(c),P0(null,c,r,n),c=c.child),c;case 16:e=c.elementType;t:{switch(f4(t,c),t=c.pendingProps,r=e._init,e=r(e._payload),c.type=e,r=c.tag=We(e),t=i1(e,t),r){case 0:c=J6(null,c,e,t,n);break t;case 1:c=Qc(null,c,e,t,n);break t;case 11:c=Oc(null,c,e,t,n);break t;case 14:c=Ic(null,c,e,i1(e.type,t),n);break t}throw Error(y(306,e,""))}return c;case 0:return e=c.type,r=c.pendingProps,r=c.elementType===e?r:i1(e,r),J6(t,c,e,r,n);case 1:return e=c.type,r=c.pendingProps,r=c.elementType===e?r:i1(e,r),Qc(t,c,e,r,n);case 3:t:{if(Gc(c),t===null)throw Error(y(387));e=c.pendingProps,l=c.memoizedState,r=l.element,ic(t,c),e4(c,e,null,n);var i=c.memoizedState;if(e=i.element,l.isDehydrated)if(l={element:e,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},c.updateQueue.baseState=l,c.memoizedState=l,c.flags&256){r=N2(Error(y(423)),c),c=Kc(t,c,e,n,r);break t}else if(e!==r){r=N2(Error(y(424)),c),c=Kc(t,c,e,n,r);break t}else for(K0=R1(c.stateNode.containerInfo.firstChild),G0=c,l0=!0,s1=null,n=lc(c,null,e,n),c.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(k2(),e===r){c=k1(t,c,n);break t}P0(t,c,e,n)}c=c.child}return c;case 5:return ac(c),t===null&&L6(c),e=c.type,r=c.pendingProps,l=t!==null?t.memoizedProps:null,i=r.children,m6(e,r)?i=null:l!==null&&m6(e,l)&&(c.flags|=32),$c(t,c),P0(t,c,i,n),c.child;case 6:return t===null&&L6(c),null;case 13:return Yc(t,c,n);case 4:return R6(c,c.stateNode.containerInfo),e=c.pendingProps,t===null?c.child=_2(c,null,e,n):P0(t,c,e,n),c.child;case 11:return e=c.type,r=c.pendingProps,r=c.elementType===e?r:i1(e,r),Oc(t,c,e,r,n);case 7:return P0(t,c,c.pendingProps,n),c.child;case 8:return P0(t,c,c.pendingProps.children,n),c.child;case 12:return P0(t,c,c.pendingProps.children,n),c.child;case 10:t:{if(e=c.type._context,r=c.pendingProps,l=c.memoizedProps,i=r.value,b(t4,e._currentValue),e._currentValue=i,l!==null)if(l1(l.value,i)){if(l.children===r.children&&!j0.current){c=k1(t,c,n);break t}}else for(l=c.child,l!==null&&(l.return=c);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var a=o.firstContext;a!==null;){if(a.context===e){if(l.tag===1){a=S1(-1,n&-n),a.tag=2;var v=l.updateQueue;if(v!==null){v=v.shared;var x=v.pending;x===null?a.next=a:(a.next=x.next,x.next=a),v.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),P6(l.return,n,c),o.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===c.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(y(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),P6(i,n,c),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===c){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}P0(t,c,r.children,n),c=c.child}return c;case 9:return r=c.type,e=c.pendingProps.children,W2(c,n),r=q0(r),e=e(r),c.flags|=1,P0(t,c,e,n),c.child;case 14:return e=c.type,r=i1(e,c.pendingProps),r=i1(e.type,r),Ic(t,c,e,r,n);case 15:return Ac(t,c,c.type,c.pendingProps,n);case 17:return e=c.type,r=c.pendingProps,r=c.elementType===e?r:i1(e,r),f4(t,c),c.tag=1,F0(e)?(t=!0,Y3(c)):t=!1,W2(c,n),Hc(c,e,r),Y6(c,e,r,n),q6(null,c,e,!0,t,n);case 19:return Zc(t,c,n);case 22:return Uc(t,c,n)}throw Error(y(156,c.tag))};function Mn(t,c){return b5(t,c)}function Le(t,c,n,e){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=c,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function c1(t,c,n,e){return new Le(t,c,n,e)}function m5(t){return t=t.prototype,!(!t||!t.isReactComponent)}function We(t){if(typeof t=="function")return m5(t)?1:0;if(t!=null){if(t=t.$$typeof,t===d1)return 11;if(t===f1)return 14}return 2}function G1(t,c){var n=t.alternate;return n===null?(n=c1(t.tag,c,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=c,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,c=t.dependencies,n.dependencies=c===null?null:{lanes:c.lanes,firstContext:c.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function w4(t,c,n,e,r,l){var i=2;if(e=t,typeof t=="function")m5(t)&&(i=1);else if(typeof t=="string")i=5;else t:switch(t){case R0:return u2(n.children,r,l,c);case X0:i=8,r|=8;break;case W1:return t=c1(12,n,c,r|2),t.elementType=W1,t.lanes=l,t;case U0:return t=c1(13,n,c,r),t.elementType=U0,t.lanes=l,t;case e1:return t=c1(19,n,c,r),t.elementType=e1,t.lanes=l,t;case u0:return S4(n,r,l,c);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m1:i=10;break t;case Z1:i=9;break t;case d1:i=11;break t;case f1:i=14;break t;case D0:i=16,e=null;break t}throw Error(y(130,t==null?t:typeof t,""))}return c=c1(i,n,c,r),c.elementType=t,c.type=e,c.lanes=l,c}function u2(t,c,n,e){return t=c1(7,t,e,c),t.lanes=n,t}function S4(t,c,n,e){return t=c1(22,t,e,c),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function x5(t,c,n){return t=c1(6,t,null,c),t.lanes=n,t}function z5(t,c,n){return c=c1(4,t.children!==null?t.children:[],t.key,c),c.lanes=n,c.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},c}function Ee(t,c,n,e,r){this.tag=c,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=K4(0),this.expirationTimes=K4(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=K4(0),this.identifierPrefix=e,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function M5(t,c,n,e,r,l,i,o,a){return t=new Ee(t,c,n,o,a),c===1?(c=1,l===!0&&(c|=8)):c=0,l=c1(3,null,null,c),t.current=l,l.stateNode=t,l.memoizedState={element:e,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},T6(l),t}function Ne(t,c,n){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B0,key:e==null?null:""+e,children:t,containerInfo:c,implementation:n}}function Cn(t){if(!t)return j1;t=t._reactInternals;t:{if(J1(t)!==t||t.tag!==1)throw Error(y(170));var c=t;do{switch(c.tag){case 3:c=c.stateNode.context;break t;case 1:if(F0(c.type)){c=c.stateNode.__reactInternalMemoizedMergedChildContext;break t}}c=c.return}while(c!==null);throw Error(y(171))}if(t.tag===1){var n=t.type;if(F0(n))return Xt(t,n,c)}return c}function wn(t,c,n,e,r,l,i,o,a){return t=M5(n,e,!0,t,r,l,i,o,a),t.context=Cn(null),n=t.current,e=H0(),r=$1(n),l=S1(e,r),l.callback=c??null,O1(n,l,r),t.current.lanes=r,A2(t,r,e),I0(t,e),t}function k4(t,c,n,e){var r=c.current,l=H0(),i=$1(r);return n=Cn(n),c.context===null?c.context=n:c.pendingContext=n,c=S1(l,i),c.payload={element:t},e=e===void 0?null:e,e!==null&&(c.callback=e),t=O1(r,c,i),t!==null&&(a1(t,r,i,l),n4(t,r,i)),i}function _4(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sn(t,c){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<c?n:c}}function C5(t,c){Sn(t,c),(t=t.alternate)&&Sn(t,c)}function Be(){return null}var kn=typeof reportError=="function"?reportError:function(t){console.error(t)};function w5(t){this._internalRoot=t}L4.prototype.render=w5.prototype.render=function(t){var c=this._internalRoot;if(c===null)throw Error(y(409));k4(t,c,null,null)},L4.prototype.unmount=w5.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var c=t.containerInfo;s2(function(){k4(null,t,null,null)}),c[x1]=null}};function L4(t){this._internalRoot=t}L4.prototype.unstable_scheduleHydration=function(t){if(t){var c=it();t={blockedOn:null,target:t,priority:c};for(var n=0;n<P1.length&&c!==0&&c<P1[n].priority;n++);P1.splice(n,0,t),n===0&&at(t)}};function S5(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function W4(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _n(){}function Pe(t,c,n,e,r){if(r){if(typeof e=="function"){var l=e;e=function(){var v=_4(i);l.call(v)}}var i=wn(c,e,t,0,null,!1,!1,"",_n);return t._reactRootContainer=i,t[x1]=i.current,n3(t.nodeType===8?t.parentNode:t),s2(),i}for(;r=t.lastChild;)t.removeChild(r);if(typeof e=="function"){var o=e;e=function(){var v=_4(a);o.call(v)}}var a=M5(t,0,!1,null,null,!1,!1,"",_n);return t._reactRootContainer=a,t[x1]=a.current,n3(t.nodeType===8?t.parentNode:t),s2(function(){k4(c,a,n,e)}),a}function E4(t,c,n,e,r){var l=n._reactRootContainer;if(l){var i=l;if(typeof r=="function"){var o=r;r=function(){var a=_4(i);o.call(a)}}k4(c,i,t,r)}else i=Pe(n,c,t,r,e);return _4(i)}lt=function(t){switch(t.tag){case 3:var c=t.stateNode;if(c.current.memoizedState.isDehydrated){var n=I2(c.pendingLanes);n!==0&&(Y4(c,n|1),I0(c,f0()),($&6)===0&&(H2=f0()+500,F1()))}break;case 13:s2(function(){var e=w1(t,1);if(e!==null){var r=H0();a1(e,t,1,r)}}),C5(t,1)}},X4=function(t){if(t.tag===13){var c=w1(t,134217728);if(c!==null){var n=H0();a1(c,t,134217728,n)}C5(t,134217728)}},st=function(t){if(t.tag===13){var c=$1(t),n=w1(t,c);if(n!==null){var e=H0();a1(n,t,c,e)}C5(t,c)}},it=function(){return X},ot=function(t,c){var n=X;try{return X=t,c()}finally{X=n}},I4=function(t,c,n){switch(c){case"input":if(H4(t,n),c=n.name,n.type==="radio"&&c!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+c)+'][type="radio"]'),c=0;c<n.length;c++){var e=n[c];if(e!==t&&e.form===t.form){var r=G3(e);if(!r)throw Error(y(90));P5(e),H4(e,r)}}}break;case"textarea":j5(t,n);break;case"select":c=n.value,c!=null&&a2(t,!!n.multiple,c,!1)}},G5=v5,K5=s2;var He={usingClientEntryPoint:!1,Events:[l3,z2,G3,$5,Q5,v5]},x3={findFiberByHostInstance:q1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Te={bundleType:x3.bundleType,version:x3.version,rendererPackageName:x3.rendererPackageName,rendererConfig:x3.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k0.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J5(t),t===null?null:t.stateNode},findFiberByHostInstance:x3.findFiberByHostInstance||Be,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var N4=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!N4.isDisabled&&N4.supportsFiber)try{L3=N4.inject(Te),p1=N4}catch{}}return A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=He,A0.createPortal=function(t,c){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S5(c))throw Error(y(200));return Ne(t,c,null,n)},A0.createRoot=function(t,c){if(!S5(t))throw Error(y(299));var n=!1,e="",r=kn;return c!=null&&(c.unstable_strictMode===!0&&(n=!0),c.identifierPrefix!==void 0&&(e=c.identifierPrefix),c.onRecoverableError!==void 0&&(r=c.onRecoverableError)),c=M5(t,1,!1,null,null,n,!1,e,r),t[x1]=c.current,n3(t.nodeType===8?t.parentNode:t),new w5(c)},A0.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var c=t._reactInternals;if(c===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=J5(c),t=t===null?null:t.stateNode,t},A0.flushSync=function(t){return s2(t)},A0.hydrate=function(t,c,n){if(!W4(c))throw Error(y(200));return E4(null,t,c,!0,n)},A0.hydrateRoot=function(t,c,n){if(!S5(t))throw Error(y(405));var e=n!=null&&n.hydratedSources||null,r=!1,l="",i=kn;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),c=wn(c,null,t,1,n??null,r,!1,l,i),t[x1]=c.current,n3(t),e)for(t=0;t<e.length;t++)n=e[t],r=n._getVersion,r=r(n._source),c.mutableSourceEagerHydrationData==null?c.mutableSourceEagerHydrationData=[n,r]:c.mutableSourceEagerHydrationData.push(n,r);return new L4(c)},A0.render=function(t,c,n){if(!W4(c))throw Error(y(200));return E4(null,t,c,!1,n)},A0.unmountComponentAtNode=function(t){if(!W4(t))throw Error(y(40));return t._reactRootContainer?(s2(function(){E4(null,null,t,!1,function(){t._reactRootContainer=null,t[x1]=null})}),!0):!1},A0.unstable_batchedUpdates=v5,A0.unstable_renderSubtreeIntoContainer=function(t,c,n,e){if(!W4(n))throw Error(y(200));if(t==null||t._reactInternals===void 0)throw Error(y(38));return E4(t,c,n,!1,e)},A0.version="18.3.1-next-f1338f8080-20240426",A0}var Tn;function Ue(){if(Tn)return L5.exports;Tn=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(R){console.error(R)}}return s(),L5.exports=Ae(),L5.exports}var Rn;function $e(){if(Rn)return B4;Rn=1;var s=Ue();return B4.createRoot=s.createRoot,B4.hydrateRoot=s.hydrateRoot,B4}var Qe=$e();const Ge={0:{text:"Clear sky",icon:"WiDaySunny",color:"#FFD700"},1:{text:"Mainly clear",icon:"WiDaySunnyOvercast",color:"#FFD966"},2:{text:"Partly cloudy",icon:"WiDayCloudy",color:"#FFDC73"},3:{text:"Overcast",icon:"WiCloudy",color:"#B0BEC5"},45:{text:"Fog",icon:"WiFog",color:"#B0BEC5"},48:{text:"Depositing rime fog",icon:"WiFog",color:"#B0BEC5"},51:{text:"Light drizzle",icon:"WiSprinkle",color:"#7EC8E3"},53:{text:"Moderate drizzle",icon:"WiSprinkle",color:"#6EC6E8"},55:{text:"Dense drizzle",icon:"WiRain",color:"#4FC3F7"},61:{text:"Slight rain",icon:"WiRain",color:"#4FC3F7"},63:{text:"Moderate rain",icon:"WiRain",color:"#42A5F5"},65:{text:"Heavy rain",icon:"WiShowers",color:"#2196F3"},71:{text:"Slight snow",icon:"WiSnow",color:"#E0F7FA"},73:{text:"Moderate snow",icon:"WiSnow",color:"#E0F7FA"},75:{text:"Heavy snow",icon:"WiSnowWind",color:"#DFF3F9"},80:{text:"Slight rain showers",icon:"WiRain",color:"#4FC3F7"},81:{text:"Moderate rain showers",icon:"WiRain",color:"#42A5F5"},82:{text:"Violent rain showers",icon:"WiShowers",color:"#1E88E5"},95:{text:"Thunderstorm",icon:"WiThunderstorm",color:"#FF9800"},96:{text:"Thunderstorm with slight hail",icon:"WiThunderstorm",color:"#FF9800"},99:{text:"Thunderstorm with heavy hail",icon:"WiThunderstorm",color:"#FF9800"}};function N5(s){return Ge[s]||{text:"Unknown",icon:"WiNa",color:"#FFFFFF"}}var jn={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Dn=Y1.createContext&&Y1.createContext(jn),X1=function(){return X1=Object.assign||function(s){for(var R,y=1,A=arguments.length;y<A;y++){R=arguments[y];for(var D in R)Object.prototype.hasOwnProperty.call(R,D)&&(s[D]=R[D])}return s},X1.apply(this,arguments)},Ke=function(s,R){var y={};for(var A in s)Object.prototype.hasOwnProperty.call(s,A)&&R.indexOf(A)<0&&(y[A]=s[A]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,A=Object.getOwnPropertySymbols(s);D<A.length;D++)R.indexOf(A[D])<0&&Object.prototype.propertyIsEnumerable.call(s,A[D])&&(y[A[D]]=s[A[D]]);return y};function Fn(s){return s&&s.map(function(R,y){return Y1.createElement(R.tag,X1({key:y},R.attr),Fn(R.child))})}function u(s){return function(R){return Y1.createElement(Ye,X1({attr:X1({},s.attr)},R),Fn(s.child))}}function Ye(s){var R=function(y){var A=s.attr,D=s.size,U=s.title,t0=Ke(s,["attr","size","title"]),e0=D||y.size||"1em",B;return y.className&&(B=y.className),s.className&&(B=(B?B+" ":"")+s.className),Y1.createElement("svg",X1({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},y.attr,A,t0,{className:B,style:X1(X1({color:s.color||y.color},y.style),s.style),height:e0,width:e0,xmlns:"http://www.w3.org/2000/svg"}),U&&Y1.createElement("title",null,U),s.children)};return Dn!==void 0?Y1.createElement(Dn.Consumer,null,function(y){return R(y)}):R(jn)}function Xe(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M8.75,15.54c-1.12-2.4-0.95-4.66,0.52-6.79c1.03-1.48,2.6-2.39,4.73-2.72c0.16-0.04,0.34-0.07,0.54-0.08h0.63
	c2.91,0.09,5.05,1.38,6.4,3.88c0.64,1.18,0.8,2.48,0.48,3.91c-0.26,1.13-0.68,2.19-1.28,3.17c-1.29,2.01-2.63,3.64-4,4.88
	c-0.07,0.07-0.17,0.16-0.3,0.26c-0.46,0.35-0.89,0.53-1.28,0.54s-0.83-0.14-1.31-0.45c-0.29-0.17-0.53-0.37-0.74-0.59
	C11.18,19.55,9.71,17.55,8.75,15.54z M8.86,13.33c0.02,0.11,0.05,0.25,0.09,0.44s0.07,0.32,0.09,0.4c0.28,1.26,0.86,2.23,1.73,2.93
	c0.88,0.7,1.96,1.11,3.26,1.23c0.29,0.03,0.46,0.02,0.51-0.03s0.08-0.23,0.09-0.52c-0.01-0.08-0.03-0.21-0.05-0.39
	c-0.02-0.18-0.04-0.31-0.06-0.39c-0.25-1.34-0.88-2.32-1.9-2.93c-0.18-0.11-0.39-0.22-0.62-0.34s-0.44-0.2-0.61-0.27
	c-0.17-0.07-0.4-0.16-0.69-0.27c-0.29-0.11-0.5-0.19-0.63-0.25c-0.16-0.06-0.42-0.1-0.8-0.11C8.95,12.83,8.81,13,8.86,13.33z
	 M15.66,17.73c-0.02,0.31,0,0.49,0.06,0.56c0.07,0.07,0.25,0.08,0.55,0.04c0.38-0.04,0.78-0.12,1.2-0.22
	c1.07-0.27,1.94-0.84,2.62-1.71c0.34-0.41,0.6-0.86,0.77-1.34s0.34-1.05,0.47-1.72c0.05-0.23,0.04-0.38-0.03-0.46
	c-0.07-0.08-0.22-0.11-0.44-0.08c-0.59,0.1-1.12,0.23-1.59,0.4c-1.15,0.43-2.02,1.01-2.62,1.74C16.05,15.68,15.72,16.6,15.66,17.73z
	`}}]})(s)}function Ze(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.69,13.2c0-0.99,0.19-1.94,0.58-2.85c0.39-0.91,0.91-1.68,1.57-2.33s1.44-1.17,2.34-1.56c0.9-0.39,1.85-0.58,2.84-0.58
	c0.99,0,1.94,0.19,2.85,0.58c0.9,0.39,1.68,0.91,2.33,1.56c0.65,0.65,1.17,1.43,1.56,2.33s0.58,1.85,0.58,2.85
	c0,1.62-0.48,3.06-1.44,4.34c-0.96,1.27-2.2,2.14-3.71,2.61v3.29h-4.24v-3.25c-1.54-0.45-2.81-1.32-3.79-2.61S7.69,14.83,7.69,13.2z
	 M9.3,13.2c0,1.55,0.56,2.88,1.69,3.99c1.11,1.12,2.45,1.68,4.02,1.68c1.03,0,1.99-0.25,2.86-0.76c0.88-0.51,1.57-1.2,2.09-2.07
	c0.51-0.87,0.77-1.82,0.77-2.85c0-0.77-0.15-1.5-0.45-2.21s-0.71-1.31-1.22-1.82c-0.51-0.51-1.12-0.92-1.83-1.22
	c-0.71-0.3-1.44-0.45-2.21-0.45c-0.77,0-1.5,0.15-2.21,0.45s-1.31,0.71-1.82,1.22c-0.51,0.51-0.92,1.12-1.22,1.82
	C9.45,11.7,9.3,12.43,9.3,13.2z M9.88,13.56v-0.72h2.17v0.72H9.88z M10.97,10.02l0.52-0.52l1.52,1.52l-0.52,0.53L10.97,10.02z
	 M13.5,14.95c0-0.42,0.15-0.78,0.44-1.09c0.29-0.31,0.65-0.47,1.06-0.48l2.73-4.49l0.66,0.35l-2.02,4.83
	c0.18,0.25,0.26,0.54,0.26,0.88c0,0.44-0.15,0.81-0.46,1.11c-0.31,0.3-0.68,0.45-1.12,0.45c-0.43,0-0.8-0.15-1.1-0.45
	C13.65,15.76,13.5,15.39,13.5,14.95z M14.81,10.28V8.12h0.69v2.17H14.81z M17.75,13.55v-0.74h2.17v0.74H17.75z`}}]})(s)}function Je(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.75,10.98c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28c0,0.5-0.18,0.93-0.53,1.28c-0.35,0.36-0.78,0.53-1.27,0.53c-0.5,0-0.93-0.18-1.28-0.53
	S9.75,11.48,9.75,10.98z M10.63,10.98c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.67s-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.28
	C10.72,10.49,10.63,10.72,10.63,10.98z M14.52,15.4c0,0.77,0.21,1.45,0.64,2.05c0.22,0.31,0.53,0.56,0.93,0.75
	c0.39,0.18,0.84,0.28,1.34,0.28c1.46,0,2.38-0.56,2.75-1.67c0.04-0.14,0.02-0.28-0.06-0.41c-0.08-0.13-0.19-0.2-0.33-0.23
	c-0.14-0.04-0.28-0.02-0.4,0.07c-0.12,0.08-0.2,0.19-0.23,0.34c0,0.01,0,0.02-0.01,0.05l-0.02,0.07c-0.11,0.19-0.26,0.34-0.45,0.45
	c-0.31,0.19-0.72,0.28-1.23,0.28c-0.31,0-0.59-0.05-0.83-0.16c-0.4-0.17-0.68-0.47-0.85-0.89c-0.11-0.27-0.17-0.6-0.17-0.97v-3.22
	c0-0.15,0.01-0.3,0.03-0.45c0.04-0.38,0.19-0.73,0.45-1.04c0.29-0.35,0.75-0.52,1.38-0.52c0.52,0,0.93,0.09,1.23,0.27
	c0.2,0.12,0.35,0.27,0.45,0.45c0.01,0.02,0.01,0.05,0.02,0.08c0.01,0.03,0.01,0.05,0.01,0.06c0.04,0.14,0.12,0.24,0.23,0.3
	c0.12,0.07,0.25,0.08,0.4,0.05c0.14-0.03,0.25-0.11,0.33-0.23c0.08-0.12,0.1-0.25,0.06-0.4v-0.01l-0.08-0.23
	c-0.05-0.11-0.14-0.26-0.28-0.43c-0.13-0.18-0.29-0.32-0.45-0.44c-0.21-0.15-0.48-0.27-0.82-0.38c-0.34-0.1-0.71-0.15-1.11-0.15
	c-0.51,0-0.95,0.09-1.35,0.27c-0.39,0.18-0.7,0.42-0.91,0.73c-0.43,0.59-0.65,1.28-0.65,2.07V15.4z`}}]})(s)}function qe(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.61,16.88c0,1.34,0.47,2.48,1.4,3.44c0.93,0.96,2.07,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.34
	c0-0.12-0.06-0.18-0.17-0.18c-0.86-0.04-1.59-0.38-2.19-1.02c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.85-2.17
	c0.57-0.62,1.27-0.97,2.1-1.07L9.8,13.6c0.13,0,0.2-0.06,0.2-0.17l0.08-0.55c0.1-1.08,0.55-1.99,1.36-2.71
	c0.81-0.73,1.76-1.09,2.86-1.09c1.09,0,2.04,0.36,2.86,1.09c0.82,0.73,1.28,1.63,1.4,2.71l0.07,0.58c0,0.11,0.06,0.17,0.17,0.17
	h1.62c0.89,0,1.66,0.32,2.31,0.97c0.65,0.64,0.98,1.4,0.98,2.28c0,0.87-0.3,1.62-0.91,2.26c-0.61,0.64-1.34,0.98-2.19,1.02
	c-0.13,0-0.19,0.06-0.19,0.18v1.34c0,0.11,0.06,0.17,0.19,0.17c0.88-0.02,1.68-0.26,2.41-0.72c0.73-0.45,1.31-1.05,1.73-1.8
	s0.63-1.57,0.63-2.45c0-0.9-0.22-1.73-0.67-2.48c-0.44-0.76-1.05-1.35-1.81-1.79s-1.59-0.65-2.49-0.65h-0.33
	c-0.33-1.34-1.03-2.43-2.1-3.29s-2.31-1.28-3.69-1.28c-1.41,0-2.67,0.44-3.76,1.31s-1.8,2-2.11,3.37c-1.1,0.26-2.01,0.84-2.73,1.74
	S4.61,15.73,4.61,16.88z M11.58,18.4c0,0.24,0.08,0.44,0.24,0.6l2.59,2.61c0.12,0.16,0.32,0.23,0.57,0.23
	c0.28,0,0.48-0.08,0.61-0.23l2.6-2.61c0.16-0.17,0.24-0.38,0.24-0.6c0-0.23-0.08-0.43-0.24-0.58s-0.36-0.23-0.6-0.23
	c-0.24,0-0.44,0.08-0.62,0.23l-1.12,1.11v-3.98c0-0.24-0.08-0.43-0.25-0.59c-0.17-0.16-0.37-0.23-0.61-0.23s-0.43,0.08-0.59,0.23
	c-0.16,0.16-0.23,0.35-0.23,0.59v3.98l-1.1-1.11c-0.18-0.16-0.38-0.23-0.63-0.23c-0.25,0-0.45,0.08-0.61,0.23
	C11.66,17.97,11.58,18.17,11.58,18.4z`}}]})(s)}function be(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.63,16.91c0,0.66,0.12,1.28,0.38,1.88c0.25,0.6,0.59,1.11,1.02,1.55c0.43,0.43,0.94,0.79,1.53,1.05
	c0.59,0.27,1.21,0.42,1.87,0.45c0.11,0,0.17-0.06,0.17-0.17v-1.33c0-0.12-0.06-0.19-0.17-0.19c-0.87-0.06-1.6-0.41-2.19-1.03
	s-0.89-1.36-0.89-2.21c0-0.84,0.28-1.57,0.85-2.19c0.57-0.62,1.26-0.97,2.1-1.04l0.52-0.07c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52
	c0.07-0.71,0.3-1.36,0.69-1.95c0.39-0.58,0.9-1.04,1.52-1.37s1.29-0.49,2.01-0.49c1.09,0,2.05,0.36,2.86,1.08
	c0.82,0.72,1.28,1.62,1.39,2.7l0.06,0.57c0,0.12,0.06,0.18,0.19,0.18h1.61c0.9,0,1.67,0.32,2.32,0.97c0.64,0.64,0.97,1.41,0.97,2.3
	c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.32,0.97-2.19,1.03c-0.13,0-0.2,0.06-0.2,0.19v1.33c0,0.11,0.07,0.17,0.2,0.17
	c1.34-0.06,2.47-0.57,3.39-1.51s1.38-2.09,1.38-3.42c0-0.89-0.22-1.72-0.67-2.48c-0.45-0.76-1.05-1.36-1.81-1.8
	c-0.76-0.44-1.59-0.67-2.48-0.67h-0.32c-0.33-1.33-1.04-2.42-2.11-3.28C16.9,7.82,15.67,7.4,14.3,7.4c-1.41,0-2.66,0.44-3.75,1.33
	s-1.8,2.01-2.11,3.38c-1.11,0.26-2.02,0.84-2.73,1.74C4.99,14.74,4.63,15.76,4.63,16.91z M10.86,18.18c0,0.74,0.19,1.43,0.56,2.07
	s0.88,1.14,1.51,1.51c0.63,0.38,1.32,0.56,2.06,0.56c1.15,0,2.13-0.41,2.95-1.22c0.82-0.82,1.23-1.79,1.23-2.92
	c0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25c-0.24,0-0.44,0.08-0.61,0.25s-0.26,0.37-0.26,0.6
	c0,0.67-0.24,1.24-0.72,1.73c-0.48,0.48-1.05,0.72-1.73,0.72c-0.66,0-1.23-0.24-1.71-0.72c-0.48-0.48-0.72-1.06-0.72-1.73
	c0-0.6,0.18-1.13,0.53-1.6c0.36-0.47,0.79-0.73,1.31-0.77l-0.41,0.39c-0.15,0.15-0.23,0.34-0.23,0.57c0,0.25,0.07,0.47,0.23,0.66
	c0.14,0.15,0.31,0.23,0.53,0.23c0.22,0.01,0.45-0.07,0.7-0.23l1.82-1.87c0.17-0.17,0.25-0.36,0.25-0.58c0-0.25-0.08-0.45-0.25-0.61
	l-1.82-1.83c-0.19-0.18-0.39-0.26-0.62-0.26c-0.23,0-0.43,0.08-0.59,0.25c-0.16,0.17-0.24,0.37-0.24,0.61
	c0,0.24,0.07,0.43,0.23,0.58l0.35,0.36c-1,0.17-1.83,0.63-2.49,1.4C11.19,16.24,10.86,17.14,10.86,18.18z`}}]})(s)}function t8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,16.88c0,1.33,0.46,2.48,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.33
	c0-0.12-0.06-0.19-0.17-0.19c-0.86-0.04-1.58-0.38-2.18-1.02s-0.9-1.39-0.9-2.25c0-0.82,0.28-1.54,0.84-2.16
	c0.56-0.61,1.26-0.97,2.1-1.07h0.53c0.13,0,0.2-0.06,0.2-0.18l0.06-0.57c0.11-1.08,0.57-1.99,1.38-2.72s1.77-1.1,2.86-1.1
	c1.08,0,2.03,0.37,2.85,1.1c0.82,0.73,1.28,1.64,1.39,2.72l0.08,0.57c0,0.12,0.06,0.18,0.18,0.18h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.98,1.4,0.98,2.26c0,0.86-0.3,1.61-0.9,2.25c-0.6,0.64-1.33,0.98-2.18,1.02c-0.13,0-0.2,0.06-0.2,0.19v1.33
	c0,0.11,0.07,0.17,0.2,0.17c0.87-0.02,1.67-0.26,2.4-0.71c0.73-0.45,1.31-1.05,1.73-1.8c0.42-0.75,0.63-1.57,0.63-2.44
	c0-0.67-0.13-1.31-0.39-1.91c-0.26-0.61-0.62-1.13-1.06-1.57c-0.44-0.44-0.97-0.79-1.58-1.05c-0.61-0.26-1.25-0.39-1.92-0.39h-0.32
	c-0.33-1.34-1.03-2.43-2.11-3.29c-1.07-0.85-2.3-1.28-3.68-1.28c-1.41,0-2.67,0.44-3.76,1.32s-1.79,2-2.1,3.36
	c-1.11,0.26-2.02,0.83-2.73,1.73C4.99,14.71,4.64,15.73,4.64,16.88z M11.58,17.51c0,0.25,0.08,0.46,0.24,0.64
	c0.15,0.15,0.35,0.23,0.61,0.23c0.24,0,0.45-0.08,0.62-0.23l1.11-1.14v3.98c0,0.24,0.08,0.44,0.23,0.61
	c0.16,0.17,0.35,0.25,0.59,0.25c0.23,0,0.43-0.08,0.6-0.25c0.17-0.17,0.25-0.37,0.25-0.61v-3.94l1.12,1.11
	c0.4,0.31,0.81,0.31,1.22,0c0.16-0.15,0.24-0.36,0.24-0.62c0-0.24-0.08-0.44-0.24-0.62l-2.59-2.57c-0.16-0.16-0.36-0.24-0.6-0.24
	c-0.24,0-0.44,0.08-0.59,0.24l-2.58,2.57C11.66,17.08,11.58,17.27,11.58,17.51z`}}]})(s)}function c8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.61,16.88c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.48,2.74-1.73c0.31-1.37,1.02-2.49,2.11-3.37s2.35-1.32,3.76-1.32
	c1.38,0,2.61,0.43,3.69,1.28s1.78,1.95,2.1,3.29h0.33c0.9,0,1.73,0.22,2.49,0.65s1.37,1.03,1.81,1.79c0.44,0.76,0.67,1.58,0.67,2.48
	c0,0.88-0.21,1.7-0.63,2.45s-1,1.35-1.73,1.8c-0.73,0.45-1.54,0.69-2.41,0.72H9.41c-1.34-0.06-2.47-0.57-3.4-1.53
	C5.08,19.37,4.61,18.22,4.61,16.88z M6.32,16.88c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.19,1.03h11.19c0.86-0.04,1.59-0.39,2.19-1.03
	c0.61-0.64,0.91-1.4,0.91-2.26c0-0.88-0.33-1.63-0.98-2.27c-0.65-0.64-1.42-0.96-2.32-0.96H18.8c-0.11,0-0.17-0.06-0.17-0.18
	l-0.07-0.57c-0.11-1.08-0.58-1.99-1.4-2.72c-0.82-0.73-1.77-1.1-2.86-1.1c-1.09,0-2.05,0.37-2.85,1.1
	c-0.81,0.73-1.27,1.64-1.37,2.72l-0.08,0.57c0,0.12-0.07,0.18-0.2,0.18H9.27c-0.84,0.1-1.54,0.46-2.1,1.07S6.32,16.05,6.32,16.88z`}}]})(s)}function n8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.62,21.01c0-0.25,0.08-0.46,0.25-0.63c0.17-0.16,0.37-0.24,0.6-0.24h5.42c0.74,0,1.37,0.26,1.89,0.79
	c0.52,0.53,0.78,1.16,0.78,1.9c0,0.74-0.26,1.38-0.78,1.9c-0.52,0.52-1.15,0.78-1.89,0.78s-1.38-0.26-1.9-0.79
	c-0.16-0.16-0.23-0.36-0.23-0.6c0-0.24,0.08-0.45,0.23-0.6c0.15-0.16,0.35-0.24,0.6-0.24c0.23,0,0.43,0.08,0.61,0.24
	c0.2,0.19,0.43,0.29,0.69,0.29s0.49-0.1,0.68-0.29c0.19-0.19,0.29-0.42,0.29-0.7c0-0.26-0.1-0.49-0.29-0.68s-0.42-0.29-0.68-0.29
	H4.47c-0.23,0-0.43-0.08-0.6-0.25S3.62,21.25,3.62,21.01z M3.62,17.97c0-0.24,0.08-0.45,0.25-0.62c0.17-0.16,0.37-0.24,0.6-0.24
	h10.55c0.26,0,0.49-0.1,0.68-0.29c0.19-0.19,0.29-0.43,0.29-0.69s-0.1-0.5-0.29-0.69c-0.19-0.19-0.42-0.29-0.68-0.29
	c-0.28,0-0.5,0.09-0.68,0.28c-0.18,0.15-0.39,0.23-0.64,0.23c-0.24,0-0.44-0.08-0.6-0.23c-0.15-0.15-0.23-0.35-0.23-0.6
	c0-0.25,0.07-0.45,0.23-0.61c0.51-0.51,1.15-0.76,1.92-0.76c0.74,0,1.38,0.26,1.9,0.78c0.52,0.52,0.78,1.15,0.78,1.88
	s-0.26,1.37-0.78,1.89c-0.52,0.52-1.15,0.78-1.9,0.78H4.47c-0.24,0-0.44-0.08-0.6-0.24C3.7,18.4,3.62,18.2,3.62,17.97z M5.77,15.61
	c0,0.08,0.05,0.12,0.16,0.12h1.44c0.08,0,0.15-0.05,0.22-0.15c0.22-0.54,0.58-0.99,1.05-1.35c0.48-0.36,1.01-0.56,1.59-0.6
	l0.53-0.08c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1c1.11,0,2.07,0.36,2.88,1.09
	c0.81,0.73,1.27,1.64,1.39,2.73l0.07,0.59c0,0.11,0.06,0.17,0.17,0.17h1.62c0.91,0,1.68,0.32,2.33,0.96c0.65,0.64,0.97,1.4,0.97,2.3
	c0,0.89-0.32,1.66-0.97,2.3c-0.65,0.64-1.42,0.96-2.33,0.96h-6.91c-0.12,0-0.19,0.06-0.19,0.17v1.39c0,0.11,0.06,0.17,0.19,0.17
	h6.91c0.91,0,1.74-0.22,2.51-0.67c0.77-0.44,1.37-1.05,1.82-1.81c0.45-0.77,0.67-1.6,0.67-2.5c0-0.91-0.22-1.74-0.67-2.5
	c-0.45-0.76-1.05-1.37-1.82-1.81c-0.77-0.44-1.6-0.67-2.51-0.67h-0.31c-0.31-1.33-1.01-2.42-2.1-3.27
	c-1.08-0.85-2.33-1.27-3.73-1.27c-1.41,0-2.66,0.44-3.75,1.32s-1.78,2-2.07,3.37c-0.86,0.2-1.62,0.61-2.28,1.23
	s-1.12,1.36-1.38,2.21v0.04C5.77,15.56,5.77,15.58,5.77,15.61z`}}]})(s)}function e8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.1,21.04c0-0.24,0.08-0.45,0.25-0.61s0.38-0.24,0.63-0.24h8.97c0.24,0,0.43,0.08,0.59,0.24c0.16,0.16,0.23,0.36,0.23,0.61
	c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.16-0.35,0.24-0.59,0.24H3.98c-0.25,0-0.46-0.08-0.63-0.24S3.1,21.27,3.1,21.04z M5.73,17.98
	c0-0.24,0.09-0.44,0.27-0.6c0.14-0.15,0.34-0.23,0.59-0.23h9c0.23,0,0.42,0.08,0.58,0.23s0.23,0.35,0.23,0.59
	c0,0.24-0.08,0.44-0.23,0.61c-0.15,0.17-0.35,0.25-0.58,0.25h-9c-0.23,0-0.43-0.09-0.6-0.26S5.73,18.21,5.73,17.98z M6.35,15.65
	c0,0.09,0.06,0.14,0.17,0.14h1.43c0.09,0,0.17-0.05,0.23-0.14c0.23-0.54,0.57-0.99,1.04-1.35s0.99-0.56,1.58-0.6l0.54-0.07
	c0.11,0,0.17-0.06,0.17-0.18l0.07-0.52c0.11-1.09,0.58-1.99,1.39-2.72c0.82-0.73,1.77-1.09,2.87-1.09c1.09,0,2.03,0.36,2.83,1.07
	c0.8,0.72,1.27,1.62,1.41,2.7l0.07,0.59c0,0.11,0.06,0.16,0.18,0.16h1.6c0.91,0,1.68,0.32,2.32,0.96c0.64,0.64,0.96,1.41,0.96,2.32
	c0,0.88-0.33,1.64-0.97,2.28c-0.65,0.65-1.42,0.97-2.31,0.97h-6.89c-0.12,0-0.18,0.06-0.18,0.17v1.34c0,0.12,0.06,0.18,0.18,0.18
	h6.89c0.68,0,1.32-0.13,1.94-0.39s1.14-0.61,1.58-1.05s0.79-0.97,1.05-1.58s0.39-1.25,0.39-1.92c0-0.9-0.22-1.73-0.66-2.49
	c-0.44-0.76-1.04-1.36-1.8-1.8c-0.76-0.44-1.6-0.66-2.5-0.66h-0.31c-0.33-1.34-1.03-2.44-2.1-3.3c-1.08-0.85-2.3-1.28-3.68-1.28
	c-1.42,0-2.67,0.44-3.76,1.33c-1.09,0.88-1.78,2.01-2.08,3.39c-0.86,0.19-1.62,0.6-2.27,1.21s-1.1,1.35-1.36,2.22v0.02
	C6.36,15.6,6.35,15.62,6.35,15.65z M7.5,24.13c0-0.24,0.09-0.44,0.26-0.6c0.15-0.16,0.35-0.23,0.59-0.23h8.99
	c0.24,0,0.45,0.08,0.61,0.24c0.17,0.16,0.25,0.36,0.25,0.6c0,0.24-0.08,0.44-0.25,0.61c-0.17,0.17-0.37,0.25-0.61,0.25H8.35
	c-0.23,0-0.43-0.08-0.6-0.25C7.58,24.57,7.5,24.37,7.5,24.13z`}}]})(s)}function r8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.89,17.6c0-0.99,0.31-1.88,0.93-2.65s1.41-1.27,2.38-1.49c0.26-1.17,0.85-2.14,1.78-2.88c0.93-0.75,2-1.12,3.22-1.12
	c1.18,0,2.24,0.36,3.16,1.09c0.93,0.73,1.53,1.66,1.8,2.8h0.27c1.18,0,2.18,0.41,3.01,1.24s1.25,1.83,1.25,3
	c0,1.18-0.42,2.18-1.25,3.01s-1.83,1.25-3.01,1.25H8.16c-0.58,0-1.13-0.11-1.65-0.34S5.52,21,5.14,20.62
	c-0.38-0.38-0.68-0.84-0.91-1.36S3.89,18.17,3.89,17.6z M5.34,17.6c0,0.76,0.28,1.42,0.82,1.96s1.21,0.82,1.99,0.82h9.28
	c0.77,0,1.44-0.27,1.99-0.82c0.55-0.55,0.83-1.2,0.83-1.96c0-0.76-0.27-1.42-0.83-1.96c-0.55-0.54-1.21-0.82-1.99-0.82h-1.39
	c-0.1,0-0.15-0.05-0.15-0.15l-0.07-0.49c-0.1-0.94-0.5-1.73-1.19-2.35s-1.51-0.93-2.45-0.93c-0.94,0-1.76,0.31-2.46,0.94
	c-0.7,0.62-1.09,1.41-1.18,2.34l-0.07,0.42c0,0.1-0.05,0.15-0.16,0.15l-0.45,0.07c-0.72,0.06-1.32,0.36-1.81,0.89
	C5.59,16.24,5.34,16.87,5.34,17.6z M14.19,8.88c-0.1,0.09-0.08,0.16,0.07,0.21c0.43,0.19,0.79,0.37,1.08,0.55
	c0.11,0.03,0.19,0.02,0.22-0.03c0.61-0.57,1.31-0.86,2.12-0.86c0.81,0,1.5,0.27,2.1,0.81c0.59,0.54,0.92,1.21,0.99,2l0.09,0.64h1.42
	c0.65,0,1.21,0.23,1.68,0.7c0.47,0.47,0.7,1.02,0.7,1.66c0,0.6-0.21,1.12-0.62,1.57s-0.92,0.7-1.53,0.77c-0.1,0-0.15,0.05-0.15,0.16
	v1.13c0,0.11,0.05,0.16,0.15,0.16c1.01-0.06,1.86-0.46,2.55-1.19s1.04-1.6,1.04-2.6c0-1.06-0.37-1.96-1.12-2.7
	c-0.75-0.75-1.65-1.12-2.7-1.12h-0.15c-0.26-1-0.81-1.82-1.65-2.47c-0.83-0.65-1.77-0.97-2.8-0.97C16.28,7.29,15.11,7.82,14.19,8.88
	z`}}]})(s)}function l8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M0.35,21.01c0,0.24,0.09,0.44,0.27,0.6c0.17,0.17,0.37,0.25,0.61,0.25h5.88c0.26,0,0.48,0.09,0.68,0.28
	c0.2,0.19,0.3,0.42,0.3,0.68s-0.1,0.5-0.3,0.69c-0.2,0.19-0.42,0.29-0.68,0.29c-0.26,0-0.48-0.1-0.68-0.3
	c-0.18-0.16-0.38-0.24-0.61-0.24c-0.24,0-0.44,0.08-0.6,0.24c-0.16,0.16-0.24,0.36-0.24,0.6c0,0.24,0.08,0.44,0.24,0.6
	c0.53,0.53,1.16,0.8,1.89,0.8c0.74,0,1.37-0.26,1.88-0.78c0.52-0.52,0.78-1.15,0.78-1.89s-0.26-1.37-0.78-1.89
	c-0.52-0.53-1.15-0.79-1.88-0.79H1.23c-0.24,0-0.44,0.09-0.62,0.26S0.35,20.78,0.35,21.01z M0.35,18c0,0.22,0.09,0.41,0.27,0.57
	c0.17,0.17,0.37,0.25,0.61,0.25H12.2c0.74,0,1.37-0.26,1.89-0.78c0.52-0.52,0.78-1.15,0.78-1.89c0-0.74-0.26-1.36-0.78-1.88
	c-0.52-0.51-1.15-0.77-1.89-0.77c-0.76,0-1.38,0.25-1.88,0.76c-0.16,0.16-0.23,0.37-0.23,0.61c0,0.24,0.08,0.44,0.23,0.6
	c0.15,0.15,0.35,0.23,0.6,0.23c0.24,0,0.44-0.08,0.62-0.23c0.19-0.19,0.41-0.28,0.67-0.28c0.26,0,0.49,0.09,0.68,0.28
	c0.19,0.19,0.29,0.42,0.29,0.68c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.68,0.29H1.23c-0.24,0-0.44,0.09-0.62,0.26
	C0.43,17.57,0.35,17.77,0.35,18z M3,15.65c0,0.08,0.06,0.12,0.17,0.12H4.6c0.07,0,0.13-0.05,0.2-0.14c0.22-0.54,0.57-0.99,1.05-1.35
	c0.47-0.35,1-0.55,1.6-0.6l0.53-0.07c0.12,0,0.19-0.06,0.19-0.17l0.07-0.52c0.11-1.08,0.56-1.98,1.37-2.71
	c0.81-0.73,1.76-1.09,2.85-1.09c1.1,0,2.05,0.36,2.86,1.08s1.27,1.63,1.38,2.71l0.07,0.58c0,0.12,0.06,0.18,0.18,0.18h1.63
	c0.9,0,1.67,0.31,2.3,0.94c0.63,0.63,0.95,1.39,0.95,2.27c0,0.89-0.32,1.66-0.95,2.29c-0.63,0.63-1.4,0.95-2.3,0.95h-6.9
	c-0.13,0-0.19,0.06-0.19,0.18v1.37c0,0.11,0.06,0.17,0.19,0.17h6.9c0.89,0,1.72-0.22,2.48-0.67c0.76-0.44,1.36-1.05,1.8-1.81
	c0.44-0.76,0.66-1.59,0.66-2.48c0-0.74-0.14-1.41-0.42-2.03c0.76-0.99,1.13-2.1,1.13-3.31c0-0.94-0.24-1.81-0.71-2.62
	s-1.11-1.45-1.92-1.92c-0.81-0.47-1.68-0.71-2.62-0.71c-1.54,0-2.83,0.58-3.86,1.73c-0.8-0.41-1.69-0.61-2.67-0.61
	c-1.41,0-2.65,0.44-3.73,1.31s-1.77,1.99-2.06,3.34c-0.85,0.2-1.6,0.61-2.25,1.23c-0.65,0.62-1.11,1.35-1.36,2.19v0.04
	C3.01,15.59,3,15.62,3,15.65z M11.18,4.62c0,0.23,0.09,0.43,0.27,0.6l0.61,0.65c0.16,0.16,0.37,0.24,0.61,0.24
	c0.25,0,0.45-0.08,0.61-0.23c0.16-0.15,0.24-0.35,0.24-0.6c0-0.24-0.07-0.44-0.23-0.6l-0.66-0.65c-0.16-0.17-0.35-0.26-0.59-0.26
	s-0.44,0.08-0.61,0.25C11.26,4.19,11.18,4.39,11.18,4.62z M16.5,9.03c0.72-0.68,1.54-1.02,2.48-1.02c0.97,0,1.8,0.35,2.51,1.05
	c0.7,0.7,1.05,1.54,1.05,2.51c0,0.65-0.17,1.26-0.52,1.83c-0.96-0.96-2.11-1.43-3.46-1.43h-0.34C17.99,10.88,17.41,9.9,16.5,9.03z
	 M18.12,3.79c0,0.23,0.08,0.43,0.25,0.59c0.17,0.16,0.37,0.24,0.6,0.24c0.24,0,0.44-0.08,0.61-0.24c0.17-0.16,0.25-0.35,0.25-0.59
	V1.74c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.25-0.61-0.25c-0.24,0-0.44,0.08-0.6,0.25s-0.25,0.37-0.25,0.61V3.79z
	 M23.67,6.06c0,0.24,0.08,0.44,0.23,0.6c0.17,0.17,0.37,0.25,0.61,0.26s0.43-0.08,0.57-0.26l1.46-1.43
	c0.17-0.17,0.25-0.37,0.25-0.61c0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25S25.49,3.84,25.33,4L23.9,5.47
	C23.75,5.63,23.67,5.82,23.67,6.06z M24.44,17.89c0,0.23,0.08,0.43,0.25,0.6l0.64,0.65c0.2,0.16,0.41,0.24,0.62,0.24
	c0.19,0,0.39-0.08,0.59-0.24c0.17-0.17,0.25-0.37,0.25-0.6c0-0.22-0.08-0.42-0.25-0.61l-0.64-0.65c-0.16-0.16-0.36-0.24-0.58-0.24
	c-0.25,0-0.46,0.08-0.63,0.25C24.52,17.45,24.44,17.65,24.44,17.89z M25.95,11.57c0,0.24,0.08,0.43,0.25,0.59
	c0.15,0.18,0.34,0.26,0.57,0.26h2.02c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6c0-0.23-0.09-0.43-0.26-0.6
	c-0.17-0.17-0.37-0.26-0.6-0.26h-2.02c-0.24,0-0.43,0.08-0.59,0.25C26.03,11.13,25.95,11.33,25.95,11.57z`}}]})(s)}function s8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.95,13.05c0-0.93,0.29-1.75,0.87-2.48s1.31-1.2,2.19-1.4c0.26-1.1,0.82-2,1.7-2.71s1.88-1.06,3.01-1.06
	c1.1,0,2.08,0.35,2.95,1.04s1.43,1.57,1.68,2.65h0.26c1.1,0,2.04,0.39,2.82,1.16c0.78,0.77,1.17,1.71,1.17,2.81
	c0,0.01,0,0.02,0,0.04c0,0.02,0,0.04,0,0.06c0.75,0.8,1.12,1.75,1.12,2.85c0,0.76-0.19,1.46-0.57,2.1
	c-0.38,0.65-0.89,1.16-1.53,1.53c-0.64,0.38-1.34,0.56-2.09,0.56c-0.96,0-1.82-0.3-2.56-0.89s-1.24-1.35-1.48-2.26H7.79
	C6.72,17,5.81,16.59,5.07,15.82S3.95,14.12,3.95,13.05z M5.31,13.05c0,0.7,0.24,1.31,0.73,1.82s1.07,0.79,1.75,0.82h8.99
	c0.68-0.03,1.27-0.3,1.75-0.82c0.49-0.52,0.73-1.12,0.73-1.82c0-0.71-0.26-1.32-0.79-1.83c-0.53-0.52-1.14-0.77-1.86-0.77h-1.29
	c-0.09,0-0.14-0.05-0.14-0.14l-0.07-0.47c-0.09-0.87-0.46-1.6-1.12-2.19s-1.42-0.89-2.28-0.89c-0.89,0-1.66,0.29-2.31,0.88
	S8.4,8.96,8.31,9.83L8.25,10.3c0,0.09-0.05,0.14-0.16,0.14h-0.4C7.02,10.52,6.45,10.8,6,11.3C5.54,11.79,5.31,12.38,5.31,13.05z
	 M11.51,22.06c-0.25-0.33-0.25-0.65,0-0.98l1.13-1.15c0.14-0.12,0.31-0.18,0.52-0.18c0.19,0,0.34,0.06,0.46,0.18
	c0.12,0.12,0.18,0.28,0.18,0.47c0,0.2-0.06,0.36-0.18,0.48l-1.14,1.18c-0.12,0.12-0.29,0.19-0.49,0.19
	C11.79,22.25,11.63,22.18,11.51,22.06z M14.9,17.04c0.21,0.54,0.56,0.97,1.04,1.3c0.48,0.33,1.01,0.5,1.6,0.5
	c0.77,0,1.43-0.28,1.97-0.83c0.54-0.56,0.81-1.23,0.81-2.02c0-0.39-0.06-0.74-0.19-1.05c-0.33,0.61-0.8,1.11-1.39,1.49
	c-0.6,0.38-1.25,0.58-1.96,0.61H14.9z M16.85,22.23c0-0.19,0.07-0.34,0.2-0.47c0.13-0.12,0.3-0.19,0.48-0.19
	c0.18,0,0.35,0.07,0.5,0.21c0.12,0.12,0.19,0.27,0.19,0.45v1.64c0,0.19-0.07,0.35-0.2,0.49c-0.13,0.14-0.3,0.21-0.48,0.21
	s-0.35-0.07-0.48-0.21c-0.13-0.14-0.2-0.3-0.2-0.49V22.23z M21.26,20.4c0-0.18,0.06-0.33,0.19-0.46c0.13-0.12,0.29-0.19,0.47-0.19
	c0.19,0,0.35,0.06,0.47,0.18l1.18,1.15c0.13,0.14,0.2,0.3,0.2,0.48c0,0.19-0.07,0.35-0.2,0.48c-0.13,0.13-0.3,0.2-0.49,0.2
	c-0.21,0-0.37-0.06-0.5-0.19l-1.13-1.18C21.32,20.73,21.26,20.57,21.26,20.4z M21.26,11.59c0-0.19,0.06-0.35,0.19-0.47l1.13-1.18
	c0.14-0.12,0.3-0.19,0.5-0.19c0.19,0,0.35,0.06,0.5,0.19c0.13,0.15,0.2,0.32,0.2,0.51c0,0.18-0.07,0.33-0.2,0.48l-1.18,1.15
	c-0.12,0.12-0.28,0.19-0.47,0.19s-0.35-0.06-0.47-0.19C21.32,11.94,21.26,11.78,21.26,11.59z M23.08,15.99
	c0-0.19,0.06-0.35,0.19-0.48c0.12-0.13,0.28-0.2,0.47-0.2h1.62c0.19,0,0.36,0.07,0.5,0.2s0.21,0.29,0.21,0.48
	c0,0.19-0.07,0.36-0.21,0.49c-0.14,0.13-0.3,0.2-0.5,0.2h-1.62c-0.19,0-0.34-0.07-0.47-0.2C23.14,16.35,23.08,16.19,23.08,15.99z`}}]})(s)}function i8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M0.45,20.97c0,0.24,0.08,0.45,0.24,0.61c0.44,0.18,0.73,0.27,0.88,0.27h7.88c0.24,0,0.44-0.09,0.6-0.26
	c0.17-0.17,0.25-0.38,0.25-0.61c0-0.23-0.08-0.43-0.25-0.59c-0.17-0.16-0.37-0.24-0.6-0.24H1.57c-0.26,0-0.52,0.08-0.76,0.24
	C0.57,20.55,0.45,20.75,0.45,20.97z M1.84,17.97c0,0.24,0.08,0.43,0.25,0.59c0.15,0.17,0.34,0.26,0.58,0.26h9.4
	c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.25-0.61-0.25h-9.4
	c-0.23,0-0.43,0.08-0.59,0.25C1.92,17.53,1.84,17.73,1.84,17.97z M2.89,15.6c0,0.09,0.06,0.13,0.17,0.13h1.39
	c0.12,0,0.19-0.04,0.22-0.13c0.26-0.53,0.62-0.97,1.09-1.32c0.47-0.35,1-0.55,1.58-0.62h0.54c0.11,0,0.16-0.06,0.16-0.19l0.07-0.56
	c0.07-0.71,0.3-1.36,0.69-1.95c0.39-0.58,0.9-1.04,1.53-1.37s1.3-0.5,2.02-0.5c1.09,0,2.04,0.37,2.85,1.1s1.27,1.64,1.39,2.72
	l0.07,0.56c0,0.12,0.06,0.19,0.18,0.19h1.6c0.89,0,1.65,0.32,2.3,0.96c0.65,0.64,0.97,1.39,0.97,2.27c0,0.9-0.32,1.67-0.97,2.31
	c-0.64,0.64-1.41,0.96-2.31,0.96h-6.89c-0.11,0-0.17,0.06-0.17,0.19v1.33c0,0.12,0.06,0.18,0.17,0.18h6.89
	c0.9,0,1.73-0.22,2.49-0.67c0.76-0.44,1.37-1.05,1.81-1.81c0.44-0.76,0.67-1.59,0.67-2.49c0-0.73-0.14-1.39-0.43-2.01
	c0.78-0.96,1.16-2.06,1.16-3.28c0-0.94-0.24-1.81-0.71-2.62c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.63-0.71
	c-0.73,0-1.43,0.15-2.1,0.45c-0.67,0.3-1.25,0.71-1.74,1.25c-0.83-0.43-1.73-0.65-2.7-0.65c-1.41,0-2.67,0.44-3.76,1.31
	s-1.79,1.99-2.09,3.36c-0.85,0.21-1.6,0.63-2.25,1.25s-1.1,1.36-1.35,2.21C2.9,15.55,2.89,15.57,2.89,15.6z M3.6,24.16
	c0,0.24,0.09,0.43,0.26,0.59C4.02,24.92,4.22,25,4.45,25h9.42c0.23,0,0.43-0.08,0.59-0.25s0.24-0.36,0.24-0.6
	c0-0.25-0.08-0.46-0.24-0.62s-0.36-0.25-0.6-0.25H4.45c-0.24,0-0.44,0.08-0.6,0.25S3.6,23.91,3.6,24.16z M11.09,4.65
	c0,0.25,0.08,0.45,0.24,0.6l0.64,0.66c0.16,0.16,0.36,0.24,0.6,0.24c0.26,0,0.46-0.08,0.62-0.24c0.16-0.16,0.24-0.36,0.24-0.61
	c0-0.23-0.08-0.43-0.24-0.59l-0.65-0.65c-0.17-0.17-0.36-0.25-0.57-0.25c-0.25,0-0.46,0.08-0.63,0.25S11.09,4.42,11.09,4.65z
	 M16.45,9.03c0.66-0.63,1.48-0.95,2.45-0.95c0.97,0,1.8,0.34,2.49,1.03c0.68,0.68,1.03,1.51,1.03,2.49c0,0.67-0.15,1.27-0.46,1.81
	c-0.94-0.95-2.11-1.43-3.5-1.43h-0.3C17.87,10.83,17.3,9.85,16.45,9.03z M18.05,3.81c0,0.24,0.08,0.43,0.25,0.59s0.36,0.23,0.6,0.23
	c0.25,0,0.45-0.08,0.6-0.23c0.15-0.15,0.23-0.35,0.23-0.6V1.76c0-0.24-0.08-0.45-0.23-0.61c-0.16-0.17-0.36-0.25-0.6-0.25
	c-0.23,0-0.43,0.08-0.6,0.25s-0.25,0.37-0.25,0.61V3.81z M23.57,6.09c0,0.24,0.08,0.44,0.25,0.6c0.12,0.16,0.33,0.24,0.6,0.24
	c0.27,0,0.47-0.08,0.59-0.24l1.46-1.44c0.16-0.15,0.24-0.36,0.24-0.62c0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25
	s-0.44,0.08-0.61,0.23L23.83,5.5C23.66,5.67,23.57,5.86,23.57,6.09z M24.37,17.95c0,0.24,0.08,0.44,0.23,0.6l0.66,0.63
	c0.24,0.18,0.45,0.27,0.61,0.27c0.16,0,0.37-0.09,0.61-0.27c0.16-0.16,0.24-0.36,0.24-0.6c0-0.23-0.08-0.43-0.24-0.61l-0.64-0.61
	c-0.19-0.17-0.4-0.26-0.65-0.26c-0.24,0-0.43,0.08-0.59,0.24C24.45,17.51,24.37,17.71,24.37,17.95z M25.81,11.63
	c0,0.24,0.09,0.45,0.27,0.61c0.18,0.17,0.38,0.25,0.6,0.25h2.03c0.23,0,0.42-0.08,0.59-0.25c0.17-0.17,0.25-0.37,0.25-0.61
	c0-0.22-0.08-0.41-0.24-0.57c-0.16-0.15-0.36-0.23-0.59-0.23h-2.03c-0.24,0-0.45,0.08-0.62,0.23C25.9,11.22,25.81,11.41,25.81,11.63
	z`}}]})(s)}function o8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.56,16.9c0,0.9,0.22,1.73,0.66,2.49s1.04,1.36,1.8,1.8c0.76,0.44,1.58,0.66,2.47,0.66h10.83c0.89,0,1.72-0.22,2.48-0.66
	c0.76-0.44,1.37-1.04,1.81-1.8c0.44-0.76,0.67-1.59,0.67-2.49c0-0.66-0.14-1.33-0.42-2C22.62,13.98,23,12.87,23,11.6
	c0-0.71-0.14-1.39-0.41-2.04c-0.27-0.65-0.65-1.2-1.12-1.67C21,7.42,20.45,7.04,19.8,6.77c-0.65-0.28-1.33-0.41-2.04-0.41
	c-1.48,0-2.77,0.58-3.88,1.74c-0.77-0.44-1.67-0.66-2.7-0.66c-1.41,0-2.65,0.44-3.73,1.31c-1.08,0.87-1.78,1.99-2.08,3.35
	c-1.12,0.26-2.03,0.83-2.74,1.73S1.56,15.75,1.56,16.9z M3.27,16.9c0-0.84,0.28-1.56,0.84-2.17c0.56-0.61,1.26-0.96,2.1-1.06
	l0.5-0.03c0.12,0,0.19-0.06,0.19-0.18l0.07-0.54c0.14-1.08,0.61-1.99,1.41-2.71c0.8-0.73,1.74-1.09,2.81-1.09
	c1.1,0,2.06,0.37,2.87,1.1c0.82,0.73,1.27,1.63,1.37,2.71l0.07,0.58c0.02,0.11,0.09,0.17,0.21,0.17h1.61c0.88,0,1.64,0.32,2.28,0.96
	c0.64,0.64,0.96,1.39,0.96,2.27c0,0.91-0.32,1.68-0.95,2.32c-0.63,0.64-1.4,0.96-2.28,0.96H6.49c-0.88,0-1.63-0.32-2.27-0.97
	C3.59,18.57,3.27,17.8,3.27,16.9z M9.97,4.63c0,0.24,0.08,0.45,0.24,0.63l0.66,0.64c0.25,0.19,0.46,0.27,0.64,0.25
	c0.21,0,0.39-0.09,0.55-0.26s0.24-0.38,0.24-0.62c0-0.24-0.09-0.44-0.26-0.59l-0.59-0.66c-0.18-0.16-0.38-0.24-0.61-0.24
	c-0.24,0-0.45,0.08-0.62,0.25C10.05,4.19,9.97,4.39,9.97,4.63z M15.31,9.06c0.69-0.67,1.51-1,2.45-1c0.99,0,1.83,0.34,2.52,1.03
	c0.69,0.69,1.04,1.52,1.04,2.51c0,0.62-0.17,1.24-0.51,1.84C19.84,12.48,18.68,12,17.32,12H17C16.75,10.91,16.19,9.93,15.31,9.06z
	 M16.94,3.78c0,0.26,0.08,0.46,0.23,0.62s0.35,0.23,0.59,0.23c0.26,0,0.46-0.08,0.62-0.23c0.16-0.16,0.23-0.36,0.23-0.62V1.73
	c0-0.24-0.08-0.43-0.24-0.59s-0.36-0.23-0.61-0.23c-0.24,0-0.43,0.08-0.59,0.23s-0.23,0.35-0.23,0.59V3.78z M22.46,6.07
	c0,0.26,0.07,0.46,0.22,0.62c0.21,0.16,0.42,0.24,0.62,0.24c0.18,0,0.38-0.08,0.59-0.24l1.43-1.43c0.16-0.18,0.24-0.39,0.24-0.64
	c0-0.24-0.08-0.44-0.24-0.6c-0.16-0.16-0.36-0.24-0.59-0.24c-0.24,0-0.43,0.08-0.58,0.24l-1.47,1.43
	C22.53,5.64,22.46,5.84,22.46,6.07z M23.25,17.91c0,0.24,0.08,0.45,0.25,0.63l0.65,0.63c0.15,0.16,0.34,0.24,0.58,0.24
	s0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.62c0-0.22-0.08-0.42-0.24-0.58l-0.65-0.65c-0.16-0.16-0.35-0.24-0.57-0.24
	c-0.24,0-0.44,0.08-0.6,0.24C23.34,17.47,23.25,17.67,23.25,17.91z M24.72,11.6c0,0.23,0.09,0.42,0.26,0.58
	c0.16,0.16,0.37,0.24,0.61,0.24h2.04c0.23,0,0.42-0.08,0.58-0.23s0.23-0.35,0.23-0.59c0-0.24-0.08-0.44-0.23-0.6
	s-0.35-0.25-0.58-0.25h-2.04c-0.24,0-0.44,0.08-0.61,0.25C24.8,11.17,24.72,11.37,24.72,11.6z`}}]})(s)}function u8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M0.32,21.06c0,0.23,0.08,0.43,0.25,0.59c0.17,0.16,0.38,0.24,0.63,0.24h18.71c0.24,0,0.44-0.08,0.61-0.24
	c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25H1.2c-0.25,0-0.46,0.08-0.63,0.25
	S0.32,20.82,0.32,21.06z M2.94,17.92c0,0.23,0.08,0.43,0.25,0.58c0.17,0.18,0.37,0.27,0.6,0.27h18.72c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.6c0-0.23-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.24-0.59-0.24H3.8c-0.24,0-0.44,0.08-0.6,0.24
	C3.03,17.5,2.94,17.69,2.94,17.92z M3.07,15.52c0,0.09,0.05,0.13,0.16,0.13h1.43c0.07,0,0.14-0.05,0.21-0.16
	c0.24-0.52,0.59-0.94,1.06-1.27c0.47-0.33,0.99-0.52,1.56-0.56l0.54-0.07c0.11,0,0.17-0.06,0.17-0.18l0.07-0.51
	c0.11-1.08,0.56-1.98,1.37-2.71C10.45,9.47,11.4,9.1,12.5,9.1c1.08,0,2.03,0.36,2.84,1.08c0.81,0.72,1.27,1.61,1.38,2.68l0.07,0.58
	c0,0.11,0.06,0.17,0.19,0.17h1.61c0.64,0,1.23,0.17,1.76,0.52c0.53,0.34,0.92,0.8,1.18,1.37c0.07,0.11,0.13,0.16,0.2,0.16h1.44
	c0.13,0,0.18-0.07,0.13-0.23l-0.2-0.55c0.76-0.94,1.13-2.04,1.13-3.31c0-0.71-0.14-1.38-0.41-2.03s-0.64-1.2-1.11-1.67
	c-0.46-0.47-1.02-0.84-1.67-1.12S19.72,6.35,19,6.35c-1.54,0-2.82,0.56-3.82,1.68C14.33,7.61,13.44,7.4,12.5,7.4
	c-1.4,0-2.65,0.44-3.74,1.32s-1.79,2-2.1,3.37c-1.78,0.47-2.98,1.58-3.58,3.35C3.07,15.45,3.07,15.48,3.07,15.52z M4.69,24.13
	c0,0.24,0.09,0.44,0.27,0.6c0.16,0.17,0.35,0.26,0.59,0.26h18.74c0.23,0,0.43-0.08,0.6-0.25c0.17-0.17,0.25-0.37,0.25-0.61
	c0-0.23-0.08-0.42-0.25-0.58c-0.17-0.15-0.37-0.23-0.6-0.23H5.55c-0.24,0-0.44,0.08-0.61,0.23C4.77,23.71,4.69,23.9,4.69,24.13z
	 M11.26,4.66c0,0.24,0.08,0.43,0.23,0.59l0.65,0.64c0.17,0.18,0.36,0.27,0.58,0.27c0.22,0,0.42-0.08,0.6-0.25
	c0.17-0.17,0.26-0.37,0.26-0.61c0-0.24-0.08-0.45-0.25-0.63l-0.64-0.61c-0.16-0.17-0.36-0.26-0.6-0.26c-0.24,0-0.44,0.08-0.6,0.25
	C11.34,4.21,11.26,4.42,11.26,4.66z M16.58,9.04c0.67-0.68,1.48-1.01,2.43-1.01c0.98,0,1.82,0.35,2.51,1.04
	c0.69,0.69,1.04,1.53,1.04,2.5c0,0.65-0.16,1.25-0.49,1.8c-0.95-0.95-2.11-1.42-3.47-1.42h-0.34C17.97,10.77,17.41,9.8,16.58,9.04z
	 M18.18,3.81c0,0.23,0.08,0.43,0.24,0.59c0.16,0.16,0.35,0.24,0.59,0.24c0.25,0,0.46-0.08,0.63-0.24c0.17-0.16,0.25-0.35,0.25-0.59
	V1.76c0-0.23-0.09-0.43-0.26-0.6C19.45,0.99,19.24,0.91,19,0.91c-0.23,0-0.43,0.08-0.59,0.25c-0.16,0.17-0.24,0.37-0.24,0.6V3.81z
	 M23.67,6.08c0,0.22,0.08,0.43,0.24,0.6c0.37,0.36,0.78,0.36,1.23,0l1.43-1.43c0.16-0.18,0.24-0.39,0.24-0.64
	c0-0.23-0.08-0.43-0.24-0.59c-0.16-0.16-0.36-0.24-0.59-0.24c-0.24,0-0.44,0.08-0.6,0.24l-1.46,1.47
	C23.75,5.67,23.67,5.87,23.67,6.08z M24.48,17.88c0,0.24,0.09,0.44,0.26,0.6l0.64,0.65c0.16,0.16,0.36,0.24,0.58,0.24
	c0.21,0,0.41-0.08,0.61-0.24c0.16-0.17,0.24-0.39,0.24-0.64c0-0.22-0.08-0.41-0.24-0.56l-0.65-0.66c-0.18-0.16-0.38-0.24-0.6-0.24
	c-0.24,0-0.44,0.08-0.6,0.25C24.56,17.44,24.48,17.64,24.48,17.88z M25.96,11.57c0,0.24,0.09,0.44,0.26,0.6
	c0.15,0.17,0.35,0.25,0.59,0.25h2.05c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.6c0-0.24-0.08-0.44-0.24-0.6
	c-0.16-0.16-0.35-0.24-0.59-0.24h-2.05c-0.24,0-0.44,0.08-0.6,0.25C26.04,11.14,25.96,11.34,25.96,11.57z`}}]})(s)}function a8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.48,16.88c0,1.34,0.47,2.49,1.4,3.45s2.07,1.47,3.4,1.53c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.12-0.06-0.18-0.18-0.18
	c-0.86-0.04-1.59-0.39-2.19-1.03s-0.9-1.4-0.9-2.26c0-0.83,0.28-1.55,0.85-2.17s1.27-0.97,2.1-1.07l0.53-0.04
	c0.13,0,0.2-0.06,0.2-0.18l0.07-0.55c0.11-1.08,0.56-1.99,1.37-2.71c0.81-0.73,1.76-1.09,2.86-1.09c1.09,0,2.04,0.36,2.86,1.09
	c0.82,0.73,1.29,1.63,1.4,2.71l0.07,0.58c0,0.12,0.06,0.19,0.17,0.19h1.62c0.89,0,1.67,0.32,2.32,0.96c0.65,0.64,0.98,1.4,0.98,2.27
	c0,0.87-0.3,1.62-0.91,2.26c-0.61,0.64-1.34,0.98-2.19,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c1.34-0.04,2.47-0.55,3.39-1.51c0.93-0.97,1.39-2.12,1.39-3.46c0-0.74-0.14-1.41-0.41-2.01c0.79-0.96,1.18-2.07,1.18-3.33
	c0-0.94-0.24-1.82-0.71-2.63c-0.48-0.81-1.12-1.45-1.93-1.93c-0.81-0.47-1.69-0.71-2.63-0.71c-1.56,0-2.86,0.58-3.9,1.75
	c-0.8-0.44-1.7-0.66-2.71-0.66c-1.41,0-2.67,0.44-3.76,1.31s-1.8,2-2.11,3.37c-1.11,0.26-2.02,0.84-2.74,1.74
	C1.84,14.7,1.48,15.73,1.48,16.88z M6.82,23.94c0.1,0.22,0.25,0.37,0.46,0.45c0.2,0.1,0.41,0.11,0.63,0.02
	c0.22-0.08,0.37-0.23,0.45-0.45c0.1-0.22,0.11-0.43,0.02-0.65c-0.08-0.21-0.23-0.36-0.45-0.44c-0.2-0.11-0.41-0.12-0.62-0.03
	c-0.22,0.09-0.37,0.24-0.47,0.47C6.74,23.49,6.73,23.7,6.82,23.94z M7.46,21.1c0,0.14,0.03,0.27,0.09,0.38
	c0.19,0.31,0.49,0.46,0.89,0.46c0.32,0,0.55-0.22,0.69-0.65l1.04-3.22c0.08-0.24,0.06-0.47-0.07-0.67s-0.31-0.33-0.55-0.37
	C9.34,16.98,9.13,17,8.93,17.1c-0.2,0.11-0.34,0.28-0.41,0.5l-1.03,3.22C7.47,20.92,7.46,21.02,7.46,21.1z M9.33,26.72
	c0,0.13,0.02,0.23,0.05,0.29c0.09,0.22,0.24,0.37,0.45,0.45c0.09,0.05,0.21,0.07,0.35,0.07c0.06,0,0.16-0.02,0.3-0.06
	c0.22-0.08,0.38-0.23,0.47-0.45s0.1-0.44,0-0.66c-0.1-0.22-0.25-0.37-0.45-0.45s-0.41-0.08-0.62,0c-0.19,0.07-0.33,0.19-0.42,0.35
	C9.37,26.42,9.33,26.58,9.33,26.72z M9.94,4.57c0,0.25,0.08,0.45,0.24,0.6l0.65,0.65c0.16,0.16,0.34,0.25,0.54,0.27
	c0.21,0.03,0.41-0.05,0.61-0.23c0.2-0.18,0.3-0.4,0.3-0.64c0-0.24-0.08-0.44-0.24-0.6l-0.64-0.64c-0.19-0.17-0.39-0.25-0.62-0.25
	c-0.24,0-0.45,0.08-0.61,0.24C10.02,4.14,9.94,4.34,9.94,4.57z M10.06,24.03c0,0.16,0.05,0.32,0.16,0.48s0.27,0.27,0.48,0.33
	c0.11,0.02,0.19,0.04,0.24,0.04c0.15,0,0.28-0.03,0.38-0.08c0.2-0.08,0.34-0.27,0.43-0.57l1.8-6.14c0.07-0.24,0.05-0.45-0.06-0.65
	c-0.11-0.2-0.27-0.33-0.5-0.39c-0.24-0.07-0.46-0.05-0.66,0.06c-0.2,0.11-0.34,0.27-0.41,0.51l-1.84,6.19
	C10.07,23.92,10.06,24,10.06,24.03z M13.51,23.64c0,0.13,0.02,0.23,0.07,0.31c0.09,0.21,0.24,0.35,0.45,0.44
	c0.11,0.05,0.22,0.08,0.35,0.08c0.06,0,0.16-0.02,0.3-0.06c0.23-0.09,0.38-0.23,0.46-0.44c0.08-0.22,0.08-0.43,0-0.63
	c-0.08-0.2-0.22-0.35-0.42-0.45c-0.23-0.11-0.44-0.12-0.66-0.03c-0.21,0.09-0.37,0.24-0.48,0.47
	C13.53,23.41,13.51,23.51,13.51,23.64z M14.23,21.08c0,0.16,0.05,0.31,0.15,0.45c0.1,0.15,0.26,0.25,0.46,0.31
	c0.09,0.02,0.17,0.03,0.25,0.03c0.39,0,0.65-0.2,0.79-0.61l1.03-3.18c0.08-0.23,0.05-0.45-0.07-0.65s-0.29-0.33-0.52-0.39
	c-0.24-0.07-0.45-0.05-0.64,0.06s-0.32,0.27-0.4,0.51l-1.02,3.2C14.25,20.94,14.23,21.03,14.23,21.08z M15.3,9
	c0.67-0.64,1.5-0.97,2.48-0.97c0.98,0,1.81,0.34,2.5,1.03c0.69,0.68,1.04,1.51,1.04,2.49c0,0.62-0.17,1.24-0.52,1.85
	c-0.96-0.96-2.12-1.44-3.51-1.44H17C16.7,10.8,16.14,9.81,15.3,9z M16.92,3.73c0,0.24,0.08,0.44,0.25,0.61
	c0.17,0.17,0.37,0.25,0.61,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61V1.67c0-0.24-0.08-0.44-0.24-0.61
	c-0.16-0.17-0.35-0.25-0.59-0.25c-0.24,0-0.44,0.08-0.61,0.25c-0.17,0.17-0.25,0.37-0.25,0.61V3.73z M22.47,6.02
	c0,0.24,0.08,0.44,0.25,0.6c0.15,0.17,0.34,0.26,0.58,0.26c0.23,0,0.44-0.09,0.6-0.26l1.44-1.44c0.18-0.15,0.27-0.35,0.27-0.6
	c0-0.24-0.09-0.44-0.26-0.61c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.41,0.09-0.57,0.27l-1.45,1.43
	C22.56,5.57,22.47,5.78,22.47,6.02z M23.28,17.92c0,0.23,0.08,0.43,0.24,0.6l0.66,0.63c0.14,0.18,0.34,0.27,0.6,0.27
	c0.24,0,0.43-0.09,0.57-0.27c0.18-0.16,0.27-0.36,0.27-0.6c0-0.24-0.09-0.44-0.27-0.61l-0.65-0.62c-0.16-0.18-0.35-0.26-0.58-0.26
	s-0.43,0.08-0.6,0.25C23.36,17.48,23.28,17.69,23.28,17.92z M24.74,11.55c0,0.24,0.09,0.44,0.26,0.6c0.18,0.18,0.38,0.26,0.62,0.26
	h2.03c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.26-0.37,0.26-0.61c0-0.23-0.08-0.43-0.25-0.59c-0.17-0.16-0.38-0.24-0.62-0.24h-2.03
	c-0.25,0-0.46,0.08-0.63,0.24C24.83,11.12,24.74,11.32,24.74,11.55z`}}]})(s)}function d8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.37,15.62c0-0.24,0.08-0.44,0.25-0.61c0.18-0.17,0.38-0.25,0.6-0.25h2.04c0.23,0,0.42,0.08,0.58,0.25
	c0.15,0.17,0.23,0.37,0.23,0.61c0,0.24-0.08,0.44-0.23,0.6c-0.15,0.17-0.35,0.25-0.58,0.25H5.23c-0.23,0-0.43-0.08-0.6-0.25
	C4.46,16.05,4.37,15.85,4.37,15.62z M7.23,8.71c0-0.23,0.08-0.43,0.23-0.61c0.2-0.17,0.41-0.25,0.64-0.25
	c0.21,0,0.41,0.08,0.59,0.25l1.43,1.46c0.16,0.15,0.24,0.35,0.24,0.59c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.16-0.36,0.24-0.6,0.24
	c-0.24,0-0.44-0.08-0.59-0.24L7.47,9.32C7.31,9.15,7.23,8.95,7.23,8.71z M7.39,18.02c0-0.22,0.08-0.41,0.23-0.55
	c0.16-0.14,0.37-0.22,0.64-0.22h5.71c0.27,0,0.48,0.07,0.64,0.22c0.16,0.14,0.24,0.33,0.24,0.55c0,0.27-0.08,0.48-0.23,0.64
	c-0.16,0.16-0.37,0.24-0.65,0.24H8.26c-0.27,0-0.48-0.08-0.64-0.23S7.39,18.29,7.39,18.02z M8.38,20.97c0-0.22,0.09-0.42,0.28-0.6
	c0.18-0.18,0.39-0.27,0.6-0.27c0.26,0,0.47,0.09,0.63,0.26c0.16,0.18,0.24,0.38,0.24,0.61c0,0.28-0.08,0.49-0.23,0.65
	s-0.37,0.23-0.64,0.23c-0.23,0-0.44-0.08-0.61-0.24C8.47,21.45,8.38,21.23,8.38,20.97z M9.79,15.91v-0.07
	c0.03-1.26,0.47-2.35,1.31-3.28c0.84-0.93,1.87-1.49,3.1-1.69h0.05c0.19-0.04,0.45-0.06,0.76-0.06c0.31,0,0.57,0.02,0.76,0.06h0.04
	c1.22,0.19,2.26,0.76,3.1,1.69c0.84,0.93,1.28,2.02,1.31,3.28v0.07c0,0.16-0.08,0.24-0.23,0.24h-1.13c-0.12,0-0.2-0.03-0.25-0.09
	c-0.05-0.06-0.07-0.12-0.07-0.18c-0.04-0.93-0.4-1.72-1.08-2.37c-0.68-0.65-1.49-0.97-2.44-0.97s-1.76,0.32-2.44,0.97
	c-0.68,0.65-1.04,1.44-1.08,2.37c0,0.06-0.03,0.12-0.08,0.18c-0.05,0.06-0.14,0.09-0.26,0.09h-1.13
	C9.87,16.15,9.79,16.07,9.79,15.91z M10.8,20.97c0-0.23,0.08-0.43,0.24-0.61c0.16-0.17,0.37-0.26,0.63-0.26h3.83
	c0.22,0,0.42,0.09,0.6,0.27c0.18,0.18,0.28,0.38,0.28,0.6c0,0.26-0.09,0.48-0.27,0.64s-0.38,0.24-0.61,0.24h-3.83
	c-0.27,0-0.48-0.08-0.64-0.23C10.87,21.46,10.8,21.25,10.8,20.97z M14.14,7.89V5.86c0-0.24,0.08-0.44,0.25-0.61S14.76,5,15,5
	s0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.61v2.03c0,0.23-0.08,0.43-0.25,0.58S15.23,8.71,15,8.71s-0.44-0.08-0.6-0.23
	S14.14,8.12,14.14,7.89z M15.5,18.02c0-0.21,0.09-0.39,0.27-0.54s0.38-0.23,0.61-0.23s0.43,0.08,0.61,0.23s0.27,0.33,0.27,0.54
	c0,0.26-0.09,0.48-0.27,0.64c-0.18,0.16-0.38,0.24-0.61,0.24s-0.44-0.08-0.61-0.24C15.59,18.49,15.5,18.28,15.5,18.02z M17.04,20.97
	c0-0.23,0.08-0.43,0.24-0.61c0.16-0.17,0.38-0.26,0.64-0.26h1.86c0.26,0,0.47,0.09,0.63,0.26c0.16,0.18,0.24,0.38,0.24,0.61
	c0,0.28-0.08,0.49-0.23,0.65c-0.15,0.16-0.37,0.23-0.64,0.23h-1.86c-0.27,0-0.48-0.08-0.64-0.23
	C17.12,21.46,17.04,21.25,17.04,20.97z M17.92,18.02c0-0.21,0.09-0.39,0.27-0.54s0.38-0.23,0.6-0.23h3.07c0.22,0,0.4,0.07,0.54,0.22
	c0.14,0.15,0.22,0.33,0.22,0.55c0,0.27-0.07,0.48-0.21,0.64c-0.14,0.16-0.32,0.24-0.55,0.24h-3.07c-0.23,0-0.43-0.08-0.61-0.24
	C18.01,18.49,17.92,18.28,17.92,18.02z M19.66,10.15c0-0.25,0.08-0.45,0.23-0.59l1.42-1.46c0.18-0.17,0.38-0.25,0.59-0.25
	c0.23,0,0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.61c0,0.24-0.08,0.45-0.24,0.61l-1.46,1.42c-0.18,0.16-0.38,0.24-0.6,0.24
	c-0.23,0-0.41-0.08-0.56-0.24C19.74,10.59,19.66,10.39,19.66,10.15z M21.92,15.62c0-0.23,0.08-0.43,0.24-0.61
	c0.17-0.17,0.36-0.25,0.57-0.25h2.02c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6c0,0.23-0.09,0.43-0.26,0.6
	c-0.17,0.17-0.37,0.25-0.6,0.25h-2.02c-0.23,0-0.43-0.08-0.58-0.25S21.92,15.86,21.92,15.62z`}}]})(s)}function f8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.32,14.85c0,0.24,0.09,0.44,0.26,0.6c0.16,0.17,0.36,0.25,0.6,0.25h9.42c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.6c0-0.23-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.24-0.59-0.24H3.18c-0.24,0-0.44,0.08-0.61,0.24
	C2.4,14.42,2.32,14.62,2.32,14.85z M2.65,21c0,0.24,0.08,0.44,0.25,0.6c0.16,0.17,0.36,0.25,0.6,0.25h9.43
	c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6s-0.08-0.43-0.25-0.59s-0.37-0.24-0.61-0.24H3.51
	c-0.24,0-0.44,0.08-0.6,0.24C2.74,20.57,2.65,20.77,2.65,21z M4.02,17.9c0,0.24,0.08,0.43,0.25,0.59c0.17,0.16,0.38,0.23,0.63,0.23
	h9.4c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.25-0.08-0.45-0.23-0.61c-0.16-0.16-0.35-0.24-0.59-0.24H4.9
	c-0.25,0-0.46,0.08-0.63,0.24C4.11,17.45,4.02,17.65,4.02,17.9z M6.45,11.55c0-0.24,0.09-0.44,0.26-0.62
	c0.17-0.16,0.38-0.24,0.6-0.24h2.03c0.23,0,0.42,0.08,0.58,0.25c0.16,0.17,0.23,0.37,0.23,0.61c0,0.24-0.08,0.44-0.23,0.6
	c-0.16,0.17-0.35,0.25-0.58,0.25H7.31c-0.24,0-0.44-0.08-0.61-0.25C6.53,11.98,6.45,11.78,6.45,11.55z M9.31,4.63
	c0-0.22,0.08-0.43,0.24-0.61c0.19-0.16,0.4-0.24,0.63-0.24c0.22,0,0.42,0.08,0.59,0.24l1.42,1.47c0.16,0.15,0.24,0.35,0.24,0.59
	c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.16-0.36,0.24-0.6,0.24c-0.24,0-0.44-0.08-0.59-0.24L9.55,5.25C9.39,5.07,9.31,4.87,9.31,4.63z
	 M11.86,11.43v-0.07c0.02-0.91,0.27-1.75,0.74-2.53c0.47-0.77,1.11-1.38,1.9-1.83s1.65-0.67,2.57-0.67c0.7,0,1.37,0.14,2.02,0.42
	c0.64,0.28,1.2,0.65,1.66,1.12c0.47,0.47,0.84,1.02,1.11,1.66c0.27,0.64,0.41,1.32,0.41,2.02c0,0.94-0.23,1.8-0.69,2.6
	s-1.09,1.43-1.88,1.89c-0.79,0.47-1.66,0.7-2.6,0.71h-0.2c-0.07,0-0.13-0.02-0.18-0.07c-0.05-0.05-0.08-0.11-0.08-0.18v-1.22
	c0-0.13,0.07-0.2,0.22-0.2h0.24c0.96-0.01,1.79-0.35,2.47-1.05c0.68-0.69,1.03-1.52,1.03-2.49c0-0.96-0.35-1.78-1.04-2.47
	c-0.69-0.68-1.52-1.02-2.5-1.02c-0.94,0-1.76,0.32-2.44,0.98c-0.68,0.65-1.04,1.44-1.08,2.37c0,0.06-0.02,0.11-0.07,0.17
	s-0.13,0.09-0.25,0.09h-1.14C11.93,11.67,11.86,11.59,11.86,11.43z M16.23,21.31v-1.99c0-0.24,0.08-0.44,0.24-0.6
	s0.36-0.24,0.6-0.24c0.24,0,0.45,0.08,0.61,0.24s0.24,0.36,0.24,0.6v1.99c0,0.24-0.08,0.45-0.25,0.62c-0.17,0.17-0.37,0.25-0.6,0.25
	c-0.24,0-0.44-0.08-0.6-0.25S16.23,21.56,16.23,21.31z M16.23,3.83V1.78c0-0.24,0.08-0.44,0.25-0.6s0.36-0.25,0.6-0.25
	c0.23,0,0.43,0.08,0.6,0.25s0.25,0.37,0.25,0.6v2.04c0,0.23-0.08,0.42-0.25,0.58c-0.17,0.15-0.37,0.23-0.6,0.23
	c-0.24,0-0.44-0.08-0.6-0.23C16.31,4.25,16.23,4.06,16.23,3.83z M21.74,17.01c0-0.23,0.07-0.42,0.23-0.56
	c0.15-0.16,0.34-0.23,0.57-0.23c0.24,0,0.44,0.08,0.6,0.23l1.45,1.42c0.16,0.17,0.24,0.38,0.24,0.61c0,0.23-0.08,0.43-0.24,0.59
	c-0.4,0.31-0.8,0.31-1.2,0l-1.42-1.43C21.82,17.48,21.74,17.26,21.74,17.01z M21.74,6.08c0-0.25,0.07-0.45,0.23-0.59l1.42-1.47
	c0.18-0.16,0.37-0.24,0.59-0.24c0.24,0,0.44,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6c0,0.25-0.08,0.46-0.24,0.62l-1.45,1.43
	c-0.18,0.16-0.38,0.24-0.6,0.24c-0.23,0-0.41-0.08-0.57-0.24S21.74,6.32,21.74,6.08z M24,11.55c0-0.23,0.08-0.44,0.25-0.62
	c0.16-0.16,0.35-0.24,0.56-0.24h2.03c0.23,0,0.43,0.09,0.61,0.26c0.17,0.17,0.26,0.37,0.26,0.6c0,0.23-0.09,0.43-0.26,0.6
	c-0.18,0.17-0.38,0.25-0.61,0.25h-2.03c-0.23,0-0.42-0.08-0.58-0.25C24.08,11.99,24,11.79,24,11.55z`}}]})(s)}function p8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.56,16.9c0,1.33,0.46,2.47,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.37
	c0-0.12-0.06-0.18-0.17-0.18c-0.87-0.07-1.6-0.41-2.19-1.04c-0.59-0.62-0.89-1.36-0.89-2.21c0-0.84,0.28-1.57,0.85-2.19
	s1.26-0.97,2.1-1.04l0.52-0.08c0.13,0,0.2-0.06,0.2-0.17l0.06-0.51c0.11-1.08,0.56-1.99,1.37-2.71c0.81-0.73,1.76-1.09,2.86-1.09
	c1.09,0,2.04,0.36,2.85,1.09c0.81,0.72,1.27,1.63,1.39,2.72l0.07,0.58c0,0.11,0.06,0.17,0.19,0.17h1.6c0.91,0,1.68,0.32,2.32,0.95
	c0.64,0.63,0.96,1.39,0.96,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.32,0.97-2.19,1.04c-0.13,0-0.2,0.06-0.2,0.18v1.37
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.38-1.51s1.38-2.11,1.38-3.45c0-0.68-0.16-1.37-0.47-2.07
	C22.6,13.89,23,12.8,23,11.56c0-0.71-0.14-1.39-0.42-2.04c-0.28-0.65-0.65-1.2-1.12-1.67s-1.03-0.84-1.67-1.12
	c-0.65-0.27-1.32-0.41-2.03-0.41c-1.54,0-2.84,0.58-3.88,1.73c-0.86-0.41-1.74-0.62-2.65-0.62c-1.42,0-2.67,0.43-3.76,1.3
	s-1.79,1.99-2.1,3.37c-1.1,0.26-2.01,0.83-2.73,1.73S1.56,15.75,1.56,16.9z M9.06,28.17h0.3l5.32-7.85
	c0.04-0.04,0.05-0.09,0.02-0.14s-0.07-0.07-0.14-0.07h-2.18l2.3-4.21c0.07-0.14,0.03-0.22-0.14-0.22h-2.94
	c-0.08,0-0.15,0.05-0.22,0.14l-2.16,5.72c-0.02,0.14,0.02,0.21,0.14,0.21h2.17L9.06,28.17z M9.94,4.59c0,0.25,0.08,0.46,0.24,0.62
	l0.66,0.65c0.42,0.32,0.82,0.32,1.21,0c0.16-0.18,0.24-0.39,0.24-0.64c0-0.23-0.08-0.43-0.24-0.59l-0.64-0.65
	c-0.19-0.17-0.39-0.25-0.62-0.25c-0.23,0-0.43,0.08-0.6,0.25C10.02,4.15,9.94,4.36,9.94,4.59z M15.28,9.02
	C15.96,8.34,16.79,8,17.76,8c0.98,0,1.81,0.35,2.49,1.04c0.69,0.69,1.03,1.53,1.03,2.52c0,0.61-0.17,1.21-0.51,1.81
	c-0.98-0.94-2.13-1.41-3.46-1.41h-0.31C16.74,10.82,16.16,9.84,15.28,9.02z M16.9,3.73c0,0.25,0.08,0.46,0.24,0.62
	c0.16,0.16,0.36,0.24,0.61,0.24c0.24,0,0.43-0.08,0.59-0.24c0.16-0.16,0.23-0.37,0.23-0.62V1.69c0-0.24-0.08-0.43-0.23-0.59
	c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.23S16.9,1.45,16.9,1.69V3.73z M22.42,6.05c0,0.23,0.09,0.43,0.27,0.6
	c0.18,0.17,0.37,0.25,0.55,0.25c0.16,0,0.37-0.08,0.62-0.25l1.44-1.43c0.17-0.18,0.25-0.39,0.25-0.63c0-0.24-0.08-0.45-0.25-0.61
	c-0.17-0.16-0.37-0.24-0.6-0.24c-0.22,0-0.41,0.08-0.58,0.25l-1.43,1.43C22.51,5.61,22.42,5.82,22.42,6.05z M23.23,17.87
	c0,0.23,0.08,0.43,0.24,0.61l0.65,0.66c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.25c0.17-0.17,0.25-0.38,0.25-0.63
	c0-0.23-0.08-0.42-0.25-0.57l-0.62-0.66c-0.19-0.16-0.39-0.23-0.62-0.23c-0.23,0-0.43,0.08-0.59,0.24
	C23.31,17.44,23.23,17.64,23.23,17.87z M24.68,11.56c0,0.22,0.09,0.41,0.26,0.57c0.17,0.17,0.37,0.25,0.6,0.25h2.04
	c0.24,0,0.44-0.08,0.61-0.24c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.09-0.44-0.26-0.61s-0.37-0.25-0.6-0.25h-2.04
	c-0.23,0-0.43,0.08-0.6,0.25C24.77,11.12,24.68,11.32,24.68,11.56z`}}]})(s)}function h8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.48,16.95c0,1.32,0.46,2.46,1.37,3.4c0.91,0.94,2.04,1.45,3.38,1.51c0.12,0,0.18-0.06,0.18-0.17v-1.33
	c0-0.12-0.06-0.18-0.18-0.18c-0.86-0.04-1.58-0.38-2.17-1s-0.88-1.37-0.88-2.24c0-0.84,0.28-1.58,0.84-2.19
	c0.56-0.62,1.26-0.96,2.1-1.03l0.53-0.08c0.11,0,0.16-0.05,0.16-0.14l0.08-0.55c0.12-1.09,0.59-2,1.38-2.72S10,9.16,11.1,9.16
	s2.05,0.36,2.86,1.08c0.82,0.72,1.28,1.62,1.38,2.69l0.07,0.58c0.02,0.11,0.1,0.17,0.22,0.17h1.6c0.89,0,1.65,0.32,2.29,0.96
	c0.64,0.64,0.96,1.41,0.96,2.31c0,0.87-0.29,1.61-0.88,2.24s-1.31,0.95-2.17,1c-0.13,0-0.2,0.06-0.2,0.18v1.33
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.45-0.54,3.37-1.49c0.91-0.95,1.37-2.09,1.37-3.42c0-0.68-0.13-1.34-0.38-2.01
	c0.78-0.96,1.16-2.08,1.16-3.35c0-0.71-0.14-1.38-0.41-2.03c-0.27-0.65-0.65-1.2-1.12-1.67s-1.03-0.84-1.67-1.12
	s-1.33-0.42-2.04-0.42c-1.54,0-2.83,0.58-3.86,1.74c-0.89-0.44-1.81-0.66-2.74-0.66c-1.41,0-2.66,0.44-3.74,1.31s-1.77,2-2.08,3.38
	c-1.12,0.26-2.04,0.83-2.75,1.73C1.83,14.76,1.48,15.79,1.48,16.95z M6.83,23.98c0,0.17,0.05,0.34,0.16,0.51
	c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.45,0.06,0.64-0.04c0.2-0.09,0.33-0.28,0.4-0.56l0.14-0.61c0.05-0.23,0.02-0.44-0.1-0.63
	c-0.12-0.2-0.29-0.33-0.52-0.4c-0.23-0.07-0.44-0.04-0.64,0.08S7.06,22.97,7,23.2l-0.14,0.59C6.84,23.85,6.83,23.91,6.83,23.98z
	 M7.6,21.08c0,0.22,0.08,0.41,0.24,0.57C8,21.83,8.19,21.91,8.4,21.91c0.24,0,0.44-0.08,0.6-0.24c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.08-0.43-0.25-0.59c-0.17-0.16-0.37-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.23S7.6,20.85,7.6,21.08z M8.21,18.81
	c-0.01,0.16,0.03,0.31,0.13,0.45c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07C9.65,19.4,9.79,19.23,9.86,19
	l0.27-0.9c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07
	c-0.2,0.11-0.34,0.28-0.41,0.5l-0.24,0.92C8.22,18.71,8.21,18.8,8.21,18.81z M9.36,27.1c0,0.17,0.05,0.33,0.16,0.49
	c0.11,0.16,0.27,0.27,0.49,0.33c0.09,0.02,0.17,0.03,0.24,0.03c0.43,0,0.7-0.2,0.8-0.61l0.13-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	s-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51L9.4,26.88C9.37,26.99,9.36,27.07,9.36,27.1z
	 M9.92,4.66c0,0.24,0.08,0.44,0.24,0.6l0.66,0.64c0.14,0.16,0.32,0.24,0.54,0.26c0.22,0.02,0.43-0.07,0.62-0.26
	c0.16-0.16,0.24-0.36,0.24-0.59c0-0.24-0.08-0.44-0.24-0.6l-0.63-0.65C11.2,3.9,11,3.82,10.77,3.8c-0.23,0-0.43,0.08-0.6,0.25
	C10.01,4.22,9.92,4.42,9.92,4.66z M10.15,24.2c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23S10.15,23.97,10.15,24.2z M10.77,21.93c-0.01,0.15,0.03,0.31,0.14,0.47c0.1,0.16,0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.26-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53l-0.22,0.9C10.78,21.74,10.77,21.83,10.77,21.93z M13.53,24.08
	c0,0.17,0.05,0.33,0.15,0.48c0.1,0.15,0.25,0.26,0.46,0.32c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.12-0.21-0.29-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.01,0,0.05-0.01,0.11C13.54,24,13.53,24.04,13.53,24.08z
	 M14.27,21.12c0,0.23,0.08,0.42,0.24,0.57c0.15,0.16,0.34,0.24,0.58,0.24s0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23s-0.43,0.08-0.59,0.23S14.27,20.88,14.27,21.12z M14.88,18.81
	c0,0.17,0.05,0.33,0.16,0.48c0.11,0.15,0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.11,0,0.23-0.03,0.37-0.09c0.21-0.11,0.34-0.28,0.4-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.07-0.63s-0.28-0.33-0.5-0.4
	c-0.23-0.07-0.45-0.05-0.64,0.06c-0.2,0.11-0.33,0.27-0.4,0.51l-0.28,0.91c0,0.02,0,0.05-0.01,0.11
	C14.89,18.73,14.88,18.77,14.88,18.81z M15.23,9.09c0.66-0.66,1.48-0.99,2.47-0.99c0.99,0,1.83,0.34,2.52,1.02s1.04,1.5,1.04,2.48
	c0,0.66-0.18,1.29-0.53,1.88c-0.98-0.98-2.15-1.47-3.5-1.47h-0.31C16.64,10.91,16.07,9.94,15.23,9.09z M16.88,3.83
	c0,0.23,0.08,0.42,0.23,0.58c0.15,0.15,0.35,0.23,0.59,0.23c0.24,0,0.45-0.08,0.62-0.23c0.17-0.15,0.25-0.35,0.25-0.58V1.76
	c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.23,0-0.43,0.08-0.58,0.25c-0.16,0.17-0.23,0.37-0.23,0.6V3.83z
	 M22.4,6.09c0,0.25,0.08,0.45,0.23,0.6c0.36,0.36,0.76,0.36,1.21,0l1.43-1.43c0.17-0.17,0.25-0.38,0.25-0.63
	c0-0.24-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25c-0.23,0-0.43,0.08-0.61,0.24L22.63,5.5C22.48,5.65,22.4,5.84,22.4,6.09z
	 M23.18,17.94c0,0.23,0.09,0.43,0.27,0.59l0.61,0.63c0.2,0.16,0.4,0.24,0.61,0.24c0.2,0,0.4-0.08,0.6-0.24
	c0.17-0.16,0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.62l-0.65-0.61c-0.15-0.17-0.34-0.25-0.57-0.25s-0.43,0.08-0.6,0.25
	C23.27,17.51,23.18,17.71,23.18,17.94z M24.66,11.6c0,0.24,0.09,0.43,0.26,0.59c0.18,0.18,0.39,0.27,0.62,0.27h2.03
	c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61c0-0.24-0.08-0.44-0.24-0.6c-0.16-0.17-0.35-0.25-0.59-0.25h-2.03
	c-0.24,0-0.44,0.08-0.62,0.25S24.66,11.37,24.66,11.6z`}}]})(s)}function v8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.48,16.91c0,1.12,0.33,2.13,1,3.01c0.67,0.88,1.53,1.47,2.58,1.77c0.09,0.01,0.17-0.01,0.24-0.08l1.17-1.41
	c-0.89,0-1.66-0.32-2.3-0.97s-0.96-1.42-0.96-2.33c0-0.83,0.28-1.55,0.85-2.17c0.57-0.61,1.27-0.97,2.11-1.07l0.49-0.03
	c0.13,0,0.2-0.06,0.2-0.19l0.07-0.54c0.11-1.08,0.57-1.99,1.38-2.72s1.77-1.1,2.86-1.1c1.1,0,2.06,0.37,2.88,1.1
	s1.28,1.64,1.39,2.72l0.07,0.59c0.04,0.11,0.12,0.17,0.22,0.17h1.64c0.88,0,1.64,0.32,2.28,0.95c0.64,0.63,0.96,1.4,0.96,2.28
	c0,0.84-0.28,1.58-0.85,2.21c-0.57,0.63-1.25,0.98-2.07,1.05c-0.49,0.06-0.79,0.15-0.9,0.28l-2.19,2.82
	c-0.14,0.19-0.19,0.4-0.16,0.63c0.03,0.23,0.13,0.42,0.31,0.56c0.15,0.17,0.35,0.24,0.6,0.21c0.25-0.03,0.45-0.15,0.6-0.36
	l1.92-2.46c0.82-0.08,1.57-0.35,2.25-0.82c0.68-0.46,1.21-1.06,1.61-1.79c0.39-0.73,0.59-1.51,0.59-2.34c0-0.72-0.14-1.39-0.42-2.01
	c0.79-0.96,1.18-2.07,1.18-3.33c0-0.71-0.14-1.38-0.42-2.03c-0.28-0.65-0.66-1.21-1.13-1.68c-0.47-0.47-1.03-0.84-1.68-1.12
	c-0.65-0.28-1.33-0.42-2.04-0.42c-1.5,0-2.79,0.58-3.88,1.74c-0.79-0.44-1.7-0.66-2.72-0.66c-1.41,0-2.66,0.44-3.75,1.32
	s-1.78,2-2.07,3.37c-1.13,0.26-2.06,0.83-2.79,1.73S1.48,15.76,1.48,16.91z M5.38,25.15c0.07,0.22,0.23,0.38,0.46,0.48
	c0.22,0.1,0.44,0.1,0.67,0.01s0.38-0.25,0.46-0.47c0.09-0.21,0.1-0.41,0-0.62c-0.09-0.21-0.24-0.36-0.45-0.46
	c-0.22-0.1-0.44-0.11-0.66-0.02c-0.22,0.09-0.37,0.24-0.45,0.46C5.32,24.78,5.31,24.99,5.38,25.15z M7.19,22.41v0.11
	c0.02,0.22,0.12,0.4,0.3,0.55c0.18,0.15,0.38,0.22,0.63,0.2c0.24-0.02,0.43-0.12,0.57-0.29l2.18-2.82c0.14-0.18,0.21-0.39,0.19-0.63
	s-0.12-0.43-0.29-0.57c-0.18-0.15-0.39-0.21-0.63-0.19c-0.24,0.02-0.44,0.13-0.6,0.31l-2.15,2.8C7.25,22.04,7.19,22.22,7.19,22.41z
	 M7.7,27.27c0,0.06,0.02,0.16,0.06,0.3c0.09,0.22,0.24,0.37,0.46,0.46c0.11,0.04,0.23,0.07,0.36,0.07c0.09,0,0.2-0.02,0.31-0.05
	c0.21-0.08,0.36-0.23,0.44-0.44c0.1-0.22,0.11-0.44,0.02-0.67c-0.08-0.23-0.23-0.38-0.45-0.46c-0.22-0.1-0.44-0.1-0.67-0.01
	s-0.38,0.24-0.45,0.45C7.73,27.03,7.7,27.15,7.7,27.27z M9.37,24.9V25c0.02,0.23,0.13,0.42,0.33,0.58c0.15,0.16,0.35,0.23,0.6,0.2
	c0.25-0.03,0.45-0.14,0.6-0.34l4.14-5.23c0.14-0.2,0.19-0.41,0.17-0.64s-0.13-0.42-0.31-0.59c-0.18-0.14-0.39-0.2-0.62-0.17
	c-0.23,0.03-0.42,0.13-0.56,0.31l-4.16,5.26C9.43,24.53,9.37,24.71,9.37,24.9z M9.95,4.61c0,0.24,0.09,0.44,0.27,0.59l0.61,0.66
	c0.16,0.16,0.34,0.24,0.54,0.26c0.21,0.03,0.41-0.04,0.61-0.22c0.2-0.18,0.3-0.39,0.3-0.64c0-0.22-0.08-0.43-0.24-0.6L11.4,4.01
	c-0.15-0.16-0.34-0.24-0.58-0.24c-0.24,0-0.45,0.08-0.62,0.24C10.04,4.18,9.95,4.38,9.95,4.61z M12.9,26.04
	c0,0.12,0.02,0.22,0.07,0.31c0.09,0.22,0.24,0.37,0.45,0.46c0.11,0.05,0.22,0.08,0.35,0.08c0.06,0,0.16-0.02,0.3-0.06
	c0.22-0.09,0.38-0.24,0.46-0.46c0.1-0.22,0.11-0.44,0.02-0.66c-0.08-0.22-0.23-0.37-0.45-0.45c-0.22-0.1-0.44-0.11-0.67-0.02
	c-0.23,0.09-0.38,0.24-0.46,0.45C12.92,25.8,12.9,25.92,12.9,26.04z M15.3,9.03c0.71-0.64,1.53-0.97,2.48-0.97
	c0.99,0,1.83,0.34,2.53,1.03s1.05,1.51,1.05,2.49c0,0.66-0.17,1.28-0.52,1.86c-0.97-0.97-2.13-1.45-3.48-1.45h-0.34
	C16.75,10.83,16.18,9.85,15.3,9.03z M16.93,3.77c0,0.23,0.08,0.43,0.25,0.59c0.17,0.16,0.37,0.24,0.6,0.24
	c0.24,0,0.45-0.08,0.62-0.24C18.57,4.2,18.65,4,18.65,3.77V1.7c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25
	c-0.23,0-0.43,0.08-0.6,0.25s-0.25,0.37-0.25,0.6V3.77z M22.5,6.05c0,0.24,0.07,0.44,0.22,0.6c0.18,0.17,0.38,0.25,0.61,0.26
	c0.23,0,0.42-0.08,0.57-0.26L25.4,5.2c0.16-0.16,0.24-0.37,0.24-0.61c0-0.24-0.09-0.44-0.26-0.61c-0.17-0.17-0.37-0.26-0.6-0.26
	c-0.22,0-0.42,0.08-0.6,0.25l-1.45,1.47C22.58,5.61,22.5,5.81,22.5,6.05z M23.28,17.95c0,0.24,0.08,0.44,0.24,0.6l0.66,0.63
	c0.16,0.16,0.34,0.25,0.54,0.27h0.06c0.18,0,0.38-0.09,0.62-0.27c0.16-0.16,0.24-0.36,0.24-0.58c0-0.24-0.08-0.45-0.24-0.63
	l-0.66-0.62c-0.16-0.17-0.36-0.25-0.59-0.25c-0.24,0-0.45,0.08-0.62,0.25C23.37,17.51,23.28,17.72,23.28,17.95z M24.78,11.58
	c0,0.24,0.08,0.44,0.24,0.6c0.16,0.18,0.36,0.27,0.6,0.27h2.04c0.24,0,0.44-0.09,0.61-0.26c0.17-0.17,0.25-0.38,0.25-0.61
	c0-0.23-0.08-0.43-0.25-0.59c-0.17-0.16-0.37-0.24-0.61-0.24h-2.04c-0.24,0-0.44,0.08-0.6,0.24C24.86,11.15,24.78,11.35,24.78,11.58
	z`}}]})(s)}function y8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.51,16.89c0,1.33,0.46,2.48,1.39,3.44s2.06,1.47,3.41,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.34c0-0.11-0.06-0.17-0.17-0.17
	c-0.86-0.04-1.59-0.39-2.19-1.03s-0.9-1.4-0.9-2.26c0-0.82,0.28-1.54,0.85-2.16s1.27-0.97,2.1-1.07l0.53-0.05
	c0.13,0,0.2-0.06,0.2-0.17l0.07-0.54c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.86,1.1
	s1.28,1.64,1.4,2.72l0.07,0.57c0,0.12,0.06,0.19,0.17,0.19h1.62c0.89,0,1.65,0.32,2.3,0.96c0.65,0.64,0.97,1.39,0.97,2.27
	c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.03c-0.12,0-0.19,0.06-0.19,0.17v1.34c0,0.11,0.06,0.17,0.19,0.17
	c1.33-0.04,2.46-0.55,3.39-1.51c0.93-0.97,1.39-2.12,1.39-3.45c0-0.72-0.14-1.39-0.42-2.01c0.78-0.97,1.17-2.07,1.17-3.31
	c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92s-1.68-0.7-2.62-0.7c-1.56,0-2.85,0.58-3.88,1.74
	c-0.82-0.44-1.72-0.66-2.71-0.66c-1.41,0-2.67,0.44-3.76,1.32s-1.79,2-2.1,3.36c-1.11,0.26-2.02,0.84-2.74,1.74
	S1.51,15.74,1.51,16.89z M6.91,23.75c0,0.17,0.05,0.33,0.16,0.49c0.11,0.16,0.27,0.27,0.49,0.33c0.11,0.02,0.2,0.04,0.27,0.04
	c0.39,0,0.65-0.21,0.77-0.64l1.58-5.88c0.07-0.24,0.04-0.46-0.08-0.67c-0.12-0.21-0.3-0.33-0.53-0.38
	c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.34,0.28-0.41,0.51l-1.58,5.91C6.93,23.66,6.91,23.73,6.91,23.75z M9.52,26.83
	c0,0.19,0.05,0.36,0.15,0.52c0.1,0.16,0.27,0.26,0.52,0.3c0.11,0.02,0.2,0.04,0.26,0.04c0.16,0,0.31-0.06,0.45-0.17
	c0.14-0.12,0.23-0.28,0.27-0.48l2.4-8.93c0.06-0.23,0.04-0.45-0.07-0.64s-0.28-0.33-0.5-0.4c-0.23-0.07-0.45-0.05-0.65,0.07
	c-0.2,0.11-0.34,0.28-0.4,0.51l-2.4,8.93C9.53,26.73,9.52,26.82,9.52,26.83z M9.94,4.6c0,0.24,0.08,0.44,0.25,0.61l0.65,0.66
	c0.19,0.15,0.4,0.22,0.62,0.22c0.21,0,0.41-0.08,0.58-0.23c0.17-0.16,0.26-0.35,0.26-0.59c0-0.24-0.08-0.46-0.24-0.64l-0.64-0.65
	c-0.18-0.17-0.38-0.25-0.6-0.25c-0.24,0-0.45,0.09-0.62,0.26C10.03,4.16,9.94,4.37,9.94,4.6z M13.67,23.77
	c0,0.16,0.05,0.32,0.15,0.47s0.26,0.26,0.46,0.32c0.11,0.02,0.2,0.04,0.25,0.04c0.17,0,0.34-0.05,0.49-0.15
	c0.15-0.1,0.25-0.26,0.3-0.49l1.58-5.88c0.06-0.23,0.04-0.45-0.07-0.64c-0.11-0.2-0.28-0.33-0.5-0.4c-0.24-0.07-0.45-0.05-0.65,0.07
	c-0.2,0.11-0.33,0.28-0.39,0.51l-1.58,5.91C13.69,23.68,13.67,23.76,13.67,23.77z M15.3,9.03c0.71-0.67,1.53-1,2.48-1
	c0.98,0,1.82,0.35,2.5,1.04c0.69,0.69,1.03,1.53,1.03,2.52c0,0.62-0.17,1.24-0.52,1.85c-0.97-0.97-2.13-1.45-3.49-1.45h-0.33
	C16.7,10.81,16.14,9.83,15.3,9.03z M16.92,3.78c0,0.23,0.08,0.43,0.25,0.59c0.17,0.16,0.37,0.24,0.61,0.24
	c0.23,0,0.43-0.08,0.59-0.23c0.16-0.16,0.24-0.35,0.24-0.59V1.73c0-0.26-0.08-0.47-0.23-0.63c-0.16-0.16-0.35-0.24-0.59-0.24
	c-0.25,0-0.46,0.08-0.62,0.25s-0.24,0.37-0.24,0.62V3.78z M22.45,6.06c0,0.24,0.09,0.44,0.27,0.59c0.14,0.16,0.32,0.24,0.55,0.26
	c0.23,0.02,0.44-0.07,0.62-0.26l1.44-1.43c0.18-0.17,0.26-0.38,0.26-0.63c0-0.24-0.08-0.45-0.25-0.61
	c-0.17-0.16-0.37-0.24-0.61-0.24c-0.21,0-0.4,0.08-0.58,0.25l-1.43,1.44C22.54,5.6,22.45,5.81,22.45,6.06z M23.26,17.91
	c0,0.24,0.08,0.45,0.24,0.63l0.65,0.63c0.18,0.14,0.38,0.21,0.6,0.21l0.02,0.02c0.23,0,0.42-0.08,0.58-0.24
	c0.16-0.16,0.24-0.37,0.24-0.61c0-0.24-0.09-0.43-0.26-0.58l-0.62-0.66c-0.18-0.16-0.39-0.24-0.62-0.24s-0.43,0.08-0.59,0.25
	S23.26,17.67,23.26,17.91z M24.72,11.58c0,0.24,0.09,0.43,0.26,0.59c0.18,0.18,0.38,0.26,0.62,0.26h2.03c0.24,0,0.44-0.08,0.61-0.25
	c0.17-0.17,0.25-0.37,0.25-0.6c0-0.24-0.08-0.44-0.25-0.61s-0.37-0.26-0.61-0.26H25.6c-0.24,0-0.44,0.09-0.62,0.26
	C24.8,11.14,24.72,11.34,24.72,11.58z`}}]})(s)}function g8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.56,16.88c0,1.33,0.46,2.47,1.39,3.43s2.06,1.46,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.34c0-0.12-0.06-0.18-0.17-0.18
	c-0.85-0.04-1.57-0.38-2.17-1.02s-0.89-1.39-0.89-2.25c0-0.84,0.28-1.56,0.84-2.17s1.26-0.96,2.1-1.06l0.5-0.04
	c0.13,0,0.2-0.06,0.2-0.18l0.06-0.53c0.11-1.08,0.56-1.99,1.37-2.71c0.81-0.73,1.76-1.09,2.86-1.09c1.09,0,2.05,0.36,2.86,1.09
	c0.81,0.73,1.27,1.63,1.37,2.71l0.07,0.57c0,0.12,0.06,0.18,0.18,0.18h1.67c0.88,0,1.63,0.32,2.27,0.96
	c0.64,0.64,0.96,1.39,0.96,2.27c0,0.85-0.3,1.59-0.9,2.22s-1.32,0.98-2.16,1.05c-0.11,0-0.17,0.06-0.17,0.18v1.34
	c0,0.11,0.06,0.17,0.17,0.17c0.88-0.02,1.67-0.26,2.4-0.72s1.3-1.05,1.71-1.8c0.42-0.75,0.62-1.56,0.62-2.44
	c0-0.71-0.14-1.37-0.41-1.96c0.76-0.94,1.13-2.03,1.13-3.28c0-0.71-0.14-1.39-0.41-2.04c-0.27-0.65-0.65-1.2-1.12-1.67
	C21,7.46,20.44,7.09,19.8,6.82c-0.65-0.28-1.33-0.41-2.04-0.41c-1.51,0-2.78,0.55-3.81,1.66c-0.79-0.43-1.7-0.64-2.73-0.64
	c-1.41,0-2.66,0.44-3.75,1.31s-1.77,1.99-2.07,3.35c-1.12,0.26-2.05,0.83-2.77,1.72C1.92,14.7,1.56,15.73,1.56,16.88z M6.97,23.58
	c0,0.18,0.05,0.36,0.16,0.53c0.11,0.18,0.26,0.29,0.45,0.36c0.19,0.07,0.4,0.05,0.61-0.06c0.22-0.11,0.36-0.29,0.44-0.55l0.25-1.05
	c0.07-0.21,0.05-0.41-0.07-0.62c-0.12-0.21-0.29-0.35-0.51-0.42c-0.25-0.06-0.47-0.03-0.67,0.08s-0.32,0.3-0.37,0.53l-0.28,0.99
	C6.98,23.42,6.97,23.49,6.97,23.58z M8.28,18.86c0,0.38,0.21,0.64,0.64,0.79c0.22,0.08,0.43,0.06,0.64-0.05
	c0.21-0.11,0.34-0.29,0.41-0.53l0.24-1.03c0.07-0.21,0.05-0.41-0.07-0.62c-0.11-0.21-0.28-0.35-0.51-0.42
	c-0.24-0.06-0.47-0.04-0.67,0.08s-0.32,0.29-0.37,0.52l-0.3,1.02C8.29,18.7,8.28,18.78,8.28,18.86z M9.5,26.75
	c0,0.16,0.06,0.33,0.17,0.5c0.11,0.17,0.28,0.29,0.49,0.36c0.01,0,0.04,0,0.1,0.01c0.06,0.01,0.11,0.01,0.15,0.01
	c0.14,0,0.26-0.02,0.37-0.07c0.19-0.08,0.33-0.27,0.41-0.58l0.27-0.99c0.07-0.23,0.05-0.45-0.07-0.65c-0.12-0.2-0.29-0.34-0.51-0.4
	c-0.23-0.07-0.45-0.05-0.65,0.07c-0.2,0.12-0.34,0.29-0.4,0.51l-0.28,1.02C9.51,26.63,9.5,26.7,9.5,26.75z M9.96,4.68
	c0,0.25,0.08,0.46,0.25,0.62l0.66,0.65c0.34,0.34,0.73,0.34,1.17,0c0.16-0.17,0.24-0.38,0.24-0.61c0-0.23-0.08-0.43-0.24-0.61
	l-0.63-0.66c-0.16-0.16-0.36-0.24-0.6-0.24c-0.23,0-0.43,0.08-0.6,0.25C10.04,4.24,9.96,4.44,9.96,4.68z M10.85,21.96
	c0,0.17,0.05,0.34,0.16,0.51c0.11,0.17,0.26,0.28,0.47,0.35c0.23,0.07,0.44,0.05,0.64-0.05c0.19-0.1,0.33-0.29,0.4-0.56l0.24-1.01
	c0.07-0.23,0.05-0.45-0.06-0.65c-0.11-0.2-0.28-0.34-0.5-0.41c-0.25-0.07-0.48-0.04-0.68,0.08c-0.2,0.12-0.33,0.3-0.37,0.53
	l-0.28,1.03C10.85,21.81,10.85,21.87,10.85,21.96z M13.63,23.68c0.02,0.38,0.23,0.65,0.63,0.83l0.25,0.04
	c0.16,0,0.32-0.05,0.47-0.16c0.15-0.11,0.26-0.27,0.32-0.5l0.29-1.01c0.06-0.24,0.03-0.46-0.09-0.66c-0.12-0.2-0.3-0.33-0.53-0.37
	c-0.21-0.07-0.41-0.05-0.62,0.07s-0.34,0.29-0.41,0.51l-0.27,1.02c-0.01,0.02-0.01,0.05-0.02,0.08s-0.01,0.06-0.02,0.08
	S13.63,23.66,13.63,23.68z M15.03,18.92c0,0.16,0.05,0.32,0.15,0.48c0.1,0.16,0.25,0.27,0.45,0.32l0.25,0.03
	c0.19,0,0.37-0.06,0.52-0.18s0.24-0.28,0.28-0.47l0.27-0.99c0.07-0.24,0.05-0.45-0.07-0.65c-0.11-0.2-0.28-0.33-0.51-0.39
	c-0.23-0.07-0.45-0.05-0.64,0.06c-0.2,0.11-0.33,0.28-0.39,0.5l-0.3,1.06C15.04,18.77,15.03,18.85,15.03,18.92z M15.36,9.06
	c0.66-0.64,1.46-0.96,2.4-0.96c0.98,0,1.82,0.35,2.51,1.04c0.69,0.69,1.04,1.53,1.04,2.51c0,0.56-0.16,1.15-0.47,1.76
	c-0.96-0.96-2.11-1.43-3.47-1.43h-0.34C16.77,10.84,16.21,9.87,15.36,9.06z M16.9,3.83c0,0.25,0.08,0.45,0.24,0.61
	c0.16,0.16,0.36,0.24,0.61,0.24s0.45-0.08,0.61-0.24c0.16-0.16,0.24-0.36,0.24-0.61V1.81c0-0.25-0.08-0.46-0.24-0.62
	c-0.16-0.16-0.36-0.24-0.61-0.24s-0.45,0.08-0.61,0.24c-0.16,0.16-0.24,0.37-0.24,0.62V3.83z M22.45,6.12
	c0,0.25,0.08,0.45,0.23,0.61c0.21,0.17,0.41,0.25,0.62,0.25c0.19,0,0.38-0.08,0.59-0.25l1.43-1.43c0.16-0.18,0.24-0.39,0.24-0.63
	c0-0.24-0.08-0.44-0.24-0.6c-0.16-0.16-0.36-0.24-0.59-0.24s-0.43,0.08-0.61,0.24L22.68,5.5C22.53,5.68,22.45,5.88,22.45,6.12z
	 M23.24,17.95c0,0.23,0.09,0.44,0.26,0.63l0.62,0.64c0.21,0.21,0.41,0.31,0.62,0.31c0.19,0,0.39-0.1,0.58-0.31
	c0.18-0.18,0.27-0.39,0.26-0.61c-0.01-0.23-0.09-0.43-0.26-0.6l-0.65-0.66c-0.16-0.16-0.35-0.24-0.57-0.24
	c-0.24,0-0.44,0.08-0.61,0.25C23.33,17.52,23.24,17.72,23.24,17.95z M24.71,11.64c0,0.22,0.08,0.42,0.24,0.58
	c0.16,0.16,0.36,0.24,0.58,0.24h2.04c0.26,0,0.47-0.08,0.63-0.23c0.16-0.16,0.24-0.35,0.24-0.59c0-0.25-0.08-0.46-0.25-0.62
	c-0.17-0.16-0.37-0.24-0.62-0.24h-2.04c-0.23,0-0.43,0.08-0.59,0.25C24.79,11.2,24.71,11.41,24.71,11.64z`}}]})(s)}function m8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.49,16.88c0,1.12,0.33,2.12,1,3s1.53,1.47,2.58,1.76l-0.66,1.7c-0.05,0.14,0,0.22,0.14,0.22h2.13l-1.43,4.21h0.29
	l4.36-5.66c0.04-0.04,0.04-0.09,0.02-0.14C9.9,21.92,9.85,21.9,9.78,21.9H7.59l2.49-4.65c0.07-0.14,0.03-0.22-0.14-0.22H6.98
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.88C4.96,19.88,4.36,19.5,3.9,18.9c-0.47-0.59-0.7-1.26-0.7-2.02c0-0.84,0.28-1.57,0.84-2.18
	c0.56-0.61,1.27-0.97,2.11-1.07l0.51-0.03c0.12,0,0.19-0.05,0.22-0.14l0.07-0.59c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.86,1.1s1.29,1.64,1.4,2.72l0.08,0.59c0,0.11,0.06,0.17,0.18,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.97,1.4,0.97,2.29c0,0.87-0.3,1.62-0.9,2.26s-1.32,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c0.88-0.02,1.69-0.26,2.42-0.72c0.73-0.45,1.31-1.06,1.74-1.81s0.64-1.57,0.64-2.45c0-0.73-0.14-1.4-0.43-2.02
	c0.76-0.96,1.14-2.06,1.14-3.29c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71
	c-0.72,0-1.42,0.15-2.1,0.45c-0.68,0.3-1.26,0.72-1.76,1.25c-0.81-0.43-1.71-0.65-2.72-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74C1.85,14.7,1.49,15.73,1.49,16.88z M9.37,27.1c0,0.17,0.05,0.33,0.16,0.49
	c0.11,0.16,0.27,0.27,0.49,0.33c0.09,0.02,0.17,0.03,0.24,0.03c0.43,0,0.7-0.2,0.8-0.61l0.13-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	c-0.12-0.2-0.29-0.32-0.53-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.13,0.59
	C9.38,26.99,9.37,27.07,9.37,27.1z M9.9,4.59c0,0.23,0.08,0.43,0.25,0.6l0.65,0.66c0.16,0.16,0.34,0.24,0.55,0.26
	c0.21,0.03,0.41-0.04,0.61-0.23c0.2-0.18,0.3-0.39,0.3-0.64c0-0.23-0.08-0.43-0.25-0.6l-0.63-0.66c-0.16-0.16-0.36-0.24-0.6-0.24
	c-0.25,0-0.46,0.08-0.63,0.24C9.99,4.16,9.9,4.36,9.9,4.59z M10.16,24.2c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	s-0.43,0.08-0.59,0.23C10.24,23.77,10.16,23.97,10.16,24.2z M10.78,21.93c-0.01,0.15,0.03,0.31,0.14,0.47
	c0.1,0.16,0.25,0.26,0.45,0.3c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.26-0.9c0.07-0.22,0.05-0.43-0.07-0.63
	c-0.12-0.2-0.29-0.33-0.53-0.4c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53l-0.23,0.9C10.79,21.74,10.78,21.83,10.78,21.93z
	 M13.54,24.08c0,0.17,0.05,0.33,0.15,0.48c0.1,0.15,0.25,0.26,0.46,0.32c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.12-0.21-0.29-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08c-0.2,0.12-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.01,0,0.05-0.01,0.11
	C13.55,24,13.54,24.04,13.54,24.08z M14.28,21.12c0,0.23,0.08,0.42,0.24,0.57c0.15,0.16,0.34,0.24,0.58,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23C14.36,20.69,14.28,20.88,14.28,21.12z M15.31,9.02c0.67-0.64,1.48-0.97,2.45-0.97
	c0.98,0,1.82,0.34,2.51,1.03c0.69,0.68,1.04,1.52,1.04,2.5c0,0.66-0.16,1.26-0.47,1.81c-0.96-0.96-2.13-1.44-3.52-1.44h-0.31
	C16.72,10.76,16.15,9.78,15.31,9.02z M16.91,3.75c0,0.24,0.08,0.44,0.25,0.61s0.37,0.25,0.6,0.25c0.24,0,0.44-0.08,0.6-0.25
	c0.16-0.17,0.24-0.37,0.24-0.61V1.69c0-0.24-0.08-0.45-0.24-0.61C18.2,0.91,18,0.82,17.76,0.82c-0.24,0-0.44,0.08-0.6,0.25
	s-0.25,0.37-0.25,0.61V3.75z M22.49,6.04c0,0.24,0.08,0.44,0.23,0.6c0.14,0.16,0.32,0.24,0.55,0.26c0.23,0.02,0.44-0.07,0.63-0.26
	l1.44-1.44c0.18-0.16,0.26-0.36,0.26-0.6s-0.09-0.44-0.26-0.6c-0.16-0.18-0.36-0.26-0.6-0.26c-0.23,0-0.42,0.09-0.58,0.26
	l-1.44,1.44C22.56,5.59,22.49,5.79,22.49,6.04z M23.26,17.95c0,0.23,0.08,0.43,0.25,0.6l0.65,0.63c0.18,0.17,0.39,0.25,0.62,0.25
	l0.02,0.02c0.22,0,0.4-0.09,0.54-0.27c0.18-0.16,0.26-0.36,0.26-0.6c0-0.23-0.09-0.43-0.26-0.61l-0.62-0.62
	c-0.18-0.18-0.38-0.27-0.61-0.27c-0.24,0-0.44,0.09-0.6,0.26C23.35,17.51,23.26,17.72,23.26,17.95z M24.73,11.58
	c0,0.24,0.09,0.44,0.26,0.59c0.16,0.18,0.36,0.26,0.6,0.26h2.06c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6
	s-0.08-0.44-0.25-0.6c-0.17-0.16-0.37-0.24-0.61-0.24h-2.06c-0.24,0-0.45,0.08-0.61,0.24C24.81,11.14,24.73,11.34,24.73,11.58z`}}]})(s)}function x8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.49,16.92L1.49,16.92c0-1.17,0.36-2.19,1.08-3.09s1.64-1.48,2.74-1.74c0.31-1.37,1.01-2.49,2.1-3.38
	c1.1-0.88,2.35-1.32,3.77-1.32c0.99,0,1.9,0.22,2.72,0.66c0.5-0.53,1.09-0.95,1.76-1.25c0.67-0.3,1.37-0.45,2.09-0.45
	c0.95,0,1.83,0.24,2.64,0.71c0.81,0.47,1.45,1.11,1.92,1.92c0.47,0.81,0.71,1.69,0.71,2.64c0,1.23-0.38,2.33-1.14,3.29
	c0.29,0.61,0.43,1.28,0.43,2.02c0,0.88-0.21,1.7-0.64,2.45c-0.42,0.75-1,1.36-1.74,1.81c-0.73,0.46-1.54,0.7-2.42,0.72
	c-0.13,0-0.2-0.06-0.2-0.18v-1.34c0-0.12,0.07-0.18,0.2-0.18c0.86-0.04,1.58-0.39,2.18-1.03c0.6-0.64,0.9-1.4,0.9-2.26
	c0-0.89-0.32-1.65-0.97-2.29s-1.41-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.59c-0.11-1.08-0.58-1.99-1.4-2.72
	c-0.82-0.73-1.78-1.1-2.86-1.1c-1.1,0-2.05,0.37-2.86,1.1c-0.81,0.73-1.27,1.64-1.37,2.72L6.88,13.5c-0.03,0.09-0.11,0.13-0.22,0.13
	l-0.51,0.04c-0.84,0.1-1.55,0.45-2.11,1.06s-0.84,1.34-0.84,2.18v0.05h0.03c0.01,0.98,0.38,1.78,1.11,2.43
	c0.22,0.19,0.47,0.36,0.74,0.49v0.02c0.41,0.19,0.82,0.29,1.21,0.31c0.11,0,0.17,0.06,0.17,0.17v1.34c0,0.11-0.06,0.17-0.17,0.17
	c-0.52-0.03-1.01-0.13-1.48-0.3v0.02c-0.83-0.29-1.54-0.77-2.11-1.43s-0.95-1.44-1.11-2.31v-0.04c-0.01-0.01-0.01-0.02-0.01-0.03
	C1.51,17.54,1.49,17.25,1.49,16.92z M6.99,24.09c0-0.03,0.01-0.07,0.02-0.13c0.01-0.05,0.02-0.09,0.02-0.12l0.09-0.59
	c0.07-0.24,0.2-0.41,0.41-0.53c0.2-0.12,0.43-0.14,0.68-0.08c0.23,0.07,0.39,0.2,0.51,0.41c0.11,0.2,0.13,0.41,0.07,0.62l-0.14,0.6
	c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08,0-0.15-0.01s-0.11-0.01-0.13-0.01c-0.21-0.06-0.36-0.17-0.46-0.33
	C7.04,24.43,6.99,24.26,6.99,24.09z M7.73,21.15c0-0.24,0.08-0.43,0.23-0.59c0.16-0.16,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23
	c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.42-0.23,0.58s-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.57-0.24
	C7.81,21.56,7.73,21.37,7.73,21.15z M9.37,27.13c0-0.04,0.01-0.11,0.04-0.23l0.13-0.58c0.07-0.23,0.21-0.4,0.41-0.51
	c0.21-0.12,0.42-0.14,0.63-0.07c0.23,0.04,0.41,0.17,0.53,0.37c0.12,0.2,0.15,0.43,0.08,0.68l-0.13,0.59
	c-0.1,0.41-0.37,0.61-0.8,0.61c-0.05,0-0.13-0.01-0.24-0.04c-0.22-0.06-0.38-0.17-0.49-0.33C9.42,27.46,9.37,27.3,9.37,27.13z
	 M9.9,4.62c0-0.24,0.08-0.44,0.25-0.6c0.17-0.16,0.38-0.24,0.63-0.24c0.24,0,0.44,0.08,0.6,0.24l0.63,0.66
	c0.17,0.17,0.25,0.37,0.25,0.6c0,0.24-0.1,0.46-0.3,0.64c-0.2,0.18-0.4,0.26-0.61,0.23c-0.21-0.02-0.39-0.11-0.55-0.27l-0.65-0.66
	C9.99,5.05,9.9,4.85,9.9,4.62z M10.16,24.23c0-0.23,0.08-0.43,0.23-0.58c0.16-0.16,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23
	c0.16,0.16,0.23,0.35,0.23,0.58c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.22,0-0.41-0.08-0.58-0.25
	C10.24,24.64,10.16,24.45,10.16,24.23z M10.78,21.96c0-0.09,0.01-0.18,0.03-0.26l0.23-0.9c0.07-0.23,0.21-0.41,0.41-0.53
	c0.21-0.12,0.42-0.15,0.64-0.08c0.24,0.07,0.41,0.2,0.53,0.4c0.12,0.2,0.14,0.4,0.07,0.62l-0.26,0.9c-0.08,0.27-0.22,0.46-0.41,0.57
	s-0.41,0.12-0.64,0.06c-0.2-0.04-0.35-0.14-0.45-0.3C10.81,22.26,10.76,22.11,10.78,21.96z M13.54,24.1c0-0.03,0-0.07,0.01-0.13
	c0.01-0.06,0.01-0.09,0.01-0.11l0.09-0.59c0.07-0.24,0.2-0.41,0.41-0.53c0.2-0.12,0.43-0.14,0.68-0.08c0.23,0.07,0.4,0.21,0.51,0.41
	c0.12,0.21,0.14,0.42,0.07,0.63l-0.14,0.6c-0.1,0.43-0.35,0.65-0.76,0.65c-0.03,0-0.08,0-0.15-0.01c-0.07-0.01-0.11-0.01-0.13-0.01
	c-0.2-0.06-0.35-0.17-0.45-0.33C13.59,24.43,13.54,24.27,13.54,24.1z M14.28,21.16c0-0.24,0.08-0.43,0.23-0.59
	c0.16-0.16,0.35-0.23,0.59-0.23c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.43-0.08-0.58-0.25C14.36,21.57,14.28,21.38,14.28,21.16z M15.31,9.05
	c0.84,0.76,1.4,1.74,1.7,2.93h0.31c1.38,0,2.55,0.48,3.52,1.45c0.31-0.55,0.47-1.16,0.47-1.82c0-0.98-0.35-1.81-1.04-2.5
	c-0.69-0.68-1.53-1.03-2.51-1.03C16.8,8.08,15.98,8.4,15.31,9.05z M16.91,3.78V1.73c0-0.24,0.08-0.44,0.25-0.61
	c0.17-0.17,0.37-0.26,0.6-0.26c0.24,0,0.44,0.08,0.6,0.25c0.16,0.17,0.24,0.38,0.24,0.62v2.05c0,0.24-0.08,0.45-0.24,0.62
	C18.2,4.57,18,4.65,17.76,4.65c-0.23,0-0.43-0.09-0.6-0.26C16.99,4.22,16.91,4.02,16.91,3.78z M22.49,6.07
	c0-0.24,0.08-0.44,0.23-0.6l1.44-1.45c0.15-0.17,0.34-0.25,0.58-0.25c0.24,0,0.44,0.08,0.6,0.25c0.18,0.16,0.26,0.36,0.26,0.6
	c0,0.24-0.09,0.44-0.26,0.6L23.9,6.68c-0.19,0.19-0.4,0.27-0.63,0.26c-0.23-0.02-0.41-0.1-0.55-0.26
	C22.56,6.52,22.49,6.32,22.49,6.07z M23.26,17.98c0-0.24,0.08-0.44,0.25-0.61c0.17-0.17,0.37-0.25,0.6-0.25
	c0.23,0,0.43,0.09,0.61,0.26l0.62,0.63c0.18,0.17,0.26,0.38,0.26,0.61c0,0.24-0.09,0.44-0.26,0.6c-0.14,0.17-0.32,0.26-0.54,0.26
	l-0.02-0.02c-0.24,0-0.44-0.08-0.62-0.24l-0.65-0.64C23.35,18.41,23.26,18.21,23.26,17.98z M24.73,11.61c0-0.24,0.08-0.44,0.25-0.6
	c0.17-0.16,0.37-0.24,0.61-0.24h2.06c0.24,0,0.45,0.08,0.61,0.24s0.25,0.36,0.25,0.6c0,0.24-0.08,0.44-0.25,0.61
	c-0.17,0.17-0.37,0.25-0.61,0.25h-2.06c-0.24,0-0.44-0.09-0.6-0.27C24.81,12.05,24.73,11.85,24.73,11.61z`}}]})(s)}function z8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.49,16.88c0,1.12,0.33,2.12,1,3s1.53,1.47,2.58,1.76l-0.66,1.7c-0.05,0.14,0,0.22,0.14,0.22h2.13l-1.43,4.21h0.29
	l4.36-5.66c0.04-0.04,0.04-0.09,0.02-0.14C9.9,21.92,9.85,21.9,9.78,21.9H7.59l2.49-4.65c0.07-0.14,0.03-0.22-0.14-0.22H6.98
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.88C4.96,19.88,4.36,19.5,3.9,18.9c-0.47-0.59-0.7-1.26-0.7-2.02c0-0.84,0.28-1.57,0.84-2.18
	c0.56-0.61,1.27-0.97,2.11-1.07l0.51-0.03c0.12,0,0.19-0.05,0.22-0.14l0.07-0.59c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.86,1.1s1.29,1.64,1.4,2.72l0.08,0.59c0,0.11,0.06,0.17,0.18,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.97,1.4,0.97,2.29c0,0.87-0.3,1.62-0.9,2.26s-1.32,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c0.88-0.02,1.69-0.26,2.42-0.72c0.73-0.45,1.31-1.06,1.74-1.81s0.64-1.57,0.64-2.45c0-0.73-0.14-1.4-0.43-2.02
	c0.76-0.96,1.14-2.06,1.14-3.29c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71
	c-0.72,0-1.42,0.15-2.1,0.45c-0.68,0.3-1.26,0.72-1.76,1.25c-0.81-0.43-1.71-0.65-2.72-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74C1.85,14.7,1.49,15.73,1.49,16.88z M9.9,4.59c0,0.23,0.08,0.43,0.25,0.6l0.65,0.66
	c0.16,0.16,0.34,0.24,0.55,0.26c0.21,0.03,0.41-0.04,0.61-0.23c0.2-0.18,0.3-0.39,0.3-0.64c0-0.23-0.08-0.43-0.25-0.6l-0.63-0.66
	c-0.16-0.16-0.36-0.24-0.6-0.24c-0.25,0-0.46,0.08-0.63,0.24C9.99,4.16,9.9,4.36,9.9,4.59z M11.08,22.96c0,0.24,0.08,0.44,0.24,0.59
	c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.61-0.24s0.25-0.36,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61s-0.37-0.26-0.61-0.26
	c-0.22,0-0.41,0.09-0.58,0.26S11.08,22.72,11.08,22.96z M11.08,19.32c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.45-0.08,0.61-0.23s0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25
	S11.08,19.09,11.08,19.32z M11.08,26.63c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.61-0.24
	c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.26-0.61-0.26c-0.22,0-0.41,0.09-0.58,0.26
	C11.16,26.19,11.08,26.4,11.08,26.63z M14.31,21.02c0,0.24,0.08,0.44,0.25,0.6s0.36,0.25,0.6,0.25c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.6c0-0.22-0.08-0.42-0.24-0.58c-0.16-0.16-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.6,0.24
	S14.31,20.79,14.31,21.02z M14.31,24.66c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.24
	c0.16-0.16,0.23-0.35,0.23-0.59c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.23
	C14.39,24.22,14.31,24.42,14.31,24.66z M15.31,9.02c0.67-0.64,1.48-0.97,2.45-0.97c0.98,0,1.82,0.34,2.51,1.03
	c0.69,0.68,1.04,1.52,1.04,2.5c0,0.66-0.16,1.26-0.47,1.81c-0.96-0.96-2.13-1.44-3.52-1.44h-0.31C16.72,10.76,16.15,9.78,15.31,9.02
	z M16.91,3.75c0,0.24,0.08,0.44,0.25,0.61s0.37,0.25,0.6,0.25c0.24,0,0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.61V1.69
	c0-0.24-0.08-0.45-0.24-0.61C18.2,0.91,18,0.82,17.76,0.82c-0.24,0-0.44,0.08-0.6,0.25s-0.25,0.37-0.25,0.61V3.75z M22.49,6.04
	c0,0.24,0.08,0.44,0.23,0.6c0.14,0.16,0.32,0.24,0.55,0.26c0.23,0.02,0.44-0.07,0.63-0.26l1.44-1.44c0.18-0.16,0.26-0.36,0.26-0.6
	s-0.09-0.44-0.26-0.6c-0.16-0.18-0.36-0.26-0.6-0.26c-0.23,0-0.42,0.09-0.58,0.26l-1.44,1.44C22.56,5.59,22.49,5.79,22.49,6.04z
	 M23.26,17.95c0,0.23,0.08,0.43,0.25,0.6l0.65,0.63c0.18,0.17,0.39,0.25,0.62,0.25l0.02,0.02c0.22,0,0.4-0.09,0.54-0.27
	c0.18-0.16,0.26-0.36,0.26-0.6c0-0.23-0.09-0.43-0.26-0.61l-0.62-0.62c-0.18-0.18-0.38-0.27-0.61-0.27c-0.24,0-0.44,0.09-0.6,0.26
	C23.35,17.51,23.26,17.72,23.26,17.95z M24.73,11.58c0,0.24,0.09,0.44,0.26,0.59c0.16,0.18,0.36,0.26,0.6,0.26h2.06
	c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6s-0.08-0.44-0.25-0.6c-0.17-0.16-0.37-0.24-0.61-0.24h-2.06
	c-0.24,0-0.45,0.08-0.61,0.24C24.81,11.14,24.73,11.34,24.73,11.58z`}}]})(s)}function M8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.58,16.93c0,0.86,0.21,1.67,0.64,2.41c0.42,0.74,1,1.34,1.74,1.79c0.73,0.45,1.54,0.69,2.4,0.71
	c0.11,0,0.17-0.06,0.17-0.17v-1.33c0-0.12-0.06-0.19-0.17-0.19c-0.85-0.04-1.58-0.38-2.18-1.02s-0.9-1.37-0.9-2.21
	c0-0.82,0.28-1.54,0.85-2.16c0.57-0.61,1.26-0.97,2.1-1.07l0.53-0.06c0.12,0,0.18-0.06,0.18-0.19l0.08-0.51
	c0.11-1.09,0.56-2,1.36-2.73c0.8-0.73,1.75-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.82,0.73,1.28,1.63,1.38,2.7l0.07,0.58
	c0,0.11,0.06,0.17,0.17,0.17h1.61c0.9,0,1.67,0.32,2.31,0.96c0.64,0.64,0.96,1.4,0.96,2.29c0,0.84-0.3,1.57-0.9,2.21
	c-0.6,0.63-1.33,0.97-2.17,1.02c-0.12,0-0.19,0.06-0.19,0.19v1.33c0,0.11,0.06,0.17,0.19,0.17c1.33-0.04,2.45-0.54,3.38-1.5
	c0.93-0.96,1.39-2.09,1.39-3.41c0-0.76-0.14-1.43-0.43-2.03C22.6,13.95,23,12.85,23,11.6c0-0.94-0.23-1.81-0.7-2.61
	c-0.47-0.8-1.11-1.44-1.91-1.91s-1.68-0.7-2.62-0.7c-1.54,0-2.83,0.58-3.87,1.73c-0.81-0.44-1.71-0.66-2.69-0.66
	c-1.41,0-2.65,0.44-3.74,1.31s-1.78,1.99-2.09,3.34c-1.12,0.28-2.03,0.86-2.74,1.75C1.93,14.75,1.58,15.77,1.58,16.93z M7.06,24.61
	c0,0.21,0.08,0.4,0.24,0.57c0.18,0.16,0.37,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23s-0.43,0.08-0.59,0.23C7.14,24.17,7.06,24.37,7.06,24.61z M7.92,20.98
	c0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.35,0.25,0.59,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61
	c0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24S7.92,20.76,7.92,20.98z M9.82,26.56
	c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.6-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	s-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25C9.9,26.13,9.82,26.33,9.82,26.56z M9.97,4.68
	c0,0.24,0.08,0.44,0.24,0.59l0.66,0.66c0.16,0.16,0.34,0.25,0.53,0.25c0.21,0.03,0.41-0.04,0.61-0.22c0.2-0.18,0.3-0.39,0.3-0.63
	c0-0.24-0.08-0.46-0.24-0.64l-0.64-0.61c-0.15-0.17-0.34-0.25-0.58-0.25c-0.25,0-0.46,0.08-0.63,0.25
	C10.05,4.24,9.97,4.44,9.97,4.68z M10.67,22.9c0,0.22,0.08,0.42,0.25,0.6c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.44-0.08,0.61-0.24
	c0.17-0.16,0.25-0.36,0.25-0.6c0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25
	C10.75,22.47,10.67,22.67,10.67,22.9z M11.1,19.3c0,0.23,0.08,0.42,0.24,0.58s0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24
	c0.17-0.16,0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.59s-0.37-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.24S11.1,19.07,11.1,19.3z
	 M13.47,24.61c0,0.21,0.08,0.4,0.23,0.57c0.17,0.16,0.38,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.24S13.47,24.38,13.47,24.61z M14.32,20.98
	c0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.36,0.25,0.59,0.25s0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61
	c0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24s-0.43,0.08-0.59,0.24S14.32,20.76,14.32,20.98z M15.3,9.06
	c0.69-0.66,1.51-0.99,2.47-0.99c0.97,0,1.8,0.35,2.48,1.04c0.69,0.69,1.03,1.53,1.03,2.49c0,0.62-0.17,1.24-0.51,1.84
	C19.82,12.48,18.66,12,17.3,12h-0.32C16.68,10.83,16.12,9.85,15.3,9.06z M16.9,3.84c0,0.23,0.08,0.43,0.25,0.58s0.37,0.23,0.61,0.23
	s0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58V1.8c0-0.24-0.08-0.44-0.24-0.61S18,0.94,17.77,0.94s-0.43,0.09-0.6,0.26
	c-0.17,0.17-0.26,0.37-0.26,0.6V3.84z M22.42,6.11c0,0.23,0.08,0.43,0.25,0.59c0.15,0.16,0.34,0.24,0.56,0.26s0.43-0.07,0.62-0.26
	l1.43-1.43c0.18-0.18,0.26-0.38,0.26-0.61c0-0.24-0.09-0.44-0.26-0.61c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25
	l-1.43,1.46C22.5,5.67,22.42,5.87,22.42,6.11z M23.22,17.91c0,0.25,0.08,0.46,0.24,0.62l0.64,0.63c0.24,0.16,0.46,0.24,0.64,0.24
	c0.21,0,0.39-0.09,0.56-0.26c0.17-0.17,0.25-0.38,0.25-0.61c0-0.23-0.09-0.42-0.26-0.58l-0.62-0.65c-0.18-0.16-0.38-0.24-0.61-0.24
	s-0.43,0.08-0.59,0.25C23.3,17.47,23.22,17.67,23.22,17.91z M24.67,11.6c0,0.24,0.09,0.43,0.26,0.59c0.17,0.18,0.38,0.27,0.62,0.27
	h2.02c0.23,0,0.43-0.08,0.6-0.25s0.25-0.37,0.25-0.61c0-0.24-0.08-0.44-0.25-0.6s-0.37-0.25-0.6-0.25h-2.02
	c-0.24,0-0.44,0.08-0.62,0.25S24.67,11.37,24.67,11.6z`}}]})(s)}function C8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.58,16.93c0,0.86,0.21,1.67,0.64,2.41c0.42,0.74,1,1.34,1.74,1.79c0.73,0.45,1.54,0.69,2.4,0.71
	c0.11,0,0.17-0.06,0.17-0.17v-1.33c0-0.12-0.06-0.19-0.17-0.19c-0.85-0.04-1.58-0.38-2.18-1.02s-0.9-1.37-0.9-2.21
	c0-0.82,0.28-1.54,0.85-2.16c0.57-0.61,1.26-0.97,2.1-1.07l0.53-0.06c0.12,0,0.18-0.06,0.18-0.19l0.08-0.51
	c0.11-1.09,0.56-2,1.36-2.73c0.8-0.73,1.75-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.82,0.73,1.28,1.63,1.38,2.7l0.07,0.58
	c0,0.11,0.06,0.17,0.17,0.17h1.61c0.9,0,1.67,0.32,2.31,0.96c0.64,0.64,0.96,1.4,0.96,2.29c0,0.84-0.3,1.57-0.9,2.21
	c-0.6,0.63-1.33,0.97-2.17,1.02c-0.12,0-0.19,0.06-0.19,0.19v1.33c0,0.11,0.06,0.17,0.19,0.17c1.33-0.04,2.45-0.54,3.38-1.5
	c0.93-0.96,1.39-2.09,1.39-3.41c0-0.76-0.14-1.43-0.43-2.03C22.6,13.95,23,12.85,23,11.6c0-0.94-0.23-1.81-0.7-2.61
	c-0.47-0.8-1.11-1.44-1.91-1.91s-1.68-0.7-2.62-0.7c-1.54,0-2.83,0.58-3.87,1.73c-0.81-0.44-1.71-0.66-2.69-0.66
	c-1.41,0-2.65,0.44-3.74,1.31s-1.78,1.99-2.09,3.34c-1.12,0.28-2.03,0.86-2.74,1.75C1.93,14.75,1.58,15.77,1.58,16.93z M7.92,20.98
	c0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.35,0.25,0.59,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61
	c0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24S7.92,20.76,7.92,20.98z M7.92,24.61
	c0,0.21,0.08,0.4,0.24,0.57c0.18,0.16,0.37,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.23,0-0.43,0.08-0.59,0.23C8,24.17,7.92,24.37,7.92,24.61z
	 M9.97,4.68c0,0.24,0.08,0.44,0.24,0.59l0.66,0.66c0.16,0.16,0.34,0.25,0.53,0.25c0.21,0.03,0.41-0.04,0.61-0.22
	c0.2-0.18,0.3-0.39,0.3-0.63c0-0.24-0.08-0.46-0.24-0.64l-0.64-0.61c-0.15-0.17-0.34-0.25-0.58-0.25c-0.25,0-0.46,0.08-0.63,0.25
	C10.05,4.24,9.97,4.44,9.97,4.68z M11.1,22.9c0,0.22,0.08,0.42,0.24,0.6c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24
	s0.25-0.36,0.25-0.6c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.6-0.25c-0.23,0-0.42,0.08-0.58,0.25S11.1,22.67,11.1,22.9z M11.1,19.3
	c0,0.23,0.08,0.42,0.24,0.58s0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.08-0.43-0.25-0.59s-0.37-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.24S11.1,19.07,11.1,19.3z M11.1,26.56
	c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.6-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	s-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25C11.18,26.13,11.1,26.33,11.1,26.56z M14.32,20.98
	c0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.36,0.25,0.59,0.25s0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61
	c0-0.23-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24s-0.43,0.08-0.59,0.24S14.32,20.76,14.32,20.98z M14.32,24.61
	c0,0.21,0.08,0.4,0.23,0.57c0.18,0.16,0.38,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.24C14.4,24.18,14.32,24.38,14.32,24.61z
	 M15.3,9.06c0.69-0.66,1.51-0.99,2.47-0.99c0.97,0,1.8,0.35,2.48,1.04c0.69,0.69,1.03,1.53,1.03,2.49c0,0.62-0.17,1.24-0.51,1.84
	C19.82,12.48,18.66,12,17.3,12h-0.32C16.68,10.83,16.12,9.85,15.3,9.06z M16.9,3.84c0,0.23,0.08,0.43,0.25,0.58s0.37,0.23,0.61,0.23
	s0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58V1.8c0-0.24-0.08-0.44-0.24-0.61S18,0.94,17.77,0.94s-0.43,0.09-0.6,0.26
	c-0.17,0.17-0.26,0.37-0.26,0.6V3.84z M22.42,6.11c0,0.23,0.08,0.43,0.25,0.59c0.15,0.16,0.34,0.24,0.56,0.26s0.43-0.07,0.62-0.26
	l1.43-1.43c0.18-0.18,0.26-0.38,0.26-0.61c0-0.24-0.09-0.44-0.26-0.61c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25
	l-1.43,1.46C22.5,5.67,22.42,5.87,22.42,6.11z M23.22,17.91c0,0.25,0.08,0.46,0.24,0.62l0.64,0.63c0.24,0.16,0.46,0.24,0.64,0.24
	c0.21,0,0.39-0.09,0.56-0.26c0.17-0.17,0.25-0.38,0.25-0.61c0-0.23-0.09-0.42-0.26-0.58l-0.62-0.65c-0.18-0.16-0.38-0.24-0.61-0.24
	s-0.43,0.08-0.59,0.25C23.3,17.47,23.22,17.67,23.22,17.91z M24.67,11.6c0,0.24,0.09,0.43,0.26,0.59c0.17,0.18,0.38,0.27,0.62,0.27
	h2.02c0.23,0,0.43-0.08,0.6-0.25s0.25-0.37,0.25-0.61c0-0.24-0.08-0.44-0.25-0.6s-0.37-0.25-0.6-0.25h-2.02
	c-0.24,0-0.44,0.08-0.62,0.25S24.67,11.37,24.67,11.6z`}}]})(s)}function w8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.58,16.89c0,0.87,0.21,1.68,0.64,2.42c0.42,0.75,1,1.35,1.73,1.8c0.73,0.45,1.53,0.69,2.4,0.73
	c0.12,0,0.18-0.06,0.18-0.17v-1.33c0-0.12-0.06-0.19-0.18-0.19c-0.85-0.04-1.58-0.38-2.18-1.02s-0.9-1.38-0.9-2.25
	c0-0.82,0.28-1.54,0.84-2.15s1.26-0.96,2.09-1.06l0.52-0.03c0.12,0,0.19-0.06,0.19-0.18l0.08-0.54c0.11-1.08,0.56-1.98,1.36-2.71
	c0.8-0.73,1.75-1.09,2.85-1.09c1.07,0,2.02,0.36,2.84,1.09c0.82,0.73,1.28,1.63,1.4,2.7l0.07,0.58c0,0.11,0.06,0.17,0.17,0.17h1.62
	c0.88,0,1.65,0.32,2.29,0.96c0.65,0.64,0.97,1.39,0.97,2.26c0,0.86-0.3,1.61-0.9,2.25c-0.6,0.63-1.33,0.97-2.18,1.02
	c-0.12,0-0.18,0.06-0.18,0.19v1.33c0,0.11,0.06,0.17,0.18,0.17c0.87-0.02,1.67-0.26,2.4-0.72s1.31-1.05,1.73-1.8
	s0.63-1.56,0.63-2.43c0-0.74-0.14-1.4-0.41-2c0.78-0.95,1.16-2.05,1.16-3.3c0-0.94-0.23-1.82-0.7-2.62s-1.1-1.44-1.9-1.9
	c-0.8-0.47-1.67-0.7-2.61-0.7c-1.55,0-2.84,0.58-3.87,1.73c-0.82-0.44-1.72-0.66-2.69-0.66c-1.41,0-2.65,0.44-3.74,1.31
	s-1.78,1.99-2.09,3.34c-1.1,0.26-2.01,0.84-2.72,1.73C1.93,14.73,1.58,15.75,1.58,16.89z M7.48,17.77c0,0.38,0.14,0.71,0.42,0.98
	s0.62,0.4,1.01,0.4c0.4,0,0.73-0.13,1-0.4c0.27-0.27,0.4-0.59,0.4-0.98c0-0.24-0.12-0.58-0.35-1c-0.23-0.43-0.45-0.76-0.65-0.99
	c-0.21-0.22-0.35-0.37-0.4-0.42l-0.36,0.4c-0.27,0.29-0.52,0.63-0.74,1.03S7.48,17.52,7.48,17.77z M9.97,4.66
	c0,0.26,0.08,0.46,0.24,0.61l0.65,0.66c0.42,0.31,0.82,0.31,1.21,0c0.16-0.19,0.24-0.41,0.24-0.64c0-0.23-0.08-0.43-0.24-0.59
	l-0.64-0.65c-0.19-0.17-0.39-0.25-0.61-0.25c-0.24,0-0.45,0.08-0.61,0.25C10.05,4.22,9.97,4.42,9.97,4.66z M10.45,21.73
	c0,0.66,0.23,1.21,0.68,1.65s1,0.67,1.65,0.67c0.65,0,1.2-0.23,1.66-0.68c0.46-0.46,0.68-1,0.68-1.64c0-0.54-0.27-1.19-0.81-1.97
	c-0.46-0.61-0.89-1.1-1.28-1.49c-0.08-0.06-0.17-0.13-0.26-0.23l-0.23,0.23c-0.36,0.32-0.78,0.82-1.27,1.47
	C10.73,20.5,10.45,21.16,10.45,21.73z M11.93,15.11c0,0.25,0.1,0.47,0.29,0.65c0.19,0.18,0.42,0.27,0.69,0.27
	c0.26,0,0.48-0.09,0.66-0.27c0.18-0.18,0.27-0.4,0.27-0.65c0-0.41-0.31-0.95-0.93-1.6l-0.24,0.25c-0.18,0.2-0.35,0.43-0.5,0.7
	C12,14.73,11.93,14.94,11.93,15.11z M15.3,9.06c0.66-0.66,1.48-0.99,2.47-0.99c0.98,0,1.8,0.34,2.49,1.03
	c0.68,0.69,1.03,1.52,1.03,2.5c0,0.59-0.17,1.2-0.52,1.84C19.8,12.48,18.64,12,17.3,12h-0.33C16.68,10.84,16.12,9.86,15.3,9.06z
	 M16.9,3.8c0,0.24,0.09,0.44,0.26,0.61c0.17,0.17,0.37,0.25,0.6,0.25s0.43-0.08,0.58-0.25c0.16-0.17,0.23-0.37,0.23-0.61V1.76
	c0-0.24-0.08-0.43-0.23-0.59S18,0.94,17.77,0.94s-0.44,0.08-0.61,0.23S16.9,1.52,16.9,1.76V3.8z M22.42,6.11
	c0,0.24,0.08,0.44,0.25,0.59c0.17,0.16,0.36,0.24,0.56,0.24c0.17,0,0.38-0.08,0.61-0.24l1.43-1.43c0.18-0.18,0.27-0.39,0.27-0.62
	c0-0.24-0.08-0.45-0.25-0.61c-0.17-0.16-0.37-0.24-0.61-0.24c-0.22,0-0.41,0.08-0.58,0.25l-1.43,1.43
	C22.5,5.65,22.42,5.86,22.42,6.11z M23.22,17.89c0,0.25,0.08,0.46,0.23,0.64l0.65,0.58c0.14,0.18,0.34,0.27,0.59,0.27
	c0.24,0,0.44-0.09,0.58-0.27c0.18-0.16,0.27-0.36,0.27-0.58c0-0.22-0.09-0.41-0.27-0.58l-0.61-0.65c-0.18-0.16-0.38-0.24-0.61-0.24
	c-0.24,0-0.44,0.08-0.6,0.24S23.22,17.66,23.22,17.89z M24.67,11.6c0,0.22,0.08,0.42,0.25,0.58c0.17,0.16,0.38,0.24,0.63,0.24h2.02
	c0.24,0,0.44-0.08,0.6-0.24c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.08-0.44-0.25-0.6s-0.37-0.25-0.6-0.25h-2.02
	c-0.24,0-0.44,0.08-0.62,0.25S24.67,11.37,24.67,11.6z`}}]})(s)}function S8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.49,16.88c0,1.12,0.33,2.12,1,3s1.53,1.47,2.58,1.76l-0.66,1.7c-0.05,0.14,0,0.22,0.14,0.22h2.13l-1.43,4.21h0.29
	l4.36-5.66c0.04-0.04,0.04-0.09,0.02-0.14C9.9,21.92,9.85,21.9,9.78,21.9H7.59l2.49-4.65c0.07-0.14,0.03-0.22-0.14-0.22H6.98
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.88C4.96,19.88,4.36,19.5,3.9,18.9c-0.47-0.59-0.7-1.26-0.7-2.02c0-0.84,0.28-1.57,0.84-2.18
	c0.56-0.61,1.27-0.97,2.11-1.07l0.51-0.03c0.12,0,0.19-0.05,0.22-0.14l0.07-0.59c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.86,1.1s1.29,1.64,1.4,2.72l0.08,0.59c0,0.11,0.06,0.17,0.18,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.97,1.4,0.97,2.29c0,0.87-0.3,1.62-0.9,2.26s-1.32,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c0.88-0.02,1.69-0.26,2.42-0.72c0.73-0.45,1.31-1.06,1.74-1.81s0.64-1.57,0.64-2.45c0-0.73-0.14-1.4-0.43-2.02
	c0.76-0.96,1.14-2.06,1.14-3.29c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71
	c-0.72,0-1.42,0.15-2.1,0.45c-0.68,0.3-1.26,0.72-1.76,1.25c-0.81-0.43-1.71-0.65-2.72-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74C1.85,14.7,1.49,15.73,1.49,16.88z M9.67,26.8c0,0.15,0.05,0.31,0.16,0.47
	c0.11,0.16,0.26,0.27,0.46,0.34c0.11,0.03,0.2,0.04,0.25,0.04c0.15,0,0.28-0.03,0.38-0.08c0.21-0.08,0.36-0.27,0.43-0.57l0.27-1.03
	c0.06-0.25,0.03-0.47-0.08-0.67s-0.3-0.32-0.53-0.37c-0.21-0.07-0.41-0.04-0.62,0.07c-0.21,0.12-0.35,0.29-0.42,0.52l-0.25,1.04
	C9.69,26.7,9.67,26.78,9.67,26.8z M9.9,4.59c0,0.23,0.08,0.43,0.25,0.6l0.65,0.66c0.16,0.16,0.34,0.24,0.55,0.26
	c0.21,0.03,0.41-0.04,0.61-0.23c0.2-0.18,0.3-0.39,0.3-0.64c0-0.23-0.08-0.43-0.25-0.6l-0.63-0.66c-0.16-0.16-0.36-0.24-0.6-0.24
	c-0.25,0-0.46,0.08-0.63,0.24C9.99,4.16,9.9,4.36,9.9,4.59z M11.01,22c-0.01,0.16,0.04,0.32,0.14,0.47c0.1,0.15,0.26,0.26,0.48,0.32
	c0.21,0.07,0.42,0.05,0.62-0.06c0.2-0.11,0.34-0.3,0.42-0.56l0.3-1.03c0.07-0.22,0.04-0.43-0.08-0.63s-0.3-0.34-0.54-0.41
	c-0.23-0.07-0.44-0.05-0.64,0.07c-0.2,0.12-0.34,0.29-0.41,0.53l-0.24,1.05C11.03,21.9,11.01,21.98,11.01,22z M13.84,23.68
	c0,0.14,0.03,0.28,0.1,0.39c0.13,0.21,0.31,0.36,0.54,0.43c0.11,0.04,0.21,0.06,0.28,0.06c0.13,0,0.23-0.02,0.31-0.08
	c0.2-0.07,0.35-0.27,0.45-0.6l0.25-1.01c0.07-0.24,0.05-0.45-0.07-0.65c-0.11-0.2-0.28-0.33-0.51-0.39
	c-0.23-0.07-0.45-0.05-0.65,0.07c-0.2,0.11-0.34,0.28-0.41,0.51l-0.28,1.04C13.85,23.53,13.84,23.61,13.84,23.68z M15.21,18.86
	c0,0.18,0.05,0.34,0.16,0.5c0.11,0.16,0.27,0.27,0.49,0.33c0.17,0.06,0.37,0.04,0.61-0.05c0.2-0.09,0.34-0.28,0.43-0.57l0.27-1
	c0.06-0.25,0.04-0.47-0.08-0.67s-0.29-0.32-0.53-0.37c-0.23-0.07-0.44-0.05-0.64,0.06c-0.2,0.11-0.33,0.28-0.4,0.5l-0.29,1.06
	C15.22,18.79,15.21,18.86,15.21,18.86z M15.31,9.02c0.67-0.64,1.48-0.97,2.45-0.97c0.98,0,1.82,0.34,2.51,1.03
	c0.69,0.68,1.04,1.52,1.04,2.5c0,0.66-0.16,1.26-0.47,1.81c-0.96-0.96-2.13-1.44-3.52-1.44h-0.31C16.72,10.76,16.15,9.78,15.31,9.02
	z M16.91,3.75c0,0.24,0.08,0.44,0.25,0.61s0.37,0.25,0.6,0.25c0.24,0,0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.61V1.69
	c0-0.24-0.08-0.45-0.24-0.61C18.2,0.91,18,0.82,17.76,0.82c-0.24,0-0.44,0.08-0.6,0.25s-0.25,0.37-0.25,0.61V3.75z M22.49,6.04
	c0,0.24,0.08,0.44,0.23,0.6c0.14,0.16,0.32,0.24,0.55,0.26c0.23,0.02,0.44-0.07,0.63-0.26l1.44-1.44c0.18-0.16,0.26-0.36,0.26-0.6
	s-0.09-0.44-0.26-0.6c-0.16-0.18-0.36-0.26-0.6-0.26c-0.23,0-0.42,0.09-0.58,0.26l-1.44,1.44C22.56,5.59,22.49,5.79,22.49,6.04z
	 M23.26,17.95c0,0.23,0.08,0.43,0.25,0.6l0.65,0.63c0.18,0.17,0.39,0.25,0.62,0.25l0.02,0.02c0.22,0,0.4-0.09,0.54-0.27
	c0.18-0.16,0.26-0.36,0.26-0.6c0-0.23-0.09-0.43-0.26-0.61l-0.62-0.62c-0.18-0.18-0.38-0.27-0.61-0.27c-0.24,0-0.44,0.09-0.6,0.26
	C23.35,17.51,23.26,17.72,23.26,17.95z M24.73,11.58c0,0.24,0.09,0.44,0.26,0.59c0.16,0.18,0.36,0.26,0.6,0.26h2.06
	c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6s-0.08-0.44-0.25-0.6c-0.17-0.16-0.37-0.24-0.61-0.24h-2.06
	c-0.24,0-0.45,0.08-0.61,0.24C24.81,11.14,24.73,11.34,24.73,11.58z`}}]})(s)}function k8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.09,13.43c0,0.27,0.09,0.49,0.28,0.67s0.43,0.26,0.72,0.26h1.69c0.27,0,0.5-0.09,0.69-0.27s0.29-0.4,0.29-0.66
	c0-0.29-0.09-0.53-0.28-0.71s-0.42-0.28-0.69-0.28H4.09c-0.29,0-0.53,0.09-0.72,0.28C3.18,12.89,3.09,13.13,3.09,13.43z M4.86,19.61
	c0,0.97,0.35,1.81,1.06,2.52c0.71,0.71,1.54,1.06,2.51,1.06h6.86c0.97,0,1.8-0.35,2.49-1.05c0.69-0.7,1.04-1.54,1.04-2.53
	c0-0.48-0.07-0.89-0.21-1.23c0.83-0.53,1.49-1.24,1.97-2.12c0.48-0.88,0.73-1.83,0.73-2.84c0-0.81-0.16-1.59-0.48-2.33
	c-0.32-0.74-0.75-1.38-1.28-1.91c-0.53-0.53-1.17-0.96-1.91-1.28c-0.74-0.32-1.51-0.48-2.32-0.48c-1.09,0-2.1,0.27-3.02,0.81
	s-1.65,1.27-2.18,2.18c-0.53,0.92-0.79,1.92-0.79,3.01v0.34c-1,0.57-1.66,1.4-1.98,2.49c-0.76,0.24-1.36,0.66-1.81,1.27
	C5.09,18.13,4.86,18.83,4.86,19.61z M6.42,5.45c0,0.28,0.09,0.51,0.26,0.67l1.61,1.69c0.47,0.36,0.94,0.36,1.41,0
	c0.19-0.19,0.28-0.42,0.28-0.7c0-0.27-0.09-0.5-0.28-0.7L8.05,4.76C7.84,4.57,7.6,4.47,7.35,4.47c-0.28,0-0.51,0.09-0.68,0.28
	C6.5,4.94,6.42,5.17,6.42,5.45z M6.84,19.61c0-0.42,0.13-0.78,0.4-1.08c0.27-0.3,0.61-0.47,1.02-0.51l0.62-0.08
	c0.13,0,0.2-0.08,0.2-0.23l0.09-0.56c0.07-0.58,0.31-1.06,0.73-1.44c0.42-0.39,0.91-0.58,1.48-0.58c0.58,0,1.09,0.19,1.51,0.58
	c0.43,0.39,0.68,0.87,0.75,1.44l0.08,0.65c0.06,0.15,0.14,0.23,0.24,0.23h1.32c0.43,0,0.8,0.16,1.12,0.47
	c0.32,0.31,0.47,0.68,0.47,1.12c0,0.45-0.16,0.83-0.47,1.15s-0.69,0.48-1.12,0.48H8.43c-0.45,0-0.83-0.16-1.13-0.48
	C6.99,20.45,6.84,20.06,6.84,19.61z M11.26,13.22c0.07-1.09,0.49-2.01,1.27-2.76c0.77-0.74,1.71-1.12,2.79-1.12
	c1.11,0,2.06,0.4,2.84,1.19c0.78,0.79,1.17,1.76,1.17,2.89c0,0.7-0.17,1.35-0.51,1.95c-0.34,0.6-0.8,1.08-1.38,1.45
	c-0.59-0.49-1.27-0.73-2.03-0.73c-0.29-0.88-0.81-1.57-1.54-2.09c-0.73-0.52-1.56-0.78-2.48-0.78H11.26z M14.35,4.47
	c0,0.27,0.1,0.51,0.29,0.7c0.19,0.19,0.42,0.29,0.69,0.29c0.28,0,0.51-0.1,0.7-0.29c0.19-0.19,0.29-0.42,0.29-0.7V2.13
	c0-0.26-0.1-0.48-0.29-0.66c-0.19-0.18-0.42-0.27-0.7-0.27c-0.27,0-0.5,0.09-0.69,0.27c-0.19,0.18-0.29,0.4-0.29,0.66V4.47z
	 M20.67,19.7c0,0.27,0.09,0.5,0.27,0.7l1.64,1.62c0.42,0.42,0.89,0.42,1.41,0c0.18-0.17,0.26-0.39,0.26-0.68
	c0-0.27-0.09-0.49-0.26-0.67L22.3,19c-0.18-0.17-0.41-0.25-0.68-0.25c-0.28,0-0.5,0.09-0.68,0.27C20.76,19.2,20.67,19.43,20.67,19.7
	z M20.67,7.09c0,0.28,0.09,0.52,0.27,0.72c0.18,0.18,0.41,0.27,0.68,0.27c0.27,0,0.5-0.09,0.68-0.27l1.69-1.69
	c0.18-0.17,0.26-0.39,0.26-0.67c0-0.28-0.1-0.51-0.29-0.69s-0.42-0.28-0.7-0.28c-0.26,0-0.49,0.1-0.68,0.29L20.94,6.4
	C20.76,6.58,20.67,6.81,20.67,7.09z M23.25,13.43c0,0.27,0.09,0.49,0.28,0.67s0.43,0.26,0.72,0.26h1.69c0.27,0,0.5-0.09,0.69-0.27
	s0.29-0.4,0.29-0.66c0-0.29-0.09-0.53-0.28-0.71s-0.42-0.28-0.69-0.28h-1.69c-0.29,0-0.53,0.09-0.72,0.28
	C23.35,12.89,23.25,13.13,23.25,13.43z`}}]})(s)}function _8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.37,14.62c0-0.24,0.08-0.45,0.25-0.62c0.17-0.16,0.38-0.24,0.6-0.24h2.04c0.23,0,0.42,0.08,0.58,0.25
	c0.15,0.17,0.23,0.37,0.23,0.61S8,15.06,7.85,15.23c-0.15,0.17-0.35,0.25-0.58,0.25H5.23c-0.23,0-0.43-0.08-0.6-0.25
	C4.46,15.06,4.37,14.86,4.37,14.62z M7.23,21.55c0-0.23,0.08-0.43,0.23-0.61l1.47-1.43c0.15-0.16,0.35-0.23,0.59-0.23
	c0.24,0,0.44,0.08,0.6,0.23s0.24,0.34,0.24,0.57c0,0.24-0.08,0.46-0.24,0.64L8.7,22.14c-0.41,0.32-0.82,0.32-1.23,0
	C7.31,21.98,7.23,21.78,7.23,21.55z M7.23,7.71c0-0.23,0.08-0.43,0.23-0.61C7.66,6.93,7.87,6.85,8.1,6.85
	c0.22,0,0.42,0.08,0.59,0.24l1.43,1.47c0.16,0.15,0.24,0.35,0.24,0.59c0,0.24-0.08,0.44-0.24,0.6s-0.36,0.24-0.6,0.24
	c-0.24,0-0.44-0.08-0.59-0.24L7.47,8.32C7.31,8.16,7.23,7.95,7.23,7.71z M9.78,14.62c0-0.93,0.23-1.8,0.7-2.6s1.1-1.44,1.91-1.91
	s1.67-0.7,2.6-0.7c0.7,0,1.37,0.14,2.02,0.42c0.64,0.28,1.2,0.65,1.66,1.12c0.47,0.47,0.84,1.02,1.11,1.66
	c0.27,0.64,0.41,1.32,0.41,2.02c0,0.94-0.23,1.81-0.7,2.61c-0.47,0.8-1.1,1.43-1.9,1.9c-0.8,0.47-1.67,0.7-2.61,0.7
	s-1.81-0.23-2.61-0.7c-0.8-0.47-1.43-1.1-1.9-1.9C10.02,16.43,9.78,15.56,9.78,14.62z M11.48,14.62c0,0.98,0.34,1.81,1.03,2.5
	c0.68,0.69,1.51,1.04,2.49,1.04s1.81-0.35,2.5-1.04s1.04-1.52,1.04-2.5c0-0.96-0.35-1.78-1.04-2.47c-0.69-0.68-1.52-1.02-2.5-1.02
	c-0.97,0-1.8,0.34-2.48,1.02C11.82,12.84,11.48,13.66,11.48,14.62z M14.14,22.4c0-0.24,0.08-0.44,0.25-0.6s0.37-0.24,0.6-0.24
	c0.24,0,0.45,0.08,0.61,0.24s0.24,0.36,0.24,0.6v1.99c0,0.24-0.08,0.45-0.25,0.62c-0.17,0.17-0.37,0.25-0.6,0.25
	s-0.44-0.08-0.6-0.25c-0.17-0.17-0.25-0.38-0.25-0.62V22.4z M14.14,6.9V4.86c0-0.23,0.08-0.43,0.25-0.6C14.56,4.09,14.76,4,15,4
	s0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6V6.9c0,0.23-0.08,0.42-0.25,0.58S15.23,7.71,15,7.71s-0.44-0.08-0.6-0.23
	S14.14,7.13,14.14,6.9z M19.66,20.08c0-0.23,0.08-0.42,0.23-0.56c0.15-0.16,0.34-0.23,0.56-0.23c0.24,0,0.44,0.08,0.6,0.23
	l1.46,1.43c0.16,0.17,0.24,0.38,0.24,0.61c0,0.23-0.08,0.43-0.24,0.59c-0.4,0.31-0.8,0.31-1.2,0l-1.42-1.42
	C19.74,20.55,19.66,20.34,19.66,20.08z M19.66,9.16c0-0.25,0.08-0.45,0.23-0.59l1.42-1.47c0.17-0.16,0.37-0.24,0.59-0.24
	c0.24,0,0.44,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6c0,0.25-0.08,0.46-0.24,0.62l-1.46,1.43c-0.18,0.16-0.38,0.24-0.6,0.24
	c-0.23,0-0.41-0.08-0.56-0.24S19.66,9.4,19.66,9.16z M21.92,14.62c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.35-0.24,0.57-0.24h2.02
	c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6s-0.09,0.43-0.26,0.6c-0.17,0.17-0.37,0.25-0.6,0.25h-2.02
	c-0.23,0-0.43-0.08-0.58-0.25S21.92,14.86,21.92,14.62z`}}]})(s)}function L8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.52,16.9c0,1.11,0.33,2.09,0.98,2.96s1.51,1.46,2.57,1.78l-0.64,1.7c-0.04,0.14,0,0.21,0.14,0.21H6.7L5.45,27.5h0.29
	l4.17-5.39c0.04-0.04,0.04-0.09,0.01-0.14C9.9,21.92,9.85,21.9,9.78,21.9H7.61l2.47-4.63c0.07-0.14,0.02-0.22-0.14-0.22H7
	c-0.09,0-0.17,0.05-0.23,0.14L5.7,20.07c-0.71-0.18-1.3-0.57-1.77-1.16c-0.47-0.59-0.7-1.26-0.7-2.01c0-0.83,0.28-1.55,0.85-2.17
	s1.27-0.97,2.1-1.07L6.7,13.6c0.13,0,0.2-0.06,0.2-0.18l0.06-0.51c0.11-1.08,0.57-1.99,1.38-2.72c0.81-0.73,1.77-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.85,1.1s1.28,1.64,1.4,2.72l0.06,0.58c0,0.11,0.06,0.17,0.18,0.17h1.61c0.91,0,1.68,0.32,2.32,0.95
	c0.64,0.63,0.96,1.39,0.96,2.29c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.32,0.97-2.19,1.04c-0.13,0-0.2,0.06-0.2,0.18v1.37
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.39-1.51c0.93-0.96,1.39-2.11,1.39-3.45c0-0.74-0.14-1.41-0.43-2.01
	c0.79-0.96,1.18-2.06,1.18-3.32c0-0.94-0.24-1.81-0.71-2.62c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.68-0.71-2.62-0.71
	c-1.54,0-2.84,0.58-3.88,1.73c-0.81-0.43-1.71-0.65-2.7-0.65c-1.41,0-2.67,0.44-3.76,1.31s-1.79,1.99-2.1,3.36
	c-1.11,0.26-2.02,0.83-2.73,1.73S1.52,15.75,1.52,16.9z M9.61,26.48c-0.01,0.15,0.03,0.3,0.14,0.44s0.26,0.25,0.46,0.33
	c0.07,0.02,0.14,0.03,0.21,0.03c0.17,0,0.34-0.05,0.51-0.15s0.28-0.26,0.34-0.47l2.29-8.57c0.06-0.23,0.04-0.45-0.07-0.64
	c-0.11-0.2-0.27-0.33-0.49-0.4c-0.23-0.07-0.45-0.05-0.65,0.07c-0.2,0.11-0.34,0.28-0.4,0.51l-2.31,8.6
	C9.62,26.3,9.61,26.39,9.61,26.48z M9.94,4.63c0,0.24,0.08,0.43,0.25,0.59l0.64,0.66C11,6.05,11.2,6.13,11.44,6.14
	c0.24,0,0.43-0.08,0.57-0.26c0.19-0.15,0.28-0.35,0.28-0.6c0-0.24-0.08-0.43-0.25-0.59l-0.63-0.66c-0.17-0.16-0.38-0.24-0.61-0.24
	c-0.25,0-0.46,0.08-0.62,0.24C10.02,4.19,9.94,4.39,9.94,4.63z M13.77,23.43c0,0.12,0.04,0.24,0.11,0.38
	c0.13,0.2,0.29,0.34,0.5,0.43c0.07,0.03,0.17,0.05,0.3,0.05c0.15,0,0.26-0.02,0.33-0.06c0.2-0.08,0.34-0.28,0.41-0.58l1.49-5.55
	c0.06-0.24,0.04-0.45-0.07-0.65c-0.11-0.19-0.28-0.32-0.51-0.39c-0.23-0.07-0.45-0.05-0.64,0.07c-0.2,0.11-0.33,0.28-0.39,0.51
	L13.8,23.2c0,0.02-0.01,0.06-0.02,0.11C13.77,23.37,13.77,23.4,13.77,23.43z M15.3,9.04c0.67-0.64,1.49-0.97,2.48-0.97
	c0.97,0,1.81,0.34,2.5,1.02c0.69,0.68,1.04,1.51,1.04,2.48c0,0.62-0.17,1.24-0.52,1.85c-0.99-0.98-2.16-1.47-3.5-1.47h-0.31
	C16.68,10.78,16.11,9.81,15.3,9.04z M16.91,3.79c0,0.23,0.09,0.43,0.26,0.6s0.37,0.26,0.6,0.26c0.24,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.23-0.37,0.23-0.61V1.73c0-0.24-0.08-0.44-0.23-0.61s-0.35-0.25-0.59-0.25c-0.23,0-0.43,0.08-0.6,0.25
	s-0.26,0.37-0.26,0.61V3.79z M22.44,6.07c0,0.24,0.09,0.44,0.26,0.6c0.14,0.17,0.33,0.25,0.57,0.25s0.44-0.08,0.6-0.25l1.44-1.45
	c0.17-0.16,0.26-0.35,0.26-0.59c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.25-0.61-0.25c-0.22,0-0.41,0.09-0.57,0.26L22.7,5.47
	C22.53,5.63,22.44,5.83,22.44,6.07z M23.25,17.93c0,0.22,0.08,0.42,0.24,0.6l0.66,0.63c0.12,0.14,0.31,0.23,0.54,0.24l0.01,0.01
	c0.01,0,0.03,0,0.05,0c0.02,0,0.03,0,0.05,0c0.19,0,0.36-0.09,0.53-0.26c0.17-0.16,0.26-0.36,0.26-0.6c0-0.23-0.09-0.43-0.26-0.61
	l-0.65-0.61c-0.16-0.18-0.36-0.27-0.58-0.27c-0.23,0-0.43,0.08-0.6,0.25C23.33,17.49,23.25,17.7,23.25,17.93z M24.7,11.58
	c0,0.23,0.09,0.43,0.27,0.6c0.18,0.18,0.38,0.27,0.61,0.27h2.03c0.23,0,0.43-0.09,0.6-0.26s0.26-0.38,0.26-0.61
	c0-0.23-0.08-0.43-0.25-0.59c-0.17-0.16-0.37-0.24-0.61-0.24h-2.03c-0.25,0-0.46,0.08-0.63,0.24C24.78,11.15,24.7,11.35,24.7,11.58z
	`}}]})(s)}function W8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M1.48,21.1c0,0.24,0.09,0.44,0.27,0.6c0.17,0.17,0.37,0.25,0.61,0.25h5.88c0.26,0,0.48,0.09,0.68,0.28
	c0.2,0.19,0.3,0.42,0.3,0.68s-0.1,0.5-0.3,0.69c-0.2,0.19-0.42,0.29-0.68,0.29c-0.26,0-0.48-0.1-0.68-0.3
	c-0.18-0.16-0.38-0.24-0.61-0.24c-0.24,0-0.44,0.08-0.6,0.24c-0.16,0.16-0.24,0.36-0.24,0.6c0,0.24,0.08,0.44,0.24,0.6
	c0.53,0.53,1.16,0.8,1.89,0.8c0.74,0,1.37-0.26,1.88-0.78s0.78-1.15,0.78-1.89s-0.26-1.37-0.78-1.89c-0.52-0.52-1.15-0.78-1.88-0.78
	H2.36c-0.24,0-0.44,0.08-0.62,0.25C1.57,20.67,1.48,20.87,1.48,21.1z M1.48,18.09c0,0.23,0.09,0.42,0.27,0.58
	c0.16,0.16,0.37,0.24,0.61,0.24h10.97c0.74,0,1.37-0.26,1.89-0.78c0.52-0.52,0.78-1.15,0.78-1.89c0-0.74-0.26-1.36-0.78-1.88
	c-0.52-0.51-1.15-0.77-1.89-0.77c-0.76,0-1.38,0.25-1.88,0.76c-0.16,0.16-0.23,0.37-0.23,0.61c0,0.24,0.08,0.44,0.23,0.6
	c0.15,0.15,0.35,0.23,0.6,0.23c0.24,0,0.44-0.08,0.62-0.23c0.19-0.19,0.41-0.28,0.68-0.28s0.49,0.09,0.68,0.28s0.29,0.42,0.29,0.68
	c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.68,0.29H2.36c-0.24,0-0.44,0.09-0.62,0.26C1.57,17.66,1.48,17.86,1.48,18.09z
	 M7.27,11.55c0-0.24,0.09-0.44,0.26-0.62c0.18-0.16,0.38-0.24,0.6-0.24h2.03c0.23,0,0.42,0.08,0.58,0.25
	c0.16,0.17,0.23,0.37,0.23,0.61c0,0.24-0.08,0.44-0.23,0.6c-0.16,0.17-0.35,0.25-0.58,0.25H8.13c-0.24,0-0.44-0.08-0.61-0.25
	C7.35,11.98,7.27,11.78,7.27,11.55z M10.12,4.63c0-0.23,0.08-0.43,0.23-0.61c0.19-0.16,0.41-0.24,0.64-0.24
	c0.22,0,0.42,0.08,0.59,0.24l1.43,1.47c0.16,0.15,0.24,0.35,0.24,0.59c0,0.24-0.08,0.44-0.24,0.6s-0.36,0.24-0.59,0.24
	c-0.24,0-0.44-0.08-0.59-0.24l-1.47-1.43C10.2,5.08,10.12,4.88,10.12,4.63z M12.68,11.43v-0.07c0.02-0.91,0.27-1.75,0.74-2.53
	c0.48-0.77,1.11-1.38,1.9-1.83c0.79-0.45,1.65-0.67,2.57-0.67c0.7,0,1.37,0.14,2.02,0.42c0.64,0.28,1.2,0.65,1.66,1.12
	c0.47,0.47,0.84,1.02,1.11,1.66s0.41,1.32,0.41,2.02c0,0.94-0.23,1.8-0.69,2.6s-1.09,1.43-1.88,1.89c-0.79,0.47-1.66,0.7-2.6,0.71
	h-0.21c-0.07,0-0.13-0.02-0.17-0.07c-0.05-0.05-0.07-0.11-0.07-0.18v-1.22c0-0.13,0.07-0.2,0.22-0.2h0.24
	c0.96-0.01,1.79-0.35,2.47-1.05c0.68-0.69,1.03-1.52,1.03-2.49c0-0.96-0.35-1.78-1.04-2.47c-0.69-0.68-1.52-1.02-2.5-1.02
	c-0.94,0-1.76,0.32-2.44,0.98c-0.68,0.65-1.04,1.44-1.08,2.37c0,0.06-0.03,0.11-0.08,0.17s-0.14,0.09-0.26,0.09H12.9
	C12.75,11.67,12.68,11.59,12.68,11.43z M17.03,21.31v-1.99c0-0.24,0.08-0.44,0.25-0.6s0.37-0.24,0.6-0.24
	c0.25,0,0.45,0.08,0.61,0.24c0.16,0.16,0.24,0.36,0.24,0.6v1.99c0,0.24-0.08,0.45-0.25,0.62c-0.17,0.17-0.37,0.25-0.6,0.25
	c-0.24,0-0.44-0.08-0.6-0.25C17.12,21.76,17.03,21.55,17.03,21.31z M17.03,3.83V1.78c0-0.23,0.08-0.43,0.25-0.6s0.37-0.25,0.6-0.25
	c0.24,0,0.44,0.08,0.6,0.25s0.25,0.37,0.25,0.6v2.04c0,0.23-0.08,0.42-0.25,0.58c-0.17,0.15-0.37,0.23-0.6,0.23
	c-0.24,0-0.44-0.08-0.6-0.23C17.12,4.25,17.03,4.06,17.03,3.83z M22.56,17.01c0-0.23,0.08-0.42,0.23-0.56
	c0.15-0.16,0.34-0.23,0.57-0.23c0.24,0,0.44,0.08,0.6,0.23l1.45,1.42c0.16,0.17,0.24,0.38,0.24,0.61c0,0.23-0.08,0.43-0.24,0.59
	c-0.4,0.31-0.8,0.31-1.2,0l-1.42-1.43C22.63,17.48,22.56,17.26,22.56,17.01z M22.56,6.08c0-0.25,0.08-0.45,0.23-0.59l1.42-1.47
	c0.18-0.16,0.37-0.24,0.59-0.24c0.23,0,0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6c0,0.25-0.08,0.46-0.24,0.62l-1.45,1.43
	c-0.18,0.16-0.38,0.24-0.6,0.24c-0.23,0-0.41-0.08-0.57-0.24C22.63,6.52,22.56,6.32,22.56,6.08z M24.82,11.55
	c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.35-0.24,0.57-0.24h2.02c0.23,0,0.43,0.09,0.61,0.26s0.26,0.37,0.26,0.6
	c0,0.23-0.09,0.43-0.26,0.6c-0.18,0.17-0.38,0.25-0.61,0.25h-2.02c-0.23,0-0.42-0.08-0.58-0.25C24.89,11.99,24.82,11.79,24.82,11.55
	z`}}]})(s)}function E8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M13.19,9.21c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28s-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54c-0.49,0-0.92-0.18-1.28-0.54
	S13.19,9.71,13.19,9.21z M14.07,9.21c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27
	C14.16,8.72,14.07,8.94,14.07,9.21z`}}]})(s)}function N8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M11.83,16.77c0,0.19,0.06,0.35,0.19,0.48c0.13,0.13,0.29,0.19,0.47,0.19h2.87c0.19,0,0.35-0.06,0.47-0.19
	c0.13-0.13,0.19-0.29,0.19-0.48c0-0.19-0.06-0.34-0.19-0.46c-0.13-0.12-0.29-0.18-0.47-0.18h-1.24L18,12.24
	c0.12-0.14,0.18-0.3,0.18-0.5c0-0.18-0.06-0.33-0.18-0.46c-0.12-0.12-0.29-0.18-0.5-0.18c-0.2,0-0.36,0.06-0.48,0.18l-3.86,3.87
	v-1.25c0-0.19-0.06-0.35-0.19-0.48c-0.13-0.13-0.29-0.19-0.48-0.19c-0.19,0-0.35,0.07-0.47,0.2c-0.13,0.13-0.19,0.29-0.19,0.48
	V16.77z`}}]})(s)}function B8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M10.04,10.08c0-0.3,0.09-0.55,0.26-0.73c0.2-0.19,0.46-0.28,0.79-0.28c0.3,0,0.55,0.09,0.73,0.28l6.05,6.05v-1.95
	c0-0.3,0.1-0.55,0.3-0.75s0.45-0.3,0.75-0.3c0.29,0,0.54,0.1,0.74,0.31s0.3,0.45,0.3,0.75v4.48c0,0.3-0.1,0.55-0.3,0.75
	s-0.45,0.3-0.74,0.3h-4.48c-0.29,0-0.54-0.1-0.74-0.3s-0.3-0.45-0.3-0.75c0-0.29,0.1-0.54,0.3-0.73s0.45-0.29,0.74-0.29h1.93
	l-6.08-6.06C10.13,10.63,10.04,10.38,10.04,10.08z`}}]})(s)}function P8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M11.77,16.47c0,0.22,0.08,0.4,0.25,0.55l2.4,2.45c0.16,0.16,0.35,0.23,0.58,0.23c0.24,0,0.43-0.08,0.59-0.23l2.4-2.45
	c0.16-0.14,0.24-0.33,0.24-0.55c0-0.22-0.08-0.41-0.23-0.57s-0.34-0.23-0.56-0.23s-0.42,0.08-0.57,0.23l-1.06,1.05v-6.59
	c0-0.22-0.08-0.41-0.24-0.56C15.42,9.66,15.23,9.58,15,9.58s-0.42,0.07-0.58,0.22c-0.16,0.15-0.24,0.34-0.24,0.56v6.59l-1.06-1.05
	c-0.16-0.16-0.34-0.23-0.55-0.23c-0.22,0-0.42,0.08-0.57,0.23S11.77,16.25,11.77,16.47z`}}]})(s)}function H8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.09,14.96c0,0.37,0.12,0.68,0.37,0.92l3.84,3.75c0.22,0.25,0.51,0.38,0.85,0.38c0.35,0,0.65-0.12,0.89-0.35
	s0.37-0.53,0.37-0.88s-0.12-0.65-0.37-0.89l-1.64-1.64h10.3c0.35,0,0.64-0.12,0.87-0.37s0.34-0.55,0.34-0.9s-0.11-0.65-0.34-0.9
	s-0.52-0.38-0.87-0.39H11.4l1.64-1.66c0.24-0.24,0.37-0.53,0.37-0.86c0-0.35-0.12-0.65-0.37-0.89S12.5,9.9,12.14,9.9
	c-0.32,0-0.61,0.14-0.85,0.41l-3.84,3.75C7.21,14.31,7.09,14.6,7.09,14.96z`}}]})(s)}function T8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.94,14.36c0,0.22,0.08,0.42,0.23,0.57s0.34,0.22,0.56,0.2h6.58l-1.03,1.08c-0.16,0.16-0.24,0.35-0.24,0.55
	c0,0.22,0.08,0.42,0.24,0.57c0.16,0.16,0.35,0.23,0.58,0.23c0.21-0.01,0.39-0.1,0.53-0.27l2.45-2.41c0.16-0.16,0.23-0.35,0.23-0.58
	c-0.01-0.24-0.09-0.43-0.24-0.58l-2.47-2.39c-0.15-0.16-0.33-0.24-0.54-0.23c-0.23,0-0.42,0.07-0.57,0.22
	c-0.16,0.15-0.23,0.34-0.23,0.56c0,0.23,0.08,0.42,0.23,0.57l1.06,1.08h-6.59c-0.23,0.01-0.41,0.09-0.56,0.25
	C10.01,13.95,9.94,14.14,9.94,14.36z`}}]})(s)}function R8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M10.03,14.31V9.84c0-0.3,0.1-0.55,0.3-0.75s0.45-0.3,0.74-0.3h4.48c0.29,0,0.54,0.1,0.74,0.3s0.3,0.45,0.3,0.75
	c0,0.29-0.1,0.53-0.3,0.73s-0.45,0.29-0.74,0.29h-1.95l6.06,6.06c0.18,0.21,0.26,0.46,0.26,0.78c0,0.29-0.09,0.53-0.26,0.72
	c-0.2,0.19-0.46,0.28-0.79,0.28c-0.3,0-0.55-0.09-0.73-0.28l-6.02-6.05v1.95c0,0.3-0.1,0.55-0.3,0.75c-0.2,0.2-0.45,0.3-0.75,0.3
	c-0.29,0-0.54-0.1-0.74-0.31S10.03,14.6,10.03,14.31z`}}]})(s)}function D8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M10.05,17.55c0,0.3,0.09,0.55,0.26,0.73c0.2,0.19,0.46,0.28,0.79,0.28c0.3,0,0.55-0.09,0.73-0.28l6.04-6.05v1.95
	c0,0.3,0.1,0.55,0.3,0.75c0.2,0.2,0.45,0.3,0.75,0.3c0.29,0,0.54-0.1,0.74-0.31s0.3-0.45,0.3-0.75V9.7c0-0.3-0.1-0.55-0.3-0.75
	s-0.45-0.3-0.74-0.3h-4.5c-0.29,0-0.54,0.1-0.73,0.3S13.4,9.39,13.4,9.7c0,0.29,0.1,0.54,0.29,0.73s0.44,0.29,0.73,0.29h1.95
	l-6.06,6.06C10.14,16.99,10.05,17.25,10.05,17.55z`}}]})(s)}function j8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.95,10.87c-0.01,0.35,0.1,0.65,0.34,0.9s0.53,0.37,0.89,0.36c0.34,0.02,0.63-0.1,0.88-0.37l1.66-1.64v10.3
	c-0.01,0.35,0.11,0.64,0.36,0.88s0.55,0.35,0.92,0.34c0.34,0.02,0.64-0.09,0.89-0.32s0.39-0.53,0.4-0.88v-10.3l1.64,1.64
	c0.23,0.24,0.53,0.37,0.88,0.37c0.36,0,0.66-0.12,0.9-0.36s0.36-0.53,0.36-0.89c-0.02-0.36-0.15-0.64-0.4-0.85l-3.74-3.84
	c-0.24-0.23-0.55-0.37-0.92-0.4c-0.37,0.02-0.68,0.16-0.92,0.41l-3.75,3.81C10.08,10.25,9.95,10.53,9.95,10.87z`}}]})(s)}function F8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.33,16.58c0-0.23,0.08-0.41,0.23-0.56c0.16-0.15,0.37-0.22,0.64-0.22h5.71c0.27,0,0.48,0.07,0.64,0.22
	c0.16,0.15,0.23,0.33,0.23,0.56c0,0.27-0.08,0.49-0.23,0.64s-0.37,0.23-0.64,0.23H8.2c-0.27,0-0.48-0.08-0.64-0.23
	S7.33,16.86,7.33,16.58z M7.33,10.67c0-0.22,0.08-0.41,0.23-0.55C7.72,9.97,7.93,9.9,8.2,9.9h2.96c0.27,0,0.48,0.07,0.64,0.22
	c0.16,0.14,0.24,0.33,0.24,0.55c0,0.27-0.08,0.48-0.24,0.64c-0.16,0.16-0.37,0.24-0.64,0.24H8.2c-0.27,0-0.48-0.08-0.64-0.23
	S7.33,10.94,7.33,10.67z M8.32,19.54c0-0.22,0.09-0.42,0.28-0.6c0.18-0.18,0.39-0.28,0.6-0.28c0.26,0,0.46,0.09,0.62,0.27
	s0.24,0.38,0.24,0.61c0,0.27-0.08,0.49-0.23,0.65c-0.15,0.16-0.36,0.23-0.63,0.23c-0.23,0-0.44-0.08-0.61-0.24
	C8.4,20.01,8.32,19.8,8.32,19.54z M9.74,13.61c0-0.23,0.07-0.44,0.22-0.61c0.15-0.18,0.33-0.27,0.54-0.27
	c0.26,0,0.48,0.09,0.64,0.27c0.16,0.18,0.24,0.38,0.24,0.61c0,0.27-0.08,0.49-0.23,0.65c-0.16,0.16-0.37,0.23-0.65,0.23
	c-0.23,0-0.41-0.08-0.55-0.24S9.74,13.88,9.74,13.61z M10.73,19.54c0-0.23,0.08-0.44,0.24-0.61s0.38-0.27,0.64-0.27h3.83l0.88,0.88
	c0,0.26-0.09,0.47-0.27,0.64s-0.38,0.24-0.61,0.24h-3.83c-0.27,0-0.49-0.08-0.65-0.24S10.73,19.81,10.73,19.54z M12.05,13.61
	c0-0.22,0.09-0.42,0.28-0.6c0.18-0.18,0.39-0.28,0.6-0.28h3.83c0.26,0,0.47,0.09,0.63,0.27c0.16,0.18,0.24,0.38,0.24,0.61
	c0,0.27-0.08,0.49-0.23,0.65c-0.16,0.16-0.37,0.23-0.64,0.23h-3.83c-0.23,0-0.44-0.08-0.61-0.24
	C12.14,14.09,12.05,13.88,12.05,13.61z M12.81,10.67c0-0.22,0.08-0.41,0.24-0.55c0.16-0.14,0.37-0.22,0.64-0.22h5.71
	c0.23,0,0.43,0.08,0.61,0.23c0.18,0.15,0.27,0.33,0.27,0.54c0,0.26-0.09,0.48-0.27,0.64c-0.18,0.16-0.38,0.24-0.61,0.24h-5.71
	c-0.27,0-0.49-0.08-0.65-0.24C12.88,11.15,12.81,10.94,12.81,10.67z M15.44,16.58c0-0.21,0.09-0.4,0.27-0.55
	c0.18-0.15,0.38-0.23,0.61-0.23s0.43,0.08,0.61,0.23c0.18,0.15,0.27,0.34,0.27,0.55c0,0.26-0.09,0.47-0.27,0.63
	c-0.18,0.16-0.38,0.24-0.61,0.24c-0.23,0-0.44-0.08-0.61-0.24C15.53,17.06,15.44,16.85,15.44,16.58z M16.98,19.54
	c0-0.23,0.08-0.44,0.24-0.61c0.16-0.18,0.37-0.27,0.63-0.27h1.87c0.26,0,0.47,0.09,0.63,0.26c0.16,0.17,0.24,0.38,0.24,0.62
	c0,0.27-0.08,0.49-0.23,0.65c-0.15,0.16-0.37,0.23-0.64,0.23h-1.87c-0.27,0-0.48-0.08-0.64-0.23
	C17.06,20.03,16.98,19.81,16.98,19.54z M17.85,16.58c0-0.21,0.09-0.4,0.27-0.55c0.18-0.15,0.38-0.23,0.61-0.23h3.07
	c0.22,0,0.4,0.08,0.54,0.23c0.14,0.15,0.22,0.33,0.22,0.55c0,0.27-0.07,0.48-0.21,0.64c-0.14,0.16-0.32,0.23-0.55,0.23h-3.07
	c-0.23,0-0.44-0.08-0.61-0.24C17.94,17.06,17.85,16.85,17.85,16.58z M18.29,13.61c0-0.22,0.09-0.42,0.28-0.6
	c0.18-0.18,0.39-0.28,0.6-0.28h1.96c0.21,0,0.39,0.09,0.54,0.27c0.15,0.18,0.23,0.38,0.23,0.61c0,0.27-0.07,0.48-0.22,0.64
	c-0.14,0.16-0.33,0.24-0.55,0.24h-1.96c-0.23,0-0.44-0.08-0.61-0.24C18.38,14.09,18.29,13.88,18.29,13.61z M21.03,10.67
	c0-0.22,0.07-0.4,0.22-0.55C21.4,9.97,21.58,9.9,21.8,9.9c0.27,0,0.48,0.07,0.64,0.22c0.16,0.14,0.24,0.33,0.24,0.55
	c0,0.27-0.08,0.48-0.24,0.64c-0.16,0.16-0.37,0.24-0.64,0.24c-0.23,0-0.41-0.08-0.55-0.24C21.1,11.15,21.03,10.94,21.03,10.67z`}}]})(s)}function V8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.25,15.3c0,0.16,0.06,0.29,0.17,0.4c0.11,0.11,0.25,0.16,0.4,0.16H8.8c0.14,0,0.27-0.04,0.38-0.13
	c0.11-0.09,0.17-0.2,0.2-0.34l0.9-5.27l1.62,13.18c0.02,0.14,0.09,0.26,0.19,0.36c0.1,0.09,0.22,0.14,0.36,0.14
	c0.15,0,0.28-0.05,0.38-0.14s0.17-0.21,0.2-0.36l1.25-9.67l1.04,2.8c0.04,0.11,0.1,0.2,0.2,0.27s0.2,0.1,0.32,0.1h0.05
	c0.12-0.01,0.23-0.05,0.32-0.13c0.1-0.08,0.16-0.18,0.19-0.31l1.53-6.86l0.71,13.18c0.01,0.14,0.06,0.27,0.15,0.37
	c0.09,0.1,0.21,0.16,0.36,0.17c0.14,0.01,0.27-0.02,0.38-0.1c0.11-0.08,0.18-0.19,0.22-0.33l1.65-6.94h2.77
	c0.16,0,0.29-0.05,0.4-0.16c0.11-0.11,0.17-0.24,0.17-0.4c0-0.16-0.06-0.29-0.17-0.4c-0.11-0.11-0.25-0.17-0.4-0.17h-3.23
	c-0.13,0-0.25,0.04-0.35,0.12s-0.17,0.18-0.2,0.31l-0.83,3.54L18.84,5.33c-0.01-0.14-0.06-0.27-0.16-0.37
	c-0.1-0.1-0.22-0.16-0.36-0.16c-0.14-0.01-0.27,0.02-0.39,0.11s-0.19,0.2-0.22,0.34l-2,8.97l-1.16-3.16
	c-0.04-0.12-0.12-0.21-0.24-0.28s-0.24-0.1-0.36-0.08c-0.13,0.01-0.24,0.07-0.33,0.16c-0.09,0.09-0.15,0.21-0.17,0.34l-0.98,7.51
	L10.94,6.15c-0.03-0.14-0.09-0.26-0.19-0.35c-0.1-0.09-0.22-0.14-0.36-0.15c-0.14-0.01-0.27,0.03-0.38,0.12
	c-0.11,0.09-0.18,0.2-0.2,0.35l-1.48,8.61H5.82c-0.16,0-0.29,0.06-0.4,0.17C5.31,15.01,5.25,15.14,5.25,15.3z`}}]})(s)}function O8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.67,11.01c0-0.5,0.18-0.93,0.53-1.28s0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53c0.35,0.36,0.53,0.78,0.53,1.28
	c0,0.5-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54s-0.92-0.18-1.28-0.54C9.85,11.94,9.67,11.51,9.67,11.01z M10.55,11.01
	c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28s0.48-0.09,0.67-0.28s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66
	c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27C10.64,10.52,10.55,10.74,10.55,11.01z M14.96,17.9
	c0,0.14,0.05,0.27,0.15,0.37s0.23,0.15,0.37,0.15c0.14,0,0.27-0.05,0.37-0.15c0.1-0.1,0.15-0.23,0.15-0.37v-3.79h2.86
	c0.14,0,0.27-0.05,0.37-0.16s0.15-0.23,0.15-0.38c0-0.15-0.05-0.27-0.15-0.38c-0.1-0.1-0.23-0.15-0.38-0.15h-2.86v-2.73h3.82
	c0.14,0,0.26-0.05,0.36-0.15s0.14-0.23,0.14-0.38s-0.05-0.27-0.14-0.38s-0.21-0.15-0.36-0.15h-4.77c-0.07,0-0.1,0.04-0.1,0.11V17.9z
	`}}]})(s)}function I8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.38,21.83c0-0.3,0.1-0.55,0.29-0.76c0.19-0.21,0.43-0.31,0.7-0.31v-0.02l13.16,0.04c0.06-0.01,0.1-0.02,0.1-0.02
	c0.27,0.01,0.51,0.12,0.7,0.33c0.19,0.21,0.29,0.47,0.28,0.77c0,0.3-0.1,0.55-0.29,0.76c-0.19,0.21-0.43,0.31-0.7,0.31v0.01
	L8.59,22.9c-0.1,0.01-0.17,0.02-0.22,0.02c-0.28-0.01-0.51-0.11-0.7-0.32C7.47,22.39,7.37,22.13,7.38,21.83z M8.2,16.37
	c-0.01-0.43,0.04-0.93,0.16-1.52c0.06-0.3,0.2-0.76,0.44-1.37c0.02-0.05,0.07-0.14,0.13-0.28c0.01,0.02,0.03,0.03,0.04,0.05
	s0.02,0.02,0.02,0.03c0.11,0.44,0.27,0.84,0.49,1.2c0.21,0.32,0.48,0.56,0.82,0.69c0.26,0.11,0.63,0.17,1.1,0.18
	c0.02,0,0.05,0,0.08,0c0.03,0,0.06,0,0.08,0c-0.33-0.33-0.59-0.67-0.79-1c-0.3-0.52-0.49-1.12-0.57-1.81
	c-0.06-0.54-0.03-1.19,0.09-1.96c0.02-0.15,0.12-0.49,0.29-1.01c0.15-0.47,0.36-0.9,0.64-1.28C11.54,7.8,12,7.3,12.61,6.78
	c0.37-0.31,0.89-0.67,1.56-1.07c0.07-0.04,0.18-0.11,0.35-0.19c0,0.02,0,0.04,0,0.05s0,0.03,0,0.04v0.02
	c-0.24,0.57-0.41,1.15-0.49,1.73c-0.06,0.53,0.02,1.02,0.24,1.48c0.17,0.36,0.48,0.75,0.92,1.15c0.09,0.09,0.29,0.29,0.6,0.58
	c0.3,0.29,0.54,0.52,0.7,0.68l0.25,0.25c0.26-0.38,0.41-0.83,0.44-1.35c0.04-0.55,0-1.15-0.14-1.8c0-0.01,0-0.04,0.01-0.11
	c0.02,0.02,0.13,0.1,0.3,0.24c0.56,0.5,0.98,0.95,1.28,1.34c0.48,0.62,0.83,1.21,1.06,1.74c0.19,0.46,0.31,0.92,0.38,1.4
	c0.06,0.42,0.08,0.77,0.07,1.05c-0.01,0.78-0.1,1.43-0.25,1.96c-0.07,0.21-0.13,0.38-0.19,0.52c0.25-0.07,0.47-0.16,0.65-0.26
	c0.25-0.16,0.45-0.37,0.6-0.66c0.16-0.29,0.29-0.62,0.38-0.98c0-0.01,0.01-0.03,0.03-0.05c0.01,0.02,0.02,0.05,0.05,0.09
	c0.02,0.04,0.04,0.07,0.05,0.1c0.13,0.31,0.22,0.63,0.27,0.97c0.08,0.38,0.1,0.75,0.08,1.13c-0.02,0.29-0.07,0.56-0.16,0.81
	c-0.08,0.24-0.16,0.43-0.22,0.58c-0.19,0.38-0.39,0.71-0.62,0.98c-0.06,0.07-0.11,0.13-0.14,0.16H9.67
	c-0.01-0.01-0.03-0.03-0.07-0.06s-0.06-0.05-0.08-0.07C9.26,18.98,8.98,18.6,8.7,18.1c-0.08-0.15-0.18-0.38-0.29-0.69
	C8.29,17.1,8.22,16.75,8.2,16.37z`}}]})(s)}function A8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M6.72,20.76c0-0.05,0.01-0.12,0.02-0.21v-4.76c0.28,0.49,0.66,0.89,1.15,1.19c0.49,0.3,1.03,0.45,1.61,0.45
	c0.59,0,1.13-0.15,1.62-0.45c0.49-0.3,0.87-0.69,1.15-1.19c0.27,0.49,0.66,0.89,1.15,1.19c0.49,0.3,1.03,0.45,1.62,0.45
	c0.58,0,1.12-0.15,1.61-0.45c0.49-0.3,0.87-0.69,1.15-1.19c0.28,0.49,0.67,0.89,1.15,1.19c0.49,0.3,1.02,0.45,1.6,0.45
	c0.58,0,1.12-0.15,1.61-0.45c0.49-0.3,0.88-0.69,1.15-1.19v4.81c0,0.02,0,0.05,0,0.08c0,0.03,0,0.06,0,0.08c0,0.01,0,0.04,0,0.07
	s0,0.06,0,0.08c-0.03,0.23-0.13,0.43-0.3,0.6c-0.17,0.17-0.37,0.27-0.6,0.3c-0.02,0-0.05,0-0.08,0.01
	c-0.03,0.01-0.06,0.01-0.08,0.01c-0.01,0-0.04,0-0.07-0.01c-0.03-0.01-0.06-0.01-0.08-0.01H7.94c-0.02,0-0.04,0-0.08,0.01
	c-0.03,0.01-0.06,0.01-0.07,0.01c-0.02,0-0.05,0-0.08-0.01c-0.03-0.01-0.06-0.01-0.07-0.01c-0.22-0.03-0.42-0.12-0.58-0.28
	c-0.16-0.16-0.27-0.34-0.32-0.56C6.73,20.88,6.72,20.81,6.72,20.76z M12.23,9.67c0-0.16,0.06-0.3,0.17-0.42l2.21-2.22l0.03-0.02
	c0.01,0,0.01,0,0.01-0.01c0.01,0,0.01,0,0.01-0.01c0.01,0,0.01,0,0.01-0.01h0.01c0.01,0,0.01,0,0.01-0.01s0-0.01,0.01-0.02h0.02
	l0.01-0.01h0.01l0.01-0.01h0.01l0.01-0.01h0.01c0.01-0.01,0.01-0.01,0.02-0.01h0.01c0-0.01,0.01-0.01,0.02-0.01
	c0.01-0.01,0.01-0.01,0.02-0.01l0.04-0.02h0.01c0.01,0,0.01,0,0.01-0.01h0.07l0.01-0.01h0.12c0.01,0,0.01,0,0.02,0.01h0.06
	c0,0.01,0,0.01,0.01,0.01h0.02c0.01,0.01,0.02,0.02,0.03,0.02l0.02,0.01h0.02l0.01,0.01h0.01l0.01,0.01c0.01,0,0.01,0,0.01,0.01
	h0.02c0.01,0,0.01,0,0.01,0c0,0,0,0,0.01,0c0.01,0.01,0.01,0.01,0.02,0.01c0,0.01,0,0.02,0.01,0.02l0.01,0.01h0.02l0.01,0.01
	L15.41,7l0.01,0.01l0.02,0.02l2.22,2.22c0.12,0.12,0.18,0.26,0.18,0.42c0,0.16-0.06,0.3-0.18,0.41c-0.11,0.12-0.25,0.18-0.41,0.18
	c-0.16,0-0.3-0.06-0.41-0.18l-1.23-1.22v6.9c0,0.16-0.06,0.29-0.17,0.4c-0.11,0.11-0.25,0.17-0.41,0.17c-0.16,0-0.3-0.06-0.42-0.17
	c-0.12-0.11-0.17-0.25-0.17-0.4v-6.9l-1.22,1.22c-0.12,0.12-0.26,0.18-0.42,0.18c-0.16,0-0.3-0.06-0.41-0.18
	C12.29,9.97,12.23,9.83,12.23,9.67z`}}]})(s)}function U8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.62,21.05c0-0.24,0.08-0.45,0.25-0.61c0.17-0.16,0.38-0.24,0.63-0.24h18.67c0.25,0,0.45,0.08,0.61,0.24
	c0.16,0.16,0.24,0.36,0.24,0.61c0,0.23-0.08,0.43-0.25,0.58c-0.17,0.16-0.37,0.23-0.6,0.23H3.5c-0.25,0-0.46-0.08-0.63-0.23
	C2.7,21.47,2.62,21.28,2.62,21.05z M5.24,17.91c0-0.24,0.09-0.44,0.26-0.6c0.15-0.15,0.35-0.23,0.59-0.23h18.67
	c0.23,0,0.42,0.08,0.58,0.24c0.16,0.16,0.23,0.35,0.23,0.59c0,0.24-0.08,0.44-0.23,0.6c-0.16,0.17-0.35,0.25-0.58,0.25H6.09
	c-0.24,0-0.44-0.08-0.6-0.25C5.32,18.34,5.24,18.14,5.24,17.91z M5.37,15.52c0,0.09,0.05,0.13,0.15,0.13h1.43
	c0.06,0,0.13-0.05,0.2-0.16c0.24-0.52,0.59-0.94,1.06-1.27c0.47-0.33,0.99-0.52,1.55-0.56l0.55-0.07c0.11,0,0.17-0.06,0.17-0.18
	l0.07-0.5c0.11-1.08,0.56-1.98,1.37-2.7c0.81-0.72,1.76-1.08,2.85-1.08c1.08,0,2.02,0.36,2.83,1.07c0.8,0.71,1.26,1.61,1.37,2.68
	l0.08,0.57c0,0.11,0.07,0.17,0.2,0.17h1.59c0.64,0,1.23,0.17,1.76,0.52s0.92,0.8,1.18,1.37c0.07,0.11,0.14,0.16,0.21,0.16h1.43
	c0.12,0,0.17-0.07,0.14-0.23c-0.29-1.02-0.88-1.86-1.74-2.51c-0.87-0.65-1.86-0.97-2.97-0.97h-0.32c-0.33-1.33-1.03-2.42-2.1-3.27
	s-2.28-1.27-3.65-1.27c-1.4,0-2.64,0.44-3.73,1.32s-1.78,2-2.09,3.36c-0.85,0.2-1.6,0.6-2.24,1.21c-0.64,0.61-1.09,1.33-1.34,2.18
	v-0.04C5.37,15.45,5.37,15.48,5.37,15.52z M6.98,24.11c0-0.24,0.09-0.43,0.26-0.59c0.15-0.15,0.35-0.23,0.6-0.23h18.68
	c0.24,0,0.44,0.08,0.6,0.23c0.17,0.16,0.25,0.35,0.25,0.58c0,0.24-0.08,0.44-0.25,0.61c-0.17,0.17-0.37,0.25-0.6,0.25H7.84
	c-0.23,0-0.43-0.09-0.6-0.26C7.07,24.55,6.98,24.34,6.98,24.11z`}}]})(s)}function $8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:"M10.67,24.6V7.45h1.03V24.6H10.67z M12.4,22.44v-7.41l8.65,3.69L12.4,22.44z M12.4,14.86V7.45l8.65,3.69L12.4,14.86z"}}]})(s)}function Q8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,16.9c0,1.33,0.46,2.47,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.34
	c0-0.11-0.06-0.17-0.17-0.17c-0.86-0.04-1.58-0.38-2.18-1.02c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.54,0.84-2.16
	c0.56-0.61,1.26-0.97,2.09-1.07l0.53-0.03c0.13,0,0.2-0.06,0.2-0.19l0.06-0.53c0.11-1.08,0.56-1.99,1.37-2.71
	c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09c0.81,0.73,1.27,1.63,1.39,2.71l0.08,0.58c0,0.11,0.06,0.17,0.18,0.17
	h1.61c0.89,0,1.66,0.32,2.31,0.96c0.65,0.64,0.98,1.39,0.98,2.27c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.02
	c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c0.87-0.02,1.67-0.26,2.4-0.71c0.73-0.45,1.31-1.05,1.73-1.8
	c0.42-0.75,0.63-1.57,0.63-2.44c0-0.89-0.22-1.72-0.67-2.47c-0.44-0.75-1.05-1.35-1.81-1.78S21.29,12,20.4,12h-0.32
	c-0.32-1.34-1.03-2.43-2.1-3.28s-2.3-1.28-3.68-1.28c-1.41,0-2.66,0.44-3.75,1.31c-1.09,0.87-1.79,1.99-2.1,3.35
	c-1.11,0.26-2.02,0.83-2.73,1.73S4.64,15.75,4.64,16.9z M10.09,24.1c0.09,0.21,0.25,0.37,0.46,0.46c0.2,0.1,0.41,0.11,0.62,0.02
	c0.22-0.09,0.36-0.24,0.45-0.45c0.1-0.22,0.11-0.43,0.02-0.64c-0.08-0.21-0.24-0.35-0.45-0.44c-0.2-0.11-0.4-0.12-0.61-0.03
	c-0.21,0.09-0.36,0.24-0.46,0.47C10.01,23.66,10.01,23.86,10.09,24.1z M10.72,21.28c0,0.16,0.05,0.31,0.15,0.45
	c0.1,0.15,0.26,0.25,0.46,0.32c0.19,0.11,0.4,0.12,0.62,0.01c0.22-0.1,0.37-0.3,0.44-0.6l0.9-3.38c0.06-0.25,0.04-0.47-0.08-0.67
	c-0.12-0.2-0.29-0.32-0.53-0.36c-0.08-0.02-0.16-0.03-0.24-0.03c-0.16,0-0.32,0.05-0.47,0.15c-0.15,0.1-0.26,0.25-0.32,0.44
	l-0.88,3.39C10.73,21.16,10.72,21.25,10.72,21.28z M12.58,26.87c0,0.12,0.02,0.22,0.06,0.29c0.09,0.22,0.24,0.37,0.45,0.45
	c0.09,0.05,0.2,0.08,0.33,0.08c0.06,0,0.16-0.02,0.3-0.06c0.22-0.08,0.38-0.23,0.47-0.45c0.1-0.22,0.1-0.44,0-0.66
	c-0.1-0.22-0.25-0.37-0.45-0.46c-0.2-0.09-0.4-0.09-0.62,0c-0.19,0.08-0.32,0.2-0.41,0.36C12.62,26.58,12.58,26.73,12.58,26.87z
	 M13.31,24.26c0,0.37,0.21,0.61,0.63,0.73c0.11,0.03,0.19,0.04,0.24,0.04c0.15,0,0.28-0.03,0.38-0.08c0.21-0.08,0.35-0.27,0.42-0.57
	l1.67-6.29c0.06-0.24,0.04-0.45-0.06-0.65c-0.1-0.19-0.27-0.32-0.49-0.38c-0.08-0.02-0.17-0.03-0.27-0.03
	c-0.16,0-0.32,0.05-0.48,0.15c-0.16,0.1-0.26,0.25-0.3,0.44l-1.71,6.34C13.32,24.1,13.31,24.2,13.31,24.26z M16.74,23.8
	c0,0.12,0.02,0.23,0.08,0.32c0.08,0.19,0.23,0.34,0.44,0.44c0.11,0.04,0.23,0.07,0.35,0.07c0.06,0,0.16-0.02,0.3-0.06
	c0.21-0.08,0.37-0.23,0.46-0.44c0.07-0.22,0.07-0.43-0.01-0.63c-0.08-0.2-0.22-0.35-0.42-0.45c-0.23-0.11-0.44-0.12-0.65-0.03
	c-0.21,0.09-0.36,0.24-0.46,0.47C16.77,23.59,16.74,23.69,16.74,23.8z M17.47,21.23c0,0.14,0.05,0.29,0.16,0.45
	c0.11,0.16,0.26,0.27,0.45,0.33c0.16,0.03,0.25,0.05,0.27,0.05c0.09,0,0.22-0.03,0.37-0.1c0.2-0.09,0.33-0.27,0.4-0.52l0.9-3.34
	c0.02-0.17,0.03-0.26,0.03-0.26c0-0.16-0.05-0.31-0.15-0.46c-0.1-0.15-0.25-0.25-0.45-0.31c-0.09-0.02-0.18-0.03-0.26-0.03
	c-0.16,0-0.32,0.05-0.47,0.15s-0.25,0.25-0.31,0.45l-0.9,3.36L17.47,21.23z`}}]})(s)}function G8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.11,15.9c0-0.26,0.09-0.47,0.27-0.62c0.14-0.15,0.35-0.23,0.62-0.23h2.08c0.24,0,0.45,0.08,0.6,0.24
	c0.16,0.16,0.24,0.36,0.24,0.6c0,0.24-0.08,0.44-0.24,0.61c-0.16,0.17-0.36,0.25-0.6,0.25H5c-0.24,0-0.45-0.08-0.63-0.25
	C4.19,16.34,4.11,16.14,4.11,15.9z M5.03,20.98c0-0.23,0.09-0.43,0.26-0.61c0.16-0.16,0.37-0.23,0.61-0.23h18.21
	c0.24,0,0.45,0.08,0.62,0.24c0.17,0.16,0.25,0.36,0.25,0.6c0,0.24-0.09,0.44-0.26,0.61s-0.38,0.26-0.61,0.26H5.91
	c-0.24,0-0.44-0.09-0.61-0.26S5.03,21.22,5.03,20.98z M7.08,8.81c0-0.26,0.08-0.45,0.23-0.59c0.17-0.18,0.38-0.27,0.62-0.27
	c0.24,0,0.44,0.09,0.61,0.27l1.44,1.46c0.18,0.16,0.26,0.36,0.26,0.6c0,0.25-0.08,0.45-0.24,0.61s-0.36,0.24-0.6,0.24
	c-0.22,0-0.42-0.08-0.6-0.24L7.31,9.42C7.16,9.28,7.08,9.08,7.08,8.81z M9.68,15.9c0,0.87,0.18,1.65,0.53,2.33
	c0.03,0.09,0.11,0.14,0.24,0.14h1.67c0.07,0,0.12-0.02,0.14-0.06c0.02-0.04-0.01-0.1-0.07-0.16c-0.53-0.65-0.8-1.4-0.8-2.25
	c0-0.99,0.36-1.84,1.07-2.54c0.71-0.7,1.56-1.05,2.55-1.05c0.99,0,1.84,0.35,2.55,1.05s1.05,1.55,1.05,2.54
	c0,0.86-0.27,1.61-0.8,2.25c-0.04,0.06-0.06,0.1-0.06,0.12c-0.01,0.03,0,0.06,0.03,0.07c0.02,0.02,0.06,0.03,0.1,0.03h1.7
	c0.09,0,0.16-0.05,0.21-0.14c0.38-0.71,0.56-1.48,0.56-2.33c0-0.96-0.24-1.85-0.72-2.67c-0.48-0.82-1.13-1.47-1.95-1.95
	s-1.71-0.72-2.67-0.72s-1.85,0.24-2.67,0.72c-0.82,0.48-1.47,1.13-1.95,1.95C9.91,14.05,9.68,14.94,9.68,15.9z M14.15,7.97V5.88
	c0-0.24,0.08-0.44,0.25-0.62C14.57,5.08,14.77,5,15.01,5c0.24,0,0.44,0.09,0.62,0.26c0.17,0.17,0.26,0.38,0.26,0.62v2.09
	c0,0.24-0.09,0.44-0.26,0.62c-0.18,0.18-0.38,0.26-0.62,0.26c-0.24,0-0.44-0.09-0.61-0.26C14.23,8.41,14.15,8.21,14.15,7.97z
	 M19.77,10.28c0-0.24,0.08-0.44,0.24-0.6l1.44-1.46c0.17-0.18,0.38-0.27,0.62-0.27c0.25,0,0.46,0.08,0.62,0.25
	c0.17,0.17,0.25,0.37,0.25,0.61c0,0.26-0.08,0.46-0.23,0.61l-1.51,1.47c-0.16,0.15-0.36,0.22-0.59,0.22
	c-0.25,0.01-0.45-0.07-0.61-0.22C19.85,10.74,19.77,10.53,19.77,10.28z M22.1,15.9c0-0.27,0.08-0.47,0.24-0.62
	c0.14-0.15,0.34-0.23,0.59-0.23h2.09c0.24,0,0.45,0.08,0.62,0.24c0.17,0.16,0.26,0.36,0.26,0.6c0,0.24-0.09,0.44-0.26,0.61
	c-0.18,0.17-0.38,0.25-0.62,0.25h-2.09c-0.23,0-0.43-0.08-0.59-0.25C22.18,16.34,22.1,16.14,22.1,15.9z`}}]})(s)}function K8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.93,20.97c0-0.26,0.09-0.47,0.28-0.62c0.14-0.16,0.35-0.23,0.63-0.23h18.34c0.25,0,0.46,0.08,0.64,0.24
	c0.18,0.16,0.26,0.37,0.26,0.61c0,0.24-0.09,0.45-0.27,0.62s-0.39,0.27-0.63,0.27H5.84c-0.25,0-0.46-0.09-0.64-0.27
	C5.02,21.42,4.93,21.21,4.93,20.97z M6.9,12.68c0-0.26,0.08-0.47,0.23-0.63c0.17-0.18,0.38-0.26,0.65-0.26
	c0.23,0,0.43,0.09,0.6,0.26l1.5,1.5c0.18,0.18,0.27,0.39,0.27,0.63c0,0.23-0.09,0.44-0.27,0.62c-0.15,0.18-0.35,0.27-0.6,0.27
	s-0.47-0.09-0.64-0.27l-1.5-1.5C6.98,13.15,6.9,12.95,6.9,12.68z M9.83,18.27c-0.04,0.16,0.01,0.23,0.15,0.23h1.49
	c0.07,0,0.14-0.06,0.22-0.17c0.3-0.64,0.74-1.14,1.33-1.52s1.24-0.56,1.96-0.56c0.73,0,1.39,0.19,1.99,0.56s1.05,0.88,1.35,1.52
	c0.08,0.11,0.16,0.17,0.23,0.17h1.48c0.13,0,0.18-0.08,0.15-0.23c-0.34-1.13-0.99-2.05-1.95-2.76c-0.96-0.71-2.04-1.06-3.25-1.06
	c-1.2,0-2.28,0.35-3.23,1.06C10.82,16.22,10.17,17.14,9.83,18.27z M14.14,11.81V9.68c0-0.25,0.08-0.46,0.24-0.64
	c0.16-0.18,0.37-0.26,0.61-0.26c0.25,0,0.46,0.09,0.63,0.26c0.17,0.17,0.25,0.39,0.25,0.64v2.14c0,0.26-0.08,0.47-0.25,0.64
	c-0.17,0.17-0.38,0.25-0.63,0.25c-0.24,0-0.45-0.09-0.61-0.26S14.14,12.06,14.14,11.81z M19.86,14.18c0-0.24,0.08-0.45,0.25-0.63
	l1.54-1.5c0.16-0.18,0.36-0.26,0.62-0.26c0.24,0,0.44,0.08,0.6,0.25s0.23,0.38,0.23,0.64c0,0.26-0.08,0.47-0.23,0.62l-1.48,1.5
	c-0.17,0.17-0.36,0.26-0.56,0.28c-0.23,0.02-0.44-0.06-0.65-0.24S19.86,14.43,19.86,14.18z`}}]})(s)}function Y8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.14,14.76c0-0.24,0.09-0.44,0.27-0.61c0.17-0.17,0.38-0.25,0.62-0.25h2.06c0.24,0,0.44,0.08,0.6,0.25
	c0.17,0.17,0.25,0.37,0.25,0.61c0,0.25-0.08,0.46-0.25,0.63c-0.17,0.17-0.37,0.25-0.6,0.25H5.03c-0.25,0-0.46-0.08-0.63-0.25
	C4.22,15.22,4.14,15.01,4.14,14.76z M7.06,7.74c0-0.23,0.08-0.44,0.24-0.62C7.5,6.96,7.71,6.87,7.96,6.87
	c0.21,0,0.41,0.08,0.59,0.25l1.45,1.48c0.17,0.16,0.25,0.36,0.25,0.6c0,0.24-0.08,0.44-0.25,0.6c-0.17,0.17-0.36,0.25-0.6,0.25
	c-0.26,0-0.46-0.08-0.61-0.25l-1.5-1.44C7.15,8.19,7.06,7.98,7.06,7.74z M9.67,14.76c0-0.71,0.14-1.39,0.43-2.04
	c0.28-0.65,0.67-1.22,1.14-1.69c0.48-0.47,1.05-0.85,1.7-1.13S14.28,9.47,15,9.47c0.96,0,1.84,0.24,2.66,0.72
	c0.82,0.48,1.47,1.12,1.94,1.94c0.47,0.81,0.71,1.69,0.71,2.63c0,0.15-0.01,0.29-0.03,0.42c-0.28-0.17-0.6-0.25-0.97-0.25
	c-0.24,0-0.48,0.05-0.72,0.15c0.01-0.07,0.01-0.18,0.01-0.32c0-0.98-0.35-1.81-1.06-2.5c-0.71-0.69-1.56-1.04-2.55-1.04
	c-0.99,0-1.83,0.35-2.54,1.04s-1.05,1.52-1.05,2.5v0.18c-0.29,0.02-0.57,0.1-0.84,0.25c-0.01,0.01-0.04,0.03-0.1,0.07
	s-0.12,0.09-0.19,0.14s-0.14,0.11-0.23,0.19s-0.18,0.16-0.26,0.24C9.7,15.51,9.67,15.15,9.67,14.76z M9.7,18.41v-0.15
	c-0.01-0.09,0-0.2,0.02-0.33c0.05-0.36,0.19-0.7,0.42-1.02c0.13-0.16,0.22-0.27,0.27-0.31c0.01-0.02,0.02-0.04,0.04-0.06l0.04-0.04
	c0.03-0.01,0.07-0.05,0.12-0.1c0.02-0.02,0.05-0.05,0.08-0.08s0.06-0.04,0.07-0.06c0.05-0.05,0.1-0.08,0.14-0.1l0.17-0.11
	c0.14-0.09,0.31-0.14,0.5-0.14h0.03c0.1,0,0.19,0.01,0.26,0.03c0.03,0.01,0.07,0.03,0.13,0.07v0.01c0.14,0.06,0.26,0.16,0.34,0.29
	c0.08,0.13,0.13,0.27,0.13,0.42c0,0.17-0.05,0.31-0.14,0.42c-0.06,0.09-0.14,0.17-0.22,0.23c-0.02,0.01-0.04,0.02-0.06,0.03
	c-0.02,0.01-0.04,0.02-0.04,0.02l-0.06,0.04c-0.04,0.03-0.07,0.06-0.1,0.08s-0.06,0.06-0.11,0.11c-0.04,0.05-0.08,0.09-0.11,0.14
	c-0.03,0.04-0.06,0.1-0.09,0.15c-0.03,0.06-0.05,0.12-0.05,0.17v0.15c0.04,0.15,0.08,0.27,0.11,0.36c0.07,0.14,0.18,0.28,0.34,0.44
	c0.01,0.02,0.09,0.1,0.24,0.25c0.86,0.78,1.27,1.62,1.21,2.5c-0.02,0.3-0.09,0.59-0.21,0.87c-0.12,0.28-0.26,0.51-0.43,0.7
	c-0.16,0.19-0.29,0.33-0.39,0.43c-0.1,0.09-0.18,0.16-0.25,0.21c-0.01,0.01-0.03,0.02-0.06,0.04c-0.03,0.02-0.06,0.04-0.07,0.04
	c-0.08,0.04-0.15,0.06-0.22,0.07c-0.09,0.01-0.15,0.02-0.2,0.02c-0.3,0-0.54-0.1-0.71-0.3c-0.14-0.17-0.2-0.37-0.18-0.59
	c0.02-0.22,0.13-0.4,0.33-0.53L11,22.75c0.01-0.01,0.03-0.03,0.05-0.04c0.02-0.02,0.04-0.04,0.07-0.06
	c0.03-0.02,0.06-0.05,0.08-0.08c0.03-0.03,0.06-0.07,0.08-0.1c0.03-0.04,0.06-0.08,0.08-0.12c0.03-0.04,0.06-0.09,0.08-0.14
	c0.03-0.05,0.05-0.1,0.07-0.15c0.02-0.05,0.03-0.1,0.05-0.16c0.01-0.06,0.02-0.12,0.02-0.17c0.02-0.2-0.03-0.4-0.15-0.6
	c-0.05-0.11-0.12-0.22-0.22-0.33c-0.07-0.08-0.12-0.13-0.15-0.16c-0.09-0.11-0.14-0.17-0.15-0.18c-0.02-0.01-0.04-0.03-0.07-0.06
	s-0.05-0.04-0.06-0.05c-0.15-0.14-0.26-0.26-0.34-0.36c-0.12-0.16-0.21-0.26-0.24-0.32c-0.19-0.26-0.32-0.52-0.39-0.78
	c-0.04-0.14-0.07-0.25-0.08-0.32c0-0.02-0.01-0.05-0.02-0.08S9.7,18.44,9.7,18.41z M13.58,18.08c0-0.06,0-0.1,0.01-0.14
	c0.02-0.22,0.09-0.43,0.2-0.64c0.11-0.21,0.22-0.39,0.35-0.53c0.13-0.14,0.25-0.27,0.38-0.38s0.23-0.19,0.31-0.25l0.12-0.07
	c0.15-0.09,0.32-0.14,0.5-0.14c0.11,0,0.21,0.01,0.3,0.03c0.01,0,0.02,0.01,0.05,0.02c0.03,0.02,0.05,0.03,0.06,0.04
	c0.01,0,0.02,0,0.03,0.01c0.01,0,0.03,0.02,0.07,0.05c0.2,0.12,0.32,0.3,0.38,0.54c0,0.02,0,0.04,0,0.07c0,0.02,0,0.04,0,0.05
	c0,0.03-0.01,0.07-0.02,0.12s-0.02,0.08-0.02,0.09c-0.07,0.23-0.21,0.39-0.42,0.5c-0.33,0.22-0.51,0.45-0.53,0.69
	c-0.01,0.08-0.01,0.15,0,0.22c0.02,0.12,0.08,0.25,0.17,0.39c0.11,0.16,0.19,0.27,0.24,0.32c0.16,0.16,0.25,0.25,0.28,0.27
	c0.12,0.11,0.28,0.28,0.47,0.51c0.54,0.65,0.79,1.32,0.74,2c-0.02,0.3-0.09,0.59-0.21,0.87c-0.12,0.28-0.26,0.51-0.43,0.7
	c-0.16,0.18-0.3,0.33-0.4,0.43c-0.11,0.1-0.19,0.17-0.25,0.21l-0.12,0.08c-0.11,0.04-0.17,0.06-0.21,0.07
	c-0.11,0.01-0.18,0.02-0.2,0.02h-0.03c-0.08,0-0.14-0.01-0.19-0.02c-0.02,0-0.05,0-0.08-0.01c-0.03-0.01-0.06-0.01-0.07-0.01
	c-0.01,0-0.02,0-0.03-0.01c-0.01-0.01-0.02-0.01-0.04-0.02c-0.01-0.01-0.02-0.01-0.03-0.01c-0.15-0.11-0.24-0.17-0.26-0.21
	c-0.16-0.18-0.22-0.38-0.19-0.6c0.03-0.22,0.14-0.39,0.34-0.53l0.03-0.04c0.02-0.02,0.05-0.05,0.09-0.08l0.12-0.12l0.13-0.16
	l0.12-0.19l0.09-0.22l0.04-0.24c0.01-0.4-0.22-0.82-0.69-1.27c-0.19-0.17-0.33-0.31-0.44-0.43C13.79,19.37,13.54,18.72,13.58,18.08z
	 M14.12,6.92V4.85c0-0.24,0.09-0.45,0.26-0.62c0.17-0.17,0.38-0.25,0.61-0.25c0.24,0,0.45,0.08,0.62,0.25
	c0.17,0.17,0.25,0.38,0.25,0.62v2.07c0,0.24-0.08,0.43-0.25,0.59S15.24,7.74,15,7.74c-0.24,0-0.44-0.08-0.61-0.23
	C14.21,7.35,14.12,7.16,14.12,6.92z M17.48,17.93c0.02-0.22,0.09-0.43,0.2-0.64c0.11-0.21,0.22-0.39,0.35-0.53
	c0.13-0.14,0.25-0.27,0.38-0.38c0.12-0.11,0.22-0.19,0.3-0.25l0.13-0.07c0.02-0.02,0.06-0.04,0.1-0.08
	c0.11-0.04,0.24-0.07,0.38-0.07c0.34,0,0.59,0.13,0.77,0.38c0.05,0.07,0.08,0.14,0.1,0.23c0.01,0.02,0.02,0.05,0.02,0.08v0.11
	c0,0.31-0.15,0.55-0.45,0.7c-0.32,0.21-0.49,0.44-0.52,0.69c-0.04,0.34,0.19,0.74,0.68,1.2c0.88,0.77,1.28,1.61,1.23,2.5
	c-0.02,0.3-0.09,0.59-0.21,0.87c-0.12,0.28-0.27,0.51-0.43,0.7c-0.17,0.19-0.3,0.33-0.39,0.43s-0.18,0.16-0.25,0.21
	c-0.16,0.1-0.3,0.15-0.41,0.16c-0.03,0.01-0.08,0.01-0.15,0.01c-0.3,0-0.53-0.1-0.69-0.3c-0.15-0.17-0.21-0.37-0.19-0.59
	s0.13-0.4,0.32-0.53c0.03-0.01,0.09-0.06,0.18-0.14s0.18-0.21,0.29-0.38c0.1-0.18,0.16-0.35,0.17-0.53c0.02-0.4-0.22-0.82-0.7-1.27
	c-0.41-0.36-0.73-0.75-0.94-1.16C17.51,18.86,17.42,18.4,17.48,17.93z M19.77,9.21c0-0.25,0.08-0.45,0.23-0.6l1.46-1.48
	c0.18-0.17,0.38-0.25,0.61-0.25c0.24,0,0.44,0.09,0.61,0.26s0.26,0.38,0.26,0.61c0,0.25-0.09,0.46-0.26,0.62l-1.48,1.44
	c-0.18,0.17-0.38,0.25-0.61,0.25c-0.23,0-0.43-0.08-0.58-0.25C19.85,9.65,19.77,9.44,19.77,9.21z M22.07,14.76
	c0-0.22,0.09-0.42,0.26-0.61c0.16-0.17,0.35-0.25,0.58-0.25h2.06c0.24,0,0.45,0.09,0.62,0.26s0.27,0.37,0.27,0.6
	c0,0.24-0.09,0.45-0.26,0.62c-0.18,0.17-0.38,0.26-0.63,0.26h-2.06c-0.24,0-0.45-0.08-0.6-0.25C22.15,15.22,22.07,15.01,22.07,14.76
	z`}}]})(s)}function X8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
	c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
	s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
	c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
	S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
	c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
	C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
	s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
	c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
	c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
	c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
	 M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
	c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
	c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
	c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
	c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
	l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
	`}}]})(s)}function Z8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.8,24.6V7.45h1.13V24.6H7.8z M9.73,21.52v-6.6h8.55v6.6H9.73z M9.73,14.05v-6.6h8.55v6.6H9.73z M12.09,19.52h3.81v-2.51
	h-3.81V19.52z M12.09,12.05h3.81v-2.5h-3.81V12.05z`}}]})(s)}function J8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M11.08,14.53v-0.02c-0.01-0.08,0-0.2,0-0.37c0.01-0.16,0.04-0.43,0.1-0.81c0.06-0.38,0.14-0.76,0.25-1.15
	s0.28-0.84,0.51-1.35c0.23-0.51,0.5-0.99,0.82-1.44C13.08,8.94,13.5,8.47,14.02,8c0.52-0.47,1.1-0.89,1.73-1.24
	c0.16-0.09,0.32-0.11,0.49-0.06s0.3,0.15,0.38,0.31c0.09,0.16,0.11,0.32,0.06,0.5c-0.05,0.17-0.15,0.31-0.3,0.39
	c-1.31,0.72-2.32,1.73-3.03,3.05c0.54-0.25,1.08-0.38,1.63-0.38c1.07,0,2,0.38,2.77,1.15c0.77,0.77,1.15,1.69,1.15,2.76
	c0,0.08,0,0.16,0,0.24c0,0.08-0.02,0.25-0.04,0.52c-0.02,0.27-0.06,0.52-0.11,0.77c-0.05,0.25-0.13,0.56-0.23,0.93
	c-0.11,0.37-0.23,0.73-0.38,1.06c-0.15,0.33-0.34,0.7-0.58,1.1s-0.51,0.77-0.81,1.12c-0.3,0.35-0.66,0.7-1.08,1.05
	c-0.43,0.35-0.89,0.67-1.39,0.95c-0.09,0.06-0.2,0.08-0.31,0.08c-0.26,0-0.45-0.12-0.58-0.35c-0.09-0.16-0.11-0.32-0.06-0.49
	c0.05-0.17,0.15-0.3,0.31-0.38c1.34-0.75,2.36-1.78,3.06-3.08c-0.54,0.26-1.11,0.38-1.71,0.38c-0.69,0-1.34-0.17-1.94-0.52
	c-0.6-0.34-1.07-0.81-1.43-1.41C11.27,15.87,11.09,15.23,11.08,14.53z M12.78,14.48c0,0.61,0.22,1.13,0.65,1.57
	c0.43,0.43,0.95,0.65,1.56,0.65c0.57,0,1.06-0.19,1.49-0.57c0.42-0.38,0.66-0.85,0.73-1.41l0.01-0.23c0-0.02,0-0.04,0.01-0.05
	c-0.01-0.6-0.23-1.11-0.66-1.52c-0.43-0.42-0.96-0.62-1.57-0.62c-0.56,0-1.04,0.18-1.46,0.54s-0.66,0.82-0.73,1.36l-0.02,0.25V14.48
	z`}}]})(s)}function q8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.96,24.51h0.39l6.88-10.18c0.09-0.18,0.04-0.27-0.15-0.27h-2.84l2.99-5.45c0.09-0.18,0.02-0.27-0.2-0.27h-3.81
	c-0.11,0-0.2,0.06-0.29,0.18l-2.78,7.4c-0.02,0.18,0.04,0.27,0.19,0.27h2.75L7.96,24.51z M16.46,18.18h0.27l5.22-7.67
	c0.05-0.08,0.06-0.15,0.04-0.2s-0.08-0.07-0.17-0.07h-2.1l2.18-4.03c0.12-0.2,0.06-0.3-0.18-0.3h-2.74c-0.13,0-0.23,0.06-0.3,0.19
	l-2.08,5.48c-0.03,0.09-0.03,0.16,0.01,0.21c0.04,0.05,0.1,0.07,0.19,0.07h2.04L16.46,18.18z`}}]})(s)}function b8(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.8,14.62c0-0.93,0.23-1.8,0.7-2.6s1.1-1.44,1.9-1.91s1.67-0.7,2.6-0.7c0.94,0,1.81,0.23,2.61,0.7
	c0.8,0.47,1.43,1.1,1.9,1.9c0.47,0.8,0.7,1.67,0.7,2.61s-0.23,1.81-0.7,2.61c-0.47,0.8-1.1,1.43-1.9,1.9
	c-0.8,0.47-1.67,0.7-2.61,0.7s-1.8-0.23-2.6-0.7c-0.8-0.47-1.43-1.1-1.9-1.9C10.03,16.43,9.8,15.56,9.8,14.62z M14.25,11.22
	c0.87,0.11,1.6,0.49,2.19,1.15c0.59,0.66,0.89,1.44,0.89,2.33c0,0.83-0.26,1.56-0.78,2.2s-1.18,1.04-1.98,1.21
	c0.2,0.02,0.34,0.04,0.43,0.04c0.98,0,1.81-0.35,2.5-1.04c0.69-0.69,1.04-1.52,1.04-2.5c0-0.96-0.35-1.78-1.04-2.47
	c-0.69-0.68-1.53-1.02-2.5-1.02C14.74,11.14,14.49,11.17,14.25,11.22z`}}]})(s)}function t9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.09,19.39c0-0.13,0-0.23,0.01-0.29v-0.08c0-0.02,0-0.04,0-0.06c0-0.02,0-0.03,0-0.05s0-0.03,0-0.05c0-0.02,0-0.03,0-0.04
	v-0.02c0-0.03,0.01-0.07,0.02-0.12c0.01-0.05,0.02-0.08,0.02-0.09v-0.03c0-0.01,0-0.03,0-0.05c0-0.02,0-0.03,0-0.04l0.08-0.37
	c0-0.01,0-0.01,0.01-0.02v-0.02l0.04-0.14c0.01-0.01,0.01-0.01,0.01-0.02c0.01-0.01,0.01-0.02,0.01-0.03v-0.03
	c0.04-0.12,0.07-0.22,0.1-0.28c0-0.01,0.01-0.02,0.02-0.03c0.01-0.01,0.02-0.06,0.05-0.15c0.17-0.38,0.38-0.74,0.63-1.08l0.06-0.07
	c0.01-0.01,0.02-0.02,0.03-0.04c0.01-0.02,0.02-0.03,0.03-0.04c0.01-0.01,0.03-0.03,0.07-0.06c0.01-0.02,0.02-0.04,0.04-0.06
	c0.02-0.02,0.03-0.04,0.04-0.06c0.04-0.02,0.06-0.05,0.07-0.07c0.01-0.01,0.03-0.02,0.07-0.06l0.07-0.07l7.6-8.33l-0.38,2.2
	l6.82-7.29l-4.18,8.14l4.18-3.16l-3.79,7.6l2.71-1.87l-4.68,8.33c0,0.01-0.01,0.02-0.02,0.04s-0.02,0.04-0.03,0.05
	c-0.01,0.01-0.01,0.02-0.02,0.04c-0.01,0.02-0.01,0.03-0.02,0.05c-0.01,0.01-0.01,0.02-0.02,0.05c-0.01,0.02-0.02,0.04-0.02,0.05
	c-0.43,0.84-1.05,1.51-1.86,2.02c-0.81,0.51-1.7,0.76-2.67,0.76c-0.92,0-1.77-0.23-2.55-0.68c-0.78-0.46-1.4-1.07-1.86-1.86
	S7.09,20.31,7.09,19.39z M8.29,19.39c0,1.08,0.38,1.99,1.14,2.75c0.76,0.76,1.68,1.14,2.75,1.14c0.82,0,1.56-0.24,2.22-0.71
	c0.66-0.47,1.13-1.09,1.41-1.84c0.17-0.43,0.25-0.87,0.25-1.34c0-1.07-0.38-1.99-1.13-2.75c-0.76-0.76-1.67-1.13-2.75-1.13
	c-1,0-1.87,0.33-2.6,1c-0.41,0.36-0.72,0.78-0.95,1.28C8.4,18.3,8.29,18.83,8.29,19.39z`}}]})(s)}function c9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M14.8,24.51h0.19
	c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.21-2.15s1.61-1.97,2.15-3.21s0.8-2.54,0.8-3.91c0-1.36-0.27-2.66-0.8-3.9
	s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15s-2.54-0.8-3.91-0.8H14.8V24.51z`}}]})(s)}function n9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.36,0.27,2.66,0.8,3.9s1.25,2.32,2.15,3.22s1.97,1.61,3.22,2.15s2.55,0.8,3.9,0.8c1.37,0,2.67-0.27,3.91-0.8
	s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22s0.8-2.55,0.8-3.9c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35
	c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.41,7.89,7.32s-1.61,1.98-2.15,3.22S4.94,13.08,4.94,14.44z`}}]})(s)}function e9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51s3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1
	s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09s-3.61-1.51-5.65-1.51S11.08,3.7,9.35,4.7s-3.1,2.37-4.1,4.09
	S3.74,12.4,3.74,14.44z`}}]})(s)}function r9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8h0.21V4.39h-0.21c-1.36,0-2.66,0.27-3.9,0.8
	S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z`}}]})(s)}function l9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8h0.07c-0.59-2.67-0.88-6.02-0.88-10.06
	c0-3.39,0.3-6.74,0.91-10.05h-0.1c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z`}}]})(s)}function s9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.36,0.26,2.65,0.79,3.89s1.24,2.3,2.12,3.2s1.95,1.62,3.17,2.15s2.52,0.81,3.87,0.82c-1.16-2.47-1.74-5.83-1.74-10.06
	c0-3.61,0.6-6.96,1.8-10.05c-1.36,0-2.65,0.27-3.89,0.81s-2.3,1.25-3.19,2.15s-1.61,1.97-2.14,3.2S4.94,13.09,4.94,14.44z`}}]})(s)}function i9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.34,0.26,2.62,0.77,3.85s1.21,2.29,2.08,3.19s1.92,1.62,3.13,2.16s2.48,0.83,3.81,0.87c-1.71-2.32-2.56-5.68-2.56-10.06
	c0-1.87,0.23-3.67,0.69-5.41s1.11-3.29,1.95-4.64c-1.8,0.03-3.45,0.5-4.96,1.41s-2.7,2.13-3.58,3.65S4.94,12.65,4.94,14.44z`}}]})(s)}function o9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.33,0.25,2.6,0.75,3.81s1.18,2.26,2.03,3.15s1.87,1.61,3.05,2.17s2.43,0.87,3.74,0.94c-1.24-1.19-2.11-2.63-2.61-4.31
	s-0.75-3.6-0.75-5.76c0-1.93,0.31-3.78,0.92-5.54s1.47-3.26,2.56-4.5c-1.77,0.07-3.39,0.56-4.88,1.47S7.09,8,6.23,9.51
	S4.94,12.68,4.94,14.44z`}}]})(s)}function u9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.27,0.23,2.49,0.7,3.66s1.09,2.2,1.89,3.08s1.75,1.61,2.85,2.19s2.28,0.94,3.52,1.08c-1.75-1.04-2.98-2.39-3.7-4.07
	s-1.08-3.66-1.08-5.93c0-2.07,0.44-4,1.32-5.78s2.1-3.2,3.66-4.24c-1.26,0.11-2.46,0.45-3.59,1.02s-2.1,1.3-2.92,2.19
	s-1.46,1.92-1.93,3.11S4.94,13.15,4.94,14.44z`}}]})(s)}function a9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,2.48,0.8,4.66,2.41,6.53s3.62,3.01,6.03,3.41c-1.01-0.5-1.86-1.1-2.56-1.82s-1.25-1.5-1.63-2.37s-0.66-1.77-0.83-2.7
	s-0.26-1.95-0.26-3.06c0-2.11,0.5-4.06,1.49-5.84s2.37-3.16,4.12-4.12c-1.63,0.21-3.11,0.77-4.45,1.7S6.87,8.3,6.1,9.76
	S4.94,12.77,4.94,14.44z`}}]})(s)}function d9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.43c0-2.04,0.51-3.92,1.52-5.65S7.64,5.7,9.37,4.69s3.61-1.5,5.65-1.5s3.92,0.5,5.65,1.5s3.09,2.36,4.09,4.09
	s1.5,3.61,1.5,5.65s-0.5,3.93-1.5,5.65s-2.36,3.1-4.09,4.11s-3.61,1.52-5.65,1.52s-3.93-0.51-5.65-1.52s-3.1-2.38-4.11-4.11
	S3.74,16.47,3.74,14.43z M4.94,14.43c0,1.36,0.27,2.66,0.81,3.9S7,20.65,7.9,21.55s1.97,1.62,3.22,2.15s2.55,0.81,3.9,0.81
	c0.86,0,1.62-0.09,2.29-0.28c0.83-0.44,1.55-0.96,2.17-1.57s1.1-1.22,1.46-1.85s0.64-1.33,0.86-2.09s0.36-1.48,0.43-2.14
	s0.1-1.37,0.1-2.15c0-0.93-0.1-1.84-0.3-2.74S21.52,9.9,21.1,9.02s-0.99-1.72-1.72-2.5s-1.57-1.45-2.54-1.99
	c-0.4-0.09-1.01-0.13-1.82-0.13c-1.36,0-2.66,0.26-3.9,0.79S8.8,6.43,7.9,7.32s-1.62,1.97-2.15,3.2S4.94,13.06,4.94,14.43z`}}]})(s)}function f9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8c0.36,0,0.76-0.02,1.2-0.07
	c0.93-0.57,1.71-1.24,2.35-2.03s1.12-1.64,1.43-2.56s0.53-1.8,0.65-2.65s0.18-1.77,0.18-2.75c0-1.25-0.15-2.46-0.46-3.64
	s-0.84-2.34-1.59-3.49s-1.69-2.11-2.81-2.89c-0.41-0.02-0.73-0.03-0.95-0.03c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34
	s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z`}}]})(s)}function p9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8c0.33,0,0.58,0,0.73-0.01
	c0.78-0.61,1.44-1.31,1.96-2.11s0.92-1.66,1.18-2.57s0.44-1.79,0.54-2.63s0.15-1.75,0.15-2.74c0-1.91-0.32-3.76-0.97-5.54
	s-1.65-3.28-3.02-4.49c-0.13-0.01-0.32-0.01-0.59-0.01c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21
	S4.94,13.09,4.94,14.44z`}}]})(s)}function h9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8h0.38c0.6-0.64,1.1-1.37,1.5-2.19
	s0.71-1.67,0.9-2.58s0.33-1.77,0.41-2.59s0.12-1.73,0.12-2.7c0-1.88-0.24-3.7-0.73-5.46s-1.25-3.28-2.3-4.59h-0.28
	c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z`}}]})(s)}function v9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8c0.26,0,0.46,0,0.59-0.01
	c0.77-1.33,1.3-2.83,1.57-4.5s0.42-3.52,0.42-5.55c0-4.01-0.68-7.36-2.04-10.03c-0.11-0.01-0.29-0.01-0.54-0.01
	c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z`}}]})(s)}function y9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.37,0.27,2.67,0.8,3.91s1.25,2.31,2.15,3.21s1.97,1.61,3.21,2.15s2.54,0.8,3.9,0.8h0.38c0.67-2.49,1.01-5.84,1.01-10.06
	c0-3.82-0.34-7.17-1.03-10.05h-0.37c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.44,7.89,7.34s-1.61,1.97-2.15,3.21S4.94,13.09,4.94,14.44z`}}]})(s)}function g9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M16.38,4.48
	c1.64,0.9,2.99,2.2,4.04,3.9s1.57,3.72,1.57,6.06c0,4.9-1.72,8.2-5.16,9.89c2.35-0.44,4.31-1.59,5.87-3.44s2.34-4,2.34-6.45
	c0-1.66-0.38-3.21-1.14-4.66s-1.8-2.63-3.13-3.57S18,4.71,16.38,4.48z`}}]})(s)}function m9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M15.9,4.42
	c1.48,0.99,2.7,2.34,3.65,4.05s1.42,3.7,1.42,5.97c0,4.8-1.6,8.13-4.79,9.99c1.65-0.2,3.15-0.76,4.5-1.68s2.42-2.12,3.2-3.58
	s1.17-3.03,1.17-4.72c0-1.72-0.41-3.32-1.22-4.8s-1.91-2.69-3.31-3.61S17.59,4.57,15.9,4.42z`}}]})(s)}function x9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M15.58,4.41
	c1.28,1.1,2.32,2.51,3.13,4.22s1.22,3.65,1.22,5.82c0,4.64-1.39,7.99-4.16,10.05c1.28-0.1,2.49-0.43,3.63-1s2.13-1.29,2.96-2.18
	s1.49-1.93,1.97-3.13s0.73-2.44,0.73-3.74c0-1.75-0.42-3.38-1.26-4.89s-1.99-2.72-3.44-3.64S17.31,4.5,15.58,4.41z`}}]})(s)}function z9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.75,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4S13.48,3.19,15,3.19s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.75,15.97,3.75,14.44z M15.35,4.39
	c1.05,1.27,1.91,2.75,2.57,4.44s0.99,3.56,0.99,5.61c0,4.39-1.14,7.75-3.43,10.06c1.31-0.06,2.55-0.37,3.74-0.92s2.2-1.28,3.05-2.18
	s1.53-1.95,2.04-3.16s0.75-2.48,0.75-3.81c0-1.78-0.43-3.43-1.3-4.94s-2.04-2.73-3.53-3.65S17.12,4.45,15.35,4.39z`}}]})(s)}function M9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M15.15,4.39
	c1.83,3.22,2.74,6.57,2.74,10.05c0,4.16-0.88,7.51-2.65,10.06c1.34-0.03,2.61-0.32,3.82-0.86s2.25-1.27,3.13-2.16
	s1.57-1.95,2.09-3.18s0.78-2.51,0.78-3.86c0-1.8-0.44-3.46-1.33-5s-2.08-2.75-3.6-3.65S16.95,4.42,15.15,4.39z`}}]})(s)}function C9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M15.01,4.39
	c1.23,3.54,1.85,6.89,1.85,10.05c0,3.93-0.59,7.28-1.77,10.06c1.35-0.01,2.64-0.28,3.87-0.81s2.3-1.25,3.19-2.15s1.6-1.97,2.12-3.21
	s0.79-2.54,0.79-3.9s-0.27-2.66-0.8-3.9s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15S16.36,4.39,15.01,4.39z`}}]})(s)}function w9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M13.38,14.44
	c0,3.81,0.41,7.16,1.23,10.06h0.38c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.21-2.15s1.61-1.97,2.15-3.21s0.8-2.54,0.8-3.91
	c0-1.36-0.27-2.66-0.8-3.9s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15s-2.54-0.8-3.91-0.8h-0.34C13.81,7.99,13.38,11.34,13.38,14.44
	z`}}]})(s)}function S9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.52,0.3-2.98,0.89-4.37s1.4-2.58,2.4-3.59s2.2-1.81,3.59-2.4s2.84-0.89,4.37-0.89s2.98,0.3,4.37,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.37,0.89s-2.98-0.3-4.37-0.89s-2.58-1.4-3.59-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M11.96,14.44
	c0,4.15,0.81,7.5,2.42,10.05c0.15,0.01,0.35,0.01,0.62,0.01c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.21-2.15s1.61-1.97,2.15-3.21
	s0.8-2.54,0.8-3.91c0-1.36-0.27-2.66-0.8-3.9s-1.25-2.31-2.15-3.21s-1.97-1.61-3.21-2.15s-2.54-0.8-3.91-0.8
	c-0.23,0-0.42,0-0.54,0.01C12.79,7.55,11.96,10.9,11.96,14.44z`}}]})(s)}function k9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-2.03,0.5-3.91,1.51-5.64s2.37-3.1,4.1-4.1s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89s2.59,1.4,3.6,2.4
	s1.81,2.2,2.4,3.59s0.89,2.84,0.89,4.37s-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4s-2.85,0.89-4.37,0.89
	s-2.98-0.3-4.37-0.89s-2.59-1.4-3.59-2.4s-1.8-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M10.54,14.44c0,4.44,1.17,7.78,3.5,10.02
	c0.07,0,0.17,0,0.3,0.01s0.25,0.02,0.35,0.02s0.2,0.01,0.3,0.01c1.36,0,2.66-0.27,3.9-0.8s2.32-1.25,3.22-2.15s1.61-1.97,2.15-3.21
	s0.8-2.54,0.8-3.91c0-1.36-0.27-2.66-0.8-3.9s-1.25-2.31-2.15-3.21s-1.97-1.61-3.22-2.15s-2.55-0.8-3.9-0.8
	c-0.36,0-0.63,0.01-0.81,0.03c-1.08,1.22-1.96,2.69-2.64,4.42S10.54,12.43,10.54,14.44z`}}]})(s)}function _9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M9.13,14.43
	c0,4.68,1.48,8,4.45,9.98c0.44,0.07,0.91,0.1,1.42,0.1c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22
	s0.8-2.55,0.8-3.9c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35c-0.45,0-0.84,0.02-1.19,0.06
	c-1.4,1.06-2.53,2.46-3.39,4.2S9.13,12.29,9.13,14.43z`}}]})(s)}function L9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M7.71,14.44
	c0,4.76,1.66,8.02,4.97,9.79c0.73,0.19,1.51,0.28,2.33,0.28c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22
	s0.8-2.55,0.8-3.9c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35c-0.68,0-1.3,0.05-1.85,0.16
	c-1.63,0.94-2.95,2.27-3.95,3.99S7.71,12.22,7.71,14.44z`}}]})(s)}function W9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M6.42,14.44
	c0,0.78,0.05,1.5,0.15,2.15c0.1,0.65,0.29,1.35,0.57,2.09s0.66,1.41,1.13,2.03s1.09,1.24,1.88,1.86s1.7,1.2,2.77,1.71
	c0.67,0.15,1.37,0.22,2.09,0.22c1.37,0,2.67-0.27,3.91-0.8s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22s0.8-2.55,0.8-3.9
	c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35c-0.85,0-1.62,0.09-2.31,0.26C11.81,5.05,11.03,5.51,10.35,6
	S9.1,7.01,8.66,7.54S7.84,8.62,7.53,9.16s-0.54,1.12-0.69,1.74s-0.26,1.2-0.32,1.75S6.42,13.8,6.42,14.44z`}}]})(s)}function E9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51V25.71z`}}]})(s)}function N9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51s3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1
	s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09s-3.61-1.51-5.65-1.51S11.08,3.7,9.35,4.7s-3.1,2.37-4.1,4.09
	S3.74,12.4,3.74,14.44z`}}]})(s)}function B9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0-1.53,0.3-3,0.89-4.39s1.4-2.59,2.4-3.6s2.2-1.81,3.6-2.4s2.85-0.89,4.37-0.89c1.53,0,3,0.3,4.39,0.89
	s2.59,1.4,3.6,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.6s-2.2,1.81-3.6,2.4
	s-2.85,0.89-4.39,0.89c-1.52,0-2.98-0.3-4.37-0.89s-2.59-1.4-3.6-2.4s-1.81-2.2-2.4-3.6S3.74,15.97,3.74,14.44z M4.94,14.44
	c0,1.36,0.27,2.66,0.8,3.9s1.25,2.32,2.15,3.22s1.97,1.61,3.22,2.15s2.55,0.8,3.9,0.8c1.37,0,2.67-0.27,3.91-0.8
	s2.31-1.25,3.22-2.15s1.62-1.97,2.15-3.22s0.8-2.55,0.8-3.9c0-1.82-0.45-3.5-1.35-5.05s-2.13-2.77-3.68-3.68s-3.23-1.35-5.05-1.35
	c-1.36,0-2.66,0.27-3.9,0.8S8.79,6.41,7.89,7.32s-1.61,1.98-2.15,3.22S4.94,13.08,4.94,14.44z`}}]})(s)}function P9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51V3.19c-2.04,0-3.92,0.5-5.65,1.51
	S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z`}}]})(s)}function H9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51c-1-3.14-1.49-6.9-1.49-11.26
	c0-3.43,0.5-7.18,1.49-11.25c-2.04,0-3.92,0.5-5.65,1.51S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z`}}]})(s)}function T9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51c-2.01-2.74-3.02-6.5-3.02-11.26
	c0-3.98,1.01-7.73,3.02-11.25c-2.04,0-3.93,0.5-5.65,1.51s-3.1,2.37-4.1,4.09S3.74,12.4,3.74,14.44z`}}]})(s)}function R9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51c-2.99-2.33-4.48-6.09-4.48-11.26
	c0-2.32,0.42-4.46,1.25-6.4s1.91-3.56,3.23-4.85c-2.04,0-3.92,0.5-5.65,1.51S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z`}}]})(s)}function D9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.1,4.1s3.61,1.51,5.65,1.51c-2.07-1.01-3.59-2.45-4.56-4.33
	S9,17.19,9,14.44c0-2.53,0.56-4.78,1.69-6.75s2.57-3.47,4.31-4.5c-2.04,0-3.93,0.5-5.65,1.51s-3.1,2.37-4.1,4.09
	S3.74,12.4,3.74,14.44z`}}]})(s)}function j9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51c-2.59-0.79-4.48-2.13-5.69-4.02
	s-1.81-4.3-1.81-7.24c0-1.39,0.2-2.7,0.6-3.95c0.4-1.25,0.94-2.34,1.63-3.27s1.48-1.75,2.37-2.44s1.86-1.22,2.89-1.59
	c-2.04,0-3.92,0.5-5.65,1.51S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z`}}]})(s)}function F9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.44c0,2.04,0.5,3.93,1.51,5.65s2.37,3.1,4.09,4.1s3.61,1.51,5.65,1.51c-1.46-0.56-2.72-1.18-3.79-1.88
	s-1.93-1.39-2.57-2.1s-1.15-1.49-1.53-2.34s-0.64-1.66-0.77-2.42s-0.2-1.6-0.2-2.52c0-0.65,0.03-1.26,0.08-1.81s0.16-1.14,0.32-1.77
	s0.38-1.21,0.64-1.75s0.63-1.09,1.08-1.66s0.98-1.1,1.59-1.57s1.34-0.95,2.21-1.42s1.85-0.89,2.93-1.27c-2.04,0-3.92,0.5-5.65,1.51
	S6.26,7.07,5.25,8.8S3.74,12.4,3.74,14.44z`}}]})(s)}function V9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.49c0,1.22,0.19,2.4,0.56,3.54s0.91,2.17,1.6,3.09s1.5,1.72,2.42,2.42s1.95,1.23,3.09,1.6s2.32,0.56,3.54,0.56
	c5.03-1.4,7.54-5.14,7.54-11.22c0-1.18-0.14-2.3-0.42-3.37s-0.65-2.01-1.13-2.83s-1.04-1.57-1.68-2.24s-1.34-1.24-2.06-1.68
	s-1.47-0.81-2.26-1.07c-1.52,0-2.98,0.3-4.37,0.89S8.02,5.57,7.02,6.57s-1.8,2.19-2.39,3.57S3.74,12.97,3.74,14.49z`}}]})(s)}function O9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.49c0,1.22,0.19,2.4,0.56,3.54s0.91,2.17,1.6,3.09s1.5,1.72,2.42,2.42s1.95,1.23,3.09,1.6s2.32,0.56,3.54,0.56
	c4.33-1.73,6.49-5.47,6.49-11.22c0-1.39-0.18-2.7-0.54-3.93s-0.85-2.31-1.47-3.23s-1.31-1.71-2.06-2.39s-1.56-1.23-2.42-1.66
	c-2.03,0-3.91,0.5-5.63,1.5S6.25,7.14,5.24,8.86S3.74,12.46,3.74,14.49z`}}]})(s)}function I9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.49c0,1.22,0.19,2.4,0.56,3.54s0.91,2.17,1.6,3.09s1.5,1.72,2.42,2.42s1.95,1.23,3.09,1.6s2.32,0.56,3.54,0.56
	c3.61-2.07,5.42-5.81,5.42-11.22c0-1.31-0.15-2.56-0.45-3.74s-0.71-2.24-1.23-3.17s-1.1-1.75-1.72-2.46s-1.3-1.33-2.02-1.86
	c-1.52,0-2.98,0.3-4.37,0.89s-2.58,1.39-3.58,2.4s-1.8,2.2-2.39,3.59S3.74,12.96,3.74,14.49z`}}]})(s)}function A9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0,1.52,0.3,2.98,0.89,4.37s1.39,2.58,2.4,3.59s2.2,1.8,3.59,2.4s2.84,0.89,4.37,0.89
	c2.89-2.39,4.34-6.14,4.34-11.24c0-2.34-0.41-4.47-1.22-6.36s-1.85-3.52-3.11-4.87c-2.03,0-3.91,0.5-5.64,1.51S6.25,7.12,5.24,8.84
	S3.74,12.44,3.74,14.47z`}}]})(s)}function U9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0,2.03,0.5,3.91,1.51,5.63s2.37,3.09,4.09,4.09s3.6,1.51,5.63,1.51c2.17-2.75,3.25-6.5,3.25-11.24
	c0-3.96-1.08-7.71-3.25-11.24c-2.03,0-3.91,0.5-5.63,1.5S6.26,7.1,5.25,8.83S3.74,12.44,3.74,14.47z`}}]})(s)}function $9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.46c0,2.04,0.5,3.92,1.51,5.65s2.37,3.09,4.09,4.09s3.61,1.51,5.65,1.51c1.44-3.08,2.15-6.83,2.15-11.25
	c0-3.46-0.72-7.2-2.15-11.24c-1.52,0-2.98,0.3-4.37,0.89S8.03,5.5,7.03,6.5s-1.8,2.2-2.4,3.59S3.74,12.93,3.74,14.46z`}}]})(s)}function Q9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M14.99,25.71c2.04,0,3.93-0.5,5.65-1.51s3.1-2.37,4.1-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.1-4.09
	s-3.61-1.51-5.65-1.51c1.67,2.9,2.5,6.65,2.5,11.25c0,2.33-0.17,4.43-0.52,6.3S15.97,24.26,14.99,25.71z`}}]})(s)}function G9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.32,0.52,2.48,1.2,3.47,2.06s1.78,1.79,2.35,2.82s0.99,2.07,1.27,3.13s0.41,2.14,0.41,3.24
	c0,0.64-0.02,1.26-0.07,1.84c-0.05,0.58-0.15,1.2-0.29,1.87s-0.33,1.28-0.56,1.86s-0.54,1.15-0.92,1.74s-0.83,1.11-1.35,1.58
	s-1.14,0.92-1.87,1.33S15.9,25.42,15.01,25.71z`}}]})(s)}function K9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.1,0.59,2.07,1.32,2.89,2.19s1.47,1.82,1.95,2.83s0.83,2.03,1.05,3.07s0.34,2.09,0.34,3.16
	c0,0.91-0.04,1.76-0.13,2.54s-0.27,1.63-0.53,2.53s-0.62,1.71-1.06,2.43s-1.04,1.42-1.82,2.09S16.03,25.26,15.01,25.71z`}}]})(s)}function Y9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.71,1.26,2.97,2.9,3.78,4.91S20,12.24,20,14.44c0,0.9-0.03,1.73-0.1,2.5s-0.21,1.59-0.43,2.47
	s-0.51,1.68-0.86,2.4s-0.83,1.42-1.45,2.12S15.83,25.21,15.01,25.71z`}}]})(s)}function X9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M15.01,25.71c2.04,0,3.92-0.5,5.65-1.51s3.09-2.37,4.09-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.09-4.09
	s-3.61-1.51-5.65-1.51c1.29,1.39,2.24,3.07,2.84,5.05s0.91,4.05,0.91,6.2c0,0.88-0.03,1.69-0.08,2.44s-0.16,1.55-0.32,2.41
	s-0.38,1.65-0.64,2.37s-0.63,1.43-1.09,2.15S15.62,25.15,15.01,25.71z`}}]})(s)}function Z9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M14.99,25.71c2.04,0,3.93-0.5,5.65-1.51s3.1-2.37,4.1-4.1s1.51-3.61,1.51-5.65s-0.5-3.92-1.51-5.65s-2.37-3.09-4.1-4.09
	s-3.61-1.51-5.65-1.51c1.67,2.9,2.5,6.65,2.5,11.25c0,2.33-0.17,4.43-0.52,6.3S15.97,24.26,14.99,25.71z`}}]})(s)}function J9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M13.93,14.44c-0.02,4.53,0.33,8.29,1.04,11.27c2.04,0.01,3.93-0.49,5.65-1.49s3.1-2.36,4.11-4.08s1.52-3.61,1.53-5.65
	c0.01-2.04-0.49-3.93-1.49-5.65c-1-1.73-2.36-3.1-4.08-4.11s-3.6-1.52-5.64-1.53C14.32,6.91,13.94,10.66,13.93,14.44z`}}]})(s)}function q9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M12.85,14.44c0,4.77,0.71,8.52,2.14,11.26c2.04,0,3.93-0.5,5.65-1.51s3.1-2.37,4.1-4.1s1.51-3.61,1.51-5.65
	s-0.5-3.92-1.51-5.65s-2.37-3.09-4.1-4.09s-3.61-1.51-5.65-1.51C13.57,6.61,12.85,10.36,12.85,14.44z`}}]})(s)}function b9(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M11.8,14.43c0,2.39,0.24,4.52,0.71,6.39s1.31,3.5,2.51,4.89c1.52,0,2.98-0.3,4.37-0.89s2.59-1.4,3.6-2.4s1.81-2.2,2.4-3.6
	s0.89-2.85,0.89-4.39s-0.3-2.99-0.89-4.38s-1.4-2.58-2.4-3.59s-2.2-1.81-3.6-2.4s-2.85-0.89-4.37-0.89
	c-1.02,1.46-1.81,3.16-2.37,5.13S11.8,12.3,11.8,14.43z`}}]})(s)}function tr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M10.73,14.43c0,1.19,0.07,2.29,0.2,3.3s0.35,2,0.67,2.99s0.76,1.9,1.33,2.75s1.27,1.59,2.09,2.25c1.53,0,2.99-0.3,4.38-0.89
	s2.58-1.4,3.59-2.4s1.81-2.2,2.4-3.6s0.89-2.85,0.89-4.39c0-2.04-0.5-3.93-1.51-5.65s-2.37-3.1-4.1-4.1s-3.61-1.51-5.65-1.51
	c-1.35,1.3-2.4,2.94-3.16,4.93S10.73,12.19,10.73,14.43z`}}]})(s)}function cr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.65,14.43c0,1.24,0.08,2.38,0.25,3.41s0.44,2.05,0.83,3.04s0.95,1.89,1.67,2.71s1.6,1.52,2.62,2.12
	c1.52,0,2.98-0.3,4.37-0.89s2.59-1.4,3.6-2.4s1.81-2.2,2.4-3.6s0.89-2.85,0.89-4.39s-0.3-2.99-0.89-4.38s-1.4-2.58-2.4-3.59
	s-2.2-1.81-3.6-2.4s-2.85-0.89-4.37-0.89c-1.67,1.14-2.98,2.72-3.94,4.74S9.65,12.09,9.65,14.43z`}}]})(s)}function nr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M8.58,14.43c0,1.03,0.06,1.97,0.18,2.83s0.32,1.73,0.62,2.59s0.69,1.65,1.16,2.34s1.1,1.35,1.85,1.96s1.63,1.12,2.63,1.55
	c1.53,0,2.99-0.3,4.38-0.89s2.58-1.4,3.59-2.4s1.81-2.2,2.4-3.6s0.89-2.85,0.89-4.39c0-2.04-0.5-3.93-1.51-5.65s-2.37-3.1-4.1-4.1
	s-3.61-1.51-5.65-1.51c-1.99,1-3.56,2.51-4.72,4.55S8.58,11.99,8.58,14.43z`}}]})(s)}function er(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.8,14.86c0-0.98,0.19-1.92,0.58-2.82c0.38-0.9,0.9-1.67,1.55-2.32c0.65-0.65,1.43-1.17,2.32-1.56s1.84-0.58,2.83-0.58
	h1.17c0.16,0.04,0.24,0.14,0.24,0.28l0.04,0.9c0.04,1.3,0.51,2.41,1.41,3.33s2,1.41,3.28,1.46l0.85,0.07c0.16,0,0.23,0.08,0.23,0.23
	v1.01c0.01,1.03-0.19,2-0.58,2.92h-2.05c0.51-0.74,0.83-1.59,0.97-2.53c-1.67-0.35-3.02-1.07-4.03-2.16s-1.59-2.37-1.75-3.83
	c-0.97,0.05-1.85,0.35-2.66,0.9c-0.8,0.55-1.43,1.24-1.87,2.08c-0.44,0.84-0.66,1.72-0.66,2.63c0,1.07,0.28,2.04,0.83,2.92H8.4
	C8,16.85,7.8,15.88,7.8,14.86z M8.09,20.87c0-0.29,0.09-0.52,0.28-0.68c0.18-0.18,0.41-0.26,0.69-0.26h2.63L14.8,17
	c0.1-0.08,0.22-0.08,0.35,0l3.16,2.92h2.77c0.27,0,0.5,0.09,0.69,0.28c0.19,0.18,0.29,0.41,0.29,0.67c0,0.27-0.1,0.5-0.29,0.69
	c-0.19,0.19-0.42,0.29-0.69,0.29h-3.38c-0.1,0-0.2-0.02-0.29-0.07l-2.41-2.27l-2.39,2.27c-0.08,0.05-0.17,0.07-0.28,0.07H9.06
	c-0.27,0-0.5-0.1-0.69-0.29S8.09,21.14,8.09,20.87z`}}]})(s)}function rr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.74,14.86c0-0.98,0.19-1.92,0.58-2.82c0.38-0.9,0.9-1.67,1.55-2.32c0.65-0.65,1.43-1.17,2.32-1.56
	c0.9-0.39,1.84-0.58,2.83-0.58h1.17c0.16,0.04,0.24,0.14,0.24,0.28l0.05,0.9c0.02,0.64,0.15,1.25,0.4,1.83s0.58,1.08,1,1.5
	c0.42,0.43,0.91,0.77,1.48,1.03c0.57,0.26,1.17,0.4,1.8,0.43l0.85,0.07c0.16,0,0.24,0.08,0.24,0.23v1.01
	c0.01,1.01-0.19,1.98-0.59,2.92h-2.05c0.51-0.74,0.83-1.59,0.97-2.53c-1.68-0.35-3.02-1.07-4.03-2.16s-1.59-2.37-1.75-3.83
	c-0.97,0.05-1.85,0.35-2.66,0.9c-0.8,0.55-1.42,1.24-1.87,2.08c-0.44,0.84-0.66,1.72-0.66,2.63c0,1.07,0.28,2.04,0.83,2.92H8.34
	C7.94,16.85,7.74,15.88,7.74,14.86z M7.99,20.89c0-0.26,0.1-0.49,0.3-0.69c0.18-0.18,0.41-0.27,0.68-0.27h3.22
	c0.11,0,0.2,0.02,0.28,0.08l2.35,2.22L17.21,20c0.07-0.05,0.17-0.08,0.29-0.08h3.3c0.27,0,0.5,0.09,0.69,0.28
	c0.19,0.19,0.29,0.42,0.29,0.68c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.69,0.29h-2.68l-3.13,2.84
	c-0.12,0.09-0.24,0.09-0.34,0l-3.08-2.84h-2.6c-0.27,0-0.5-0.1-0.69-0.29C8.09,21.39,7.99,21.16,7.99,20.89z`}}]})(s)}function Vn(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M6.87,18.23h1.94v-3.64h0.02l2.05,3.64h1.99v-6.66h-1.94v3.55h-0.02l-1.94-3.55h-2.1V18.23z M13.39,18.38h1.43l2.61-6.97
	h-1.42L13.39,18.38z M16.26,18.23h2.07l0.29-0.95h2.12l0.28,0.95h2.13l-2.43-6.66h-2.01L16.26,18.23z M19.07,15.84l0.64-2.04h0.03
	l0.6,2.04H19.07z`}}]})(s)}function lr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.98,21.02c0,0.23,0.09,0.43,0.27,0.6c0.17,0.17,0.37,0.25,0.61,0.25H9.6c0.26,0,0.49,0.1,0.69,0.29
	c0.2,0.19,0.3,0.42,0.3,0.68c0,0.27-0.1,0.5-0.3,0.69s-0.43,0.29-0.69,0.29c-0.26,0-0.48-0.1-0.68-0.3
	c-0.18-0.16-0.38-0.24-0.61-0.24c-0.24,0-0.44,0.08-0.6,0.24c-0.16,0.16-0.24,0.36-0.24,0.6c0,0.22,0.08,0.42,0.24,0.6
	c0.52,0.53,1.16,0.79,1.89,0.79s1.37-0.26,1.89-0.78c0.52-0.52,0.78-1.15,0.78-1.89c0-0.74-0.26-1.37-0.78-1.89
	s-1.15-0.79-1.89-0.79H3.86c-0.24,0-0.44,0.09-0.62,0.26C3.07,20.59,2.98,20.79,2.98,21.02z M2.98,18c0,0.22,0.09,0.41,0.27,0.58
	c0.17,0.16,0.38,0.24,0.61,0.24h10.85c0.74,0,1.37-0.26,1.89-0.78c0.52-0.52,0.78-1.15,0.78-1.88c0-0.74-0.26-1.36-0.78-1.88
	c-0.52-0.52-1.15-0.77-1.89-0.77c-0.76,0-1.39,0.25-1.89,0.76c-0.15,0.16-0.23,0.36-0.23,0.61c0,0.25,0.08,0.45,0.23,0.6
	c0.15,0.15,0.35,0.23,0.59,0.23s0.44-0.07,0.62-0.23c0.19-0.19,0.42-0.28,0.68-0.28c0.26,0,0.48,0.09,0.67,0.28
	c0.19,0.19,0.29,0.42,0.29,0.68c0,0.26-0.1,0.49-0.29,0.68c-0.19,0.19-0.42,0.29-0.67,0.29H3.86c-0.24,0-0.44,0.09-0.62,0.26
	C3.07,17.57,2.98,17.77,2.98,18z M5.5,15.65c0,0.09,0.05,0.13,0.16,0.13H7.1c0.08,0,0.15-0.05,0.22-0.15
	c0.22-0.54,0.57-0.99,1.05-1.35c0.47-0.35,1-0.55,1.58-0.6l0.52-0.07c0.12,0,0.19-0.06,0.19-0.17l0.08-0.52
	c0.11-1.08,0.57-1.99,1.38-2.71c0.81-0.73,1.77-1.09,2.86-1.09s2.05,0.36,2.85,1.09c0.81,0.72,1.27,1.63,1.38,2.72l0.07,0.58
	c0,0.12,0.06,0.18,0.19,0.18h1.62c0.91,0,1.68,0.32,2.32,0.95c0.64,0.63,0.96,1.39,0.96,2.28c0,0.89-0.32,1.65-0.96,2.29
	c-0.64,0.64-1.41,0.96-2.31,0.96h-6.91c-0.11,0-0.17,0.06-0.17,0.18v1.37c0,0.11,0.06,0.17,0.17,0.17h6.91
	c0.89,0,1.72-0.22,2.48-0.67s1.36-1.05,1.8-1.81s0.67-1.59,0.67-2.48c0-0.88-0.23-1.71-0.68-2.48c0.73-0.71,1.23-1.57,1.51-2.58
	L27,11.18c0.02-0.02,0.03-0.04,0.03-0.07c0-0.04-0.05-0.1-0.14-0.16l-0.6-0.21c-0.84-0.26-1.48-0.71-1.92-1.36
	c-0.44-0.65-0.66-1.32-0.66-2.02c0-0.24,0.03-0.51,0.09-0.79l0.13-0.62c0.02-0.1-0.02-0.18-0.13-0.22l-0.8-0.24
	c-0.44-0.11-0.85-0.16-1.25-0.16c-0.37,0-0.74,0.04-1.12,0.13c-0.38,0.09-0.77,0.22-1.18,0.41c-0.4,0.18-0.8,0.45-1.18,0.8
	c-0.38,0.35-0.72,0.75-1,1.22c-0.71-0.3-1.48-0.45-2.32-0.45c-1.41,0-2.66,0.44-3.75,1.31s-1.77,1.99-2.07,3.35
	c-0.86,0.2-1.61,0.61-2.27,1.23c-0.66,0.62-1.11,1.35-1.36,2.2v0.03C5.51,15.58,5.5,15.61,5.5,15.65z M18.73,8.76
	c0.31-0.55,0.74-0.97,1.29-1.26c0.55-0.29,1.12-0.44,1.71-0.44c0.14,0,0.24,0,0.31,0.01c-0.01,0.09-0.02,0.21-0.02,0.36
	c0,0.94,0.26,1.85,0.79,2.71c0.52,0.86,1.25,1.51,2.17,1.94c-0.16,0.38-0.41,0.72-0.75,1.03c-0.89-0.76-1.94-1.14-3.16-1.14h-0.33
	C20.48,10.71,19.81,9.64,18.73,8.76z`}}]})(s)}function sr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.57,13.43c0-1.15,0.36-2.18,1.08-3.08s1.63-1.48,2.73-1.74C7.7,7.24,8.4,6.12,9.5,5.24s2.35-1.31,3.76-1.31
	c1.38,0,2.61,0.43,3.69,1.28s1.78,1.95,2.1,3.29h0.33c0.9,0,1.73,0.22,2.49,0.65c0.76,0.43,1.37,1.03,1.81,1.79
	c0.44,0.76,0.67,1.58,0.67,2.48c0,1.15-0.35,2.18-1.06,3.08c0.64,0.55,1.4,0.84,2.26,0.87l0.66,0.06c0.12,0,0.18,0.06,0.18,0.19
	v0.77c0.01,1.01-0.24,1.95-0.73,2.8c-0.49,0.86-1.17,1.53-2.02,2.03c-0.85,0.5-1.78,0.75-2.79,0.75c-0.77,0-1.5-0.15-2.19-0.44
	c-0.69-0.29-1.28-0.69-1.78-1.19c-0.49-0.5-0.89-1.09-1.18-1.78c-0.29-0.69-0.44-1.41-0.44-2.17H8.37c-1.34-0.06-2.47-0.57-3.4-1.53
	S3.57,14.76,3.57,13.43z M5.28,13.43c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.19,1.02h11.19c0.86-0.04,1.59-0.38,2.19-1.02
	c0.6-0.64,0.9-1.39,0.9-2.26c0-0.88-0.32-1.63-0.97-2.28c-0.65-0.64-1.42-0.97-2.31-0.97h-1.62c-0.11,0-0.17-0.06-0.17-0.17
	l-0.07-0.58c-0.11-1.08-0.58-1.99-1.4-2.71s-1.77-1.09-2.86-1.09c-1.1,0-2.05,0.36-2.86,1.09S9.13,8.35,9.03,9.43l-0.07,0.58
	c0,0.11-0.07,0.17-0.2,0.17H8.23c-0.84,0.1-1.54,0.46-2.1,1.07S5.28,12.59,5.28,13.43z M16.71,18.39c0,0.79,0.2,1.52,0.6,2.17
	c0.4,0.65,0.91,1.15,1.54,1.5c0.63,0.35,1.29,0.52,1.99,0.52c0.62,0,1.23-0.15,1.82-0.45c0.6-0.3,1.12-0.75,1.58-1.36
	s0.75-1.31,0.86-2.1c-1.08-0.22-1.98-0.65-2.72-1.3c-0.84,0.65-1.78,0.99-2.82,1.01H16.71z`}}]})(s)}function ir(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.35,21.05c0,0.24,0.08,0.43,0.25,0.59c0.17,0.16,0.38,0.23,0.63,0.23h9.4c0.24,0,0.43-0.08,0.59-0.23
	c0.16-0.16,0.23-0.35,0.23-0.59c0-0.25-0.08-0.45-0.23-0.61c-0.16-0.16-0.35-0.24-0.59-0.24h-9.4c-0.25,0-0.46,0.08-0.63,0.24
	S2.35,20.8,2.35,21.05z M4.98,18c0,0.24,0.09,0.44,0.26,0.6c0.16,0.17,0.36,0.25,0.6,0.25h9.42c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.6c0-0.23-0.08-0.43-0.23-0.59s-0.35-0.24-0.59-0.24H5.85c-0.24,0-0.44,0.08-0.61,0.24
	C5.07,17.57,4.98,17.77,4.98,18z M6.02,15.66c0,0.09,0.06,0.14,0.18,0.14h1.43c0.09,0,0.16-0.05,0.22-0.14
	c0.23-0.54,0.57-0.99,1.04-1.35c0.47-0.36,0.99-0.56,1.58-0.6l0.55-0.07c0.12,0,0.18-0.06,0.18-0.17l0.07-0.52
	c0.11-1.09,0.57-2,1.38-2.72c0.82-0.73,1.77-1.09,2.87-1.09c1.09,0,2.04,0.36,2.84,1.08c0.8,0.72,1.27,1.62,1.41,2.71l0.08,0.58
	c0,0.11,0.06,0.17,0.18,0.17h1.61c0.91,0,1.68,0.32,2.32,0.96c0.64,0.64,0.96,1.41,0.96,2.31c0,0.88-0.32,1.65-0.97,2.29
	c-0.65,0.65-1.41,0.97-2.3,0.97h-6.91c-0.11,0-0.17,0.06-0.17,0.17v1.34c0,0.11,0.06,0.17,0.17,0.17h6.91c0.9,0,1.73-0.22,2.49-0.66
	c0.76-0.44,1.37-1.04,1.81-1.8c0.44-0.76,0.67-1.59,0.67-2.49s-0.22-1.72-0.65-2.47c0.72-0.64,1.22-1.5,1.51-2.58l0.18-0.68
	c0.01-0.01,0.01-0.03,0.01-0.07c0-0.08-0.05-0.13-0.15-0.16l-0.62-0.22c-0.44-0.13-0.83-0.32-1.16-0.57
	c-0.34-0.25-0.6-0.53-0.8-0.84c-0.2-0.31-0.34-0.62-0.44-0.94c-0.1-0.32-0.15-0.63-0.15-0.95c0-0.24,0.04-0.53,0.11-0.87l0.13-0.61
	c0.04-0.09,0-0.17-0.13-0.23L23.62,5.5c-0.44-0.11-0.85-0.16-1.25-0.16c-0.38,0-0.75,0.04-1.13,0.13s-0.77,0.22-1.18,0.41
	c-0.41,0.18-0.8,0.45-1.18,0.8c-0.38,0.35-0.71,0.75-0.99,1.22c-0.77-0.32-1.57-0.48-2.37-0.48c-1.41,0-2.66,0.44-3.75,1.32
	s-1.78,2-2.08,3.38c-0.87,0.2-1.63,0.61-2.28,1.22c-0.65,0.62-1.11,1.35-1.36,2.21v0.03C6.03,15.59,6.02,15.62,6.02,15.66z
	 M6.75,24.15c0,0.24,0.08,0.44,0.25,0.6C7.16,24.92,7.36,25,7.6,25h9.43c0.24,0,0.44-0.08,0.61-0.25c0.17-0.17,0.25-0.37,0.25-0.6
	c0-0.23-0.08-0.43-0.25-0.59c-0.17-0.16-0.37-0.24-0.61-0.24H7.6c-0.24,0-0.44,0.08-0.6,0.24C6.83,23.72,6.75,23.92,6.75,24.15z
	 M19.33,8.78c0.34-0.55,0.79-0.98,1.35-1.28c0.55-0.3,1.12-0.45,1.7-0.44c0.11,0,0.2,0,0.25,0.01v0.24c0,0.97,0.26,1.9,0.79,2.79
	c0.53,0.88,1.25,1.55,2.17,1.98c-0.17,0.4-0.43,0.76-0.76,1.07c-0.88-0.79-1.95-1.18-3.2-1.18h-0.32
	C21.06,10.77,20.4,9.71,19.33,8.78z`}}]})(s)}function or(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.14,16.9c0-1.16,0.35-2.18,1.06-3.08s1.62-1.47,2.74-1.72c0.23-1.03,0.7-1.93,1.4-2.7c0.7-0.77,1.55-1.32,2.53-1.65
	c0.62-0.21,1.26-0.32,1.93-0.32c0.81,0,1.6,0.16,2.35,0.48c0.28-0.47,0.61-0.88,0.99-1.22c0.38-0.34,0.77-0.61,1.17-0.79
	c0.4-0.18,0.8-0.32,1.18-0.41s0.76-0.13,1.12-0.13c0.38,0,0.79,0.05,1.23,0.16l0.82,0.25c0.14,0.06,0.18,0.13,0.14,0.22l-0.14,0.6
	c-0.07,0.31-0.1,0.6-0.1,0.86c0,0.31,0.05,0.63,0.15,0.95c0.1,0.32,0.24,0.63,0.44,0.94c0.19,0.31,0.46,0.58,0.8,0.83
	c0.34,0.25,0.72,0.44,1.15,0.57l0.62,0.22c0.1,0.03,0.15,0.08,0.15,0.16c0,0.02-0.01,0.04-0.02,0.07l-0.18,0.67
	c-0.27,1.08-0.78,1.93-1.5,2.57c0.4,0.7,0.62,1.45,0.65,2.24c0.01,0.05,0.01,0.12,0.01,0.23c0,0.89-0.22,1.72-0.67,2.48
	c-0.44,0.76-1.05,1.36-1.8,1.8c-0.76,0.44-1.59,0.67-2.48,0.67H9.07c-0.89,0-1.72-0.22-2.48-0.67s-1.35-1.05-1.79-1.8
	S4.14,17.8,4.14,16.9z M5.85,16.9c0,0.89,0.32,1.66,0.96,2.31c0.64,0.65,1.39,0.98,2.26,0.98h10.81c0.89,0,1.65-0.32,2.28-0.97
	s0.95-1.42,0.95-2.32c0-0.88-0.32-1.63-0.96-2.26c-0.64-0.63-1.4-0.95-2.28-0.95h-1.78l-0.1-0.75c-0.1-1.01-0.52-1.88-1.26-2.59
	s-1.62-1.11-2.63-1.2c-0.03,0-0.08,0-0.15-0.01c-0.07-0.01-0.11-0.01-0.15-0.01c-0.51,0-1.02,0.1-1.54,0.29V9.4
	c-0.73,0.28-1.35,0.74-1.84,1.37c-0.5,0.63-0.8,1.35-0.9,2.17l-0.07,0.72l-0.68,0.03c-0.84,0.1-1.54,0.45-2.1,1.06
	S5.85,16.07,5.85,16.9z M17.6,8.79c1.06,0.91,1.72,1.97,1.97,3.18h0.32c1.24,0,2.3,0.39,3.17,1.18c0.33-0.31,0.58-0.67,0.76-1.07
	c-0.91-0.43-1.63-1.09-2.16-1.97c-0.52-0.88-0.79-1.81-0.79-2.78V7.09c-0.05-0.01-0.13-0.01-0.24-0.01
	c-0.58-0.01-1.15,0.13-1.7,0.44C18.38,7.82,17.93,8.24,17.6,8.79z`}}]})(s)}function ur(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.1,16.91c0,1.33,0.46,2.48,1.39,3.43s2.06,1.47,3.4,1.53c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.86-0.04-1.58-0.38-2.18-1.02s-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.84-2.17c0.56-0.61,1.26-0.97,2.1-1.07l0.53-0.03
	c0.13,0,0.2-0.06,0.2-0.18l0.07-0.54c0.11-1.08,0.56-1.99,1.37-2.72c0.81-0.73,1.76-1.1,2.85-1.1c1.08,0,2.03,0.37,2.85,1.1
	c0.82,0.73,1.28,1.64,1.4,2.72l0.08,0.58c0,0.11,0.06,0.17,0.17,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96c0.65,0.64,0.98,1.4,0.98,2.27
	c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.02c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17
	c1.33-0.04,2.46-0.55,3.38-1.51c0.93-0.96,1.39-2.11,1.39-3.45c0-0.86-0.22-1.66-0.65-2.41c0.79-0.74,1.3-1.62,1.55-2.62l0.13-0.68
	c0.02-0.01,0.03-0.03,0.03-0.07c0-0.07-0.05-0.13-0.16-0.16l-0.56-0.17c-0.57-0.17-1.05-0.45-1.46-0.85
	c-0.4-0.4-0.69-0.81-0.86-1.25c-0.17-0.43-0.25-0.87-0.25-1.32c-0.01-0.24,0.02-0.51,0.08-0.79l0.14-0.58
	c0.03-0.09-0.02-0.16-0.14-0.22l-0.8-0.25c-0.42-0.12-0.86-0.19-1.31-0.19c-0.35,0-0.71,0.04-1.08,0.13s-0.76,0.22-1.17,0.4
	c-0.41,0.18-0.8,0.45-1.19,0.8c-0.38,0.35-0.72,0.75-1,1.22c-0.75-0.32-1.54-0.49-2.37-0.49c-1.41,0-2.67,0.44-3.76,1.31
	s-1.79,1.99-2.1,3.36c-1.11,0.26-2.02,0.83-2.74,1.73S4.1,15.76,4.1,16.91z M9.58,23.94c0.09,0.21,0.24,0.36,0.46,0.45
	c0.19,0.1,0.4,0.11,0.62,0.02c0.22-0.08,0.37-0.23,0.45-0.45c0.1-0.22,0.11-0.43,0.02-0.65c-0.08-0.21-0.23-0.36-0.45-0.44
	c-0.2-0.1-0.41-0.11-0.62-0.02c-0.21,0.09-0.37,0.24-0.47,0.46C9.5,23.48,9.49,23.69,9.58,23.94z M10.2,21.11
	c0,0.15,0.05,0.3,0.16,0.45s0.26,0.26,0.46,0.32c0.26,0.1,0.48,0.1,0.67,0c0.19-0.1,0.32-0.29,0.4-0.57l0.88-3.21
	c0.07-0.25,0.04-0.47-0.08-0.67c-0.12-0.2-0.3-0.32-0.54-0.37c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.33,0.28-0.4,0.51
	l-0.88,3.22c0,0.02-0.01,0.06-0.02,0.12C10.21,21.03,10.2,21.08,10.2,21.11z M12.07,26.71c0,0.12,0.02,0.22,0.06,0.29
	c0.09,0.22,0.24,0.37,0.45,0.45c0.09,0.05,0.2,0.07,0.33,0.07c0.06,0,0.16-0.02,0.3-0.06c0.23-0.08,0.39-0.23,0.48-0.45
	c0.1-0.22,0.1-0.44,0-0.66c-0.1-0.22-0.25-0.37-0.45-0.46c-0.2-0.09-0.4-0.09-0.61,0c-0.19,0.08-0.33,0.2-0.42,0.36
	C12.11,26.42,12.07,26.57,12.07,26.71z M12.81,24.06c0,0.38,0.21,0.64,0.64,0.78c0.09,0.03,0.17,0.05,0.23,0.05
	c0.11,0,0.23-0.03,0.35-0.08c0.23-0.08,0.39-0.27,0.47-0.57l1.65-6.12c0.06-0.24,0.04-0.45-0.07-0.65c-0.11-0.19-0.28-0.32-0.5-0.39
	c-0.23-0.07-0.45-0.05-0.65,0.07c-0.2,0.11-0.34,0.28-0.4,0.51l-1.68,6.17C12.82,23.92,12.81,24,12.81,24.06z M16.25,23.64
	c0,0.13,0.02,0.23,0.07,0.31c0.08,0.2,0.23,0.35,0.44,0.44c0.12,0.05,0.23,0.08,0.35,0.08c0.06,0,0.16-0.02,0.3-0.06
	c0.22-0.09,0.37-0.23,0.45-0.44c0.08-0.22,0.08-0.43,0-0.63c-0.08-0.2-0.22-0.35-0.42-0.45c-0.22-0.1-0.44-0.11-0.65-0.02
	c-0.22,0.08-0.37,0.24-0.47,0.46C16.27,23.41,16.25,23.51,16.25,23.64z M16.97,21.08c0,0.16,0.05,0.32,0.15,0.46
	c0.1,0.14,0.25,0.25,0.45,0.31c0.17,0.02,0.26,0.03,0.27,0.03c0.41,0,0.66-0.2,0.77-0.61l0.87-3.17c0.06-0.24,0.04-0.45-0.07-0.65
	c-0.11-0.19-0.28-0.32-0.5-0.39c-0.23-0.07-0.45-0.05-0.64,0.07c-0.2,0.11-0.33,0.28-0.4,0.51L17,20.81
	C16.98,20.9,16.97,20.99,16.97,21.08z M17.62,8.83c0.31-0.57,0.75-1.01,1.3-1.31c0.55-0.3,1.14-0.45,1.76-0.44
	c0.11,0,0.2,0.01,0.25,0.02v0.31c0,0.98,0.26,1.89,0.78,2.75c0.52,0.86,1.25,1.51,2.17,1.95c-0.19,0.44-0.44,0.79-0.75,1.07
	C22.25,12.39,21.17,12,19.88,12h-0.32C19.3,10.75,18.66,9.69,17.62,8.83z`}}]})(s)}function ar(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.12,16.91c0,1.33,0.46,2.48,1.39,3.43s2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.37c0-0.12-0.06-0.18-0.17-0.18
	c-0.87-0.07-1.6-0.41-2.19-1.04c-0.59-0.62-0.89-1.36-0.89-2.21c0-0.84,0.28-1.57,0.85-2.19c0.57-0.62,1.26-0.97,2.1-1.04l0.53-0.07
	c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.08,0.56-1.99,1.37-2.71c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09
	c0.81,0.72,1.27,1.63,1.39,2.72l0.07,0.58c0,0.12,0.06,0.18,0.18,0.18h1.61c0.91,0,1.68,0.32,2.32,0.95
	c0.64,0.63,0.96,1.39,0.96,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.32,0.97-2.19,1.04c-0.13,0-0.2,0.06-0.2,0.18v1.37
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.38-1.51s1.38-2.11,1.38-3.45c0-0.89-0.23-1.72-0.68-2.48
	c0.8-0.72,1.32-1.58,1.55-2.58l0.15-0.72c0.01-0.01,0.01-0.03,0.01-0.07c0-0.07-0.05-0.13-0.16-0.16l-0.58-0.17
	c-0.57-0.16-1.05-0.44-1.45-0.82c-0.4-0.39-0.68-0.8-0.85-1.23c-0.17-0.43-0.25-0.87-0.25-1.32c0-0.24,0.03-0.51,0.09-0.79
	l0.14-0.62c0.03-0.09-0.02-0.17-0.14-0.22l-0.79-0.24c-0.44-0.11-0.85-0.16-1.25-0.16c-0.36,0-0.73,0.04-1.12,0.13
	c-0.38,0.09-0.78,0.22-1.19,0.41c-0.41,0.18-0.81,0.45-1.2,0.8c-0.39,0.35-0.72,0.75-1,1.22c-0.71-0.3-1.48-0.45-2.33-0.45
	c-1.41,0-2.66,0.44-3.75,1.31c-1.09,0.87-1.79,1.99-2.1,3.35c-1.1,0.26-2.01,0.84-2.73,1.74C4.48,14.74,4.12,15.76,4.12,16.91z
	 M11.79,21.56c-0.05,0.14,0,0.22,0.14,0.22h2.16l-1.31,4.14h0.3l4.17-5.59c0.04-0.04,0.05-0.09,0.03-0.14
	c-0.02-0.05-0.06-0.07-0.13-0.07h-2.2l2.31-4.21c0.07-0.14,0.02-0.22-0.14-0.22h-2.94c-0.08,0-0.15,0.05-0.22,0.14L11.79,21.56z
	 M17.6,8.81c0.33-0.57,0.77-1,1.33-1.3c0.55-0.3,1.13-0.45,1.72-0.45c0.13,0,0.22,0.01,0.27,0.02v0.31c0,0.96,0.26,1.87,0.78,2.73
	c0.52,0.86,1.24,1.51,2.17,1.96c-0.16,0.37-0.41,0.73-0.75,1.07c-0.92-0.79-1.99-1.18-3.22-1.18h-0.32
	C19.29,10.71,18.63,9.66,17.6,8.81z`}}]})(s)}function dr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M6.77,19.65c0-0.79,0.23-1.48,0.68-2.09c0.45-0.61,1.06-1.03,1.81-1.27c0.32-1.09,0.98-1.92,1.99-2.49v-0.35
	c0-1.46,0.46-2.74,1.38-3.85s2.09-1.8,3.5-2.06c0.36-0.06,0.72-0.09,1.08-0.09h0.03c0.21,0,0.44,0.02,0.7,0.05
	c0.26,0.02,0.5,0.06,0.73,0.11l0.91,0.28c0.13,0.07,0.18,0.16,0.16,0.26l-0.13,0.7C19.54,9.18,19.5,9.5,19.5,9.82
	c0,0.35,0.05,0.71,0.16,1.07c0.11,0.37,0.27,0.72,0.5,1.08s0.52,0.68,0.91,0.97c0.38,0.29,0.83,0.51,1.33,0.66l0.71,0.21
	c0.11,0.03,0.17,0.08,0.17,0.18c0,0.04,0,0.06-0.01,0.07l-0.18,0.68c-0.06,0.24-0.13,0.49-0.22,0.73c-0.15,0.44-0.38,0.89-0.7,1.37
	c0-0.01,0-0.01-0.01-0.01c-0.44,0.63-0.98,1.16-1.64,1.58c0.14,0.34,0.21,0.75,0.21,1.24c0,0.99-0.35,1.83-1.04,2.53
	c-0.69,0.7-1.52,1.05-2.49,1.05h-6.85c-0.97,0-1.81-0.35-2.52-1.06C7.13,21.46,6.77,20.62,6.77,19.65z M8.75,19.65
	c0,0.45,0.15,0.83,0.46,1.15s0.69,0.47,1.14,0.47h6.85c0.43,0,0.8-0.16,1.12-0.48c0.32-0.32,0.47-0.7,0.47-1.14
	c0-0.43-0.16-0.8-0.47-1.12s-0.69-0.47-1.12-0.47H15.9c-0.11,0-0.19-0.07-0.25-0.23l-0.08-0.64c-0.07-0.58-0.32-1.06-0.75-1.44
	s-0.93-0.58-1.51-0.58c-0.57,0-1.06,0.19-1.48,0.58c-0.42,0.39-0.66,0.87-0.73,1.44l-0.1,0.55c0,0.15-0.06,0.22-0.19,0.22
	l-0.63,0.08c-0.41,0.04-0.75,0.21-1.02,0.51C8.89,18.87,8.75,19.23,8.75,19.65z M13.18,13.25h0.12c0.93,0,1.75,0.26,2.49,0.78
	c0.73,0.52,1.25,1.22,1.54,2.1c0.77,0,1.45,0.24,2.03,0.72c0.69-0.43,1.2-1.02,1.53-1.75c-1.04-0.52-1.85-1.27-2.43-2.25
	s-0.88-2.01-0.88-3.11V9.39c-0.03,0-0.07,0-0.12,0c-0.05,0-0.09,0-0.12,0c-0.61,0-1.2,0.13-1.77,0.39
	c-0.57,0.26-1.05,0.64-1.44,1.12l-0.03-0.02C13.55,11.56,13.25,12.35,13.18,13.25z`}}]})(s)}function fr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.07,16.93c0,1.33,0.47,2.47,1.4,3.43s2.07,1.47,3.4,1.51c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.85-0.04-1.58-0.39-2.18-1.03s-0.91-1.39-0.91-2.23c0-0.85,0.28-1.59,0.85-2.21c0.57-0.62,1.27-0.97,2.1-1.04l0.53-0.07
	c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51c0.11-1.1,0.56-2.02,1.37-2.75c0.81-0.73,1.76-1.1,2.86-1.1c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.29,1.64,1.4,2.72l0.07,0.57c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.97
	c0.65,0.64,0.97,1.41,0.97,2.31c0,0.55-0.14,1.07-0.41,1.56s-0.65,0.89-1.13,1.2c-0.48,0.31-1,0.48-1.56,0.51
	c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c0.88-0.02,1.69-0.26,2.42-0.71c0.73-0.45,1.31-1.05,1.73-1.8
	c0.42-0.75,0.63-1.56,0.63-2.43c0-0.88-0.23-1.72-0.68-2.51c0.83-0.74,1.36-1.62,1.58-2.62l0.14-0.68c0.02-0.02,0.03-0.04,0.03-0.07
	c0-0.06-0.06-0.11-0.17-0.16l-0.55-0.18c-0.57-0.17-1.07-0.45-1.47-0.85c-0.41-0.4-0.7-0.81-0.87-1.25
	c-0.17-0.43-0.26-0.86-0.26-1.29c-0.02-0.21,0.01-0.49,0.09-0.82l0.13-0.58c0.04-0.1,0-0.18-0.13-0.23l-0.8-0.24
	c-0.41-0.11-0.84-0.17-1.29-0.17c-0.36,0-0.74,0.04-1.12,0.13c-0.38,0.09-0.78,0.22-1.19,0.41s-0.81,0.46-1.2,0.81
	c-0.39,0.35-0.72,0.76-1,1.23c-0.81-0.31-1.6-0.46-2.35-0.46c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.37
	c-1.12,0.29-2.04,0.88-2.75,1.77C4.42,14.74,4.07,15.77,4.07,16.93z M9.48,23.98c0,0.17,0.05,0.34,0.16,0.51
	c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.44,0.06,0.64-0.04s0.32-0.28,0.39-0.56l0.14-0.61c0.05-0.23,0.02-0.44-0.09-0.63
	c-0.11-0.2-0.28-0.33-0.52-0.4c-0.23-0.07-0.44-0.04-0.64,0.08s-0.34,0.3-0.4,0.53L9.5,23.79C9.48,23.83,9.48,23.89,9.48,23.98z
	 M10.24,21.08c0,0.21,0.08,0.4,0.25,0.57c0.16,0.17,0.34,0.25,0.56,0.25c0.24,0,0.44-0.08,0.6-0.24c0.16-0.16,0.24-0.35,0.24-0.59
	c0-0.23-0.08-0.43-0.24-0.59c-0.16-0.16-0.36-0.24-0.6-0.24c-0.23,0-0.43,0.08-0.58,0.23S10.24,20.85,10.24,21.08z M10.85,18.81
	c-0.01,0.16,0.03,0.31,0.14,0.45c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07c0.21-0.11,0.34-0.28,0.41-0.51
	l0.28-0.9c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07
	c-0.2,0.11-0.34,0.28-0.41,0.5l-0.24,0.92c0,0.02-0.01,0.06-0.02,0.12C10.85,18.72,10.85,18.77,10.85,18.81z M12.01,27.1
	c0,0.18,0.05,0.34,0.15,0.5c0.1,0.16,0.26,0.27,0.48,0.33c0.08,0.02,0.17,0.03,0.25,0.03c0.43,0,0.69-0.2,0.79-0.61l0.14-0.59
	c0.06-0.26,0.03-0.48-0.08-0.68s-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.14,0.59
	C12.02,26.97,12.01,27.04,12.01,27.1z M12.79,24.2c0,0.22,0.08,0.41,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58s-0.35-0.23-0.59-0.23s-0.43,0.08-0.59,0.23
	C12.87,23.77,12.79,23.97,12.79,24.2z M13.42,21.93c-0.01,0.15,0.03,0.31,0.13,0.47s0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06c0.19-0.1,0.33-0.29,0.41-0.56l0.27-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53l-0.22,0.9C13.43,21.74,13.42,21.83,13.42,21.93z M16.17,24.08
	c0,0.16,0.05,0.32,0.15,0.48s0.26,0.27,0.46,0.33c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.1,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.11-0.21-0.28-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.02-0.01,0.07-0.02,0.12C16.18,24,16.17,24.04,16.17,24.08z
	 M16.91,21.12c0,0.22,0.08,0.42,0.25,0.57c0.15,0.16,0.34,0.24,0.57,0.24c0.24,0,0.43-0.08,0.59-0.23s0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59s-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23S16.91,20.88,16.91,21.12z M17.52,18.81
	c0,0.17,0.05,0.33,0.16,0.48s0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.1,0,0.22-0.03,0.36-0.09c0.21-0.11,0.35-0.29,0.41-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.08-0.63c-0.11-0.2-0.28-0.33-0.51-0.4
	c-0.23-0.07-0.44-0.05-0.64,0.06s-0.32,0.27-0.39,0.51l-0.28,0.91c0,0.02-0.01,0.06-0.02,0.12C17.53,18.74,17.52,18.78,17.52,18.81z
	 M17.59,8.76c0.32-0.58,0.76-1.02,1.31-1.34c0.56-0.32,1.13-0.47,1.73-0.46c0.09,0,0.19,0.01,0.3,0.03V7.3
	c-0.01,0.98,0.25,1.9,0.77,2.76c0.53,0.86,1.27,1.5,2.22,1.94c-0.19,0.41-0.46,0.78-0.8,1.11c-0.92-0.76-2-1.14-3.23-1.14h-0.31
	C19.27,10.66,18.61,9.59,17.59,8.76z`}}]})(s)}function pr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.06,16.93c0,1.12,0.33,2.12,1,3c0.67,0.88,1.52,1.47,2.57,1.77c0.09,0.02,0.17-0.01,0.24-0.08L9,20.22
	c-0.88,0-1.63-0.32-2.27-0.97c-0.64-0.65-0.96-1.42-0.96-2.32c0-0.84,0.28-1.56,0.84-2.17s1.27-0.95,2.11-1.03l0.5-0.07
	c0.12,0,0.19-0.06,0.19-0.19l0.08-0.53c0.12-1.09,0.59-2,1.41-2.73c0.81-0.73,1.77-1.1,2.86-1.1c1.09,0,2.04,0.37,2.86,1.1
	s1.29,1.64,1.41,2.72l0.07,0.58c0,0.11,0.06,0.17,0.18,0.17h1.62c0.88,0,1.64,0.32,2.28,0.96s0.96,1.4,0.96,2.28
	c0,0.85-0.28,1.59-0.84,2.22s-1.25,0.98-2.07,1.05c-0.45,0.06-0.74,0.15-0.86,0.28l-2.33,2.91c-0.16,0.17-0.22,0.38-0.19,0.63
	c0.02,0.24,0.13,0.43,0.31,0.59c0.18,0.16,0.37,0.23,0.57,0.23c0.23,0,0.44-0.12,0.64-0.38l2.04-2.59c0.62-0.06,1.2-0.24,1.76-0.52
	c0.55-0.28,1.03-0.65,1.42-1.08c0.39-0.44,0.71-0.95,0.94-1.53c0.23-0.58,0.35-1.18,0.35-1.81c0-0.87-0.23-1.68-0.68-2.44
	c0.81-0.74,1.34-1.61,1.58-2.62v-0.09l0.2-0.77l-0.76-0.26c-0.57-0.17-1.06-0.45-1.47-0.83s-0.69-0.8-0.86-1.23
	c-0.17-0.43-0.26-0.87-0.26-1.31c0-0.26,0.03-0.52,0.08-0.8l0.19-0.78l-0.83-0.23c-0.01,0-0.02,0-0.03-0.01s-0.02-0.02-0.04-0.02
	s-0.03-0.01-0.04-0.02C21.91,5.5,21.9,5.49,21.9,5.49c-0.44-0.11-0.85-0.16-1.25-0.16c-0.38,0.01-0.76,0.05-1.15,0.14
	s-0.78,0.22-1.2,0.41c-0.42,0.19-0.82,0.46-1.2,0.81s-0.72,0.76-1,1.24c-0.75-0.33-1.53-0.49-2.34-0.49c-1.41,0-2.67,0.44-3.76,1.31
	s-1.8,1.99-2.11,3.36c-1.13,0.27-2.05,0.86-2.76,1.75S4.06,15.77,4.06,16.93z M7.77,24.92c0,0.13,0.02,0.23,0.07,0.31
	c0.09,0.22,0.23,0.37,0.43,0.46c0.22,0.1,0.44,0.11,0.67,0.03c0.23-0.08,0.38-0.23,0.46-0.44c0.1-0.22,0.1-0.44,0.01-0.67
	c-0.09-0.23-0.24-0.38-0.45-0.45c-0.22-0.1-0.44-0.11-0.66-0.02c-0.22,0.08-0.37,0.24-0.45,0.45C7.79,24.67,7.77,24.79,7.77,24.92z
	 M9.61,22.47v0.11c0.02,0.23,0.13,0.41,0.33,0.55c0.13,0.15,0.31,0.22,0.54,0.22c0.23-0.01,0.45-0.11,0.66-0.32l2.33-2.92
	c0.14-0.17,0.19-0.38,0.17-0.62c-0.03-0.24-0.12-0.43-0.3-0.58c-0.18-0.14-0.38-0.2-0.63-0.18c-0.24,0.02-0.43,0.14-0.57,0.34
	l-2.32,2.86C9.68,22.09,9.61,22.27,9.61,22.47z M10.19,27.68c0.09,0.21,0.24,0.36,0.46,0.45c0.11,0.05,0.22,0.08,0.33,0.08
	c0.06,0,0.16-0.02,0.3-0.06c0.21-0.09,0.36-0.23,0.44-0.44c0.08-0.22,0.08-0.43,0.01-0.65c-0.07-0.21-0.22-0.37-0.44-0.48
	c-0.22-0.08-0.43-0.08-0.63,0s-0.35,0.23-0.45,0.44C10.1,27.22,10.09,27.43,10.19,27.68z M11.78,25.02v0.08
	c0.02,0.22,0.13,0.42,0.32,0.58c0.19,0.16,0.38,0.24,0.56,0.24c0.22,0,0.42-0.11,0.6-0.34l4.31-5.36c0.14-0.17,0.21-0.38,0.19-0.62
	c-0.02-0.24-0.12-0.44-0.29-0.58c-0.2-0.14-0.42-0.2-0.66-0.18c-0.24,0.02-0.43,0.12-0.57,0.3l-4.27,5.36
	C11.84,24.65,11.78,24.83,11.78,25.02z M15.29,26.13c0,0.11,0.02,0.22,0.07,0.33c0.08,0.23,0.24,0.38,0.47,0.47
	c0.23,0.09,0.43,0.09,0.61,0.02c0.22-0.09,0.37-0.24,0.46-0.46c0.1-0.22,0.11-0.43,0.03-0.64c-0.08-0.21-0.23-0.36-0.45-0.46
	c-0.22-0.08-0.44-0.08-0.65,0c-0.22,0.08-0.37,0.22-0.47,0.42C15.31,25.92,15.29,26.03,15.29,26.13z M17.57,8.81
	c0.31-0.57,0.75-1.01,1.3-1.32c0.55-0.3,1.14-0.45,1.76-0.44c0.12,0,0.21,0,0.26,0.01v0.3c0,0.97,0.27,1.89,0.8,2.75
	c0.53,0.87,1.26,1.52,2.19,1.96c-0.25,0.47-0.51,0.84-0.79,1.12c-0.89-0.79-1.96-1.18-3.22-1.18h-0.32
	C19.26,10.74,18.6,9.67,17.57,8.81z`}}]})(s)}function hr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.07,16.9c0,1.33,0.47,2.48,1.4,3.44s2.07,1.47,3.4,1.53c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.86-0.05-1.59-0.39-2.19-1.03c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.85-2.17c0.57-0.62,1.27-0.97,2.1-1.07l0.53-0.04
	c0.13,0,0.2-0.06,0.2-0.17l0.07-0.54c0.11-1.08,0.57-1.99,1.38-2.72c0.81-0.73,1.77-1.1,2.86-1.1c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.28,1.64,1.4,2.72l0.08,0.57c0,0.12,0.06,0.18,0.17,0.18h1.62c0.89,0,1.67,0.32,2.32,0.96c0.65,0.64,0.98,1.4,0.98,2.28
	c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.19,1.03c-0.14,0-0.21,0.06-0.21,0.17v1.34c0,0.11,0.07,0.17,0.21,0.17
	c1.33-0.04,2.46-0.55,3.38-1.51c0.93-0.97,1.39-2.12,1.39-3.45c0-0.88-0.23-1.7-0.68-2.46c0.81-0.73,1.33-1.6,1.58-2.62l0.14-0.72
	c0.01-0.01,0.02-0.03,0.02-0.07c0-0.07-0.05-0.13-0.16-0.16l-0.56-0.18c-0.57-0.16-1.06-0.44-1.46-0.83
	c-0.41-0.39-0.7-0.8-0.87-1.23c-0.17-0.43-0.26-0.86-0.26-1.28c-0.02-0.22,0.01-0.5,0.08-0.82l0.14-0.61c0.04-0.1,0-0.18-0.14-0.24
	l-0.79-0.24c-0.45-0.1-0.87-0.15-1.27-0.15c-0.38,0-0.76,0.04-1.14,0.13c-0.39,0.09-0.79,0.22-1.2,0.41
	c-0.41,0.18-0.81,0.45-1.2,0.8c-0.39,0.35-0.72,0.75-1,1.22c-0.82-0.3-1.6-0.45-2.33-0.45c-1.41,0-2.67,0.44-3.76,1.32
	s-1.8,2-2.11,3.37c-1.11,0.26-2.02,0.83-2.74,1.73C4.43,14.72,4.07,15.75,4.07,16.9z M9.63,23.74c0,0.17,0.05,0.33,0.16,0.49
	c0.11,0.16,0.27,0.27,0.49,0.33c0.23,0.07,0.45,0.05,0.64-0.04c0.2-0.1,0.33-0.28,0.4-0.56l1.43-5.87c0.06-0.25,0.03-0.48-0.08-0.67
	c-0.12-0.2-0.29-0.32-0.52-0.37c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.34,0.28-0.41,0.51l-1.44,5.9
	c0,0.01-0.01,0.04-0.02,0.09C9.64,23.67,9.63,23.71,9.63,23.74z M12.24,26.81c0,0.16,0.05,0.31,0.15,0.46
	c0.1,0.15,0.25,0.25,0.45,0.31c0.11,0.03,0.19,0.04,0.24,0.04c0.44,0,0.71-0.2,0.82-0.59l2.25-8.93c0.06-0.24,0.04-0.46-0.07-0.65
	c-0.11-0.19-0.28-0.32-0.5-0.39c-0.23-0.07-0.45-0.05-0.66,0.07s-0.34,0.28-0.39,0.5l-2.26,8.92c0,0.01,0,0.05-0.01,0.12
	C12.24,26.73,12.24,26.78,12.24,26.81z M16.4,23.82c0,0.36,0.21,0.6,0.63,0.74c0.14,0.04,0.24,0.06,0.3,0.06
	c0.11,0,0.23-0.02,0.35-0.07c0.21-0.08,0.34-0.28,0.39-0.58l1.43-5.87c0.06-0.24,0.04-0.45-0.08-0.65
	c-0.11-0.19-0.28-0.32-0.51-0.39c-0.23-0.07-0.45-0.05-0.66,0.07c-0.21,0.11-0.33,0.28-0.38,0.51l-1.43,5.9
	C16.42,23.7,16.4,23.8,16.4,23.82z M17.58,8.77c0.32-0.58,0.75-1.02,1.31-1.33c0.55-0.3,1.14-0.45,1.76-0.44
	c0.12,0,0.21,0,0.27,0.01v0.3c-0.01,0.97,0.24,1.88,0.77,2.75c0.52,0.86,1.26,1.52,2.21,1.97c-0.22,0.46-0.49,0.81-0.79,1.07
	c-0.92-0.76-1.99-1.13-3.23-1.13h-0.31C19.3,10.7,18.64,9.64,17.58,8.77z`}}]})(s)}function vr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.07,16.91c0,1.33,0.46,2.48,1.39,3.43s2.06,1.47,3.4,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.37c0-0.12-0.06-0.18-0.17-0.18
	c-0.87-0.07-1.6-0.41-2.19-1.04c-0.59-0.62-0.89-1.36-0.89-2.21c0-0.83,0.28-1.54,0.84-2.16s1.26-0.97,2.1-1.07l0.53-0.07
	c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.08,0.56-1.99,1.37-2.71c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.36,2.85,1.09
	c0.81,0.72,1.28,1.63,1.39,2.72l0.08,0.58c0,0.12,0.06,0.18,0.18,0.18h1.61c0.9,0,1.67,0.32,2.32,0.95
	c0.64,0.63,0.97,1.39,0.97,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.33,0.97-2.19,1.04c-0.13,0-0.2,0.06-0.2,0.18v1.37
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.38-1.51c0.92-0.96,1.38-2.11,1.38-3.45c0-0.87-0.22-1.68-0.65-2.43
	c0.81-0.73,1.34-1.6,1.58-2.62v-0.13l0.19-0.79l-0.76-0.21c-0.81-0.24-1.44-0.7-1.89-1.35c-0.45-0.66-0.67-1.34-0.67-2.03
	c0-0.26,0.03-0.52,0.08-0.78l0.2-0.8l-0.85-0.25L21.9,5.49c-0.47-0.09-0.88-0.14-1.25-0.14c-0.38,0-0.76,0.04-1.14,0.13
	c-0.39,0.09-0.79,0.22-1.2,0.41c-0.42,0.19-0.82,0.45-1.2,0.8c-0.38,0.35-0.72,0.76-1,1.23c-0.74-0.33-1.53-0.49-2.36-0.49
	c-1.41,0-2.66,0.44-3.75,1.31s-1.77,1.99-2.07,3.36c-1.12,0.26-2.05,0.83-2.77,1.72C4.43,14.73,4.07,15.76,4.07,16.91z M9.47,23.68
	c0,0.15,0.05,0.3,0.15,0.45c0.1,0.15,0.25,0.26,0.45,0.33c0.22,0.07,0.43,0.06,0.64-0.05s0.34-0.28,0.41-0.51l0.28-1.06
	c0.07-0.21,0.05-0.41-0.07-0.62c-0.12-0.21-0.29-0.34-0.51-0.41c-0.23-0.06-0.45-0.03-0.65,0.08s-0.34,0.3-0.42,0.53l-0.23,0.99
	C9.49,23.57,9.47,23.66,9.47,23.68z M10.77,18.95c0,0.11,0.03,0.23,0.1,0.36c0.07,0.17,0.25,0.3,0.53,0.38
	c0.24,0.06,0.46,0.04,0.66-0.06c0.19-0.1,0.33-0.28,0.4-0.52l0.28-1.03c0.07-0.23,0.05-0.45-0.07-0.64
	c-0.12-0.2-0.29-0.33-0.51-0.39c-0.24-0.06-0.47-0.04-0.67,0.07c-0.2,0.11-0.33,0.28-0.4,0.52l-0.27,1.01
	C10.79,18.78,10.77,18.88,10.77,18.95z M12.02,26.8c0,0.17,0.05,0.33,0.15,0.49c0.1,0.16,0.25,0.27,0.45,0.33
	c0.11,0.03,0.18,0.05,0.23,0.05c0.09,0,0.21-0.03,0.38-0.1c0.2-0.08,0.34-0.27,0.43-0.55l0.3-1.05c0.07-0.21,0.05-0.42-0.07-0.63
	c-0.12-0.21-0.29-0.34-0.51-0.41c-0.24-0.06-0.47-0.04-0.67,0.08c-0.2,0.12-0.34,0.29-0.41,0.53l-0.25,1.01
	C12.03,26.63,12.02,26.72,12.02,26.8z M13.35,22.03c0,0.15,0.05,0.3,0.15,0.45s0.25,0.26,0.46,0.33c0.22,0.07,0.44,0.05,0.64-0.06
	c0.2-0.11,0.33-0.28,0.4-0.52l0.27-1.04c0.07-0.21,0.05-0.42-0.06-0.62c-0.11-0.2-0.27-0.34-0.49-0.41
	c-0.24-0.06-0.47-0.03-0.68,0.08s-0.35,0.3-0.42,0.53l-0.24,1L13.35,22.03z M16.16,23.79c0,0.38,0.21,0.62,0.64,0.75
	c0.09,0.02,0.17,0.03,0.24,0.03c0.15,0,0.27-0.02,0.37-0.07c0.21-0.08,0.36-0.27,0.44-0.57l0.27-1.02c0.06-0.25,0.04-0.47-0.08-0.67
	s-0.29-0.32-0.53-0.37c-0.23-0.07-0.45-0.05-0.64,0.07s-0.33,0.29-0.4,0.51l-0.27,1.04c0,0.02-0.01,0.07-0.02,0.15
	C16.16,23.71,16.16,23.76,16.16,23.79z M17.55,18.98c0,0.16,0.05,0.31,0.15,0.46c0.1,0.15,0.26,0.26,0.46,0.32
	c0.14,0.03,0.22,0.05,0.23,0.05c0.09,0,0.21-0.03,0.38-0.1c0.21-0.08,0.35-0.27,0.44-0.55l0.28-1.04c0.06-0.22,0.03-0.43-0.08-0.63
	s-0.3-0.33-0.53-0.4c-0.22-0.07-0.43-0.05-0.63,0.07s-0.33,0.29-0.4,0.52l-0.26,1.06C17.56,18.83,17.55,18.92,17.55,18.98z
	 M17.58,8.81c0.32-0.56,0.76-1,1.33-1.31c0.57-0.31,1.17-0.47,1.81-0.47h0.21c-0.01,0.09-0.01,0.21-0.01,0.38
	c0,0.95,0.26,1.85,0.78,2.71c0.52,0.86,1.25,1.51,2.17,1.96c-0.22,0.43-0.48,0.8-0.78,1.1c-0.93-0.81-2.02-1.21-3.25-1.21h-0.32
	C19.27,10.78,18.63,9.73,17.58,8.81z`}}]})(s)}function yr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.09,16.89c0,1.11,0.33,2.1,0.99,2.97c0.66,0.87,1.52,1.47,2.58,1.79l-0.65,1.7c-0.04,0.14,0,0.21,0.14,0.21h2.12
	l-1.29,4.18h0.28l4.23-5.62c0.04-0.04,0.04-0.09,0.02-0.14c-0.03-0.05-0.07-0.07-0.14-0.07h-2.18l2.47-4.64
	c0.07-0.14,0.03-0.22-0.13-0.22H9.57c-0.09,0-0.16,0.05-0.22,0.15l-1.07,2.88c-0.71-0.18-1.3-0.57-1.78-1.17s-0.71-1.27-0.71-2.01
	c0-0.83,0.28-1.55,0.85-2.17c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.07c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51
	c0.11-1.08,0.56-1.99,1.37-2.72c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.28,1.64,1.4,2.71l0.07,0.57
	c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.95s0.97,1.4,0.97,2.28c0,0.85-0.3,1.59-0.9,2.21
	c-0.6,0.62-1.33,0.97-2.2,1.03c-0.12,0-0.19,0.06-0.19,0.19v1.36c0,0.12,0.06,0.18,0.19,0.18c1.33-0.04,2.46-0.55,3.39-1.51
	c0.93-0.97,1.39-2.12,1.39-3.45c0-0.87-0.22-1.68-0.66-2.45c0.76-0.74,1.27-1.61,1.51-2.62l0.19-0.68c0.01-0.01,0.01-0.03,0.01-0.07
	c0-0.08-0.05-0.13-0.15-0.16l-0.62-0.17c-0.57-0.17-1.06-0.45-1.46-0.84c-0.4-0.39-0.68-0.8-0.85-1.22s-0.25-0.84-0.24-1.26
	c0-0.28,0.03-0.56,0.1-0.85l0.11-0.61c0.02-0.1-0.02-0.18-0.14-0.23l-0.8-0.24c-0.47-0.09-0.88-0.14-1.24-0.14
	c-0.37-0.01-0.75,0.03-1.13,0.12c-0.38,0.08-0.78,0.22-1.19,0.4c-0.41,0.18-0.8,0.45-1.18,0.79c-0.38,0.34-0.71,0.74-0.99,1.2
	C15.3,7.55,14.51,7.4,13.77,7.4c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.11,0.26-2.02,0.84-2.74,1.74
	C4.45,14.71,4.09,15.74,4.09,16.89z M11.97,27.1c0,0.17,0.05,0.33,0.16,0.49c0.11,0.16,0.27,0.27,0.49,0.33
	c0.09,0.02,0.17,0.03,0.24,0.03c0.43,0,0.7-0.2,0.8-0.61l0.13-0.59c0.06-0.26,0.03-0.48-0.08-0.68c-0.12-0.2-0.29-0.32-0.53-0.37
	c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.13,0.59C11.98,26.99,11.97,27.07,11.97,27.1z M12.76,24.2
	c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59
	c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23s-0.43,0.08-0.59,0.23C12.84,23.77,12.76,23.97,12.76,24.2z
	 M13.38,21.93c-0.01,0.15,0.03,0.31,0.14,0.47c0.1,0.16,0.25,0.26,0.45,0.3c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56
	l0.26-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53
	l-0.23,0.9C13.39,21.74,13.38,21.83,13.38,21.93z M16.14,24.08c0,0.17,0.05,0.33,0.15,0.48c0.1,0.15,0.25,0.26,0.46,0.32
	c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.11,0.02,0.14,0.02c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63
	c-0.12-0.21-0.29-0.34-0.51-0.41c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.01,0,0.05-0.01,0.11
	C16.15,24,16.14,24.04,16.14,24.08z M16.88,21.12c0,0.23,0.08,0.42,0.24,0.57c0.15,0.16,0.34,0.24,0.58,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23S16.88,20.88,16.88,21.12z M17.59,8.77c0.33-0.56,0.78-0.99,1.34-1.29s1.15-0.45,1.76-0.45h0.22v0.32
	c0,0.64,0.11,1.26,0.34,1.86c0.23,0.6,0.56,1.15,1.02,1.66c0.45,0.51,0.99,0.91,1.61,1.21c-0.17,0.38-0.42,0.72-0.76,1.03
	c-0.91-0.78-1.98-1.17-3.22-1.17h-0.33C19.28,10.68,18.62,9.62,17.59,8.77z`}}]})(s)}function gr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.09,17.13v-0.37c0.04-1.12,0.42-2.11,1.13-2.97c0.71-0.86,1.61-1.42,2.68-1.67c0.31-1.36,1.02-2.48,2.11-3.36
	s2.35-1.31,3.76-1.31c0.74,0,1.53,0.15,2.38,0.46c0.28-0.46,0.61-0.86,0.99-1.2c0.38-0.34,0.77-0.6,1.18-0.79
	c0.41-0.18,0.8-0.32,1.19-0.4c0.38-0.08,0.76-0.12,1.13-0.12c0.39,0,0.8,0.04,1.24,0.13l0.8,0.25c0.12,0.06,0.17,0.13,0.14,0.23
	L22.7,6.63c-0.07,0.29-0.1,0.57-0.1,0.84c0,0.31,0.05,0.62,0.15,0.95c0.1,0.32,0.24,0.64,0.44,0.95s0.46,0.59,0.8,0.85
	c0.34,0.26,0.72,0.45,1.16,0.58l0.62,0.17c0.1,0.03,0.15,0.08,0.15,0.16c0,0.04,0,0.06-0.01,0.07l-0.19,0.68
	c-0.24,1.01-0.75,1.89-1.51,2.62c0.44,0.76,0.66,1.58,0.66,2.45c0,1.34-0.46,2.49-1.39,3.45c-0.93,0.97-2.06,1.47-3.39,1.51
	c-0.12,0-0.19-0.06-0.19-0.19v-1.36c0-0.12,0.06-0.18,0.19-0.18c0.87-0.06,1.6-0.41,2.2-1.03c0.6-0.62,0.9-1.36,0.9-2.21
	c0-0.89-0.32-1.66-0.97-2.29s-1.42-0.95-2.33-0.95h-1.62c-0.11,0-0.17-0.06-0.17-0.18l-0.07-0.58c-0.11-1.07-0.58-1.98-1.4-2.71
	c-0.82-0.73-1.77-1.1-2.86-1.1c-1.09,0-2.05,0.37-2.85,1.1c-0.81,0.73-1.27,1.64-1.37,2.72l-0.07,0.52c0,0.11-0.07,0.17-0.2,0.17
	l-0.53,0.07c-0.84,0.1-1.54,0.46-2.1,1.07c-0.57,0.62-0.85,1.34-0.85,2.17v0.02l0.01,0.01h0.02C5.83,17.5,5.95,18,6.19,18.46
	c0.24,0.46,0.56,0.84,0.97,1.14h0.01l0.01,0.01l0.01,0.01c0.22,0.16,0.42,0.27,0.62,0.35c0.34,0.15,0.69,0.23,1.07,0.24
	c0.11,0,0.17,0.06,0.17,0.17v1.34c0,0.12-0.06,0.18-0.17,0.18c-0.93-0.04-1.78-0.32-2.55-0.82H6.32c-0.66-0.43-1.19-0.99-1.59-1.69
	C4.33,18.69,4.12,17.94,4.09,17.13z M9.59,24.1c0-0.03,0.01-0.07,0.02-0.13s0.02-0.09,0.02-0.12l0.09-0.59
	c0.07-0.24,0.2-0.41,0.41-0.53s0.43-0.14,0.68-0.08c0.23,0.07,0.39,0.21,0.51,0.41c0.11,0.21,0.13,0.42,0.07,0.63l-0.14,0.6
	c-0.1,0.43-0.35,0.65-0.76,0.65c-0.03,0-0.08,0-0.15-0.01c-0.07-0.01-0.11-0.01-0.13-0.01c-0.21-0.06-0.36-0.17-0.46-0.33
	C9.64,24.43,9.59,24.27,9.59,24.1z M10.33,21.16c0-0.24,0.08-0.43,0.23-0.59s0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23
	s0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58s-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.57-0.25
	C10.42,21.57,10.33,21.38,10.33,21.16z M11.97,27.16c0-0.04,0.01-0.11,0.04-0.22l0.13-0.59c0.07-0.23,0.21-0.4,0.41-0.51
	c0.21-0.12,0.42-0.14,0.63-0.07c0.23,0.04,0.41,0.17,0.53,0.37c0.12,0.2,0.15,0.43,0.08,0.68l-0.13,0.59
	c-0.1,0.41-0.37,0.61-0.8,0.61c-0.07,0-0.16-0.01-0.24-0.03c-0.22-0.06-0.38-0.17-0.49-0.33C12.03,27.49,11.97,27.33,11.97,27.16z
	 M12.76,24.25c0-0.23,0.08-0.42,0.23-0.58c0.16-0.16,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.58
	c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.58-0.24C12.84,24.67,12.76,24.48,12.76,24.25z
	 M13.38,21.98c0-0.09,0.01-0.18,0.03-0.27l0.23-0.9c0.07-0.23,0.21-0.41,0.41-0.53c0.21-0.12,0.42-0.15,0.64-0.08
	c0.24,0.07,0.41,0.2,0.53,0.4c0.12,0.2,0.14,0.41,0.07,0.63l-0.26,0.9c-0.08,0.28-0.22,0.46-0.41,0.56
	c-0.19,0.1-0.41,0.12-0.64,0.06c-0.2-0.04-0.35-0.14-0.45-0.3C13.41,22.29,13.37,22.13,13.38,21.98z M16.14,24.12
	c0-0.03,0-0.08,0.01-0.13s0.01-0.09,0.01-0.11l0.09-0.59c0.07-0.24,0.2-0.41,0.41-0.53s0.43-0.14,0.68-0.08
	c0.23,0.07,0.4,0.21,0.51,0.41c0.12,0.21,0.14,0.42,0.07,0.63l-0.14,0.6c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08-0.01-0.14-0.02
	c-0.06-0.01-0.11-0.02-0.14-0.02c-0.2-0.06-0.35-0.17-0.45-0.33S16.14,24.29,16.14,24.12z M16.88,21.18c0-0.24,0.08-0.43,0.23-0.59
	s0.35-0.23,0.59-0.23c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.42-0.23,0.58
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.43-0.08-0.58-0.24C16.97,21.6,16.88,21.41,16.88,21.18z M17.59,8.82
	c1.04,0.85,1.7,1.9,1.98,3.16h0.33c1.23,0,2.3,0.39,3.22,1.18c0.34-0.31,0.59-0.65,0.76-1.04c-0.62-0.3-1.15-0.7-1.61-1.21
	c-0.45-0.51-0.79-1.06-1.02-1.66c-0.23-0.6-0.34-1.22-0.34-1.86V7.09h-0.22c-0.62,0-1.21,0.15-1.77,0.45
	C18.36,7.84,17.92,8.27,17.59,8.82z`}}]})(s)}function mr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.09,16.89c0,1.11,0.33,2.1,0.99,2.97c0.66,0.87,1.52,1.47,2.58,1.79l-0.65,1.7c-0.04,0.14,0,0.21,0.14,0.21h2.12
	l-1.29,4.18h0.28l4.23-5.62c0.04-0.04,0.04-0.09,0.02-0.14c-0.03-0.05-0.07-0.07-0.14-0.07h-2.18l2.47-4.64
	c0.07-0.14,0.03-0.22-0.13-0.22H9.57c-0.09,0-0.16,0.05-0.22,0.15l-1.07,2.88c-0.71-0.18-1.3-0.57-1.78-1.17s-0.71-1.27-0.71-2.01
	c0-0.83,0.28-1.55,0.85-2.17c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.07c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51
	c0.11-1.08,0.56-1.99,1.37-2.72c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.28,1.64,1.4,2.71l0.07,0.57
	c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.95s0.97,1.4,0.97,2.28c0,0.85-0.3,1.59-0.9,2.21
	c-0.6,0.62-1.33,0.97-2.2,1.03c-0.12,0-0.19,0.06-0.19,0.19v1.36c0,0.12,0.06,0.18,0.19,0.18c1.33-0.04,2.46-0.55,3.39-1.51
	c0.93-0.97,1.39-2.12,1.39-3.45c0-0.87-0.22-1.68-0.66-2.45c0.76-0.74,1.27-1.61,1.51-2.62l0.19-0.68c0.01-0.01,0.01-0.03,0.01-0.07
	c0-0.08-0.05-0.13-0.15-0.16l-0.62-0.17c-0.57-0.17-1.06-0.45-1.46-0.84c-0.4-0.39-0.68-0.8-0.85-1.22s-0.25-0.84-0.24-1.26
	c0-0.28,0.03-0.56,0.1-0.85l0.11-0.61c0.02-0.1-0.02-0.18-0.14-0.23l-0.8-0.24c-0.47-0.09-0.88-0.14-1.24-0.14
	c-0.37-0.01-0.75,0.03-1.13,0.12c-0.38,0.08-0.78,0.22-1.19,0.4c-0.41,0.18-0.8,0.45-1.18,0.79c-0.38,0.34-0.71,0.74-0.99,1.2
	C15.3,7.55,14.51,7.4,13.77,7.4c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.11,0.26-2.02,0.84-2.74,1.74
	C4.45,14.71,4.09,15.74,4.09,16.89z M13.68,22.96c0,0.24,0.08,0.44,0.24,0.59c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.44-0.08,0.61-0.24s0.25-0.36,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61s-0.37-0.26-0.61-0.26c-0.22,0-0.41,0.09-0.58,0.26
	S13.68,22.72,13.68,22.96z M13.68,19.32c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23
	s0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25S13.68,19.09,13.68,19.32z
	 M13.68,26.63c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.61-0.24c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.26-0.61-0.26c-0.22,0-0.41,0.09-0.58,0.26C13.76,26.19,13.68,26.4,13.68,26.63z
	 M16.91,21.02c0,0.24,0.08,0.44,0.25,0.6s0.36,0.25,0.6,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.6
	c0-0.22-0.08-0.42-0.24-0.58c-0.16-0.16-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.6,0.24S16.91,20.79,16.91,21.02z M16.91,24.66
	c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.24c0.16-0.16,0.23-0.35,0.23-0.59
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.23C16.99,24.22,16.91,24.42,16.91,24.66z
	 M17.59,8.77c0.33-0.56,0.78-0.99,1.34-1.29s1.15-0.45,1.76-0.45h0.22v0.32c0,0.64,0.11,1.26,0.34,1.86
	c0.23,0.6,0.56,1.15,1.02,1.66c0.45,0.51,0.99,0.91,1.61,1.21c-0.17,0.38-0.42,0.72-0.76,1.03c-0.91-0.78-1.98-1.17-3.22-1.17h-0.33
	C19.28,10.68,18.62,9.62,17.59,8.77z`}}]})(s)}function xr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.07,16.93c0,1.33,0.47,2.47,1.4,3.43s2.07,1.47,3.4,1.51c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.85-0.04-1.58-0.39-2.18-1.03c-0.61-0.64-0.91-1.39-0.91-2.24c0-0.85,0.28-1.58,0.85-2.2c0.57-0.62,1.27-0.96,2.1-1.03l0.53-0.07
	c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.09,0.56-2.01,1.37-2.75s1.76-1.11,2.86-1.11c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.28,1.64,1.4,2.72l0.08,0.57c0,0.12,0.06,0.18,0.17,0.18h1.62c0.91,0,1.68,0.32,2.33,0.97
	c0.65,0.64,0.97,1.41,0.97,2.31c0,0.85-0.3,1.6-0.91,2.24c-0.61,0.64-1.33,0.98-2.18,1.03c-0.14,0-0.21,0.06-0.21,0.17v1.34
	c0,0.11,0.07,0.17,0.21,0.17c0.88-0.02,1.68-0.26,2.41-0.71c0.73-0.45,1.31-1.05,1.73-1.8s0.63-1.56,0.63-2.43
	c0-0.91-0.22-1.74-0.65-2.48c0.74-0.66,1.24-1.52,1.52-2.58l0.17-0.72c0.01-0.01,0.02-0.04,0.02-0.08c0-0.07-0.05-0.13-0.16-0.16
	l-0.61-0.17c-0.44-0.13-0.83-0.32-1.17-0.57s-0.61-0.53-0.81-0.84c-0.2-0.31-0.34-0.62-0.44-0.95c-0.1-0.32-0.15-0.64-0.15-0.95
	c0-0.27,0.03-0.56,0.1-0.86l0.11-0.62c0.02-0.09-0.02-0.17-0.14-0.22l-0.8-0.24c-0.44-0.11-0.85-0.16-1.25-0.16
	c-0.37,0-0.74,0.04-1.12,0.13c-0.38,0.09-0.77,0.22-1.18,0.41c-0.41,0.19-0.8,0.45-1.18,0.8c-0.38,0.35-0.71,0.75-0.99,1.22
	c-0.81-0.33-1.6-0.5-2.38-0.5c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.37c-1.12,0.28-2.04,0.87-2.75,1.76
	C4.43,14.74,4.07,15.77,4.07,16.93z M9.6,24.66c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.44-0.08,0.6-0.23c0.16-0.16,0.24-0.35,0.24-0.59c0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.36-0.23-0.6-0.23
	S10,23.91,9.84,24.07C9.68,24.22,9.6,24.42,9.6,24.66z M10.03,21.02c0,0.24,0.08,0.44,0.24,0.6s0.35,0.25,0.59,0.25
	c0.24,0,0.44-0.08,0.6-0.25c0.16-0.17,0.24-0.37,0.24-0.6c0-0.22-0.08-0.42-0.24-0.58c-0.16-0.16-0.36-0.24-0.6-0.24
	c-0.23,0-0.43,0.08-0.59,0.24S10.03,20.79,10.03,21.02z M12.38,26.63c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25
	c0.24,0,0.44-0.08,0.61-0.24c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.26-0.61-0.26
	c-0.22,0-0.41,0.09-0.58,0.26C12.46,26.19,12.38,26.4,12.38,26.63z M13.02,22.96c0,0.24,0.08,0.43,0.25,0.59
	c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.44-0.08,0.61-0.24c0.17-0.16,0.26-0.36,0.26-0.59c0-0.24-0.09-0.44-0.26-0.61
	c-0.17-0.17-0.38-0.26-0.61-0.26c-0.22,0-0.41,0.09-0.58,0.26S13.02,22.72,13.02,22.96z M13.66,19.32c0,0.24,0.08,0.43,0.24,0.58
	c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23s0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.61-0.25
	c-0.22,0-0.42,0.08-0.58,0.25S13.66,19.09,13.66,19.32z M16.05,24.66c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.6,0.24
	c0.23,0,0.43-0.08,0.59-0.24c0.16-0.16,0.24-0.35,0.24-0.59c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.44,0.08-0.6,0.23C16.13,24.22,16.05,24.42,16.05,24.66z M16.47,21.02c0,0.23,0.08,0.43,0.25,0.6
	c0.17,0.17,0.37,0.25,0.6,0.25s0.43-0.08,0.59-0.25s0.24-0.37,0.24-0.6c0-0.22-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24
	s-0.43,0.08-0.6,0.25C16.55,20.61,16.47,20.8,16.47,21.02z M17.58,8.77c0.31-0.54,0.75-0.96,1.3-1.26S20,7.06,20.59,7.05
	c0.15,0,0.26,0.01,0.33,0.02v0.31c0,0.97,0.26,1.88,0.78,2.74s1.25,1.51,2.17,1.96c-0.16,0.36-0.41,0.72-0.76,1.07
	c-0.89-0.79-1.96-1.18-3.23-1.18h-0.31C19.3,10.74,18.64,9.68,17.58,8.77z`}}]})(s)}function zr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.07,16.93c0,1.33,0.47,2.47,1.4,3.43s2.07,1.47,3.4,1.51c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.85-0.04-1.58-0.39-2.18-1.03c-0.61-0.64-0.91-1.39-0.91-2.24c0-0.85,0.28-1.58,0.85-2.2c0.57-0.62,1.27-0.96,2.1-1.03l0.53-0.07
	c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.09,0.56-2.01,1.37-2.75s1.76-1.11,2.86-1.11c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.28,1.64,1.4,2.72l0.08,0.57c0,0.12,0.06,0.18,0.17,0.18h1.62c0.91,0,1.68,0.32,2.33,0.97
	c0.65,0.64,0.97,1.41,0.97,2.31c0,0.85-0.3,1.6-0.91,2.24c-0.61,0.64-1.33,0.98-2.18,1.03c-0.14,0-0.21,0.06-0.21,0.17v1.34
	c0,0.11,0.07,0.17,0.21,0.17c0.88-0.02,1.68-0.26,2.41-0.71c0.73-0.45,1.31-1.05,1.73-1.8s0.63-1.56,0.63-2.43
	c0-0.91-0.22-1.74-0.65-2.48c0.74-0.66,1.24-1.52,1.52-2.58l0.17-0.72c0.01-0.01,0.02-0.04,0.02-0.08c0-0.07-0.05-0.13-0.16-0.16
	l-0.61-0.17c-0.44-0.13-0.83-0.32-1.17-0.57s-0.61-0.53-0.81-0.84c-0.2-0.31-0.34-0.62-0.44-0.95c-0.1-0.32-0.15-0.64-0.15-0.95
	c0-0.27,0.03-0.56,0.1-0.86l0.11-0.62c0.02-0.09-0.02-0.17-0.14-0.22l-0.8-0.24c-0.44-0.11-0.85-0.16-1.25-0.16
	c-0.37,0-0.74,0.04-1.12,0.13c-0.38,0.09-0.77,0.22-1.18,0.41c-0.41,0.19-0.8,0.45-1.18,0.8c-0.38,0.35-0.71,0.75-0.99,1.22
	c-0.81-0.33-1.6-0.5-2.38-0.5c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.37c-1.12,0.28-2.04,0.87-2.75,1.76
	C4.43,14.74,4.07,15.77,4.07,16.93z M10.46,21.02c0,0.24,0.08,0.44,0.24,0.6c0.16,0.17,0.35,0.25,0.59,0.25
	c0.24,0,0.44-0.08,0.6-0.25s0.24-0.37,0.24-0.6c0-0.22-0.08-0.42-0.24-0.58s-0.36-0.24-0.6-0.24c-0.23,0-0.43,0.08-0.59,0.24
	C10.54,20.6,10.46,20.79,10.46,21.02z M10.46,24.66c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.44-0.08,0.6-0.23c0.16-0.16,0.24-0.35,0.24-0.59c0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.36-0.23-0.6-0.23
	c-0.24,0-0.43,0.08-0.59,0.23C10.54,24.22,10.46,24.42,10.46,24.66z M13.66,22.96c0,0.24,0.08,0.44,0.24,0.59
	c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.61-0.24s0.25-0.36,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61s-0.37-0.26-0.61-0.26
	c-0.22,0-0.41,0.09-0.58,0.26S13.66,22.72,13.66,22.96z M13.66,19.32c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.45-0.08,0.61-0.23s0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25
	S13.66,19.09,13.66,19.32z M13.66,26.63c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.61-0.24
	c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.26-0.61-0.26c-0.22,0-0.41,0.09-0.58,0.26
	C13.75,26.19,13.66,26.4,13.66,26.63z M16.9,21.02c0,0.24,0.08,0.44,0.25,0.6s0.36,0.25,0.6,0.25s0.43-0.08,0.59-0.25
	s0.24-0.37,0.24-0.6c0-0.22-0.08-0.42-0.24-0.58s-0.35-0.24-0.59-0.24s-0.43,0.08-0.6,0.24S16.9,20.79,16.9,21.02z M16.9,24.66
	c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.6,0.24s0.43-0.08,0.59-0.24c0.16-0.16,0.23-0.35,0.23-0.59
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23s-0.44,0.08-0.6,0.23C16.98,24.22,16.9,24.42,16.9,24.66z M17.58,8.77
	c0.31-0.54,0.75-0.96,1.3-1.26S20,7.06,20.59,7.05c0.15,0,0.26,0.01,0.33,0.02v0.31c0,0.97,0.26,1.88,0.78,2.74s1.25,1.51,2.17,1.96
	c-0.16,0.36-0.41,0.72-0.76,1.07c-0.89-0.79-1.96-1.18-3.23-1.18h-0.31C19.3,10.74,18.64,9.68,17.58,8.77z`}}]})(s)}function Mr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.11,16.89c0,1.33,0.46,2.48,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.54c0.12,0,0.18-0.06,0.18-0.18v-1.33
	c0-0.12-0.06-0.18-0.18-0.18c-0.86-0.04-1.58-0.38-2.18-1.02c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.84-2.17
	c0.56-0.61,1.26-0.97,2.1-1.07l0.52-0.04c0.13,0,0.2-0.06,0.2-0.18l0.07-0.54c0.11-1.08,0.56-1.99,1.37-2.71
	c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.28,1.63,1.4,2.71l0.07,0.57c0,0.12,0.06,0.19,0.18,0.19h1.62
	c0.89,0,1.65,0.32,2.3,0.96s0.97,1.4,0.97,2.27c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.02
	c-0.12,0-0.19,0.06-0.19,0.18v1.33c0,0.12,0.06,0.18,0.19,0.18c0.88-0.03,1.68-0.27,2.41-0.72s1.31-1.05,1.73-1.8
	s0.63-1.57,0.63-2.44c0-0.87-0.23-1.68-0.68-2.45c0.78-0.74,1.29-1.6,1.54-2.58l0.14-0.73c0.01-0.01,0.02-0.03,0.02-0.07
	c0-0.07-0.05-0.13-0.16-0.16l-0.57-0.17c-0.57-0.16-1.06-0.44-1.46-0.82c-0.41-0.38-0.7-0.79-0.87-1.21
	c-0.17-0.43-0.26-0.85-0.26-1.28c0-0.29,0.04-0.57,0.11-0.85l0.13-0.61c0.02-0.1-0.02-0.18-0.13-0.23l-0.8-0.24
	c-0.45-0.1-0.87-0.15-1.27-0.15c-0.36,0-0.73,0.04-1.12,0.13c-0.38,0.09-0.78,0.22-1.19,0.4s-0.81,0.44-1.2,0.79s-0.72,0.74-1,1.2
	c-0.81-0.31-1.59-0.46-2.33-0.46c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.11,0.26-2.02,0.84-2.73,1.74
	C4.47,14.71,4.11,15.74,4.11,16.89z M10.05,17.77c0,0.38,0.14,0.71,0.42,0.98c0.28,0.27,0.62,0.4,1.02,0.4c0.4,0,0.73-0.13,1-0.4
	c0.27-0.27,0.4-0.59,0.4-0.98c0-0.26-0.12-0.6-0.35-1.02c-0.23-0.42-0.45-0.75-0.65-0.98c-0.11-0.12-0.24-0.26-0.41-0.43l-0.35,0.41
	c-0.27,0.29-0.52,0.64-0.75,1.04S10.05,17.51,10.05,17.77z M13.04,21.76c0,0.66,0.23,1.21,0.68,1.66c0.46,0.45,1.01,0.67,1.65,0.67
	c0.66,0,1.21-0.23,1.66-0.68c0.45-0.46,0.68-1.01,0.68-1.65c0-0.55-0.27-1.22-0.8-2c-0.44-0.58-0.87-1.08-1.28-1.49
	c-0.08-0.06-0.17-0.13-0.26-0.23l-0.23,0.23c-0.39,0.36-0.82,0.86-1.28,1.48c-0.24,0.33-0.43,0.68-0.59,1.04
	C13.11,21.16,13.04,21.48,13.04,21.76z M14.51,15.09c0,0.26,0.1,0.47,0.29,0.66s0.42,0.27,0.7,0.27c0.26,0,0.47-0.09,0.66-0.27
	c0.18-0.18,0.27-0.4,0.27-0.66c0-0.43-0.31-0.97-0.93-1.62l-0.25,0.27c-0.18,0.2-0.35,0.43-0.5,0.7
	C14.58,14.71,14.51,14.93,14.51,15.09z M17.56,8.77c0.35-0.57,0.8-1,1.34-1.29c0.54-0.29,1.12-0.44,1.72-0.44
	c0.12,0,0.21,0.01,0.27,0.02v0.3c0,0.96,0.26,1.87,0.79,2.74s1.25,1.52,2.18,1.97c-0.16,0.38-0.41,0.72-0.75,1.03
	c-0.93-0.76-1.99-1.14-3.21-1.14h-0.33C19.27,10.65,18.6,9.59,17.56,8.77z`}}]})(s)}function Cr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.09,16.89c0,1.11,0.33,2.1,0.99,2.97c0.66,0.87,1.52,1.47,2.58,1.79l-0.65,1.7c-0.04,0.14,0,0.21,0.14,0.21h2.12
	l-1.29,4.18h0.28l4.23-5.62c0.04-0.04,0.04-0.09,0.02-0.14c-0.03-0.05-0.07-0.07-0.14-0.07h-2.18l2.47-4.64
	c0.07-0.14,0.03-0.22-0.13-0.22H9.57c-0.09,0-0.16,0.05-0.22,0.15l-1.07,2.88c-0.71-0.18-1.3-0.57-1.78-1.17s-0.71-1.27-0.71-2.01
	c0-0.83,0.28-1.55,0.85-2.17c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.07c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51
	c0.11-1.08,0.56-1.99,1.37-2.72c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.28,1.64,1.4,2.71l0.07,0.57
	c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.95s0.97,1.4,0.97,2.28c0,0.85-0.3,1.59-0.9,2.21
	c-0.6,0.62-1.33,0.97-2.2,1.03c-0.12,0-0.19,0.06-0.19,0.19v1.36c0,0.12,0.06,0.18,0.19,0.18c1.33-0.04,2.46-0.55,3.39-1.51
	c0.93-0.97,1.39-2.12,1.39-3.45c0-0.87-0.22-1.68-0.66-2.45c0.76-0.74,1.27-1.61,1.51-2.62l0.19-0.68c0.01-0.01,0.01-0.03,0.01-0.07
	c0-0.08-0.05-0.13-0.15-0.16l-0.62-0.17c-0.57-0.17-1.06-0.45-1.46-0.84c-0.4-0.39-0.68-0.8-0.85-1.22s-0.25-0.84-0.24-1.26
	c0-0.28,0.03-0.56,0.1-0.85l0.11-0.61c0.02-0.1-0.02-0.18-0.14-0.23l-0.8-0.24c-0.47-0.09-0.88-0.14-1.24-0.14
	c-0.37-0.01-0.75,0.03-1.13,0.12c-0.38,0.08-0.78,0.22-1.19,0.4c-0.41,0.18-0.8,0.45-1.18,0.79c-0.38,0.34-0.71,0.74-0.99,1.2
	C15.3,7.55,14.51,7.4,13.77,7.4c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.11,0.26-2.02,0.84-2.74,1.74
	C4.45,14.71,4.09,15.74,4.09,16.89z M12.26,26.76c0,0.16,0.05,0.31,0.15,0.47c0.1,0.16,0.25,0.27,0.45,0.33
	c0.16,0.03,0.25,0.05,0.27,0.05c0.09,0,0.22-0.03,0.37-0.1c0.21-0.1,0.35-0.27,0.42-0.53l0.28-1.05c0.06-0.22,0.04-0.43-0.08-0.63
	s-0.29-0.34-0.53-0.41c-0.22-0.06-0.43-0.03-0.63,0.08c-0.2,0.12-0.34,0.3-0.41,0.53l-0.27,1L12.26,26.76z M13.6,22
	c0,0.43,0.2,0.68,0.61,0.75c0.14,0.03,0.23,0.05,0.27,0.05c0.38,0,0.63-0.21,0.77-0.63l0.3-1.02c0.06-0.22,0.03-0.43-0.08-0.63
	s-0.3-0.34-0.53-0.41c-0.22-0.07-0.44-0.05-0.64,0.07c-0.2,0.12-0.34,0.29-0.41,0.53l-0.25,1.01C13.61,21.81,13.6,21.9,13.6,22z
	 M16.41,23.67c0.01,0.17,0.07,0.33,0.18,0.48s0.27,0.27,0.48,0.34c0.16,0.04,0.27,0.06,0.33,0.06c0.34,0,0.58-0.23,0.71-0.68
	l0.24-1.02c0.07-0.23,0.05-0.45-0.06-0.66c-0.11-0.21-0.28-0.34-0.5-0.41c-0.25-0.06-0.48-0.03-0.68,0.08
	c-0.2,0.12-0.33,0.3-0.37,0.53l-0.29,1.03c0,0.02-0.01,0.06-0.02,0.12C16.41,23.61,16.41,23.65,16.41,23.67z M17.59,8.77
	c0.33-0.56,0.78-0.99,1.34-1.29s1.15-0.45,1.76-0.45h0.22v0.32c0,0.64,0.11,1.26,0.34,1.86c0.23,0.6,0.56,1.15,1.02,1.66
	c0.45,0.51,0.99,0.91,1.61,1.21c-0.17,0.38-0.42,0.72-0.76,1.03c-0.91-0.78-1.98-1.17-3.22-1.17h-0.33
	C19.28,10.68,18.62,9.62,17.59,8.77z M17.78,18.87c0,0.43,0.22,0.71,0.65,0.82c0.14,0.02,0.24,0.04,0.3,0.04
	c0.36,0,0.61-0.22,0.74-0.65l0.28-1.04c0.01-0.05,0.01-0.12,0.01-0.22c0.01-0.17-0.03-0.33-0.14-0.49
	c-0.11-0.16-0.27-0.27-0.49-0.33c-0.01,0-0.05,0-0.1-0.01c-0.05-0.01-0.1-0.01-0.13-0.01c-0.16,0-0.32,0.05-0.48,0.15
	s-0.27,0.26-0.33,0.47l-0.29,1.02c0,0.01,0,0.04-0.01,0.1C17.79,18.79,17.78,18.84,17.78,18.87z`}}]})(s)}function wr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.08,16.88c0,1.11,0.33,2.1,0.99,2.98s1.52,1.47,2.58,1.79l-0.66,1.69c-0.03,0.14,0.02,0.21,0.15,0.21h2.12l-0.97,3.51
	h0.29l3.91-4.94c0.04-0.05,0.04-0.1,0.01-0.15c-0.03-0.05-0.08-0.07-0.15-0.07h-2.18l2.48-4.63c0.07-0.14,0.03-0.22-0.13-0.22H9.56
	c-0.09,0-0.16,0.05-0.23,0.14l-1.07,2.88c-0.72-0.18-1.31-0.57-1.78-1.17c-0.47-0.6-0.7-1.27-0.7-2.01c0-0.83,0.28-1.55,0.85-2.17
	c0.57-0.62,1.27-0.97,2.1-1.07l0.52-0.08c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.85-1.1
	c1.08,0,2.03,0.37,2.85,1.1s1.29,1.64,1.41,2.71l0.07,0.59c0,0.11,0.06,0.17,0.18,0.17h1.62c0.91,0,1.68,0.32,2.33,0.95
	s0.97,1.4,0.97,2.29c0,0.85-0.3,1.59-0.9,2.21c-0.6,0.62-1.33,0.97-2.2,1.04c-0.12,0-0.19,0.06-0.19,0.17v1.38
	c0,0.12,0.06,0.18,0.19,0.18c0.88-0.03,1.68-0.27,2.41-0.72c0.73-0.45,1.31-1.05,1.73-1.8c0.42-0.75,0.63-1.57,0.63-2.45
	c0-0.87-0.22-1.68-0.66-2.45c0.79-0.76,1.31-1.63,1.56-2.62l0.14-0.72c0.01-0.01,0.02-0.04,0.02-0.07c0-0.07-0.05-0.12-0.16-0.15
	l-0.56-0.18c-0.57-0.16-1.06-0.44-1.46-0.82c-0.41-0.38-0.7-0.8-0.87-1.23c-0.17-0.44-0.26-0.88-0.26-1.32
	c0-0.26,0.03-0.53,0.08-0.8l0.14-0.61c0.04-0.1,0-0.18-0.14-0.23c-0.21-0.09-0.51-0.17-0.9-0.26c-0.39-0.09-0.77-0.13-1.15-0.13
	c-0.36,0-0.73,0.04-1.12,0.13c-0.38,0.09-0.78,0.22-1.19,0.41c-0.41,0.18-0.81,0.45-1.2,0.8c-0.39,0.35-0.72,0.75-1,1.22
	c-0.82-0.3-1.62-0.45-2.38-0.45c-1.41,0-2.67,0.44-3.76,1.31s-1.8,1.99-2.11,3.36c-1.11,0.26-2.02,0.84-2.74,1.74
	C4.44,14.69,4.08,15.72,4.08,16.88z M12.18,26.7c0,0.16,0.05,0.32,0.15,0.46c0.1,0.15,0.25,0.25,0.45,0.3
	c0.11,0.02,0.21,0.03,0.3,0.03c0.41,0,0.66-0.21,0.76-0.63l2.32-8.79c0.06-0.24,0.04-0.45-0.07-0.65c-0.11-0.2-0.28-0.33-0.5-0.39
	c-0.23-0.07-0.45-0.05-0.65,0.06c-0.2,0.11-0.34,0.27-0.4,0.49l-2.32,8.84C12.19,26.52,12.18,26.61,12.18,26.7z M16.35,23.68
	c0,0.16,0.05,0.32,0.15,0.46c0.1,0.14,0.25,0.25,0.46,0.31c0.03,0,0.08,0,0.15,0.01c0.07,0.01,0.13,0.01,0.16,0.01
	c0.38,0,0.62-0.21,0.72-0.63l1.5-5.77c0.06-0.24,0.04-0.46-0.08-0.66c-0.11-0.19-0.28-0.32-0.51-0.38
	c-0.23-0.07-0.45-0.05-0.65,0.06c-0.2,0.11-0.33,0.27-0.39,0.5l-1.5,5.82C16.36,23.51,16.35,23.6,16.35,23.68z M17.59,8.75
	c0.33-0.57,0.77-1,1.33-1.3c0.55-0.3,1.14-0.45,1.76-0.45c0.12,0,0.22,0,0.27,0.01v0.32c0,0.96,0.26,1.87,0.78,2.73
	s1.25,1.51,2.17,1.97c-0.18,0.42-0.44,0.77-0.79,1.07c-0.92-0.79-1.99-1.18-3.22-1.18h-0.32C19.29,10.66,18.63,9.61,17.59,8.75z`}}]})(s)}function Sr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.91,14.48c0-0.96,0.19-1.87,0.56-2.75s0.88-1.63,1.51-2.26c0.63-0.63,1.39-1.14,2.27-1.52c0.88-0.38,1.8-0.57,2.75-0.57
	h1.14c0.16,0.04,0.23,0.14,0.23,0.28l0.05,0.88c0.04,1.27,0.49,2.35,1.37,3.24c0.88,0.89,1.94,1.37,3.19,1.42l0.82,0.07
	c0.16,0,0.24,0.08,0.24,0.23v0.98c0.01,1.28-0.3,2.47-0.93,3.56c-0.63,1.09-1.48,1.95-2.57,2.59c-1.08,0.63-2.27,0.95-3.55,0.95
	c-0.97,0-1.9-0.19-2.78-0.56s-1.63-0.88-2.26-1.51c-0.63-0.63-1.13-1.39-1.5-2.26C8.1,16.37,7.91,15.45,7.91,14.48z M9.74,14.48
	c0,0.76,0.15,1.48,0.45,2.16c0.3,0.67,0.7,1.24,1.19,1.7c0.49,0.46,1.05,0.82,1.69,1.08c0.63,0.27,1.28,0.4,1.94,0.4
	c0.58,0,1.17-0.11,1.76-0.34c0.59-0.23,1.14-0.55,1.65-0.96c0.51-0.41,0.94-0.93,1.31-1.57c0.37-0.64,0.6-1.33,0.71-2.09
	c-1.63-0.34-2.94-1.04-3.92-2.1s-1.55-2.3-1.7-3.74C13.86,9.08,13,9.37,12.21,9.9c-0.78,0.53-1.39,1.2-1.82,2.02
	C9.96,12.74,9.74,13.59,9.74,14.48z`}}]})(s)}function kr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.06,20.98c0,0.24,0.09,0.44,0.27,0.6c0.18,0.18,0.38,0.27,0.61,0.27h5.88c0.26,0,0.49,0.09,0.69,0.28
	c0.2,0.19,0.3,0.42,0.3,0.68c0,0.26-0.1,0.48-0.3,0.68s-0.43,0.3-0.68,0.3c-0.25,0-0.48-0.1-0.68-0.3
	c-0.19-0.17-0.39-0.26-0.62-0.26c-0.23,0-0.43,0.08-0.59,0.25c-0.16,0.17-0.24,0.37-0.24,0.61s0.08,0.44,0.24,0.6
	c0.52,0.52,1.15,0.78,1.88,0.78c0.74,0,1.38-0.26,1.89-0.77c0.52-0.52,0.78-1.14,0.78-1.88c0-0.74-0.26-1.38-0.78-1.9
	c-0.52-0.52-1.15-0.79-1.89-0.79H3.94c-0.24,0-0.44,0.08-0.62,0.25C3.14,20.55,3.06,20.75,3.06,20.98z M3.06,17.97
	c0,0.23,0.09,0.42,0.27,0.58c0.15,0.16,0.35,0.24,0.61,0.24h10.99c0.74,0,1.37-0.26,1.89-0.78c0.52-0.52,0.78-1.15,0.78-1.88
	s-0.26-1.36-0.78-1.88c-0.52-0.52-1.15-0.77-1.89-0.77c-0.76,0-1.39,0.25-1.89,0.75c-0.15,0.17-0.23,0.38-0.23,0.63
	c0,0.24,0.08,0.43,0.23,0.59s0.35,0.23,0.6,0.23c0.25,0,0.45-0.07,0.61-0.23c0.19-0.19,0.42-0.28,0.68-0.28
	c0.26,0,0.48,0.09,0.68,0.28c0.19,0.19,0.29,0.42,0.29,0.68s-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.68,0.29H3.94
	c-0.24,0-0.44,0.08-0.62,0.25C3.14,17.54,3.06,17.74,3.06,17.97z M5.71,15.63c0,0.08,0.06,0.12,0.17,0.12h1.43
	c0.08,0,0.15-0.05,0.22-0.14c0.23-0.54,0.57-0.99,1.05-1.35c0.47-0.36,1-0.56,1.59-0.6l0.52-0.07c0.12,0,0.19-0.06,0.19-0.19
	l0.07-0.5c0.11-1.08,0.57-1.99,1.38-2.71c0.81-0.73,1.77-1.09,2.86-1.09s2.04,0.36,2.85,1.08c0.81,0.72,1.27,1.63,1.39,2.72
	l0.07,0.57c0,0.12,0.06,0.18,0.18,0.18h1.63c0.9,0,1.67,0.32,2.31,0.95c0.64,0.63,0.96,1.39,0.96,2.28c0,0.89-0.32,1.66-0.96,2.29
	c-0.64,0.63-1.41,0.95-2.31,0.95h-6.91c-0.11,0-0.17,0.06-0.17,0.18v1.37c0,0.12,0.06,0.18,0.17,0.18h6.91
	c0.89,0,1.72-0.22,2.48-0.67c0.76-0.44,1.36-1.05,1.8-1.81c0.44-0.76,0.66-1.59,0.66-2.49c0-0.74-0.14-1.42-0.42-2.02
	c0.76-1,1.14-2.11,1.14-3.33c0-0.71-0.14-1.39-0.42-2.04s-0.65-1.2-1.12-1.67c-0.47-0.47-1.03-0.84-1.67-1.11S22.42,6.3,21.71,6.3
	c-1.54,0-2.84,0.58-3.88,1.73c-0.78-0.41-1.67-0.61-2.65-0.61c-1.41,0-2.66,0.44-3.75,1.31s-1.77,1.99-2.07,3.35
	c-0.85,0.2-1.6,0.61-2.26,1.23s-1.11,1.35-1.37,2.18v0.04C5.72,15.58,5.71,15.62,5.71,15.63z M19.24,9
	c0.72-0.68,1.54-1.02,2.48-1.02c0.98,0,1.81,0.35,2.51,1.05s1.05,1.53,1.05,2.5c0,0.61-0.17,1.22-0.51,1.85
	c-0.96-0.96-2.11-1.43-3.47-1.43h-0.33C20.73,10.88,20.16,9.89,19.24,9z`}}]})(s)}function _r(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.58,13.45c0-1.15,0.36-2.18,1.08-3.07C5.38,9.48,6.29,8.9,7.4,8.64c0.31-1.37,1.02-2.49,2.11-3.37s2.35-1.32,3.76-1.32
	c1.38,0,2.61,0.43,3.69,1.28s1.78,1.95,2.1,3.29h0.33c0.9,0,1.73,0.22,2.49,0.65s1.37,1.03,1.81,1.79c0.44,0.76,0.67,1.58,0.67,2.48
	c0,0.2-0.01,0.4-0.03,0.61c0.65,0.51,1.16,1.15,1.54,1.91s0.56,1.57,0.56,2.43c0,0.77-0.15,1.5-0.45,2.19
	c-0.3,0.69-0.7,1.28-1.2,1.78c-0.5,0.49-1.1,0.89-1.79,1.18c-0.69,0.29-1.41,0.44-2.17,0.44c-0.75,0-1.47-0.15-2.16-0.44
	c-0.69-0.29-1.28-0.69-1.78-1.19c-0.5-0.5-0.89-1.09-1.19-1.78s-0.45-1.41-0.45-2.16H8.38c-1.34-0.06-2.47-0.57-3.4-1.53
	C4.05,15.94,3.58,14.79,3.58,13.45z M5.29,13.45c0,0.87,0.3,1.62,0.9,2.26c0.6,0.64,1.33,0.98,2.19,1.03h11.19
	c0.86-0.04,1.59-0.39,2.19-1.03c0.61-0.64,0.91-1.4,0.91-2.26c0-0.88-0.33-1.63-0.98-2.27s-1.42-0.96-2.32-0.96h-1.62
	c-0.11,0-0.17-0.06-0.17-0.17l-0.07-0.58c-0.11-1.08-0.58-1.99-1.4-2.72s-1.77-1.1-2.86-1.1c-1.09,0-2.05,0.37-2.85,1.1
	S9.14,8.39,9.04,9.47l-0.08,0.58c0,0.11-0.07,0.17-0.2,0.17H8.24c-0.84,0.1-1.54,0.46-2.1,1.07C5.57,11.9,5.29,12.62,5.29,13.45z
	 M16.55,18.56c0.06,1.12,0.52,2.07,1.37,2.83c0.85,0.76,1.82,1.14,2.91,1.14c0.6,0,1.17-0.12,1.7-0.35s0.98-0.55,1.34-0.93
	c0.36-0.39,0.65-0.83,0.85-1.33c0.21-0.5,0.31-1,0.31-1.52c0-0.49-0.1-0.98-0.3-1.47s-0.48-0.94-0.85-1.35
	c-0.39,0.82-0.97,1.5-1.74,2.02c-0.77,0.52-1.63,0.79-2.57,0.83h-3.03C16.54,18.44,16.54,18.47,16.55,18.56z`}}]})(s)}function Lr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.43,21c0,0.25,0.09,0.45,0.27,0.6c0.17,0.17,0.37,0.26,0.61,0.26h9.54c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.61s-0.08-0.44-0.24-0.61c-0.16-0.17-0.35-0.25-0.59-0.25H3.31c-0.24,0-0.44,0.09-0.62,0.26
	C2.52,20.57,2.43,20.77,2.43,21z M5.07,17.97c0,0.23,0.09,0.42,0.27,0.58c0.16,0.16,0.36,0.24,0.6,0.24h9.55
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.24-0.08-0.44-0.24-0.6c-0.16-0.17-0.35-0.25-0.59-0.25H5.94
	c-0.24,0-0.44,0.08-0.61,0.25C5.15,17.54,5.07,17.74,5.07,17.97z M6.21,15.64c0,0.07,0.07,0.11,0.2,0.11h1.42
	c0.09,0,0.16-0.05,0.23-0.14c0.22-0.54,0.57-0.99,1.05-1.35c0.47-0.36,1-0.56,1.58-0.6l0.54-0.07c0.12,0,0.18-0.06,0.18-0.18
	l0.07-0.51c0.11-1.08,0.57-1.99,1.38-2.72c0.81-0.73,1.77-1.1,2.87-1.1s2.06,0.36,2.87,1.09c0.81,0.72,1.28,1.63,1.39,2.73
	l0.08,0.57c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.69,0.32,2.33,0.95c0.64,0.63,0.96,1.39,0.96,2.29c0,0.89-0.32,1.65-0.96,2.29
	c-0.64,0.64-1.42,0.96-2.33,0.96h-6.91c-0.11,0-0.17,0.06-0.17,0.17v1.38c0,0.12,0.06,0.18,0.17,0.18h6.91
	c0.91,0,1.74-0.22,2.51-0.67c0.77-0.44,1.37-1.05,1.82-1.81c0.45-0.76,0.67-1.59,0.67-2.49c0-0.71-0.15-1.37-0.44-2.01
	c0.77-1.01,1.15-2.1,1.15-3.29c0-0.95-0.24-1.83-0.71-2.64s-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.7-2.64-0.7
	c-1.52,0-2.81,0.56-3.84,1.67C17.6,7.6,16.7,7.4,15.74,7.4c-0.93,0-1.81,0.2-2.63,0.59s-1.51,0.95-2.07,1.66
	c-0.56,0.71-0.94,1.52-1.13,2.43c-0.88,0.2-1.64,0.6-2.29,1.2c-0.65,0.6-1.11,1.33-1.36,2.17L6.21,15.64z M6.83,24.09
	c0,0.23,0.09,0.43,0.26,0.58c0.16,0.16,0.36,0.24,0.6,0.24h9.56c0.24,0,0.44-0.08,0.6-0.23s0.25-0.35,0.25-0.59
	s-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.25-0.6-0.25H7.69c-0.23,0-0.43,0.09-0.6,0.26C6.92,23.66,6.83,23.86,6.83,24.09z
	 M19.83,9.02c0.67-0.65,1.5-0.98,2.47-0.98c0.99,0,1.83,0.35,2.52,1.04c0.69,0.69,1.04,1.53,1.04,2.52c0,0.63-0.16,1.22-0.49,1.77
	c-0.98-0.96-2.15-1.43-3.52-1.43h-0.32C21.3,10.84,20.73,9.87,19.83,9.02z`}}]})(s)}function Wr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.3,16.89c0,0.89,0.22,1.72,0.66,2.48s1.03,1.36,1.79,1.8s1.58,0.67,2.48,0.67h10.81c0.89,0,1.72-0.22,2.48-0.67
	s1.36-1.05,1.8-1.8c0.44-0.76,0.67-1.59,0.67-2.48c0-0.64-0.14-1.3-0.42-2c0.76-0.93,1.13-2.03,1.13-3.3c0-0.95-0.23-1.83-0.69-2.63
	c-0.46-0.8-1.1-1.44-1.9-1.91c-0.8-0.47-1.68-0.7-2.63-0.7c-1.49,0-2.78,0.58-3.87,1.74c-0.76-0.43-1.66-0.65-2.69-0.65
	c-1.41,0-2.65,0.43-3.73,1.3s-1.77,1.98-2.08,3.35c-1.12,0.25-2.03,0.82-2.74,1.72C4.66,14.71,4.3,15.74,4.3,16.89z M6.01,16.89
	c0-0.83,0.28-1.55,0.83-2.16c0.56-0.61,1.26-0.96,2.1-1.06l0.68-0.03l0.07-0.72c0.14-1.08,0.61-1.99,1.41-2.71
	c0.8-0.73,1.74-1.09,2.81-1.09c1.09,0,2.05,0.37,2.86,1.1s1.27,1.63,1.38,2.71l0.1,0.75h1.78c0.88,0,1.64,0.32,2.28,0.95
	s0.96,1.39,0.96,2.26c0,0.9-0.32,1.67-0.95,2.32s-1.4,0.97-2.28,0.97H9.23c-0.87,0-1.62-0.32-2.26-0.97
	C6.33,18.55,6.01,17.78,6.01,16.89z M18.04,9.06c0.69-0.66,1.5-0.99,2.44-0.99c0.99,0,1.83,0.34,2.52,1.03
	c0.69,0.68,1.04,1.52,1.04,2.51c0,0.62-0.17,1.23-0.52,1.84C22.56,12.48,21.4,12,20.03,12h-0.31C19.45,10.89,18.89,9.91,18.04,9.06z
	`}}]})(s)}function Er(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.66,20.92c0,0.23,0.08,0.42,0.25,0.57c0.17,0.16,0.38,0.23,0.62,0.23h18.61c0.24,0,0.44-0.08,0.6-0.23
	c0.17-0.16,0.25-0.35,0.25-0.57c0-0.24-0.08-0.45-0.24-0.61c-0.16-0.17-0.37-0.25-0.61-0.25H3.53c-0.24,0-0.44,0.08-0.61,0.25
	C2.75,20.48,2.66,20.69,2.66,20.92z M5.27,17.81c0,0.24,0.09,0.43,0.26,0.59c0.14,0.18,0.33,0.27,0.59,0.27h18.61
	c0.23,0,0.42-0.08,0.58-0.25s0.23-0.37,0.23-0.61c0-0.23-0.08-0.43-0.23-0.58C25.16,17.08,24.96,17,24.73,17H6.12
	c-0.24,0-0.44,0.08-0.6,0.23C5.35,17.39,5.27,17.58,5.27,17.81z M5.42,15.39v-0.05c-0.04,0.15,0,0.22,0.12,0.22h1.44
	c0.06,0,0.12-0.05,0.19-0.15c0.24-0.52,0.59-0.94,1.06-1.27c0.47-0.33,0.99-0.52,1.55-0.56l0.53-0.08c0.12,0,0.19-0.06,0.19-0.18
	l0.06-0.5c0.11-1.08,0.56-1.97,1.36-2.7c0.8-0.72,1.75-1.08,2.84-1.08c1.07,0,2.02,0.36,2.82,1.07s1.27,1.6,1.38,2.67l0.07,0.57
	c0,0.12,0.07,0.18,0.21,0.18h1.58c0.64,0,1.23,0.17,1.75,0.52c0.52,0.34,0.92,0.8,1.17,1.36c0.07,0.1,0.14,0.15,0.22,0.15h1.42
	c0.12,0,0.17-0.07,0.15-0.22c-0.22-0.56-0.37-0.91-0.46-1.06c0.72-0.65,1.23-1.51,1.5-2.57l0.17-0.66c0.03-0.06,0.02-0.12-0.01-0.16
	c-0.03-0.04-0.07-0.07-0.12-0.07l-0.62-0.22c-0.89-0.26-1.57-0.78-2.04-1.58c-0.47-0.8-0.59-1.65-0.37-2.56l0.13-0.58
	c0.05-0.09,0.01-0.17-0.13-0.23l-0.84-0.23c-1.09-0.27-2.17-0.18-3.22,0.26c-1.05,0.44-1.87,1.15-2.47,2.12
	c-0.79-0.31-1.56-0.46-2.29-0.46c-1.39,0-2.62,0.44-3.71,1.31s-1.78,1.99-2.1,3.35c-0.84,0.2-1.58,0.6-2.22,1.21
	S5.67,14.55,5.42,15.39z M7,23.97c0,0.24,0.09,0.43,0.26,0.59c0.17,0.18,0.37,0.27,0.59,0.27H26.5c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.61c0-0.23-0.08-0.42-0.24-0.58s-0.36-0.23-0.59-0.23H7.86c-0.24,0-0.44,0.08-0.6,0.23
	C7.09,23.55,7,23.74,7,23.97z M18.51,8.7c0.35-0.57,0.82-1.02,1.41-1.33c0.59-0.31,1.21-0.44,1.87-0.38
	c-0.07,1.04,0.17,2.02,0.7,2.93c0.54,0.91,1.28,1.58,2.22,2.02c-0.15,0.35-0.4,0.71-0.75,1.07c-0.92-0.76-1.97-1.13-3.14-1.13H20.5
	C20.18,10.57,19.52,9.51,18.51,8.7z`}}]})(s)}function Nr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.25,16.89c0,1.33,0.46,2.48,1.39,3.43c0.93,0.96,2.06,1.47,3.4,1.54c0.12,0,0.18-0.06,0.18-0.18v-1.33
	c0-0.12-0.06-0.18-0.18-0.18c-0.86-0.04-1.58-0.38-2.18-1.02c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.84-2.17
	c0.56-0.61,1.26-0.97,2.1-1.07l0.52-0.07c0.13,0,0.2-0.06,0.2-0.18l0.08-0.51c0.11-1.08,0.56-1.99,1.37-2.71
	c0.81-0.73,1.76-1.09,2.85-1.09c1.09,0,2.04,0.37,2.86,1.1s1.28,1.63,1.4,2.71l0.07,0.58c0,0.12,0.06,0.18,0.18,0.18h1.62
	c0.91,0,1.68,0.32,2.32,0.95c0.64,0.63,0.96,1.39,0.96,2.29c0,0.87-0.3,1.62-0.9,2.26c-0.6,0.64-1.33,0.98-2.18,1.02
	c-0.13,0-0.19,0.06-0.19,0.18v1.33c0,0.12,0.06,0.18,0.19,0.18c0.88-0.03,1.68-0.27,2.41-0.72c0.73-0.45,1.31-1.05,1.73-1.8
	s0.63-1.57,0.63-2.44c0-0.74-0.14-1.41-0.43-2.01c0.79-0.96,1.18-2.06,1.18-3.32c0-0.94-0.24-1.82-0.71-2.62
	c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.68-0.71-2.62-0.71c-1.56,0-2.85,0.58-3.88,1.73c-0.82-0.44-1.72-0.66-2.71-0.66
	c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.1,0.26-2.01,0.84-2.73,1.74C4.61,14.71,4.25,15.74,4.25,16.89z M9.62,23.87
	c0.09,0.22,0.24,0.37,0.46,0.46c0.2,0.1,0.41,0.11,0.62,0.02c0.22-0.08,0.36-0.23,0.45-0.45c0.09-0.22,0.09-0.44,0.01-0.65
	c-0.08-0.22-0.23-0.37-0.44-0.47c-0.2-0.08-0.4-0.08-0.61,0.01c-0.21,0.09-0.36,0.23-0.46,0.43C9.54,23.39,9.53,23.61,9.62,23.87z
	 M10.25,21.04c0,0.16,0.05,0.31,0.15,0.46c0.1,0.15,0.26,0.25,0.46,0.31c0.22,0.07,0.44,0.05,0.65-0.06s0.35-0.29,0.43-0.55
	l0.98-3.11c0.07-0.24,0.05-0.47-0.08-0.67c-0.12-0.2-0.31-0.33-0.55-0.38c-0.22-0.07-0.43-0.05-0.62,0.06
	c-0.2,0.11-0.33,0.28-0.4,0.5l-1,3.18L10.25,21.04z M12.11,26.64c0,0.07,0.02,0.17,0.06,0.29c0.09,0.22,0.25,0.38,0.46,0.45
	c0.08,0.05,0.19,0.08,0.33,0.08c0.06,0,0.16-0.02,0.3-0.06c0.22-0.08,0.38-0.23,0.47-0.45c0.1-0.22,0.1-0.44,0-0.66
	c-0.1-0.22-0.25-0.37-0.45-0.46s-0.41-0.09-0.62-0.01c-0.19,0.08-0.33,0.2-0.42,0.36C12.15,26.34,12.11,26.49,12.11,26.64z
	 M12.85,23.97c0,0.18,0.05,0.33,0.15,0.48c0.1,0.14,0.26,0.24,0.48,0.28c0.02,0,0.06,0.01,0.11,0.02s0.1,0.02,0.13,0.02
	c0.43-0.03,0.7-0.24,0.81-0.62l1.76-6.07c0.07-0.24,0.05-0.46-0.06-0.65c-0.11-0.19-0.28-0.32-0.5-0.39
	c-0.23-0.07-0.45-0.05-0.65,0.06c-0.2,0.11-0.33,0.28-0.4,0.5l-1.8,6.07c0,0.02,0,0.06-0.01,0.1c-0.01,0.04-0.01,0.08-0.01,0.11
	C12.85,23.92,12.85,23.95,12.85,23.97z M16.29,23.57c0,0.1,0.02,0.21,0.05,0.32c0.08,0.21,0.23,0.36,0.46,0.44
	c0.09,0.04,0.21,0.07,0.36,0.07c0.12,0,0.22-0.02,0.29-0.06c0.23-0.09,0.38-0.23,0.46-0.43c0.08-0.22,0.08-0.43,0-0.65
	c-0.08-0.21-0.22-0.37-0.42-0.48c-0.22-0.08-0.44-0.08-0.65,0.01c-0.22,0.09-0.37,0.23-0.47,0.43
	C16.32,23.33,16.29,23.44,16.29,23.57z M17.01,21.03c0,0.36,0.21,0.61,0.62,0.75c0.14,0.04,0.24,0.06,0.3,0.06
	c0.12,0,0.23-0.03,0.34-0.08c0.17-0.09,0.31-0.27,0.4-0.55l0.98-3.11c0.08-0.23,0.05-0.45-0.06-0.64c-0.12-0.2-0.29-0.33-0.51-0.4
	c-0.23-0.07-0.44-0.05-0.64,0.06c-0.19,0.11-0.33,0.28-0.4,0.5l-0.98,3.13C17.02,20.91,17.01,21.01,17.01,21.03z M18.04,9.02
	c0.69-0.66,1.51-0.99,2.48-0.99c0.97,0,1.81,0.35,2.5,1.04c0.69,0.69,1.04,1.53,1.04,2.5c0,0.62-0.17,1.23-0.52,1.84
	c-0.98-0.98-2.14-1.47-3.49-1.47h-0.33C19.41,10.78,18.85,9.81,18.04,9.02z`}}]})(s)}function Br(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.29,16.93c0,0.66,0.12,1.28,0.38,1.88s0.59,1.11,1.02,1.55s0.94,0.79,1.52,1.05s1.21,0.42,1.87,0.45
	c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17c-0.87-0.06-1.6-0.41-2.19-1.03c-0.59-0.62-0.89-1.37-0.89-2.22
	c0-0.84,0.28-1.57,0.85-2.18c0.57-0.62,1.26-0.97,2.1-1.04l0.52-0.06c0.12,0,0.19-0.06,0.19-0.18l0.08-0.52
	c0.07-0.71,0.3-1.36,0.69-1.94s0.9-1.04,1.52-1.36s1.29-0.49,2.02-0.49c1.09,0,2.04,0.36,2.85,1.08c0.81,0.72,1.27,1.62,1.39,2.69
	l0.07,0.58c0,0.11,0.06,0.17,0.19,0.17h1.6c0.9,0,1.67,0.32,2.32,0.96c0.64,0.64,0.97,1.4,0.97,2.29c0,0.86-0.3,1.6-0.89,2.22
	c-0.59,0.62-1.33,0.97-2.19,1.03c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c1.34-0.06,2.47-0.57,3.38-1.51
	C24.54,19.4,25,18.26,25,16.93c0-0.64-0.16-1.32-0.47-2.06c0.79-0.99,1.19-2.08,1.19-3.27c0-0.95-0.24-1.83-0.71-2.63
	c-0.47-0.81-1.11-1.44-1.91-1.91s-1.68-0.7-2.62-0.7c-1.59,0-2.88,0.58-3.87,1.73c-0.81-0.43-1.7-0.64-2.66-0.64
	c-1.41,0-2.66,0.44-3.75,1.32s-1.79,2-2.1,3.37c-1.12,0.26-2.03,0.83-2.74,1.72C4.64,14.75,4.29,15.77,4.29,16.93z M11.94,21.55
	c-0.02,0.14,0.02,0.21,0.14,0.21h2.17l-1.32,4.17h0.29l4.18-5.58c0.04-0.04,0.05-0.09,0.02-0.14s-0.07-0.07-0.14-0.07H15.1l2.3-4.24
	c0.07-0.14,0.03-0.22-0.14-0.22h-2.94c-0.08,0-0.14,0.05-0.21,0.14L11.94,21.55z M18,9.05c0.67-0.66,1.49-0.99,2.47-0.99
	c0.98,0,1.81,0.34,2.5,1.03C23.66,9.77,24,10.61,24,11.6c0,0.59-0.17,1.19-0.52,1.8c-0.97-0.93-2.12-1.4-3.45-1.4h-0.31
	C19.44,10.81,18.86,9.83,18,9.05z`}}]})(s)}function Pr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M6.77,19.61c0,0.97,0.35,1.81,1.06,2.52c0.71,0.71,1.55,1.06,2.52,1.06h6.85c0.97,0,1.8-0.35,2.49-1.05
	c0.69-0.7,1.04-1.54,1.04-2.53c0-0.48-0.07-0.89-0.21-1.23c0.83-0.53,1.49-1.24,1.97-2.12c0.48-0.88,0.73-1.83,0.73-2.84
	c0-0.81-0.16-1.59-0.47-2.33c-0.32-0.74-0.74-1.38-1.28-1.91S20.3,8.22,19.56,7.9c-0.74-0.32-1.51-0.48-2.32-0.48
	c-1.09,0-2.1,0.27-3.02,0.81s-1.65,1.27-2.18,2.18c-0.53,0.92-0.79,1.92-0.79,3.01v0.34c-1.01,0.57-1.67,1.41-1.99,2.49
	c-0.76,0.24-1.36,0.66-1.81,1.27C7,18.13,6.77,18.83,6.77,19.61z M8.75,19.61c0-0.42,0.13-0.78,0.4-1.08
	c0.27-0.3,0.61-0.47,1.02-0.51l0.63-0.08c0.12,0,0.19-0.08,0.19-0.23l0.1-0.56c0.07-0.58,0.31-1.06,0.73-1.44
	c0.42-0.39,0.91-0.58,1.48-0.58c0.58,0,1.09,0.19,1.51,0.58c0.43,0.39,0.68,0.87,0.75,1.44l0.08,0.65c0.06,0.15,0.15,0.23,0.25,0.23
	h1.31c0.43,0,0.8,0.16,1.12,0.47c0.32,0.31,0.47,0.68,0.47,1.12c0,0.45-0.16,0.83-0.47,1.15s-0.69,0.48-1.12,0.48h-6.85
	c-0.45,0-0.83-0.16-1.14-0.48S8.75,20.06,8.75,19.61z M13.18,13.22c0.07-1.09,0.49-2.01,1.27-2.76c0.78-0.74,1.71-1.12,2.8-1.12
	c1.11,0,2.06,0.4,2.84,1.19c0.78,0.79,1.17,1.76,1.17,2.89c0,0.7-0.17,1.35-0.51,1.95c-0.34,0.6-0.8,1.08-1.38,1.45
	c-0.59-0.49-1.27-0.73-2.03-0.73c-0.29-0.88-0.81-1.57-1.54-2.09c-0.73-0.52-1.56-0.78-2.49-0.78H13.18z`}}]})(s)}function Hr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.19,16.91c0,0.87,0.21,1.68,0.64,2.43c0.42,0.75,1.01,1.35,1.74,1.8C7.3,21.6,8.11,21.84,9,21.86
	c0.12,0,0.19-0.06,0.19-0.17v-1.34c0-0.12-0.06-0.18-0.19-0.18c-0.86-0.04-1.59-0.39-2.19-1.03s-0.91-1.39-0.91-2.24
	c0-0.85,0.28-1.59,0.85-2.21c0.57-0.62,1.27-0.97,2.11-1.04l0.52-0.07c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52
	c0.11-1.1,0.57-2.02,1.38-2.76s1.77-1.11,2.87-1.11c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.28,1.65,1.4,2.73l0.08,0.58
	c0,0.11,0.06,0.17,0.18,0.17h1.62c0.9,0,1.67,0.32,2.32,0.97c0.65,0.65,0.97,1.42,0.97,2.32c0,0.85-0.3,1.6-0.91,2.24
	c-0.61,0.64-1.33,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17c0.88-0.02,1.69-0.26,2.42-0.72
	c0.73-0.45,1.31-1.05,1.73-1.8s0.63-1.56,0.63-2.43c0-0.73-0.14-1.4-0.42-2.02c0.81-0.99,1.21-2.12,1.21-3.37
	c0-0.96-0.24-1.84-0.71-2.65s-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71c-0.74,0-1.46,0.15-2.15,0.46
	C17.71,7.03,17.12,7.45,16.62,8c-0.88-0.43-1.78-0.65-2.71-0.65c-1.42,0-2.68,0.44-3.78,1.32s-1.81,2-2.12,3.37
	c-1.12,0.29-2.04,0.88-2.76,1.78C4.54,14.72,4.19,15.75,4.19,16.91z M9.52,23.98c0,0.17,0.05,0.34,0.16,0.51
	c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.44,0.06,0.64-0.04c0.19-0.09,0.32-0.28,0.39-0.56l0.14-0.61
	c0.05-0.23,0.02-0.44-0.09-0.63c-0.11-0.2-0.28-0.33-0.52-0.4c-0.22-0.07-0.44-0.04-0.64,0.08s-0.34,0.3-0.4,0.53l-0.14,0.59
	C9.53,23.83,9.52,23.89,9.52,23.98z M10.28,21.08c0,0.21,0.08,0.4,0.25,0.57c0.16,0.17,0.34,0.25,0.56,0.25
	c0.24,0,0.44-0.08,0.6-0.24c0.16-0.16,0.24-0.35,0.24-0.59c0-0.23-0.08-0.43-0.24-0.59c-0.16-0.16-0.36-0.24-0.6-0.24
	c-0.23,0-0.42,0.08-0.58,0.23C10.36,20.65,10.28,20.85,10.28,21.08z M10.89,18.81c-0.01,0.16,0.03,0.31,0.14,0.45
	c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07c0.21-0.11,0.34-0.28,0.41-0.51l0.28-0.9
	c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.34,0.28-0.41,0.5
	l-0.24,0.92c0,0.02-0.01,0.06-0.02,0.12C10.9,18.72,10.89,18.77,10.89,18.81z M12.05,27.1c0,0.18,0.05,0.34,0.15,0.5
	c0.1,0.16,0.26,0.27,0.48,0.33c0.08,0.02,0.17,0.03,0.25,0.03c0.43,0,0.69-0.2,0.79-0.61l0.14-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	s-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.14,0.59
	C12.06,26.97,12.05,27.04,12.05,27.1z M12.83,24.2c0,0.22,0.08,0.41,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	s-0.43,0.08-0.59,0.23C12.91,23.77,12.83,23.97,12.83,24.2z M13.46,21.93c-0.01,0.15,0.03,0.31,0.13,0.47s0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.27-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08c-0.21,0.12-0.34,0.3-0.41,0.53l-0.23,0.9C13.47,21.74,13.46,21.83,13.46,21.93z M16.21,24.08
	c0,0.16,0.05,0.32,0.15,0.48s0.26,0.27,0.46,0.33c0.03,0,0.08,0.01,0.14,0.02s0.1,0.02,0.14,0.02c0.41,0,0.66-0.22,0.76-0.66
	l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.11-0.21-0.28-0.34-0.51-0.41c-0.25-0.06-0.48-0.04-0.68,0.08
	c-0.2,0.12-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.02-0.01,0.07-0.02,0.12S16.21,24.04,16.21,24.08z M16.95,21.12
	c0,0.22,0.08,0.42,0.25,0.57c0.15,0.16,0.34,0.24,0.57,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23S16.95,20.88,16.95,21.12z M17.56,18.81
	c0,0.17,0.05,0.33,0.16,0.48s0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02s0.11,0.02,0.14,0.02c0.1,0,0.22-0.03,0.36-0.09
	c0.21-0.11,0.35-0.29,0.41-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.07-0.63c-0.11-0.2-0.28-0.33-0.51-0.4
	c-0.23-0.07-0.44-0.05-0.64,0.06c-0.19,0.11-0.32,0.27-0.39,0.51l-0.28,0.91c0,0.02-0.01,0.06-0.02,0.12
	C17.57,18.74,17.56,18.78,17.56,18.81z M18.03,9.01c0.69-0.69,1.53-1.04,2.51-1.04c0.98,0,1.82,0.35,2.51,1.05
	c0.69,0.7,1.04,1.54,1.04,2.52c0,0.67-0.17,1.28-0.51,1.85c-0.96-0.96-2.14-1.44-3.54-1.44h-0.32C19.44,10.77,18.88,9.79,18.03,9.01
	z`}}]})(s)}function Tr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.11,17.02c0,1.13,0.33,2.13,1,3.01c0.67,0.88,1.54,1.48,2.62,1.8c0.1,0.01,0.18-0.01,0.25-0.08l1.13-1.46
	c-0.89,0-1.66-0.32-2.31-0.96s-0.97-1.41-0.97-2.31c0-0.86,0.29-1.61,0.86-2.24s1.29-0.98,2.14-1.05l0.52-0.07
	c0.11,0,0.16-0.05,0.16-0.14l0.07-0.56c0.12-1.1,0.59-2.02,1.41-2.76c0.82-0.74,1.78-1.11,2.88-1.11c1.11,0,2.08,0.37,2.91,1.1
	c0.83,0.73,1.3,1.64,1.4,2.74l0.07,0.59c0.02,0.11,0.09,0.17,0.21,0.17h1.63c0.9,0,1.67,0.33,2.32,0.98
	c0.65,0.66,0.98,1.44,0.98,2.35c0,0.84-0.28,1.58-0.85,2.21c-0.57,0.63-1.27,0.98-2.1,1.06c-0.48,0-0.78,0.09-0.91,0.28l-2.18,2.4
	c-0.16,0.18-0.22,0.39-0.19,0.62c0.03,0.23,0.13,0.45,0.31,0.63c0.13,0.17,0.33,0.25,0.59,0.23s0.46-0.15,0.6-0.38L20.64,22
	c0.82-0.08,1.58-0.35,2.28-0.82c0.69-0.47,1.24-1.07,1.65-1.8s0.6-1.52,0.6-2.36c0-0.63-0.14-1.32-0.43-2.08
	c0.77-0.98,1.15-2.08,1.15-3.32c0-0.98-0.24-1.87-0.71-2.69c-0.48-0.82-1.12-1.46-1.94-1.93S21.53,6.3,20.56,6.3
	c-1.57,0-2.87,0.57-3.9,1.71c-0.87-0.43-1.79-0.65-2.77-0.65c-1.43,0-2.7,0.44-3.79,1.33s-1.8,2.03-2.11,3.43
	c-1.14,0.26-2.07,0.84-2.79,1.75S4.11,15.83,4.11,17.02z M7.91,24.52c0,0.14,0.02,0.25,0.05,0.32c0.08,0.21,0.23,0.36,0.44,0.44
	c0.23,0.1,0.45,0.11,0.68,0.02c0.23-0.08,0.38-0.24,0.45-0.45c0.1-0.22,0.11-0.44,0.02-0.67c-0.09-0.23-0.24-0.38-0.46-0.46
	c-0.23-0.08-0.44-0.08-0.66,0c-0.21,0.08-0.37,0.23-0.47,0.45C7.93,24.25,7.91,24.37,7.91,24.52z M9.75,22.08
	c0,0.23,0.11,0.45,0.32,0.67c0.43,0.36,0.84,0.31,1.26-0.15l2.19-2.44c0.15-0.17,0.21-0.38,0.18-0.61
	c-0.03-0.23-0.13-0.42-0.31-0.57c-0.18-0.14-0.39-0.19-0.63-0.16c-0.24,0.03-0.43,0.13-0.59,0.29l-2.2,2.38
	C9.82,21.7,9.75,21.9,9.75,22.08z M10.39,27.01c0,0.12,0.03,0.23,0.08,0.32c0.09,0.23,0.22,0.38,0.41,0.46
	c0.12,0.05,0.24,0.07,0.37,0.07c0.07,0,0.18-0.02,0.32-0.06c0.21-0.09,0.36-0.24,0.44-0.45c0.1-0.2,0.11-0.41,0.02-0.64
	c-0.08-0.23-0.23-0.38-0.45-0.46c-0.22-0.11-0.44-0.12-0.66-0.03c-0.21,0.09-0.38,0.25-0.49,0.48C10.41,26.8,10.39,26.9,10.39,27.01
	z M12.06,24.62v0.13c0.02,0.24,0.12,0.44,0.32,0.6c0.14,0.18,0.34,0.26,0.6,0.24c0.25-0.02,0.45-0.15,0.6-0.38l4.22-4.91
	c0.16-0.18,0.22-0.39,0.2-0.64c-0.02-0.24-0.14-0.43-0.35-0.57c-0.17-0.14-0.38-0.21-0.6-0.19c-0.23,0.02-0.42,0.12-0.58,0.3
	l-4.22,4.92C12.12,24.25,12.06,24.41,12.06,24.62z M15.69,25.45c-0.07,0.23-0.07,0.43,0,0.62c0.09,0.22,0.24,0.38,0.45,0.49
	c0.11,0.05,0.23,0.07,0.36,0.07c0.06,0,0.16-0.02,0.3-0.06c0.23-0.09,0.38-0.24,0.46-0.46c0.1-0.23,0.11-0.44,0.03-0.66
	c-0.08-0.21-0.23-0.36-0.44-0.44c-0.23-0.11-0.45-0.12-0.66-0.03C15.97,25.07,15.8,25.23,15.69,25.45z M18.09,9.03
	c0.68-0.68,1.51-1.02,2.48-1.02c1.01,0,1.86,0.35,2.56,1.05s1.05,1.56,1.05,2.56c0,0.62-0.17,1.23-0.52,1.82
	c-0.97-0.98-2.16-1.46-3.55-1.46H19.8C19.55,10.84,18.98,9.86,18.09,9.03z`}}]})(s)}function Rr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.26,16.93c0,0.66,0.12,1.28,0.38,1.88s0.59,1.11,1.02,1.55c0.43,0.43,0.94,0.79,1.53,1.05s1.21,0.42,1.87,0.45
	c0.11,0,0.17-0.06,0.17-0.17v-1.34c0-0.11-0.06-0.17-0.17-0.17c-0.87-0.06-1.6-0.41-2.19-1.03c-0.59-0.62-0.89-1.37-0.89-2.22
	c0-0.84,0.28-1.57,0.85-2.19c0.57-0.62,1.26-0.97,2.1-1.04l0.53-0.06c0.13,0,0.2-0.06,0.2-0.19l0.06-0.51
	c0.11-1.09,0.56-1.99,1.37-2.71s1.76-1.08,2.86-1.08c1.09,0,2.05,0.36,2.85,1.07c0.81,0.72,1.27,1.61,1.38,2.69l0.07,0.58
	c0,0.12,0.06,0.18,0.19,0.18h1.6c0.9,0,1.67,0.32,2.32,0.96s0.97,1.4,0.97,2.29c0,0.86-0.3,1.6-0.89,2.22
	c-0.59,0.62-1.33,0.97-2.19,1.03c-0.13,0-0.2,0.06-0.2,0.17v1.34c0,0.11,0.07,0.17,0.2,0.17c1.34-0.06,2.47-0.57,3.39-1.51
	c0.92-0.95,1.38-2.09,1.38-3.42c0-0.72-0.14-1.38-0.42-1.99c0.78-0.94,1.17-2.06,1.17-3.36c0-0.94-0.23-1.81-0.7-2.62
	c-0.47-0.81-1.11-1.45-1.91-1.92s-1.68-0.71-2.62-0.71c-1.56,0-2.85,0.58-3.88,1.73c-0.88-0.43-1.78-0.65-2.7-0.65
	c-1.41,0-2.66,0.44-3.75,1.32s-1.79,2-2.1,3.38c-1.1,0.26-2.01,0.83-2.73,1.73C4.62,14.76,4.26,15.78,4.26,16.93z M9.75,23.61
	c0,0.4,0.22,0.66,0.65,0.78c0.21,0.07,0.42,0.05,0.63-0.06c0.21-0.11,0.35-0.28,0.41-0.5l1.5-5.73c0.06-0.22,0.03-0.43-0.09-0.63
	c-0.12-0.2-0.3-0.33-0.54-0.4c-0.22-0.07-0.43-0.05-0.63,0.07s-0.33,0.29-0.39,0.52l-1.5,5.7C9.76,23.47,9.75,23.55,9.75,23.61z
	 M12.34,26.66c0,0.12,0.03,0.24,0.08,0.37c0.1,0.21,0.27,0.35,0.51,0.43c0.02,0,0.06,0,0.1,0.01s0.08,0.01,0.11,0.01s0.06,0,0.09,0
	c0.43,0,0.68-0.22,0.76-0.66l2.3-8.74c0.07-0.22,0.05-0.43-0.06-0.63c-0.11-0.2-0.28-0.33-0.5-0.4c-0.24-0.07-0.47-0.05-0.68,0.07
	s-0.33,0.29-0.38,0.52l-2.31,8.75C12.35,26.49,12.34,26.58,12.34,26.66z M16.5,23.6c0,0.16,0.05,0.31,0.16,0.47
	c0.11,0.16,0.26,0.26,0.45,0.32c0.06,0.02,0.14,0.03,0.23,0.03c0.17,0,0.33-0.05,0.49-0.14c0.16-0.09,0.26-0.24,0.32-0.45l1.5-5.73
	c0.08-0.21,0.05-0.41-0.07-0.62c-0.12-0.21-0.29-0.34-0.52-0.41c-0.24-0.07-0.46-0.05-0.66,0.07c-0.2,0.12-0.32,0.29-0.36,0.52
	l-1.5,5.7C16.51,23.47,16.5,23.55,16.5,23.6z M18.03,9.08c0.67-0.67,1.49-1,2.48-1c0.98,0,1.81,0.34,2.49,1.02
	c0.69,0.68,1.03,1.51,1.03,2.48c0,0.63-0.17,1.24-0.52,1.85C22.56,12.48,21.4,12,20.02,12h-0.31C19.43,10.83,18.87,9.86,18.03,9.08z
	`}}]})(s)}function Dr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.25,16.92c0,0.66,0.12,1.28,0.38,1.88c0.25,0.6,0.59,1.11,1.02,1.55c0.43,0.44,0.94,0.79,1.53,1.06s1.22,0.42,1.88,0.45
	c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17c-0.85-0.04-1.58-0.39-2.18-1.03s-0.9-1.39-0.9-2.24
	s0.28-1.58,0.84-2.2s1.26-0.96,2.1-1.03l0.53-0.07c0.1,0,0.15-0.05,0.15-0.15l0.08-0.53c0.11-1.09,0.58-2,1.4-2.73
	c0.82-0.73,1.78-1.09,2.88-1.09c1.09,0,2.04,0.36,2.85,1.08c0.82,0.72,1.28,1.62,1.4,2.7l0.07,0.57c0,0.12,0.06,0.19,0.18,0.19h1.62
	c0.89,0,1.65,0.32,2.29,0.96c0.64,0.64,0.96,1.41,0.96,2.31c0,0.85-0.3,1.6-0.89,2.24s-1.32,0.98-2.17,1.03
	c-0.13,0-0.19,0.06-0.19,0.17v1.34c0,0.11,0.06,0.17,0.19,0.17c1.34-0.06,2.47-0.57,3.39-1.52c0.93-0.95,1.39-2.09,1.39-3.42
	c0-0.64-0.14-1.31-0.41-2c0.76-0.99,1.13-2.09,1.13-3.29c0-0.94-0.24-1.82-0.71-2.63s-1.11-1.45-1.92-1.92
	c-0.81-0.47-1.68-0.71-2.62-0.71c-1.53,0-2.82,0.56-3.86,1.67c-0.87-0.43-1.77-0.65-2.7-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.79,2.01-2.1,3.38c-1.13,0.26-2.05,0.84-2.76,1.72S4.25,15.74,4.25,16.92z M9.64,23.67c0,0.17,0.05,0.33,0.15,0.48
	c0.1,0.15,0.26,0.27,0.48,0.34c0.11,0.06,0.24,0.08,0.37,0.07c0.13-0.01,0.27-0.08,0.4-0.2c0.13-0.12,0.23-0.28,0.28-0.48l0.28-1.01
	c0.06-0.25,0.04-0.48-0.08-0.67c-0.12-0.2-0.29-0.32-0.53-0.37c-0.21-0.07-0.42-0.05-0.63,0.07s-0.34,0.28-0.41,0.5l-0.28,1.04
	C9.65,23.53,9.64,23.61,9.64,23.67z M10.95,18.9c0.01,0.19,0.06,0.37,0.17,0.52s0.27,0.25,0.48,0.28c0.18,0.03,0.27,0.05,0.3,0.05
	c0.38,0,0.63-0.22,0.76-0.66l0.28-1c0.06-0.23,0.04-0.45-0.08-0.66c-0.12-0.21-0.29-0.35-0.53-0.42c-0.22-0.06-0.44-0.04-0.64,0.08
	s-0.33,0.29-0.4,0.52l-0.3,1.05C10.97,18.78,10.95,18.86,10.95,18.9z M12.19,26.8c0,0.18,0.05,0.34,0.15,0.5
	c0.1,0.16,0.26,0.27,0.48,0.33c0.14,0.03,0.23,0.05,0.28,0.05c0.09,0,0.21-0.03,0.38-0.1c0.17-0.08,0.3-0.27,0.38-0.55l0.3-1.01
	c0.06-0.25,0.03-0.48-0.08-0.68c-0.12-0.2-0.29-0.33-0.52-0.37c-0.22-0.07-0.43-0.05-0.64,0.07c-0.21,0.12-0.35,0.29-0.42,0.51
	l-0.28,1.04C12.2,26.67,12.19,26.74,12.19,26.8z M13.52,22c0,0.17,0.05,0.33,0.16,0.49c0.11,0.16,0.27,0.27,0.49,0.33
	c0.22,0.07,0.44,0.05,0.63-0.05c0.2-0.1,0.33-0.29,0.41-0.56l0.28-1.01c0.07-0.25,0.05-0.47-0.07-0.67
	c-0.12-0.19-0.29-0.31-0.53-0.36c-0.22-0.08-0.43-0.05-0.64,0.06s-0.34,0.29-0.41,0.51l-0.28,1.04C13.54,21.88,13.52,21.95,13.52,22
	z M16.37,23.75c-0.01,0.16,0.03,0.31,0.14,0.46s0.26,0.26,0.46,0.33l0.25,0.03c0.11,0.01,0.24-0.02,0.38-0.07
	c0.21-0.08,0.35-0.26,0.42-0.54l0.28-1.05c0.07-0.23,0.05-0.45-0.07-0.64c-0.12-0.2-0.29-0.33-0.51-0.4
	c-0.25-0.06-0.47-0.03-0.67,0.08s-0.32,0.3-0.36,0.53l-0.29,1C16.38,23.65,16.37,23.74,16.37,23.75z M17.72,18.95
	c0,0.17,0.05,0.34,0.16,0.5c0.11,0.16,0.27,0.26,0.48,0.3l0.25,0.03c0.43,0,0.7-0.21,0.81-0.62l0.28-1.03
	c0.06-0.25,0.03-0.48-0.08-0.68s-0.3-0.32-0.53-0.37c-0.23-0.07-0.45-0.05-0.64,0.07c-0.2,0.12-0.33,0.29-0.39,0.53l-0.3,1.02
	C17.74,18.82,17.72,18.9,17.72,18.95z M18.06,9.05c0.67-0.64,1.48-0.97,2.45-0.97c0.98,0,1.81,0.35,2.49,1.05
	c0.69,0.7,1.03,1.53,1.03,2.51c0,0.64-0.16,1.23-0.48,1.77c-0.96-0.96-2.12-1.44-3.49-1.44h-0.32C19.5,10.87,18.94,9.9,18.06,9.05z`}}]})(s)}function jr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.19,16.88c0,1.12,0.33,2.12,1,3s1.53,1.47,2.58,1.76l-0.66,1.7c-0.05,0.14,0,0.22,0.14,0.22h2.13l-1.43,4.21h0.29
	l4.36-5.66c0.04-0.04,0.04-0.09,0.02-0.14c-0.02-0.05-0.07-0.07-0.14-0.07h-2.19l2.49-4.65c0.07-0.14,0.03-0.22-0.14-0.22H9.68
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.88C7.66,19.88,7.07,19.5,6.6,18.9c-0.47-0.59-0.7-1.26-0.7-2.02c0-0.84,0.28-1.57,0.84-2.18
	C7.3,14.09,8,13.73,8.85,13.63l0.51-0.03c0.12,0,0.19-0.05,0.22-0.14l0.07-0.59c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.86,1.1c0.82,0.73,1.29,1.64,1.4,2.72l0.08,0.59c0,0.11,0.06,0.17,0.18,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.97,1.4,0.97,2.29c0,0.87-0.3,1.62-0.9,2.26s-1.32,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c0.88-0.02,1.69-0.26,2.42-0.72c0.73-0.45,1.31-1.06,1.74-1.81s0.64-1.57,0.64-2.45c0-0.73-0.14-1.4-0.43-2.02
	c0.76-0.96,1.14-2.06,1.14-3.29c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71
	c-0.72,0-1.42,0.15-2.1,0.45c-0.68,0.3-1.26,0.72-1.76,1.25c-0.81-0.43-1.71-0.65-2.72-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74C4.55,14.7,4.19,15.73,4.19,16.88z M12.07,27.1c0,0.17,0.05,0.33,0.16,0.49
	c0.11,0.16,0.27,0.27,0.49,0.33c0.09,0.02,0.17,0.03,0.24,0.03c0.43,0,0.7-0.2,0.8-0.61l0.13-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	c-0.12-0.2-0.29-0.32-0.53-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.13,0.59
	C12.08,26.99,12.07,27.07,12.07,27.1z M12.86,24.2c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23S12.86,23.97,12.86,24.2z M13.48,21.93c-0.01,0.15,0.03,0.31,0.14,0.47c0.1,0.16,0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.26-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08s-0.34,0.3-0.41,0.53l-0.22,0.9C13.49,21.74,13.48,21.83,13.48,21.93z M16.24,24.08
	c0,0.17,0.05,0.33,0.15,0.48c0.1,0.15,0.25,0.26,0.46,0.32c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.11,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.12-0.21-0.29-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.01,0,0.05-0.01,0.11C16.25,24,16.24,24.04,16.24,24.08z
	 M16.98,21.12c0,0.23,0.08,0.42,0.24,0.57c0.15,0.16,0.34,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23S16.98,20.88,16.98,21.12z M18.02,9.02
	c0.67-0.64,1.48-0.97,2.45-0.97c0.98,0,1.82,0.34,2.51,1.03c0.69,0.68,1.04,1.52,1.04,2.5c0,0.66-0.16,1.26-0.47,1.81
	c-0.96-0.96-2.13-1.44-3.52-1.44h-0.31C19.42,10.76,18.85,9.78,18.02,9.02z`}}]})(s)}function Fr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.23,16.99v-0.02c0-1.16,0.36-2.19,1.08-3.09s1.64-1.49,2.74-1.74c0.31-1.37,1.01-2.49,2.1-3.37s2.35-1.32,3.77-1.32
	c0.99,0,1.9,0.22,2.72,0.66c0.5-0.53,1.09-0.95,1.76-1.25c0.67-0.3,1.37-0.45,2.09-0.45c0.95,0,1.83,0.24,2.64,0.71
	c0.81,0.47,1.45,1.11,1.92,1.92s0.71,1.69,0.71,2.64c0,1.23-0.38,2.33-1.14,3.29c0.29,0.61,0.43,1.28,0.43,2.02
	c0,0.88-0.21,1.7-0.64,2.45c-0.42,0.75-1,1.36-1.74,1.81c-0.73,0.45-1.54,0.69-2.42,0.72c-0.13,0-0.2-0.06-0.2-0.17v-1.34
	c0-0.12,0.07-0.18,0.2-0.18c0.86-0.04,1.58-0.39,2.18-1.03s0.9-1.4,0.9-2.26c0-0.89-0.32-1.65-0.97-2.29
	c-0.64-0.64-1.41-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.18l-0.08-0.59c-0.11-1.08-0.58-1.99-1.4-2.72
	c-0.82-0.73-1.78-1.1-2.86-1.1c-1.1,0-2.05,0.37-2.86,1.1c-0.81,0.73-1.27,1.64-1.37,2.72l-0.08,0.59
	c-0.03,0.09-0.11,0.14-0.22,0.14l-0.51,0.04c-0.84,0.1-1.55,0.45-2.11,1.06s-0.84,1.34-0.84,2.18v0.04
	c0.01,0.01,0.02,0.02,0.03,0.02c0.01,0.85,0.31,1.59,0.9,2.22c0.28,0.29,0.59,0.52,0.92,0.67v0.02c0.38,0.19,0.79,0.31,1.24,0.34
	c0.11,0,0.17,0.06,0.17,0.17v1.34c0,0.11-0.06,0.17-0.17,0.17c-0.49-0.02-0.97-0.12-1.43-0.29C6.83,21.41,6.17,21,5.62,20.42
	s-0.95-1.24-1.18-2C4.3,17.95,4.23,17.48,4.23,16.99z M9.73,24.16c0-0.03,0.01-0.07,0.02-0.13c0.01-0.06,0.02-0.1,0.02-0.12
	l0.09-0.58c0.07-0.24,0.21-0.42,0.41-0.53c0.21-0.12,0.43-0.15,0.68-0.08c0.23,0.07,0.39,0.21,0.51,0.41
	c0.11,0.21,0.13,0.42,0.07,0.63l-0.14,0.6c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08,0-0.15-0.01c-0.07-0.01-0.11-0.01-0.13-0.01
	c-0.21-0.06-0.36-0.17-0.46-0.33C9.78,24.49,9.73,24.33,9.73,24.16z M10.47,21.21c0-0.24,0.08-0.43,0.23-0.59s0.35-0.23,0.59-0.23
	s0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58s-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.57-0.24
	C10.56,21.62,10.47,21.43,10.47,21.21z M12.11,27.19c0-0.04,0.01-0.11,0.04-0.23l0.13-0.59c0.07-0.23,0.21-0.39,0.41-0.51
	c0.21-0.11,0.42-0.13,0.63-0.07c0.23,0.04,0.41,0.17,0.53,0.37c0.12,0.2,0.15,0.43,0.08,0.68l-0.13,0.58
	c-0.11,0.41-0.37,0.62-0.8,0.62c-0.05,0-0.13-0.01-0.24-0.04c-0.22-0.06-0.38-0.17-0.49-0.33S12.11,27.36,12.11,27.19z M12.9,24.28
	c0-0.23,0.08-0.42,0.23-0.58c0.16-0.15,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23c0.16,0.15,0.23,0.35,0.23,0.58
	c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.58-0.24C12.98,24.7,12.9,24.51,12.9,24.28z
	 M13.52,22.01c0-0.09,0.01-0.18,0.03-0.26l0.23-0.9c0.07-0.24,0.21-0.42,0.41-0.53s0.42-0.15,0.64-0.08c0.24,0.07,0.41,0.2,0.53,0.4
	s0.14,0.41,0.07,0.63l-0.26,0.9c-0.08,0.27-0.22,0.46-0.41,0.56c-0.19,0.1-0.41,0.12-0.64,0.06c-0.2-0.04-0.35-0.14-0.45-0.3
	C13.55,22.32,13.51,22.16,13.52,22.01z M16.28,24.16c0-0.03,0-0.08,0.01-0.14c0.01-0.06,0.01-0.1,0.01-0.11l0.09-0.58
	c0.07-0.24,0.21-0.42,0.41-0.53c0.21-0.12,0.43-0.15,0.67-0.08c0.23,0.07,0.4,0.21,0.51,0.41c0.12,0.21,0.14,0.42,0.07,0.63
	l-0.14,0.6c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08,0-0.15-0.01c-0.07-0.01-0.11-0.01-0.13-0.01c-0.2-0.06-0.35-0.17-0.45-0.33
	S16.28,24.33,16.28,24.16z M17.02,21.21c0-0.24,0.08-0.43,0.23-0.59s0.35-0.23,0.59-0.23c0.24,0,0.43,0.08,0.59,0.23
	c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.43-0.08-0.58-0.24
	C17.11,21.63,17.02,21.44,17.02,21.21z M18.06,9.1c0.84,0.76,1.4,1.74,1.7,2.93h0.31c1.38,0,2.55,0.48,3.52,1.44
	c0.31-0.55,0.47-1.15,0.47-1.81c0-0.98-0.35-1.81-1.04-2.5c-0.69-0.68-1.53-1.03-2.51-1.03C19.54,8.14,18.73,8.46,18.06,9.1z`}}]})(s)}function Vr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.23,16.88c0,1.12,0.33,2.12,1,3s1.53,1.47,2.58,1.76l-0.66,1.7c-0.05,0.14,0,0.22,0.14,0.22h2.13L8,27.77h0.29l4.36-5.66
	c0.04-0.04,0.04-0.09,0.02-0.14c-0.02-0.05-0.07-0.07-0.14-0.07h-2.19l2.49-4.65c0.07-0.14,0.03-0.22-0.14-0.22H9.72
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.88C7.7,19.88,7.11,19.5,6.64,18.9c-0.47-0.59-0.7-1.26-0.7-2.02c0-0.84,0.28-1.57,0.84-2.18
	c0.56-0.61,1.27-0.97,2.11-1.07l0.51-0.03c0.12,0,0.19-0.05,0.22-0.14l0.08-0.59c0.11-1.08,0.56-1.99,1.37-2.72s1.76-1.1,2.86-1.1
	c1.09,0,2.04,0.37,2.86,1.1s1.29,1.64,1.4,2.72l0.08,0.59c0,0.11,0.06,0.17,0.18,0.17h1.61c0.89,0,1.66,0.32,2.31,0.96
	s0.97,1.4,0.97,2.29c0,0.87-0.3,1.62-0.9,2.26s-1.32,0.98-2.18,1.03c-0.13,0-0.2,0.06-0.2,0.18v1.34c0,0.11,0.07,0.17,0.2,0.17
	c0.88-0.02,1.69-0.26,2.42-0.72c0.73-0.45,1.31-1.06,1.74-1.81s0.64-1.57,0.64-2.45c0-0.73-0.14-1.4-0.43-2.02
	c0.76-0.96,1.14-2.06,1.14-3.29c0-0.95-0.24-1.83-0.71-2.64c-0.47-0.81-1.11-1.45-1.92-1.92c-0.81-0.47-1.69-0.71-2.64-0.71
	c-0.72,0-1.42,0.15-2.1,0.45c-0.68,0.3-1.26,0.72-1.76,1.25c-0.81-0.43-1.71-0.65-2.72-0.65c-1.42,0-2.68,0.44-3.77,1.32
	s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74C4.59,14.7,4.23,15.73,4.23,16.88z M13.82,22.96c0,0.24,0.08,0.44,0.24,0.59
	c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.61-0.24s0.25-0.36,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61s-0.37-0.26-0.61-0.26
	c-0.22,0-0.41,0.09-0.58,0.26S13.82,22.72,13.82,22.96z M13.82,19.32c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24
	c0.24,0,0.45-0.08,0.61-0.23s0.25-0.35,0.25-0.59c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25
	S13.82,19.09,13.82,19.32z M13.82,26.63c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.61-0.24
	c0.17-0.16,0.25-0.35,0.25-0.59c0-0.24-0.08-0.44-0.25-0.61c-0.17-0.17-0.37-0.26-0.61-0.26c-0.22,0-0.41,0.09-0.58,0.26
	C13.9,26.19,13.82,26.4,13.82,26.63z M17.05,21.02c0,0.24,0.08,0.44,0.25,0.6s0.36,0.25,0.6,0.25c0.23,0,0.43-0.08,0.59-0.25
	c0.16-0.17,0.24-0.37,0.24-0.6c0-0.22-0.08-0.42-0.24-0.58c-0.16-0.16-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.6,0.24
	S17.05,20.79,17.05,21.02z M17.05,24.66c0,0.23,0.08,0.42,0.24,0.58c0.16,0.16,0.36,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.24
	c0.16-0.16,0.23-0.35,0.23-0.59c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.23
	C17.13,24.22,17.05,24.42,17.05,24.66z M18.06,9.02c0.67-0.64,1.48-0.97,2.45-0.97c0.98,0,1.82,0.34,2.51,1.03
	c0.69,0.68,1.04,1.52,1.04,2.5c0,0.66-0.16,1.26-0.47,1.81c-0.96-0.96-2.13-1.44-3.52-1.44h-0.31C19.46,10.76,18.89,9.78,18.06,9.02
	z`}}]})(s)}function Or(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.23,16.89c0,1.33,0.47,2.48,1.4,3.44s2.07,1.47,3.4,1.53c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.86-0.05-1.59-0.39-2.19-1.03c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.85-2.17c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.04
	c0.13,0,0.2-0.06,0.2-0.18l0.07-0.54c0.11-1.08,0.56-1.99,1.37-2.72c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.28,1.64,1.4,2.72l0.08,0.57c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.95c0.64,0.63,0.97,1.4,0.97,2.28
	c0,0.86-0.3,1.61-0.91,2.25c-0.61,0.64-1.34,0.99-2.19,1.04c-0.12,0-0.19,0.06-0.19,0.17v1.34c0,0.11,0.06,0.17,0.19,0.17
	c1.34-0.04,2.47-0.55,3.4-1.51c0.93-0.97,1.39-2.12,1.39-3.45c0-0.71-0.14-1.38-0.43-2.01c0.79-0.96,1.18-2.07,1.18-3.32
	c0-0.95-0.24-1.83-0.71-2.64s-1.11-1.45-1.92-1.92s-1.68-0.7-2.62-0.7c-1.55,0-2.85,0.58-3.89,1.73c-0.81-0.43-1.71-0.65-2.71-0.65
	c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.11,0.26-2.02,0.84-2.74,1.74C4.59,14.71,4.23,15.74,4.23,16.89z M9.72,24.61
	c0,0.21,0.08,0.4,0.24,0.57c0.18,0.16,0.37,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.24-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.23,0-0.43,0.08-0.59,0.23C9.8,24.17,9.72,24.37,9.72,24.61z
	 M10.58,20.98c0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.35,0.25,0.59,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61
	c0-0.23-0.08-0.42-0.24-0.58c-0.16-0.16-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24C10.66,20.56,10.58,20.76,10.58,20.98z
	 M12.47,26.56c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.44-0.08,0.6-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	s-0.08-0.44-0.25-0.6c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25C12.56,26.13,12.47,26.33,12.47,26.56z M13.33,22.9
	c0,0.22,0.08,0.42,0.25,0.6c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.44-0.08,0.61-0.24s0.25-0.36,0.25-0.6
	c0-0.23-0.08-0.43-0.25-0.6s-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25S13.33,22.67,13.33,22.9z M13.76,19.3
	c0,0.23,0.08,0.42,0.24,0.58s0.36,0.24,0.58,0.24c0.24,0,0.44-0.08,0.6-0.24c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.08-0.43-0.25-0.59s-0.37-0.24-0.6-0.24c-0.22,0-0.42,0.08-0.58,0.24S13.76,19.07,13.76,19.3z M16.13,24.61
	c0,0.21,0.08,0.4,0.23,0.57c0.17,0.16,0.38,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.24C16.21,24.18,16.13,24.38,16.13,24.61z
	 M16.98,20.98c0,0.24,0.08,0.44,0.24,0.61c0.16,0.17,0.36,0.25,0.59,0.25c0.23,0,0.43-0.08,0.59-0.25c0.16-0.17,0.24-0.37,0.24-0.61
	c0-0.23-0.08-0.42-0.24-0.58c-0.16-0.16-0.35-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24S16.98,20.76,16.98,20.98z M18.03,9.02
	c0.68-0.68,1.5-1.01,2.48-1.01c0.98,0,1.81,0.35,2.5,1.04s1.03,1.53,1.03,2.52c0,0.59-0.17,1.2-0.51,1.84
	c-0.96-0.96-2.13-1.44-3.5-1.44h-0.31C19.44,10.8,18.87,9.82,18.03,9.02z`}}]})(s)}function Ir(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.23,16.89c0,1.33,0.47,2.48,1.4,3.44s2.07,1.47,3.4,1.53c0.12,0,0.18-0.06,0.18-0.17v-1.34c0-0.11-0.06-0.17-0.18-0.17
	c-0.86-0.05-1.59-0.39-2.19-1.03c-0.6-0.64-0.9-1.39-0.9-2.26c0-0.83,0.28-1.55,0.85-2.17c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.04
	c0.13,0,0.2-0.06,0.2-0.18l0.07-0.54c0.11-1.08,0.56-1.99,1.37-2.72c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.86,1.1
	c0.82,0.73,1.28,1.64,1.4,2.72l0.08,0.57c0,0.12,0.06,0.19,0.17,0.19h1.62c0.91,0,1.68,0.32,2.33,0.95c0.64,0.63,0.97,1.4,0.97,2.28
	c0,0.86-0.3,1.61-0.91,2.25c-0.61,0.64-1.34,0.99-2.19,1.04c-0.12,0-0.19,0.06-0.19,0.17v1.34c0,0.11,0.06,0.17,0.19,0.17
	c1.34-0.04,2.47-0.55,3.4-1.51c0.93-0.97,1.39-2.12,1.39-3.45c0-0.71-0.14-1.38-0.43-2.01c0.79-0.96,1.18-2.07,1.18-3.32
	c0-0.95-0.24-1.83-0.71-2.64s-1.11-1.45-1.92-1.92s-1.68-0.7-2.62-0.7c-1.55,0-2.85,0.58-3.89,1.73c-0.81-0.43-1.71-0.65-2.71-0.65
	c-1.41,0-2.67,0.44-3.76,1.32s-1.8,2-2.11,3.36c-1.11,0.26-2.02,0.84-2.74,1.74C4.59,14.71,4.23,15.74,4.23,16.89z M10.62,21.01
	c0,0.22,0.08,0.41,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.23,0,0.43-0.08,0.59-0.23s0.24-0.35,0.24-0.59
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23C10.7,20.57,10.62,20.77,10.62,21.01z
	 M10.62,24.64c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59
	c0-0.24-0.08-0.44-0.24-0.6s-0.35-0.25-0.59-0.25c-0.23,0-0.43,0.08-0.59,0.25S10.62,24.4,10.62,24.64z M13.81,22.9
	c0,0.23,0.08,0.44,0.25,0.61s0.36,0.27,0.58,0.27c0.23,0,0.43-0.09,0.6-0.26c0.17-0.17,0.25-0.38,0.25-0.62
	c0-0.22-0.08-0.41-0.25-0.58c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25S13.81,22.68,13.81,22.9z M13.81,19.31
	c0,0.23,0.08,0.42,0.24,0.58s0.36,0.24,0.59,0.24c0.24,0,0.44-0.08,0.6-0.24s0.25-0.35,0.25-0.59s-0.08-0.43-0.25-0.6
	s-0.37-0.25-0.6-0.25c-0.23,0-0.42,0.08-0.59,0.25S13.81,19.08,13.81,19.31z M13.81,26.58c0,0.23,0.08,0.43,0.25,0.6
	c0.17,0.17,0.36,0.25,0.59,0.25c0.23,0,0.43-0.08,0.6-0.25c0.17-0.17,0.25-0.37,0.25-0.6c0-0.22-0.08-0.41-0.25-0.58
	c-0.17-0.17-0.37-0.25-0.6-0.25c-0.22,0-0.41,0.08-0.58,0.25C13.9,26.17,13.81,26.36,13.81,26.58z M17.05,21.01
	c0,0.21,0.08,0.4,0.24,0.57c0.17,0.17,0.37,0.25,0.6,0.25c0.23,0,0.43-0.08,0.59-0.23c0.16-0.16,0.24-0.35,0.24-0.59
	c0-0.24-0.08-0.43-0.23-0.59c-0.16-0.16-0.35-0.23-0.59-0.23c-0.24,0-0.44,0.08-0.6,0.23C17.13,20.57,17.05,20.77,17.05,21.01z
	 M17.05,24.64c0,0.22,0.08,0.42,0.24,0.58s0.36,0.24,0.6,0.24c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59
	c0-0.24-0.08-0.44-0.24-0.6c-0.16-0.17-0.35-0.25-0.59-0.25c-0.23,0-0.43,0.08-0.6,0.25S17.05,24.4,17.05,24.64z M18.03,9.02
	c0.68-0.68,1.5-1.01,2.48-1.01c0.98,0,1.81,0.35,2.5,1.04s1.03,1.53,1.03,2.52c0,0.59-0.17,1.2-0.51,1.84
	c-0.96-0.96-2.13-1.44-3.5-1.44h-0.31C19.44,10.8,18.87,9.82,18.03,9.02z`}}]})(s)}function Ar(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.22,16.89c0,1.33,0.46,2.48,1.39,3.44s2.06,1.47,3.41,1.53c0.11,0,0.17-0.06,0.17-0.17v-1.37c0-0.13-0.06-0.19-0.17-0.19
	c-0.88-0.06-1.61-0.41-2.21-1.03c-0.6-0.62-0.9-1.36-0.9-2.21c0-0.84,0.28-1.58,0.85-2.2c0.57-0.62,1.27-0.97,2.11-1.04l0.52-0.07
	c0.12,0,0.19-0.06,0.19-0.19l0.07-0.5c0.11-1.08,0.57-1.99,1.38-2.72s1.77-1.1,2.87-1.1c1.09,0,2.05,0.36,2.86,1.09
	c0.81,0.73,1.28,1.64,1.4,2.72l0.06,0.57c0,0.12,0.06,0.18,0.19,0.18h1.6c0.91,0,1.68,0.32,2.32,0.95c0.64,0.63,0.97,1.4,0.97,2.28
	c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.33,0.97-2.19,1.03c-0.14,0-0.21,0.06-0.21,0.19v1.37c0,0.11,0.07,0.17,0.21,0.17
	c1.33-0.04,2.46-0.55,3.39-1.51c0.93-0.97,1.39-2.12,1.39-3.45c0-0.74-0.14-1.41-0.43-2.01c0.79-0.96,1.18-2.07,1.18-3.36
	c0-0.94-0.24-1.82-0.71-2.63s-1.11-1.45-1.92-1.92c-0.81-0.47-1.68-0.71-2.62-0.71c-1.52,0-2.83,0.58-3.93,1.75
	C15.74,7.61,14.85,7.4,13.9,7.4c-1.41,0-2.67,0.44-3.76,1.31s-1.8,2-2.1,3.37c-1.11,0.26-2.02,0.84-2.74,1.74
	C4.58,14.71,4.22,15.74,4.22,16.89z M10.15,17.77c0,0.38,0.14,0.7,0.43,0.98c0.28,0.27,0.62,0.41,1.02,0.41s0.73-0.13,1-0.4
	c0.27-0.27,0.41-0.6,0.41-0.98c0-0.26-0.12-0.6-0.35-1.02c-0.23-0.42-0.45-0.76-0.66-1c-0.02-0.02-0.08-0.09-0.18-0.2
	c-0.1-0.11-0.17-0.19-0.21-0.24l-0.36,0.4c-0.28,0.3-0.53,0.65-0.75,1.05C10.27,17.17,10.15,17.51,10.15,17.77z M13.14,21.76
	c0,0.63,0.23,1.18,0.69,1.64c0.46,0.46,1.01,0.69,1.65,0.69c0.64,0,1.2-0.23,1.66-0.69c0.46-0.46,0.69-1.01,0.69-1.64
	c0-0.27-0.08-0.59-0.23-0.97c-0.16-0.38-0.34-0.72-0.56-1.04c-0.46-0.59-0.89-1.09-1.29-1.49c-0.06-0.04-0.14-0.13-0.26-0.24
	L14.9,18.6c-0.44,0.42-0.85,0.95-1.21,1.56C13.32,20.78,13.14,21.31,13.14,21.76z M14.62,15.06c0,0.27,0.09,0.49,0.28,0.67
	s0.43,0.27,0.71,0.27c0.26,0,0.48-0.09,0.66-0.27s0.27-0.4,0.27-0.67c0-0.41-0.31-0.94-0.93-1.61l-0.25,0.26
	c-0.19,0.2-0.36,0.43-0.51,0.7C14.69,14.67,14.62,14.89,14.62,15.06z M18.01,9.02c0.67-0.66,1.5-0.99,2.48-0.99
	c0.98,0,1.81,0.34,2.49,1.02s1.03,1.51,1.03,2.48c0,0.63-0.17,1.25-0.51,1.85c-1-0.96-2.17-1.44-3.51-1.44H19.7
	C19.42,10.76,18.85,9.79,18.01,9.02z`}}]})(s)}function Ur(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.25,16.86c0,1.1,0.33,2.09,1,2.98c0.67,0.88,1.52,1.48,2.57,1.8l-0.65,1.66c-0.04,0.14,0,0.21,0.14,0.21h2.12l-1.14,4.09
	h0.29l4.08-5.49c0.04-0.04,0.04-0.09,0.01-0.14c-0.03-0.05-0.08-0.07-0.15-0.07h-2.17l2.47-4.67c0.07-0.14,0.03-0.22-0.13-0.22H9.73
	c-0.09,0-0.16,0.05-0.19,0.14l-1.11,2.93c-0.71-0.18-1.3-0.57-1.78-1.17c-0.47-0.6-0.71-1.27-0.71-2.02c0-0.84,0.28-1.57,0.85-2.19
	s1.27-0.97,2.1-1.05l0.52-0.07c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.11-1.09,0.56-2,1.37-2.72c0.81-0.73,1.76-1.09,2.86-1.09
	c1.09,0,2.05,0.36,2.86,1.09c0.81,0.73,1.28,1.64,1.4,2.72l0.07,0.58c0,0.11,0.06,0.17,0.18,0.17h1.62c0.91,0,1.68,0.32,2.33,0.95
	c0.64,0.63,0.97,1.4,0.97,2.28c0,0.86-0.3,1.6-0.9,2.23c-0.6,0.63-1.33,0.97-2.2,1.04c-0.12,0-0.19,0.06-0.19,0.18v1.38
	c0,0.11,0.06,0.17,0.19,0.17c1.33-0.04,2.46-0.55,3.39-1.52c0.93-0.97,1.39-2.12,1.39-3.47c0-0.73-0.14-1.39-0.41-2
	c0.76-1,1.14-2.1,1.14-3.29c0-0.71-0.14-1.39-0.42-2.04c-0.28-0.65-0.66-1.2-1.12-1.67s-1.03-0.84-1.68-1.12
	c-0.65-0.28-1.33-0.42-2.03-0.42c-0.74,0-1.44,0.15-2.12,0.45c-0.67,0.3-1.26,0.72-1.74,1.26c-0.82-0.44-1.72-0.66-2.7-0.66
	c-1.42,0-2.68,0.44-3.77,1.31s-1.8,2-2.11,3.37c-1.11,0.26-2.02,0.83-2.74,1.73S4.25,15.71,4.25,16.86z M12.42,26.73
	c0,0.18,0.05,0.35,0.16,0.51c0.11,0.17,0.26,0.27,0.46,0.3c0.02,0,0.05,0,0.08,0.01s0.07,0.01,0.09,0.01s0.05,0,0.08,0
	c0.43-0.03,0.69-0.23,0.8-0.61l0.29-1.06c0.06-0.22,0.03-0.43-0.09-0.63c-0.12-0.2-0.3-0.34-0.53-0.41
	c-0.22-0.06-0.43-0.03-0.63,0.08c-0.2,0.12-0.34,0.3-0.41,0.53l-0.25,1C12.44,26.64,12.42,26.72,12.42,26.73z M13.76,21.96
	c0,0.15,0.05,0.3,0.15,0.45c0.1,0.15,0.26,0.26,0.46,0.34c0.22,0.08,0.43,0.06,0.63-0.05c0.2-0.11,0.33-0.29,0.4-0.53l0.3-1.04
	c0.06-0.25,0.04-0.48-0.08-0.68s-0.29-0.32-0.53-0.37c-0.22-0.07-0.44-0.05-0.64,0.07s-0.34,0.29-0.42,0.53l-0.25,1.02
	c0,0.02,0,0.05-0.01,0.08s-0.01,0.07-0.01,0.09C13.76,21.9,13.76,21.93,13.76,21.96z M16.59,23.58c0,0.19,0.05,0.36,0.16,0.52
	c0.11,0.16,0.26,0.27,0.47,0.32c0.16,0.03,0.25,0.05,0.27,0.05c0.39,0,0.65-0.2,0.77-0.6l0.24-1.06c0.07-0.22,0.05-0.43-0.06-0.63
	c-0.11-0.2-0.27-0.34-0.5-0.41c-0.25-0.06-0.48-0.03-0.68,0.09c-0.21,0.12-0.33,0.3-0.38,0.53l-0.28,0.99
	C16.6,23.43,16.59,23.5,16.59,23.58z M17.95,18.83c0,0.16,0.05,0.32,0.16,0.47c0.11,0.15,0.27,0.27,0.49,0.34
	c0.17,0.02,0.26,0.03,0.26,0.03c0.12,0,0.24-0.03,0.38-0.08c0.19-0.1,0.33-0.27,0.39-0.52l0.29-1.04c0.06-0.22,0.03-0.43-0.09-0.63
	c-0.12-0.2-0.3-0.34-0.53-0.41c-0.23-0.07-0.44-0.05-0.64,0.07s-0.33,0.29-0.4,0.53l-0.28,1.02C17.96,18.7,17.95,18.77,17.95,18.83z
	 M18.06,8.98c0.66-0.64,1.48-0.96,2.45-0.96c0.98,0,1.82,0.35,2.5,1.04c0.69,0.69,1.03,1.53,1.03,2.51c0,0.63-0.16,1.22-0.49,1.78
	c-0.99-0.96-2.15-1.44-3.49-1.44h-0.32C19.44,10.75,18.88,9.77,18.06,8.98z`}}]})(s)}function $r(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.28,16.89c0,1.11,0.33,2.11,0.99,2.98s1.52,1.46,2.56,1.75l-0.64,1.68c-0.05,0.14,0,0.22,0.14,0.22h2.12l-1.04,4.19h0.28
	l3.97-5.62c0.04-0.04,0.04-0.09,0.01-0.14c-0.03-0.05-0.08-0.07-0.15-0.07h-2.17l2.47-4.61c0.07-0.14,0.02-0.22-0.14-0.22H9.74
	c-0.09,0-0.16,0.05-0.23,0.14l-1.07,2.87c-0.71-0.17-1.3-0.56-1.77-1.14s-0.7-1.26-0.7-2.02c0-0.83,0.28-1.55,0.84-2.16
	s1.26-0.96,2.1-1.06l0.53-0.04c0.12,0,0.18-0.06,0.18-0.18l0.07-0.53c0.07-0.71,0.3-1.35,0.69-1.94c0.39-0.58,0.9-1.04,1.52-1.37
	s1.29-0.5,2.01-0.5c1.08,0,2.03,0.37,2.84,1.1c0.81,0.73,1.27,1.63,1.39,2.71l0.08,0.56c0,0.12,0.06,0.19,0.17,0.19h1.62
	c0.89,0,1.65,0.32,2.3,0.96s0.97,1.39,0.97,2.27c0,0.86-0.3,1.61-0.9,2.25s-1.33,0.97-2.18,1.02c-0.13,0-0.2,0.06-0.2,0.18v1.34
	c0,0.11,0.07,0.17,0.2,0.17c0.87-0.02,1.67-0.26,2.4-0.72c0.73-0.45,1.31-1.05,1.72-1.8s0.63-1.56,0.63-2.43
	c0-0.73-0.14-1.4-0.42-2.01c0.78-0.93,1.17-2.03,1.17-3.31c0-0.71-0.14-1.38-0.42-2.02c-0.28-0.64-0.65-1.2-1.12-1.67
	c-0.47-0.47-1.02-0.84-1.67-1.12c-0.64-0.28-1.32-0.42-2.02-0.42c-1.54,0-2.83,0.58-3.86,1.73c-0.81-0.43-1.71-0.65-2.7-0.65
	c-1.41,0-2.66,0.44-3.75,1.31s-1.79,1.99-2.1,3.35c-1.1,0.26-2.01,0.83-2.73,1.73S4.28,15.74,4.28,16.89z M12.21,26.77
	c0,0.16,0.05,0.32,0.15,0.46s0.25,0.25,0.45,0.31l0.25,0.03c0.42,0,0.68-0.2,0.8-0.6l2.43-8.89c0.06-0.23,0.04-0.45-0.07-0.64
	c-0.11-0.2-0.27-0.33-0.49-0.4c-0.23-0.07-0.45-0.05-0.65,0.06c-0.2,0.11-0.34,0.28-0.4,0.5l-2.45,8.9
	C12.22,26.67,12.21,26.76,12.21,26.77z M16.35,23.74c0,0.4,0.21,0.67,0.62,0.8c0.17,0.02,0.26,0.03,0.26,0.03
	c0.11,0,0.23-0.02,0.35-0.08c0.2-0.09,0.34-0.27,0.42-0.55l1.64-5.85c0.06-0.23,0.04-0.45-0.08-0.64c-0.11-0.2-0.28-0.33-0.51-0.4
	c-0.23-0.07-0.45-0.05-0.65,0.06c-0.2,0.11-0.33,0.28-0.39,0.5l-1.62,5.89C16.37,23.64,16.35,23.72,16.35,23.74z M18.02,9.04
	c0.68-0.64,1.5-0.96,2.48-0.96c0.97,0,1.8,0.34,2.48,1.02c0.69,0.68,1.03,1.51,1.03,2.48c0,0.63-0.17,1.25-0.51,1.85
	c-0.96-0.96-2.12-1.44-3.48-1.44h-0.32C19.42,10.84,18.86,9.86,18.02,9.04z`}}]})(s)}function Qr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.65,16.96c0,1.32,0.47,2.46,1.4,3.41c0.93,0.96,2.06,1.46,3.38,1.5c0.12,0,0.18-0.06,0.18-0.17v-1.33
	c0-0.12-0.06-0.18-0.18-0.18c-0.84-0.04-1.57-0.38-2.17-1.02s-0.91-1.37-0.91-2.22c0-0.84,0.28-1.57,0.85-2.19
	c0.57-0.62,1.26-0.97,2.1-1.04l0.53-0.07c0.12,0,0.19-0.06,0.19-0.18l0.07-0.5c0.1-1.09,0.55-2.01,1.36-2.75s1.76-1.11,2.86-1.11
	c1.08,0,2.03,0.37,2.84,1.1c0.81,0.73,1.28,1.63,1.4,2.71l0.07,0.58c0,0.12,0.06,0.18,0.19,0.18h1.6c0.9,0,1.67,0.32,2.32,0.97
	c0.64,0.64,0.97,1.41,0.97,2.3c0,0.84-0.3,1.58-0.9,2.22c-0.6,0.63-1.33,0.97-2.18,1.02c-0.13,0-0.2,0.06-0.2,0.18v1.33
	c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.54,3.38-1.5s1.38-2.09,1.38-3.42c0-0.89-0.22-1.72-0.67-2.48
	c-0.44-0.76-1.05-1.36-1.81-1.8c-0.76-0.44-1.59-0.66-2.48-0.66h-0.31c-0.33-1.34-1.03-2.43-2.11-3.29
	c-1.07-0.85-2.3-1.28-3.68-1.28c-1.41,0-2.66,0.44-3.75,1.31s-1.79,1.99-2.1,3.35c-1.13,0.29-2.04,0.88-2.75,1.77
	S4.65,15.8,4.65,16.96z M10.05,23.98c0,0.17,0.05,0.34,0.16,0.51c0.11,0.17,0.27,0.28,0.47,0.35c0.23,0.07,0.44,0.06,0.64-0.04
	c0.19-0.09,0.33-0.28,0.39-0.56l0.14-0.61c0.05-0.23,0.02-0.44-0.09-0.63s-0.28-0.33-0.52-0.4c-0.22-0.07-0.44-0.04-0.64,0.08
	s-0.34,0.3-0.4,0.53l-0.14,0.59C10.06,23.83,10.05,23.89,10.05,23.98z M10.81,21.08c0,0.21,0.08,0.4,0.25,0.57
	c0.16,0.17,0.34,0.25,0.56,0.25c0.24,0,0.44-0.08,0.6-0.24c0.16-0.16,0.24-0.35,0.24-0.59c0-0.23-0.08-0.43-0.24-0.59
	c-0.16-0.16-0.36-0.24-0.6-0.24c-0.23,0-0.42,0.08-0.58,0.23C10.89,20.65,10.81,20.85,10.81,21.08z M11.42,18.81
	c-0.01,0.16,0.03,0.31,0.14,0.45c0.1,0.15,0.26,0.25,0.48,0.32c0.21,0.06,0.41,0.04,0.62-0.07S13,19.23,13.07,19l0.28-0.9
	c0.07-0.24,0.05-0.46-0.07-0.65c-0.12-0.19-0.3-0.32-0.54-0.39c-0.22-0.07-0.43-0.05-0.63,0.07c-0.2,0.11-0.34,0.28-0.41,0.5
	l-0.24,0.92c0,0.02-0.01,0.06-0.02,0.12C11.43,18.72,11.42,18.77,11.42,18.81z M12.59,27.1c0,0.18,0.05,0.34,0.15,0.5
	c0.1,0.16,0.26,0.27,0.48,0.33c0.08,0.02,0.17,0.03,0.25,0.03c0.43,0,0.69-0.2,0.79-0.61l0.14-0.59c0.06-0.26,0.03-0.48-0.08-0.68
	c-0.12-0.2-0.29-0.32-0.52-0.37c-0.21-0.07-0.42-0.05-0.63,0.07c-0.21,0.12-0.34,0.29-0.41,0.51l-0.14,0.59
	C12.6,26.97,12.59,27.04,12.59,27.1z M13.36,24.2c0,0.22,0.08,0.41,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24
	c0.24,0,0.43-0.08,0.59-0.23c0.16-0.16,0.23-0.35,0.23-0.59c0-0.23-0.08-0.42-0.23-0.58c-0.16-0.16-0.35-0.23-0.59-0.23
	c-0.24,0-0.43,0.08-0.59,0.23S13.36,23.97,13.36,24.2z M13.99,21.93c-0.01,0.15,0.03,0.31,0.13,0.47c0.1,0.16,0.25,0.26,0.45,0.3
	c0.23,0.06,0.44,0.04,0.64-0.06s0.33-0.29,0.41-0.56l0.27-0.9c0.07-0.22,0.05-0.43-0.07-0.63c-0.12-0.2-0.29-0.33-0.53-0.4
	c-0.22-0.07-0.43-0.04-0.64,0.08c-0.21,0.12-0.34,0.3-0.41,0.53l-0.23,0.9C14,21.74,13.99,21.83,13.99,21.93z M16.75,24.08
	c0,0.16,0.05,0.32,0.15,0.48c0.1,0.16,0.26,0.27,0.46,0.33c0.03,0,0.08,0.01,0.14,0.02c0.06,0.01,0.1,0.02,0.14,0.02
	c0.41,0,0.66-0.22,0.76-0.66l0.14-0.6c0.07-0.21,0.05-0.42-0.07-0.63c-0.11-0.21-0.28-0.34-0.51-0.41
	c-0.25-0.06-0.48-0.04-0.68,0.08s-0.34,0.29-0.41,0.53l-0.09,0.59c0,0.02-0.01,0.07-0.02,0.12S16.75,24.04,16.75,24.08z
	 M17.49,21.12c0,0.22,0.08,0.42,0.25,0.57c0.15,0.16,0.34,0.24,0.57,0.24c0.24,0,0.43-0.08,0.59-0.23s0.23-0.35,0.23-0.58
	c0-0.24-0.08-0.43-0.23-0.59s-0.35-0.23-0.59-0.23c-0.24,0-0.43,0.08-0.59,0.23C17.57,20.69,17.49,20.88,17.49,21.12z M18.1,18.81
	c0,0.17,0.05,0.33,0.16,0.48c0.11,0.15,0.27,0.26,0.49,0.32c0.02,0,0.06,0.01,0.12,0.02s0.11,0.02,0.14,0.02
	c0.1,0,0.22-0.03,0.36-0.09c0.21-0.11,0.35-0.29,0.41-0.52l0.24-0.9c0.06-0.23,0.04-0.44-0.08-0.63c-0.11-0.2-0.28-0.33-0.51-0.4
	c-0.23-0.07-0.44-0.05-0.64,0.06c-0.19,0.11-0.33,0.27-0.39,0.51l-0.28,0.91c0,0.02-0.01,0.06-0.02,0.12
	C18.1,18.74,18.1,18.78,18.1,18.81z`}}]})(s)}function Gr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.63,16.93c0,1.12,0.33,2.11,0.98,2.99c0.65,0.87,1.5,1.47,2.55,1.79c0.09,0.02,0.17-0.01,0.24-0.08l1.16-1.43
	c-0.89,0-1.65-0.32-2.28-0.96c-0.63-0.64-0.95-1.41-0.95-2.31c0-0.84,0.28-1.58,0.84-2.2s1.26-0.97,2.1-1.04l0.53-0.07
	c0.11,0,0.16-0.04,0.16-0.13l0.08-0.55c0.12-1.1,0.59-2.01,1.39-2.73s1.75-1.08,2.85-1.08c1.1,0,2.06,0.36,2.87,1.09
	c0.82,0.73,1.27,1.64,1.37,2.72l0.07,0.58c0.02,0.11,0.1,0.17,0.22,0.17h1.62c0.9,0,1.67,0.32,2.3,0.95s0.95,1.39,0.95,2.29
	c0,0.83-0.28,1.56-0.84,2.18s-1.25,0.98-2.07,1.08c-0.12,0-0.28,0.02-0.49,0.06c-0.19,0.02-0.33,0.09-0.41,0.23l-2.36,2.79
	c-0.14,0.18-0.2,0.39-0.16,0.63c0.03,0.24,0.14,0.43,0.31,0.57c0.11,0.12,0.29,0.19,0.56,0.19c0.26,0,0.47-0.12,0.61-0.35l2.12-2.44
	c1.24-0.13,2.29-0.66,3.15-1.61c0.86-0.95,1.28-2.06,1.28-3.33c0-0.67-0.13-1.32-0.39-1.93c-0.26-0.61-0.61-1.14-1.05-1.58
	c-0.44-0.44-0.97-0.79-1.58-1.05c-0.61-0.26-1.25-0.39-1.93-0.39h-0.32c-0.33-1.32-1.04-2.41-2.12-3.26s-2.32-1.27-3.72-1.27
	c-0.93,0-1.81,0.2-2.63,0.6c-0.82,0.4-1.51,0.95-2.08,1.66s-0.94,1.52-1.13,2.42c-1.12,0.25-2.04,0.82-2.75,1.72
	C4.98,14.74,4.63,15.77,4.63,16.93z M8.01,24.95c0,0.06,0.02,0.16,0.06,0.3c0.09,0.21,0.23,0.36,0.44,0.44
	c0.22,0.1,0.44,0.11,0.67,0.02c0.23-0.09,0.38-0.24,0.46-0.45c0.1-0.22,0.11-0.43,0.02-0.65c-0.09-0.21-0.24-0.36-0.46-0.43
	c-0.22-0.11-0.44-0.12-0.65-0.03c-0.21,0.09-0.36,0.24-0.46,0.47C8.04,24.72,8.01,24.83,8.01,24.95z M9.86,22.51v0.1
	c0.02,0.23,0.12,0.41,0.3,0.56c0.23,0.13,0.43,0.19,0.62,0.19c0.22,0,0.43-0.11,0.61-0.33l2.32-2.77c0.14-0.17,0.21-0.39,0.2-0.66
	c-0.02-0.21-0.12-0.39-0.28-0.53c-0.16-0.14-0.33-0.22-0.52-0.22c-0.06,0-0.1,0-0.14,0.01c-0.23,0.04-0.42,0.15-0.56,0.33
	l-2.36,2.77C9.92,22.12,9.86,22.3,9.86,22.51z M10.63,27.23c0,0.12,0.03,0.23,0.08,0.32c0.08,0.21,0.23,0.37,0.44,0.47
	c0.11,0.05,0.22,0.07,0.33,0.07c0.12,0,0.23-0.02,0.31-0.07c0.23-0.09,0.39-0.23,0.47-0.41c0.1-0.22,0.11-0.44,0.02-0.67
	c-0.08-0.23-0.23-0.38-0.45-0.46c-0.22-0.1-0.44-0.11-0.67-0.02c-0.23,0.09-0.38,0.24-0.45,0.45C10.65,27,10.63,27.11,10.63,27.23z
	 M12.3,24.88v0.11c0.02,0.22,0.13,0.4,0.31,0.55c0.18,0.15,0.37,0.22,0.55,0.22c0.23,0,0.43-0.11,0.63-0.33l4.35-5.24
	c0.11-0.12,0.17-0.3,0.17-0.52v-0.12c-0.02-0.23-0.12-0.4-0.27-0.53s-0.33-0.2-0.52-0.2h-0.13c-0.23,0.01-0.42,0.12-0.55,0.31
	l-4.35,5.2C12.35,24.51,12.3,24.69,12.3,24.88z M15.81,26.03c0,0.09,0.02,0.19,0.06,0.3c0.09,0.22,0.24,0.38,0.46,0.47
	c0.14,0.04,0.24,0.06,0.31,0.06c0.14,0,0.26-0.03,0.34-0.08c0.22-0.09,0.38-0.23,0.46-0.42c0.1-0.17,0.11-0.39,0.02-0.67
	c-0.08-0.21-0.23-0.35-0.44-0.44l-0.36-0.09c-0.09,0.02-0.19,0.04-0.32,0.07c-0.22,0.08-0.37,0.23-0.45,0.44
	C15.84,25.8,15.81,25.92,15.81,26.03z`}}]})(s)}function Kr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,16.91c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.47,2.73-1.73c0.31-1.36,1.02-2.48,2.11-3.36s2.34-1.31,3.75-1.31
	c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.65s1.37,1.03,1.81,1.78
	c0.44,0.75,0.67,1.58,0.67,2.47c0,0.88-0.21,1.69-0.63,2.44c-0.42,0.75-1,1.35-1.73,1.8c-0.73,0.45-1.53,0.69-2.4,0.71
	c-0.13,0-0.2-0.06-0.2-0.17v-1.33c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.39,0.9-2.26s-0.33-1.62-0.98-2.26
	s-1.42-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.71
	c-0.82-0.73-1.76-1.09-2.85-1.09c-1.09,0-2.05,0.36-2.85,1.09c-0.81,0.73-1.26,1.63-1.36,2.71l-0.07,0.53c0,0.12-0.07,0.19-0.2,0.19
	l-0.53,0.03c-0.83,0.1-1.53,0.46-2.1,1.07s-0.85,1.33-0.85,2.16c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.18,1.02
	c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17c-1.34-0.06-2.47-0.57-3.4-1.53S4.64,18.24,4.64,16.91z M9.99,23.6
	c0-0.04,0.01-0.11,0.04-0.2l1.63-5.77c0.06-0.19,0.17-0.34,0.32-0.44c0.15-0.1,0.31-0.15,0.46-0.15c0.07,0,0.15,0.01,0.24,0.03
	c0.24,0.04,0.42,0.17,0.54,0.37c0.12,0.2,0.15,0.42,0.08,0.67l-1.63,5.73c-0.12,0.43-0.4,0.64-0.82,0.64
	c-0.04,0-0.07-0.01-0.11-0.02c-0.06-0.02-0.09-0.03-0.1-0.03c-0.22-0.06-0.38-0.17-0.49-0.33C10.04,23.93,9.99,23.77,9.99,23.6z
	 M12.61,26.41l2.44-8.77c0.04-0.19,0.14-0.34,0.3-0.44c0.16-0.1,0.32-0.15,0.49-0.15c0.09,0,0.18,0.01,0.27,0.03
	c0.22,0.06,0.38,0.19,0.49,0.39c0.11,0.2,0.13,0.41,0.07,0.64l-2.43,8.78c-0.04,0.17-0.13,0.31-0.29,0.43
	c-0.16,0.12-0.32,0.18-0.51,0.18c-0.09,0-0.18-0.02-0.25-0.05c-0.2-0.05-0.37-0.18-0.52-0.39C12.56,26.88,12.54,26.67,12.61,26.41z
	 M16.74,23.62c0-0.04,0.01-0.11,0.04-0.23l1.63-5.77c0.06-0.19,0.16-0.34,0.3-0.44c0.15-0.1,0.3-0.15,0.46-0.15
	c0.08,0,0.17,0.01,0.26,0.03c0.21,0.06,0.36,0.16,0.46,0.31c0.1,0.15,0.15,0.31,0.15,0.47c0,0.03-0.01,0.08-0.02,0.14
	s-0.02,0.1-0.02,0.12l-1.63,5.73c-0.04,0.19-0.13,0.35-0.28,0.46s-0.32,0.17-0.51,0.17l-0.24-0.05c-0.2-0.06-0.35-0.16-0.46-0.32
	C16.79,23.94,16.74,23.78,16.74,23.62z`}}]})(s)}function Yr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.81,15.25c0,0.92,0.23,1.78,0.7,2.57s1.1,1.43,1.9,1.9c0.8,0.47,1.66,0.71,2.59,0.71c0.93,0,1.8-0.24,2.61-0.71
	c0.81-0.47,1.45-1.11,1.92-1.9c0.47-0.8,0.71-1.65,0.71-2.57c0-0.6-0.17-1.31-0.52-2.14c-0.35-0.83-0.77-1.6-1.26-2.3
	c-0.44-0.57-0.96-1.2-1.56-1.88c-0.6-0.68-1.65-1.73-1.89-1.97l-1.28,1.29c-0.62,0.6-1.22,1.29-1.79,2.08
	c-0.57,0.79-1.07,1.64-1.49,2.55C10.01,13.79,9.81,14.58,9.81,15.25z`}}]})(s)}function Xr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M11.01,12.23c0-0.26,0.13-0.59,0.38-1.01c0.25-0.42,0.5-0.77,0.73-1.04c0.06-0.07,0.14-0.17,0.23-0.28s0.15-0.17,0.16-0.18
	l0.37,0.43c0.28,0.31,0.53,0.66,0.76,1.07c0.23,0.41,0.35,0.74,0.35,1.01c0,0.41-0.14,0.77-0.43,1.06
	c-0.28,0.29-0.63,0.44-1.05,0.44c-0.41,0-0.77-0.15-1.06-0.44C11.16,12.99,11.01,12.64,11.01,12.23z M14.13,16.38
	c0-0.29,0.08-0.62,0.24-1.01c0.16-0.38,0.36-0.74,0.6-1.06c0.46-0.61,0.89-1.12,1.31-1.53c0.04-0.03,0.13-0.11,0.26-0.24l0.25,0.24
	c0.39,0.37,0.83,0.88,1.32,1.52c0.26,0.34,0.46,0.7,0.62,1.08s0.24,0.71,0.24,1c0,0.69-0.23,1.26-0.7,1.73
	c-0.47,0.47-1.05,0.7-1.73,0.7c-0.68,0-1.25-0.24-1.72-0.71S14.13,17.05,14.13,16.38z M15.65,9.48c0-0.43,0.33-1,1-1.7l0.25,0.28
	c0.19,0.22,0.36,0.46,0.51,0.74c0.15,0.27,0.23,0.5,0.23,0.68c0,0.28-0.1,0.5-0.29,0.69c-0.19,0.18-0.42,0.28-0.7,0.28
	c-0.29,0-0.53-0.09-0.72-0.28C15.75,9.98,15.65,9.75,15.65,9.48z`}}]})(s)}function Zr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M11.78,14.91c0,0.79,0.19,1.51,0.57,2.17c0.38,0.66,0.9,1.19,1.57,1.57c0.67,0.38,1.39,0.58,2.18,0.58
	c0.19,0,0.35-0.07,0.48-0.22c0.13-0.14,0.2-0.31,0.2-0.51c0-0.19-0.07-0.35-0.2-0.48s-0.29-0.19-0.49-0.19
	c-0.81,0-1.5-0.28-2.07-0.85c-0.57-0.57-0.85-1.26-0.85-2.07c0-0.78,0.27-1.45,0.8-2.02s1.16-0.86,1.88-0.86l-0.33,0.32
	c-0.15,0.15-0.22,0.31-0.21,0.49c0,0.18,0.07,0.34,0.2,0.48c0.13,0.14,0.29,0.21,0.49,0.21c0.2,0,0.37-0.07,0.51-0.21l1.51-1.5
	c0.13-0.11,0.2-0.27,0.2-0.51c0-0.22-0.07-0.38-0.2-0.47l-1.51-1.53c-0.13-0.14-0.29-0.21-0.49-0.21s-0.36,0.07-0.5,0.21
	s-0.21,0.3-0.21,0.5c0,0.21,0.07,0.38,0.22,0.51l0.3,0.28c-1.15,0.08-2.11,0.53-2.89,1.35C12.17,12.77,11.78,13.76,11.78,14.91z`}}]})(s)}function Jr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.77,15.53c0,0.94,0.24,1.82,0.71,2.62c0.47,0.8,1.11,1.44,1.91,1.9c0.8,0.47,1.67,0.7,2.61,0.7
	c0.96,0,1.83-0.23,2.63-0.69c0.8-0.46,1.43-1.09,1.89-1.89c0.46-0.8,0.69-1.68,0.69-2.63c0-0.24-0.08-0.44-0.24-0.61
	c-0.16-0.17-0.35-0.25-0.59-0.25c-0.23,0-0.43,0.08-0.6,0.25c-0.17,0.17-0.25,0.37-0.25,0.61c0,0.98-0.35,1.82-1.04,2.51
	c-0.69,0.69-1.53,1.04-2.51,1.04c-0.97,0-1.79-0.35-2.47-1.04c-0.68-0.69-1.02-1.53-1.02-2.51c0-0.85,0.26-1.62,0.79-2.31
	s1.14-1.06,1.84-1.1l-0.38,0.37c-0.16,0.18-0.24,0.37-0.24,0.58c0,0.22,0.08,0.42,0.24,0.6c0.36,0.35,0.77,0.35,1.21,0l1.84-1.82
	c0.16-0.12,0.24-0.33,0.24-0.62c0-0.26-0.08-0.45-0.24-0.57L14.97,8.8c-0.18-0.16-0.37-0.24-0.57-0.24c-0.25,0-0.46,0.08-0.63,0.25
	c-0.17,0.17-0.25,0.37-0.25,0.6c0,0.24,0.08,0.45,0.24,0.61l0.38,0.36c-1.25,0.22-2.29,0.82-3.12,1.8S9.77,14.27,9.77,15.53z`}}]})(s)}function qr(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.1,16.97c0,0.24,0.09,0.45,0.28,0.62c0.16,0.19,0.37,0.28,0.63,0.28H18.7c0.29,0,0.53,0.1,0.73,0.3
	c0.2,0.2,0.3,0.45,0.3,0.74c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.74,0.29c-0.29,0-0.54-0.1-0.73-0.29
	c-0.16-0.18-0.36-0.26-0.6-0.26c-0.25,0-0.46,0.09-0.64,0.26s-0.27,0.38-0.27,0.61c0,0.25,0.09,0.46,0.28,0.63
	c0.56,0.55,1.22,0.83,1.96,0.83c0.78,0,1.45-0.27,2.01-0.81c0.56-0.54,0.83-1.19,0.83-1.97s-0.28-1.44-0.84-2
	c-0.56-0.56-1.23-0.84-2-0.84H4.01c-0.25,0-0.46,0.09-0.64,0.26C3.19,16.51,3.1,16.72,3.1,16.97z M3.1,13.69
	c0,0.23,0.09,0.43,0.28,0.61c0.17,0.18,0.38,0.26,0.63,0.26h20.04c0.78,0,1.45-0.27,2.01-0.82c0.56-0.54,0.84-1.2,0.84-1.97
	c0-0.77-0.28-1.44-0.84-1.99s-1.23-0.83-2.01-0.83c-0.77,0-1.42,0.27-1.95,0.8c-0.18,0.16-0.27,0.38-0.27,0.67
	c0,0.26,0.09,0.47,0.26,0.63c0.17,0.16,0.38,0.24,0.63,0.24c0.24,0,0.45-0.08,0.63-0.24c0.19-0.21,0.42-0.31,0.7-0.31
	c0.29,0,0.53,0.1,0.73,0.3c0.2,0.2,0.3,0.44,0.3,0.73c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.73,0.29H4.01
	c-0.25,0-0.46,0.09-0.64,0.26C3.19,13.23,3.1,13.44,3.1,13.69z M4.67,20.61c0,0.24,0.08,0.43,0.24,0.58
	c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.62-0.23s0.25-0.35,0.25-0.59c0-0.23-0.09-0.43-0.26-0.6
	c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25C4.75,20.18,4.67,20.38,4.67,20.61z M5.62,10.68
	c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.08-0.43-0.25-0.6C6.89,9.92,6.68,9.83,6.45,9.83c-0.22,0-0.42,0.08-0.58,0.25C5.7,10.25,5.62,10.45,5.62,10.68z
	 M8.65,8.37c0,0.24,0.08,0.43,0.24,0.58C9.05,9.12,9.25,9.2,9.47,9.2c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.09-0.43-0.26-0.6C9.92,7.61,9.71,7.53,9.47,7.53c-0.22,0-0.42,0.08-0.58,0.25C8.73,7.94,8.65,8.14,8.65,8.37z M8.74,19.97
	c0,0.23,0.08,0.43,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25C8.82,19.54,8.74,19.74,8.74,19.97z
	 M12.92,10.14c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.62-0.23s0.25-0.35,0.25-0.59
	c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25C13,9.71,12.92,9.91,12.92,10.14z
	 M13.24,21.13c0,0.23,0.08,0.42,0.25,0.58c0.16,0.16,0.35,0.24,0.57,0.24c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.42,0.08-0.58,0.25S13.24,20.9,13.24,21.13z M17.72,9.98
	c0,0.23,0.08,0.42,0.24,0.57c0.17,0.17,0.36,0.25,0.58,0.25c0.24,0,0.45-0.08,0.62-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.09-0.43-0.26-0.6c-0.17-0.17-0.38-0.25-0.61-0.25c-0.22,0-0.41,0.08-0.58,0.25C17.81,9.55,17.72,9.75,17.72,9.98z
	 M22.81,17.04c0,0.24,0.08,0.43,0.24,0.58c0.16,0.16,0.36,0.24,0.58,0.24c0.24,0,0.45-0.08,0.61-0.23c0.17-0.16,0.25-0.35,0.25-0.59
	c0-0.23-0.08-0.43-0.25-0.6c-0.17-0.17-0.37-0.25-0.61-0.25c-0.23,0-0.42,0.08-0.58,0.25C22.9,16.61,22.81,16.81,22.81,17.04z`}}]})(s)}function br(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.6,16.93c0-1.16,0.36-2.18,1.09-3.08c0.72-0.9,1.65-1.48,2.78-1.73c0.29-1.38,0.98-2.5,2.07-3.39S12.88,7.4,14.3,7.4
	c1.39,0,2.63,0.43,3.72,1.28c1.08,0.85,1.79,1.95,2.12,3.3h0.34c0.9,0,1.73,0.22,2.48,0.66c0.76,0.44,1.35,1.04,1.79,1.8
	c0.43,0.76,0.65,1.59,0.65,2.49c0,1.34-0.46,2.48-1.37,3.44c-0.92,0.96-2.04,1.46-3.37,1.5c-0.12,0-0.18-0.06-0.18-0.17v-1.34
	c0-0.11,0.06-0.17,0.18-0.17c0.84-0.07,1.57-0.42,2.17-1.05s0.9-1.37,0.9-2.22c0-0.89-0.32-1.66-0.96-2.31
	c-0.64-0.64-1.4-0.97-2.29-0.97h-1.63c-0.12,0-0.19-0.06-0.22-0.18l-0.07-0.57c-0.07-0.71-0.3-1.36-0.7-1.94s-0.91-1.03-1.53-1.36
	c-0.62-0.33-1.3-0.49-2.02-0.49c-1.1,0-2.05,0.36-2.86,1.09c-0.81,0.73-1.27,1.64-1.37,2.72l-0.07,0.54c0,0.09-0.05,0.14-0.16,0.14
	L9.31,13.7c-0.84,0.07-1.55,0.41-2.11,1.03c-0.57,0.62-0.85,1.35-0.85,2.2c0,0.87,0.3,1.62,0.89,2.25c0.59,0.63,1.31,0.97,2.17,1.02
	c0.12,0,0.18,0.06,0.18,0.17v1.34c0,0.11-0.06,0.17-0.18,0.17c-0.66-0.03-1.28-0.18-1.88-0.45S6.42,20.8,6,20.36
	c-0.43-0.44-0.77-0.95-1.02-1.55S4.6,17.59,4.6,16.93z M10.02,23.7c0-0.03,0.01-0.08,0.02-0.13s0.02-0.09,0.02-0.11l0.27-1.03
	c0.07-0.22,0.2-0.4,0.4-0.51c0.2-0.12,0.41-0.14,0.64-0.07c0.23,0.07,0.4,0.2,0.52,0.4c0.12,0.2,0.14,0.41,0.07,0.64l-0.24,1.01
	c-0.13,0.44-0.38,0.66-0.76,0.66c-0.03,0-0.05,0-0.09,0c-0.03,0-0.07-0.01-0.11-0.01c-0.04-0.01-0.07-0.01-0.1-0.01
	c-0.21-0.06-0.37-0.18-0.48-0.34S10.02,23.86,10.02,23.7z M11.34,18.88c0-0.02,0-0.06,0.01-0.11c0.01-0.05,0.01-0.08,0.01-0.09
	l0.3-1.05c0.06-0.19,0.17-0.34,0.32-0.45c0.15-0.1,0.31-0.15,0.47-0.15c0.02,0,0.05,0,0.08,0c0.03,0,0.06,0.01,0.09,0.01
	c0.03,0.01,0.06,0.01,0.08,0.01c0.23,0.07,0.4,0.2,0.51,0.4c0.12,0.2,0.14,0.41,0.07,0.64l-0.24,1c-0.07,0.28-0.2,0.47-0.4,0.59
	s-0.42,0.12-0.65,0.02c-0.22-0.06-0.38-0.17-0.49-0.34S11.34,19.04,11.34,18.88z M12.57,26.83c0-0.03,0.01-0.07,0.02-0.13
	s0.02-0.09,0.02-0.12l0.29-0.99c0.06-0.24,0.2-0.42,0.4-0.54c0.2-0.12,0.42-0.15,0.65-0.08c0.23,0.07,0.39,0.2,0.51,0.41
	s0.13,0.42,0.07,0.65l-0.25,1.04c-0.11,0.41-0.37,0.61-0.8,0.61c-0.05,0-0.13-0.01-0.24-0.04c-0.22-0.04-0.38-0.14-0.49-0.3
	C12.63,27.18,12.57,27.01,12.57,26.83z M13.91,22.06c0-0.06,0.01-0.14,0.04-0.25l0.27-1.03c0.07-0.23,0.2-0.4,0.41-0.51
	c0.2-0.12,0.42-0.14,0.65-0.07c0.23,0.06,0.39,0.19,0.51,0.39c0.11,0.2,0.13,0.41,0.06,0.65l-0.24,0.99
	c-0.13,0.45-0.37,0.68-0.72,0.68c-0.04,0-0.15-0.02-0.31-0.06c-0.22-0.04-0.38-0.14-0.49-0.3C13.97,22.4,13.91,22.23,13.91,22.06z
	 M16.73,23.74c0-0.07,0.01-0.15,0.03-0.24l0.28-0.99c0.07-0.24,0.2-0.42,0.41-0.54s0.41-0.15,0.63-0.09
	c0.23,0.07,0.41,0.2,0.53,0.41c0.12,0.2,0.15,0.41,0.09,0.63l-0.29,1.06c-0.1,0.41-0.36,0.61-0.79,0.61c-0.09,0-0.18-0.01-0.26-0.03
	c-0.2-0.04-0.35-0.14-0.46-0.3C16.8,24.08,16.74,23.91,16.73,23.74z M18.11,18.98c0-0.03,0.02-0.12,0.05-0.26l0.3-1.03
	c0.04-0.21,0.13-0.37,0.29-0.47c0.16-0.1,0.32-0.15,0.49-0.14c0.04-0.01,0.13,0,0.24,0.03c0.22,0.05,0.39,0.18,0.52,0.38
	c0.12,0.17,0.14,0.38,0.07,0.65l-0.24,1.03c-0.13,0.43-0.38,0.65-0.76,0.65c-0.06,0-0.17-0.02-0.34-0.06
	c-0.21-0.06-0.36-0.17-0.46-0.31C18.16,19.29,18.11,19.14,18.11,18.98z`}}]})(s)}function tl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.09,16.95c0-1.16,0.36-2.19,1.08-3.09s1.64-1.49,2.74-1.74c0.31-1.37,1.01-2.49,2.1-3.37s2.35-1.32,3.77-1.32
	c0.81,0,1.55,0.13,2.2,0.4c0,0.01,0,0.01,0.01,0.02c0.84,0.32,1.58,0.84,2.21,1.55h0.03c0.68,0.73,1.13,1.6,1.37,2.62h0.31
	c1.08,0,2.02,0.29,2.83,0.86v-0.01c0.53,0.36,0.98,0.8,1.34,1.33c0.36,0.53,0.6,1.11,0.73,1.74c0.04,0.21,0.06,0.38,0.08,0.52v0.06
	c0,0.01,0,0.06,0.01,0.17s0.01,0.19,0.01,0.24v0.03c0,0.88-0.21,1.7-0.64,2.45c-0.42,0.75-1,1.36-1.74,1.81
	c-0.73,0.45-1.54,0.69-2.42,0.72c-0.13,0-0.2-0.06-0.2-0.17v-1.34c0-0.13,0.07-0.19,0.2-0.19c0.86-0.04,1.58-0.38,2.18-1.02
	c0.6-0.64,0.9-1.39,0.9-2.26c0-0.89-0.32-1.65-0.97-2.29c-0.64-0.64-1.41-0.96-2.31-0.96h-1.61c-0.12,0-0.18-0.06-0.18-0.17
	l-0.08-0.59c-0.1-1-0.52-1.86-1.27-2.59c-0.01-0.01-0.01-0.02-0.02-0.03s-0.02-0.02-0.02-0.03c-0.01-0.01-0.02-0.02-0.04-0.02
	c0-0.02-0.01-0.03-0.02-0.03c-0.73-0.66-1.58-1.04-2.56-1.12c-0.07-0.01-0.18-0.01-0.34-0.01c-1.1,0-2.05,0.37-2.86,1.1
	s-1.27,1.64-1.37,2.72l-0.08,0.59c-0.03,0.09-0.11,0.14-0.22,0.14L8.75,13.7c-0.84,0.1-1.55,0.46-2.11,1.07s-0.84,1.34-0.84,2.18
	v0.04h0.03c0.01,0.48,0.11,0.93,0.3,1.35c0.2,0.43,0.46,0.79,0.8,1.09c0.21,0.18,0.45,0.34,0.74,0.48v0.01
	c0.4,0.19,0.8,0.3,1.21,0.32c0.11,0,0.17,0.06,0.17,0.18v1.34c0,0.11-0.06,0.17-0.17,0.17c-0.52-0.03-1.01-0.13-1.48-0.3v0.01
	c-0.83-0.29-1.54-0.77-2.11-1.43s-0.95-1.44-1.11-2.31v-0.03c-0.01-0.01-0.01-0.02-0.01-0.04C4.11,17.57,4.09,17.27,4.09,16.95z
	 M9.59,24.12c0-0.03,0.01-0.07,0.02-0.13c0.01-0.05,0.02-0.09,0.02-0.12l0.09-0.59c0.07-0.24,0.2-0.41,0.41-0.53
	s0.43-0.14,0.68-0.08c0.23,0.07,0.39,0.21,0.51,0.41c0.11,0.21,0.13,0.42,0.07,0.63l-0.14,0.6c-0.1,0.44-0.35,0.66-0.76,0.66
	c-0.03,0-0.08-0.01-0.14-0.02c-0.06-0.01-0.1-0.02-0.14-0.02c-0.21-0.06-0.36-0.17-0.46-0.33C9.64,24.45,9.59,24.29,9.59,24.12z
	 M10.33,21.18c0-0.24,0.08-0.43,0.23-0.59s0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59c0,0.23-0.08,0.42-0.23,0.58
	s-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.57-0.24C10.42,21.59,10.33,21.4,10.33,21.18z M11.97,27.17c0-0.04,0.01-0.11,0.04-0.23
	l0.13-0.59c0.07-0.23,0.21-0.4,0.41-0.51c0.21-0.12,0.42-0.14,0.63-0.07c0.23,0.04,0.41,0.17,0.53,0.37
	c0.12,0.2,0.15,0.43,0.08,0.68l-0.13,0.59c-0.1,0.41-0.37,0.61-0.8,0.61c-0.07,0-0.16-0.01-0.24-0.03
	c-0.22-0.06-0.38-0.17-0.49-0.33C12.03,27.5,11.97,27.34,11.97,27.17z M12.76,24.26c0-0.23,0.08-0.43,0.23-0.58
	c0.16-0.16,0.35-0.23,0.59-0.23s0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.58c0,0.24-0.08,0.43-0.23,0.59
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.42-0.08-0.58-0.24C12.84,24.68,12.76,24.49,12.76,24.26z M13.38,21.99
	c0-0.1,0.01-0.19,0.03-0.27l0.23-0.9c0.07-0.23,0.21-0.41,0.41-0.53c0.21-0.12,0.42-0.15,0.64-0.08c0.24,0.07,0.41,0.2,0.53,0.4
	s0.14,0.41,0.07,0.63l-0.26,0.9c-0.08,0.28-0.22,0.46-0.41,0.56c-0.19,0.1-0.41,0.12-0.64,0.06c-0.2-0.04-0.35-0.14-0.45-0.3
	C13.41,22.3,13.37,22.14,13.38,21.99z M16.14,24.13c0-0.03,0-0.08,0.01-0.13s0.01-0.09,0.01-0.11l0.09-0.59
	c0.07-0.24,0.2-0.41,0.41-0.53s0.43-0.14,0.68-0.08c0.23,0.07,0.4,0.21,0.51,0.41c0.12,0.21,0.14,0.42,0.07,0.63l-0.14,0.6
	c-0.1,0.44-0.35,0.66-0.76,0.66c-0.03,0-0.08-0.01-0.14-0.02c-0.06-0.01-0.11-0.02-0.14-0.02c-0.2-0.06-0.35-0.17-0.45-0.33
	C16.2,24.46,16.14,24.3,16.14,24.13z M16.88,21.19c0-0.24,0.08-0.43,0.23-0.59c0.16-0.16,0.35-0.23,0.59-0.23
	c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59c0,0.23-0.08,0.43-0.23,0.58C18.14,21.92,17.95,22,17.71,22
	c-0.24,0-0.43-0.08-0.58-0.24C16.97,21.61,16.88,21.42,16.88,21.19z`}}]})(s)}function cl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:"M9.81,24.6V7.45h1.03V24.6H9.81z M11.54,14.86V7.45l8.65,3.69L11.54,14.86z"}}]})(s)}function nl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M6.35,12.46c0-0.94,0.3-1.77,0.9-2.5s1.37-1.21,2.31-1.43c0.23-1.11,0.79-2.03,1.7-2.75c0.91-0.72,1.95-1.08,3.12-1.08
	c1.12,0,2.13,0.35,3,1.04c0.88,0.69,1.45,1.59,1.72,2.7h0.28c0.76,0,1.46,0.16,2.12,0.49s1.18,0.77,1.57,1.34
	c0.39,0.57,0.59,1.18,0.59,1.84c0,1.12-0.43,2.08-1.29,2.86c0,0.35-0.11,0.75-0.32,1.2c-0.22,0.45-0.5,0.86-0.87,1.23
	c-0.36,0.37-0.73,0.59-1.1,0.68c-0.12,0.62-0.41,1.14-0.86,1.57s-0.99,0.71-1.63,0.85c0.3,0.3,0.45,0.65,0.45,1.06
	c0,0.49-0.17,0.91-0.52,1.26c-0.35,0.35-0.77,0.52-1.27,0.52c-0.49,0-0.91-0.17-1.26-0.52c-0.35-0.35-0.53-0.77-0.53-1.26
	c0-0.06,0.01-0.14,0.04-0.26s0.04-0.21,0.04-0.27h-0.08c-0.59,0-1.09-0.21-1.51-0.63c-0.42-0.42-0.63-0.93-0.63-1.51
	c0-0.23,0.12-0.58,0.37-1.06c-0.49-0.26-0.88-0.67-1.17-1.26h-1.25c-1.09-0.09-2.02-0.53-2.78-1.3C6.73,14.49,6.35,13.55,6.35,12.46
	z`}}]})(s)}function el(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M6.34,12.48c0-0.94,0.3-1.78,0.89-2.52s1.34-1.21,2.25-1.41C9.73,7.43,10.3,6.5,11.2,5.78s1.92-1.08,3.08-1.08
	c1.12,0,2.13,0.35,3.02,1.05c0.89,0.7,1.46,1.6,1.73,2.69h0.27c1.12,0,2.08,0.39,2.88,1.18c0.79,0.78,1.19,1.74,1.19,2.85
	c0,0.6-0.12,1.17-0.37,1.7c-0.25,0.53-0.59,0.99-1.03,1.37v0.03c0,0.59-0.19,1.12-0.56,1.59c-0.37,0.47-0.84,0.76-1.4,0.89
	c-0.14,0.62-0.45,1.15-0.91,1.58c-0.46,0.43-1.01,0.7-1.63,0.8c0.29,0.34,0.43,0.72,0.43,1.13c0,0.48-0.17,0.89-0.51,1.24
	c-0.34,0.34-0.75,0.52-1.23,0.52c-0.48,0-0.89-0.17-1.23-0.52c-0.34-0.34-0.51-0.76-0.51-1.24c0-0.19,0.03-0.38,0.1-0.57h-0.1
	c-0.58,0-1.08-0.21-1.5-0.63c-0.42-0.42-0.63-0.92-0.63-1.5c0-0.4,0.1-0.76,0.3-1.07c-0.52-0.29-0.89-0.7-1.12-1.25h-1.28v-0.01
	c-1.07-0.07-1.98-0.49-2.73-1.27S6.34,13.56,6.34,12.48z M7.74,12.23c0,0.8,0.28,1.48,0.84,2.04s1.24,0.84,2.03,0.84
	c0.49,0,0.95-0.11,1.37-0.34c0.12,0.74,0.47,1.36,1.04,1.86s1.25,0.74,2.02,0.74c0.87,0,1.61-0.31,2.22-0.92
	c0.41,0.48,0.92,0.71,1.54,0.71c0.57,0,1.05-0.2,1.46-0.6c0.4-0.4,0.6-0.89,0.6-1.46c0.4-0.27,0.72-0.61,0.95-1.04
	c0.23-0.42,0.35-0.88,0.35-1.37c0-0.79-0.28-1.47-0.85-2.02c-0.57-0.55-1.25-0.83-2.05-0.83c-0.56,0-1.07,0.15-1.53,0.44
	c0.06-0.24,0.08-0.51,0.08-0.79c0-0.96-0.34-1.78-1.03-2.46c-0.69-0.68-1.52-1.01-2.49-1.01c-0.94,0-1.75,0.33-2.43,0.97
	s-1.04,1.44-1.07,2.37c-0.02,0-0.05,0-0.08,0c-0.04,0-0.07,0-0.09,0c-0.79,0-1.46,0.28-2.03,0.84S7.74,11.45,7.74,12.23z`}}]})(s)}function rl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,16.95c0-1.16,0.35-2.18,1.06-3.08s1.62-1.48,2.74-1.76c0.31-1.36,1.01-2.48,2.1-3.36s2.34-1.31,3.75-1.31
	c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.66c0.76,0.44,1.37,1.04,1.81,1.8
	c0.44,0.76,0.67,1.59,0.67,2.48c0,1.32-0.46,2.47-1.39,3.42c-0.92,0.96-2.05,1.46-3.38,1.5c-0.13,0-0.2-0.06-0.2-0.17v-1.33
	c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.38,0.9-2.23c0-0.89-0.32-1.65-0.97-2.3s-1.42-0.97-2.32-0.97h-1.61
	c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.72c-0.82-0.73-1.76-1.1-2.85-1.1c-1.1,0-2.05,0.37-2.86,1.11
	c-0.81,0.74-1.27,1.65-1.37,2.75l-0.06,0.5c0,0.12-0.07,0.19-0.2,0.19l-0.53,0.07c-0.83,0.07-1.53,0.41-2.1,1.04
	s-0.85,1.35-0.85,2.19c0,0.85,0.3,1.59,0.9,2.23s1.33,0.97,2.18,1.02c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17
	c-1.34-0.04-2.47-0.54-3.4-1.5C5.1,19.42,4.64,18.27,4.64,16.95z M10.14,24.65c0-0.23,0.08-0.43,0.25-0.6
	c0.16-0.15,0.35-0.23,0.57-0.23c0.23,0,0.43,0.08,0.59,0.23s0.24,0.35,0.24,0.59c0,0.24-0.08,0.43-0.24,0.59
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.43-0.08-0.59-0.23C10.22,25.08,10.14,24.88,10.14,24.65z M11,21.02
	c0-0.22,0.08-0.42,0.24-0.58c0.16-0.16,0.35-0.24,0.59-0.24c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
	c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.23,0-0.43-0.08-0.59-0.25C11.08,21.46,11,21.26,11,21.02z
	 M12.9,26.61c0-0.23,0.08-0.43,0.25-0.61c0.16-0.16,0.35-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.37,0.25,0.6
	s-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C12.99,27.03,12.9,26.84,12.9,26.61z
	 M13.77,22.95c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.36-0.24,0.58-0.24c0.23,0,0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.61
	c0,0.23-0.08,0.43-0.25,0.6s-0.37,0.25-0.6,0.25c-0.23,0-0.42-0.08-0.58-0.25C13.85,23.38,13.77,23.18,13.77,22.95z M14.19,19.33
	c0-0.23,0.08-0.43,0.25-0.6c0.18-0.16,0.37-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.36,0.25,0.6
	c0,0.23-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,19.76,14.19,19.56,14.19,19.33z
	 M16.56,24.65c0-0.23,0.08-0.43,0.24-0.6c0.16-0.15,0.36-0.23,0.6-0.23c0.24,0,0.43,0.08,0.59,0.23c0.16,0.16,0.23,0.35,0.23,0.59
	c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.44-0.08-0.6-0.24C16.64,25.07,16.56,24.88,16.56,24.65z
	 M17.41,21.02c0-0.22,0.08-0.41,0.25-0.58c0.17-0.17,0.37-0.25,0.6-0.25c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
	c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.24,0-0.44-0.08-0.6-0.25C17.5,21.45,17.41,21.25,17.41,21.02z`}}]})(s)}function ll(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,16.95c0-1.16,0.35-2.18,1.06-3.08s1.62-1.48,2.74-1.76c0.31-1.36,1.01-2.48,2.1-3.36s2.34-1.31,3.75-1.31
	c1.38,0,2.6,0.43,3.68,1.28c1.08,0.85,1.78,1.95,2.1,3.29h0.32c0.89,0,1.72,0.22,2.48,0.66c0.76,0.44,1.37,1.04,1.81,1.8
	c0.44,0.76,0.67,1.59,0.67,2.48c0,1.32-0.46,2.47-1.39,3.42c-0.92,0.96-2.05,1.46-3.38,1.5c-0.13,0-0.2-0.06-0.2-0.17v-1.33
	c0-0.12,0.07-0.18,0.2-0.18c0.85-0.04,1.58-0.38,2.18-1.02s0.9-1.38,0.9-2.23c0-0.89-0.32-1.65-0.97-2.3s-1.42-0.97-2.32-0.97h-1.61
	c-0.12,0-0.18-0.06-0.18-0.17l-0.08-0.58c-0.11-1.08-0.58-1.99-1.39-2.72c-0.82-0.73-1.76-1.1-2.85-1.1c-1.1,0-2.05,0.37-2.86,1.11
	c-0.81,0.74-1.27,1.65-1.37,2.75l-0.06,0.5c0,0.12-0.07,0.19-0.2,0.19l-0.53,0.07c-0.83,0.07-1.53,0.41-2.1,1.04
	s-0.85,1.35-0.85,2.19c0,0.85,0.3,1.59,0.9,2.23s1.33,0.97,2.18,1.02c0.11,0,0.17,0.06,0.17,0.18v1.33c0,0.11-0.06,0.17-0.17,0.17
	c-1.34-0.04-2.47-0.54-3.4-1.5C5.1,19.42,4.64,18.27,4.64,16.95z M11,21.02c0-0.22,0.08-0.42,0.24-0.58
	c0.16-0.16,0.35-0.24,0.59-0.24c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58c0,0.24-0.08,0.44-0.24,0.6
	c-0.16,0.17-0.35,0.25-0.59,0.25c-0.23,0-0.43-0.08-0.59-0.25C11.08,21.46,11,21.26,11,21.02z M11,24.65c0-0.24,0.08-0.44,0.24-0.6
	c0.16-0.15,0.35-0.23,0.58-0.23c0.23,0,0.43,0.08,0.59,0.23c0.16,0.16,0.24,0.35,0.24,0.59c0,0.24-0.08,0.43-0.24,0.59
	c-0.16,0.16-0.35,0.23-0.59,0.23c-0.23,0-0.43-0.08-0.59-0.23C11.08,25.08,11,24.88,11,24.65z M14.19,22.95
	c0-0.23,0.08-0.44,0.25-0.62c0.16-0.16,0.35-0.24,0.57-0.24c0.23,0,0.43,0.09,0.6,0.26c0.17,0.17,0.26,0.37,0.26,0.6
	c0,0.23-0.08,0.43-0.25,0.6c-0.17,0.17-0.37,0.25-0.61,0.25c-0.23,0-0.42-0.08-0.58-0.25S14.19,23.18,14.19,22.95z M14.19,19.33
	c0-0.23,0.08-0.43,0.25-0.6c0.18-0.16,0.37-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.36,0.25,0.6
	c0,0.23-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,19.76,14.19,19.56,14.19,19.33z
	 M14.19,26.61c0-0.23,0.08-0.43,0.25-0.61c0.16-0.16,0.35-0.24,0.57-0.24c0.24,0,0.44,0.08,0.61,0.25c0.17,0.17,0.25,0.37,0.25,0.6
	s-0.08,0.43-0.25,0.59c-0.17,0.16-0.37,0.24-0.61,0.24c-0.23,0-0.42-0.08-0.58-0.24C14.27,27.03,14.19,26.84,14.19,26.61z
	 M17.41,21.02c0-0.22,0.08-0.41,0.25-0.58c0.17-0.17,0.37-0.25,0.6-0.25c0.23,0,0.43,0.08,0.59,0.24c0.16,0.16,0.24,0.36,0.24,0.58
	c0,0.24-0.08,0.44-0.24,0.6c-0.16,0.17-0.35,0.25-0.59,0.25c-0.24,0-0.44-0.08-0.6-0.25C17.5,21.45,17.41,21.25,17.41,21.02z
	 M17.41,24.65c0-0.22,0.08-0.42,0.25-0.6c0.16-0.15,0.36-0.23,0.6-0.23c0.24,0,0.43,0.08,0.59,0.23s0.23,0.35,0.23,0.59
	c0,0.24-0.08,0.43-0.23,0.59c-0.16,0.16-0.35,0.23-0.59,0.23c-0.24,0-0.44-0.08-0.6-0.24C17.5,25.07,17.41,24.88,17.41,24.65z`}}]})(s)}function sl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.46,14.41c0-0.19,0.07-0.36,0.2-0.5c0.13-0.14,0.29-0.21,0.48-0.21c0.19,0,0.36,0.07,0.49,0.21c0.13,0.14,0.2,0.3,0.2,0.5
	c0,0.19-0.07,0.35-0.2,0.48c-0.13,0.13-0.3,0.2-0.48,0.2s-0.35-0.07-0.48-0.2C7.52,14.75,7.46,14.59,7.46,14.41z M9.44,14.41
	c0-0.19,0.07-0.36,0.2-0.5c0.13-0.14,0.29-0.21,0.48-0.21h3.23l-2.28-2.28c-0.14-0.12-0.21-0.28-0.21-0.47
	c0-0.19,0.07-0.35,0.21-0.49c0.14-0.14,0.3-0.21,0.49-0.21s0.35,0.07,0.49,0.21l2.27,2.27V9.52c0-0.19,0.07-0.36,0.21-0.5
	s0.3-0.21,0.5-0.21c0.19,0,0.35,0.07,0.48,0.21c0.13,0.14,0.2,0.3,0.2,0.5v3.23l2.29-2.3c0.14-0.14,0.3-0.21,0.48-0.21
	c0.18,0,0.35,0.07,0.49,0.21c0.12,0.14,0.18,0.3,0.18,0.49c0,0.19-0.06,0.35-0.18,0.47l-2.28,2.28h3.23c0.18,0,0.34,0.07,0.47,0.21
	c0.13,0.14,0.2,0.3,0.2,0.5c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.29,0.2-0.47,0.2h-3.23l2.29,2.29c0.12,0.12,0.18,0.28,0.18,0.47
	s-0.06,0.35-0.18,0.49c-0.14,0.14-0.31,0.21-0.49,0.21c-0.18,0-0.35-0.07-0.48-0.21l-2.29-2.3v3.24c0,0.19-0.07,0.36-0.2,0.49
	c-0.13,0.13-0.29,0.2-0.48,0.2c-0.19,0-0.36-0.07-0.5-0.2c-0.14-0.13-0.21-0.3-0.21-0.49v-3.22l-2.27,2.27
	c-0.14,0.14-0.3,0.21-0.49,0.21s-0.35-0.07-0.49-0.21s-0.21-0.3-0.21-0.49s0.07-0.34,0.21-0.47l2.3-2.29h-3.24
	c-0.19,0-0.35-0.07-0.48-0.2C9.5,14.75,9.44,14.59,9.44,14.41z M9.45,19.25c0-0.18,0.07-0.35,0.21-0.48
	c0.12-0.14,0.28-0.21,0.47-0.21c0.19,0,0.35,0.07,0.49,0.21c0.14,0.14,0.21,0.3,0.21,0.48c0,0.18-0.07,0.35-0.21,0.48
	c-0.14,0.14-0.3,0.21-0.49,0.21c-0.19,0-0.35-0.07-0.47-0.21C9.52,19.6,9.45,19.44,9.45,19.25z M9.45,9.54
	c0-0.18,0.07-0.35,0.21-0.48c0.12-0.14,0.28-0.21,0.47-0.21c0.19,0,0.35,0.07,0.49,0.21c0.14,0.14,0.21,0.3,0.21,0.48
	s-0.07,0.35-0.21,0.49c-0.14,0.14-0.3,0.21-0.49,0.21c-0.19,0-0.35-0.07-0.47-0.21C9.52,9.89,9.45,9.72,9.45,9.54z M14.3,21.25
	c0-0.18,0.07-0.34,0.21-0.47c0.14-0.13,0.3-0.2,0.5-0.2c0.19,0,0.35,0.07,0.48,0.2c0.13,0.13,0.2,0.29,0.2,0.47
	c0,0.19-0.07,0.36-0.2,0.49c-0.13,0.13-0.29,0.2-0.48,0.2c-0.19,0-0.36-0.07-0.5-0.2C14.37,21.61,14.3,21.45,14.3,21.25z M14.3,7.54
	c0-0.19,0.07-0.36,0.21-0.49s0.3-0.2,0.5-0.2c0.19,0,0.35,0.07,0.48,0.2c0.13,0.13,0.2,0.3,0.2,0.49c0,0.18-0.07,0.34-0.2,0.47
	c-0.13,0.13-0.29,0.2-0.48,0.2c-0.19,0-0.36-0.07-0.5-0.2C14.37,7.88,14.3,7.72,14.3,7.54z M19.17,19.25c0-0.18,0.07-0.35,0.21-0.48
	c0.12-0.14,0.28-0.21,0.47-0.21c0.19,0,0.35,0.07,0.49,0.21c0.14,0.14,0.21,0.3,0.21,0.48c0,0.18-0.07,0.35-0.21,0.48
	c-0.14,0.14-0.3,0.21-0.49,0.21c-0.19,0-0.35-0.07-0.47-0.21C19.24,19.6,19.17,19.44,19.17,19.25z M19.17,9.54
	c0-0.18,0.07-0.35,0.21-0.48c0.12-0.14,0.28-0.21,0.47-0.21c0.19,0,0.35,0.07,0.49,0.21c0.14,0.14,0.21,0.3,0.21,0.48
	s-0.07,0.35-0.21,0.49c-0.14,0.14-0.3,0.21-0.49,0.21c-0.19,0-0.35-0.07-0.47-0.21C19.24,9.89,19.17,9.72,19.17,9.54z M21.17,14.41
	c0-0.19,0.07-0.36,0.2-0.5c0.13-0.14,0.3-0.21,0.49-0.21c0.18,0,0.34,0.07,0.47,0.21c0.13,0.14,0.2,0.3,0.2,0.5
	c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.29,0.2-0.47,0.2c-0.19,0-0.36-0.07-0.49-0.2C21.24,14.75,21.17,14.59,21.17,14.41z`}}]})(s)}function il(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.37,14.62c0-0.24,0.08-0.45,0.25-0.62c0.17-0.16,0.38-0.24,0.6-0.24h2.04c0.23,0,0.42,0.08,0.58,0.25
	c0.15,0.17,0.23,0.37,0.23,0.61S8,15.06,7.85,15.23c-0.15,0.17-0.35,0.25-0.58,0.25H5.23c-0.23,0-0.43-0.08-0.6-0.25
	C4.46,15.06,4.37,14.86,4.37,14.62z M7.23,21.55c0-0.23,0.08-0.43,0.23-0.61l1.47-1.43c0.15-0.16,0.35-0.23,0.59-0.23
	c0.24,0,0.44,0.08,0.6,0.23s0.24,0.34,0.24,0.57c0,0.24-0.08,0.46-0.24,0.64L8.7,22.14c-0.41,0.32-0.82,0.32-1.23,0
	C7.31,21.98,7.23,21.78,7.23,21.55z M7.23,7.71c0-0.23,0.08-0.43,0.23-0.61C7.66,6.93,7.87,6.85,8.1,6.85
	c0.22,0,0.42,0.08,0.59,0.24l1.43,1.47c0.16,0.15,0.24,0.35,0.24,0.59c0,0.24-0.08,0.44-0.24,0.6s-0.36,0.24-0.6,0.24
	c-0.24,0-0.44-0.08-0.59-0.24L7.47,8.32C7.31,8.16,7.23,7.95,7.23,7.71z M9.78,14.62c0-0.93,0.23-1.8,0.7-2.6s1.1-1.44,1.91-1.91
	s1.67-0.7,2.6-0.7c0.7,0,1.37,0.14,2.02,0.42c0.64,0.28,1.2,0.65,1.66,1.12c0.47,0.47,0.84,1.02,1.11,1.66
	c0.27,0.64,0.41,1.32,0.41,2.02c0,0.94-0.23,1.81-0.7,2.61c-0.47,0.8-1.1,1.43-1.9,1.9c-0.8,0.47-1.67,0.7-2.61,0.7
	s-1.81-0.23-2.61-0.7c-0.8-0.47-1.43-1.1-1.9-1.9C10.02,16.43,9.78,15.56,9.78,14.62z M14.14,22.4c0-0.24,0.08-0.44,0.25-0.6
	s0.37-0.24,0.6-0.24c0.24,0,0.45,0.08,0.61,0.24s0.24,0.36,0.24,0.6v1.99c0,0.24-0.08,0.45-0.25,0.62c-0.17,0.17-0.37,0.25-0.6,0.25
	s-0.44-0.08-0.6-0.25c-0.17-0.17-0.25-0.38-0.25-0.62V22.4z M14.14,6.9V4.86c0-0.23,0.08-0.43,0.25-0.6C14.56,4.09,14.76,4,15,4
	s0.43,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6V6.9c0,0.23-0.08,0.42-0.25,0.58S15.23,7.71,15,7.71s-0.44-0.08-0.6-0.23
	S14.14,7.13,14.14,6.9z M14.25,11.22c0.87,0.11,1.6,0.49,2.19,1.15c0.59,0.66,0.89,1.44,0.89,2.33c0,0.83-0.26,1.56-0.78,2.2
	c-0.52,0.63-1.18,1.04-1.98,1.21c0.2,0.02,0.35,0.04,0.44,0.04c0.97,0,1.81-0.35,2.5-1.04s1.04-1.52,1.04-2.5
	c0-0.96-0.35-1.78-1.04-2.47c-0.69-0.68-1.52-1.02-2.5-1.02C14.74,11.14,14.49,11.17,14.25,11.22z M19.66,20.08
	c0-0.23,0.08-0.42,0.23-0.56c0.15-0.16,0.34-0.23,0.56-0.23c0.24,0,0.44,0.08,0.6,0.23l1.46,1.43c0.16,0.17,0.24,0.38,0.24,0.61
	c0,0.23-0.08,0.43-0.24,0.59c-0.4,0.31-0.8,0.31-1.2,0l-1.42-1.42C19.74,20.55,19.66,20.34,19.66,20.08z M19.66,9.16
	c0-0.25,0.08-0.45,0.23-0.59l1.42-1.47c0.17-0.16,0.37-0.24,0.59-0.24c0.24,0,0.44,0.08,0.6,0.25c0.17,0.17,0.25,0.37,0.25,0.6
	c0,0.25-0.08,0.46-0.24,0.62l-1.46,1.43c-0.18,0.16-0.38,0.24-0.6,0.24c-0.23,0-0.41-0.08-0.56-0.24S19.66,9.4,19.66,9.16z
	 M21.92,14.62c0-0.24,0.08-0.44,0.24-0.62c0.16-0.16,0.35-0.24,0.57-0.24h2.02c0.23,0,0.43,0.09,0.6,0.26
	c0.17,0.17,0.26,0.37,0.26,0.6s-0.09,0.43-0.26,0.6c-0.17,0.17-0.37,0.25-0.6,0.25h-2.02c-0.23,0-0.43-0.08-0.58-0.25
	S21.92,14.86,21.92,14.62z`}}]})(s)}function ol(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,16.91c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.47,2.73-1.73c0.31-1.36,1.01-2.48,2.1-3.35s2.35-1.31,3.76-1.31
	c1.38,0,2.6,0.43,3.68,1.27c1.07,0.85,1.78,1.94,2.11,3.28h0.31c0.89,0,1.72,0.22,2.48,0.65s1.37,1.03,1.81,1.78
	c0.44,0.75,0.67,1.58,0.67,2.47c0,1.34-0.46,2.49-1.38,3.45s-2.05,1.47-3.38,1.51c-0.13,0-0.2-0.06-0.2-0.17v-1.33
	c0-0.12,0.07-0.18,0.2-0.18c0.86-0.04,1.58-0.38,2.18-1.02s0.9-1.39,0.9-2.26s-0.32-1.62-0.98-2.26c-0.65-0.64-1.42-0.96-2.31-0.96
	h-1.6c-0.12,0-0.19-0.06-0.19-0.17l-0.07-0.58c-0.11-1.07-0.57-1.98-1.38-2.71c-0.82-0.73-1.77-1.1-2.85-1.1
	c-1.09,0-2.05,0.36-2.86,1.09c-0.81,0.73-1.27,1.63-1.38,2.71l-0.06,0.54c0,0.12-0.07,0.18-0.2,0.18l-0.53,0.03
	c-0.82,0.04-1.51,0.37-2.09,1s-0.86,1.37-0.86,2.22c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.18,1.02c0.11,0,0.17,0.06,0.17,0.18v1.33
	c0,0.11-0.06,0.17-0.17,0.17c-1.34-0.06-2.47-0.57-3.4-1.53S4.64,18.24,4.64,16.91z M10.57,17.79c0-0.24,0.12-0.57,0.37-0.99
	c0.24-0.42,0.47-0.75,0.68-1.01c0.21-0.24,0.34-0.38,0.38-0.42l0.36,0.4c0.26,0.28,0.5,0.61,0.72,1.02c0.22,0.4,0.33,0.74,0.33,1
	c0,0.39-0.13,0.72-0.4,0.98c-0.27,0.26-0.6,0.39-1,0.39c-0.39,0-0.73-0.13-1.01-0.4C10.71,18.5,10.57,18.17,10.57,17.79z
	 M13.55,21.78c0-0.28,0.08-0.59,0.24-0.96s0.35-0.7,0.59-1.02c0.18-0.26,0.4-0.54,0.67-0.84c0.26-0.3,0.46-0.52,0.6-0.65
	c0.07-0.06,0.15-0.14,0.24-0.23l0.24,0.23c0.38,0.33,0.8,0.82,1.27,1.46c0.24,0.33,0.43,0.68,0.59,1.04s0.23,0.68,0.23,0.97
	c0,0.64-0.23,1.19-0.68,1.65s-1.01,0.68-1.66,0.68c-0.64,0-1.19-0.23-1.65-0.67C13.77,22.98,13.55,22.43,13.55,21.78z M15.02,15.12
	c0-0.42,0.32-0.95,0.97-1.6l0.24,0.25c0.18,0.21,0.33,0.45,0.48,0.71c0.14,0.26,0.22,0.47,0.22,0.64c0,0.26-0.09,0.48-0.28,0.66
	c-0.18,0.18-0.4,0.28-0.66,0.28c-0.27,0-0.5-0.09-0.69-0.28C15.11,15.6,15.02,15.38,15.02,15.12z`}}]})(s)}function ul(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.37,16.18c0.65-0.03,1.2-0.28,1.65-0.75c0.45-0.47,0.68-1.03,0.68-1.68c0,0.65,0.22,1.21,0.67,1.68
	c0.45,0.47,1,0.72,1.65,0.75c-0.65,0.03-1.2,0.28-1.65,0.75c-0.45,0.47-0.67,1.03-0.67,1.68c0-0.65-0.22-1.21-0.68-1.68
	C6.57,16.46,6.02,16.21,5.37,16.18z M7.7,8.98c1.26-0.06,2.33-0.55,3.21-1.47c0.88-0.92,1.32-2.01,1.32-3.28
	c0,1.27,0.44,2.36,1.32,3.28s1.95,1.4,3.22,1.47c-0.83,0.04-1.59,0.27-2.29,0.71c-0.69,0.43-1.24,1.01-1.65,1.73
	c-0.4,0.72-0.6,1.49-0.6,2.33c0-1.27-0.44-2.37-1.32-3.29C10.03,9.53,8.96,9.04,7.7,8.98z M11.02,19.75
	c0.95-0.04,1.76-0.41,2.42-1.1c0.66-0.69,0.99-1.51,0.99-2.47c0,0.96,0.33,1.78,0.99,2.47c0.66,0.69,1.46,1.06,2.41,1.1
	c-0.95,0.04-1.75,0.41-2.41,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.99-2.47C12.77,20.16,11.97,19.8,11.02,19.75z
	 M17.83,15.01c0.95-0.04,1.75-0.41,2.41-1.1c0.66-0.69,0.98-1.51,0.98-2.48c0,0.96,0.33,1.78,0.99,2.47s1.47,1.06,2.42,1.1
	c-0.95,0.04-1.76,0.41-2.42,1.1c-0.66,0.69-0.99,1.51-0.99,2.47c0-0.96-0.33-1.78-0.98-2.47C19.58,15.42,18.78,15.05,17.83,15.01z`}}]})(s)}function al(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.63,16.91c0,1.11,0.33,2.1,0.99,2.97s1.51,1.47,2.56,1.79l-0.65,1.68c-0.03,0.14,0.02,0.22,0.14,0.22h2.13l-1.04,3.78
	h0.28l3.97-5.22c0.04-0.04,0.04-0.09,0.02-0.14s-0.07-0.07-0.14-0.07h-2.18l2.48-4.64c0.06-0.14,0.02-0.21-0.14-0.21h-2.94
	c-0.09,0-0.17,0.05-0.22,0.14L8.8,20.08c-0.71-0.18-1.3-0.57-1.77-1.16c-0.47-0.59-0.7-1.26-0.7-2.01c0-0.83,0.28-1.55,0.84-2.16
	s1.26-0.96,2.1-1.06l0.52-0.07c0.13,0,0.2-0.06,0.2-0.17l0.07-0.52c0.1-1.08,0.55-1.99,1.36-2.72c0.81-0.73,1.76-1.1,2.85-1.1
	c1.09,0,2.04,0.37,2.85,1.1c0.82,0.73,1.28,1.64,1.4,2.72l0.06,0.58c0,0.12,0.06,0.18,0.19,0.18h1.61c0.91,0,1.68,0.32,2.32,0.95
	c0.64,0.63,0.96,1.39,0.96,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.32,0.96-2.19,1.03c-0.13,0-0.2,0.06-0.2,0.19v1.37
	c0,0.11,0.07,0.17,0.2,0.17c0.65-0.02,1.27-0.17,1.86-0.44c0.59-0.27,1.1-0.63,1.52-1.07c0.42-0.44,0.76-0.96,1.01-1.57
	c0.25-0.6,0.38-1.23,0.38-1.88c0-0.9-0.22-1.73-0.67-2.49c-0.45-0.76-1.05-1.36-1.81-1.8c-0.76-0.44-1.59-0.66-2.48-0.66h-0.32
	c-0.33-1.33-1.03-2.42-2.11-3.26c-1.08-0.84-2.3-1.27-3.68-1.27c-1.41,0-2.67,0.44-3.76,1.31s-1.79,1.99-2.1,3.36
	c-1.1,0.26-2.01,0.83-2.73,1.73S4.63,15.76,4.63,16.91z M12.79,26.77c0,0.16,0.05,0.31,0.15,0.46c0.1,0.15,0.26,0.26,0.46,0.32
	c0.14,0.03,0.22,0.05,0.25,0.05c0.09,0,0.21-0.03,0.38-0.1c0.21-0.09,0.35-0.27,0.42-0.52l0.28-1.05c0.06-0.22,0.04-0.43-0.08-0.63
	s-0.29-0.33-0.53-0.4c-0.22-0.06-0.43-0.04-0.63,0.08c-0.2,0.12-0.34,0.29-0.41,0.53l-0.27,1C12.8,26.68,12.79,26.77,12.79,26.77z
	 M14.13,22c0,0.14,0.05,0.29,0.15,0.44c0.1,0.15,0.25,0.26,0.45,0.33c0.22,0.07,0.44,0.06,0.64-0.05s0.33-0.28,0.4-0.52l0.3-1.04
	c0.06-0.22,0.03-0.43-0.08-0.63c-0.12-0.2-0.3-0.34-0.53-0.41c-0.23-0.06-0.44-0.04-0.65,0.08s-0.34,0.29-0.41,0.52l-0.24,1.01
	C14.14,21.9,14.13,21.99,14.13,22z M16.95,23.65c0,0.17,0.05,0.34,0.16,0.51c0.11,0.17,0.27,0.28,0.47,0.35
	c0.02,0,0.06,0.01,0.12,0.02c0.05,0.01,0.09,0.02,0.12,0.02c0.13,0,0.26-0.02,0.38-0.08c0.19-0.07,0.33-0.26,0.41-0.57l0.25-1.01
	c0.07-0.23,0.05-0.45-0.06-0.66c-0.11-0.21-0.28-0.35-0.5-0.42c-0.25-0.06-0.48-0.03-0.68,0.08c-0.2,0.12-0.33,0.3-0.37,0.53
	l-0.27,1.03C16.96,23.51,16.95,23.58,16.95,23.65z M18.31,18.86c-0.01,0.16,0.04,0.31,0.15,0.47c0.11,0.16,0.27,0.28,0.49,0.38
	c0.08,0.04,0.16,0.06,0.26,0.06c0.11,0,0.22-0.03,0.34-0.08c0.21-0.1,0.35-0.29,0.44-0.57l0.29-1.03c0.02-0.13,0.03-0.2,0.03-0.22
	c0-0.17-0.05-0.33-0.16-0.49s-0.27-0.27-0.49-0.33c-0.02,0-0.06-0.01-0.11-0.02C19.49,17,19.45,17,19.42,17
	c-0.17,0-0.33,0.05-0.49,0.15c-0.16,0.1-0.27,0.26-0.33,0.48l-0.27,1.01C18.32,18.72,18.31,18.79,18.31,18.86z`}}]})(s)}function dl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:"M9.76,24.6V7.45h1.13V24.6H9.76z M11.7,14.05v-6.6h8.55v6.6H11.7z M14.06,12.05h3.81v-2.5h-3.81V12.05z"}}]})(s)}function fl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.1,16.97c0,0.24,0.09,0.45,0.28,0.62c0.16,0.19,0.37,0.28,0.63,0.28H18.7c0.29,0,0.53,0.1,0.73,0.3
	c0.2,0.2,0.3,0.45,0.3,0.74c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.74,0.29c-0.29,0-0.54-0.1-0.73-0.29
	c-0.16-0.18-0.36-0.26-0.6-0.26c-0.25,0-0.46,0.09-0.64,0.26s-0.27,0.38-0.27,0.61c0,0.25,0.09,0.46,0.28,0.63
	c0.56,0.55,1.22,0.83,1.96,0.83c0.78,0,1.45-0.27,2.01-0.81c0.56-0.54,0.83-1.19,0.83-1.97s-0.28-1.44-0.84-2
	c-0.56-0.56-1.23-0.84-2-0.84H4.01c-0.25,0-0.46,0.09-0.64,0.26C3.19,16.51,3.1,16.72,3.1,16.97z M3.1,13.69
	c0,0.23,0.09,0.43,0.28,0.61c0.17,0.18,0.38,0.26,0.63,0.26h20.04c0.78,0,1.45-0.27,2.01-0.82c0.56-0.54,0.84-1.2,0.84-1.97
	c0-0.77-0.28-1.44-0.84-1.99s-1.23-0.83-2.01-0.83c-0.77,0-1.42,0.27-1.95,0.8c-0.18,0.16-0.27,0.38-0.27,0.67
	c0,0.26,0.09,0.47,0.26,0.63c0.17,0.16,0.38,0.24,0.63,0.24c0.24,0,0.45-0.08,0.63-0.24c0.19-0.21,0.42-0.31,0.7-0.31
	c0.29,0,0.53,0.1,0.73,0.3c0.2,0.2,0.3,0.44,0.3,0.73c0,0.29-0.1,0.53-0.3,0.72c-0.2,0.19-0.44,0.29-0.73,0.29H4.01
	c-0.25,0-0.46,0.09-0.64,0.26C3.19,13.23,3.1,13.44,3.1,13.69z`}}]})(s)}function pl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.75,15.36c0-0.25,0.1-0.48,0.3-0.69c0.22-0.19,0.46-0.29,0.7-0.29h2.33c0.27,0,0.49,0.1,0.67,0.29
	c0.18,0.19,0.27,0.43,0.27,0.69c0,0.29-0.09,0.53-0.27,0.72c-0.18,0.19-0.41,0.29-0.67,0.29H3.75c-0.27,0-0.5-0.1-0.7-0.3
	C2.85,15.86,2.75,15.62,2.75,15.36z M6.08,7.38c0-0.27,0.09-0.5,0.26-0.68C6.57,6.5,6.8,6.4,7.05,6.4c0.26,0,0.49,0.1,0.68,0.29
	l1.64,1.65c0.19,0.22,0.28,0.45,0.28,0.69c0,0.28-0.09,0.52-0.27,0.7s-0.4,0.28-0.66,0.28c-0.24,0-0.48-0.1-0.7-0.29L6.34,8.11
	C6.17,7.9,6.08,7.65,6.08,7.38z M8.08,20.88c0-0.28,0.1-0.51,0.29-0.68c0.18-0.17,0.4-0.26,0.68-0.26h2.63l3.11-2.92
	c0.1-0.08,0.21-0.08,0.34,0l3.16,2.92h2.77c0.27,0,0.5,0.09,0.69,0.28c0.19,0.18,0.29,0.41,0.29,0.67c0,0.27-0.1,0.5-0.29,0.69
	c-0.19,0.19-0.42,0.29-0.69,0.29h-3.38c-0.1,0-0.2-0.02-0.29-0.07l-2.41-2.27l-2.39,2.27c-0.08,0.05-0.17,0.07-0.28,0.07H9.05
	c-0.27,0-0.5-0.1-0.69-0.29C8.17,21.38,8.08,21.15,8.08,20.88z M9,15.36c0,0.97,0.21,1.85,0.62,2.64c0.02,0.12,0.11,0.18,0.25,0.18
	h1.88c0.07,0,0.12-0.03,0.15-0.08c0.03-0.06,0.02-0.12-0.02-0.19c-0.64-0.77-0.96-1.62-0.96-2.55c0-1.12,0.4-2.08,1.2-2.87
	c0.8-0.79,1.76-1.18,2.89-1.18c1.12,0,2.07,0.39,2.86,1.18c0.79,0.79,1.19,1.74,1.19,2.87c0,0.94-0.32,1.79-0.95,2.55
	c-0.04,0.07-0.05,0.13-0.03,0.19s0.07,0.08,0.15,0.08h1.9c0.13,0,0.21-0.06,0.23-0.18C20.8,17.23,21,16.35,21,15.36
	c0-0.81-0.16-1.59-0.48-2.32c-0.32-0.74-0.75-1.37-1.28-1.91c-0.53-0.53-1.17-0.96-1.91-1.28c-0.74-0.32-1.51-0.47-2.32-0.47
	c-0.81,0-1.59,0.16-2.33,0.47c-0.74,0.32-1.38,0.74-1.92,1.28c-0.54,0.53-0.97,1.17-1.29,1.91C9.16,13.77,9,14.54,9,15.36z
	 M14.03,6.4v-2.3c0-0.29,0.09-0.52,0.28-0.71s0.43-0.28,0.71-0.28c0.28,0,0.51,0.09,0.7,0.28S16,3.83,16,4.11v2.3
	c0,0.29-0.09,0.52-0.28,0.71c-0.18,0.18-0.42,0.28-0.7,0.28c-0.29,0-0.52-0.09-0.71-0.28C14.12,6.93,14.03,6.69,14.03,6.4z
	 M20.38,9.04c0-0.25,0.09-0.48,0.27-0.69l1.62-1.65c0.19-0.19,0.43-0.29,0.7-0.29c0.27,0,0.51,0.1,0.69,0.29
	c0.19,0.19,0.28,0.42,0.28,0.69c0,0.29-0.09,0.53-0.26,0.73L22,9.73c-0.21,0.19-0.45,0.29-0.7,0.29c-0.27,0-0.49-0.09-0.66-0.28
	S20.38,9.32,20.38,9.04z M22.99,15.36c0-0.27,0.09-0.5,0.27-0.69c0.18-0.19,0.4-0.29,0.66-0.29h2.35c0.27,0,0.5,0.1,0.69,0.29
	c0.19,0.19,0.29,0.43,0.29,0.69c0,0.28-0.1,0.51-0.29,0.71s-0.42,0.3-0.69,0.3h-2.35c-0.27,0-0.49-0.1-0.67-0.29
	C23.08,15.88,22.99,15.64,22.99,15.36z`}}]})(s)}function hl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M2.88,15.47c0-0.28,0.1-0.5,0.3-0.68c0.17-0.18,0.4-0.26,0.68-0.26h2.31c0.27,0,0.49,0.09,0.67,0.27
	c0.17,0.18,0.26,0.4,0.26,0.67c0,0.28-0.09,0.52-0.27,0.71c-0.18,0.19-0.4,0.29-0.66,0.29H3.87c-0.27,0-0.5-0.1-0.69-0.3
	C2.98,15.97,2.88,15.74,2.88,15.47z M6.17,7.61c0-0.28,0.08-0.51,0.25-0.68c0.2-0.2,0.43-0.3,0.7-0.3c0.29,0,0.51,0.1,0.68,0.3
	l1.62,1.63c0.46,0.44,0.46,0.89,0,1.35c-0.19,0.19-0.4,0.28-0.65,0.28c-0.22,0-0.44-0.09-0.68-0.28L6.43,8.29
	C6.26,8.11,6.17,7.88,6.17,7.61z M8.14,20.89c0-0.26,0.1-0.49,0.3-0.69c0.18-0.18,0.41-0.27,0.68-0.27h3.22
	c0.11,0,0.2,0.02,0.28,0.08l2.35,2.22L17.36,20c0.07-0.05,0.17-0.08,0.29-0.08h3.3c0.27,0,0.5,0.09,0.69,0.28
	c0.19,0.19,0.29,0.42,0.29,0.68c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.69,0.29h-2.68l-3.14,2.84
	c-0.12,0.09-0.23,0.09-0.33,0l-3.08-2.84h-2.6c-0.27,0-0.5-0.1-0.69-0.29C8.24,21.39,8.14,21.16,8.14,20.89z M9.08,15.47
	c0,0.99,0.19,1.87,0.58,2.62c0.06,0.11,0.15,0.16,0.27,0.16h1.87c0.08,0,0.13-0.02,0.15-0.07c0.02-0.05-0.01-0.11-0.07-0.18
	c-0.59-0.74-0.89-1.59-0.89-2.53c0-1.1,0.39-2.04,1.18-2.81c0.79-0.77,1.74-1.16,2.85-1.16c1.1,0,2.04,0.39,2.83,1.16
	c0.78,0.78,1.18,1.71,1.18,2.8c0,0.94-0.3,1.79-0.89,2.53c-0.07,0.07-0.09,0.13-0.07,0.18c0.02,0.05,0.07,0.07,0.15,0.07h1.88
	c0.13,0,0.21-0.05,0.24-0.16c0.41-0.78,0.62-1.66,0.62-2.62c0-0.79-0.16-1.56-0.47-2.29s-0.74-1.37-1.27-1.9s-1.16-0.95-1.89-1.27
	c-0.73-0.32-1.5-0.47-2.3-0.47c-0.8,0-1.57,0.16-2.3,0.47c-0.73,0.32-1.36,0.74-1.89,1.27s-0.95,1.16-1.27,1.9
	S9.08,14.68,9.08,15.47z M14.04,6.66V4.33c0-0.27,0.1-0.5,0.29-0.69s0.42-0.29,0.69-0.29c0.27,0,0.5,0.1,0.69,0.29
	s0.29,0.42,0.29,0.69v2.32c0,0.27-0.1,0.5-0.29,0.69c-0.19,0.19-0.42,0.29-0.69,0.29c-0.27,0-0.5-0.1-0.69-0.29
	C14.13,7.15,14.04,6.93,14.04,6.66z M20.31,9.24c0-0.28,0.09-0.51,0.26-0.67l1.63-1.63c0.16-0.2,0.39-0.3,0.68-0.3
	c0.27,0,0.5,0.1,0.68,0.29c0.18,0.19,0.27,0.42,0.27,0.69c0,0.28-0.08,0.51-0.25,0.68l-1.66,1.63c-0.23,0.19-0.46,0.28-0.69,0.28
	c-0.26,0-0.48-0.09-0.66-0.28C20.4,9.74,20.31,9.51,20.31,9.24z M22.9,15.47c0-0.27,0.09-0.49,0.26-0.67
	c0.17-0.18,0.4-0.27,0.67-0.27h2.32c0.27,0,0.5,0.09,0.69,0.27c0.19,0.18,0.29,0.4,0.29,0.67c0,0.27-0.1,0.5-0.29,0.7
	c-0.19,0.2-0.42,0.3-0.69,0.3h-2.32c-0.26,0-0.48-0.1-0.66-0.29C22.99,15.99,22.9,15.75,22.9,15.47z`}}]})(s)}function vl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.91,19.56c0-0.85,0.2-1.64,0.59-2.38s0.94-1.35,1.65-1.84V5.42c0-0.8,0.27-1.48,0.82-2.03S14.2,2.55,15,2.55
	c0.81,0,1.49,0.28,2.04,0.83c0.55,0.56,0.83,1.23,0.83,2.03v9.92c0.71,0.49,1.25,1.11,1.64,1.84s0.58,1.53,0.58,2.38
	c0,0.92-0.23,1.78-0.68,2.56s-1.07,1.4-1.85,1.85s-1.63,0.68-2.56,0.68c-0.92,0-1.77-0.23-2.55-0.68s-1.4-1.07-1.86-1.85
	S9.91,20.48,9.91,19.56z M11.67,19.56c0,0.93,0.33,1.73,0.98,2.39c0.65,0.66,1.44,0.99,2.36,0.99c0.93,0,1.73-0.33,2.4-1
	s1.01-1.46,1.01-2.37c0-0.62-0.16-1.2-0.48-1.73c-0.32-0.53-0.76-0.94-1.32-1.23l-0.28-0.14c-0.1-0.04-0.15-0.14-0.15-0.29V5.42
	c0-0.32-0.11-0.59-0.34-0.81C15.62,4.4,15.34,4.29,15,4.29c-0.32,0-0.6,0.11-0.83,0.32c-0.23,0.21-0.34,0.48-0.34,0.81v10.74
	c0,0.15-0.05,0.25-0.14,0.29l-0.27,0.14c-0.55,0.29-0.98,0.7-1.29,1.23C11.82,18.35,11.67,18.92,11.67,19.56z`}}]})(s)}function yl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M12.48,19.56c0,0.71,0.24,1.32,0.73,1.82c0.49,0.5,1.07,0.75,1.76,0.75s1.28-0.25,1.79-0.75c0.51-0.5,0.76-1.11,0.76-1.81
	c0-0.63-0.22-1.19-0.65-1.67c-0.43-0.48-0.96-0.77-1.57-0.85V9.69c0-0.06-0.03-0.13-0.1-0.19c-0.07-0.07-0.14-0.1-0.22-0.1
	c-0.09,0-0.16,0.03-0.21,0.08c-0.05,0.06-0.08,0.12-0.08,0.21v7.34c-0.61,0.09-1.13,0.37-1.56,0.85
	C12.69,18.37,12.48,18.92,12.48,19.56z`}}]})(s)}function gl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M9.91,19.56c0-0.85,0.2-1.64,0.59-2.38s0.94-1.35,1.65-1.84V5.42c0-0.8,0.27-1.48,0.82-2.03S14.2,2.55,15,2.55
	c0.81,0,1.49,0.28,2.04,0.83c0.55,0.56,0.83,1.23,0.83,2.03v9.92c0.71,0.49,1.25,1.11,1.64,1.84s0.58,1.53,0.58,2.38
	c0,0.92-0.23,1.78-0.68,2.56s-1.07,1.4-1.85,1.85s-1.63,0.68-2.56,0.68c-0.92,0-1.77-0.23-2.55-0.68s-1.4-1.07-1.86-1.85
	S9.91,20.48,9.91,19.56z M11.67,19.56c0,0.93,0.33,1.73,0.98,2.39c0.65,0.66,1.44,0.99,2.36,0.99c0.93,0,1.73-0.33,2.4-1
	s1.01-1.46,1.01-2.37c0-0.62-0.16-1.2-0.48-1.73c-0.32-0.53-0.76-0.94-1.32-1.23l-0.28-0.14c-0.1-0.04-0.15-0.14-0.15-0.29V5.42
	c0-0.32-0.11-0.59-0.34-0.81C15.62,4.4,15.34,4.29,15,4.29c-0.32,0-0.6,0.11-0.83,0.32c-0.23,0.21-0.34,0.48-0.34,0.81v10.74
	c0,0.15-0.05,0.25-0.14,0.29l-0.27,0.14c-0.55,0.29-0.98,0.7-1.29,1.23C11.82,18.35,11.67,18.92,11.67,19.56z M12.45,19.56
	c0,0.71,0.24,1.32,0.73,1.82s1.07,0.75,1.76,0.75s1.28-0.25,1.79-0.75c0.51-0.5,0.76-1.11,0.76-1.81c0-0.63-0.22-1.19-0.65-1.67
	c-0.43-0.48-0.96-0.77-1.58-0.85V9.69c0-0.06-0.03-0.13-0.1-0.19c-0.07-0.07-0.14-0.1-0.22-0.1c-0.09,0-0.16,0.03-0.21,0.08
	c-0.05,0.06-0.08,0.12-0.08,0.21v7.34c-0.61,0.09-1.13,0.37-1.56,0.85C12.66,18.37,12.45,18.92,12.45,19.56z`}}]})(s)}function ml(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.63,16.91c0,1.11,0.33,2.1,0.99,2.97s1.52,1.47,2.58,1.79l-0.66,1.68c-0.03,0.14,0.02,0.22,0.14,0.22h2.13l-0.98,4.3h0.28
	l3.92-5.75c0.04-0.04,0.04-0.09,0.01-0.14c-0.03-0.05-0.08-0.07-0.15-0.07h-2.18l2.48-4.64c0.07-0.14,0.02-0.22-0.14-0.22h-2.94
	c-0.09,0-0.17,0.05-0.23,0.15l-1.07,2.87c-0.71-0.18-1.3-0.57-1.77-1.16c-0.47-0.59-0.7-1.26-0.7-2.01c0-0.83,0.28-1.55,0.85-2.17
	c0.57-0.61,1.27-0.97,2.1-1.07l0.53-0.07c0.13,0,0.2-0.06,0.2-0.18l0.07-0.51c0.11-1.08,0.56-1.99,1.37-2.72
	c0.81-0.73,1.76-1.1,2.85-1.1c1.09,0,2.04,0.37,2.85,1.1c0.82,0.73,1.28,1.64,1.4,2.72l0.07,0.58c0,0.11,0.06,0.17,0.18,0.17h1.6
	c0.91,0,1.68,0.32,2.32,0.95c0.64,0.63,0.97,1.4,0.97,2.28c0,0.85-0.3,1.59-0.89,2.21c-0.59,0.62-1.33,0.97-2.2,1.04
	c-0.13,0-0.2,0.06-0.2,0.18v1.37c0,0.11,0.07,0.17,0.2,0.17c1.33-0.04,2.46-0.55,3.39-1.51s1.39-2.11,1.39-3.45
	c0-0.9-0.22-1.73-0.67-2.49c-0.44-0.76-1.05-1.36-1.81-1.8c-0.77-0.44-1.6-0.66-2.5-0.66H20.1c-0.33-1.33-1.04-2.42-2.11-3.26
	s-2.3-1.27-3.68-1.27c-1.41,0-2.67,0.44-3.76,1.31s-1.79,1.99-2.1,3.36c-1.11,0.26-2.02,0.83-2.74,1.73S4.63,15.76,4.63,16.91z
	 M12.77,26.62c0,0.39,0.19,0.65,0.58,0.77c0.01,0,0.05,0,0.11,0.01c0.06,0.01,0.11,0.01,0.14,0.01c0.17,0,0.33-0.05,0.49-0.15
	c0.16-0.1,0.27-0.26,0.32-0.48l2.25-8.69c0.06-0.24,0.04-0.45-0.07-0.65c-0.11-0.19-0.27-0.32-0.5-0.39
	c-0.17-0.02-0.26-0.03-0.26-0.03c-0.16,0-0.32,0.05-0.47,0.15c-0.15,0.1-0.26,0.25-0.31,0.45l-2.26,8.72
	C12.78,26.44,12.77,26.53,12.77,26.62z M16.93,23.56c0,0.13,0.03,0.26,0.1,0.38c0.14,0.22,0.31,0.37,0.51,0.44
	c0.11,0.03,0.21,0.05,0.3,0.05s0.2-0.02,0.32-0.08c0.21-0.09,0.35-0.28,0.42-0.57l1.44-5.67c0.03-0.14,0.05-0.23,0.05-0.27
	c0-0.15-0.05-0.3-0.16-0.45s-0.26-0.26-0.46-0.32c-0.17-0.02-0.26-0.03-0.26-0.03c-0.17,0-0.33,0.05-0.47,0.15
	c-0.14,0.1-0.24,0.25-0.3,0.45l-1.46,5.7c0,0.02,0,0.05-0.01,0.11C16.93,23.5,16.93,23.53,16.93,23.56z`}}]})(s)}function xl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,14.47V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24c0.22,0,0.42,0.08,0.59,0.24s0.25,0.36,0.25,0.59v3.53l0.75-1.3
	c0.12-0.2,0.29-0.32,0.52-0.38s0.44-0.03,0.64,0.09c0.2,0.11,0.32,0.27,0.39,0.5s0.04,0.43-0.08,0.63l-2.29,3.91
	c-0.13,0.35-0.38,0.53-0.76,0.53c-0.23,0-0.43-0.08-0.59-0.24S14.14,14.71,14.14,14.47z`}}]})(s)}function zl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M10.14,12.41c-0.07-0.22-0.04-0.43,0.07-0.63c0.11-0.2,0.28-0.33,0.51-0.4s0.44-0.04,0.64,0.07l2.78,1.57V7.81
	c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v6.67c0,0.23-0.08,0.43-0.24,0.59
	s-0.36,0.24-0.59,0.24c-0.21,0-0.39-0.07-0.56-0.22l-3.88-2.17C10.34,12.8,10.21,12.63,10.14,12.41z`}}]})(s)}function Ml(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21c-1.35-0.79-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18C9.27,7.65,8.2,8.72,7.4,10.07
	S6.22,12.89,6.22,14.47z M11.84,10.24c0.06-0.22,0.19-0.39,0.38-0.5c0.2-0.12,0.41-0.15,0.64-0.09s0.4,0.19,0.51,0.38l0.78,1.3V7.81
	c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v6.67c0,0.23-0.08,0.43-0.24,0.59
	s-0.36,0.24-0.59,0.24c-0.4,0-0.66-0.18-0.79-0.53l-2.26-3.91C11.81,10.67,11.78,10.46,11.84,10.24z`}}]})(s)}function Cl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,14.47c0,0.22,0.08,0.42,0.24,0.59c0.16,0.17,0.36,0.25,0.59,0.25c0.22,0,0.42-0.08,0.59-0.25c0.17-0.17,0.25-0.36,0.25-0.59
	V7.81c0-0.23-0.08-0.43-0.25-0.59s-0.36-0.24-0.59-0.24c-0.23,0-0.43,0.08-0.59,0.24s-0.24,0.36-0.24,0.59V14.47z`}}]})(s)}function wl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,14.47V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v5.21l2.78-1.57
	c0.2-0.12,0.41-0.15,0.63-0.09s0.39,0.2,0.5,0.41c0.12,0.2,0.14,0.41,0.08,0.63s-0.19,0.4-0.39,0.51l-3.88,2.17
	c-0.17,0.15-0.35,0.22-0.56,0.22c-0.23,0-0.43-0.08-0.59-0.24S14.14,14.71,14.14,14.47z`}}]})(s)}function Sl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,14.47V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v5.82h3.78
	c0.23,0,0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59c0,0.22-0.08,0.42-0.24,0.59c-0.16,0.17-0.36,0.25-0.59,0.25h-4.44
	c-0.03,0.01-0.09,0.01-0.18,0.01c-0.23,0-0.43-0.08-0.59-0.24S14.14,14.71,14.14,14.47z`}}]})(s)}function kl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,14.47V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v6.15l3.59,2.09
	c0.2,0.12,0.32,0.29,0.38,0.51s0.03,0.43-0.09,0.62c-0.16,0.28-0.4,0.42-0.72,0.42c-0.17,0-0.31-0.04-0.42-0.12l-3.82-2.23
	c-0.17-0.05-0.31-0.15-0.42-0.29S14.14,14.66,14.14,14.47z`}}]})(s)}function _l(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,14.47V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v6.42l2.15,3.84
	c0.12,0.21,0.14,0.43,0.08,0.65s-0.19,0.39-0.39,0.51c-0.11,0.06-0.24,0.09-0.41,0.09c-0.33,0-0.58-0.14-0.73-0.41l-2.2-3.9
	C14.2,14.85,14.14,14.68,14.14,14.47z`}}]})(s)}function Ll(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M14.14,19.07V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v11.26
	c0,0.23-0.08,0.43-0.24,0.6s-0.36,0.25-0.59,0.25s-0.43-0.08-0.59-0.25S14.14,19.31,14.14,19.07z`}}]})(s)}function Wl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M11.89,18.71c-0.06-0.22-0.04-0.44,0.08-0.65l2.17-3.84V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24
	s0.24,0.36,0.24,0.59v6.67c0,0.2-0.06,0.37-0.19,0.53l-2.18,3.9c-0.16,0.27-0.41,0.41-0.75,0.41c-0.16,0-0.29-0.03-0.4-0.09
	C12.09,19.1,11.96,18.93,11.89,18.71z`}}]})(s)}function El(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M10.17,16.56c0.06-0.22,0.19-0.39,0.38-0.51l3.59-2.09V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24s0.43,0.08,0.59,0.24
	s0.24,0.36,0.24,0.59v6.67c0,0.19-0.06,0.35-0.17,0.5s-0.25,0.24-0.42,0.29l-3.84,2.23c-0.12,0.08-0.25,0.12-0.41,0.12
	c-0.32,0-0.56-0.14-0.72-0.42C10.14,16.99,10.11,16.78,10.17,16.56z`}}]})(s)}function Nl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.47c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16,3.74,14.47z M6.22,14.47
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.72,7.4,10.07S6.22,12.89,6.22,14.47z
	 M9.51,14.46c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24h3.79V7.81c0-0.23,0.08-0.43,0.24-0.59s0.36-0.24,0.59-0.24
	s0.43,0.08,0.59,0.24s0.24,0.36,0.24,0.59v6.67c0,0.23-0.08,0.43-0.24,0.59s-0.36,0.24-0.59,0.24c-0.1,0-0.16,0-0.19-0.01h-4.44
	c-0.23,0-0.43-0.08-0.59-0.25C9.59,14.88,9.51,14.68,9.51,14.46z`}}]})(s)}function Bl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.13,15.19c0,0.69,0.36,1.28,1.08,1.77c1.32,0.93,3.31,1.39,5.98,1.39c1.2,0,2.31-0.1,3.34-0.31
	c1.08-0.23,1.97-0.6,2.65-1.1s1.03-1.08,1.03-1.76c0-0.21-0.04-0.41-0.12-0.62c1.39-0.34,2.48-0.8,3.27-1.38s1.19-1.25,1.19-2
	c0-0.19-0.03-0.39-0.09-0.6c2.29-0.81,3.43-1.9,3.43-3.28c0-0.88-0.5-1.66-1.49-2.34c-1.95-1.3-4.81-1.95-8.58-1.95
	c-1.78,0-3.39,0.16-4.83,0.47C9.42,3.8,8.16,4.3,7.2,4.98S5.76,6.44,5.76,7.31c0,0.52,0.16,0.99,0.48,1.42
	c-1.18,0.67-1.77,1.49-1.77,2.46c0,0.75,0.37,1.41,1.1,1.98C4.61,13.73,4.13,14.4,4.13,15.19z M4.73,19.69
	c0,0.73,0.45,1.31,1.35,1.72s2.04,0.62,3.41,0.62c1.39,0,2.53-0.21,3.44-0.62s1.36-0.99,1.36-1.72c0-0.27-0.09-0.5-0.26-0.69
	s-0.4-0.28-0.67-0.28c-0.22,0-0.42,0.08-0.6,0.23s-0.29,0.35-0.34,0.57c-0.2,0.16-0.56,0.3-1.1,0.43s-1.15,0.2-1.83,0.2
	c-1.1,0-2-0.16-2.68-0.47c0.16-0.16,0.24-0.36,0.26-0.6s-0.04-0.45-0.15-0.62c-0.16-0.21-0.36-0.35-0.61-0.4s-0.48,0-0.7,0.13
	C5.02,18.6,4.73,19.09,4.73,19.69z M6.01,15.19c0-0.01,0.06-0.07,0.19-0.18c0.09-0.09,0.28-0.2,0.56-0.34s0.61-0.25,0.96-0.35
	l0.12-0.06c1.62,0.54,3.51,0.81,5.67,0.81c0.95,0,1.81-0.05,2.58-0.16l0.26,0.23c-0.09,0.16-0.3,0.32-0.63,0.5
	c-0.4,0.21-1.02,0.41-1.86,0.57s-1.73,0.25-2.67,0.25s-1.83-0.08-2.67-0.25s-1.47-0.36-1.88-0.57C6.3,15.5,6.09,15.35,6.01,15.19z
	 M6.12,23.61c0,0.63,0.36,1.12,1.08,1.46s1.61,0.51,2.67,0.51c1.08,0,1.99-0.17,2.72-0.51s1.1-0.83,1.1-1.46
	c0-0.25-0.09-0.48-0.28-0.67s-0.41-0.29-0.66-0.29c-0.47,0-0.78,0.24-0.92,0.72c-0.39,0.24-1.04,0.37-1.96,0.37
	c-0.8,0-1.44-0.12-1.92-0.37c-0.15-0.48-0.45-0.72-0.92-0.72c-0.25,0-0.47,0.09-0.64,0.28S6.12,23.34,6.12,23.61z M6.33,11.19
	c0-0.08,0.05-0.17,0.15-0.28c0.24-0.3,0.72-0.6,1.42-0.88c1.92,1.03,4.56,1.54,7.91,1.54c1.71,0,3.32-0.16,4.82-0.47v0.09
	c0,0.15-0.09,0.3-0.28,0.45c-0.41,0.36-1.17,0.7-2.29,1.03c-1.21,0.36-2.73,0.54-4.56,0.54c-1.84,0-3.36-0.18-4.57-0.54
	C7.77,12.35,7,12.01,6.61,11.65C6.42,11.5,6.33,11.35,6.33,11.19z M7.63,7.31c0-0.18,0.12-0.37,0.35-0.59
	C8.43,6.3,9.33,5.9,10.66,5.51c1.43-0.42,3.14-0.63,5.14-0.63c2.01,0,3.74,0.21,5.19,0.63c1.35,0.39,2.24,0.8,2.68,1.22
	c0.22,0.22,0.34,0.42,0.34,0.59s-0.11,0.35-0.34,0.56c-0.44,0.42-1.33,0.83-2.68,1.23c-1.45,0.42-3.17,0.63-5.19,0.63
	c-2,0-3.72-0.21-5.14-0.63C9.32,8.71,8.42,8.3,7.98,7.87C7.75,7.66,7.63,7.48,7.63,7.31z`}}]})(s)}function Pl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.25,12.68v-0.32c0-0.1,0.03-0.18,0.1-0.25c0.07-0.07,0.15-0.1,0.25-0.1h7.58c0.1,0,0.18,0.03,0.25,0.1
	c0.07,0.07,0.1,0.15,0.1,0.25v0.32c0,0.1-0.03,0.18-0.1,0.25c-0.07,0.07-0.15,0.1-0.25,0.1h-0.44v1.65h2.12
	c0.02-0.28,0.14-0.52,0.35-0.71c0.21-0.19,0.46-0.29,0.75-0.29c0.29,0,0.53,0.1,0.74,0.29c0.21,0.19,0.32,0.43,0.35,0.71h1.32v-3.39
	c-0.14-0.01-0.25-0.06-0.35-0.16c-0.1-0.1-0.15-0.23-0.15-0.37v-0.31c0-0.14,0.05-0.27,0.16-0.38s0.24-0.16,0.39-0.16h1.99
	c0.15,0,0.28,0.05,0.38,0.16s0.15,0.23,0.15,0.38v0.31c0,0.14-0.05,0.27-0.14,0.37c-0.09,0.1-0.2,0.16-0.34,0.16v3.39h1.56
	c0.27,0,0.51,0.1,0.71,0.3s0.3,0.44,0.3,0.71v2.93l3.73,4.87h-4.74v-3.04h-0.71c0.11,0.26,0.16,0.54,0.16,0.83
	c0,0.61-0.21,1.12-0.64,1.56c-0.43,0.43-0.95,0.65-1.55,0.65c-0.61,0-1.12-0.22-1.56-0.65c-0.43-0.43-0.65-0.95-0.65-1.56
	c0-0.29,0.05-0.57,0.16-0.83h-1c0.11,0.27,0.17,0.55,0.17,0.83c0,0.61-0.22,1.12-0.65,1.56s-0.95,0.65-1.56,0.65
	c-0.61,0-1.12-0.22-1.55-0.65s-0.64-0.95-0.64-1.56c0-0.29,0.05-0.57,0.16-0.83H9.97c0.12,0.29,0.18,0.57,0.18,0.83
	c0,0.61-0.22,1.12-0.65,1.56s-0.95,0.65-1.56,0.65s-1.12-0.22-1.56-0.65s-0.65-0.95-0.65-1.56c0-0.29,0.06-0.57,0.17-0.84
	c-0.24-0.04-0.45-0.15-0.61-0.34s-0.24-0.41-0.24-0.66v-0.86H5.03v-5.55H4.6c-0.1,0-0.18-0.03-0.25-0.1
	C4.28,12.86,4.25,12.78,4.25,12.68z M6.3,16.62c0,0.21,0.07,0.39,0.22,0.54c0.15,0.15,0.33,0.22,0.54,0.22h1.44
	c0.21,0,0.39-0.07,0.53-0.22c0.14-0.15,0.22-0.33,0.22-0.54v-2.3c0-0.21-0.07-0.38-0.22-0.53c-0.15-0.15-0.32-0.22-0.53-0.22H7.07
	c-0.21,0-0.39,0.07-0.54,0.23c-0.15,0.15-0.22,0.32-0.22,0.52V16.62z M15.78,5.43c0,0.41,0.16,0.76,0.47,1.04
	c0,0.2,0.09,0.43,0.26,0.68s0.36,0.4,0.56,0.44c0.04,0.22,0.15,0.41,0.31,0.57c0.16,0.15,0.36,0.25,0.59,0.3
	c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.18,0.06,0.33,0.18,0.45c0.12,0.12,0.27,0.18,0.45,0.18c0.18,0,0.33-0.06,0.46-0.19
	c0.13-0.12,0.19-0.28,0.19-0.45c0-0.02,0-0.05-0.01-0.09c-0.01-0.04-0.01-0.08-0.01-0.1h0.03c0.21,0,0.39-0.08,0.54-0.23
	c0.15-0.15,0.23-0.34,0.23-0.55c0-0.1-0.04-0.22-0.12-0.38c0.17-0.09,0.31-0.25,0.41-0.47h0.45C21,7,21.34,6.85,21.61,6.57
	c0.28-0.28,0.42-0.61,0.42-1.01c0-0.34-0.11-0.64-0.33-0.9c-0.22-0.26-0.5-0.43-0.83-0.52c-0.08-0.4-0.29-0.73-0.62-0.99
	s-0.71-0.39-1.12-0.39c-0.41,0-0.77,0.13-1.08,0.38c-0.31,0.25-0.52,0.58-0.62,0.97h-0.11c-0.41,0-0.77,0.13-1.08,0.39
	C15.93,4.75,15.78,5.07,15.78,5.43z`}}]})(s)}function Hl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.07,21.24c0-0.16,0.06-0.3,0.17-0.42c0.12-0.12,0.25-0.18,0.41-0.18h0.4c-0.21-0.66-0.39-1.35-0.53-2.07
	c-0.21-1.1-0.32-2.1-0.32-2.99c0-1.71,0.3-3.32,0.91-4.81C6.73,9.31,7.59,8.06,8.7,7.01c1.12-1.06,2.42-1.87,3.9-2.42
	c1.51-0.57,3.14-0.86,4.91-0.86c1.06,0,2.06,0.09,3,0.28c0.94,0.22,1.85,0.56,2.73,1.03l1.7,0.91l-1.88,0.39
	c-0.58,0.13-0.98,0.39-1.2,0.78c-0.16,0.32-0.15,0.69,0.03,1.11l0.41,0.95l-1.02,0.05c-0.43,0.03-0.83,0.12-1.18,0.27
	c-0.33,0.16-0.52,0.32-0.58,0.5c-0.11,0.23,0.01,0.56,0.36,1l0.81,0.96l-1.26,0.18c-1.55,0.23-2.82,0.55-3.81,0.96
	s-1.77,0.94-2.35,1.59c-0.56,0.62-0.98,1.42-1.25,2.37c-0.27,0.96-0.42,2.15-0.45,3.59h5.26v-2.78l-0.38,0.23
	c-0.14,0.09-0.29,0.11-0.45,0.07c-0.17-0.04-0.29-0.13-0.37-0.28c-0.09-0.14-0.11-0.29-0.08-0.45s0.12-0.29,0.27-0.38l3.82-2.38
	l0.02-0.02c0.01,0,0.01,0,0.01-0.01h0.02c0.01,0,0.02,0,0.03-0.01c0.07-0.02,0.14-0.05,0.23-0.07h0.06
	c0.01,0.01,0.02,0.02,0.03,0.02h0.07c0,0.01,0.01,0.01,0.02,0.01h0.03l0.02,0.01h0.02c0.01,0.01,0.02,0.02,0.02,0.03h0.02
	c0.01,0,0.01,0,0.01,0.01c0.02,0,0.03,0,0.03,0.01c0.01,0,0.02,0,0.03,0.01l0.02,0.01l3.82,2.35c0.14,0.09,0.23,0.22,0.27,0.38
	c0.03,0.17,0.01,0.32-0.08,0.46c-0.08,0.14-0.2,0.23-0.37,0.26s-0.32,0.01-0.45-0.08l-0.31-0.19v2.77h0.96
	c0.16,0,0.29,0.06,0.4,0.18c0.11,0.12,0.16,0.26,0.16,0.42c0.01,0.17-0.05,0.31-0.16,0.43c-0.11,0.12-0.25,0.18-0.4,0.18H5.65
	c-0.16,0-0.3-0.06-0.41-0.17C5.13,21.56,5.07,21.42,5.07,21.24z M6.62,15.58c0,0.71,0.1,1.62,0.3,2.73
	c0.15,0.81,0.33,1.52,0.54,2.12h2.69c0.05-1.45,0.2-2.65,0.45-3.59c0.35-1.27,0.88-2.31,1.6-3.09c0.73-0.82,1.69-1.47,2.89-1.96
	c0.82-0.34,1.86-0.63,3.11-0.87l-0.08-0.25c-0.1-0.46-0.07-0.87,0.09-1.23c0.22-0.51,0.65-0.92,1.28-1.21
	c0.07-0.03,0.13-0.06,0.19-0.07c-0.86-0.2-1.73-0.25-2.6-0.14c-0.99,0.12-1.92,0.41-2.78,0.85c-1.11,0.58-2.11,1.41-3.01,2.48
	c-0.1,0.12-0.23,0.18-0.38,0.18c-0.12,0-0.22-0.03-0.31-0.1c-0.1-0.09-0.16-0.2-0.17-0.34s0.02-0.26,0.11-0.37
	c1-1.19,2.11-2.1,3.34-2.73c0.98-0.49,2.03-0.81,3.14-0.95c0.57-0.07,1.12-0.08,1.67-0.02c0.54,0.06,0.92,0.12,1.14,0.17
	s0.37,0.09,0.45,0.12l0.08,0.03c0.05-0.31,0.13-0.59,0.24-0.84c0.16-0.29,0.37-0.56,0.64-0.8c-0.3-0.09-0.65-0.19-1.04-0.28
	c-0.8-0.18-1.7-0.26-2.69-0.26c-1.58,0-3.05,0.26-4.42,0.77c-1.34,0.51-2.48,1.22-3.42,2.14c-0.98,0.91-1.73,2-2.23,3.26
	C6.89,12.65,6.62,14.07,6.62,15.58z M18.05,20.64h3.88v-3.52l-1.98-1.21l-1.9,1.19V20.64z`}}]})(s)}function Tl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.64,14.65c0.01-0.34,0.18-0.86,0.5-1.58c0.32-0.72,0.76-1.48,1.33-2.3c1.86-2.61,4.49-3.98,7.88-4.13V6.21
	c0-0.21,0.07-0.37,0.21-0.5c0.14-0.13,0.3-0.19,0.48-0.19c0.19,0,0.35,0.06,0.5,0.19c0.14,0.13,0.22,0.3,0.22,0.5v0.44
	c0.98,0.04,1.9,0.19,2.75,0.45c0.85,0.26,1.59,0.59,2.22,1c0.63,0.41,1.17,0.83,1.61,1.27c0.45,0.43,0.85,0.9,1.2,1.41
	c0.41,0.59,0.77,1.23,1.06,1.9c0.29,0.67,0.5,1.21,0.61,1.61c0.11,0.4,0.17,0.6,0.18,0.61v0.19c0,0.18-0.07,0.32-0.21,0.44
	s-0.3,0.17-0.49,0.17c-0.31,0-0.51-0.09-0.6-0.26c-0.78-0.88-1.63-1.31-2.55-1.31c-0.34,0.02-0.69,0.1-1.03,0.23
	c-0.34,0.13-0.62,0.27-0.82,0.42c-0.21,0.14-0.4,0.29-0.58,0.44c-0.18,0.15-0.27,0.22-0.28,0.23c-0.19,0.17-0.37,0.26-0.53,0.26
	c-0.23,0-0.4-0.06-0.52-0.18c-0.73-0.73-1.39-1.17-2.01-1.32v7.57l0,0.17l-0.01,0.21l-0.04,0.23l-0.06,0.25l-0.09,0.26l-0.13,0.27
	l-0.17,0.26l-0.21,0.25c-0.51,0.59-1.23,0.88-2.18,0.88c-1.01,0-1.77-0.29-2.28-0.88c-0.12-0.12-0.22-0.25-0.31-0.38
	c-0.09-0.14-0.16-0.27-0.21-0.41c-0.05-0.13-0.09-0.26-0.12-0.38s-0.05-0.24-0.06-0.36C9.88,22,9.87,21.9,9.87,21.82s0-0.16,0-0.23
	s0.01-0.12,0.01-0.13c0-0.18,0.08-0.34,0.23-0.47c0.16-0.13,0.34-0.18,0.55-0.14c0.18,0,0.32,0.08,0.44,0.23s0.18,0.34,0.18,0.56
	c-0.06,0.41,0.02,0.76,0.25,1.05c0.21,0.29,0.65,0.44,1.32,0.44c0.52,0,0.9-0.12,1.13-0.36c0.13-0.13,0.23-0.29,0.29-0.48
	c0.06-0.19,0.09-0.34,0.08-0.47l-0.01-0.19v-7.36c-0.73,0.18-1.38,0.56-1.93,1.14c-0.04,0.08-0.12,0.16-0.23,0.23
	s-0.21,0.11-0.3,0.11c-0.18,0-0.38-0.11-0.6-0.34c-0.8-0.89-1.65-1.33-2.55-1.31c-0.4,0.01-0.78,0.07-1.12,0.2
	C7.26,14.43,7,14.56,6.82,14.69c-0.17,0.13-0.36,0.28-0.54,0.45s-0.29,0.27-0.32,0.29c-0.21,0.14-0.38,0.22-0.51,0.22
	s-0.3-0.06-0.48-0.17c-0.16-0.1-0.26-0.21-0.3-0.32C4.64,15.04,4.63,14.87,4.64,14.65z M6.73,13.23c0.68-0.36,1.32-0.53,1.92-0.53
	h0.08c1.15,0,2.2,0.44,3.15,1.33c0.38-0.33,0.84-0.62,1.39-0.88c0.54-0.26,1.13-0.41,1.77-0.45h0.08c1.15,0,2.2,0.44,3.15,1.33
	c0.38-0.33,0.84-0.62,1.39-0.88c0.54-0.26,1.13-0.41,1.77-0.45h0.09c0.56,0,1.15,0.15,1.75,0.44c-0.44-0.86-0.74-1.41-0.88-1.66
	c-1.79-2.34-4.27-3.51-7.43-3.51c-1.58,0-2.99,0.3-4.24,0.9c-1.24,0.6-2.26,1.47-3.05,2.61C7.44,11.82,7.12,12.41,6.73,13.23z`}}]})(s)}function Rl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M7.39,22.61c-0.12-0.27-0.09-0.54,0.09-0.81l1.4-2.67c0.01-0.04,0.05-0.09,0.11-0.15c0.04-0.04,0.17-0.14,0.38-0.29
	c0.02-0.01,0.25-0.18,0.68-0.5c0.48-0.32,1.03-0.72,1.68-1.19l1.8-2.98c0.17-0.27,0.41-0.41,0.72-0.41h0.7
	c-0.16,0.19-0.31,0.39-0.45,0.6c-0.14,0.21-0.27,0.5-0.38,0.85c-0.12,0.36-0.18,0.71-0.18,1.07c0,0.36,0.09,0.77,0.28,1.25
	c0.19,0.47,0.48,0.94,0.88,1.39c0.27,0.31,0.44,0.62,0.5,0.93s0.02,0.58-0.1,0.83c-0.12,0.25-0.32,0.5-0.59,0.74
	c-0.27,0.24-0.56,0.45-0.88,0.63c-0.32,0.18-0.68,0.35-1.07,0.52c-0.39,0.17-0.75,0.3-1.05,0.41c-0.31,0.1-0.62,0.2-0.93,0.29H8.16
	c-0.16,0-0.32-0.05-0.46-0.14C7.55,22.89,7.45,22.77,7.39,22.61z M10.14,7.74c0-0.46,0.15-0.88,0.45-1.24
	c0.3-0.37,0.69-0.6,1.16-0.72c0.11-0.56,0.4-1.02,0.85-1.38s0.98-0.54,1.56-0.54c0.56,0,1.06,0.17,1.5,0.52s0.73,0.8,0.86,1.35h0.14
	c0.57,0,1.07,0.18,1.5,0.54c0.42,0.36,0.64,0.79,0.64,1.3c0,0.56-0.22,1.03-0.65,1.43c0,0.27-0.12,0.59-0.36,0.93
	c-0.24,0.35-0.5,0.55-0.78,0.61c-0.06,0.31-0.21,0.57-0.43,0.78c-0.23,0.22-0.5,0.36-0.82,0.43c0.15,0.16,0.22,0.34,0.22,0.54
	c0,0.25-0.09,0.46-0.26,0.63c-0.18,0.17-0.39,0.25-0.64,0.25c-0.24,0-0.45-0.09-0.63-0.26c-0.18-0.17-0.26-0.38-0.26-0.62
	c0-0.03,0.01-0.08,0.02-0.14s0.02-0.11,0.02-0.13H14.2c-0.29,0-0.54-0.11-0.75-0.32c-0.21-0.21-0.32-0.46-0.32-0.75
	c0-0.12,0.06-0.3,0.18-0.53c-0.24-0.12-0.43-0.33-0.57-0.63h-0.63c-0.54-0.05-1.01-0.27-1.39-0.65C10.34,8.76,10.14,8.29,10.14,7.74
	z M14.76,15.48c0-0.16,0.02-0.34,0.07-0.54c0.05-0.2,0.11-0.35,0.16-0.47c0.05-0.12,0.12-0.27,0.21-0.45
	c0.09-0.18,0.15-0.31,0.19-0.41h0.38c0.28,0,0.49,0.11,0.66,0.32l0.07,0.1l1.31,2.48l4.65,5.23l0.04,0.03
	c0.21,0.27,0.24,0.56,0.08,0.88c-0.15,0.31-0.4,0.46-0.75,0.46H16.2c0.17-0.16,0.32-0.29,0.44-0.39c0.12-0.11,0.27-0.27,0.45-0.49
	s0.33-0.43,0.42-0.61s0.17-0.42,0.23-0.69c0.06-0.27,0.07-0.53,0.01-0.79c-0.06-0.25-0.18-0.53-0.38-0.84
	c-0.19-0.31-0.46-0.61-0.81-0.91c-0.34-0.3-0.64-0.59-0.88-0.88c-0.24-0.28-0.43-0.54-0.56-0.76c-0.13-0.22-0.23-0.45-0.29-0.68
	C14.79,15.84,14.76,15.64,14.76,15.48z`}}]})(s)}function Dl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.01,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17H16c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21
	c-0.13-0.11-0.26-0.16-0.4-0.16c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41
	c0.36,0.36,0.78,0.53,1.28,0.53s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27
	c-0.35-0.35-0.77-0.53-1.26-0.53H5.6c-0.16,0-0.3,0.06-0.42,0.17C5.07,13.21,5.01,13.34,5.01,13.5z M5.01,11.48
	c0,0.17,0.06,0.3,0.17,0.39c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27
	c0-0.49-0.17-0.91-0.52-1.26s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42
	c0,0.16,0.05,0.3,0.16,0.4c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18
	c0.17,0,0.33,0.06,0.46,0.18c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.6
	c-0.16,0-0.3,0.06-0.42,0.17C5.07,11.18,5.01,11.32,5.01,11.48z M18.27,18.9c0,0.52,0.08,0.98,0.24,1.37s0.38,0.71,0.66,0.94
	c0.28,0.23,0.58,0.4,0.91,0.52c0.33,0.11,0.68,0.17,1.05,0.17c0.51,0,0.98-0.09,1.41-0.26c0.43-0.17,0.77-0.4,1.05-0.69
	c0.27-0.29,0.51-0.61,0.71-0.95c0.2-0.34,0.35-0.7,0.45-1.08s0.18-0.72,0.23-1.03s0.07-0.6,0.07-0.86c0-0.97-0.27-1.72-0.8-2.25
	s-1.24-0.8-2.12-0.8c-0.49,0-0.97,0.12-1.43,0.35s-0.87,0.56-1.23,0.98c-0.36,0.42-0.65,0.94-0.86,1.56
	C18.38,17.49,18.27,18.17,18.27,18.9z M20.32,18.96c0-0.15,0.01-0.34,0.04-0.58c0.03-0.23,0.08-0.51,0.16-0.83
	c0.08-0.32,0.18-0.62,0.3-0.89c0.12-0.27,0.29-0.5,0.52-0.69c0.22-0.19,0.47-0.29,0.75-0.29c0.27,0,0.49,0.09,0.65,0.26
	c0.16,0.17,0.23,0.44,0.23,0.79c0,0.96-0.17,1.78-0.5,2.45s-0.74,1.01-1.23,1.01C20.63,20.19,20.32,19.78,20.32,18.96z`}}]})(s)}function jl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.76,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H6.35
	c-0.16,0-0.3,0.06-0.42,0.17C5.81,13.21,5.76,13.34,5.76,13.5z M5.76,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H6.35c-0.16,0-0.3,0.06-0.42,0.17
	C5.81,11.18,5.76,11.32,5.76,11.48z M18.65,21.85h2.47l1.65-7.98H20.3L18.65,21.85z`}}]})(s)}function Fl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.15,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.18,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52s0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H3.75
	c-0.16,0-0.3,0.06-0.42,0.17C3.21,13.21,3.15,13.34,3.15,13.5z M3.15,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H3.75c-0.16,0-0.3,0.06-0.42,0.17
	C3.21,11.18,3.15,11.32,3.15,11.48z M15.97,21.8h2.46l1.64-7.94h-2.45L15.97,21.8z M20.16,18.88c0,0.52,0.08,0.98,0.24,1.38
	s0.38,0.72,0.66,0.95c0.27,0.23,0.58,0.4,0.9,0.52s0.68,0.17,1.05,0.17c0.61,0,1.16-0.12,1.64-0.38c0.48-0.25,0.86-0.56,1.13-0.93
	c0.27-0.37,0.5-0.79,0.68-1.25c0.18-0.47,0.3-0.89,0.37-1.27c0.06-0.38,0.09-0.73,0.09-1.05c0-0.97-0.27-1.72-0.8-2.25
	s-1.24-0.8-2.13-0.8c-1.03,0-1.93,0.46-2.7,1.37C20.54,16.26,20.16,17.44,20.16,18.88z M22.21,18.98c0-0.16,0.01-0.35,0.04-0.59
	c0.03-0.23,0.08-0.51,0.16-0.84c0.08-0.32,0.18-0.62,0.3-0.9c0.12-0.27,0.29-0.5,0.52-0.69c0.22-0.19,0.47-0.29,0.75-0.29
	c0.27,0,0.48,0.09,0.65,0.27c0.16,0.18,0.24,0.44,0.24,0.79c0,0.96-0.17,1.78-0.5,2.45s-0.75,1.01-1.23,1.01
	C22.52,20.19,22.21,19.79,22.21,18.98z`}}]})(s)}function Vl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.68,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21
	c-0.13-0.11-0.26-0.16-0.4-0.16c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41
	c0.36,0.36,0.78,0.53,1.28,0.53s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27
	c-0.35-0.35-0.77-0.53-1.26-0.53H5.27c-0.16,0-0.3,0.06-0.42,0.17C4.74,13.21,4.68,13.34,4.68,13.5z M4.68,11.48
	c0,0.17,0.06,0.3,0.17,0.39c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27
	c0-0.49-0.17-0.91-0.52-1.26s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42
	c0,0.16,0.05,0.3,0.16,0.4c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18
	c0.17,0,0.33,0.06,0.46,0.18c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.27
	c-0.16,0-0.3,0.06-0.42,0.17C4.74,11.18,4.68,11.32,4.68,11.48z M17.57,21.9h2.47l1.65-7.99h-2.47L17.57,21.9z M21.3,21.9h2.46
	l1.65-7.99h-2.45L21.3,21.9z`}}]})(s)}function Ol(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.07,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21
	c-0.13-0.11-0.26-0.16-0.4-0.16c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41
	c0.36,0.36,0.78,0.53,1.28,0.53s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27
	c-0.35-0.35-0.77-0.53-1.26-0.53H3.66c-0.16,0-0.3,0.06-0.42,0.17C3.13,13.21,3.07,13.34,3.07,13.5z M3.07,11.48
	c0,0.17,0.06,0.3,0.17,0.39c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27
	c0-0.49-0.17-0.91-0.52-1.26s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42
	c0,0.16,0.05,0.3,0.16,0.4c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18
	c0.17,0,0.33,0.06,0.46,0.18c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H3.66
	c-0.16,0-0.3,0.06-0.42,0.17C3.13,11.18,3.07,11.32,3.07,11.48z M15.96,21.9h2.47l1.65-7.99h-2.47L15.96,21.9z M19.51,21.9h6.62
	l0.4-1.9h-3.67v-0.02c0.2-0.09,0.49-0.22,0.86-0.37c0.38-0.15,0.69-0.28,0.95-0.38s0.54-0.25,0.86-0.44
	c0.32-0.19,0.58-0.38,0.77-0.58s0.36-0.45,0.5-0.75s0.21-0.64,0.21-1c0-0.56-0.14-1.02-0.43-1.4c-0.29-0.38-0.65-0.64-1.08-0.8
	c-0.43-0.16-0.92-0.23-1.45-0.23c-0.97,0-1.76,0.26-2.37,0.78c-0.61,0.52-0.98,1.29-1.1,2.31h2.07c0-0.38,0.11-0.69,0.33-0.95
	c0.22-0.26,0.53-0.38,0.93-0.38c0.3,0,0.52,0.08,0.67,0.24c0.15,0.16,0.22,0.34,0.22,0.55c0,0.32-0.11,0.58-0.33,0.76
	c-0.22,0.18-0.63,0.42-1.25,0.72c-0.04,0.01-0.07,0.02-0.08,0.04c-0.89,0.43-1.44,0.7-1.65,0.83c-0.79,0.47-1.34,1.06-1.65,1.74
	C19.68,21.03,19.57,21.44,19.51,21.9z`}}]})(s)}function Il(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.94,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.53
	c-0.16,0-0.3,0.06-0.42,0.17C4.99,13.21,4.94,13.34,4.94,13.5z M4.94,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16C19,9.66,19.15,9.6,19.34,9.6c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.53c-0.16,0-0.3,0.06-0.42,0.17
	C4.99,11.18,4.94,11.32,4.94,11.48z M17.66,21.85h6.62l0.4-1.89H21v-0.03c0.2-0.09,0.49-0.22,0.86-0.37
	c0.38-0.15,0.69-0.28,0.95-0.38s0.55-0.25,0.87-0.44s0.57-0.38,0.77-0.57c0.19-0.19,0.36-0.44,0.5-0.75s0.21-0.64,0.21-1
	c0-0.56-0.14-1.02-0.43-1.4s-0.65-0.65-1.08-0.81c-0.43-0.16-0.92-0.24-1.45-0.24c-0.97,0-1.76,0.26-2.38,0.78
	c-0.62,0.52-0.98,1.29-1.1,2.31h2.09c0-0.37,0.11-0.68,0.32-0.94c0.22-0.26,0.52-0.38,0.91-0.38c0.3,0,0.52,0.08,0.67,0.24
	s0.23,0.34,0.23,0.54c0,0.12-0.01,0.23-0.03,0.32s-0.07,0.19-0.15,0.28s-0.15,0.16-0.21,0.22s-0.17,0.13-0.34,0.23
	c-0.17,0.09-0.3,0.17-0.4,0.22c-0.1,0.05-0.27,0.13-0.53,0.25c-0.88,0.43-1.43,0.71-1.64,0.83c-0.8,0.48-1.35,1.07-1.66,1.78
	C17.82,21.01,17.71,21.41,17.66,21.85z`}}]})(s)}function Al(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.03,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.62
	c-0.16,0-0.3,0.06-0.42,0.17C5.09,13.21,5.03,13.34,5.03,13.5z M5.03,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51C18.06,9.09,18,9.23,18,9.38c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.62c-0.16,0-0.3,0.06-0.42,0.17
	C5.09,11.18,5.03,11.32,5.03,11.48z M18.12,19.52c0,0.27,0.05,0.53,0.16,0.79c0.11,0.26,0.27,0.5,0.5,0.75
	c0.23,0.24,0.55,0.43,0.96,0.58s0.9,0.22,1.46,0.22c1.21,0,2.08-0.24,2.63-0.72c0.55-0.48,0.82-1.13,0.82-1.95
	c0-0.36-0.1-0.69-0.3-0.99c-0.2-0.3-0.47-0.47-0.79-0.51v-0.02c0.43-0.08,0.79-0.27,1.07-0.58c0.28-0.31,0.43-0.69,0.43-1.12
	c0-0.31-0.06-0.58-0.17-0.82c-0.11-0.24-0.26-0.43-0.44-0.58c-0.18-0.15-0.39-0.27-0.64-0.37c-0.25-0.1-0.5-0.16-0.75-0.2
	c-0.25-0.04-0.52-0.06-0.8-0.06c-0.92,0-1.68,0.22-2.28,0.67c-0.59,0.45-0.96,1.12-1.1,2.01h2.03c0.04-0.31,0.17-0.55,0.38-0.72
	c0.21-0.17,0.47-0.26,0.78-0.26c0.29,0,0.51,0.06,0.68,0.18S23,16.11,23,16.32c0,0.47-0.42,0.7-1.27,0.7h-0.47l-0.29,1.4h0.44
	c0.68,0,1.02,0.23,1.02,0.7c0,0.31-0.11,0.55-0.34,0.72c-0.23,0.17-0.5,0.25-0.83,0.25c-0.38,0-0.66-0.11-0.83-0.34
	c-0.17-0.21-0.24-0.51-0.21-0.89h-2.07C18.13,19.06,18.12,19.27,18.12,19.52z`}}]})(s)}function Ul(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.98,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.57
	c-0.16,0-0.3,0.06-0.42,0.17C5.04,13.21,4.98,13.34,4.98,13.5z M4.98,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.57c-0.16,0-0.3,0.06-0.42,0.17
	C5.04,11.18,4.98,11.32,4.98,11.48z M17.98,20.35h3.57l-0.32,1.55h2.2l0.36-1.55h1.01l0.36-1.9h-1l0.9-4.34h-2.22l-4.43,4.16
	L17.98,20.35z M20.23,18.45l2.24-2.21h0.03l-0.49,2.21H20.23z`}}]})(s)}function $l(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.97,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.18,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.13-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.28,0.53
	c0.49,0,0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.56
	c-0.16,0-0.3,0.06-0.42,0.17C5.03,13.21,4.97,13.34,4.97,13.5z M4.97,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51C18,9.09,17.94,9.23,17.94,9.38c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.56c-0.16,0-0.3,0.06-0.42,0.17
	C5.03,11.18,4.97,11.32,4.97,11.48z M18.04,19.38c-0.02,0.32,0.01,0.62,0.12,0.91c0.1,0.29,0.27,0.56,0.5,0.81
	c0.23,0.25,0.55,0.44,0.98,0.59c0.42,0.15,0.92,0.22,1.49,0.22c0.58,0,1.09-0.08,1.53-0.23s0.8-0.34,1.05-0.57
	c0.25-0.22,0.45-0.49,0.61-0.79c0.16-0.3,0.27-0.57,0.32-0.82c0.05-0.25,0.08-0.49,0.08-0.74c0-0.67-0.21-1.21-0.64-1.61
	s-0.98-0.61-1.65-0.61c-0.69,0-1.18,0.14-1.45,0.43h-0.02l0.35-1.02h3.45l0.39-1.88h-5.24l-1.45,4.46h2
	c0.16-0.34,0.53-0.51,1.11-0.51c0.32,0,0.58,0.08,0.77,0.25c0.19,0.17,0.29,0.41,0.29,0.75c0,0.34-0.12,0.61-0.35,0.82
	c-0.23,0.21-0.57,0.31-1,0.31c-0.31,0-0.56-0.06-0.73-0.17c-0.21-0.11-0.33-0.31-0.36-0.6H18.04z`}}]})(s)}function Ql(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.92,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.18,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.13-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.28,0.53
	c0.49,0,0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.51
	c-0.16,0-0.3,0.06-0.42,0.17C4.98,13.21,4.92,13.34,4.92,13.5z M4.92,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.51c-0.16,0-0.3,0.06-0.42,0.17
	C4.98,11.18,4.92,11.32,4.92,11.48z M18.33,18.72c0,0.96,0.25,1.73,0.75,2.31c0.5,0.58,1.26,0.87,2.29,0.87
	c0.95,0,1.73-0.29,2.35-0.87c0.62-0.58,0.92-1.34,0.92-2.28c0-0.64-0.22-1.17-0.67-1.57s-0.99-0.6-1.65-0.6
	c-0.73,0-1.3,0.25-1.72,0.75h-0.02c0.33-1.16,0.88-1.74,1.65-1.74c0.25,0,0.44,0.05,0.58,0.14c0.12,0.09,0.2,0.22,0.23,0.41h2.11
	c-0.01-0.31-0.08-0.59-0.19-0.84c-0.12-0.25-0.26-0.46-0.44-0.62s-0.39-0.3-0.63-0.4c-0.24-0.11-0.49-0.18-0.75-0.23
	c-0.26-0.04-0.52-0.07-0.8-0.07c-0.62,0-1.18,0.12-1.68,0.36s-0.88,0.54-1.17,0.89c-0.28,0.35-0.52,0.75-0.71,1.2
	c-0.19,0.45-0.31,0.86-0.38,1.23C18.36,18.04,18.33,18.39,18.33,18.72z M20.38,19.17c0-0.37,0.12-0.65,0.37-0.84
	c0.24-0.19,0.52-0.29,0.82-0.29c0.19,0,0.35,0.03,0.48,0.08s0.23,0.12,0.3,0.19c0.07,0.07,0.12,0.16,0.15,0.27
	c0.04,0.11,0.06,0.19,0.07,0.25c0.01,0.06,0.01,0.12,0.01,0.19c0,0.31-0.11,0.58-0.32,0.79s-0.5,0.32-0.85,0.32
	c-0.31,0-0.55-0.09-0.75-0.27C20.48,19.69,20.38,19.46,20.38,19.17z`}}]})(s)}function Gl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.83,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.17,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.12-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	s0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.42
	c-0.16,0-0.3,0.06-0.42,0.17C4.89,13.21,4.83,13.34,4.83,13.5z M4.83,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.42c-0.16,0-0.3,0.06-0.42,0.17
	C4.89,11.18,4.83,11.32,4.83,11.48z M18.85,21.9h2.47c0.26-1.29,0.73-2.45,1.39-3.47c0.67-1.02,1.39-1.84,2.16-2.44l0.38-1.87h-5.96
	l-0.41,1.89h3.49C20.39,18,19.22,19.96,18.85,21.9z`}}]})(s)}function Kl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.99,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.18,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.13-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.28,0.53
	c0.49,0,0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.58
	c-0.16,0-0.3,0.06-0.42,0.17C5.05,13.21,4.99,13.34,4.99,13.5z M4.99,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.58c-0.16,0-0.3,0.06-0.42,0.17
	C5.05,11.18,4.99,11.32,4.99,11.48z M17.99,19.67c0,0.73,0.29,1.29,0.86,1.66c0.57,0.38,1.34,0.57,2.31,0.57
	c0.59,0,1.12-0.06,1.57-0.18c0.46-0.12,0.81-0.27,1.07-0.44s0.46-0.38,0.62-0.62c0.16-0.24,0.26-0.46,0.31-0.66
	c0.05-0.2,0.08-0.4,0.08-0.61c0-0.41-0.12-0.77-0.36-1.06c-0.24-0.3-0.55-0.49-0.94-0.57l0.02-0.03v0.01
	c0.45-0.06,0.82-0.26,1.12-0.6c0.29-0.33,0.44-0.73,0.44-1.19c0-0.38-0.09-0.71-0.26-0.98s-0.41-0.48-0.71-0.61
	c-0.3-0.14-0.61-0.24-0.92-0.3c-0.31-0.06-0.65-0.09-1.01-0.09c-0.48,0-0.9,0.05-1.28,0.14c-0.38,0.09-0.69,0.22-0.93,0.37
	c-0.24,0.15-0.43,0.33-0.59,0.53s-0.27,0.4-0.33,0.6c-0.06,0.2-0.09,0.41-0.09,0.62c0,0.34,0.09,0.64,0.27,0.9
	c0.18,0.26,0.43,0.43,0.75,0.53v0.03c-0.56,0.06-1.04,0.27-1.42,0.61C18.18,18.67,17.99,19.12,17.99,19.67z M20.1,19.44
	c0-0.35,0.14-0.61,0.42-0.77s0.62-0.24,1.01-0.24c0.41,0,0.7,0.09,0.89,0.28c0.18,0.18,0.28,0.38,0.28,0.6v0.13
	c0,0.28-0.13,0.49-0.38,0.64c-0.25,0.14-0.58,0.22-0.97,0.22l0.03-0.01c-0.14,0-0.27-0.01-0.4-0.03s-0.27-0.06-0.41-0.11
	c-0.14-0.06-0.25-0.14-0.34-0.26C20.15,19.76,20.1,19.61,20.1,19.44z M20.86,16.37c0-0.32,0.12-0.55,0.37-0.69s0.55-0.22,0.9-0.22
	c0.3,0,0.55,0.07,0.76,0.2s0.31,0.35,0.31,0.63c0,0.07-0.02,0.15-0.05,0.23c-0.03,0.08-0.09,0.17-0.17,0.27
	c-0.08,0.1-0.21,0.18-0.39,0.24c-0.18,0.06-0.4,0.09-0.66,0.09c-0.4,0-0.68-0.08-0.84-0.23C20.94,16.75,20.86,16.57,20.86,16.37z`}}]})(s)}function Yl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M5.09,13.5c0,0.18,0.06,0.31,0.17,0.4c0.12,0.11,0.26,0.17,0.42,0.17h10.4c0.18,0,0.33,0.06,0.46,0.19
	c0.13,0.12,0.2,0.28,0.2,0.46s-0.07,0.34-0.2,0.47s-0.28,0.2-0.46,0.2c-0.18,0-0.34-0.07-0.47-0.21c-0.13-0.11-0.26-0.16-0.4-0.16
	c-0.16,0-0.3,0.05-0.41,0.16c-0.11,0.11-0.16,0.24-0.16,0.39c0,0.16,0.06,0.3,0.17,0.41c0.36,0.36,0.78,0.53,1.27,0.53
	c0.49,0,0.91-0.17,1.26-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.92-0.52-1.27c-0.35-0.35-0.77-0.53-1.26-0.53H5.68
	c-0.16,0-0.3,0.06-0.42,0.17C5.14,13.21,5.09,13.34,5.09,13.5z M5.09,11.48c0,0.17,0.06,0.3,0.17,0.39
	c0.12,0.11,0.26,0.16,0.42,0.16h13.81c0.49,0,0.92-0.18,1.27-0.52c0.35-0.35,0.52-0.77,0.52-1.27c0-0.49-0.17-0.91-0.52-1.26
	s-0.77-0.52-1.27-0.52c-0.49,0-0.91,0.17-1.27,0.51c-0.11,0.12-0.16,0.27-0.16,0.42c0,0.16,0.05,0.3,0.16,0.4
	c0.11,0.1,0.24,0.15,0.4,0.15c0.15,0,0.29-0.05,0.41-0.16c0.12-0.12,0.27-0.18,0.45-0.18c0.17,0,0.33,0.06,0.46,0.18
	c0.13,0.12,0.2,0.27,0.2,0.45c0,0.18-0.07,0.34-0.2,0.47c-0.13,0.13-0.28,0.2-0.46,0.2H5.68c-0.16,0-0.3,0.06-0.42,0.17
	C5.14,11.18,5.09,11.32,5.09,11.48z M18.18,19.76c0.02,0.39,0.11,0.73,0.28,1.02c0.17,0.29,0.39,0.51,0.67,0.67
	c0.28,0.16,0.58,0.27,0.9,0.34s0.67,0.11,1.04,0.11c0.57,0,1.09-0.11,1.55-0.32c0.47-0.21,0.84-0.48,1.13-0.81
	c0.29-0.33,0.53-0.7,0.73-1.13s0.33-0.84,0.41-1.23s0.12-0.78,0.12-1.15c0-1.06-0.27-1.87-0.81-2.43c-0.54-0.57-1.26-0.85-2.17-0.85
	c-0.93,0-1.72,0.28-2.36,0.85c-0.64,0.57-0.97,1.32-0.97,2.24c0,0.66,0.21,1.2,0.63,1.62c0.42,0.42,0.96,0.63,1.63,0.63
	c0.36,0,0.7-0.07,1.05-0.22c0.34-0.14,0.58-0.33,0.72-0.54h0.03c-0.12,0.48-0.31,0.88-0.58,1.22c-0.27,0.34-0.62,0.51-1.06,0.51
	c-0.29,0-0.48-0.03-0.59-0.1c-0.12-0.11-0.21-0.25-0.24-0.42H18.18z M20.75,16.88c0-0.31,0.1-0.58,0.29-0.81
	c0.19-0.23,0.48-0.34,0.86-0.34c0.34,0,0.6,0.09,0.77,0.26c0.18,0.17,0.27,0.43,0.27,0.76c0,0.09-0.02,0.2-0.06,0.31
	s-0.1,0.23-0.18,0.36c-0.08,0.12-0.2,0.23-0.37,0.31s-0.35,0.12-0.56,0.12s-0.39-0.04-0.54-0.11c-0.15-0.07-0.25-0.17-0.32-0.29
	c-0.07-0.12-0.11-0.22-0.14-0.31S20.75,16.96,20.75,16.88z`}}]})(s)}function Xl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M3.74,14.5c0-2.04,0.51-3.93,1.52-5.66s2.38-3.1,4.11-4.11s3.61-1.51,5.64-1.51c1.52,0,2.98,0.3,4.37,0.89
	s2.58,1.4,3.59,2.4s1.81,2.2,2.4,3.6s0.89,2.85,0.89,4.39c0,1.52-0.3,2.98-0.89,4.37s-1.4,2.59-2.4,3.59s-2.2,1.8-3.59,2.39
	s-2.84,0.89-4.37,0.89c-1.53,0-3-0.3-4.39-0.89s-2.59-1.4-3.6-2.4s-1.8-2.2-2.4-3.58S3.74,16.03,3.74,14.5z M6.22,14.5
	c0,2.37,0.86,4.43,2.59,6.18c1.73,1.73,3.79,2.59,6.2,2.59c1.58,0,3.05-0.39,4.39-1.18s2.42-1.85,3.21-3.2s1.19-2.81,1.19-4.39
	s-0.4-3.05-1.19-4.4s-1.86-2.42-3.21-3.21s-2.81-1.18-4.39-1.18s-3.05,0.39-4.39,1.18S8.2,8.75,7.4,10.1S6.22,12.92,6.22,14.5z
	 M11.11,20.35l3.75-13.11c0.01-0.1,0.06-0.15,0.15-0.15s0.14,0.05,0.15,0.15l3.74,13.11c0.04,0.11,0.03,0.19-0.02,0.25
	s-0.13,0.06-0.24,0l-3.47-1.3c-0.1-0.04-0.2-0.04-0.29,0l-3.5,1.3c-0.1,0.06-0.17,0.06-0.21,0S11.09,20.45,11.11,20.35z`}}]})(s)}function Zl(s){return u({attr:{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:"enable-background:new 0 0 30 30;"},child:[{tag:"path",attr:{d:`M4.65,15.5c0-0.22,0.08-0.41,0.23-0.56c0.16-0.15,0.35-0.22,0.57-0.22h12.08c0.22,0,0.4,0.07,0.54,0.22
	c0.14,0.15,0.22,0.34,0.22,0.57c0,0.22-0.07,0.4-0.22,0.54c-0.14,0.14-0.32,0.22-0.54,0.22H5.45c-0.22,0-0.42-0.07-0.57-0.22
	C4.72,15.9,4.65,15.72,4.65,15.5z M7.06,12.6c0-0.22,0.08-0.4,0.23-0.55c0.15-0.15,0.34-0.23,0.56-0.23h12.09
	c0.21,0,0.39,0.08,0.54,0.23c0.15,0.15,0.22,0.33,0.22,0.55c0,0.22-0.07,0.4-0.22,0.56c-0.15,0.15-0.33,0.23-0.54,0.23H7.86
	c-0.22,0-0.41-0.08-0.56-0.23S7.06,12.82,7.06,12.6z M8.68,18.34c0-0.21,0.08-0.39,0.24-0.54c0.14-0.14,0.32-0.22,0.54-0.22h12.1
	c0.22,0,0.41,0.07,0.56,0.22c0.15,0.14,0.22,0.32,0.22,0.54s-0.08,0.41-0.23,0.56s-0.34,0.23-0.56,0.23H9.46
	c-0.22,0-0.4-0.08-0.56-0.23S8.68,18.56,8.68,18.34z M19.26,15.5c0-0.23,0.07-0.42,0.22-0.57c0.15-0.15,0.34-0.22,0.57-0.22h4.52
	c0.23,0,0.42,0.07,0.57,0.22c0.15,0.15,0.22,0.34,0.22,0.56c0,0.22-0.07,0.4-0.22,0.54c-0.15,0.14-0.34,0.22-0.56,0.22h-4.52
	c-0.23,0-0.42-0.07-0.57-0.22C19.33,15.9,19.26,15.72,19.26,15.5z`}}]})(s)}const Jl=Object.freeze(Object.defineProperty({__proto__:null,WiAlien:Xe,WiBarometer:Ze,WiCelsius:Je,WiCloud:c8,WiCloudDown:qe,WiCloudRefresh:be,WiCloudUp:t8,WiCloudy:r8,WiCloudyGusts:n8,WiCloudyWindy:e8,WiDayCloudy:o8,WiDayCloudyGusts:l8,WiDayCloudyHigh:s8,WiDayCloudyWindy:i8,WiDayFog:u8,WiDayHail:a8,WiDayHaze:d8,WiDayLightWind:f8,WiDayLightning:p8,WiDayRain:y8,WiDayRainMix:h8,WiDayRainWind:v8,WiDayShowers:g8,WiDaySleet:x8,WiDaySleetStorm:m8,WiDaySnow:C8,WiDaySnowThunderstorm:z8,WiDaySnowWind:M8,WiDaySprinkle:w8,WiDayStormShowers:S8,WiDaySunny:_8,WiDaySunnyOvercast:k8,WiDayThunderstorm:L8,WiDayWindy:W8,WiDegrees:E8,WiDirectionDown:P8,WiDirectionDownLeft:N8,WiDirectionDownRight:B8,WiDirectionLeft:H8,WiDirectionRight:T8,WiDirectionUp:j8,WiDirectionUpLeft:R8,WiDirectionUpRight:D8,WiDust:F8,WiEarthquake:V8,WiFahrenheit:O8,WiFire:I8,WiFlood:A8,WiFog:U8,WiGaleWarning:$8,WiHail:Q8,WiHorizon:K8,WiHorizonAlt:G8,WiHot:Y8,WiHumidity:X8,WiHurricane:J8,WiHurricaneWarning:Z8,WiLightning:q8,WiLunarEclipse:b8,WiMeteor:t9,WiMoonAltFirstQuarter:c9,WiMoonAltFull:n9,WiMoonAltNew:e9,WiMoonAltThirdQuarter:r9,WiMoonAltWaningCrescent1:l9,WiMoonAltWaningCrescent2:s9,WiMoonAltWaningCrescent3:i9,WiMoonAltWaningCrescent4:o9,WiMoonAltWaningCrescent5:u9,WiMoonAltWaningCrescent6:a9,WiMoonAltWaningGibbous1:d9,WiMoonAltWaningGibbous2:f9,WiMoonAltWaningGibbous3:p9,WiMoonAltWaningGibbous4:h9,WiMoonAltWaningGibbous5:v9,WiMoonAltWaningGibbous6:y9,WiMoonAltWaxingCrescent1:g9,WiMoonAltWaxingCrescent2:m9,WiMoonAltWaxingCrescent3:x9,WiMoonAltWaxingCrescent4:z9,WiMoonAltWaxingCrescent5:M9,WiMoonAltWaxingCrescent6:C9,WiMoonAltWaxingGibbous1:w9,WiMoonAltWaxingGibbous2:S9,WiMoonAltWaxingGibbous3:k9,WiMoonAltWaxingGibbous4:_9,WiMoonAltWaxingGibbous5:L9,WiMoonAltWaxingGibbous6:W9,WiMoonFirstQuarter:E9,WiMoonFull:N9,WiMoonNew:B9,WiMoonThirdQuarter:P9,WiMoonWaningCrescent1:H9,WiMoonWaningCrescent2:T9,WiMoonWaningCrescent3:R9,WiMoonWaningCrescent4:D9,WiMoonWaningCrescent5:j9,WiMoonWaningCrescent6:F9,WiMoonWaningGibbous1:V9,WiMoonWaningGibbous2:O9,WiMoonWaningGibbous3:I9,WiMoonWaningGibbous4:A9,WiMoonWaningGibbous5:U9,WiMoonWaningGibbous6:$9,WiMoonWaxing6:Q9,WiMoonWaxingCrescent1:G9,WiMoonWaxingCrescent2:K9,WiMoonWaxingCrescent3:Y9,WiMoonWaxingCrescent4:X9,WiMoonWaxingCrescent5:Z9,WiMoonWaxingGibbous1:J9,WiMoonWaxingGibbous2:q9,WiMoonWaxingGibbous3:b9,WiMoonWaxingGibbous4:tr,WiMoonWaxingGibbous5:cr,WiMoonWaxingGibbous6:nr,WiMoonrise:er,WiMoonset:rr,WiNa:Vn,WiNightAltCloudy:or,WiNightAltCloudyGusts:lr,WiNightAltCloudyHigh:sr,WiNightAltCloudyWindy:ir,WiNightAltHail:ur,WiNightAltLightning:ar,WiNightAltPartlyCloudy:dr,WiNightAltRain:hr,WiNightAltRainMix:fr,WiNightAltRainWind:pr,WiNightAltShowers:vr,WiNightAltSleet:gr,WiNightAltSleetStorm:yr,WiNightAltSnow:zr,WiNightAltSnowThunderstorm:mr,WiNightAltSnowWind:xr,WiNightAltSprinkle:Mr,WiNightAltStormShowers:Cr,WiNightAltThunderstorm:wr,WiNightClear:Sr,WiNightCloudy:Wr,WiNightCloudyGusts:kr,WiNightCloudyHigh:_r,WiNightCloudyWindy:Lr,WiNightFog:Er,WiNightHail:Nr,WiNightLightning:Br,WiNightPartlyCloudy:Pr,WiNightRain:Rr,WiNightRainMix:Hr,WiNightRainWind:Tr,WiNightShowers:Dr,WiNightSleet:Fr,WiNightSleetStorm:jr,WiNightSnow:Ir,WiNightSnowThunderstorm:Vr,WiNightSnowWind:Or,WiNightSprinkle:Ar,WiNightStormShowers:Ur,WiNightThunderstorm:$r,WiRain:Kr,WiRainMix:Qr,WiRainWind:Gr,WiRaindrop:Yr,WiRaindrops:Xr,WiRefresh:Jr,WiRefreshAlt:Zr,WiSandstorm:qr,WiShowers:br,WiSleet:tl,WiSmallCraftAdvisory:cl,WiSmog:nl,WiSmoke:el,WiSnow:ll,WiSnowWind:rl,WiSnowflakeCold:sl,WiSolarEclipse:il,WiSprinkle:ol,WiStars:ul,WiStormShowers:al,WiStormWarning:dl,WiStrongWind:fl,WiSunrise:pl,WiSunset:hl,WiThermometer:gl,WiThermometerExterior:vl,WiThermometerInternal:yl,WiThunderstorm:ml,WiTime1:xl,WiTime10:zl,WiTime11:Ml,WiTime12:Cl,WiTime2:wl,WiTime3:Sl,WiTime4:kl,WiTime5:_l,WiTime6:Ll,WiTime7:Wl,WiTime8:El,WiTime9:Nl,WiTornado:Bl,WiTrain:Pl,WiTsunami:Hl,WiUmbrella:Tl,WiVolcano:Rl,WiWindBeaufort0:Dl,WiWindBeaufort1:jl,WiWindBeaufort10:Fl,WiWindBeaufort11:Vl,WiWindBeaufort12:Ol,WiWindBeaufort2:Il,WiWindBeaufort3:Al,WiWindBeaufort4:Ul,WiWindBeaufort5:$l,WiWindBeaufort6:Ql,WiWindBeaufort7:Gl,WiWindBeaufort8:Kl,WiWindBeaufort9:Yl,WiWindDeg:Xl,WiWindy:Zl},Symbol.toStringTag,{value:"Module"})),ql="https://geocoding-api.open-meteo.com/v1/search?name=",bl="https://api.open-meteo.com/v1/forecast";function ts(){const[s,R]=L1.useState(""),[y,A]=L1.useState(!1),[D,U]=L1.useState(null),[t0,e0]=L1.useState(null),[B,x0]=L1.useState(null),[d0,J]=L1.useState("light");L1.useEffect(()=>{const j=localStorage.getItem("theme");j&&J(j),document.documentElement.setAttribute("data-theme",j||"light"),Z("Bengaluru")},[]),L1.useEffect(()=>{document.documentElement.setAttribute("data-theme",d0),localStorage.setItem("theme",d0)},[d0]);async function Z(j){if(j){A(!0),U(null),x0(null);try{const o0=await(await fetch(ql+encodeURIComponent(j))).json();if(!o0.results||o0.results.length===0)throw new Error("City not found");const v0=o0.results[0],y0={name:v0.name,country:v0.country,lat:v0.latitude,lon:v0.longitude,timezone:v0.timezone};e0(y0),await N0(y0.lat,y0.lon)}catch(O){U(O.message)}finally{A(!1)}}}async function N0(j,O){A(!0),U(null);try{const o0=`${bl}?latitude=${j}&longitude=${O}&current_weather=true&timezone=auto`,y0=await(await fetch(o0)).json();if(!y0.current_weather)throw new Error("No weather data available");x0({...y0.current_weather,timezone:y0.timezone})}catch(o0){U(o0.message)}finally{A(!1)}}function T0({name:j,color:O,size:o0=72}){const v0=Jl[j]||Vn;return P.jsx(v0,{size:o0,color:O})}return P.jsx("div",{className:"app-wrap",children:P.jsxs("div",{className:"dashboard",children:[P.jsxs("div",{children:[P.jsxs("div",{className:"header",children:[P.jsxs("div",{className:"brand",children:[P.jsx("div",{className:"logo",children:"W"}),P.jsxs("div",{children:[P.jsx("div",{className:"title",children:"WeatherNow"}),P.jsx("div",{className:"tag",children:"Quick accurate current weather — built for Jamie"})]})]}),P.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[P.jsx("button",{className:"btn btn-ghost",onClick:()=>J(j=>j==="light"?"dark":"light"),"aria-label":"Toggle theme",style:{background:"var(--btn-ghost-bg)",color:"var(--btn-ghost-text)"},children:d0==="light"?"Dark":"Light"}),P.jsx("div",{className:"small",style:{color:"var(--text)"},children:new Date().toLocaleDateString()})]})]}),P.jsxs("div",{className:"card",children:[P.jsxs("div",{className:"search-box",children:[P.jsx("input",{className:"input",placeholder:"Search city e.g. Mumbai, London",value:s,onChange:j=>R(j.target.value),onKeyDown:j=>{j.key==="Enter"&&Z(s)},style:{background:"var(--input-bg)",color:"var(--input-text)"}}),P.jsx("button",{className:"btn btn-primary",onClick:()=>Z(s),children:"Search"}),P.jsx("button",{className:"btn btn-ghost",onClick:()=>{navigator.geolocation?(A(!0),navigator.geolocation.getCurrentPosition(async j=>{const O=j.coords.latitude,o0=j.coords.longitude;e0({name:"Your location",country:"",lat:O,lon:o0}),await N0(O,o0)},j=>{U(j.message),A(!1)})):U("Geolocation not supported")},style:{background:"var(--btn-ghost-bg)",color:"var(--btn-ghost-text)"},children:"My location"})]}),y&&P.jsxs("div",{style:{marginTop:12,display:"flex",alignItems:"center",gap:12},children:[P.jsx("div",{className:"loader",role:"status","aria-label":"Loading"}),P.jsx("div",{className:"small",style:{color:"var(--muted)"},children:"Loading current weather..."})]}),D&&P.jsxs("div",{style:{marginTop:12,background:"#fee2e2",padding:12,borderRadius:8,color:"#b91c1c"},children:[P.jsx("strong",{children:"Error:"})," ",D]}),B&&t0&&P.jsxs("div",{style:{marginTop:16},className:"main-weather",children:[P.jsxs("div",{className:"weather-top",children:[P.jsx("div",{className:"weather-icon",children:P.jsx(T0,{name:N5(B.weathercode).icon,color:N5(B.weathercode).color,size:84})}),P.jsxs("div",{children:[P.jsxs("div",{className:"temp-large value",style:{color:"var(--primary)"},children:[Math.round(B.temperature),"°C"]}),P.jsx("div",{className:"small value-muted",children:N5(B.weathercode).text}),P.jsxs("div",{className:"small value",style:{color:"var(--text)"},children:["Feels like: ",Math.round(B.temperature),"°C"]})]})]}),P.jsxs("div",{className:"footer value-muted",style:{color:"var(--muted)"},children:["Location: ",P.jsxs("strong",{style:{color:"var(--text)"},children:[t0.name,t0.country?`, ${t0.country}`:""]}),B.time?` · ${B.time}`:""," · ",P.jsx("span",{className:"value",style:{color:"var(--text)"},children:B.timezone||""})]})]})]})]}),P.jsxs("div",{className:"card side-panel",children:[P.jsxs("div",{className:"detail-row",children:[P.jsx("div",{className:"small",children:"Wind"}),P.jsx("div",{style:{fontWeight:700},className:"value",children:B?`${B.windspeed} km/h`:"—"})]}),P.jsxs("div",{className:"detail-row",children:[P.jsx("div",{className:"small",children:"Wind Direction"}),P.jsx("div",{style:{fontWeight:700},className:"value",children:B?`${Math.round(B.winddirection)}°`:"—"})]}),P.jsxs("div",{className:"detail-row",children:[P.jsx("div",{className:"small",children:"Temperature"}),P.jsx("div",{style:{fontWeight:700},className:"value",children:B?`${Math.round(B.temperature)}°C`:"—"})]}),P.jsxs("div",{className:"detail-row",children:[P.jsx("div",{className:"small",children:"Timezone"}),P.jsx("div",{style:{fontWeight:700},className:"value",children:B?B.timezone:"—"})]}),P.jsx("div",{style:{marginTop:12,fontSize:13,color:"var(--muted)"},children:"Data source: Open-Meteo · No API key required"})]})]})})}Qe.createRoot(document.getElementById("root")).render(P.jsx(Y1.StrictMode,{children:P.jsx(ts,{})}));
