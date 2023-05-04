(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Ia(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Ta(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=_e(i)?mp(i):Ta(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(_e(t))return t;if(fe(t))return t}}const dp=/;(?![^(]*\))/g,pp=/:([^]+)/,gp=/\/\*.*?\*\//gs;function mp(t){const e={};return t.replace(gp,"").split(dp).forEach(n=>{if(n){const i=n.split(pp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ba(t){let e="";if(_e(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const i=ba(t[n]);i&&(e+=i+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vp=Ia(yp);function Ru(t){return!!t||t===""}const wp=t=>_e(t)?t:t==null?"":$(t)||fe(t)&&(t.toString===Ou||!H(t.toString))?JSON.stringify(t,ku,2):String(t),ku=(t,e)=>e&&e.__v_isRef?ku(t,e.value):$n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Nu(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!$(e)&&!Pu(e)?String(e):e,re={},Vn=[],at=()=>{},_p=()=>!1,Ep=/^on[^a-z]/,_r=t=>Ep.test(t),Aa=t=>t.startsWith("onUpdate:"),Me=Object.assign,Ca=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ip=Object.prototype.hasOwnProperty,W=(t,e)=>Ip.call(t,e),$=Array.isArray,$n=t=>Er(t)==="[object Map]",Nu=t=>Er(t)==="[object Set]",H=t=>typeof t=="function",_e=t=>typeof t=="string",Sa=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",Du=t=>fe(t)&&H(t.then)&&H(t.catch),Ou=Object.prototype.toString,Er=t=>Ou.call(t),Tp=t=>Er(t).slice(8,-1),Pu=t=>Er(t)==="[object Object]",Ra=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bp=/-(\w)/g,Qn=Ir(t=>t.replace(bp,(e,n)=>n?n.toUpperCase():"")),Ap=/\B([A-Z])/g,oi=Ir(t=>t.replace(Ap,"-$1").toLowerCase()),xu=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),oo=Ir(t=>t?`on${xu(t)}`:""),Hs=(t,e)=>!Object.is(t,e),ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ks=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Cp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kl;const Sp=()=>Kl||(Kl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let et;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function kp(t,e=et){e&&e.active&&e.effects.push(t)}function Np(){return et}const ka=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mu=t=>(t.w&Yt)>0,Lu=t=>(t.n&Yt)>0,Dp=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yt},Op=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];Mu(s)&&!Lu(s)?s.delete(t):e[n++]=s,s.w&=~Yt,s.n&=~Yt}e.length=n}},Mo=new WeakMap;let _i=0,Yt=1;const Lo=30;let nt;const vn=Symbol(""),Fo=Symbol("");class Na{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kp(this,i)}run(){if(!this.active)return this.fn();let e=nt,n=qt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nt,nt=this,qt=!0,Yt=1<<++_i,_i<=Lo?Dp(this):zl(this),this.fn()}finally{_i<=Lo&&Op(this),Yt=1<<--_i,nt=this.parent,qt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(zl(this),this.onStop&&this.onStop(),this.active=!1)}}function zl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qt=!0;const Fu=[];function ai(){Fu.push(qt),qt=!1}function li(){const t=Fu.pop();qt=t===void 0?!0:t}function He(t,e,n){if(qt&&nt){let i=Mo.get(t);i||Mo.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=ka()),Uu(s)}}function Uu(t,e){let n=!1;_i<=Lo?Lu(t)||(t.n|=Yt,n=!Mu(t)):n=!t.has(nt),n&&(t.add(nt),nt.deps.push(t))}function Ot(t,e,n,i,s,r){const o=Mo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ra(n)&&a.push(o.get("length")):(a.push(o.get(vn)),$n(t)&&a.push(o.get(Fo)));break;case"delete":$(t)||(a.push(o.get(vn)),$n(t)&&a.push(o.get(Fo)));break;case"set":$n(t)&&a.push(o.get(vn));break}if(a.length===1)a[0]&&Uo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Uo(ka(l))}}function Uo(t,e){const n=$(t)?t:[...t];for(const i of n)i.computed&&ql(i);for(const i of n)i.computed||ql(i)}function ql(t,e){(t!==nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pp=Ia("__proto__,__v_isRef,__isVue"),Vu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sa)),xp=Da(),Mp=Da(!1,!0),Lp=Da(!0),Wl=Fp();function Fp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=Q(this);for(let r=0,o=this.length;r<o;r++)He(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(Q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ai();const i=Q(this)[e].apply(this,n);return li(),i}}),t}function Up(t){const e=Q(this);return He(e,"has",t),e.hasOwnProperty(t)}function Da(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?eg:Ku:e?Hu:ju).get(i))return i;const o=$(i);if(!t){if(o&&W(Wl,s))return Reflect.get(Wl,s,r);if(s==="hasOwnProperty")return Up}const a=Reflect.get(i,s,r);return(Sa(s)?Vu.has(s):Pp(s))||(t||He(i,"get",s),e)?a:Ve(a)?o&&Ra(s)?a:a.value:fe(a)?t?zu(a):xa(a):a}}const Vp=$u(),$p=$u(!0);function $u(t=!1){return function(n,i,s,r){let o=n[i];if(Di(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&(!Vo(s)&&!Di(s)&&(o=Q(o),s=Q(s)),!$(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const a=$(n)&&Ra(i)?Number(i)<n.length:W(n,i),l=Reflect.set(n,i,s,r);return n===Q(r)&&(a?Hs(s,o)&&Ot(n,"set",i,s):Ot(n,"add",i,s)),l}}function Bp(t,e){const n=W(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ot(t,"delete",e,void 0),i}function jp(t,e){const n=Reflect.has(t,e);return(!Sa(e)||!Vu.has(e))&&He(t,"has",e),n}function Hp(t){return He(t,"iterate",$(t)?"length":vn),Reflect.ownKeys(t)}const Bu={get:xp,set:Vp,deleteProperty:Bp,has:jp,ownKeys:Hp},Kp={get:Lp,set(t,e){return!0},deleteProperty(t,e){return!0}},zp=Me({},Bu,{get:Mp,set:$p}),Oa=t=>t,Tr=t=>Reflect.getPrototypeOf(t);function ys(t,e,n=!1,i=!1){t=t.__v_raw;const s=Q(t),r=Q(e);n||(e!==r&&He(s,"get",e),He(s,"get",r));const{has:o}=Tr(s),a=i?Oa:n?Fa:La;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function vs(t,e=!1){const n=this.__v_raw,i=Q(n),s=Q(t);return e||(t!==s&&He(i,"has",t),He(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ws(t,e=!1){return t=t.__v_raw,!e&&He(Q(t),"iterate",vn),Reflect.get(t,"size",t)}function Gl(t){t=Q(t);const e=Q(this);return Tr(e).has.call(e,t)||(e.add(t),Ot(e,"add",t,t)),this}function Ql(t,e){e=Q(e);const n=Q(this),{has:i,get:s}=Tr(n);let r=i.call(n,t);r||(t=Q(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Hs(e,o)&&Ot(n,"set",t,e):Ot(n,"add",t,e),this}function Xl(t){const e=Q(this),{has:n,get:i}=Tr(e);let s=n.call(e,t);s||(t=Q(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&Ot(e,"delete",t,void 0),r}function Jl(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&Ot(t,"clear",void 0,void 0),n}function _s(t,e){return function(i,s){const r=this,o=r.__v_raw,a=Q(o),l=e?Oa:t?Fa:La;return!t&&He(a,"iterate",vn),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Es(t,e,n){return function(...i){const s=this.__v_raw,r=Q(s),o=$n(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Oa:e?Fa:La;return!e&&He(r,"iterate",l?Fo:vn),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Vt(t){return function(...e){return t==="delete"?!1:this}}function qp(){const t={get(r){return ys(this,r)},get size(){return ws(this)},has:vs,add:Gl,set:Ql,delete:Xl,clear:Jl,forEach:_s(!1,!1)},e={get(r){return ys(this,r,!1,!0)},get size(){return ws(this)},has:vs,add:Gl,set:Ql,delete:Xl,clear:Jl,forEach:_s(!1,!0)},n={get(r){return ys(this,r,!0)},get size(){return ws(this,!0)},has(r){return vs.call(this,r,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:_s(!0,!1)},i={get(r){return ys(this,r,!0,!0)},get size(){return ws(this,!0)},has(r){return vs.call(this,r,!0)},add:Vt("add"),set:Vt("set"),delete:Vt("delete"),clear:Vt("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Es(r,!1,!1),n[r]=Es(r,!0,!1),e[r]=Es(r,!1,!0),i[r]=Es(r,!0,!0)}),[t,n,e,i]}const[Wp,Gp,Qp,Xp]=qp();function Pa(t,e){const n=e?t?Xp:Qp:t?Gp:Wp;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(W(n,s)&&s in i?n:i,s,r)}const Jp={get:Pa(!1,!1)},Yp={get:Pa(!1,!0)},Zp={get:Pa(!0,!1)},ju=new WeakMap,Hu=new WeakMap,Ku=new WeakMap,eg=new WeakMap;function tg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ng(t){return t.__v_skip||!Object.isExtensible(t)?0:tg(Tp(t))}function xa(t){return Di(t)?t:Ma(t,!1,Bu,Jp,ju)}function ig(t){return Ma(t,!1,zp,Yp,Hu)}function zu(t){return Ma(t,!0,Kp,Zp,Ku)}function Ma(t,e,n,i,s){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=ng(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Bn(t){return Di(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function Di(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function qu(t){return Bn(t)||Di(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function Wu(t){return Ks(t,"__v_skip",!0),t}const La=t=>fe(t)?xa(t):t,Fa=t=>fe(t)?zu(t):t;function sg(t){qt&&nt&&(t=Q(t),Uu(t.dep||(t.dep=ka())))}function rg(t,e){t=Q(t);const n=t.dep;n&&Uo(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function og(t){return Ve(t)?t.value:t}const ag={get:(t,e,n)=>og(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Gu(t){return Bn(t)?t:new Proxy(t,ag)}var Qu;class lg{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qu]=!1,this._dirty=!0,this.effect=new Na(e,()=>{this._dirty||(this._dirty=!0,rg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=Q(this);return sg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qu="__v_isReadonly";function cg(t,e,n=!1){let i,s;const r=H(t);return r?(i=t,s=at):(i=t.get,s=t.set),new lg(i,s,r||!s,n)}function Wt(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){br(r,e,n)}return s}function Ye(t,e,n,i){if(H(t)){const r=Wt(t,e,n,i);return r&&Du(r)&&r.catch(o=>{br(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(Ye(t[r],e,n,i));return s}function br(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Wt(l,null,10,[t,o,a]);return}}ug(t,n,s,i)}function ug(t,e,n,i=!0){console.error(t)}let Oi=!1,$o=!1;const De=[];let gt=0;const jn=[];let At=null,fn=0;const Xu=Promise.resolve();let Ua=null;function hg(t){const e=Ua||Xu;return t?e.then(this?t.bind(this):t):e}function fg(t){let e=gt+1,n=De.length;for(;e<n;){const i=e+n>>>1;Pi(De[i])<t?e=i+1:n=i}return e}function Va(t){(!De.length||!De.includes(t,Oi&&t.allowRecurse?gt+1:gt))&&(t.id==null?De.push(t):De.splice(fg(t.id),0,t),Ju())}function Ju(){!Oi&&!$o&&($o=!0,Ua=Xu.then(Zu))}function dg(t){const e=De.indexOf(t);e>gt&&De.splice(e,1)}function pg(t){$(t)?jn.push(...t):(!At||!At.includes(t,t.allowRecurse?fn+1:fn))&&jn.push(t),Ju()}function Yl(t,e=Oi?gt+1:0){for(;e<De.length;e++){const n=De[e];n&&n.pre&&(De.splice(e,1),e--,n())}}function Yu(t){if(jn.length){const e=[...new Set(jn)];if(jn.length=0,At){At.push(...e);return}for(At=e,At.sort((n,i)=>Pi(n)-Pi(i)),fn=0;fn<At.length;fn++)At[fn]();At=null,fn=0}}const Pi=t=>t.id==null?1/0:t.id,gg=(t,e)=>{const n=Pi(t)-Pi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zu(t){$o=!1,Oi=!0,De.sort(gg);const e=at;try{for(gt=0;gt<De.length;gt++){const n=De[gt];n&&n.active!==!1&&Wt(n,null,14)}}finally{gt=0,De.length=0,Yu(),Oi=!1,Ua=null,(De.length||jn.length)&&Zu()}}function mg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||re;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=i[u]||re;p&&(s=n.map(E=>_e(E)?E.trim():E)),d&&(s=n.map(Cp))}let a,l=i[a=oo(e)]||i[a=oo(Qn(e))];!l&&r&&(l=i[a=oo(oi(e))]),l&&Ye(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ye(c,t,6,s)}}function eh(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!H(t)){const l=c=>{const u=eh(c,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(fe(t)&&i.set(t,null),null):($(r)?r.forEach(l=>o[l]=null):Me(o,r),fe(t)&&i.set(t,o),o)}function Ar(t,e){return!t||!_r(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,oi(e))||W(t,e))}let st=null,th=null;function zs(t){const e=st;return st=t,th=t&&t.type.__scopeId||null,e}function yg(t,e=st,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ac(-1);const r=zs(e);let o;try{o=t(...s)}finally{zs(r),i._d&&ac(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function lo(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:E,ctx:R,inheritAttrs:b}=t;let B,U;const ie=zs(t);try{if(n.shapeFlag&4){const J=s||i;B=pt(u.call(J,J,d,r,E,p,R)),U=l}else{const J=e;B=pt(J.length>1?J(r,{attrs:l,slots:a,emit:c}):J(r,null)),U=e.props?l:vg(l)}}catch(J){bi.length=0,br(J,t,1),B=wn(Nt)}let P=B;if(U&&b!==!1){const J=Object.keys(U),{shapeFlag:ae}=P;J.length&&ae&7&&(o&&J.some(Aa)&&(U=wg(U,o)),P=Zt(P,U))}return n.dirs&&(P=Zt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),B=P,zs(ie),B}const vg=t=>{let e;for(const n in t)(n==="class"||n==="style"||_r(n))&&((e||(e={}))[n]=t[n]);return e},wg=(t,e)=>{const n={};for(const i in t)(!Aa(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _g(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==i[p]&&!Ar(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zl(i,o,c):!0:!!o;return!1}function Zl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Ar(n,r))return!0}return!1}function Eg({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ig=t=>t.__isSuspense;function Tg(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):pg(t)}function bg(t,e){if(me){let n=me.provides;const i=me.parent&&me.parent.provides;i===n&&(n=me.provides=Object.create(i)),n[t]=e}}function xs(t,e,n=!1){const i=me||st;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(i.proxy):e}}const Is={};function co(t,e,n){return nh(t,e,n)}function nh(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=re){const a=Np()===(me==null?void 0:me.scope)?me:null;let l,c=!1,u=!1;if(Ve(t)?(l=()=>t.value,c=Vo(t)):Bn(t)?(l=()=>t,i=!0):$(t)?(u=!0,c=t.some(P=>Bn(P)||Vo(P)),l=()=>t.map(P=>{if(Ve(P))return P.value;if(Bn(P))return Ln(P);if(H(P))return Wt(P,a,2)})):H(t)?e?l=()=>Wt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Ye(t,a,3,[p])}:l=at,e&&i){const P=l;l=()=>Ln(P())}let d,p=P=>{d=U.onStop=()=>{Wt(P,a,4)}},E;if(Mi)if(p=at,e?n&&Ye(e,a,3,[l(),u?[]:void 0,p]):l(),s==="sync"){const P=Tm();E=P.__watcherHandles||(P.__watcherHandles=[])}else return at;let R=u?new Array(t.length).fill(Is):Is;const b=()=>{if(U.active)if(e){const P=U.run();(i||c||(u?P.some((J,ae)=>Hs(J,R[ae])):Hs(P,R)))&&(d&&d(),Ye(e,a,3,[P,R===Is?void 0:u&&R[0]===Is?[]:R,p]),R=P)}else U.run()};b.allowRecurse=!!e;let B;s==="sync"?B=b:s==="post"?B=()=>je(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),B=()=>Va(b));const U=new Na(l,B);e?n?b():R=U.run():s==="post"?je(U.run.bind(U),a&&a.suspense):U.run();const ie=()=>{U.stop(),a&&a.scope&&Ca(a.scope.effects,U)};return E&&E.push(ie),ie}function Ag(t,e,n){const i=this.proxy,s=_e(t)?t.includes(".")?ih(i,t):()=>i[t]:t.bind(i,i);let r;H(e)?r=e:(r=e.handler,n=e);const o=me;Xn(this);const a=nh(s,r.bind(i),n);return o?Xn(o):_n(),a}function ih(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function Ln(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Ln(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Ln(t[n],e);else if(Nu(t)||$n(t))t.forEach(n=>{Ln(n,e)});else if(Pu(t))for(const n in t)Ln(t[n],e);return t}function Cg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ah(()=>{t.isMounted=!0}),lh(()=>{t.isUnmounting=!0}),t}const Xe=[Function,Array],Sg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},setup(t,{slots:e}){const n=gm(),i=Cg();let s;return()=>{const r=e.default&&rh(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const b of r)if(b.type!==Nt){o=b;break}}const a=Q(t),{mode:l}=a;if(i.isLeaving)return uo(o);const c=ec(o);if(!c)return uo(o);const u=Bo(c,a,i,n);jo(c,u);const d=n.subTree,p=d&&ec(d);let E=!1;const{getTransitionKey:R}=c.type;if(R){const b=R();s===void 0?s=b:b!==s&&(s=b,E=!0)}if(p&&p.type!==Nt&&(!dn(c,p)||E)){const b=Bo(p,a,i,n);if(jo(p,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},uo(o);l==="in-out"&&c.type!==Nt&&(b.delayLeave=(B,U,ie)=>{const P=sh(i,p);P[String(p.key)]=p,B._leaveCb=()=>{U(),B._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ie})}return o}}},Rg=Sg;function sh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Bo(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:E,onLeaveCancelled:R,onBeforeAppear:b,onAppear:B,onAfterAppear:U,onAppearCancelled:ie}=e,P=String(t.key),J=sh(n,t),ae=(V,ce)=>{V&&Ye(V,i,9,ce)},ze=(V,ce)=>{const se=ce[1];ae(V,ce),$(V)?V.every(We=>We.length<=1)&&se():V.length<=1&&se()},qe={mode:r,persisted:o,beforeEnter(V){let ce=a;if(!n.isMounted)if(s)ce=b||a;else return;V._leaveCb&&V._leaveCb(!0);const se=J[P];se&&dn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),ae(ce,[V])},enter(V){let ce=l,se=c,We=u;if(!n.isMounted)if(s)ce=B||l,se=U||c,We=ie||u;else return;let ct=!1;const Tt=V._enterCb=pi=>{ct||(ct=!0,pi?ae(We,[V]):ae(se,[V]),qe.delayedLeave&&qe.delayedLeave(),V._enterCb=void 0)};ce?ze(ce,[V,Tt]):Tt()},leave(V,ce){const se=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return ce();ae(d,[V]);let We=!1;const ct=V._leaveCb=Tt=>{We||(We=!0,ce(),Tt?ae(R,[V]):ae(E,[V]),V._leaveCb=void 0,J[se]===t&&delete J[se])};J[se]=t,p?ze(p,[V,ct]):ct()},clone(V){return Bo(V,e,n,i)}};return qe}function uo(t){if(Cr(t))return t=Zt(t),t.children=null,t}function ec(t){return Cr(t)?t.children?t.children[0]:void 0:t}function jo(t,e){t.shapeFlag&6&&t.component?jo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rh(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===dt?(o.patchFlag&128&&s++,i=i.concat(rh(o.children,e,a))):(e||o.type!==Nt)&&i.push(a!=null?Zt(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}const Ms=t=>!!t.type.__asyncLoader,Cr=t=>t.type.__isKeepAlive;function kg(t,e){oh(t,"a",e)}function Ng(t,e){oh(t,"da",e)}function oh(t,e,n=me){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Cr(s.parent.vnode)&&Dg(i,e,n,s),s=s.parent}}function Dg(t,e,n,i){const s=Sr(e,t,i,!0);ch(()=>{Ca(i[e],s)},n)}function Sr(t,e,n=me,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ai(),Xn(n);const a=Ye(e,n,t,o);return _n(),li(),a});return i?s.unshift(r):s.push(r),r}}const Ft=t=>(e,n=me)=>(!Mi||t==="sp")&&Sr(t,(...i)=>e(...i),n),Og=Ft("bm"),ah=Ft("m"),Pg=Ft("bu"),xg=Ft("u"),lh=Ft("bum"),ch=Ft("um"),Mg=Ft("sp"),Lg=Ft("rtg"),Fg=Ft("rtc");function Ug(t,e=me){Sr("ec",t,e)}function ln(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ai(),Ye(l,n,8,[t.el,a,t,e]),li())}}const Vg=Symbol(),Ho=t=>t?wh(t)?Ha(t)||t.proxy:Ho(t.parent):null,Ti=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ho(t.parent),$root:t=>Ho(t.root),$emit:t=>t.emit,$options:t=>$a(t),$forceUpdate:t=>t.f||(t.f=()=>Va(t.update)),$nextTick:t=>t.n||(t.n=hg.bind(t.proxy)),$watch:t=>Ag.bind(t)}),ho=(t,e)=>t!==re&&!t.__isScriptSetup&&W(t,e),$g={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ho(i,e))return o[e]=1,i[e];if(s!==re&&W(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&W(c,e))return o[e]=3,r[e];if(n!==re&&W(n,e))return o[e]=4,n[e];Ko&&(o[e]=0)}}const u=Ti[e];let d,p;if(u)return e==="$attrs"&&He(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==re&&W(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ho(s,e)?(s[e]=n,!0):i!==re&&W(i,e)?(i[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==re&&W(t,o)||ho(e,o)||(a=r[0])&&W(a,o)||W(i,o)||W(Ti,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ko=!0;function Bg(t){const e=$a(t),n=t.proxy,i=t.ctx;Ko=!1,e.beforeCreate&&tc(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:E,updated:R,activated:b,deactivated:B,beforeDestroy:U,beforeUnmount:ie,destroyed:P,unmounted:J,render:ae,renderTracked:ze,renderTriggered:qe,errorCaptured:V,serverPrefetch:ce,expose:se,inheritAttrs:We,components:ct,directives:Tt,filters:pi}=e;if(c&&jg(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const Z=o[ue];H(Z)&&(i[ue]=Z.bind(n))}if(s){const ue=s.call(n,n);fe(ue)&&(t.data=xa(ue))}if(Ko=!0,r)for(const ue in r){const Z=r[ue],on=H(Z)?Z.bind(n,n):H(Z.get)?Z.get.bind(n,n):at,gs=!H(Z)&&H(Z.set)?Z.set.bind(n):at,an=Em({get:on,set:gs});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>an.value,set:ut=>an.value=ut})}if(a)for(const ue in a)uh(a[ue],i,n,ue);if(l){const ue=H(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(Z=>{bg(Z,ue[Z])})}u&&tc(u,t,"c");function Fe(ue,Z){$(Z)?Z.forEach(on=>ue(on.bind(n))):Z&&ue(Z.bind(n))}if(Fe(Og,d),Fe(ah,p),Fe(Pg,E),Fe(xg,R),Fe(kg,b),Fe(Ng,B),Fe(Ug,V),Fe(Fg,ze),Fe(Lg,qe),Fe(lh,ie),Fe(ch,J),Fe(Mg,ce),$(se))if(se.length){const ue=t.exposed||(t.exposed={});se.forEach(Z=>{Object.defineProperty(ue,Z,{get:()=>n[Z],set:on=>n[Z]=on})})}else t.exposed||(t.exposed={});ae&&t.render===at&&(t.render=ae),We!=null&&(t.inheritAttrs=We),ct&&(t.components=ct),Tt&&(t.directives=Tt)}function jg(t,e,n=at,i=!1){$(t)&&(t=zo(t));for(const s in t){const r=t[s];let o;fe(r)?"default"in r?o=xs(r.from||s,r.default,!0):o=xs(r.from||s):o=xs(r),Ve(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function tc(t,e,n){Ye($(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function uh(t,e,n,i){const s=i.includes(".")?ih(n,i):()=>n[i];if(_e(t)){const r=e[t];H(r)&&co(s,r)}else if(H(t))co(s,t.bind(n));else if(fe(t))if($(t))t.forEach(r=>uh(r,e,n,i));else{const r=H(t.handler)?t.handler.bind(n):e[t.handler];H(r)&&co(s,r,t)}}function $a(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>qs(l,c,o,!0)),qs(l,e,o)),fe(e)&&r.set(e,l),l}function qs(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&qs(t,r,n,!0),s&&s.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Hg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hg={data:nc,props:un,emits:un,methods:un,computed:un,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:un,directives:un,watch:zg,provide:nc,inject:Kg};function nc(t,e){return e?t?function(){return Me(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Kg(t,e){return un(zo(t),zo(e))}function zo(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function un(t,e){return t?Me(Me(Object.create(null),t),e):e}function zg(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const i in e)n[i]=Ue(t[i],e[i]);return n}function qg(t,e,n,i=!1){const s={},r={};Ks(r,kr,1),t.propsDefaults=Object.create(null),hh(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:ig(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Wg(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Q(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Ar(t.emitsOptions,p))continue;const E=e[p];if(l)if(W(r,p))E!==r[p]&&(r[p]=E,c=!0);else{const R=Qn(p);s[R]=qo(l,a,R,E,t,!1)}else E!==r[p]&&(r[p]=E,c=!0)}}}else{hh(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!W(e,d)&&((u=oi(d))===d||!W(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=qo(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!W(e,d))&&(delete r[d],c=!0)}c&&Ot(t,"set","$attrs")}function hh(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ps(l))continue;const c=e[l];let u;s&&W(s,u=Qn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ar(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Q(n),c=a||re;for(let u=0;u<r.length;u++){const d=r[u];n[d]=qo(s,l,d,c[d],t,!W(c,d))}}return o}function qo(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=W(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Xn(s),i=c[n]=l.call(null,e),_n())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===oi(n))&&(i=!0))}return i}function fh(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!H(t)){const u=d=>{l=!0;const[p,E]=fh(d,e,!0);Me(o,p),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return fe(t)&&i.set(t,Vn),Vn;if($(r))for(let u=0;u<r.length;u++){const d=Qn(r[u]);ic(d)&&(o[d]=re)}else if(r)for(const u in r){const d=Qn(u);if(ic(d)){const p=r[u],E=o[d]=$(p)||H(p)?{type:p}:Object.assign({},p);if(E){const R=oc(Boolean,E.type),b=oc(String,E.type);E[0]=R>-1,E[1]=b<0||R<b,(R>-1||W(E,"default"))&&a.push(d)}}}const c=[o,a];return fe(t)&&i.set(t,c),c}function ic(t){return t[0]!=="$"}function sc(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function rc(t,e){return sc(t)===sc(e)}function oc(t,e){return $(e)?e.findIndex(n=>rc(n,t)):H(e)&&rc(e,t)?0:-1}const dh=t=>t[0]==="_"||t==="$stable",Ba=t=>$(t)?t.map(pt):[pt(t)],Gg=(t,e,n)=>{if(e._n)return e;const i=yg((...s)=>Ba(e(...s)),n);return i._c=!1,i},ph=(t,e,n)=>{const i=t._ctx;for(const s in t){if(dh(s))continue;const r=t[s];if(H(r))e[s]=Gg(s,r,i);else if(r!=null){const o=Ba(r);e[s]=()=>o}}},gh=(t,e)=>{const n=Ba(e);t.slots.default=()=>n},Qg=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),Ks(e,"_",n)):ph(e,t.slots={})}else t.slots={},e&&gh(t,e);Ks(t.slots,kr,1)},Xg=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=re;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Me(s,e),!n&&a===1&&delete s._):(r=!e.$stable,ph(e,s)),o=e}else e&&(gh(t,e),o={default:1});if(r)for(const a in s)!dh(a)&&!(a in o)&&delete s[a]};function mh(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jg=0;function Yg(t,e){return function(i,s=null){H(i)||(i=Object.assign({},i)),s!=null&&!fe(s)&&(s=null);const r=mh(),o=new Set;let a=!1;const l=r.app={_uid:Jg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:bm,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&H(c.install)?(o.add(c),c.install(l,...u)):H(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const p=wn(i,s);return p.appContext=r,u&&e?e(p,c):t(p,c,d),a=!0,l._container=c,c.__vue_app__=l,Ha(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Wo(t,e,n,i,s=!1){if($(t)){t.forEach((p,E)=>Wo(p,e&&($(e)?e[E]:e),n,i,s));return}if(Ms(i)&&!s)return;const r=i.shapeFlag&4?Ha(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(_e(c)?(u[c]=null,W(d,c)&&(d[c]=null)):Ve(c)&&(c.value=null)),H(l))Wt(l,a,12,[o,u]);else{const p=_e(l),E=Ve(l);if(p||E){const R=()=>{if(t.f){const b=p?W(d,l)?d[l]:u[l]:l.value;s?$(b)&&Ca(b,r):$(b)?b.includes(r)||b.push(r):p?(u[l]=[r],W(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else p?(u[l]=o,W(d,l)&&(d[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,je(R,n)):R()}}}const je=Tg;function Zg(t){return em(t)}function em(t,e){const n=Sp();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:E=at,insertStaticContent:R}=t,b=(h,f,g,y=null,m=null,T=null,S=!1,I=null,A=!!f.dynamicChildren)=>{if(h===f)return;h&&!dn(h,f)&&(y=ms(h),ut(h,m,T,!0),h=null),f.patchFlag===-2&&(A=!1,f.dynamicChildren=null);const{type:v,ref:N,shapeFlag:k}=f;switch(v){case Rr:B(h,f,g,y);break;case Nt:U(h,f,g,y);break;case fo:h==null&&ie(f,g,y,S);break;case dt:ct(h,f,g,y,m,T,S,I,A);break;default:k&1?ae(h,f,g,y,m,T,S,I,A):k&6?Tt(h,f,g,y,m,T,S,I,A):(k&64||k&128)&&v.process(h,f,g,y,m,T,S,I,A,On)}N!=null&&m&&Wo(N,h&&h.ref,T,f||h,!f)},B=(h,f,g,y)=>{if(h==null)i(f.el=a(f.children),g,y);else{const m=f.el=h.el;f.children!==h.children&&c(m,f.children)}},U=(h,f,g,y)=>{h==null?i(f.el=l(f.children||""),g,y):f.el=h.el},ie=(h,f,g,y)=>{[h.el,h.anchor]=R(h.children,f,g,y,h.el,h.anchor)},P=({el:h,anchor:f},g,y)=>{let m;for(;h&&h!==f;)m=p(h),i(h,g,y),h=m;i(f,g,y)},J=({el:h,anchor:f})=>{let g;for(;h&&h!==f;)g=p(h),s(h),h=g;s(f)},ae=(h,f,g,y,m,T,S,I,A)=>{S=S||f.type==="svg",h==null?ze(f,g,y,m,T,S,I,A):ce(h,f,m,T,S,I,A)},ze=(h,f,g,y,m,T,S,I)=>{let A,v;const{type:N,props:k,shapeFlag:D,transition:L,dirs:K}=h;if(A=h.el=o(h.type,T,k&&k.is,k),D&8?u(A,h.children):D&16&&V(h.children,A,null,y,m,T&&N!=="foreignObject",S,I),K&&ln(h,null,y,"created"),qe(A,h,h.scopeId,S,y),k){for(const Y in k)Y!=="value"&&!Ps(Y)&&r(A,Y,null,k[Y],T,h.children,y,m,bt);"value"in k&&r(A,"value",null,k.value),(v=k.onVnodeBeforeMount)&&ft(v,y,h)}K&&ln(h,null,y,"beforeMount");const ee=(!m||m&&!m.pendingBranch)&&L&&!L.persisted;ee&&L.beforeEnter(A),i(A,f,g),((v=k&&k.onVnodeMounted)||ee||K)&&je(()=>{v&&ft(v,y,h),ee&&L.enter(A),K&&ln(h,null,y,"mounted")},m)},qe=(h,f,g,y,m)=>{if(g&&E(h,g),y)for(let T=0;T<y.length;T++)E(h,y[T]);if(m){let T=m.subTree;if(f===T){const S=m.vnode;qe(h,S,S.scopeId,S.slotScopeIds,m.parent)}}},V=(h,f,g,y,m,T,S,I,A=0)=>{for(let v=A;v<h.length;v++){const N=h[v]=I?Bt(h[v]):pt(h[v]);b(null,N,f,g,y,m,T,S,I)}},ce=(h,f,g,y,m,T,S)=>{const I=f.el=h.el;let{patchFlag:A,dynamicChildren:v,dirs:N}=f;A|=h.patchFlag&16;const k=h.props||re,D=f.props||re;let L;g&&cn(g,!1),(L=D.onVnodeBeforeUpdate)&&ft(L,g,f,h),N&&ln(f,h,g,"beforeUpdate"),g&&cn(g,!0);const K=m&&f.type!=="foreignObject";if(v?se(h.dynamicChildren,v,I,g,y,K,T):S||Z(h,f,I,null,g,y,K,T,!1),A>0){if(A&16)We(I,f,k,D,g,y,m);else if(A&2&&k.class!==D.class&&r(I,"class",null,D.class,m),A&4&&r(I,"style",k.style,D.style,m),A&8){const ee=f.dynamicProps;for(let Y=0;Y<ee.length;Y++){const pe=ee[Y],Ze=k[pe],Pn=D[pe];(Pn!==Ze||pe==="value")&&r(I,pe,Ze,Pn,m,h.children,g,y,bt)}}A&1&&h.children!==f.children&&u(I,f.children)}else!S&&v==null&&We(I,f,k,D,g,y,m);((L=D.onVnodeUpdated)||N)&&je(()=>{L&&ft(L,g,f,h),N&&ln(f,h,g,"updated")},y)},se=(h,f,g,y,m,T,S)=>{for(let I=0;I<f.length;I++){const A=h[I],v=f[I],N=A.el&&(A.type===dt||!dn(A,v)||A.shapeFlag&70)?d(A.el):g;b(A,v,N,null,y,m,T,S,!0)}},We=(h,f,g,y,m,T,S)=>{if(g!==y){if(g!==re)for(const I in g)!Ps(I)&&!(I in y)&&r(h,I,g[I],null,S,f.children,m,T,bt);for(const I in y){if(Ps(I))continue;const A=y[I],v=g[I];A!==v&&I!=="value"&&r(h,I,v,A,S,f.children,m,T,bt)}"value"in y&&r(h,"value",g.value,y.value)}},ct=(h,f,g,y,m,T,S,I,A)=>{const v=f.el=h?h.el:a(""),N=f.anchor=h?h.anchor:a("");let{patchFlag:k,dynamicChildren:D,slotScopeIds:L}=f;L&&(I=I?I.concat(L):L),h==null?(i(v,g,y),i(N,g,y),V(f.children,g,N,m,T,S,I,A)):k>0&&k&64&&D&&h.dynamicChildren?(se(h.dynamicChildren,D,g,m,T,S,I),(f.key!=null||m&&f===m.subTree)&&yh(h,f,!0)):Z(h,f,g,N,m,T,S,I,A)},Tt=(h,f,g,y,m,T,S,I,A)=>{f.slotScopeIds=I,h==null?f.shapeFlag&512?m.ctx.activate(f,g,y,S,A):pi(f,g,y,m,T,S,A):Ul(h,f,A)},pi=(h,f,g,y,m,T,S)=>{const I=h.component=pm(h,y,m);if(Cr(h)&&(I.ctx.renderer=On),mm(I),I.asyncDep){if(m&&m.registerDep(I,Fe),!h.el){const A=I.subTree=wn(Nt);U(null,A,f,g)}return}Fe(I,h,f,g,m,T,S)},Ul=(h,f,g)=>{const y=f.component=h.component;if(_g(h,f,g))if(y.asyncDep&&!y.asyncResolved){ue(y,f,g);return}else y.next=f,dg(y.update),y.update();else f.el=h.el,y.vnode=f},Fe=(h,f,g,y,m,T,S)=>{const I=()=>{if(h.isMounted){let{next:N,bu:k,u:D,parent:L,vnode:K}=h,ee=N,Y;cn(h,!1),N?(N.el=K.el,ue(h,N,S)):N=K,k&&ao(k),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&ft(Y,L,N,K),cn(h,!0);const pe=lo(h),Ze=h.subTree;h.subTree=pe,b(Ze,pe,d(Ze.el),ms(Ze),h,m,T),N.el=pe.el,ee===null&&Eg(h,pe.el),D&&je(D,m),(Y=N.props&&N.props.onVnodeUpdated)&&je(()=>ft(Y,L,N,K),m)}else{let N;const{el:k,props:D}=f,{bm:L,m:K,parent:ee}=h,Y=Ms(f);if(cn(h,!1),L&&ao(L),!Y&&(N=D&&D.onVnodeBeforeMount)&&ft(N,ee,f),cn(h,!0),k&&ro){const pe=()=>{h.subTree=lo(h),ro(k,h.subTree,h,m,null)};Y?f.type.__asyncLoader().then(()=>!h.isUnmounted&&pe()):pe()}else{const pe=h.subTree=lo(h);b(null,pe,g,y,h,m,T),f.el=pe.el}if(K&&je(K,m),!Y&&(N=D&&D.onVnodeMounted)){const pe=f;je(()=>ft(N,ee,pe),m)}(f.shapeFlag&256||ee&&Ms(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&je(h.a,m),h.isMounted=!0,f=g=y=null}},A=h.effect=new Na(I,()=>Va(v),h.scope),v=h.update=()=>A.run();v.id=h.uid,cn(h,!0),v()},ue=(h,f,g)=>{f.component=h;const y=h.vnode.props;h.vnode=f,h.next=null,Wg(h,f.props,y,g),Xg(h,f.children,g),ai(),Yl(),li()},Z=(h,f,g,y,m,T,S,I,A=!1)=>{const v=h&&h.children,N=h?h.shapeFlag:0,k=f.children,{patchFlag:D,shapeFlag:L}=f;if(D>0){if(D&128){gs(v,k,g,y,m,T,S,I,A);return}else if(D&256){on(v,k,g,y,m,T,S,I,A);return}}L&8?(N&16&&bt(v,m,T),k!==v&&u(g,k)):N&16?L&16?gs(v,k,g,y,m,T,S,I,A):bt(v,m,T,!0):(N&8&&u(g,""),L&16&&V(k,g,y,m,T,S,I,A))},on=(h,f,g,y,m,T,S,I,A)=>{h=h||Vn,f=f||Vn;const v=h.length,N=f.length,k=Math.min(v,N);let D;for(D=0;D<k;D++){const L=f[D]=A?Bt(f[D]):pt(f[D]);b(h[D],L,g,null,m,T,S,I,A)}v>N?bt(h,m,T,!0,!1,k):V(f,g,y,m,T,S,I,A,k)},gs=(h,f,g,y,m,T,S,I,A)=>{let v=0;const N=f.length;let k=h.length-1,D=N-1;for(;v<=k&&v<=D;){const L=h[v],K=f[v]=A?Bt(f[v]):pt(f[v]);if(dn(L,K))b(L,K,g,null,m,T,S,I,A);else break;v++}for(;v<=k&&v<=D;){const L=h[k],K=f[D]=A?Bt(f[D]):pt(f[D]);if(dn(L,K))b(L,K,g,null,m,T,S,I,A);else break;k--,D--}if(v>k){if(v<=D){const L=D+1,K=L<N?f[L].el:y;for(;v<=D;)b(null,f[v]=A?Bt(f[v]):pt(f[v]),g,K,m,T,S,I,A),v++}}else if(v>D)for(;v<=k;)ut(h[v],m,T,!0),v++;else{const L=v,K=v,ee=new Map;for(v=K;v<=D;v++){const Ge=f[v]=A?Bt(f[v]):pt(f[v]);Ge.key!=null&&ee.set(Ge.key,v)}let Y,pe=0;const Ze=D-K+1;let Pn=!1,Bl=0;const gi=new Array(Ze);for(v=0;v<Ze;v++)gi[v]=0;for(v=L;v<=k;v++){const Ge=h[v];if(pe>=Ze){ut(Ge,m,T,!0);continue}let ht;if(Ge.key!=null)ht=ee.get(Ge.key);else for(Y=K;Y<=D;Y++)if(gi[Y-K]===0&&dn(Ge,f[Y])){ht=Y;break}ht===void 0?ut(Ge,m,T,!0):(gi[ht-K]=v+1,ht>=Bl?Bl=ht:Pn=!0,b(Ge,f[ht],g,null,m,T,S,I,A),pe++)}const jl=Pn?tm(gi):Vn;for(Y=jl.length-1,v=Ze-1;v>=0;v--){const Ge=K+v,ht=f[Ge],Hl=Ge+1<N?f[Ge+1].el:y;gi[v]===0?b(null,ht,g,Hl,m,T,S,I,A):Pn&&(Y<0||v!==jl[Y]?an(ht,g,Hl,2):Y--)}}},an=(h,f,g,y,m=null)=>{const{el:T,type:S,transition:I,children:A,shapeFlag:v}=h;if(v&6){an(h.component.subTree,f,g,y);return}if(v&128){h.suspense.move(f,g,y);return}if(v&64){S.move(h,f,g,On);return}if(S===dt){i(T,f,g);for(let k=0;k<A.length;k++)an(A[k],f,g,y);i(h.anchor,f,g);return}if(S===fo){P(h,f,g);return}if(y!==2&&v&1&&I)if(y===0)I.beforeEnter(T),i(T,f,g),je(()=>I.enter(T),m);else{const{leave:k,delayLeave:D,afterLeave:L}=I,K=()=>i(T,f,g),ee=()=>{k(T,()=>{K(),L&&L()})};D?D(T,K,ee):ee()}else i(T,f,g)},ut=(h,f,g,y=!1,m=!1)=>{const{type:T,props:S,ref:I,children:A,dynamicChildren:v,shapeFlag:N,patchFlag:k,dirs:D}=h;if(I!=null&&Wo(I,null,g,h,!0),N&256){f.ctx.deactivate(h);return}const L=N&1&&D,K=!Ms(h);let ee;if(K&&(ee=S&&S.onVnodeBeforeUnmount)&&ft(ee,f,h),N&6)fp(h.component,g,y);else{if(N&128){h.suspense.unmount(g,y);return}L&&ln(h,null,f,"beforeUnmount"),N&64?h.type.remove(h,f,g,m,On,y):v&&(T!==dt||k>0&&k&64)?bt(v,f,g,!1,!0):(T===dt&&k&384||!m&&N&16)&&bt(A,f,g),y&&Vl(h)}(K&&(ee=S&&S.onVnodeUnmounted)||L)&&je(()=>{ee&&ft(ee,f,h),L&&ln(h,null,f,"unmounted")},g)},Vl=h=>{const{type:f,el:g,anchor:y,transition:m}=h;if(f===dt){hp(g,y);return}if(f===fo){J(h);return}const T=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(h.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:I}=m,A=()=>S(g,T);I?I(h.el,T,A):A()}else T()},hp=(h,f)=>{let g;for(;h!==f;)g=p(h),s(h),h=g;s(f)},fp=(h,f,g)=>{const{bum:y,scope:m,update:T,subTree:S,um:I}=h;y&&ao(y),m.stop(),T&&(T.active=!1,ut(S,h,f,g)),I&&je(I,f),je(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},bt=(h,f,g,y=!1,m=!1,T=0)=>{for(let S=T;S<h.length;S++)ut(h[S],f,g,y,m)},ms=h=>h.shapeFlag&6?ms(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),$l=(h,f,g)=>{h==null?f._vnode&&ut(f._vnode,null,null,!0):b(f._vnode||null,h,f,null,null,null,g),Yl(),Yu(),f._vnode=h},On={p:b,um:ut,m:an,r:Vl,mt:pi,mc:V,pc:Z,pbc:se,n:ms,o:t};let so,ro;return e&&([so,ro]=e(On)),{render:$l,hydrate:so,createApp:Yg($l,so)}}function cn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yh(t,e,n=!1){const i=t.children,s=e.children;if($(i)&&$(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Bt(s[r]),a.el=o.el),n||yh(o,a)),a.type===Rr&&(a.el=o.el)}}function tm(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const nm=t=>t.__isTeleport,dt=Symbol(void 0),Rr=Symbol(void 0),Nt=Symbol(void 0),fo=Symbol(void 0),bi=[];let rt=null;function im(t=!1){bi.push(rt=t?null:[])}function sm(){bi.pop(),rt=bi[bi.length-1]||null}let xi=1;function ac(t){xi+=t}function rm(t){return t.dynamicChildren=xi>0?rt||Vn:null,sm(),xi>0&&rt&&rt.push(t),t}function om(t,e,n,i,s,r){return rm(Hn(t,e,n,i,s,r,!0))}function am(t){return t?t.__v_isVNode===!0:!1}function dn(t,e){return t.type===e.type&&t.key===e.key}const kr="__vInternal",vh=({key:t})=>t??null,Ls=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||Ve(t)||H(t)?{i:st,r:t,k:e,f:!!n}:t:null;function Hn(t,e=null,n=null,i=0,s=null,r=t===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vh(e),ref:e&&Ls(e),scopeId:th,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return a?(ja(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),xi>0&&!o&&rt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rt.push(l),l}const wn=lm;function lm(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Vg)&&(t=Nt),am(t)){const a=Zt(t,e,!0);return n&&ja(a,n),xi>0&&!r&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag|=-2,a}if(_m(t)&&(t=t.__vccOpts),e){e=cm(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=ba(a)),fe(l)&&(qu(l)&&!$(l)&&(l=Me({},l)),e.style=Ta(l))}const o=_e(t)?1:Ig(t)?128:nm(t)?64:fe(t)?4:H(t)?2:0;return Hn(t,e,n,i,s,o,r,!0)}function cm(t){return t?qu(t)||kr in t?Me({},t):t:null}function Zt(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?hm(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vh(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Ls(e)):[s,Ls(e)]:Ls(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function um(t=" ",e=0){return wn(Rr,null,t,e)}function pt(t){return t==null||typeof t=="boolean"?wn(Nt):$(t)?wn(dt,null,t.slice()):typeof t=="object"?Bt(t):wn(Rr,null,String(t))}function Bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function ja(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ja(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(kr in e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:st},n=32):(e=String(e),i&64?(n=16,e=[um(e)]):n=8);t.children=e,t.shapeFlag|=n}function hm(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ba([e.class,i.class]));else if(s==="style")e.style=Ta([e.style,i.style]);else if(_r(s)){const r=e[s],o=i[s];o&&r!==o&&!($(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ft(t,e,n,i=null){Ye(t,e,7,[n,i])}const fm=mh();let dm=0;function pm(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||fm,r={uid:dm++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fh(i,s),emitsOptions:eh(i,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mg.bind(null,r),t.ce&&t.ce(r),r}let me=null;const gm=()=>me||st,Xn=t=>{me=t,t.scope.on()},_n=()=>{me&&me.scope.off(),me=null};function wh(t){return t.vnode.shapeFlag&4}let Mi=!1;function mm(t,e=!1){Mi=e;const{props:n,children:i}=t.vnode,s=wh(t);qg(t,n,s,e),Qg(t,i);const r=s?ym(t,e):void 0;return Mi=!1,r}function ym(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wu(new Proxy(t.ctx,$g));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?wm(t):null;Xn(t),ai();const r=Wt(i,t,0,[t.props,s]);if(li(),_n(),Du(r)){if(r.then(_n,_n),e)return r.then(o=>{lc(t,o,e)}).catch(o=>{br(o,t,0)});t.asyncDep=r}else lc(t,r,e)}else _h(t,e)}function lc(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Gu(e)),_h(t,n)}let cc;function _h(t,e,n){const i=t.type;if(!t.render){if(!e&&cc&&!i.render){const s=i.template||$a(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Me(Me({isCustomElement:r,delimiters:a},o),l);i.render=cc(s,c)}}t.render=i.render||at}Xn(t),ai(),Bg(t),li(),_n()}function vm(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function wm(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=vm(t))},slots:t.slots,emit:t.emit,expose:e}}function Ha(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gu(Wu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}}))}function _m(t){return H(t)&&"__vccOpts"in t}const Em=(t,e)=>cg(t,e,Mi),Im=Symbol(""),Tm=()=>xs(Im),bm="3.2.47",Am="http://www.w3.org/2000/svg",pn=typeof document<"u"?document:null,uc=pn&&pn.createElement("template"),Cm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?pn.createElementNS(Am,t):pn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{uc.innerHTML=i?`<svg>${t}</svg>`:t;const a=uc.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Sm(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rm(t,e,n){const i=t.style,s=_e(n);if(n&&!s){if(e&&!_e(e))for(const r in e)n[r]==null&&Go(i,r,"");for(const r in n)Go(i,r,n[r])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const hc=/\s*!important$/;function Go(t,e,n){if($(n))n.forEach(i=>Go(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=km(t,e);hc.test(n)?t.setProperty(oi(i),n.replace(hc,""),"important"):t[i]=n}}const fc=["Webkit","Moz","ms"],po={};function km(t,e){const n=po[e];if(n)return n;let i=Qn(e);if(i!=="filter"&&i in t)return po[e]=i;i=xu(i);for(let s=0;s<fc.length;s++){const r=fc[s]+i;if(r in t)return po[e]=r}return e}const dc="http://www.w3.org/1999/xlink";function Nm(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dc,e.slice(6,e.length)):t.setAttributeNS(dc,e,n);else{const r=vp(e);n==null||r&&!Ru(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Dm(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ru(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Om(t,e,n,i){t.addEventListener(e,n,i)}function Pm(t,e,n,i){t.removeEventListener(e,n,i)}function xm(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Mm(e);if(i){const c=r[e]=Um(i,s);Om(t,a,c,l)}else o&&(Pm(t,a,o,l),r[e]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function Mm(t){let e;if(pc.test(t)){e={};let i;for(;i=t.match(pc);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):oi(t.slice(2)),e]}let go=0;const Lm=Promise.resolve(),Fm=()=>go||(Lm.then(()=>go=0),go=Date.now());function Um(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ye(Vm(i,n.value),e,5,[i])};return n.value=t,n.attached=Fm(),n}function Vm(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const gc=/^on[a-z]/,$m=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?Sm(t,i,s):e==="style"?Rm(t,n,i):_r(e)?Aa(e)||xm(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bm(t,e,i,s))?Dm(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Nm(t,e,i,s))};function Bm(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&gc.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||gc.test(e)&&_e(n)?!1:e in t}const jm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Rg.props;const Hm=Me({patchProp:$m},Cm);let mc;function Km(){return mc||(mc=Zg(Hm))}const zm=(...t)=>{const e=Km().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=qm(i);if(!s)return;const r=e._component;!H(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qm(t){return _e(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Wm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,E=c&63;l||(E=64,o||(p=64)),i.push(n[u],n[d],n[p],n[E])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Gm;const p=r<<2|a>>4;if(i.push(p),c!==64){const E=a<<4&240|c>>2;if(i.push(E),d!==64){const R=c<<6&192|d;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qm=function(t){const e=Eh(t);return Ih.encodeByteArray(e,!0)},Ws=function(t){return Qm(t).replace(/\./g,"")},Th=function(t){try{return Ih.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=()=>Xm().__FIREBASE_DEFAULTS__,Ym=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Th(t[1]);return e&&JSON.parse(e)},Ka=()=>{try{return Jm()||Ym()||Zm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bh=t=>{var e,n;return(n=(e=Ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ey=t=>{const e=bh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ty=()=>{var t;return(t=Ka())===null||t===void 0?void 0:t.config},Ah=t=>{var e;return(e=Ka())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ws(JSON.stringify(n)),Ws(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function ry(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ay(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ly(){try{return typeof indexedDB=="object"}catch{return!1}}function cy(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="FirebaseError";class Ut extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=uy,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?hy(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,a,i)}}function hy(t,e){return t.replace(fy,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const fy=/\{\$([^}]+)}/g;function dy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(yc(r)&&yc(o)){if(!Gs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function yc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function py(t,e){const n=new gy(t,e);return n.subscribe.bind(n)}class gy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");my(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=mo),s.error===void 0&&(s.error=mo),s.complete===void 0&&(s.complete=mo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function my(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ny;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wy(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vy(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vy(t){return t===hn?void 0:t}function wy(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Ey={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Iy=G.INFO,Ty={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},by=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Ty[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=Iy,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ey[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Ay=(t,e)=>e.some(n=>t instanceof n);let vc,wc;function Cy(){return vc||(vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sy(){return wc||(wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,Qo=new WeakMap,Sh=new WeakMap,yo=new WeakMap,qa=new WeakMap;function Ry(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Gt(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ch.set(n,t)}).catch(()=>{}),qa.set(e,t),e}function ky(t){if(Qo.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Qo.set(t,e)}let Xo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ny(t){Xo=t(Xo)}function Dy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(vo(this),e,...n);return Sh.set(i,e.sort?e.sort():[e]),Gt(i)}:Sy().includes(t)?function(...e){return t.apply(vo(this),e),Gt(Ch.get(this))}:function(...e){return Gt(t.apply(vo(this),e))}}function Oy(t){return typeof t=="function"?Dy(t):(t instanceof IDBTransaction&&ky(t),Ay(t,Cy())?new Proxy(t,Xo):t)}function Gt(t){if(t instanceof IDBRequest)return Ry(t);if(yo.has(t))return yo.get(t);const e=Oy(t);return e!==t&&(yo.set(t,e),qa.set(e,t)),e}const vo=t=>qa.get(t);function Py(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Gt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Gt(o.result),l.oldVersion,l.newVersion,Gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xy=["get","getKey","getAll","getAllKeys","count"],My=["put","add","delete","clear"],wo=new Map;function _c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wo.get(e))return wo.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=My.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||xy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return wo.set(e,r),r}Ny(t=>({...t,get:(e,n,i)=>_c(e,n)||t.get(e,n,i),has:(e,n)=>!!_c(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fy(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Fy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jo="@firebase/app",Ec="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new za("@firebase/app"),Uy="@firebase/app-compat",Vy="@firebase/analytics-compat",$y="@firebase/analytics",By="@firebase/app-check-compat",jy="@firebase/app-check",Hy="@firebase/auth",Ky="@firebase/auth-compat",zy="@firebase/database",qy="@firebase/database-compat",Wy="@firebase/functions",Gy="@firebase/functions-compat",Qy="@firebase/installations",Xy="@firebase/installations-compat",Jy="@firebase/messaging",Yy="@firebase/messaging-compat",Zy="@firebase/performance",ev="@firebase/performance-compat",tv="@firebase/remote-config",nv="@firebase/remote-config-compat",iv="@firebase/storage",sv="@firebase/storage-compat",rv="@firebase/firestore",ov="@firebase/firestore-compat",av="firebase",lv="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="[DEFAULT]",cv={[Jo]:"fire-core",[Uy]:"fire-core-compat",[$y]:"fire-analytics",[Vy]:"fire-analytics-compat",[jy]:"fire-app-check",[By]:"fire-app-check-compat",[Hy]:"fire-auth",[Ky]:"fire-auth-compat",[zy]:"fire-rtdb",[qy]:"fire-rtdb-compat",[Wy]:"fire-fn",[Gy]:"fire-fn-compat",[Qy]:"fire-iid",[Xy]:"fire-iid-compat",[Jy]:"fire-fcm",[Yy]:"fire-fcm-compat",[Zy]:"fire-perf",[ev]:"fire-perf-compat",[tv]:"fire-rc",[nv]:"fire-rc-compat",[iv]:"fire-gcs",[sv]:"fire-gcs-compat",[rv]:"fire-fst",[ov]:"fire-fst-compat","fire-js":"fire-js",[av]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Map,Zo=new Map;function uv(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jn(t){const e=t.name;if(Zo.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,t);for(const n of Qs.values())uv(n,t);return!0}function Wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qt=new Xi("app","Firebase",hv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=lv;function Rh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Yo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(n||(n=ty()),!n)throw Qt.create("no-options");const r=Qs.get(s);if(r){if(Gs(n,r.options)&&Gs(i,r.config))return r;throw Qt.create("duplicate-app",{appName:s})}const o=new _y(s);for(const l of Zo.values())o.addComponent(l);const a=new fv(n,i,o);return Qs.set(s,a),a}function kh(t=Yo){const e=Qs.get(t);if(!e&&t===Yo)return Rh();if(!e)throw Qt.create("no-app",{appName:t});return e}function Xt(t,e,n){var i;let s=(i=cv[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}Jn(new bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebase-heartbeat-database",pv=1,Li="firebase-heartbeat-store";let _o=null;function Nh(){return _o||(_o=Py(dv,pv,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Li)}}}).catch(t=>{throw Qt.create("idb-open",{originalErrorMessage:t.message})})),_o}async function gv(t){try{return(await Nh()).transaction(Li).objectStore(Li).get(Dh(t))}catch(e){if(e instanceof Ut)An.warn(e.message);else{const n=Qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Ic(t,e){try{const i=(await Nh()).transaction(Li,"readwrite");return await i.objectStore(Li).put(e,Dh(t)),i.done}catch(n){if(n instanceof Ut)An.warn(n.message);else{const i=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(i.message)}}}function Dh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=1024,yv=30*24*60*60*1e3;class vv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _v(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=yv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:i}=wv(this._heartbeatsCache.heartbeats),s=Ws(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Tc(){return new Date().toISOString().substring(0,10)}function wv(t,e=mv){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),bc(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class _v{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ly()?cy().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bc(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){Jn(new bn("platform-logger",e=>new Ly(e),"PRIVATE")),Jn(new bn("heartbeat",e=>new vv(e),"PRIVATE")),Xt(Jo,Ec,t),Xt(Jo,Ec,"esm2017"),Xt("fire-js","")}Ev("");var Iv="firebase",Tv="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(Iv,Tv,"app");var bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,Ga=Ga||{},M=bv||self;function Xs(){}function Nr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Av(t){return Object.prototype.hasOwnProperty.call(t,Eo)&&t[Eo]||(t[Eo]=++Cv)}var Eo="closure_uid_"+(1e9*Math.random()>>>0),Cv=0;function Sv(t,e,n){return t.call.apply(t.bind,arguments)}function Rv(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Pe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pe=Sv:Pe=Rv,Pe.apply(null,arguments)}function Ts(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Te(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function sn(){this.s=this.s,this.o=this.o}var kv=0;sn.prototype.s=!1;sn.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),kv!=0)&&Av(this)};sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oh=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qa(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ac(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Nr(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Nv=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",Xs,e),M.removeEventListener("test",Xs,e)}catch{}return t}();function Js(t){return/^[\s\xa0]*$/.test(t)}var Cc=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Io(t,e){return t<e?-1:t>e?1:0}function Dr(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function mt(t){return Dr().indexOf(t)!=-1}function Xa(t){return Xa[" "](t),t}Xa[" "]=Xs;function Ph(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var Dv=mt("Opera"),Yn=mt("Trident")||mt("MSIE"),xh=mt("Edge"),ea=xh||Yn,Mh=mt("Gecko")&&!(Dr().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),Ov=Dr().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function Lh(){var t=M.document;return t?t.documentMode:void 0}var Ys;e:{var To="",bo=function(){var t=Dr();if(Mh)return/rv:([^\);]+)(\)|;)/.exec(t);if(xh)return/Edge\/([\d\.]+)/.exec(t);if(Yn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ov)return/WebKit\/(\S+)/.exec(t);if(Dv)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bo&&(To=bo?bo[1]:""),Yn){var Ao=Lh();if(Ao!=null&&Ao>parseFloat(To)){Ys=String(Ao);break e}}Ys=To}var Pv={};function xv(){return Ph(Pv,9,function(){let t=0;const e=Cc(String(Ys)).split("."),n=Cc("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Io(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Io(s[2].length==0,r[2].length==0)||Io(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var ta;if(M.document&&Yn){var Sc=Lh();ta=Sc||parseInt(Ys,10)||void 0}else ta=void 0;var Mv=ta;function Fi(t,e){if(xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mh){e:{try{Xa(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Lv[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Fi.$.h.call(this)}}Te(Fi,xe);var Lv={2:"touch",3:"pen",4:"mouse"};Fi.prototype.h=function(){Fi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zi="closure_listenable_"+(1e6*Math.random()|0),Fv=0;function Uv(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++Fv,this.fa=this.ia=!1}function Or(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ja(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Fh(t){const e={};for(const n in t)e[n]=t[n];return e}const Rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uh(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Rc.length;r++)n=Rc[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Pr(t){this.src=t,this.g={},this.h=0}Pr.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ia(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Uv(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function na(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Oh(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Or(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ia(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var Ya="closure_lm_"+(1e6*Math.random()|0),Co={};function Vh(t,e,n,i,s){if(i&&i.once)return Bh(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Vh(t,e[r],n,i,s);return null}return n=tl(n),t&&t[Zi]?t.O(e,n,Yi(i)?!!i.capture:!!i,s):$h(t,e,n,!1,i,s)}function $h(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Yi(s)?!!s.capture:!!s,a=el(t);if(a||(t[Ya]=a=new Pr(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=Vv(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Nv||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Hh(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Vv(){function t(n){return e.call(t.src,t.listener,n)}const e=$v;return t}function Bh(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Bh(t,e[r],n,i,s);return null}return n=tl(n),t&&t[Zi]?t.P(e,n,Yi(i)?!!i.capture:!!i,s):$h(t,e,n,!0,i,s)}function jh(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)jh(t,e[r],n,i,s);else i=Yi(i)?!!i.capture:!!i,n=tl(n),t&&t[Zi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ia(r,n,i,s),-1<n&&(Or(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=el(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ia(e,n,i,s)),(n=-1<t?e[t]:null)&&Za(n))}function Za(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Zi])na(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Hh(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=el(e))?(na(n,t),n.h==0&&(n.src=null,e[Ya]=null)):Or(t)}}}function Hh(t){return t in Co?Co[t]:Co[t]="on"+t}function $v(t,e){if(t.fa)t=!0;else{e=new Fi(e,this);var n=t.listener,i=t.la||t.src;t.ia&&Za(t),t=n.call(i,e)}return t}function el(t){return t=t[Ya],t instanceof Pr?t:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function tl(t){return typeof t=="function"?t:(t[So]||(t[So]=function(e){return t.handleEvent(e)}),t[So])}function Ee(){sn.call(this),this.i=new Pr(this),this.S=this,this.J=null}Te(Ee,sn);Ee.prototype[Zi]=!0;Ee.prototype.removeEventListener=function(t,e,n,i){jh(this,t,e,n,i)};function Se(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new xe(e,t);else if(e instanceof xe)e.target=e.target||t;else{var s=e;e=new xe(i,t),Uh(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=bs(o,i,!0,e)&&s}if(o=e.g=t,s=bs(o,i,!0,e)&&s,s=bs(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=bs(o,i,!1,e)&&s}Ee.prototype.N=function(){if(Ee.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Or(n[i]);delete t.g[e],t.h--}}this.J=null};Ee.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};Ee.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function bs(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&na(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var nl=M.JSON.stringify;function Bv(){var t=qh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jv{constructor(){this.h=this.g=null}add(e,n){const i=Kh.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Kh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Hv,t=>t.reset());class Hv{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kv(t){M.setTimeout(()=>{throw t},0)}function zh(t,e){sa||zv(),ra||(sa(),ra=!0),qh.add(t,e)}var sa;function zv(){var t=M.Promise.resolve(void 0);sa=function(){t.then(qv)}}var ra=!1,qh=new jv;function qv(){for(var t;t=Bv();){try{t.h.call(t.g)}catch(n){Kv(n)}var e=Kh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ra=!1}function xr(t,e){Ee.call(this),this.h=t||1,this.g=e||M,this.j=Pe(this.qb,this),this.l=Date.now()}Te(xr,Ee);C=xr.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Se(this,"tick"),this.ga&&(il(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function il(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}C.N=function(){xr.$.N.call(this),il(this),delete this.g};function sl(t,e,n){if(typeof t=="function")n&&(t=Pe(t,n));else if(t&&typeof t.handleEvent=="function")t=Pe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function Wh(t){t.g=sl(()=>{t.g=null,t.i&&(t.i=!1,Wh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Wv extends sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wh(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(t){sn.call(this),this.h=t,this.g={}}Te(Ui,sn);var kc=[];function Gh(t,e,n,i){Array.isArray(n)||(n&&(kc[0]=n.toString()),n=kc);for(var s=0;s<n.length;s++){var r=Vh(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qh(t){Ja(t.g,function(e,n){this.g.hasOwnProperty(n)&&Za(e)},t),t.g={}}Ui.prototype.N=function(){Ui.$.N.call(this),Qh(this)};Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Mr(){this.g=!0}Mr.prototype.Ea=function(){this.g=!1};function Gv(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Qv(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function Fn(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jv(t,n)+(i?" "+i:"")})}function Xv(t,e){t.info(function(){return"TIMEOUT: "+e})}Mr.prototype.info=function(){};function Jv(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return nl(n)}catch{return e}}var Nn={},Nc=null;function Lr(){return Nc=Nc||new Ee}Nn.Ta="serverreachability";function Xh(t){xe.call(this,Nn.Ta,t)}Te(Xh,xe);function Vi(t){const e=Lr();Se(e,new Xh(e))}Nn.STAT_EVENT="statevent";function Jh(t,e){xe.call(this,Nn.STAT_EVENT,t),this.stat=e}Te(Jh,xe);function $e(t){const e=Lr();Se(e,new Jh(e,t))}Nn.Ua="timingevent";function Yh(t,e){xe.call(this,Nn.Ua,t),this.size=e}Te(Yh,xe);function es(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var Fr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rl(){}rl.prototype.h=null;function Dc(t){return t.h||(t.h=t.i())}function ef(){}var ts={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ol(){xe.call(this,"d")}Te(ol,xe);function al(){xe.call(this,"c")}Te(al,xe);var oa;function Ur(){}Te(Ur,rl);Ur.prototype.g=function(){return new XMLHttpRequest};Ur.prototype.i=function(){return{}};oa=new Ur;function ns(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ui(this),this.P=Yv,t=ea?125:void 0,this.V=new xr(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new tf}function tf(){this.i=null,this.g="",this.h=!1}var Yv=45e3,aa={},Zs={};C=ns.prototype;C.setTimeout=function(t){this.P=t};function la(t,e,n){t.L=1,t.v=$r(Pt(e)),t.s=n,t.S=!0,nf(t,null)}function nf(t,e){t.G=Date.now(),is(t),t.A=Pt(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),hf(n.i,"t",i),t.C=0,n=t.l.I,t.h=new tf,t.g=Of(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Wv(Pe(t.Pa,t,t.g),t.O)),Gh(t.U,t.g,"readystatechange",t.nb),e=t.I?Fh(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Vi(),Gv(t.j,t.u,t.A,t.m,t.W,t.s)}C.nb=function(t){t=t.target;const e=this.M;e&&Ct(t)==3?e.l():this.Pa(t)};C.Pa=function(t){try{if(t==this.g)e:{const u=Ct(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||ea||this.g&&(this.h.h||this.g.ja()||Mc(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?Vi(3):Vi(2)),Vr(this);var n=this.g.da();this.aa=n;t:if(sf(this)){var i=Mc(this.g);t="";var s=i.length,r=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),Ai(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Qv(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Js(a)){var c=a;break t}}c=null}if(n=c)Fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ca(this,n);else{this.i=!1,this.o=3,$e(12),gn(this),Ai(this);break e}}this.S?(rf(this,u,o),ea&&this.i&&u==3&&(Gh(this.U,this.V,"tick",this.mb),this.V.start())):(Fn(this.j,this.m,o,null),ca(this,o)),u==4&&gn(this),this.i&&!this.J&&(u==4?Rf(this.l,this):(this.i=!1,is(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),gn(this),Ai(this)}}}catch{}finally{}};function sf(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function rf(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=Zv(t,n),s==Zs){e==4&&(t.o=4,$e(14),i=!1),Fn(t.j,t.m,null,"[Incomplete Response]");break}else if(s==aa){t.o=4,$e(15),Fn(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Fn(t.j,t.m,s,null),ca(t,s);sf(t)&&s!=Zs&&s!=aa&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$e(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),pl(e),e.L=!0,$e(11))):(Fn(t.j,t.m,n,"[Invalid Chunked Response]"),gn(t),Ai(t))}C.mb=function(){if(this.g){var t=Ct(this.g),e=this.g.ja();this.C<e.length&&(Vr(this),rf(this,t,e),this.i&&t!=4&&is(this))}};function Zv(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Zs:(n=Number(e.substring(n,i)),isNaN(n)?aa:(i+=1,i+n>e.length?Zs:(e=e.substr(i,n),t.C=i+n,e)))}C.cancel=function(){this.J=!0,gn(this)};function is(t){t.Y=Date.now()+t.P,of(t,t.P)}function of(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=es(Pe(t.lb,t),e)}function Vr(t){t.B&&(M.clearTimeout(t.B),t.B=null)}C.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Xv(this.j,this.A),this.L!=2&&(Vi(),$e(17)),gn(this),this.o=2,Ai(this)):of(this,this.Y-t)};function Ai(t){t.l.H==0||t.J||Rf(t.l,t)}function gn(t){Vr(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,il(t.V),Qh(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function ca(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ua(n.h,t))){if(!t.K&&ua(n.h,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nr(n),Hr(n);else break e;dl(n),$e(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=es(Pe(n.ib,n),6e3));if(1>=pf(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else mn(n,11)}else if((t.K||n.g==t)&&nr(n),!Js(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const u=c[3];u!=null&&(n.qa=u,n.j.info("VER="+n.qa));const d=c[4];d!=null&&(n.Ga=d,n.j.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const E=t.g;if(E){const R=E.g?E.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var r=i.h;r.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ll(r,r.h),r.h=null))}if(i.F){const b=E.g?E.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(i.Da=b,oe(i.G,i.F,b))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Df(i,i.I?i.oa:null,i.Y),o.K){gf(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Vr(a),is(a)),i.g=o}else Cf(i);0<n.i.length&&Kr(n)}else c[0]!="stop"&&c[0]!="close"||mn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?mn(n,7):fl(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}Vi(4)}catch{}}function ew(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Nr(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function tw(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Nr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function af(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Nr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tw(t),i=ew(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var lf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function En(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof En){this.h=e!==void 0?e:t.h,er(this,t.j),this.s=t.s,this.g=t.g,tr(this,t.m),this.l=t.l,e=t.i;var n=new $i;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Oc(this,n),this.o=t.o}else t&&(n=String(t).match(lf))?(this.h=!!e,er(this,n[1]||"",!0),this.s=Ei(n[2]||""),this.g=Ei(n[3]||"",!0),tr(this,n[4]),this.l=Ei(n[5]||"",!0),Oc(this,n[6]||"",!0),this.o=Ei(n[7]||"")):(this.h=!!e,this.i=new $i(null,this.h))}En.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ii(e,Pc,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ii(e,Pc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ii(n,n.charAt(0)=="/"?rw:sw,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ii(n,aw)),t.join("")};function Pt(t){return new En(t)}function er(t,e,n){t.j=n?Ei(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oc(t,e,n){e instanceof $i?(t.i=e,lw(t.i,t.h)):(n||(e=Ii(e,ow)),t.i=new $i(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function $r(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ei(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ii(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,iw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function iw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pc=/[#\/\?@]/g,sw=/[#\?:]/g,rw=/[#\?]/g,ow=/[#\?@]/g,aw=/#/g;function $i(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&nw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=$i.prototype;C.add=function(t,e){rn(this),this.i=null,t=ui(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cf(t,e){rn(t),e=ui(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uf(t,e){return rn(t),e=ui(t,e),t.g.has(e)}C.forEach=function(t,e){rn(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};C.sa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};C.Z=function(t){rn(this);let e=[];if(typeof t=="string")uf(this,t)&&(e=e.concat(this.g.get(ui(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};C.set=function(t,e){return rn(this),this.i=null,t=ui(this,t),uf(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function hf(t,e,n){cf(t,e),0<n.length&&(t.i=null,t.g.set(ui(t,e),Qa(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ui(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lw(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(cf(this,i),hf(this,s,n))},t)),t.j=e}var cw=class{constructor(t,e){this.h=t,this.g=e}};function ff(t){this.l=t||uw,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uw=10;function df(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pf(t){return t.h?1:t.g?t.g.size:0}function ua(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ll(t,e){t.g?t.g.add(e):t.h=e}function gf(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ff.prototype.cancel=function(){if(this.i=mf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mf(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Qa(t.i)}function cl(){}cl.prototype.stringify=function(t){return M.JSON.stringify(t,void 0)};cl.prototype.parse=function(t){return M.JSON.parse(t,void 0)};function hw(){this.g=new cl}function fw(t,e,n){const i=n||"";try{af(t,function(s,r){let o=s;Yi(s)&&(o=nl(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function dw(t,e){const n=new Mr;if(M.Image){const i=new Image;i.onload=Ts(As,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ts(As,n,i,"TestLoadImage: error",!1,e),i.onabort=Ts(As,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ts(As,n,i,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function As(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ss(t){this.l=t.fc||null,this.j=t.ob||!1}Te(ss,rl);ss.prototype.g=function(){return new Br(this.l,this.j)};ss.prototype.i=function(t){return function(){return t}}({});function Br(t,e){Ee.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ul,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(Br,Ee);var ul=0;C=Br.prototype;C.open=function(t,e){if(this.readyState!=ul)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bi(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rs(this)),this.readyState=ul};C.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yf(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function yf(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}C.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rs(this):Bi(this),this.readyState==3&&yf(this)}};C.Za=function(t){this.g&&(this.response=this.responseText=t,rs(this))};C.Ya=function(t){this.g&&(this.response=t,rs(this))};C.ka=function(){this.g&&rs(this)};function rs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bi(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pw=M.JSON.parse;function de(t){Ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vf,this.L=this.M=!1}Te(de,Ee);var vf="",gw=/^https?$/i,mw=["POST","PUT"];C=de.prototype;C.Oa=function(t){this.M=t};C.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():oa.g(),this.C=this.u?Dc(this.u):Dc(oa),this.g.onreadystatechange=Pe(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){xc(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=M.FormData&&t instanceof M.FormData,!(0<=Oh(mw,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ef(this),0<this.B&&((this.L=yw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pe(this.ua,this)):this.A=sl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){xc(this,r)}};function yw(t){return Yn&&xv()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}C.ua=function(){typeof Ga<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Se(this,"timeout"),this.abort(8))};function xc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wf(t),jr(t)}function wf(t){t.F||(t.F=!0,Se(t,"complete"),Se(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Se(this,"complete"),Se(this,"abort"),jr(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jr(this,!0)),de.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?_f(this):this.kb())};C.kb=function(){_f(this)};function _f(t){if(t.h&&typeof Ga<"u"&&(!t.C[1]||Ct(t)!=4||t.da()!=2)){if(t.v&&Ct(t)==4)sl(t.La,0,t);else if(Se(t,"readystatechange"),Ct(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.I).match(lf)[1]||null;if(!s&&M.self&&M.self.location){var r=M.self.location.protocol;s=r.substr(0,r.length-1)}i=!gw.test(s?s.toLowerCase():"")}n=i}if(n)Se(t,"complete"),Se(t,"success");else{t.m=6;try{var o=2<Ct(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",wf(t)}}finally{jr(t)}}}}function jr(t,e){if(t.g){Ef(t);const n=t.g,i=t.C[0]?Xs:null;t.g=null,t.C=null,e||Se(t,"ready");try{n.onreadystatechange=i}catch{}}}function Ef(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}function Ct(t){return t.g?t.g.readyState:0}C.da=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pw(e)}};function Mc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vf:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function If(t){let e="";return Ja(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function hl(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=If(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function mi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Tf(t){this.Ga=0,this.i=[],this.j=new Mr,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mi("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mi("baseRetryDelayMs",5e3,t),this.hb=mi("retryDelaySeedMs",1e4,t),this.eb=mi("forwardChannelMaxRetries",2,t),this.xa=mi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new ff(t&&t.concurrentRequestLimit),this.Ja=new hw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}C=Tf.prototype;C.qa=8;C.H=1;function fl(t){if(bf(t),t.H==3){var e=t.W++,n=Pt(t.G);oe(n,"SID",t.J),oe(n,"RID",e),oe(n,"TYPE","terminate"),os(t,n),e=new ns(t,t.j,e,void 0),e.L=2,e.v=$r(Pt(n)),n=!1,M.navigator&&M.navigator.sendBeacon&&(n=M.navigator.sendBeacon(e.v.toString(),"")),!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=Of(e.l,null),e.g.ha(e.v)),e.G=Date.now(),is(e)}Nf(t)}function Hr(t){t.g&&(pl(t),t.g.cancel(),t.g=null)}function bf(t){Hr(t),t.u&&(M.clearTimeout(t.u),t.u=null),nr(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function Kr(t){df(t.h)||t.m||(t.m=!0,zh(t.Na,t),t.C=0)}function vw(t,e){return pf(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=es(Pe(t.Na,t,e),kf(t,t.C)),t.C++,!0)}C.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ns(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=Fh(r),Uh(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Af(this,s,e),n=Pt(this.G),oe(n,"RID",t),oe(n,"CVER",22),this.F&&oe(n,"X-HTTP-Session-Id",this.F),os(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(If(r)))+"&"+e:this.o&&hl(n,this.o,r)),ll(this.h,s),this.bb&&oe(n,"TYPE","init"),this.P?(oe(n,"$req",e),oe(n,"SID","null"),s.ba=!0,la(s,n,null)):la(s,n,e),this.H=2}}else this.H==3&&(t?Lc(this,t):this.i.length==0||df(this.h)||Lc(this))};function Lc(t,e){var n;e?n=e.m:n=t.W++;const i=Pt(t.G);oe(i,"SID",t.J),oe(i,"RID",n),oe(i,"AID",t.V),os(t,i),t.o&&t.s&&hl(i,t.o,t.s),n=new ns(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=Af(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ll(t.h,n),la(n,i,e)}function os(t,e){t.ma&&Ja(t.ma,function(n,i){oe(e,i,n)}),t.l&&af({},function(n,i){oe(e,i,n)})}function Af(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Pe(t.l.Va,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{fw(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,i}function Cf(t){t.g||t.u||(t.ba=1,zh(t.Ma,t),t.A=0)}function dl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=es(Pe(t.Ma,t),kf(t,t.A)),t.A++,!0)}C.Ma=function(){if(this.u=null,Sf(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=es(Pe(this.jb,this),t)}};C.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,$e(10),Hr(this),Sf(this))};function pl(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function Sf(t){t.g=new ns(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Pt(t.wa);oe(e,"RID","rpc"),oe(e,"SID",t.J),oe(e,"CI",t.M?"0":"1"),oe(e,"AID",t.V),oe(e,"TYPE","xmlhttp"),os(t,e),t.o&&t.s&&hl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=$r(Pt(e)),n.s=null,n.S=!0,nf(n,t)}C.ib=function(){this.v!=null&&(this.v=null,Hr(this),dl(this),$e(19))};function nr(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function Rf(t,e){var n=null;if(t.g==e){nr(t),pl(t),t.g=null;var i=2}else if(ua(t.h,e))n=e.F,gf(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Lr(),Se(i,new Yh(i,n)),Kr(t)}else Cf(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(i==1&&vw(t,e)||i==2&&dl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:mn(t,5);break;case 4:mn(t,10);break;case 3:mn(t,6);break;default:mn(t,2)}}}function kf(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function mn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Pe(t.pb,t);n||(n=new En("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||er(n,"https"),$r(n)),dw(n.toString(),i)}else $e(2);t.H=0,t.l&&t.l.za(e),Nf(t),bf(t)}C.pb=function(t){t?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))};function Nf(t){if(t.H=0,t.pa=[],t.l){const e=mf(t.h);(e.length!=0||t.i.length!=0)&&(Ac(t.pa,e),Ac(t.pa,t.i),t.h.i.length=0,Qa(t.i),t.i.length=0),t.l.ya()}}function Df(t,e,n){var i=n instanceof En?Pt(n):new En(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),tr(i,i.m);else{var s=M.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new En(null,void 0);i&&er(r,i),e&&(r.g=e),s&&tr(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&oe(i,n,e),oe(i,"VER",t.qa),os(t,i),i}function Of(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new de(new ss({ob:!0})):new de(t.va),e.Oa(t.I),e}function Pf(){}C=Pf.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.Va=function(){};function ir(){if(Yn&&!(10<=Number(Mv)))throw Error("Environmental error: no available transport.")}ir.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){Ee.call(this),this.g=new Tf(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Js(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Js(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new hi(this)}Te(Qe,Ee);Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;$e(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Df(t,null,t.Y),Kr(t)};Qe.prototype.close=function(){fl(this.g)};Qe.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=nl(t),t=n);e.i.push(new cw(e.fb++,t)),e.H==3&&Kr(e)};Qe.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,Qe.$.N.call(this)};function xf(t){ol.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Te(xf,ol);function Mf(){al.call(this),this.status=1}Te(Mf,al);function hi(t){this.g=t}Te(hi,Pf);hi.prototype.Ba=function(){Se(this.g,"a")};hi.prototype.Aa=function(t){Se(this.g,new xf(t))};hi.prototype.za=function(t){Se(this.g,new Mf)};hi.prototype.ya=function(){Se(this.g,"b")};function ww(){this.blockSize=-1}function Et(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Te(Et,ww);Et.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ro(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Et.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Ro(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Ro(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Ro(this,i),s=0;break}}this.h=s,this.i+=e};Et.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function X(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var _w={};function gl(t){return-128<=t&&128>t?Ph(_w,t,function(e){return new X([e|0],0>e?-1:0)}):new X([t|0],0>t?-1:0)}function yt(t){if(isNaN(t)||!isFinite(t))return Kn;if(0>t)return Ce(yt(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ha;return new X(e,0)}function Lf(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ce(Lf(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yt(Math.pow(e,8)),i=Kn,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=yt(Math.pow(e,r)),i=i.R(r).add(yt(o))):(i=i.R(n),i=i.add(yt(o)))}return i}var ha=4294967296,Kn=gl(0),fa=gl(1),Fc=gl(16777216);C=X.prototype;C.ea=function(){if(Je(this))return-Ce(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ha+i)*e,e*=ha}return t};C.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(St(this))return"0";if(Je(this))return"-"+Ce(this).toString(t);for(var e=yt(Math.pow(t,6)),n=this,i="";;){var s=rr(n,e).g;n=sr(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,St(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};C.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function St(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Je(t){return t.h==-1}C.X=function(t){return t=sr(this,t),Je(t)?-1:St(t)?0:1};function Ce(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new X(n,~t.h).add(fa)}C.abs=function(){return Je(this)?Ce(this):this};C.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new X(n,n[n.length-1]&-2147483648?-1:0)};function sr(t,e){return t.add(Ce(e))}C.R=function(t){if(St(this)||St(t))return Kn;if(Je(this))return Je(t)?Ce(this).R(Ce(t)):Ce(Ce(this).R(t));if(Je(t))return Ce(this.R(Ce(t)));if(0>this.X(Fc)&&0>t.X(Fc))return yt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*i+2*s]+=o*l,Cs(n,2*i+2*s),n[2*i+2*s+1]+=r*l,Cs(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Cs(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Cs(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new X(n,0)};function Cs(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function yi(t,e){this.g=t,this.h=e}function rr(t,e){if(St(e))throw Error("division by zero");if(St(t))return new yi(Kn,Kn);if(Je(t))return e=rr(Ce(t),e),new yi(Ce(e.g),Ce(e.h));if(Je(e))return e=rr(t,Ce(e)),new yi(Ce(e.g),e.h);if(30<t.g.length){if(Je(t)||Je(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fa,i=e;0>=i.X(t);)n=Uc(n),i=Uc(i);var s=xn(n,1),r=xn(i,1);for(i=xn(i,2),n=xn(n,2);!St(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=xn(i,1),n=xn(n,1)}return e=sr(t,s.R(e)),new yi(s,e)}for(s=Kn;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=yt(n),o=r.R(e);Je(o)||0<o.X(t);)n-=i,r=yt(n),o=r.R(e);St(r)&&(r=fa),s=s.add(r),t=sr(t,o)}return new yi(s,t)}C.gb=function(t){return rr(this,t).h};C.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new X(n,this.h&t.h)};C.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new X(n,this.h|t.h)};C.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new X(n,this.h^t.h)};function Uc(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new X(n,t.h)}function xn(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new X(s,t.h)}ir.prototype.createWebChannel=ir.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;Fr.NO_ERROR=0;Fr.TIMEOUT=8;Fr.HTTP_ERROR=6;Zh.COMPLETE="complete";ef.EventType=ts;ts.OPEN="a";ts.CLOSE="b";ts.ERROR="c";ts.MESSAGE="d";Ee.prototype.listen=Ee.prototype.O;de.prototype.listenOnce=de.prototype.P;de.prototype.getLastError=de.prototype.Sa;de.prototype.getLastErrorCode=de.prototype.Ia;de.prototype.getStatus=de.prototype.da;de.prototype.getResponseJson=de.prototype.Wa;de.prototype.getResponseText=de.prototype.ja;de.prototype.send=de.prototype.ha;de.prototype.setWithCredentials=de.prototype.Oa;Et.prototype.digest=Et.prototype.l;Et.prototype.reset=Et.prototype.reset;Et.prototype.update=Et.prototype.j;X.prototype.add=X.prototype.add;X.prototype.multiply=X.prototype.R;X.prototype.modulo=X.prototype.gb;X.prototype.compare=X.prototype.X;X.prototype.toNumber=X.prototype.ea;X.prototype.toString=X.prototype.toString;X.prototype.getBits=X.prototype.D;X.fromNumber=yt;X.fromString=Lf;var Ew=function(){return new ir},Iw=function(){return Lr()},ko=Fr,Tw=Zh,bw=Nn,Vc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Aw=ss,Ss=ef,Cw=de,Sw=X;const $c="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new za("@firebase/firestore");function Bc(){return Cn.logLevel}function O(t,...e){if(Cn.logLevel<=G.DEBUG){const n=e.map(ml);Cn.debug(`Firestore (${fi}): ${t}`,...n)}}function Sn(t,...e){if(Cn.logLevel<=G.ERROR){const n=e.map(ml);Cn.error(`Firestore (${fi}): ${t}`,...n)}}function or(t,...e){if(Cn.logLevel<=G.WARN){const n=e.map(ml);Cn.warn(`Firestore (${fi}): ${t}`,...n)}}function ml(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+t;throw Sn(e),new Error(e)}function Ie(t,e){t||z()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Ut{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class kw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nw{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new In;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ie(typeof i.accessToken=="string"),new Ff(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new ke(e)}}class Dw{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ow{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new Dw(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xw{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.T=n.token,new Pw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Mw(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function te(t,e){return t<e?-1:t>e?1:0}function Zn(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new we(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new we(0,0))}static max(){return new le(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,i){n===void 0?n=0:n>e.length&&z(),i===void 0?i=e.length-n:i>e.length-n&&z(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return ji.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ji?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends ji{construct(e,n,i){return new he(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new F(_.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new he(n)}static emptyPath(){return new he([])}}const Lw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends ji{construct(e,n,i){return new Oe(e,n,i)}static isValidIdentifier(e){return Lw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new F(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new F(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(he.fromString(e))}static fromName(e){return new j(he.fromString(e).popFirst(5))}static empty(){return new j(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new he(e.slice()))}}function Fw(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(i===1e9?new we(n+1,0):new we(n,i));return new en(s,j.empty(),e)}function Uw(t){return new en(t.readTime,t.key,-1)}class en{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new en(le.min(),j.empty(),-1)}static max(){return new en(le.max(),j.empty(),-1)}}function Vw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==$w)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,i)=>{n(e)})}static reject(e){return new w((n,i)=>{i(e)})}static waitFor(e){return new w((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=w.resolve(!1);for(const i of e)n=n.next(s=>s?w.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new w((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new w((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function zr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}$f.ct=-1;function yl(t){return t==null}function ar(t){return t===0&&1/t==-1/0}function jw(t){return typeof t=="number"&&Number.isInteger(t)&&!ar(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function as(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Bf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rs(this.root,e,this.comparator,!0)}}class Rs{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??be.RED,this.left=s??be.EMPTY,this.right=r??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new be(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,i,s){return this}insert(t,e,n){return new be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hc(this.data.getIterator())}getIteratorFrom(e){return new Hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new ot([])}unionWith(e){let n=new Be(Oe.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hw("Invalid base64 string: "+s):s}}(e);return new xt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const Kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=Kw.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hi(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jf(t){const e=t.mapValue.fields.__previous_value__;return vl(e)?jf(e):e}function lr(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class cr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vl(t)?4:qw(t)?9007199254740991:10:z()}function It(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lr(t).isEqual(lr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Rn(i.timestampValue),o=Rn(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Hi(i.bytesValue).isEqual(Hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ae(i.doubleValue),o=Ae(s.doubleValue);return r===o?ar(r)===ar(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Zn(t.arrayValue.values||[],e.arrayValue.values||[],It);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(jc(r)!==jc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!It(r[a],o[a])))return!1;return!0}(t,e);default:return z()}}function Ki(t,e){return(t.values||[]).find(n=>It(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=ei(t),i=ei(e);if(n!==i)return te(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Ae(s.integerValue||s.doubleValue),a=Ae(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kc(t.timestampValue,e.timestampValue);case 4:return Kc(lr(t),lr(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Hi(s),a=Hi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=te(o[l],a[l]);if(c!==0)return c}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=te(Ae(s.latitude),Ae(r.latitude));return o!==0?o:te(Ae(s.longitude),Ae(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ti(o[l],a[l]);if(c)return c}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===ks.mapValue&&r===ks.mapValue)return 0;if(s===ks.mapValue)return 1;if(r===ks.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=te(a[u],c[u]);if(d!==0)return d;const p=ti(o[a[u]],l[c[u]]);if(p!==0)return p}return te(a.length,c.length)}(t.mapValue,e.mapValue);default:throw z()}}function Kc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Rn(t),i=Rn(e),s=te(n.seconds,i.seconds);return s!==0?s:te(n.nanos,i.nanos)}function ni(t){return da(t)}function da(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Rn(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Hi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=da(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${da(i.fields[a])}`;return r+"}"}(t.mapValue):z();var e,n}function pa(t){return!!t&&"integerValue"in t}function wl(t){return!!t&&"arrayValue"in t}function Fs(t){return!!t&&"mapValue"in t}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return as(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Ci(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Fs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=Oe.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ci(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Fs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Fs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){as(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new it(Ci(this.value))}}function Hf(t){const e=[];return as(t.fields,(n,i)=>{const s=new Oe([n]);if(Fs(i)){const r=Hf(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,le.min(),le.min(),le.min(),it.empty(),0)}static newFoundDocument(e,n,i,s){return new tt(e,1,n,le.min(),i,s,0)}static newNoDocument(e,n){return new tt(e,2,n,le.min(),le.min(),it.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,le.min(),le.min(),it.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.position=e,this.inclusive=n}}function zc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=j.comparator(j.fromName(o.referenceValue),n.key):i=ti(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function qc(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!It(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ww(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{}class ve extends Kf{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Qw(e,n,i):n==="array-contains"?new Yw(e,i):n==="in"?new Zw(e,i):n==="not-in"?new e0(e,i):n==="array-contains-any"?new t0(e,i):new ve(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Xw(e,i):new Jw(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends Kf{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new tn(e,n)}matches(e){return zf(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zf(t){return t.op==="and"}function qf(t){return Gw(t)&&zf(t)}function Gw(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function ga(t){if(t instanceof ve)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(qf(t))return t.filters.map(e=>ga(e)).join(",");{const e=t.filters.map(n=>ga(n)).join(",");return`${t.op}(${e})`}}function Wf(t,e){return t instanceof ve?function(n,i){return i instanceof ve&&n.op===i.op&&n.field.isEqual(i.field)&&It(n.value,i.value)}(t,e):t instanceof tn?function(n,i){return i instanceof tn&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&Wf(r,i.filters[o]),!0):!1}(t,e):void z()}function Gf(t){return t instanceof ve?function(e){return`${e.field.canonicalString()} ${e.op} ${ni(e.value)}`}(t):t instanceof tn?function(e){return e.op.toString()+" {"+e.getFilters().map(Gf).join(" ,")+"}"}(t):"Filter"}class Qw extends ve{constructor(e,n,i){super(e,n,i),this.key=j.fromName(i.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xw extends ve{constructor(e,n){super(e,"in",n),this.keys=Qf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jw extends ve{constructor(e,n){super(e,"not-in",n),this.keys=Qf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>j.fromName(i.referenceValue))}class Yw extends ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wl(n)&&Ki(n.arrayValue,this.value)}}class Zw extends ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ki(this.value.arrayValue,n)}}class e0 extends ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ki(this.value.arrayValue,n)}}class t0 extends ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ki(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Wc(t,e=null,n=[],i=[],s=null,r=null,o=null){return new n0(t,e,n,i,s,r,o)}function _l(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>ga(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ni(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ni(i)).join(",")),e.ft=n}return e.ft}function El(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ww(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wf(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qc(t.startAt,e.startAt)&&qc(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function i0(t,e,n,i,s,r,o,a){return new qr(t,e,n,i,s,r,o,a)}function s0(t){return new qr(t)}function Gc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function o0(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function a0(t){return t.collectionGroup!==null}function zn(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=o0(e),i=r0(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new Si(n)),e.dt.push(new Si(Oe.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Si(Oe.keyField(),r))}}}return e.dt}function ii(t){const e=ne(t);if(!e._t)if(e.limitType==="F")e._t=Wc(e.path,e.collectionGroup,zn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of zn(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Si(r.field,o))}const i=e.endAt?new ur(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ur(e.startAt.position,e.startAt.inclusive):null;e._t=Wc(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function ma(t,e,n){return new qr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xf(t,e){return El(ii(t),ii(e))&&t.limitType===e.limitType}function Jf(t){return`${_l(ii(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Gf(i)).join(", ")}]`),yl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ni(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ni(i)).join(",")),`Target(${n})`}(ii(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of zn(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=zc(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,zn(n),i)||n.endAt&&!function(s,r,o){const a=zc(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,zn(n),i))}(t,e)}function l0(t){return(e,n)=>{let i=!1;for(const s of zn(t)){const r=c0(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function c0(t,e,n){const i=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?ti(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){as(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Bf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Ke(j.comparator);function hr(){return u0}const Yf=new Ke(j.comparator);function Ns(...t){let e=Yf;for(const n of t)e=e.insert(n.key,n);return e}function Zf(t){let e=Yf;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function yn(){return Ri()}function ed(){return Ri()}function Ri(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const h0=new Ke(j.comparator),f0=new Be(j.comparator);function Ne(...t){let e=f0;for(const n of t)e=e.add(n);return e}const d0=new Be(te);function p0(){return d0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ar(e)?"-0":e}}function nd(t){return{integerValue:""+t}}function g0(t,e){return jw(e)?nd(e):td(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._=void 0}}function m0(t,e,n){return t instanceof fr?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&vl(s)&&(s=jf(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof zi?sd(t,e):t instanceof qi?rd(t,e):function(i,s){const r=id(i,s),o=Xc(r)+Xc(i.wt);return pa(r)&&pa(i.wt)?nd(o):td(i.serializer,o)}(t,e)}function y0(t,e,n){return t instanceof zi?sd(t,e):t instanceof qi?rd(t,e):n}function id(t,e){return t instanceof dr?pa(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class fr extends Wr{}class zi extends Wr{constructor(e){super(),this.elements=e}}function sd(t,e){const n=od(e);for(const i of t.elements)n.some(s=>It(s,i))||n.push(i);return{arrayValue:{values:n}}}class qi extends Wr{constructor(e){super(),this.elements=e}}function rd(t,e){let n=od(e);for(const i of t.elements)n=n.filter(s=>!It(s,i));return{arrayValue:{values:n}}}class dr extends Wr{constructor(e,n){super(),this.serializer=e,this.wt=n}}function Xc(t){return Ae(t.integerValue||t.doubleValue)}function od(t){return wl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function v0(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof zi&&i instanceof zi||n instanceof qi&&i instanceof qi?Zn(n.elements,i.elements,It):n instanceof dr&&i instanceof dr?It(n.wt,i.wt):n instanceof fr&&i instanceof fr}(t.transform,e.transform)}class w0{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Us(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gr{}function ad(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new cd(t.key,Dt.none()):new ls(t.key,t.data,Dt.none());{const n=t.data,i=it.empty();let s=new Be(Oe.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Dn(t.key,i,new ot(s.toArray()),Dt.none())}}function _0(t,e,n){t instanceof ls?function(i,s,r){const o=i.value.clone(),a=Yc(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Dn?function(i,s,r){if(!Us(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Yc(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(ld(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function ki(t,e,n,i){return t instanceof ls?function(s,r,o,a){if(!Us(s.precondition,r))return o;const l=s.value.clone(),c=Zc(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof Dn?function(s,r,o,a){if(!Us(s.precondition,r))return o;const l=Zc(s.fieldTransforms,a,r),c=r.data;return c.setAll(ld(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Us(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function E0(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=id(i.transform,s||null);r!=null&&(n===null&&(n=it.empty()),n.set(i.field,r))}return n||null}function Jc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Zn(n,i,(s,r)=>v0(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ls extends Gr{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Dn extends Gr{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ld(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Yc(t,e,n){const i=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,y0(o,a,n[s]))}return i}function Zc(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,m0(r,o,e))}return i}class cd extends Gr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I0 extends Gr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&_0(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=ki(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=ki(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=ed();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=ad(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(n,i)=>Jc(n,i))&&Zn(this.baseMutations,e.baseMutations,(n,i)=>Jc(n,i))}}class Tl{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){Ie(e.mutations.length===i.length);let s=h0;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Tl(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,q;function A0(t){switch(t){default:return z();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function C0(t){if(t===void 0)return Sn("GRPC error has no .code"),_.UNKNOWN;switch(t){case ge.OK:return _.OK;case ge.CANCELLED:return _.CANCELLED;case ge.UNKNOWN:return _.UNKNOWN;case ge.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ge.INTERNAL:return _.INTERNAL;case ge.UNAVAILABLE:return _.UNAVAILABLE;case ge.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ge.NOT_FOUND:return _.NOT_FOUND;case ge.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ge.ABORTED:return _.ABORTED;case ge.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ge.DATA_LOSS:return _.DATA_LOSS;default:return z()}}(q=ge||(ge={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Sw([4294967295,4294967295],0);class S0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ya(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function k0(t,e){return ya(t,e.toTimestamp())}function qn(t){return Ie(!!t),le.fromTimestamp(function(e){const n=Rn(e);return new we(n.seconds,n.nanos)}(t))}function ud(t,e){return function(n){return new he(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function N0(t){const e=he.fromString(t);return Ie(U0(e)),e}function va(t,e){return ud(t.databaseId,e.path)}function D0(t){const e=N0(t);return e.length===4?he.emptyPath():P0(e)}function O0(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P0(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eu(t,e,n){return{name:va(t,e),fields:n.value.mapValue.fields}}function x0(t,e){let n;if(e instanceof ls)n={update:eu(t,e.key,e.value)};else if(e instanceof cd)n={delete:va(t,e.key)};else if(e instanceof Dn)n={update:eu(t,e.key,e.data),updateMask:F0(e.fieldMask)};else{if(!(e instanceof I0))return z();n={verify:va(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof fr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dr)return{fieldPath:r.field.canonicalString(),increment:o.wt};throw z()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:k0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z()}(t,e.precondition)),n}function M0(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?qn(i.updateTime):qn(s);return r.isEqual(le.min())&&(r=qn(s)),new w0(r,i.transformResults||[])}(n,e))):[]}function L0(t){let e=D0(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ie(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=hd(u);return d instanceof tn&&qf(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new Si(Mn(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,yl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,p=u.values||[];return new ur(p,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,p=u.values||[];return new ur(p,d)}(n.endAt)),i0(e,s,o,r,a,"F",l,c)}function hd(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Mn(e.unaryFilter.field);return ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Mn(e.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Mn(e.unaryFilter.field);return ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Mn(e.unaryFilter.field);return ve.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return ve.create(Mn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return tn.create(e.compositeFilter.filters.map(n=>hd(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function Mn(t){return Oe.fromServerFormat(t.fieldPath)}function F0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.le=e}}function $0(t){const e=L0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ma(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.sn=new j0}addToCollectionParentIndex(e,n){return this.sn.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(en.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(en.min())}updateCollectionGroup(e,n,i){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class j0{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Be(he.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Be(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new si(0)}static kn(){return new si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?w.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&ki(i.mutation,s,ot.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,n,i=Ne()){const s=yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Ns();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=yn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,Ne()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=hr();const o=Ri(),a=Ri();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Dn)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ki(u.mutation,c,u.mutation.getFieldMask(),we.now())):o.set(c.key,ot.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new K0(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Ri();let s=new Ke((o,a)=>o-a),r=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||ot.empty();u=a.applyToLocalView(c,u),i.set(l,u);const d=(s.get(a.batchId)||Ne()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=ed();u.forEach(p=>{if(!r.has(p)){const E=ad(n.get(p),i.get(p));E!==null&&d.set(p,E),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return w.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):a0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):w.resolve(yn());let a=-1,l=r;return o.next(c=>w.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?w.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,Ne())).next(u=>({batchId:a,changes:Zf(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(i=>{let s=Ns();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Ns();return this.indexManager.getCollectionParents(e,s).next(o=>w.forEach(o,a=>{const l=function(c,u){return new qr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,tt.newInvalidDocument(c)))});let o=Ns();return r.forEach((a,l)=>{const c=s.get(a);c!==void 0&&ki(c.mutation,l,ot.empty(),we.now()),Il(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return w.resolve(this.us.get(n))}saveBundleMetadata(e,n){var i;return this.us.set(n.id,{id:(i=n).id,version:i.version,createTime:qn(i.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(i){return{name:i.name,query:$0(i.bundledQuery),readTime:qn(i.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(){this.overlays=new Ke(j.comparator),this.hs=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const i=yn();return w.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.de(e,n,r)}),w.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.hs.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hs.delete(i)),w.resolve()}getOverlaysForCollection(e,n,i){const s=yn(),r=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Ke((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=yn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=yn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return w.resolve(a)}de(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.hs.get(s.largestBatchId).delete(i.key);this.hs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new b0(n,i));let r=this.hs.get(n);r===void 0&&(r=Ne(),this.hs.set(n,r)),this.hs.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.ls=new Be(ye.fs),this.ds=new Be(ye._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const i=new ye(e,n);this.ls=this.ls.add(i),this.ds=this.ds.add(i)}ws(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gs(new ye(e,n))}ys(e,n){e.forEach(i=>this.removeReference(i,n))}ps(e){const n=new j(new he([])),i=new ye(n,e),s=new ye(n,e+1),r=[];return this.ds.forEachInRange([i,s],o=>{this.gs(o),r.push(o.key)}),r}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new j(new he([])),i=new ye(n,e),s=new ye(n,e+1);let r=Ne();return this.ds.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ye(e,0),i=this.ls.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ye{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return j.comparator(e.key,n.key)||te(e.Es,n.Es)}static _s(e,n){return te(e.Es,n.Es)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new Be(ye.fs)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new T0(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new ye(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Ps(i),r=s<0?0:s;return w.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ye(n,0),s=new ye(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.vs(o.Es);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Be(te);return n.forEach(s=>{const r=new ye(s,0),o=new ye(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.Es)})}),w.resolve(this.bs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;j.isDocumentKey(r)||(r=r.child(""));const o=new ye(new j(r),0);let a=new Be(te);return this.Rs.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.Es)),!0)},o),w.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(i=>{const s=this.vs(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return w.forEach(n.mutations,s=>{const r=new ye(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Dn(e){}containsKey(e,n){const i=new ye(n,0),s=this.Rs.firstAfterOrEqual(i);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.Ss=e,this.docs=new Ke(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ss(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return w.resolve(i?i.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let i=hr();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():tt.newInvalidDocument(s))}),w.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=hr();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Vw(Uw(u),i)<=0||(s.has(u.key)||Il(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(e,n,i,s){z()}Ds(e,n){return w.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new X0(this)}getSize(e){return w.resolve(this.size)}}class X0 extends H0{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(i)}),w.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.persistence=e,this.Cs=new di(n=>_l(n),El),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.xs=0,this.Ns=new bl,this.targetCount=0,this.ks=si.Nn()}forEachTarget(e,n){return this.Cs.forEach((i,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.xs&&(this.xs=n),w.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new si(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.$n(n),w.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(r).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cs.get(n)||null;return w.resolve(i)}addMatchingKeys(e,n,i){return this.Ns.ws(n,i),w.resolve()}removeMatchingKeys(e,n,i){this.Ns.ys(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),w.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ns.Ts(n);return w.resolve(i)}containsKey(e,n){return w.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.Ms={},this.overlays={},this.Os=new $f(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new J0(this),this.indexManager=new B0,this.remoteDocumentCache=function(i){return new Q0(i)}(i=>this.referenceDelegate.Bs(i)),this.serializer=new V0(n),this.Ls=new q0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ms[e.toKey()];return i||(i=new G0(n,this.referenceDelegate),this.Ms[e.toKey()]=i),i}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,i){O("MemoryPersistence","Starting transaction:",e);const s=new Z0(this.Os.next());return this.referenceDelegate.qs(),i(s).next(r=>this.referenceDelegate.Us(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ks(e,n){return w.or(Object.values(this.Ms).map(i=>()=>i.containsKey(e,n)))}}class Z0 extends Bw{constructor(e){super(),this.currentSequenceNumber=e}}class Al{constructor(e){this.persistence=e,this.Gs=new bl,this.Qs=null}static js(e){return new Al(e)}get zs(){if(this.Qs)return this.Qs;throw z()}addReference(e,n,i){return this.Gs.addReference(i,n),this.zs.delete(i.toString()),w.resolve()}removeReference(e,n,i){return this.Gs.removeReference(i,n),this.zs.add(i.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.zs.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.zs,i=>{const s=j.fromPath(i);return this.Ws(e,s).next(r=>{r||n.removeEntry(s,le.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(i=>{i?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return w.or([()=>w.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.$i=i,this.Fi=s}static Bi(e,n){let i=Ne(),s=Ne();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Cl(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ui(e,n).next(r=>r||this.Ki(e,n,s,i)).next(r=>r||this.Gi(e,n))}Ui(e,n){if(Gc(n))return w.resolve(null);let i=ii(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ma(n,null,"F"),i=ii(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=Ne(...r);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Qi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(e,ma(n,null,"F")):this.zi(e,c,n,l)}))})))}Ki(e,n,i,s){return Gc(n)||s.isEqual(le.min())?this.Gi(e,n):this.qi.getDocuments(e,i).next(r=>{const o=this.Qi(n,r);return this.ji(n,o,i,s)?this.Gi(e,n):(Bc()<=G.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qc(n)),this.zi(e,o,n,Fw(s,-1)))})}Qi(e,n){let i=new Be(l0(e));return n.forEach((s,r)=>{Il(e,r)&&(i=i.add(r))}),i}ji(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Gi(e,n){return Bc()<=G.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.qi.getDocumentsMatchingQuery(e,n,en.min())}zi(e,n,i,s){return this.qi.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,i,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new Ke(te),this.Ji=new di(r=>_l(r),El),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(i)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z0(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function n_(t,e,n,i){return new t_(t,e,n,i)}async function fd(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Zi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=Ne();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({tr:c,removedBatchIds:o,addedBatchIds:a}))})})}function i_(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let p=w.resolve();return d.forEach(E=>{p=p.next(()=>c.getEntry(a,E)).next(R=>{const b=l.docVersions.get(E);Ie(b!==null),R.version.compareTo(b)<0&&(u.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),c.addEntry(R)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=Ne();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function s_(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function r_(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class tu{constructor(){this.activeTargetIds=p0()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o_{constructor(){this.Wr=new tu,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,i){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new tu,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds=null;function No(){return Ds===null?Ds=268435456+Math.round(2147483648*Math.random()):Ds++,"0x"+Ds.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class u_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,i,s,r){const o=No(),a=this.Io(e,n);O("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const l={};return this.To(l,s,r),this.Eo(e,a,l,i).then(c=>(O("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw or("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",i),c})}Ao(e,n,i,s,r,o){return this.po(e,n,i,s,r)}To(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+fi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}Io(e,n){const i=l_[e];return`${this.wo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,i,s){const r=No();return new Promise((o,a)=>{const l=new Cw;l.setWithCredentials(!0),l.listenOnce(Tw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ko.NO_ERROR:const u=l.getResponseJson();O(Re,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case ko.TIMEOUT:O(Re,`RPC '${e}' ${r} timed out`),a(new F(_.DEADLINE_EXCEEDED,"Request time out"));break;case ko.HTTP_ERROR:const d=l.getStatus();if(O(Re,`RPC '${e}' ${r} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const E=p==null?void 0:p.error;if(E&&E.status&&E.message){const R=function(b){const B=b.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(B)>=0?B:_.UNKNOWN}(E.status);a(new F(R,E.message))}else a(new F(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(_.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{O(Re,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(s);O(Re,`RPC '${e}' ${r} sending request:`,s),l.send(n,"POST",c,i,15)})}Ro(e,n,i){const s=No(),r=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ew(),a=Iw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new Aw({})),this.To(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=r.join("");O(Re,`Creating RPC '${e}' stream ${s}: ${c}`,l);const u=o.createWebChannel(c,l);let d=!1,p=!1;const E=new c_({io:b=>{p?O(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(d||(O(Re,`Opening RPC '${e}' stream ${s} transport.`),u.open(),d=!0),O(Re,`RPC '${e}' stream ${s} sending:`,b),u.send(b))},ro:()=>u.close()}),R=(b,B,U)=>{b.listen(B,ie=>{try{U(ie)}catch(P){setTimeout(()=>{throw P},0)}})};return R(u,Ss.EventType.OPEN,()=>{p||O(Re,`RPC '${e}' stream ${s} transport opened.`)}),R(u,Ss.EventType.CLOSE,()=>{p||(p=!0,O(Re,`RPC '${e}' stream ${s} transport closed`),E.fo())}),R(u,Ss.EventType.ERROR,b=>{p||(p=!0,or(Re,`RPC '${e}' stream ${s} transport errored:`,b),E.fo(new F(_.UNAVAILABLE,"The operation could not be completed")))}),R(u,Ss.EventType.MESSAGE,b=>{var B;if(!p){const U=b.data[0];Ie(!!U);const ie=U,P=ie.error||((B=ie[0])===null||B===void 0?void 0:B.error);if(P){O(Re,`RPC '${e}' stream ${s} received error:`,P);const J=P.status;let ae=function(qe){const V=ge[qe];if(V!==void 0)return C0(V)}(J),ze=P.message;ae===void 0&&(ae=_.INTERNAL,ze="Unknown error status: "+J+" with message "+P.message),p=!0,E.fo(new F(ae,ze)),u.close()}else O(Re,`RPC '${e}' stream ${s} received:`,U),E._o(U)}}),R(a,bw.STAT_EVENT,b=>{b.stat===Vc.PROXY?O(Re,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Vc.NOPROXY&&O(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.lo()},0),E}}function Do(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return new S0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,i=1e3,s=1.5,r=6e4){this.si=e,this.timerId=n,this.vo=i,this.Po=s,this.bo=r,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),i=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-i);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,i,s,r,o,a,l){this.si=e,this.Mo=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new dd(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.$o===n&&this.Xo(i,s)},i=>{e(()=>{const s=new F(_.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Zo(s)})})}Xo(e,n){const i=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{i(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{i(()=>this.Zo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f_ extends h_{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=M0(e.writeResults,e.commitTime),i=qn(e.commitTime);return this.listener.uu(i,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=O0(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>x0(this.serializer,i))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_ extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new F(_.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.po(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(_.UNKNOWN,s.toString())})}Ao(e,n,i,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Ao(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new F(_.UNKNOWN,r.toString())})}terminate(){this.hu=!0}}class p_{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Sn(n),this.wu=!1):O("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=r,this.vu.Jr(o=>{i.enqueueAndForget(async()=>{us(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l.Au.add(4),await cs(l),l.Pu.set("Unknown"),l.Au.delete(4),await Xr(l)}(this))})}),this.Pu=new p_(i,s)}}async function Xr(t){if(us(t))for(const e of t.Ru)await e(!0)}async function cs(t){for(const e of t.Ru)await e(!1)}function us(t){return ne(t).Au.size===0}async function pd(t,e,n){if(!zr(e))throw e;t.Au.add(1),await cs(t),t.Pu.set("Offline"),n||(n=()=>s_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Xr(t)})}function gd(t,e){return e().catch(n=>pd(t,n,e))}async function Jr(t){const e=ne(t),n=nn(e);let i=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;m_(e);)try{const s=await r_(e.localStore,i);if(s===null){e.Tu.length===0&&n.Qo();break}i=s.batchId,y_(e,s)}catch(s){await pd(e,s)}md(e)&&yd(e)}function m_(t){return us(t)&&t.Tu.length<10}function y_(t,e){t.Tu.push(e);const n=nn(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function md(t){return us(t)&&!nn(t).qo()&&t.Tu.length>0}function yd(t){nn(t).start()}async function v_(t){nn(t).au()}async function w_(t){const e=nn(t);for(const n of t.Tu)e.ou(n.mutations)}async function __(t,e,n){const i=t.Tu.shift(),s=Tl.from(i,e,n);await gd(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jr(t)}async function E_(t,e){e&&nn(t).ru&&await async function(n,i){if(s=i.code,A0(s)&&s!==_.ABORTED){const r=n.Tu.shift();nn(n).Go(),await gd(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Jr(n)}var s}(t,e),md(t)&&yd(t)}async function iu(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const i=us(n);n.Au.add(3),await cs(n),i&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Xr(n)}async function I_(t,e){const n=ne(t);e?(n.Au.delete(2),await Xr(n)):e||(n.Au.add(2),await cs(n),n.Pu.set("Unknown"))}function nn(t){return t.Su||(t.Su=function(e,n,i){const s=ne(e);return s.lu(),new f_(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{oo:v_.bind(null,t),co:E_.bind(null,t),cu:w_.bind(null,t),uu:__.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Jr(t)):(await t.Su.stop(),t.Tu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Sl(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vd(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),zr(t))return new F(_.UNAVAILABLE,`${e}: ${t}`);throw t}class T_{constructor(){this.queries=new di(e=>Jf(e),Xf),this.onlineState="Unknown",this.Nu=new Set}}function b_(t){t.Nu.forEach(e=>{e.next()})}class A_{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new di(a=>Jf(a),Xf),this._c=new Map,this.wc=new Set,this.mc=new Ke(j.comparator),this.gc=new Map,this.yc=new bl,this.Ic={},this.Tc=new Map,this.Ec=si.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function C_(t,e,n){const i=N_(t);try{const s=await function(r,o){const a=ne(r),l=we.now(),c=o.reduce((p,E)=>p.add(E.key),Ne());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let E=hr(),R=Ne();return a.Xi.getEntries(p,c).next(b=>{E=b,E.forEach((B,U)=>{U.isValidDocument()||(R=R.add(B))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,E)).next(b=>{u=b;const B=[];for(const U of o){const ie=E0(U,u.get(U.key).overlayedDocument);ie!=null&&B.push(new Dn(U.key,ie,Hf(ie.value.mapValue),Dt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,B,o)}).next(b=>{d=b;const B=b.applyToLocalDocumentSet(u,R);return a.documentOverlayCache.saveOverlays(p,b.batchId,B)})}).then(()=>({batchId:d.batchId,changes:Zf(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.Ic[r.currentUser.toKey()];l||(l=new Ke(te)),l=l.insert(o,a),r.Ic[r.currentUser.toKey()]=l}(i,s.batchId,n),await Yr(i,s.changes),await Jr(i.remoteStore)}catch(s){const r=vd(s,"Failed to persist write");n.reject(r)}}function su(t,e,n){const i=ne(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.dc.forEach((r,o)=>{const a=o.view.ku(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=ne(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.ku(o)&&(l=!0)}),l&&b_(a)}(i.eventManager,e),s.length&&i.fc.eu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function S_(t,e){const n=ne(t),i=e.batch.batchId;try{const s=await i_(n.localStore,e);_d(n,i,null),wd(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Yr(n,s)}catch(s){await Vf(s)}}async function R_(t,e,n){const i=ne(t);try{const s=await function(r,o){const a=ne(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ie(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);_d(i,e,n),wd(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Yr(i,s)}catch(s){await Vf(s)}}function wd(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function _d(t,e,n){const i=ne(t);let s=i.Ic[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Ic[i.currentUser.toKey()]=s}}async function Yr(t,e,n){const i=ne(t),s=[],r=[],o=[];i.dc.isEmpty()||(i.dc.forEach((a,l)=>{o.push(i.Rc(l,e,n).then(c=>{if((c||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Cl.Bi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.fc.eu(s),await async function(a,l){const c=ne(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(l,d=>w.forEach(d.$i,p=>c.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>w.forEach(d.Fi,p=>c.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!zr(u))throw u;O("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const p=c.Hi.get(d),E=p.snapshotVersion,R=p.withLastLimboFreeSnapshotVersion(E);c.Hi=c.Hi.insert(d,R)}}}(i.localStore,r))}async function k_(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const i=await fd(n.localStore,e);n.currentUser=e,function(s,r){s.Tc.forEach(o=>{o.forEach(a=>{a.reject(new F(_.CANCELLED,r))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Yr(n,i.tr)}}function N_(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=R_.bind(null,e),e}class ru{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return n_(this.persistence,new e_,e.initialUser,this.serializer)}createPersistence(e){return new Y0(Al.js,this.serializer)}createSharedClientState(e){return new o_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class D_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>su(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=k_.bind(null,this.syncEngine),await I_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new T_}createDatastore(e){const n=Qr(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new u_(s));var s;return function(r,o,a,l){return new d_(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>su(this.syncEngine,a,0),o=nu.D()?new nu:new a_,new g_(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new A_(i,s,r,o,a,l);return c&&(u.Ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);O("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await cs(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ke.UNAUTHENTICATED,this.clientId=Uf.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{O("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(O("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=vd(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Oo(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await fd(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ou(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x_(t);O("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>iu(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>iu(e.remoteStore,r)),t._onlineComponents=e}function P_(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oo(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!P_(n))throw n;or("Error using user provided cache. Falling back to memory cache: "+n),await Oo(t,new ru)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Oo(t,new ru);return t._offlineComponents}async function M_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await ou(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await ou(t,new D_))),t._onlineComponents}function L_(t){return M_(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e,n){if(!n)throw new F(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F_(t,e,n,i){if(e===!0&&i===!0)throw new F(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lu(t){if(!j.isDocumentKey(t))throw new F(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cu(t){if(j.isDocumentKey(t))throw new F(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function wa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rl(t);throw new F(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Rw;switch(n.type){case"firstParty":return new Ow(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=au.get(e);n&&(O("ComponentProvider","Removing Datastore"),au.delete(e),n.terminate())}(this),Promise.resolve()}}function U_(t,e,n,i={}){var s;const r=(t=wa(t,Zr))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&or("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=ke.MOCK_USER;else{o=iy(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new F(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ke(l)}t._authCredentials=new kw(new Ff(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class kl{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new kl(this.firestore,e,this._query)}}class Jt extends kl{constructor(e,n,i){super(e,n,s0(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new j(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function V_(t,e,...n){if(t=lt(t),Ed("collection","path",e),t instanceof Zr){const i=he.fromString(e,...n);return cu(i),new Jt(t,null,i)}{if(!(t instanceof vt||t instanceof Jt))throw new F(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(he.fromString(e,...n));return cu(i),new Jt(t.firestore,null,i)}}function vi(t,e,...n){if(t=lt(t),arguments.length===1&&(e=Uf.A()),Ed("doc","path",e),t instanceof Zr){const i=he.fromString(e,...n);return lu(i),new vt(t,null,new j(i))}{if(!(t instanceof vt||t instanceof Jt))throw new F(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(he.fromString(e,...n));return lu(i),new vt(t.firestore,t instanceof Jt?t.converter:null,new j(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new dd(this,"async_queue_retry"),this.Yc=()=>{const n=Do();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Do();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Do();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new In;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!zr(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(i=>{this.zc=i,this.Wc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Sn("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Wc=!1,i))));return this.Kc=n,n}enqueueAfterDelay(e,n,i){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=Sl.createAndSchedule(this,e,n,i,r=>this.ea(r));return this.jc.push(s),s}Xc(){this.zc&&z()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class Id extends Zr{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new $_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Td(this),this._firestoreClient.terminate()}}function B_(t,e){const n=typeof t=="object"?t:kh(),i=typeof t=="string"?t:e||"(default)",s=Wa(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=ey("firestore");r&&U_(s,...r)}return s}function j_(t){return t._firestoreClient||Td(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Td(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,l,c){return new zw(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new O_(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(xt.fromBase64String(e))}catch(n){throw new F(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wi(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=/^__.*__$/;class K_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Dn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ls(e,this.data,n,this.fieldTransforms)}}function Sd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Nl{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.oa(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Nl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:i,ha:!1});return s.la(e),s}fa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:i,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return pr(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Sd(this.ua)&&H_.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class z_{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Qr(e)}ga(e,n,i,s=!1){return new Nl({ua:e,methodName:n,ma:i,path:Oe.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function q_(t){const e=t._freezeSettings(),n=Qr(t._databaseId);return new z_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W_(t,e,n,i,s,r={}){const o=t.ga(r.merge||r.mergeFields?2:0,e,n,s);Dd("Data must be an object, but it was:",o,i);const a=kd(i,o);let l,c;if(r.merge)l=new ot(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const p=G_(e,d,n);if(!o.contains(p))throw new F(_.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);J_(u,p)||u.push(p)}l=new ot(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new K_(new it(a),l,c)}function Rd(t,e){if(Nd(t=lt(t)))return Dd("Unsupported field value:",e,t),kd(t,e);if(t instanceof Ad)return function(n,i){if(!Sd(i.ua))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Rd(o,i.da(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return g0(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=we.fromDate(n);return{timestampValue:ya(i.serializer,s)}}if(n instanceof we){const s=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ya(i.serializer,s)}}if(n instanceof Cd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wi)return{bytesValue:R0(i.serializer,n._byteString)};if(n instanceof vt){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ud(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${Rl(n)}`)}(t,e)}function kd(t,e){const n={};return Bf(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):as(t,(i,s)=>{const r=Rd(s,e.aa(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function Nd(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Cd||t instanceof Wi||t instanceof vt||t instanceof Ad)}function Dd(t,e,n){if(!Nd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Rl(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function G_(t,e,n){if((e=lt(e))instanceof bd)return e._internalPath;if(typeof e=="string")return X_(t,e);throw pr("Field path arguments must be of type string or ",t,!1,void 0,n)}const Q_=new RegExp("[~\\*/\\[\\]]");function X_(t,e,n){if(e.search(Q_)>=0)throw pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bd(...e.split("."))._internalPath}catch{throw pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pr(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new F(_.INVALID_ARGUMENT,a+t+l)}function J_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function wi(t,e,n){t=wa(t,vt);const i=wa(t.firestore,Id),s=Y_(t.converter,e,n);return Z_(i,[W_(q_(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Dt.none())])}function Z_(t,e){return function(n,i){const s=new In;return n.asyncQueue.enqueueAndForget(async()=>C_(await L_(n),i,s)),s.promise}(j_(t),e)}(function(t,e=!0){(function(n){fi=n})(ci),Jn(new bn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Id(new Nw(n.getProvider("auth-internal")),new xw(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Xt($c,"3.11.0",t),Xt($c,"3.11.0","esm2017")})();function Dl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Od(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eE=Od,Pd=new Xi("auth","Firebase",Od());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new za("@firebase/auth");function tE(t,...e){gr.logLevel<=G.WARN&&gr.warn(`Auth (${ci}): ${t}`,...e)}function Vs(t,...e){gr.logLevel<=G.ERROR&&gr.error(`Auth (${ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw Ol(t,...e)}function wt(t,...e){return Ol(t,...e)}function nE(t,e,n){const i=Object.assign(Object.assign({},eE()),{[e]:n});return new Xi("auth","Firebase",i).create(e,{appName:t.name})}function Ol(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Pd.create(t,...e)}function x(t,e,...n){if(!t)throw Ol(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vs(e),new Error(e)}function Lt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iE(){return hu()==="http:"||hu()==="https:"}function hu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iE()||ry()||"connection"in navigator)?navigator.onLine:!0}function rE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lt(n>e,"Short delay should be less than long delay!"),this.isMobile=sy()||oy()}get(){return sE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e){Lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=new hs(3e4,6e4);function Md(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fs(t,e,n,i,s={}){return Ld(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ji(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),xd.fetch()(Fd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ld(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},oE),e);try{const s=new cE(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Os(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Os(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Os(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Os(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nE(t,u,c);Mt(t,u)}}catch(s){if(s instanceof Ut)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function lE(t,e,n,i,s={}){const r=await fs(t,e,n,i,s);return"mfaPendingCredential"in r&&Mt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Fd(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Pl(t.config,s):`${t.config.apiScheme}://${s}`}class cE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(wt(this.auth,"network-request-failed")),aE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Os(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=wt(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(t,e){return fs(t,"POST","/v1/accounts:delete",e)}async function hE(t,e){return fs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fE(t,e=!1){const n=lt(t),i=await n.getIdToken(e),s=xl(i);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ni(Po(s.auth_time)),issuedAtTime:Ni(Po(s.iat)),expirationTime:Ni(Po(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Po(t){return Number(t)*1e3}function xl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Th(n);return s?JSON.parse(s):(Vs("Failed to decode base64 JWT payload"),null)}catch(s){return Vs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dE(t){const e=xl(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ut&&pE(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function pE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Gi(t,hE(n,{idToken:i}));x(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?vE(r.providerUserInfo):[],a=yE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ud(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function mE(t){const e=lt(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yE(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function vE(t){return t.map(e=>{var{providerId:n}=e,i=Dl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e){const n=await Ld(t,{},async()=>{const i=Ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Fd(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xd.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await wE(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Qi;return i&&(x(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(x(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=Dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ud(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Gi(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fE(this,e)}reload(){return mE(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gi(this,uE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,E=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ie=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:J,isAnonymous:ae,providerData:ze,stsTokenManager:qe}=n;x(P&&qe,e,"internal-error");const V=Qi.fromJSON(this.name,qe);x(typeof P=="string",e,"internal-error"),$t(d,e.name),$t(p,e.name),x(typeof J=="boolean",e,"internal-error"),x(typeof ae=="boolean",e,"internal-error"),$t(E,e.name),$t(R,e.name),$t(b,e.name),$t(B,e.name),$t(U,e.name),$t(ie,e.name);const ce=new Tn({uid:P,auth:e,email:p,emailVerified:J,displayName:d,isAnonymous:ae,photoURL:R,phoneNumber:E,tenantId:b,stsTokenManager:V,createdAt:U,lastLoginAt:ie});return ze&&Array.isArray(ze)&&(ce.providerData=ze.map(se=>Object.assign({},se))),B&&(ce._redirectEventId=B),ce}static async _fromIdTokenResponse(e,n,i=!1){const s=new Qi;s.updateFromServerResponse(n);const r=new Tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await mr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map;function kt(t){Lt(t instanceof Function,"Expected a class definition");let e=fu.get(t);return e?(Lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vd.type="NONE";const du=Vd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t,e,n){return`firebase:${t}:${e}:${n}`}class Wn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,r),this.fullPersistenceKey=$s("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Wn(kt(du),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||kt(du);const o=$s(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Tn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Wn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Wn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kd(e))return"Blackberry";if(zd(e))return"Webos";if(Ml(e))return"Safari";if((e.includes("chrome/")||Bd(e))&&!e.includes("edge/"))return"Chrome";if(Hd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $d(t=Le()){return/firefox\//i.test(t)}function Ml(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bd(t=Le()){return/crios\//i.test(t)}function jd(t=Le()){return/iemobile/i.test(t)}function Hd(t=Le()){return/android/i.test(t)}function Kd(t=Le()){return/blackberry/i.test(t)}function zd(t=Le()){return/webos/i.test(t)}function eo(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _E(t=Le()){var e;return eo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EE(){return ay()&&document.documentMode===10}function qd(t=Le()){return eo(t)||Hd(t)||zd(t)||Kd(t)||/windows phone/i.test(t)||jd(t)}function IE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t,e=[]){let n;switch(t){case"Browser":n=pu(Le());break;case"Worker":n=`${pu(Le())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${i}`}async function Gd(t,e){return fs(t,"GET","/v2/recaptchaConfig",Md(t,e))}function gu(t){return t!==void 0&&t.enterprise!==void 0}class Qd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xd(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=wt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",TE().appendChild(i)})}function bE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AE="https://www.google.com/recaptcha/enterprise.js?render=",CE="recaptcha-enterprise",SE="NO_RECAPTCHA";class RE{constructor(e){this.type=CE,this.auth=to(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Gd(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qd(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;gu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(SE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&gu(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Xd(AE+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mu(this),this.idTokenSubscription=new mu(this),this.beforeStateQueue=new kE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}async initializeRecaptchaConfig(){const e=await Gd(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new RE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function to(t){return lt(t)}class mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=py(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Gs(r,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function OE(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function PE(t,e,n){const i=to(t);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Jd(e),{host:o,port:a}=xE(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ME()}function Jd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xE(t){const e=Jd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:yu(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:yu(o)}}}function yu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ME(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e){return lE(t,"POST","/v1/accounts:signInWithIdp",Md(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="http://localhost";class kn extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=Dl(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new kn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Gn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gn(e,n)}buildRequest(){const e={requestUri:LE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ds{constructor(){super("facebook.com")}static credential(e){return kn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ht.credential(n,i)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends ds{constructor(){super("github.com")}static credential(e){return kn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ds{constructor(){super("twitter.com")}static credential(e,n){return kn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return zt.credential(n,i)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Tn._fromIdTokenResponse(e,i,s),o=vu(i);return new ri({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=vu(i);return new ri({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function vu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ut{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new yr(e,n,i,s)}}function ep(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,r,e,i):r})}async function FE(t,e,n=!1){const i=await Gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Gi(t,ep(i,s,e,t),n);x(r.idToken,i,"internal-error");const o=xl(r.idToken);x(o,i,"internal-error");const{sub:a}=o;return x(t.uid===a,i,"user-mismatch"),ri._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Mt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e,n=!1){const i="signIn",s=await ep(t,i,e),r=await ri._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}function $E(t,e,n,i){return lt(t).onIdTokenChanged(e,n,i)}function BE(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){const t=Le();return Ml(t)||eo(t)}const HE=1e3,KE=10;class np extends tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jE()&&IE(),this.fallbackToPolling=qd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);EE()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KE):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}np.type="LOCAL";const zE=np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ip.type="SESSION";const sp=ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new no(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await qE(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ll("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function GE(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function QE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JE(){return rp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="firebaseLocalStorageDb",YE=1,wr="firebaseLocalStorage",ap="fbase_key";class ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function io(t,e){return t.transaction([wr],e?"readwrite":"readonly").objectStore(wr)}function ZE(){const t=indexedDB.deleteDatabase(op);return new ps(t).toPromise()}function Ea(){const t=indexedDB.open(op,YE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(wr,{keyPath:ap})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(wr)?e(i):(i.close(),await ZE(),e(await Ea()))})})}async function wu(t,e,n){const i=io(t,!0).put({[ap]:e,value:n});return new ps(i).toPromise()}async function eI(t,e){const n=io(t,!1).get(e),i=await new ps(n).toPromise();return i===void 0?null:i.value}function _u(t,e){const n=io(t,!0).delete(e);return new ps(n).toPromise()}const tI=800,nI=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ea(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>nI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(JE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QE(),!this.activeServiceWorker)return;this.sender=new WE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ea();return await wu(e,vr,"1"),await _u(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>wu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>eI(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_u(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=io(s,!1).getAll();return new ps(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const iI=lp;new hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t,e){return e?kt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rI(t){return VE(t.auth,new Fl(t),t.bypassAuthState)}function oI(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),UE(n,new Fl(t),t.bypassAuthState)}async function aI(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),FE(n,new Fl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rI;case"linkViaPopup":case"linkViaRedirect":return aI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:Mt(this.auth,"internal-error")}}resolve(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new hs(2e3,1e4);class Un extends cp{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const e=Ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lI.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="pendingRedirect",Bs=new Map;class uI extends cp{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const i=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(t,e){const n=pI(e),i=dI(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function fI(t,e){Bs.set(t._key(),e)}function dI(t){return kt(t._redirectPersistence)}function pI(t){return $s(cI,t.config.apiKey,t.name)}async function gI(t,e,n=!1){const i=to(t),s=sI(i,e),o=await new uI(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=10*60*1e3;class yI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!up(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eu(e))}saveEventToCache(e){this.cachedEventUids.add(Eu(e)),this.lastProcessedEventTime=Date.now()}}function Eu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function up({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return up(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e={}){return fs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EI=/^https?/;async function II(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wI(t);for(const n of e)try{if(TI(n))return}catch{}Mt(t,"unauthorized-domain")}function TI(t){const e=_a(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!EI.test(n))return!1;if(_I.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=new hs(3e4,6e4);function Iu(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AI(t){return new Promise((e,n)=>{var i,s,r;function o(){Iu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iu(),n(wt(t,"network-request-failed"))},timeout:bI.get()})}if(!((s=(i=_t().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=_t().gapi)===null||r===void 0)&&r.load)o();else{const a=bE("iframefcb");return _t()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},Xd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw js=null,e})}let js=null;function CI(t){return js=js||AI(t),js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new hs(5e3,15e3),RI="__/auth/iframe",kI="emulator/auth/iframe",NI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OI(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pl(e,kI):`https://${t.config.authDomain}/${RI}`,i={apiKey:e.apiKey,appName:t.name,v:ci},s=DI.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Ji(i).slice(1)}`}async function PI(t){const e=await CI(t),n=_t().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:OI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=_t().setTimeout(()=>{r(o)},SI.get());function l(){_t().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MI=500,LI=600,FI="_blank",UI="http://localhost";class Tu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VI(t,e,n,i=MI,s=LI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=Le().toLowerCase();n&&(a=Bd(c)?FI:n),$d(c)&&(e=e||UI,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[E,R])=>`${p}${E}=${R},`,"");if(_E(c)&&a!=="_self")return $I(e||"",a),new Tu(null);const d=window.open(e||"",a,u);x(d,t,"popup-blocked");try{d.focus()}catch{}return new Tu(d)}function $I(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="__/auth/handler",jI="emulator/auth/handler",HI=encodeURIComponent("fac");async function bu(t,e,n,i,s,r){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ci,eventId:s};if(e instanceof Zd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof ds){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${HI}=${encodeURIComponent(l)}`:"";return`${KI(t)}?${Ji(a).slice(1)}${c}`}function KI({config:t}){return t.emulator?Pl(t,jI):`https://${t.authDomain}/${BI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="webStorageSupport";class zI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sp,this._completeRedirectFn=gI,this._overrideRedirectResult=fI}async _openPopup(e,n,i,s){var r;Lt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await bu(e,n,i,_a(),s);return VI(e,o,Ll())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await bu(e,n,i,_a(),s);return GE(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Lt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await PI(e),i=new yI(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xo,{type:xo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[xo];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=II(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qd()||Ml()||eo()}}const qI=zI;var Au="@firebase/auth",Cu="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QI(t){Jn(new bn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),x(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wd(t)},c=new NE(i,s,r,l);return OE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Jn(new bn("auth-internal",e=>{const n=to(e.getProvider("auth").getImmediate());return(i=>new WI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Au,Cu,GI(t)),Xt(Au,Cu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=5*60,JI=Ah("authIdTokenMaxAge")||XI;let Su=null;const YI=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>JI)return;const s=n==null?void 0:n.token;Su!==s&&(Su=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ZI(t=kh()){const e=Wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DE(t,{popupRedirectResolver:qI,persistence:[iI,zE,sp]}),i=Ah("authTokenSyncURL");if(i){const r=YI(i);BE(n,r,()=>r(n.currentUser)),$E(n,o=>r(o))}const s=bh("auth");return s&&PE(n,`http://${s}`),n}QI("Browser");const eT=Hn("div",{class:"font-bold"}," Test?s ",-1),tT={class:"font-bold m-5 text-lg"},nT={__name:"App",setup(t){const n=Rh({apiKey:"AIzaSyALV08bfPkleXurrp4q-ZZqLB1buSChfhU",authDomain:"restlist-ab369.firebaseapp.com",projectId:"restlist-ab369",storageBucket:"restlist-ab369.appspot.com",messagingSenderId:"1032725124554",appId:"1:1032725124554:web:304b9b702ca638157aab33",measurementId:"G-7FGCH3NTKT"});ZI(),console.log("now logging in"),console.log("hello?");function i(){return"hellsafao"}async function s(){console.log("Pressed");const r=B_(n),o=V_(r,"cities");await wi(vi(o,"SF"),{name:"Sanaggo",state:"CA",country:"USA",capital:!1,population:86e4,regions:["west_coast","norcal"]}),await wi(vi(o,"LA"),{name:"Loseles",state:"CA",country:"USA",capital:!1,population:39e5,regions:["west_coast","socal"]}),await wi(vi(o,"DC"),{name:"Washington, D.C.",state:null,country:"USA",capital:!0,population:68e4,regions:["east_coast"]}),await wi(vi(o,"TOK"),{name:"Tokyo",state:null,country:"Japan",capital:!0,population:9e6,regions:["kanto","honshu"]}),await wi(vi(o,"BJ"),{name:"Beijing",state:null,country:"China",capital:!0,population:215e5,regions:["jingjinji","hebei"]})}return(r,o)=>(im(),om("header",null,[eT,Hn("div",tT,wp(i()),1),Hn("button",{onClick:o[0]||(o[0]=a=>s())},"Text"),Hn("button",{class:"m-10",onClick:o[1]||(o[1]=a=>s())},"Sign In")]))}};zm(nT).mount("#app");
