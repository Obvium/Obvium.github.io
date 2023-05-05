(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ws(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Ks(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=ce(i)?fh(i):Ks(i);if(r)for(const s in r)t[s]=r[s]}return t}else{if(ce(e))return e;if(ie(e))return e}}const ch=/;(?![^(]*\))/g,uh=/:([^]+)/,hh=/\/\*.*?\*\//gs;function fh(e){const t={};return e.replace(hh,"").split(ch).forEach(n=>{if(n){const i=n.split(uh);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function zs(e){let t="";if(ce(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const i=zs(e[n]);i&&(t+=i+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ph=Ws(dh);function wl(e){return!!e||e===""}const G={},nn=[],xe=()=>{},gh=()=>!1,mh=/^on[^a-z]/,rr=e=>mh.test(e),qs=e=>e.startsWith("onUpdate:"),de=Object.assign,Gs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_h=Object.prototype.hasOwnProperty,B=(e,t)=>_h.call(e,t),L=Array.isArray,Nn=e=>sr(e)==="[object Map]",yh=e=>sr(e)==="[object Set]",x=e=>typeof e=="function",ce=e=>typeof e=="string",Xs=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Tl=e=>ie(e)&&x(e.then)&&x(e.catch),vh=Object.prototype.toString,sr=e=>vh.call(e),Ih=e=>sr(e).slice(8,-1),Eh=e=>sr(e)==="[object Object]",Js=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ri=Ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wh=/-(\w)/g,un=or(e=>e.replace(wh,(t,n)=>n?n.toUpperCase():"")),Th=/\B([A-Z])/g,pn=or(e=>e.replace(Th,"-$1").toLowerCase()),Cl=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=or(e=>e?`on${Cl(e)}`:""),Ui=(e,t)=>!Object.is(e,t),Oi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ls=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let na;const Ch=()=>na||(na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ne;class Ah{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function bh(e,t=Ne){t&&t.active&&t.effects.push(e)}function Sh(){return Ne}const Ys=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Al=e=>(e.w&bt)>0,bl=e=>(e.n&bt)>0,Rh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=bt},Oh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];Al(r)&&!bl(r)?r.delete(e):t[n++]=r,r.w&=~bt,r.n&=~bt}t.length=n}},cs=new WeakMap;let Sn=0,bt=1;const us=30;let Le;const $t=Symbol(""),hs=Symbol("");class Qs{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bh(this,i)}run(){if(!this.active)return this.fn();let t=Le,n=Et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,Et=!0,bt=1<<++Sn,Sn<=us?Rh(this):ia(this),this.fn()}finally{Sn<=us&&Oh(this),bt=1<<--Sn,Le=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(ia(this),this.onStop&&this.onStop(),this.active=!1)}}function ia(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Et=!0;const Sl=[];function gn(){Sl.push(Et),Et=!1}function mn(){const e=Sl.pop();Et=e===void 0?!0:e}function we(e,t,n){if(Et&&Le){let i=cs.get(e);i||cs.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=Ys()),Rl(r)}}function Rl(e,t){let n=!1;Sn<=us?bl(e)||(e.n|=bt,n=!Al(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function lt(e,t,n,i,r,s){const o=cs.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&L(e)){const l=Number(i);o.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":L(e)?Js(n)&&a.push(o.get("length")):(a.push(o.get($t)),Nn(e)&&a.push(o.get(hs)));break;case"delete":L(e)||(a.push(o.get($t)),Nn(e)&&a.push(o.get(hs)));break;case"set":Nn(e)&&a.push(o.get($t));break}if(a.length===1)a[0]&&fs(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fs(Ys(l))}}function fs(e,t){const n=L(e)?e:[...e];for(const i of n)i.computed&&ra(i);for(const i of n)i.computed||ra(i)}function ra(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const kh=Ws("__proto__,__v_isRef,__isVue"),Ol=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xs)),Ph=Zs(),Dh=Zs(!1,!0),Nh=Zs(!0),sa=Lh();function Lh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=j(this);for(let s=0,o=this.length;s<o;s++)we(i,"get",s+"");const r=i[t](...n);return r===-1||r===!1?i[t](...n.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){gn();const i=j(this)[t].apply(this,n);return mn(),i}}),e}function Mh(e){const t=j(this);return we(t,"has",e),t.hasOwnProperty(e)}function Zs(e=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(e?t?Yh:Ll:t?Nl:Dl).get(i))return i;const o=L(i);if(!e){if(o&&B(sa,r))return Reflect.get(sa,r,s);if(r==="hasOwnProperty")return Mh}const a=Reflect.get(i,r,s);return(Xs(r)?Ol.has(r):kh(r))||(e||we(i,"get",r),t)?a:ye(a)?o&&Js(r)?a:a.value:ie(a)?e?Ml(a):no(a):a}}const xh=kl(),Uh=kl(!0);function kl(e=!1){return function(n,i,r,s){let o=n[i];if(Fn(o)&&ye(o)&&!ye(r))return!1;if(!e&&(!ds(r)&&!Fn(r)&&(o=j(o),r=j(r)),!L(n)&&ye(o)&&!ye(r)))return o.value=r,!0;const a=L(n)&&Js(i)?Number(i)<n.length:B(n,i),l=Reflect.set(n,i,r,s);return n===j(s)&&(a?Ui(r,o)&&lt(n,"set",i,r):lt(n,"add",i,r)),l}}function Fh(e,t){const n=B(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&lt(e,"delete",t,void 0),i}function Bh(e,t){const n=Reflect.has(e,t);return(!Xs(t)||!Ol.has(t))&&we(e,"has",t),n}function jh(e){return we(e,"iterate",L(e)?"length":$t),Reflect.ownKeys(e)}const Pl={get:Ph,set:xh,deleteProperty:Fh,has:Bh,ownKeys:jh},Hh={get:Nh,set(e,t){return!0},deleteProperty(e,t){return!0}},$h=de({},Pl,{get:Dh,set:Uh}),eo=e=>e,ar=e=>Reflect.getPrototypeOf(e);function mi(e,t,n=!1,i=!1){e=e.__v_raw;const r=j(e),s=j(t);n||(t!==s&&we(r,"get",t),we(r,"get",s));const{has:o}=ar(r),a=i?eo:n?so:ro;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function _i(e,t=!1){const n=this.__v_raw,i=j(n),r=j(e);return t||(e!==r&&we(i,"has",e),we(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function yi(e,t=!1){return e=e.__v_raw,!t&&we(j(e),"iterate",$t),Reflect.get(e,"size",e)}function oa(e){e=j(e);const t=j(this);return ar(t).has.call(t,e)||(t.add(e),lt(t,"add",e,e)),this}function aa(e,t){t=j(t);const n=j(this),{has:i,get:r}=ar(n);let s=i.call(n,e);s||(e=j(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?Ui(t,o)&&lt(n,"set",e,t):lt(n,"add",e,t),this}function la(e){const t=j(this),{has:n,get:i}=ar(t);let r=n.call(t,e);r||(e=j(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&lt(t,"delete",e,void 0),s}function ca(){const e=j(this),t=e.size!==0,n=e.clear();return t&&lt(e,"clear",void 0,void 0),n}function vi(e,t){return function(i,r){const s=this,o=s.__v_raw,a=j(o),l=t?eo:e?so:ro;return!e&&we(a,"iterate",$t),o.forEach((c,f)=>i.call(r,l(c),l(f),s))}}function Ii(e,t,n){return function(...i){const r=this.__v_raw,s=j(r),o=Nn(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...i),f=n?eo:t?so:ro;return!t&&we(s,"iterate",l?hs:$t),{next(){const{value:p,done:y}=c.next();return y?{value:p,done:y}:{value:a?[f(p[0]),f(p[1])]:f(p),done:y}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:this}}function Vh(){const e={get(s){return mi(this,s)},get size(){return yi(this)},has:_i,add:oa,set:aa,delete:la,clear:ca,forEach:vi(!1,!1)},t={get(s){return mi(this,s,!1,!0)},get size(){return yi(this)},has:_i,add:oa,set:aa,delete:la,clear:ca,forEach:vi(!1,!0)},n={get(s){return mi(this,s,!0)},get size(){return yi(this,!0)},has(s){return _i.call(this,s,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:vi(!0,!1)},i={get(s){return mi(this,s,!0,!0)},get size(){return yi(this,!0)},has(s){return _i.call(this,s,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ii(s,!1,!1),n[s]=Ii(s,!0,!1),t[s]=Ii(s,!1,!0),i[s]=Ii(s,!0,!0)}),[e,n,t,i]}const[Wh,Kh,zh,qh]=Vh();function to(e,t){const n=t?e?qh:zh:e?Kh:Wh;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(B(n,r)&&r in i?n:i,r,s)}const Gh={get:to(!1,!1)},Xh={get:to(!1,!0)},Jh={get:to(!0,!1)},Dl=new WeakMap,Nl=new WeakMap,Ll=new WeakMap,Yh=new WeakMap;function Qh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zh(e){return e.__v_skip||!Object.isExtensible(e)?0:Qh(Ih(e))}function no(e){return Fn(e)?e:io(e,!1,Pl,Gh,Dl)}function ef(e){return io(e,!1,$h,Xh,Nl)}function Ml(e){return io(e,!0,Hh,Jh,Ll)}function io(e,t,n,i,r){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=Zh(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function rn(e){return Fn(e)?rn(e.__v_raw):!!(e&&e.__v_isReactive)}function Fn(e){return!!(e&&e.__v_isReadonly)}function ds(e){return!!(e&&e.__v_isShallow)}function xl(e){return rn(e)||Fn(e)}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function Ul(e){return Fi(e,"__v_skip",!0),e}const ro=e=>ie(e)?no(e):e,so=e=>ie(e)?Ml(e):e;function tf(e){Et&&Le&&(e=j(e),Rl(e.dep||(e.dep=Ys())))}function nf(e,t){e=j(e);const n=e.dep;n&&fs(n)}function ye(e){return!!(e&&e.__v_isRef===!0)}function rf(e){return ye(e)?e.value:e}const sf={get:(e,t,n)=>rf(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return ye(r)&&!ye(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function Fl(e){return rn(e)?e:new Proxy(e,sf)}var Bl;class of{constructor(t,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Bl]=!1,this._dirty=!0,this.effect=new Qs(t,()=>{this._dirty||(this._dirty=!0,nf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=j(this);return tf(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Bl="__v_isReadonly";function af(e,t,n=!1){let i,r;const s=x(e);return s?(i=e,r=xe):(i=e.get,r=e.set),new of(i,r,s||!r,n)}function wt(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){lr(s,t,n)}return r}function Oe(e,t,n,i){if(x(e)){const s=wt(e,t,n,i);return s&&Tl(s)&&s.catch(o=>{lr(o,t,n)}),s}const r=[];for(let s=0;s<e.length;s++)r.push(Oe(e[s],t,n,i));return r}function lr(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){wt(l,null,10,[e,o,a]);return}}lf(e,n,r,i)}function lf(e,t,n,i=!0){console.error(e)}let Bn=!1,ps=!1;const ue=[];let ze=0;const sn=[];let nt=null,xt=0;const jl=Promise.resolve();let oo=null;function cf(e){const t=oo||jl;return e?t.then(this?e.bind(this):e):t}function uf(e){let t=ze+1,n=ue.length;for(;t<n;){const i=t+n>>>1;jn(ue[i])<e?t=i+1:n=i}return t}function ao(e){(!ue.length||!ue.includes(e,Bn&&e.allowRecurse?ze+1:ze))&&(e.id==null?ue.push(e):ue.splice(uf(e.id),0,e),Hl())}function Hl(){!Bn&&!ps&&(ps=!0,oo=jl.then(Vl))}function hf(e){const t=ue.indexOf(e);t>ze&&ue.splice(t,1)}function ff(e){L(e)?sn.push(...e):(!nt||!nt.includes(e,e.allowRecurse?xt+1:xt))&&sn.push(e),Hl()}function ua(e,t=Bn?ze+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function $l(e){if(sn.length){const t=[...new Set(sn)];if(sn.length=0,nt){nt.push(...t);return}for(nt=t,nt.sort((n,i)=>jn(n)-jn(i)),xt=0;xt<nt.length;xt++)nt[xt]();nt=null,xt=0}}const jn=e=>e.id==null?1/0:e.id,df=(e,t)=>{const n=jn(e)-jn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vl(e){ps=!1,Bn=!0,ue.sort(df);const t=xe;try{for(ze=0;ze<ue.length;ze++){const n=ue[ze];n&&n.active!==!1&&wt(n,null,14)}}finally{ze=0,ue.length=0,$l(),Bn=!1,oo=null,(ue.length||sn.length)&&Vl()}}function pf(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||G;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:y}=i[f]||G;y&&(r=n.map(A=>ce(A)?A.trim():A)),p&&(r=n.map(ls))}let a,l=i[a=xr(t)]||i[a=xr(un(t))];!l&&s&&(l=i[a=xr(pn(t))]),l&&Oe(l,e,6,r);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Oe(c,e,6,r)}}function Wl(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!x(e)){const l=c=>{const f=Wl(c,t,!0);f&&(a=!0,de(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(ie(e)&&i.set(e,null),null):(L(s)?s.forEach(l=>o[l]=null):de(o,s),ie(e)&&i.set(e,o),o)}function cr(e,t){return!e||!rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,pn(t))||B(e,t))}let Re=null,Kl=null;function Bi(e){const t=Re;return Re=e,Kl=e&&e.type.__scopeId||null,t}function gf(e,t=Re,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&Ia(-1);const s=Bi(t);let o;try{o=e(...r)}finally{Bi(s),i._d&&Ia(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ur(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:p,data:y,setupState:A,ctx:N,inheritAttrs:b}=e;let X,H;const ge=Bi(e);try{if(n.shapeFlag&4){const q=r||i;X=Ke(f.call(q,q,p,s,A,y,N)),H=l}else{const q=t;X=Ke(q.length>1?q(s,{attrs:l,slots:a,emit:c}):q(s,null)),H=t.props?l:mf(l)}}catch(q){Mn.length=0,lr(q,e,1),X=at(Ue)}let D=X;if(H&&b!==!1){const q=Object.keys(H),{shapeFlag:re}=D;q.length&&re&7&&(o&&q.some(qs)&&(H=_f(H,o)),D=St(D,H))}return n.dirs&&(D=St(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),X=D,Bi(ge),X}const mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||rr(n))&&((t||(t={}))[n]=e[n]);return t},_f=(e,t)=>{const n={};for(const i in e)(!qs(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function yf(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ha(i,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const y=f[p];if(o[y]!==i[y]&&!cr(c,y))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ha(i,o,c):!0:!!o;return!1}function ha(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!cr(n,s))return!0}return!1}function vf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const If=e=>e.__isSuspense;function Ef(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):ff(e)}function wf(e,t){if(ne){let n=ne.provides;const i=ne.parent&&ne.parent.provides;i===n&&(n=ne.provides=Object.create(i)),n[e]=t}}function ki(e,t,n=!1){const i=ne||Re;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&x(t)?t.call(i.proxy):t}}const Ei={};function Fr(e,t,n){return zl(e,t,n)}function zl(e,t,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=G){const a=Sh()===(ne==null?void 0:ne.scope)?ne:null;let l,c=!1,f=!1;if(ye(e)?(l=()=>e.value,c=ds(e)):rn(e)?(l=()=>e,i=!0):L(e)?(f=!0,c=e.some(D=>rn(D)||ds(D)),l=()=>e.map(D=>{if(ye(D))return D.value;if(rn(D))return Bt(D);if(x(D))return wt(D,a,2)})):x(e)?t?l=()=>wt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),Oe(e,a,3,[y])}:l=xe,t&&i){const D=l;l=()=>Bt(D())}let p,y=D=>{p=H.onStop=()=>{wt(D,a,4)}},A;if($n)if(y=xe,t?n&&Oe(t,a,3,[l(),f?[]:void 0,y]):l(),r==="sync"){const D=vd();A=D.__watcherHandles||(D.__watcherHandles=[])}else return xe;let N=f?new Array(e.length).fill(Ei):Ei;const b=()=>{if(H.active)if(t){const D=H.run();(i||c||(f?D.some((q,re)=>Ui(q,N[re])):Ui(D,N)))&&(p&&p(),Oe(t,a,3,[D,N===Ei?void 0:f&&N[0]===Ei?[]:N,y]),N=D)}else H.run()};b.allowRecurse=!!t;let X;r==="sync"?X=b:r==="post"?X=()=>Ie(b,a&&a.suspense):(b.pre=!0,a&&(b.id=a.uid),X=()=>ao(b));const H=new Qs(l,X);t?n?b():N=H.run():r==="post"?Ie(H.run.bind(H),a&&a.suspense):H.run();const ge=()=>{H.stop(),a&&a.scope&&Gs(a.scope.effects,H)};return A&&A.push(ge),ge}function Tf(e,t,n){const i=this.proxy,r=ce(e)?e.includes(".")?ql(i,e):()=>i[e]:e.bind(i,i);let s;x(t)?s=t:(s=t.handler,n=t);const o=ne;hn(this);const a=zl(r,s.bind(i),n);return o?hn(o):Vt(),a}function ql(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Bt(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))Bt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)Bt(e[n],t);else if(yh(e)||Nn(e))e.forEach(n=>{Bt(n,t)});else if(Eh(e))for(const n in e)Bt(e[n],t);return e}function Cf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yl(()=>{e.isMounted=!0}),Ql(()=>{e.isUnmounting=!0}),e}const be=[Function,Array],Af={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:be,onEnter:be,onAfterEnter:be,onEnterCancelled:be,onBeforeLeave:be,onLeave:be,onAfterLeave:be,onLeaveCancelled:be,onBeforeAppear:be,onAppear:be,onAfterAppear:be,onAppearCancelled:be},setup(e,{slots:t}){const n=hd(),i=Cf();let r;return()=>{const s=t.default&&Xl(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const b of s)if(b.type!==Ue){o=b;break}}const a=j(e),{mode:l}=a;if(i.isLeaving)return Br(o);const c=fa(o);if(!c)return Br(o);const f=gs(c,a,i,n);ms(c,f);const p=n.subTree,y=p&&fa(p);let A=!1;const{getTransitionKey:N}=c.type;if(N){const b=N();r===void 0?r=b:b!==r&&(r=b,A=!0)}if(y&&y.type!==Ue&&(!Ut(c,y)||A)){const b=gs(y,a,i,n);if(ms(y,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Br(o);l==="in-out"&&c.type!==Ue&&(b.delayLeave=(X,H,ge)=>{const D=Gl(i,y);D[String(y.key)]=y,X._leaveCb=()=>{H(),X._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=ge})}return o}}},bf=Af;function Gl(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function gs(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:p,onLeave:y,onAfterLeave:A,onLeaveCancelled:N,onBeforeAppear:b,onAppear:X,onAfterAppear:H,onAppearCancelled:ge}=t,D=String(e.key),q=Gl(n,e),re=(M,Q)=>{M&&Oe(M,i,9,Q)},Be=(M,Q)=>{const J=Q[1];re(M,Q),L(M)?M.every(Te=>Te.length<=1)&&J():M.length<=1&&J()},Pe={mode:s,persisted:o,beforeEnter(M){let Q=a;if(!n.isMounted)if(r)Q=b||a;else return;M._leaveCb&&M._leaveCb(!0);const J=q[D];J&&Ut(e,J)&&J.el._leaveCb&&J.el._leaveCb(),re(Q,[M])},enter(M){let Q=l,J=c,Te=f;if(!n.isMounted)if(r)Q=X||l,J=H||c,Te=ge||f;else return;let je=!1;const et=M._enterCb=Tn=>{je||(je=!0,Tn?re(Te,[M]):re(J,[M]),Pe.delayedLeave&&Pe.delayedLeave(),M._enterCb=void 0)};Q?Be(Q,[M,et]):et()},leave(M,Q){const J=String(e.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return Q();re(p,[M]);let Te=!1;const je=M._leaveCb=et=>{Te||(Te=!0,Q(),et?re(N,[M]):re(A,[M]),M._leaveCb=void 0,q[J]===e&&delete q[J])};q[J]=e,y?Be(y,[M,je]):je()},clone(M){return gs(M,t,n,i)}};return Pe}function Br(e){if(ur(e))return e=St(e),e.children=null,e}function fa(e){return ur(e)?e.children?e.children[0]:void 0:e}function ms(e,t){e.shapeFlag&6&&e.component?ms(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Xl(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===We?(o.patchFlag&128&&r++,i=i.concat(Xl(o.children,t,a))):(t||o.type!==Ue)&&i.push(a!=null?St(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}const Pi=e=>!!e.type.__asyncLoader,ur=e=>e.type.__isKeepAlive;function Sf(e,t){Jl(e,"a",t)}function Rf(e,t){Jl(e,"da",t)}function Jl(e,t,n=ne){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(hr(t,i,n),n){let r=n.parent;for(;r&&r.parent;)ur(r.parent.vnode)&&Of(i,t,n,r),r=r.parent}}function Of(e,t,n,i){const r=hr(t,e,i,!0);Zl(()=>{Gs(i[t],r)},n)}function hr(e,t,n=ne,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;gn(),hn(n);const a=Oe(t,n,e,o);return Vt(),mn(),a});return i?r.unshift(s):r.push(s),s}}const ht=e=>(t,n=ne)=>(!$n||e==="sp")&&hr(e,(...i)=>t(...i),n),kf=ht("bm"),Yl=ht("m"),Pf=ht("bu"),Df=ht("u"),Ql=ht("bum"),Zl=ht("um"),Nf=ht("sp"),Lf=ht("rtg"),Mf=ht("rtc");function xf(e,t=ne){hr("ec",e,t)}function da(e,t){const n=Re;if(n===null)return e;const i=pr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[o,a,l,c=G]=t[s];o&&(x(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Dt(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(gn(),Oe(l,n,8,[e.el,a,e,t]),mn())}}const Uf=Symbol(),_s=e=>e?uc(e)?pr(e)||e.proxy:_s(e.parent):null,Ln=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_s(e.parent),$root:e=>_s(e.root),$emit:e=>e.emit,$options:e=>lo(e),$forceUpdate:e=>e.f||(e.f=()=>ao(e.update)),$nextTick:e=>e.n||(e.n=cf.bind(e.proxy)),$watch:e=>Tf.bind(e)}),jr=(e,t)=>e!==G&&!e.__isScriptSetup&&B(e,t),Ff={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(jr(i,t))return o[t]=1,i[t];if(r!==G&&B(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,s[t];if(n!==G&&B(n,t))return o[t]=4,n[t];ys&&(o[t]=0)}}const f=Ln[t];let p,y;if(f)return t==="$attrs"&&we(e,"get",t),f(e);if((p=a.__cssModules)&&(p=p[t]))return p;if(n!==G&&B(n,t))return o[t]=4,n[t];if(y=l.config.globalProperties,B(y,t))return y[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return jr(r,t)?(r[t]=n,!0):i!==G&&B(i,t)?(i[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==G&&B(e,o)||jr(t,o)||(a=s[0])&&B(a,o)||B(i,o)||B(Ln,o)||B(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ys=!0;function Bf(e){const t=lo(e),n=e.proxy,i=e.ctx;ys=!1,t.beforeCreate&&pa(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:p,mounted:y,beforeUpdate:A,updated:N,activated:b,deactivated:X,beforeDestroy:H,beforeUnmount:ge,destroyed:D,unmounted:q,render:re,renderTracked:Be,renderTriggered:Pe,errorCaptured:M,serverPrefetch:Q,expose:J,inheritAttrs:Te,components:je,directives:et,filters:Tn}=t;if(c&&jf(c,i,null,e.appContext.config.unwrapInjectedRef),o)for(const Z in o){const K=o[Z];x(K)&&(i[Z]=K.bind(n))}if(r){const Z=r.call(n,n);ie(Z)&&(e.data=no(Z))}if(ys=!0,s)for(const Z in s){const K=s[Z],kt=x(K)?K.bind(n,n):x(K.get)?K.get.bind(n,n):xe,pi=!x(K)&&x(K.set)?K.set.bind(n):xe,Pt=_d({get:kt,set:pi});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:He=>Pt.value=He})}if(a)for(const Z in a)ec(a[Z],i,n,Z);if(l){const Z=x(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(K=>{wf(K,Z[K])})}f&&pa(f,e,"c");function me(Z,K){L(K)?K.forEach(kt=>Z(kt.bind(n))):K&&Z(K.bind(n))}if(me(kf,p),me(Yl,y),me(Pf,A),me(Df,N),me(Sf,b),me(Rf,X),me(xf,M),me(Mf,Be),me(Lf,Pe),me(Ql,ge),me(Zl,q),me(Nf,Q),L(J))if(J.length){const Z=e.exposed||(e.exposed={});J.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:kt=>n[K]=kt})})}else e.exposed||(e.exposed={});re&&e.render===xe&&(e.render=re),Te!=null&&(e.inheritAttrs=Te),je&&(e.components=je),et&&(e.directives=et)}function jf(e,t,n=xe,i=!1){L(e)&&(e=vs(e));for(const r in e){const s=e[r];let o;ie(s)?"default"in s?o=ki(s.from||r,s.default,!0):o=ki(s.from||r):o=ki(s),ye(o)&&i?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function pa(e,t,n){Oe(L(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function ec(e,t,n,i){const r=i.includes(".")?ql(n,i):()=>n[i];if(ce(e)){const s=t[e];x(s)&&Fr(r,s)}else if(x(e))Fr(r,e.bind(n));else if(ie(e))if(L(e))e.forEach(s=>ec(s,t,n,i));else{const s=x(e.handler)?e.handler.bind(n):t[e.handler];x(s)&&Fr(r,s,e)}}function lo(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(c=>ji(l,c,o,!0)),ji(l,t,o)),ie(t)&&s.set(t,l),l}function ji(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&ji(e,s,n,!0),r&&r.forEach(o=>ji(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=Hf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Hf={data:ga,props:Lt,emits:Lt,methods:Lt,computed:Lt,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:Lt,directives:Lt,watch:Vf,provide:ga,inject:$f};function ga(e,t){return t?e?function(){return de(x(e)?e.call(this,this):e,x(t)?t.call(this,this):t)}:t:e}function $f(e,t){return Lt(vs(e),vs(t))}function vs(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function Lt(e,t){return e?de(de(Object.create(null),e),t):t}function Vf(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const i in t)n[i]=_e(e[i],t[i]);return n}function Wf(e,t,n,i=!1){const r={},s={};Fi(s,dr,1),e.propsDefaults=Object.create(null),tc(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:ef(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function Kf(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=j(r),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let y=f[p];if(cr(e.emitsOptions,y))continue;const A=t[y];if(l)if(B(s,y))A!==s[y]&&(s[y]=A,c=!0);else{const N=un(y);r[N]=Is(l,a,N,A,e,!1)}else A!==s[y]&&(s[y]=A,c=!0)}}}else{tc(e,t,r,s)&&(c=!0);let f;for(const p in a)(!t||!B(t,p)&&((f=pn(p))===p||!B(t,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=Is(l,a,p,void 0,e,!0)):delete r[p]);if(s!==a)for(const p in s)(!t||!B(t,p))&&(delete s[p],c=!0)}c&&lt(e,"set","$attrs")}function tc(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ri(l))continue;const c=t[l];let f;r&&B(r,f=un(l))?!s||!s.includes(f)?n[f]=c:(a||(a={}))[f]=c:cr(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=j(n),c=a||G;for(let f=0;f<s.length;f++){const p=s[f];n[p]=Is(r,l,p,c[p],e,!B(c,p))}}return o}function Is(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=B(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&x(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(hn(r),i=c[n]=l.call(null,t),Vt())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===pn(n))&&(i=!0))}return i}function nc(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!x(e)){const f=p=>{l=!0;const[y,A]=nc(p,t,!0);de(o,y),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return ie(e)&&i.set(e,nn),nn;if(L(s))for(let f=0;f<s.length;f++){const p=un(s[f]);ma(p)&&(o[p]=G)}else if(s)for(const f in s){const p=un(f);if(ma(p)){const y=s[f],A=o[p]=L(y)||x(y)?{type:y}:Object.assign({},y);if(A){const N=va(Boolean,A.type),b=va(String,A.type);A[0]=N>-1,A[1]=b<0||N<b,(N>-1||B(A,"default"))&&a.push(p)}}}const c=[o,a];return ie(e)&&i.set(e,c),c}function ma(e){return e[0]!=="$"}function _a(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ya(e,t){return _a(e)===_a(t)}function va(e,t){return L(t)?t.findIndex(n=>ya(n,e)):x(t)&&ya(t,e)?0:-1}const ic=e=>e[0]==="_"||e==="$stable",co=e=>L(e)?e.map(Ke):[Ke(e)],zf=(e,t,n)=>{if(t._n)return t;const i=gf((...r)=>co(t(...r)),n);return i._c=!1,i},rc=(e,t,n)=>{const i=e._ctx;for(const r in e){if(ic(r))continue;const s=e[r];if(x(s))t[r]=zf(r,s,i);else if(s!=null){const o=co(s);t[r]=()=>o}}},sc=(e,t)=>{const n=co(t);e.slots.default=()=>n},qf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=j(t),Fi(t,"_",n)):rc(t,e.slots={})}else e.slots={},t&&sc(e,t);Fi(e.slots,dr,1)},Gf=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=G;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(de(r,t),!n&&a===1&&delete r._):(s=!t.$stable,rc(t,r)),o=t}else t&&(sc(e,t),o={default:1});if(s)for(const a in r)!ic(a)&&!(a in o)&&delete r[a]};function oc(){return{app:null,config:{isNativeTag:gh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xf=0;function Jf(e,t){return function(i,r=null){x(i)||(i=Object.assign({},i)),r!=null&&!ie(r)&&(r=null);const s=oc(),o=new Set;let a=!1;const l=s.app={_uid:Xf++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Id,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&x(c.install)?(o.add(c),c.install(l,...f)):x(c)&&(o.add(c),c(l,...f))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,f){return f?(s.components[c]=f,l):s.components[c]},directive(c,f){return f?(s.directives[c]=f,l):s.directives[c]},mount(c,f,p){if(!a){const y=at(i,r);return y.appContext=s,f&&t?t(y,c):e(y,c,p),a=!0,l._container=c,c.__vue_app__=l,pr(y.component)||y.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return s.provides[c]=f,l}};return l}}function Es(e,t,n,i,r=!1){if(L(e)){e.forEach((y,A)=>Es(y,t&&(L(t)?t[A]:t),n,i,r));return}if(Pi(i)&&!r)return;const s=i.shapeFlag&4?pr(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=e,c=t&&t.r,f=a.refs===G?a.refs={}:a.refs,p=a.setupState;if(c!=null&&c!==l&&(ce(c)?(f[c]=null,B(p,c)&&(p[c]=null)):ye(c)&&(c.value=null)),x(l))wt(l,a,12,[o,f]);else{const y=ce(l),A=ye(l);if(y||A){const N=()=>{if(e.f){const b=y?B(p,l)?p[l]:f[l]:l.value;r?L(b)&&Gs(b,s):L(b)?b.includes(s)||b.push(s):y?(f[l]=[s],B(p,l)&&(p[l]=f[l])):(l.value=[s],e.k&&(f[e.k]=l.value))}else y?(f[l]=o,B(p,l)&&(p[l]=o)):A&&(l.value=o,e.k&&(f[e.k]=o))};o?(N.id=-1,Ie(N,n)):N()}}}const Ie=Ef;function Yf(e){return Qf(e)}function Qf(e,t){const n=Ch();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:p,nextSibling:y,setScopeId:A=xe,insertStaticContent:N}=e,b=(u,h,d,m=null,g=null,I=null,T=!1,v=null,E=!!h.dynamicChildren)=>{if(u===h)return;u&&!Ut(u,h)&&(m=gi(u),He(u,g,I,!0),u=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:_,ref:S,shapeFlag:C}=h;switch(_){case fr:X(u,h,d,m);break;case Ue:H(u,h,d,m);break;case Hr:u==null&&ge(h,d,m,T);break;case We:je(u,h,d,m,g,I,T,v,E);break;default:C&1?re(u,h,d,m,g,I,T,v,E):C&6?et(u,h,d,m,g,I,T,v,E):(C&64||C&128)&&_.process(u,h,d,m,g,I,T,v,E,Xt)}S!=null&&g&&Es(S,u&&u.ref,I,h||u,!h)},X=(u,h,d,m)=>{if(u==null)i(h.el=a(h.children),d,m);else{const g=h.el=u.el;h.children!==u.children&&c(g,h.children)}},H=(u,h,d,m)=>{u==null?i(h.el=l(h.children||""),d,m):h.el=u.el},ge=(u,h,d,m)=>{[u.el,u.anchor]=N(u.children,h,d,m,u.el,u.anchor)},D=({el:u,anchor:h},d,m)=>{let g;for(;u&&u!==h;)g=y(u),i(u,d,m),u=g;i(h,d,m)},q=({el:u,anchor:h})=>{let d;for(;u&&u!==h;)d=y(u),r(u),u=d;r(h)},re=(u,h,d,m,g,I,T,v,E)=>{T=T||h.type==="svg",u==null?Be(h,d,m,g,I,T,v,E):Q(u,h,g,I,T,v,E)},Be=(u,h,d,m,g,I,T,v)=>{let E,_;const{type:S,props:C,shapeFlag:R,transition:P,dirs:U}=u;if(E=u.el=o(u.type,I,C&&C.is,C),R&8?f(E,u.children):R&16&&M(u.children,E,null,m,g,I&&S!=="foreignObject",T,v),U&&Dt(u,null,m,"created"),Pe(E,u,u.scopeId,T,m),C){for(const W in C)W!=="value"&&!Ri(W)&&s(E,W,null,C[W],I,u.children,m,g,tt);"value"in C&&s(E,"value",null,C.value),(_=C.onVnodeBeforeMount)&&Ve(_,m,u)}U&&Dt(u,null,m,"beforeMount");const z=(!g||g&&!g.pendingBranch)&&P&&!P.persisted;z&&P.beforeEnter(E),i(E,h,d),((_=C&&C.onVnodeMounted)||z||U)&&Ie(()=>{_&&Ve(_,m,u),z&&P.enter(E),U&&Dt(u,null,m,"mounted")},g)},Pe=(u,h,d,m,g)=>{if(d&&A(u,d),m)for(let I=0;I<m.length;I++)A(u,m[I]);if(g){let I=g.subTree;if(h===I){const T=g.vnode;Pe(u,T,T.scopeId,T.slotScopeIds,g.parent)}}},M=(u,h,d,m,g,I,T,v,E=0)=>{for(let _=E;_<u.length;_++){const S=u[_]=v?mt(u[_]):Ke(u[_]);b(null,S,h,d,m,g,I,T,v)}},Q=(u,h,d,m,g,I,T)=>{const v=h.el=u.el;let{patchFlag:E,dynamicChildren:_,dirs:S}=h;E|=u.patchFlag&16;const C=u.props||G,R=h.props||G;let P;d&&Nt(d,!1),(P=R.onVnodeBeforeUpdate)&&Ve(P,d,h,u),S&&Dt(h,u,d,"beforeUpdate"),d&&Nt(d,!0);const U=g&&h.type!=="foreignObject";if(_?J(u.dynamicChildren,_,v,d,m,U,I):T||K(u,h,v,null,d,m,U,I,!1),E>0){if(E&16)Te(v,h,C,R,d,m,g);else if(E&2&&C.class!==R.class&&s(v,"class",null,R.class,g),E&4&&s(v,"style",C.style,R.style,g),E&8){const z=h.dynamicProps;for(let W=0;W<z.length;W++){const te=z[W],De=C[te],Jt=R[te];(Jt!==De||te==="value")&&s(v,te,De,Jt,g,u.children,d,m,tt)}}E&1&&u.children!==h.children&&f(v,h.children)}else!T&&_==null&&Te(v,h,C,R,d,m,g);((P=R.onVnodeUpdated)||S)&&Ie(()=>{P&&Ve(P,d,h,u),S&&Dt(h,u,d,"updated")},m)},J=(u,h,d,m,g,I,T)=>{for(let v=0;v<h.length;v++){const E=u[v],_=h[v],S=E.el&&(E.type===We||!Ut(E,_)||E.shapeFlag&70)?p(E.el):d;b(E,_,S,null,m,g,I,T,!0)}},Te=(u,h,d,m,g,I,T)=>{if(d!==m){if(d!==G)for(const v in d)!Ri(v)&&!(v in m)&&s(u,v,d[v],null,T,h.children,g,I,tt);for(const v in m){if(Ri(v))continue;const E=m[v],_=d[v];E!==_&&v!=="value"&&s(u,v,_,E,T,h.children,g,I,tt)}"value"in m&&s(u,"value",d.value,m.value)}},je=(u,h,d,m,g,I,T,v,E)=>{const _=h.el=u?u.el:a(""),S=h.anchor=u?u.anchor:a("");let{patchFlag:C,dynamicChildren:R,slotScopeIds:P}=h;P&&(v=v?v.concat(P):P),u==null?(i(_,d,m),i(S,d,m),M(h.children,d,S,g,I,T,v,E)):C>0&&C&64&&R&&u.dynamicChildren?(J(u.dynamicChildren,R,d,g,I,T,v),(h.key!=null||g&&h===g.subTree)&&ac(u,h,!0)):K(u,h,d,S,g,I,T,v,E)},et=(u,h,d,m,g,I,T,v,E)=>{h.slotScopeIds=v,u==null?h.shapeFlag&512?g.ctx.activate(h,d,m,T,E):Tn(h,d,m,g,I,T,E):Jo(u,h,E)},Tn=(u,h,d,m,g,I,T)=>{const v=u.component=ud(u,m,g);if(ur(u)&&(v.ctx.renderer=Xt),fd(v),v.asyncDep){if(g&&g.registerDep(v,me),!u.el){const E=v.subTree=at(Ue);H(null,E,h,d)}return}me(v,u,h,d,g,I,T)},Jo=(u,h,d)=>{const m=h.component=u.component;if(yf(u,h,d))if(m.asyncDep&&!m.asyncResolved){Z(m,h,d);return}else m.next=h,hf(m.update),m.update();else h.el=u.el,m.vnode=h},me=(u,h,d,m,g,I,T)=>{const v=()=>{if(u.isMounted){let{next:S,bu:C,u:R,parent:P,vnode:U}=u,z=S,W;Nt(u,!1),S?(S.el=U.el,Z(u,S,T)):S=U,C&&Oi(C),(W=S.props&&S.props.onVnodeBeforeUpdate)&&Ve(W,P,S,U),Nt(u,!0);const te=Ur(u),De=u.subTree;u.subTree=te,b(De,te,p(De.el),gi(De),u,g,I),S.el=te.el,z===null&&vf(u,te.el),R&&Ie(R,g),(W=S.props&&S.props.onVnodeUpdated)&&Ie(()=>Ve(W,P,S,U),g)}else{let S;const{el:C,props:R}=h,{bm:P,m:U,parent:z}=u,W=Pi(h);if(Nt(u,!1),P&&Oi(P),!W&&(S=R&&R.onVnodeBeforeMount)&&Ve(S,z,h),Nt(u,!0),C&&Mr){const te=()=>{u.subTree=Ur(u),Mr(C,u.subTree,u,g,null)};W?h.type.__asyncLoader().then(()=>!u.isUnmounted&&te()):te()}else{const te=u.subTree=Ur(u);b(null,te,d,m,u,g,I),h.el=te.el}if(U&&Ie(U,g),!W&&(S=R&&R.onVnodeMounted)){const te=h;Ie(()=>Ve(S,z,te),g)}(h.shapeFlag&256||z&&Pi(z.vnode)&&z.vnode.shapeFlag&256)&&u.a&&Ie(u.a,g),u.isMounted=!0,h=d=m=null}},E=u.effect=new Qs(v,()=>ao(_),u.scope),_=u.update=()=>E.run();_.id=u.uid,Nt(u,!0),_()},Z=(u,h,d)=>{h.component=u;const m=u.vnode.props;u.vnode=h,u.next=null,Kf(u,h.props,m,d),Gf(u,h.children,d),gn(),ua(),mn()},K=(u,h,d,m,g,I,T,v,E=!1)=>{const _=u&&u.children,S=u?u.shapeFlag:0,C=h.children,{patchFlag:R,shapeFlag:P}=h;if(R>0){if(R&128){pi(_,C,d,m,g,I,T,v,E);return}else if(R&256){kt(_,C,d,m,g,I,T,v,E);return}}P&8?(S&16&&tt(_,g,I),C!==_&&f(d,C)):S&16?P&16?pi(_,C,d,m,g,I,T,v,E):tt(_,g,I,!0):(S&8&&f(d,""),P&16&&M(C,d,m,g,I,T,v,E))},kt=(u,h,d,m,g,I,T,v,E)=>{u=u||nn,h=h||nn;const _=u.length,S=h.length,C=Math.min(_,S);let R;for(R=0;R<C;R++){const P=h[R]=E?mt(h[R]):Ke(h[R]);b(u[R],P,d,null,g,I,T,v,E)}_>S?tt(u,g,I,!0,!1,C):M(h,d,m,g,I,T,v,E,C)},pi=(u,h,d,m,g,I,T,v,E)=>{let _=0;const S=h.length;let C=u.length-1,R=S-1;for(;_<=C&&_<=R;){const P=u[_],U=h[_]=E?mt(h[_]):Ke(h[_]);if(Ut(P,U))b(P,U,d,null,g,I,T,v,E);else break;_++}for(;_<=C&&_<=R;){const P=u[C],U=h[R]=E?mt(h[R]):Ke(h[R]);if(Ut(P,U))b(P,U,d,null,g,I,T,v,E);else break;C--,R--}if(_>C){if(_<=R){const P=R+1,U=P<S?h[P].el:m;for(;_<=R;)b(null,h[_]=E?mt(h[_]):Ke(h[_]),d,U,g,I,T,v,E),_++}}else if(_>R)for(;_<=C;)He(u[_],g,I,!0),_++;else{const P=_,U=_,z=new Map;for(_=U;_<=R;_++){const Ce=h[_]=E?mt(h[_]):Ke(h[_]);Ce.key!=null&&z.set(Ce.key,_)}let W,te=0;const De=R-U+1;let Jt=!1,Zo=0;const Cn=new Array(De);for(_=0;_<De;_++)Cn[_]=0;for(_=P;_<=C;_++){const Ce=u[_];if(te>=De){He(Ce,g,I,!0);continue}let $e;if(Ce.key!=null)$e=z.get(Ce.key);else for(W=U;W<=R;W++)if(Cn[W-U]===0&&Ut(Ce,h[W])){$e=W;break}$e===void 0?He(Ce,g,I,!0):(Cn[$e-U]=_+1,$e>=Zo?Zo=$e:Jt=!0,b(Ce,h[$e],d,null,g,I,T,v,E),te++)}const ea=Jt?Zf(Cn):nn;for(W=ea.length-1,_=De-1;_>=0;_--){const Ce=U+_,$e=h[Ce],ta=Ce+1<S?h[Ce+1].el:m;Cn[_]===0?b(null,$e,d,ta,g,I,T,v,E):Jt&&(W<0||_!==ea[W]?Pt($e,d,ta,2):W--)}}},Pt=(u,h,d,m,g=null)=>{const{el:I,type:T,transition:v,children:E,shapeFlag:_}=u;if(_&6){Pt(u.component.subTree,h,d,m);return}if(_&128){u.suspense.move(h,d,m);return}if(_&64){T.move(u,h,d,Xt);return}if(T===We){i(I,h,d);for(let C=0;C<E.length;C++)Pt(E[C],h,d,m);i(u.anchor,h,d);return}if(T===Hr){D(u,h,d);return}if(m!==2&&_&1&&v)if(m===0)v.beforeEnter(I),i(I,h,d),Ie(()=>v.enter(I),g);else{const{leave:C,delayLeave:R,afterLeave:P}=v,U=()=>i(I,h,d),z=()=>{C(I,()=>{U(),P&&P()})};R?R(I,U,z):z()}else i(I,h,d)},He=(u,h,d,m=!1,g=!1)=>{const{type:I,props:T,ref:v,children:E,dynamicChildren:_,shapeFlag:S,patchFlag:C,dirs:R}=u;if(v!=null&&Es(v,null,d,u,!0),S&256){h.ctx.deactivate(u);return}const P=S&1&&R,U=!Pi(u);let z;if(U&&(z=T&&T.onVnodeBeforeUnmount)&&Ve(z,h,u),S&6)lh(u.component,d,m);else{if(S&128){u.suspense.unmount(d,m);return}P&&Dt(u,null,h,"beforeUnmount"),S&64?u.type.remove(u,h,d,g,Xt,m):_&&(I!==We||C>0&&C&64)?tt(_,h,d,!1,!0):(I===We&&C&384||!g&&S&16)&&tt(E,h,d),m&&Yo(u)}(U&&(z=T&&T.onVnodeUnmounted)||P)&&Ie(()=>{z&&Ve(z,h,u),P&&Dt(u,null,h,"unmounted")},d)},Yo=u=>{const{type:h,el:d,anchor:m,transition:g}=u;if(h===We){ah(d,m);return}if(h===Hr){q(u);return}const I=()=>{r(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:v}=g,E=()=>T(d,I);v?v(u.el,I,E):E()}else I()},ah=(u,h)=>{let d;for(;u!==h;)d=y(u),r(u),u=d;r(h)},lh=(u,h,d)=>{const{bum:m,scope:g,update:I,subTree:T,um:v}=u;m&&Oi(m),g.stop(),I&&(I.active=!1,He(T,u,h,d)),v&&Ie(v,h),Ie(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},tt=(u,h,d,m=!1,g=!1,I=0)=>{for(let T=I;T<u.length;T++)He(u[T],h,d,m,g)},gi=u=>u.shapeFlag&6?gi(u.component.subTree):u.shapeFlag&128?u.suspense.next():y(u.anchor||u.el),Qo=(u,h,d)=>{u==null?h._vnode&&He(h._vnode,null,null,!0):b(h._vnode||null,u,h,null,null,null,d),ua(),$l(),h._vnode=u},Xt={p:b,um:He,m:Pt,r:Yo,mt:Tn,mc:M,pc:K,pbc:J,n:gi,o:e};let Lr,Mr;return t&&([Lr,Mr]=t(Xt)),{render:Qo,hydrate:Lr,createApp:Jf(Qo,Lr)}}function Nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ac(e,t,n=!1){const i=e.children,r=t.children;if(L(i)&&L(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=mt(r[s]),a.el=o.el),n||ac(o,a)),a.type===fr&&(a.el=o.el)}}function Zf(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(r=n[n.length-1],e[r]<c){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const ed=e=>e.__isTeleport,We=Symbol(void 0),fr=Symbol(void 0),Ue=Symbol(void 0),Hr=Symbol(void 0),Mn=[];let Me=null;function Rn(e=!1){Mn.push(Me=e?null:[])}function td(){Mn.pop(),Me=Mn[Mn.length-1]||null}let Hn=1;function Ia(e){Hn+=e}function lc(e){return e.dynamicChildren=Hn>0?Me||nn:null,td(),Hn>0&&Me&&Me.push(e),e}function wi(e,t,n,i,r,s){return lc(Zt(e,t,n,i,r,s,!0))}function nd(e,t,n,i,r){return lc(at(e,t,n,i,r,!0))}function id(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const dr="__vInternal",cc=({key:e})=>e??null,Di=({ref:e,ref_key:t,ref_for:n})=>e!=null?ce(e)||ye(e)||x(e)?{i:Re,r:e,k:t,f:!!n}:e:null;function Zt(e,t=null,n=null,i=0,r=null,s=e===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cc(t),ref:t&&Di(t),scopeId:Kl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Re};return a?(uo(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),Hn>0&&!o&&Me&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Me.push(l),l}const at=rd;function rd(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===Uf)&&(e=Ue),id(e)){const a=St(e,t,!0);return n&&uo(a,n),Hn>0&&!s&&Me&&(a.shapeFlag&6?Me[Me.indexOf(e)]=a:Me.push(a)),a.patchFlag|=-2,a}if(md(e)&&(e=e.__vccOpts),t){t=sd(t);let{class:a,style:l}=t;a&&!ce(a)&&(t.class=zs(a)),ie(l)&&(xl(l)&&!L(l)&&(l=de({},l)),t.style=Ks(l))}const o=ce(e)?1:If(e)?128:ed(e)?64:ie(e)?4:x(e)?2:0;return Zt(e,t,n,i,r,o,s,!0)}function sd(e){return e?xl(e)||dr in e?de({},e):e:null}function St(e,t,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=e,a=t?ad(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&cc(a),ref:t&&t.ref?n&&r?L(r)?r.concat(Di(t)):[r,Di(t)]:Di(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==We?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&St(e.ssContent),ssFallback:e.ssFallback&&St(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function od(e=" ",t=0){return at(fr,null,e,t)}function $r(e="",t=!1){return t?(Rn(),nd(Ue,null,e)):at(Ue,null,e)}function Ke(e){return e==null||typeof e=="boolean"?at(Ue):L(e)?at(We,null,e.slice()):typeof e=="object"?mt(e):at(fr,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:St(e)}function uo(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),uo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(dr in t)?t._ctx=Re:r===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else x(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),i&64?(n=16,t=[od(t)]):n=8);e.children=t,e.shapeFlag|=n}function ad(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=zs([t.class,i.class]));else if(r==="style")t.style=Ks([t.style,i.style]);else if(rr(r)){const s=t[r],o=i[r];o&&s!==o&&!(L(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Ve(e,t,n,i=null){Oe(e,t,7,[n,i])}const ld=oc();let cd=0;function ud(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||ld,s={uid:cd++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ah(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nc(i,r),emitsOptions:Wl(i,r),emit:null,emitted:null,propsDefaults:G,inheritAttrs:i.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=pf.bind(null,s),e.ce&&e.ce(s),s}let ne=null;const hd=()=>ne||Re,hn=e=>{ne=e,e.scope.on()},Vt=()=>{ne&&ne.scope.off(),ne=null};function uc(e){return e.vnode.shapeFlag&4}let $n=!1;function fd(e,t=!1){$n=t;const{props:n,children:i}=e.vnode,r=uc(e);Wf(e,n,r,t),qf(e,i);const s=r?dd(e,t):void 0;return $n=!1,s}function dd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ul(new Proxy(e.ctx,Ff));const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?gd(e):null;hn(e),gn();const s=wt(i,e,0,[e.props,r]);if(mn(),Vt(),Tl(s)){if(s.then(Vt,Vt),t)return s.then(o=>{Ea(e,o,t)}).catch(o=>{lr(o,e,0)});e.asyncDep=s}else Ea(e,s,t)}else hc(e,t)}function Ea(e,t,n){x(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Fl(t)),hc(e,n)}let wa;function hc(e,t,n){const i=e.type;if(!e.render){if(!t&&wa&&!i.render){const r=i.template||lo(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,c=de(de({isCustomElement:s,delimiters:a},o),l);i.render=wa(r,c)}}e.render=i.render||xe}hn(e),gn(),Bf(e),mn(),Vt()}function pd(e){return new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}})}function gd(e){const t=i=>{e.exposed=i||{}};let n;return{get attrs(){return n||(n=pd(e))},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Fl(Ul(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ln)return Ln[n](e)},has(t,n){return n in t||n in Ln}}))}function md(e){return x(e)&&"__vccOpts"in e}const _d=(e,t)=>af(e,t,$n),yd=Symbol(""),vd=()=>ki(yd),Id="3.2.47",Ed="http://www.w3.org/2000/svg",Ft=typeof document<"u"?document:null,Ta=Ft&&Ft.createElement("template"),wd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?Ft.createElementNS(Ed,e):Ft.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Ft.createTextNode(e),createComment:e=>Ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ta.innerHTML=i?`<svg>${e}</svg>`:e;const a=Ta.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Td(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Cd(e,t,n){const i=e.style,r=ce(n);if(n&&!r){if(t&&!ce(t))for(const s in t)n[s]==null&&ws(i,s,"");for(const s in n)ws(i,s,n[s])}else{const s=i.display;r?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=s)}}const Ca=/\s*!important$/;function ws(e,t,n){if(L(n))n.forEach(i=>ws(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Ad(e,t);Ca.test(n)?e.setProperty(pn(i),n.replace(Ca,""),"important"):e[i]=n}}const Aa=["Webkit","Moz","ms"],Vr={};function Ad(e,t){const n=Vr[t];if(n)return n;let i=un(t);if(i!=="filter"&&i in e)return Vr[t]=i;i=Cl(i);for(let r=0;r<Aa.length;r++){const s=Aa[r]+i;if(s in e)return Vr[t]=s}return t}const ba="http://www.w3.org/1999/xlink";function bd(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ba,t.slice(6,t.length)):e.setAttributeNS(ba,t,n);else{const s=ph(t);n==null||s&&!wl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Sd(e,t,n,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=wl(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Qt(e,t,n,i){e.addEventListener(t,n,i)}function Rd(e,t,n,i){e.removeEventListener(t,n,i)}function Od(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=kd(t);if(i){const c=s[t]=Nd(i,r);Qt(e,a,c,l)}else o&&(Rd(e,a,o,l),s[t]=void 0)}}const Sa=/(?:Once|Passive|Capture)$/;function kd(e){let t;if(Sa.test(e)){t={};let i;for(;i=e.match(Sa);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pn(e.slice(2)),t]}let Wr=0;const Pd=Promise.resolve(),Dd=()=>Wr||(Pd.then(()=>Wr=0),Wr=Date.now());function Nd(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Oe(Ld(i,n.value),t,5,[i])};return n.value=e,n.attached=Dd(),n}function Ld(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Ra=/^on[a-z]/,Md=(e,t,n,i,r=!1,s,o,a,l)=>{t==="class"?Td(e,i,r):t==="style"?Cd(e,n,i):rr(t)?qs(t)||Od(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xd(e,t,i,r))?Sd(e,t,i,s,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),bd(e,t,i,r))};function xd(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&Ra.test(t)&&x(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ra.test(t)&&ce(n)?!1:t in e}const Ud={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bf.props;const Oa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return L(t)?n=>Oi(t,n):t};function Fd(e){e.target.composing=!0}function ka(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Pa={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e._assign=Oa(r);const s=i||r.props&&r.props.type==="number";Qt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=ls(a)),e._assign(a)}),n&&Qt(e,"change",()=>{e.value=e.value.trim()}),t||(Qt(e,"compositionstart",Fd),Qt(e,"compositionend",ka),Qt(e,"change",ka))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e._assign=Oa(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===t||(r||e.type==="number")&&ls(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Bd=de({patchProp:Md},wd);let Da;function jd(){return Da||(Da=Yf(Bd))}const Hd=(...e)=>{const t=jd().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=$d(i);if(!r)return;const s=t._component;!x(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function $d(e){return ce(e)?document.querySelector(e):e}/**
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
 */const fc=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Vd=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,f=s>>2,p=(s&3)<<4|a>>4;let y=(a&15)<<2|c>>6,A=c&63;l||(A=64,o||(y=64)),i.push(n[f],n[p],n[y],n[A])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vd(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||c==null||p==null)throw new Wd;const y=s<<2|a>>4;if(i.push(y),c!==64){const A=a<<4&240|c>>2;if(i.push(A),p!==64){const N=c<<6&192|p;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kd=function(e){const t=fc(e);return dc.encodeByteArray(t,!0)},pc=function(e){return Kd(e).replace(/\./g,"")},gc=function(e){try{return dc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qd=()=>zd().__FIREBASE_DEFAULTS__,Gd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Xd=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gc(e[1]);return t&&JSON.parse(t)},ho=()=>{try{return qd()||Gd()||Xd()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jd=e=>{var t,n;return(n=(t=ho())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Yd=()=>{var e;return(e=ho())===null||e===void 0?void 0:e.config},mc=e=>{var t;return(t=ho())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Qd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function ep(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function tp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function np(){const e=pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const sp="FirebaseError";class ft extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=sp,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?op(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ft(r,a,i)}}function op(e,t){return e.replace(ap,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const ap=/\{\$([^}]+)}/g;function lp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Hi(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(Na(s)&&Na(o)){if(!Hi(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Na(e){return e!==null&&typeof e=="object"}/**
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
 */function ei(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function On(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function kn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function cp(e,t){const n=new up(e,t);return n.subscribe.bind(n)}class up{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");hp(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Kr),r.error===void 0&&(r.error=Kr),r.complete===void 0&&(r.complete=Kr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Kr(){}/**
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
 */function dt(e){return e&&e._delegate?e._delegate:e}class zt{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class fp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new Qd;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pp(t))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Mt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mt){return this.instances.has(t)}getOptions(t=Mt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:dp(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Mt){return this.component?this.component.multipleInstances?t:Mt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dp(e){return e===Mt?void 0:e}function pp(e){return e.instantiationMode==="EAGER"}/**
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
 */class gp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const mp={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},_p=$.INFO,yp={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},vp=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=yp[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fo{constructor(t){this.name=t,this._logLevel=_p,this._logHandler=vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Ip=(e,t)=>t.some(n=>e instanceof n);let La,Ma;function Ep(){return La||(La=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wp(){return Ma||(Ma=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _c=new WeakMap,Ts=new WeakMap,yc=new WeakMap,zr=new WeakMap,po=new WeakMap;function Tp(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Tt(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_c.set(n,e)}).catch(()=>{}),po.set(t,e),t}function Cp(e){if(Ts.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ts.set(e,t)}let Cs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ts.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ap(e){Cs=e(Cs)}function bp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(qr(this),t,...n);return yc.set(i,t.sort?t.sort():[t]),Tt(i)}:wp().includes(e)?function(...t){return e.apply(qr(this),t),Tt(_c.get(this))}:function(...t){return Tt(e.apply(qr(this),t))}}function Sp(e){return typeof e=="function"?bp(e):(e instanceof IDBTransaction&&Cp(e),Ip(e,Ep())?new Proxy(e,Cs):e)}function Tt(e){if(e instanceof IDBRequest)return Tp(e);if(zr.has(e))return zr.get(e);const t=Sp(e);return t!==e&&(zr.set(e,t),po.set(t,e)),t}const qr=e=>po.get(e);function Rp(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Tt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Tt(o.result),l.oldVersion,l.newVersion,Tt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Op=["get","getKey","getAll","getAllKeys","count"],kp=["put","add","delete","clear"],Gr=new Map;function xa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gr.get(t))return Gr.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=kp.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Op.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Gr.set(t,s),s}Ap(e=>({...e,get:(t,n,i)=>xa(t,n)||e.get(t,n,i),has:(t,n)=>!!xa(t,n)||e.has(t,n)}));/**
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
 */class Pp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dp(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Dp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const As="@firebase/app",Ua="0.9.9";/**
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
 */const qt=new fo("@firebase/app"),Np="@firebase/app-compat",Lp="@firebase/analytics-compat",Mp="@firebase/analytics",xp="@firebase/app-check-compat",Up="@firebase/app-check",Fp="@firebase/auth",Bp="@firebase/auth-compat",jp="@firebase/database",Hp="@firebase/database-compat",$p="@firebase/functions",Vp="@firebase/functions-compat",Wp="@firebase/installations",Kp="@firebase/installations-compat",zp="@firebase/messaging",qp="@firebase/messaging-compat",Gp="@firebase/performance",Xp="@firebase/performance-compat",Jp="@firebase/remote-config",Yp="@firebase/remote-config-compat",Qp="@firebase/storage",Zp="@firebase/storage-compat",eg="@firebase/firestore",tg="@firebase/firestore-compat",ng="firebase",ig="9.21.0";/**
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
 */const bs="[DEFAULT]",rg={[As]:"fire-core",[Np]:"fire-core-compat",[Mp]:"fire-analytics",[Lp]:"fire-analytics-compat",[Up]:"fire-app-check",[xp]:"fire-app-check-compat",[Fp]:"fire-auth",[Bp]:"fire-auth-compat",[jp]:"fire-rtdb",[Hp]:"fire-rtdb-compat",[$p]:"fire-fn",[Vp]:"fire-fn-compat",[Wp]:"fire-iid",[Kp]:"fire-iid-compat",[zp]:"fire-fcm",[qp]:"fire-fcm-compat",[Gp]:"fire-perf",[Xp]:"fire-perf-compat",[Jp]:"fire-rc",[Yp]:"fire-rc-compat",[Qp]:"fire-gcs",[Zp]:"fire-gcs-compat",[eg]:"fire-fst",[tg]:"fire-fst-compat","fire-js":"fire-js",[ng]:"fire-js-all"};/**
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
 */const $i=new Map,Ss=new Map;function sg(e,t){try{e.container.addComponent(t)}catch(n){qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fn(e){const t=e.name;if(Ss.has(t))return qt.debug(`There were multiple attempts to register component ${t}.`),!1;Ss.set(t,e);for(const n of $i.values())sg(n,e);return!0}function vc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const og={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ct=new Zn("app","Firebase",og);/**
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
 */class ag{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const _n=ig;function Ic(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:bs,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});if(n||(n=Yd()),!n)throw Ct.create("no-options");const s=$i.get(r);if(s){if(Hi(n,s.options)&&Hi(i,s.config))return s;throw Ct.create("duplicate-app",{appName:r})}const o=new gp(r);for(const l of Ss.values())o.addComponent(l);const a=new ag(n,i,o);return $i.set(r,a),a}function lg(e=bs){const t=$i.get(e);if(!t&&e===bs)return Ic();if(!t)throw Ct.create("no-app",{appName:e});return t}function At(e,t,n){var i;let r=(i=rg[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}fn(new zt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const cg="firebase-heartbeat-database",ug=1,Vn="firebase-heartbeat-store";let Xr=null;function Ec(){return Xr||(Xr=Rp(cg,ug,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vn)}}}).catch(e=>{throw Ct.create("idb-open",{originalErrorMessage:e.message})})),Xr}async function hg(e){try{return(await Ec()).transaction(Vn).objectStore(Vn).get(wc(e))}catch(t){if(t instanceof ft)qt.warn(t.message);else{const n=Ct.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qt.warn(n.message)}}}async function Fa(e,t){try{const i=(await Ec()).transaction(Vn,"readwrite");return await i.objectStore(Vn).put(t,wc(e)),i.done}catch(n){if(n instanceof ft)qt.warn(n.message);else{const i=Ct.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(i.message)}}}function wc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const fg=1024,dg=30*24*60*60*1e3;class pg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mg(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ba();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=dg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ba(),{heartbeatsToSend:n,unsentEntries:i}=gg(this._heartbeatsCache.heartbeats),r=pc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ba(){return new Date().toISOString().substring(0,10)}function gg(e,t=fg){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ja(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ja(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class mg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?rp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ja(e){return pc(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function _g(e){fn(new zt("platform-logger",t=>new Pp(t),"PRIVATE")),fn(new zt("heartbeat",t=>new pg(t),"PRIVATE")),At(As,Ua,e),At(As,Ua,"esm2017"),At("fire-js","")}_g("");var yg="firebase",vg="9.21.0";/**
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
 */At(yg,vg,"app");var Ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,go=go||{},k=Ig||self;function Vi(){}function gr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ti(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Eg(e){return Object.prototype.hasOwnProperty.call(e,Jr)&&e[Jr]||(e[Jr]=++wg)}var Jr="closure_uid_"+(1e9*Math.random()>>>0),wg=0;function Tg(e,t,n){return e.call.apply(e.bind,arguments)}function Cg(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function he(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?he=Tg:he=Cg,he.apply(null,arguments)}function Ti(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function oe(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(i,o)}}function Rt(){this.s=this.s,this.o=this.o}var Ag=0;Rt.prototype.s=!1;Rt.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Ag!=0)&&Eg(this)};Rt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function mo(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Ha(e,t){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(gr(i)){const r=e.length||0,s=i.length||0;e.length=r+s;for(let o=0;o<s;o++)e[r+o]=i[o]}else e.push(i)}}function fe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var bg=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{k.addEventListener("test",Vi,t),k.removeEventListener("test",Vi,t)}catch{}return e}();function Wi(e){return/^[\s\xa0]*$/.test(e)}var $a=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Yr(e,t){return e<t?-1:e>t?1:0}function mr(){var e=k.navigator;return e&&(e=e.userAgent)?e:""}function qe(e){return mr().indexOf(e)!=-1}function _o(e){return _o[" "](e),e}_o[" "]=Vi;function Cc(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}var Sg=qe("Opera"),Wn=qe("Trident")||qe("MSIE"),Ac=qe("Edge"),Rs=Ac||Wn,bc=qe("Gecko")&&!(mr().toLowerCase().indexOf("webkit")!=-1&&!qe("Edge"))&&!(qe("Trident")||qe("MSIE"))&&!qe("Edge"),Rg=mr().toLowerCase().indexOf("webkit")!=-1&&!qe("Edge");function Sc(){var e=k.document;return e?e.documentMode:void 0}var Os;e:{var Qr="",Zr=function(){var e=mr();if(bc)return/rv:([^\);]+)(\)|;)/.exec(e);if(Ac)return/Edge\/([\d\.]+)/.exec(e);if(Wn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Rg)return/WebKit\/(\S+)/.exec(e);if(Sg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Zr&&(Qr=Zr?Zr[1]:""),Wn){var es=Sc();if(es!=null&&es>parseFloat(Qr)){Os=String(es);break e}}Os=Qr}var Og={};function kg(){return Cc(Og,9,function(){let e=0;const t=$a(String(Os)).split("."),n=$a("9").split("."),i=Math.max(t.length,n.length);for(let o=0;e==0&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;e=Yr(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Yr(r[2].length==0,s[2].length==0)||Yr(r[2],s[2]),r=r[3],s=s[3]}while(e==0)}return 0<=e})}k.document&&Wn&&Sc();function Kn(e,t){if(fe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(bc){e:{try{_o(t.nodeName);var r=!0;break e}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Pg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Kn.$.h.call(this)}}oe(Kn,fe);var Pg={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ni="closure_listenable_"+(1e6*Math.random()|0),Dg=0;function Ng(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++Dg,this.fa=this.ia=!1}function _r(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function yo(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Rc(e){const t={};for(const n in e)t[n]=e[n];return t}const Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oc(e,t){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)e[n]=i[n];for(let s=0;s<Va.length;s++)n=Va[s],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function yr(e){this.src=e,this.g={},this.h=0}yr.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ps(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Ng(t,this.src,s,!!i,r),t.ia=n,e.push(t)),t};function ks(e,t){var n=t.type;if(n in e.g){var i=e.g[n],r=Tc(i,t),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(_r(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ps(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}var vo="closure_lm_"+(1e6*Math.random()|0),ts={};function kc(e,t,n,i,r){if(i&&i.once)return Dc(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)kc(e,t[s],n,i,r);return null}return n=wo(n),e&&e[ni]?e.O(t,n,ti(i)?!!i.capture:!!i,r):Pc(e,t,n,!1,i,r)}function Pc(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=ti(r)?!!r.capture:!!r,a=Eo(e);if(a||(e[vo]=a=new yr(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=Lg(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)bg||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(Lc(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Lg(){function e(n){return t.call(e.src,e.listener,n)}const t=Mg;return e}function Dc(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Dc(e,t[s],n,i,r);return null}return n=wo(n),e&&e[ni]?e.P(t,n,ti(i)?!!i.capture:!!i,r):Pc(e,t,n,!0,i,r)}function Nc(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)Nc(e,t[s],n,i,r);else i=ti(i)?!!i.capture:!!i,n=wo(n),e&&e[ni]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ps(s,n,i,r),-1<n&&(_r(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Eo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ps(t,n,i,r)),(n=-1<e?t[e]:null)&&Io(n))}function Io(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ni])ks(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Lc(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Eo(t))?(ks(n,e),n.h==0&&(n.src=null,t[vo]=null)):_r(e)}}}function Lc(e){return e in ts?ts[e]:ts[e]="on"+e}function Mg(e,t){if(e.fa)e=!0;else{t=new Kn(t,this);var n=e.listener,i=e.la||e.src;e.ia&&Io(e),e=n.call(i,t)}return e}function Eo(e){return e=e[vo],e instanceof yr?e:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function wo(e){return typeof e=="function"?e:(e[ns]||(e[ns]=function(t){return e.handleEvent(t)}),e[ns])}function se(){Rt.call(this),this.i=new yr(this),this.S=this,this.J=null}oe(se,Rt);se.prototype[ni]=!0;se.prototype.removeEventListener=function(e,t,n,i){Nc(this,e,t,n,i)};function le(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,typeof t=="string")t=new fe(t,e);else if(t instanceof fe)t.target=t.target||e;else{var r=t;t=new fe(i,e),Oc(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=Ci(o,i,!0,t)&&r}if(o=t.g=e,r=Ci(o,i,!0,t)&&r,r=Ci(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=Ci(o,i,!1,t)&&r}se.prototype.N=function(){if(se.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)_r(n[i]);delete e.g[t],e.h--}}this.J=null};se.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)};se.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};function Ci(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ks(e.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var To=k.JSON.stringify;function xg(){var e=Uc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ug{constructor(){this.h=this.g=null}add(t,n){const i=Mc.get();i.set(t,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Mc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Fg,e=>e.reset());class Fg{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Bg(e){k.setTimeout(()=>{throw e},0)}function xc(e,t){Ds||jg(),Ns||(Ds(),Ns=!0),Uc.add(e,t)}var Ds;function jg(){var e=k.Promise.resolve(void 0);Ds=function(){e.then(Hg)}}var Ns=!1,Uc=new Ug;function Hg(){for(var e;e=xg();){try{e.h.call(e.g)}catch(n){Bg(n)}var t=Mc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ns=!1}function vr(e,t){se.call(this),this.h=e||1,this.g=t||k,this.j=he(this.qb,this),this.l=Date.now()}oe(vr,se);w=vr.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),le(this,"tick"),this.ga&&(Co(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Co(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}w.N=function(){vr.$.N.call(this),Co(this),delete this.g};function Ao(e,t,n){if(typeof e=="function")n&&(e=he(e,n));else if(e&&typeof e.handleEvent=="function")e=he(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:k.setTimeout(e,t||0)}function Fc(e){e.g=Ao(()=>{e.g=null,e.i&&(e.i=!1,Fc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class $g extends Rt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Fc(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zn(e){Rt.call(this),this.h=e,this.g={}}oe(zn,Rt);var Wa=[];function Bc(e,t,n,i){Array.isArray(n)||(n&&(Wa[0]=n.toString()),n=Wa);for(var r=0;r<n.length;r++){var s=kc(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function jc(e){yo(e.g,function(t,n){this.g.hasOwnProperty(n)&&Io(t)},e),e.g={}}zn.prototype.N=function(){zn.$.N.call(this),jc(this)};zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ir(){this.g=!0}Ir.prototype.Ea=function(){this.g=!1};function Vg(e,t,n,i,r,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var f=c[0];c=c[1];var p=f.split("_");o=2<=p.length&&p[1]=="type"?o+(f+"="+c+"&"):o+(f+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Wg(e,t,n,i,r,s,o){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+`
`+n+`
`+s+" "+o})}function en(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+zg(e,n)+(i?" "+i:"")})}function Kg(e,t){e.info(function(){return"TIMEOUT: "+t})}Ir.prototype.info=function(){};function zg(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return To(n)}catch{return t}}var yn={},Ka=null;function bo(){return Ka=Ka||new se}yn.Ta="serverreachability";function Hc(e){fe.call(this,yn.Ta,e)}oe(Hc,fe);function qn(e){const t=bo();le(t,new Hc(t))}yn.STAT_EVENT="statevent";function $c(e,t){fe.call(this,yn.STAT_EVENT,e),this.stat=t}oe($c,fe);function ve(e){const t=bo();le(t,new $c(t,e))}yn.Ua="timingevent";function Vc(e,t){fe.call(this,yn.Ua,e),this.size=t}oe(Vc,fe);function ii(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){e()},t)}var So={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},qg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ro(){}Ro.prototype.h=null;function za(e){return e.h||(e.h=e.i())}function Gg(){}var ri={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Oo(){fe.call(this,"d")}oe(Oo,fe);function ko(){fe.call(this,"c")}oe(ko,fe);var Ls;function Er(){}oe(Er,Ro);Er.prototype.g=function(){return new XMLHttpRequest};Er.prototype.i=function(){return{}};Ls=new Er;function si(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new zn(this),this.P=Xg,e=Rs?125:void 0,this.V=new vr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Wc}function Wc(){this.i=null,this.g="",this.h=!1}var Xg=45e3,Ms={},Ki={};w=si.prototype;w.setTimeout=function(e){this.P=e};function xs(e,t,n){e.L=1,e.v=Tr(ct(t)),e.s=n,e.S=!0,Kc(e,null)}function Kc(e,t){e.G=Date.now(),oi(e),e.A=ct(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),Zc(n.i,"t",i),e.C=0,n=e.l.I,e.h=new Wc,e.g=Iu(e.l,n?t:null,!e.s),0<e.O&&(e.M=new $g(he(e.Pa,e,e.g),e.O)),Bc(e.U,e.g,"readystatechange",e.nb),t=e.I?Rc(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),qn(),Vg(e.j,e.u,e.A,e.m,e.W,e.s)}w.nb=function(e){e=e.target;const t=this.M;t&&it(e)==3?t.l():this.Pa(e)};w.Pa=function(e){try{if(e==this.g)e:{const f=it(this.g);var t=this.g.Ia();const p=this.g.da();if(!(3>f)&&(f!=3||Rs||this.g&&(this.h.h||this.g.ja()||Ja(this.g)))){this.J||f!=4||t==7||(t==8||0>=p?qn(3):qn(2)),wr(this);var n=this.g.da();this.aa=n;t:if(zc(this)){var i=Ja(this.g);e="";var r=i.length,s=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),xn(this);var o="";break t}this.h.i=new k.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Wg(this.j,this.u,this.A,this.m,this.W,f,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wi(a)){var c=a;break t}}c=null}if(n=c)en(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Us(this,n);else{this.i=!1,this.o=3,ve(12),jt(this),xn(this);break e}}this.S?(qc(this,f,o),Rs&&this.i&&f==3&&(Bc(this.U,this.V,"tick",this.mb),this.V.start())):(en(this.j,this.m,o,null),Us(this,o)),f==4&&jt(this),this.i&&!this.J&&(f==4?mu(this.l,this):(this.i=!1,oi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ve(12)):(this.o=0,ve(13)),jt(this),xn(this)}}}catch{}finally{}};function zc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function qc(e,t,n){let i=!0,r;for(;!e.J&&e.C<n.length;)if(r=Jg(e,n),r==Ki){t==4&&(e.o=4,ve(14),i=!1),en(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Ms){e.o=4,ve(15),en(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else en(e.j,e.m,r,null),Us(e,r);zc(e)&&r!=Ki&&r!=Ms&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,ve(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ca&&(e.ca=!0,t=e.l,t.g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Uo(t),t.L=!0,ve(11))):(en(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),xn(e))}w.mb=function(){if(this.g){var e=it(this.g),t=this.g.ja();this.C<t.length&&(wr(this),qc(this,e,t),this.i&&e!=4&&oi(this))}};function Jg(e,t){var n=e.C,i=t.indexOf(`
`,n);return i==-1?Ki:(n=Number(t.substring(n,i)),isNaN(n)?Ms:(i+=1,i+n>t.length?Ki:(t=t.substr(i,n),e.C=i+n,t)))}w.cancel=function(){this.J=!0,jt(this)};function oi(e){e.Y=Date.now()+e.P,Gc(e,e.P)}function Gc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ii(he(e.lb,e),t)}function wr(e){e.B&&(k.clearTimeout(e.B),e.B=null)}w.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Kg(this.j,this.A),this.L!=2&&(qn(),ve(17)),jt(this),this.o=2,xn(this)):Gc(this,this.Y-e)};function xn(e){e.l.H==0||e.J||mu(e.l,e)}function jt(e){wr(e);var t=e.M;t&&typeof t.ra=="function"&&t.ra(),e.M=null,Co(e.V),jc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function Us(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Fs(n.h,e))){if(!e.K&&Fs(n.h,e)&&n.H==3){try{var i=n.Ja.g.parse(t)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Gi(n),Sr(n);else break e;xo(n),ve(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=ii(he(n.ib,n),6e3));if(1>=nu(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ht(n,11)}else if((e.K||n.g==e)&&Gi(n),!Wi(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.J=c[1],n.oa=c[2];const f=c[3];f!=null&&(n.qa=f,n.j.info("VER="+n.qa));const p=c[4];p!=null&&(n.Ga=p,n.j.info("SVER="+n.Ga));const y=c[5];y!=null&&typeof y=="number"&&0<y&&(i=1.5*y,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const A=e.g;if(A){const N=A.g?A.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(N){var s=i.h;s.g||N.indexOf("spdy")==-1&&N.indexOf("quic")==-1&&N.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Po(s,s.h),s.h=null))}if(i.F){const b=A.g?A.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(i.Da=b,Y(i.G,i.F,b))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=e;if(i.wa=vu(i,i.I?i.oa:null,i.Y),o.K){iu(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(wr(a),oi(a)),i.g=o}else pu(i);0<n.i.length&&Rr(n)}else c[0]!="stop"&&c[0]!="close"||Ht(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ht(n,7):Mo(n):c[0]!="noop"&&n.l&&n.l.Aa(c),n.A=0)}}qn(4)}catch{}}function Yg(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(gr(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}t=[],n=0;for(i in e)t[n++]=e[i];return t}function Qg(e){if(e.sa&&typeof e.sa=="function")return e.sa();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(gr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Xc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(gr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Qg(e),i=Yg(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}var Jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zg(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Wt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wt){this.h=t!==void 0?t:e.h,zi(this,e.j),this.s=e.s,this.g=e.g,qi(this,e.m),this.l=e.l,t=e.i;var n=new Gn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),qa(this,n),this.o=e.o}else e&&(n=String(e).match(Jc))?(this.h=!!t,zi(this,n[1]||"",!0),this.s=Pn(n[2]||""),this.g=Pn(n[3]||"",!0),qi(this,n[4]),this.l=Pn(n[5]||"",!0),qa(this,n[6]||"",!0),this.o=Pn(n[7]||"")):(this.h=!!t,this.i=new Gn(null,this.h))}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Dn(t,Ga,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Dn(t,Ga,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Dn(n,n.charAt(0)=="/"?nm:tm,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Dn(n,rm)),e.join("")};function ct(e){return new Wt(e)}function zi(e,t,n){e.j=n?Pn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qa(e,t,n){t instanceof Gn?(e.i=t,sm(e.i,e.h)):(n||(t=Dn(t,im)),e.i=new Gn(t,e.h))}function Y(e,t,n){e.i.set(t,n)}function Tr(e){return Y(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Dn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,em),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function em(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ga=/[#\/\?@]/g,tm=/[#\?:]/g,nm=/[#\?]/g,im=/[#\?@]/g,rm=/#/g;function Gn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ot(e){e.g||(e.g=new Map,e.h=0,e.i&&Zg(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}w=Gn.prototype;w.add=function(e,t){Ot(this),this.i=null,e=vn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Yc(e,t){Ot(e),t=vn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qc(e,t){return Ot(e),t=vn(e,t),e.g.has(t)}w.forEach=function(e,t){Ot(this),this.g.forEach(function(n,i){n.forEach(function(r){e.call(t,r,i,this)},this)},this)};w.sa=function(){Ot(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let s=0;s<r.length;s++)n.push(t[i])}return n};w.Z=function(e){Ot(this);let t=[];if(typeof e=="string")Qc(this,e)&&(t=t.concat(this.g.get(vn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};w.set=function(e,t){return Ot(this),this.i=null,e=vn(this,e),Qc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};w.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Zc(e,t,n){Yc(e,t),0<n.length&&(e.i=null,e.g.set(vn(e,t),mo(n)),e.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function vn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sm(e,t){t&&!e.j&&(Ot(e),e.i=null,e.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Yc(this,i),Zc(this,r,n))},e)),e.j=t}var om=class{constructor(e,t){this.h=e,this.g=t}};function eu(e){this.l=e||am,k.PerformanceNavigationTiming?(e=k.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var am=10;function tu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function nu(e){return e.h?1:e.g?e.g.size:0}function Fs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Po(e,t){e.g?e.g.add(t):e.h=t}function iu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}eu.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ru(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return mo(e.i)}function Do(){}Do.prototype.stringify=function(e){return k.JSON.stringify(e,void 0)};Do.prototype.parse=function(e){return k.JSON.parse(e,void 0)};function lm(){this.g=new Do}function cm(e,t,n){const i=n||"";try{Xc(e,function(r,s){let o=r;ti(r)&&(o=To(r)),t.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function um(e,t){const n=new Ir;if(k.Image){const i=new Image;i.onload=Ti(Ai,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Ti(Ai,n,i,"TestLoadImage: error",!1,t),i.onabort=Ti(Ai,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Ti(Ai,n,i,"TestLoadImage: timeout",!1,t),k.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}function Ai(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch{}}function Cr(e){this.l=e.fc||null,this.j=e.ob||!1}oe(Cr,Ro);Cr.prototype.g=function(){return new Ar(this.l,this.j)};Cr.prototype.i=function(e){return function(){return e}}({});function Ar(e,t){se.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=No,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oe(Ar,se);var No=0;w=Ar.prototype;w.open=function(e,t){if(this.readyState!=No)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xn(this)};w.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||k).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=No};w.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;su(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function su(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}w.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ai(this):Xn(this),this.readyState==3&&su(this)}};w.Za=function(e){this.g&&(this.response=this.responseText=e,ai(this))};w.Ya=function(e){this.g&&(this.response=e,ai(this))};w.ka=function(){this.g&&ai(this)};function ai(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xn(e)}w.setRequestHeader=function(e,t){this.v.append(e,t)};w.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var hm=k.JSON.parse;function ee(e){se.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ou,this.L=this.M=!1}oe(ee,se);var ou="",fm=/^https?$/i,dm=["POST","PUT"];w=ee.prototype;w.Oa=function(e){this.M=e};w.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ls.g(),this.C=this.u?za(this.u):za(Ls),this.g.onreadystatechange=he(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Xa(this,s);return}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=k.FormData&&e instanceof k.FormData,!(0<=Tc(dm,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{cu(this),0<this.B&&((this.L=pm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=he(this.ua,this)):this.A=Ao(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Xa(this,s)}};function pm(e){return Wn&&kg()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}w.ua=function(){typeof go<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function Xa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,au(e),br(e)}function au(e){e.F||(e.F=!0,le(e,"complete"),le(e,"error"))}w.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,le(this,"complete"),le(this,"abort"),br(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),br(this,!0)),ee.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?lu(this):this.kb())};w.kb=function(){lu(this)};function lu(e){if(e.h&&typeof go<"u"&&(!e.C[1]||it(e)!=4||e.da()!=2)){if(e.v&&it(e)==4)Ao(e.La,0,e);else if(le(e,"readystatechange"),it(e)==4){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=a===0){var r=String(e.I).match(Jc)[1]||null;if(!r&&k.self&&k.self.location){var s=k.self.location.protocol;r=s.substr(0,s.length-1)}i=!fm.test(r?r.toLowerCase():"")}n=i}if(n)le(e,"complete"),le(e,"success");else{e.m=6;try{var o=2<it(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.da()+"]",au(e)}}finally{br(e)}}}}function br(e,t){if(e.g){cu(e);const n=e.g,i=e.C[0]?Vi:null;e.g=null,e.C=null,t||le(e,"ready");try{n.onreadystatechange=i}catch{}}}function cu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(k.clearTimeout(e.A),e.A=null)}function it(e){return e.g?e.g.readyState:0}w.da=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),hm(t)}};function Ja(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ou:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uu(e){let t="";return yo(e,function(n,i){t+=i,t+=":",t+=n,t+=`\r
`}),t}function Lo(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=uu(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Y(e,t,n))}function An(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function hu(e){this.Ga=0,this.i=[],this.j=new Ir,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=An("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=An("baseRetryDelayMs",5e3,e),this.hb=An("retryDelaySeedMs",1e4,e),this.eb=An("forwardChannelMaxRetries",2,e),this.xa=An("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new eu(e&&e.concurrentRequestLimit),this.Ja=new lm,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}w=hu.prototype;w.qa=8;w.H=1;function Mo(e){if(fu(e),e.H==3){var t=e.W++,n=ct(e.G);Y(n,"SID",e.J),Y(n,"RID",t),Y(n,"TYPE","terminate"),li(e,n),t=new si(e,e.j,t,void 0),t.L=2,t.v=Tr(ct(n)),n=!1,k.navigator&&k.navigator.sendBeacon&&(n=k.navigator.sendBeacon(t.v.toString(),"")),!n&&k.Image&&(new Image().src=t.v,n=!0),n||(t.g=Iu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),oi(t)}yu(e)}function Sr(e){e.g&&(Uo(e),e.g.cancel(),e.g=null)}function fu(e){Sr(e),e.u&&(k.clearTimeout(e.u),e.u=null),Gi(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&k.clearTimeout(e.m),e.m=null)}function Rr(e){tu(e.h)||e.m||(e.m=!0,xc(e.Na,e),e.C=0)}function gm(e,t){return nu(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.F.concat(e.i),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ii(he(e.Na,e,t),_u(e,e.C)),e.C++,!0)}w.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new si(this,this.j,e,void 0);let s=this.s;if(this.U&&(s?(s=Rc(s),Oc(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(t+=i,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=du(this,r,t),n=ct(this.G),Y(n,"RID",e),Y(n,"CVER",22),this.F&&Y(n,"X-HTTP-Session-Id",this.F),li(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(uu(s)))+"&"+t:this.o&&Lo(n,this.o,s)),Po(this.h,r),this.bb&&Y(n,"TYPE","init"),this.P?(Y(n,"$req",t),Y(n,"SID","null"),r.ba=!0,xs(r,n,null)):xs(r,n,t),this.H=2}}else this.H==3&&(e?Ya(this,e):this.i.length==0||tu(this.h)||Ya(this))};function Ya(e,t){var n;t?n=t.m:n=e.W++;const i=ct(e.G);Y(i,"SID",e.J),Y(i,"RID",n),Y(i,"AID",e.V),li(e,i),e.o&&e.s&&Lo(i,e.o,e.s),n=new si(e,e.j,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=du(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Po(e.h,n),xs(n,i,t)}function li(e,t){e.ma&&yo(e.ma,function(n,i){Y(t,i,n)}),e.l&&Xc({},function(n,i){Y(t,i,n)})}function du(e,t,n){n=Math.min(e.i.length,n);var i=e.l?he(e.l.Va,e.l,e):null;e:{var r=e.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const f=r[l].g;if(c-=s,0>c)s=Math.max(0,r[l].h-100),a=!1;else try{cm(f,o,"req"+c+"_")}catch{i&&i(f)}}if(a){i=o.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function pu(e){e.g||e.u||(e.ba=1,xc(e.Ma,e),e.A=0)}function xo(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ii(he(e.Ma,e),_u(e,e.A)),e.A++,!0)}w.Ma=function(){if(this.u=null,gu(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=ii(he(this.jb,this),e)}};w.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,ve(10),Sr(this),gu(this))};function Uo(e){e.B!=null&&(k.clearTimeout(e.B),e.B=null)}function gu(e){e.g=new si(e,e.j,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ct(e.wa);Y(t,"RID","rpc"),Y(t,"SID",e.J),Y(t,"CI",e.M?"0":"1"),Y(t,"AID",e.V),Y(t,"TYPE","xmlhttp"),li(e,t),e.o&&e.s&&Lo(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=Tr(ct(t)),n.s=null,n.S=!0,Kc(n,e)}w.ib=function(){this.v!=null&&(this.v=null,Sr(this),xo(this),ve(19))};function Gi(e){e.v!=null&&(k.clearTimeout(e.v),e.v=null)}function mu(e,t){var n=null;if(e.g==t){Gi(e),Uo(e),e.g=null;var i=2}else if(Fs(e.h,t))n=t.F,iu(e.h,t),i=1;else return;if(e.H!=0){if(e.ta=t.aa,t.i)if(i==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;i=bo(),le(i,new Vc(i,n)),Rr(e)}else pu(e);else if(r=t.o,r==3||r==0&&0<e.ta||!(i==1&&gm(e,t)||i==2&&xo(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Ht(e,5);break;case 4:Ht(e,10);break;case 3:Ht(e,6);break;default:Ht(e,2)}}}function _u(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function Ht(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var i=he(e.pb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||zi(n,"https"),Tr(n)),um(n.toString(),i)}else ve(2);e.H=0,e.l&&e.l.za(t),yu(e),fu(e)}w.pb=function(e){e?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function yu(e){if(e.H=0,e.pa=[],e.l){const t=ru(e.h);(t.length!=0||e.i.length!=0)&&(Ha(e.pa,t),Ha(e.pa,e.i),e.h.i.length=0,mo(e.i),e.i.length=0),e.l.ya()}}function vu(e,t,n){var i=n instanceof Wt?ct(n):new Wt(n,void 0);if(i.g!="")t&&(i.g=t+"."+i.g),qi(i,i.m);else{var r=k.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Wt(null,void 0);i&&zi(s,i),t&&(s.g=t),r&&qi(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&Y(i,n,t),Y(i,"VER",e.qa),li(e,i),i}function Iu(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new ee(new Cr({ob:!0})):new ee(e.va),t.Oa(e.I),t}function Eu(){}w=Eu.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.Va=function(){};function ke(e,t){se.call(this),this.g=new hu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Wi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Wi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new In(this)}oe(ke,se);ke.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;ve(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=vu(e,null,e.Y),Rr(e)};ke.prototype.close=function(){Mo(this.g)};ke.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=To(e),e=n);t.i.push(new om(t.fb++,e)),t.H==3&&Rr(t)};ke.prototype.N=function(){this.g.l=null,delete this.j,Mo(this.g),delete this.g,ke.$.N.call(this)};function wu(e){Oo.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}oe(wu,Oo);function Tu(){ko.call(this),this.status=1}oe(Tu,ko);function In(e){this.g=e}oe(In,Eu);In.prototype.Ba=function(){le(this.g,"a")};In.prototype.Aa=function(e){le(this.g,new wu(e))};In.prototype.za=function(e){le(this.g,new Tu)};In.prototype.ya=function(){le(this.g,"b")};function mm(){this.blockSize=-1}function Ze(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}oe(Ze,mm);Ze.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function is(e,t,n){n||(n=0);var i=Array(16);if(typeof t=="string")for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(s^n&(r^s))+i[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(r^t&(n^r))+i[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=r+(n^s&(t^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(t^r&(s^t))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=t+(n^r^s)+i[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(n^r^s)+i[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^r)+i[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=r+(s^t^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^t)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}Ze.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(r==0)for(;s<=n;)is(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){is(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){is(this,i),r=0;break}}this.h=r,this.i+=t};Ze.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};function V(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=e[r]|0;i&&s==t||(n[r]=s,i=!1)}this.g=n}var _m={};function Fo(e){return-128<=e&&128>e?Cc(_m,e,function(t){return new V([t|0],0>t?-1:0)}):new V([e|0],0>e?-1:0)}function Ge(e){if(isNaN(e)||!isFinite(e))return on;if(0>e)return ae(Ge(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Bs;return new V(t,0)}function Cu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return ae(Cu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ge(Math.pow(t,8)),i=on,r=0;r<e.length;r+=8){var s=Math.min(8,e.length-r),o=parseInt(e.substring(r,r+s),t);8>s?(s=Ge(Math.pow(t,s)),i=i.R(s).add(Ge(o))):(i=i.R(n),i=i.add(Ge(o)))}return i}var Bs=4294967296,on=Fo(0),js=Fo(1),Qa=Fo(16777216);w=V.prototype;w.ea=function(){if(Se(this))return-ae(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Bs+i)*t,t*=Bs}return e};w.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(rt(this))return"0";if(Se(this))return"-"+ae(this).toString(e);for(var t=Ge(Math.pow(e,6)),n=this,i="";;){var r=Ji(n,t).g;n=Xi(n,r.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=r,rt(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};w.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Se(e){return e.h==-1}w.X=function(e){return e=Xi(this,e),Se(e)?-1:rt(e)?0:1};function ae(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new V(n,~e.h).add(js)}w.abs=function(){return Se(this)?ae(this):this};w.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(this.D(r)&65535)+(e.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new V(n,n[n.length-1]&-2147483648?-1:0)};function Xi(e,t){return e.add(ae(t))}w.R=function(e){if(rt(this)||rt(e))return on;if(Se(this))return Se(e)?ae(this).R(ae(e)):ae(ae(this).R(e));if(Se(e))return ae(this.R(ae(e)));if(0>this.X(Qa)&&0>e.X(Qa))return Ge(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=e.D(r)>>>16,l=e.D(r)&65535;n[2*i+2*r]+=o*l,bi(n,2*i+2*r),n[2*i+2*r+1]+=s*l,bi(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,bi(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,bi(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new V(n,0)};function bi(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function bn(e,t){this.g=e,this.h=t}function Ji(e,t){if(rt(t))throw Error("division by zero");if(rt(e))return new bn(on,on);if(Se(e))return t=Ji(ae(e),t),new bn(ae(t.g),ae(t.h));if(Se(t))return t=Ji(e,ae(t)),new bn(ae(t.g),t.h);if(30<e.g.length){if(Se(e)||Se(t))throw Error("slowDivide_ only works with positive integers.");for(var n=js,i=t;0>=i.X(e);)n=Za(n),i=Za(i);var r=Yt(n,1),s=Yt(i,1);for(i=Yt(i,2),n=Yt(n,2);!rt(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=Yt(i,1),n=Yt(n,1)}return t=Xi(e,r.R(t)),new bn(r,t)}for(r=on;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Ge(n),o=s.R(t);Se(o)||0<o.X(e);)n-=i,s=Ge(n),o=s.R(t);rt(s)&&(s=js),r=r.add(s),e=Xi(e,o)}return new bn(r,e)}w.gb=function(e){return Ji(this,e).h};w.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new V(n,this.h&e.h)};w.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new V(n,this.h|e.h)};w.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new V(n,this.h^e.h)};function Za(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new V(n,e.h)}function Yt(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new V(r,e.h)}ke.prototype.send=ke.prototype.u;ke.prototype.open=ke.prototype.m;ke.prototype.close=ke.prototype.close;So.NO_ERROR=0;So.TIMEOUT=8;So.HTTP_ERROR=6;qg.COMPLETE="complete";Gg.EventType=ri;ri.OPEN="a";ri.CLOSE="b";ri.ERROR="c";ri.MESSAGE="d";se.prototype.listen=se.prototype.O;ee.prototype.listenOnce=ee.prototype.P;ee.prototype.getLastError=ee.prototype.Sa;ee.prototype.getLastErrorCode=ee.prototype.Ia;ee.prototype.getStatus=ee.prototype.da;ee.prototype.getResponseJson=ee.prototype.Wa;ee.prototype.getResponseText=ee.prototype.ja;ee.prototype.send=ee.prototype.ha;ee.prototype.setWithCredentials=ee.prototype.Oa;Ze.prototype.digest=Ze.prototype.l;Ze.prototype.reset=Ze.prototype.reset;Ze.prototype.update=Ze.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Ge;V.fromString=Cu;var ym=V;const el="@firebase/firestore";/**
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
 */class Ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
 */let Or="9.21.0";/**
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
 */const Yi=new fo("@firebase/firestore");function Ae(e,...t){if(Yi.logLevel<=$.DEBUG){const n=t.map(Au);Yi.debug(`Firestore (${Or}): ${e}`,...n)}}function Bo(e,...t){if(Yi.logLevel<=$.ERROR){const n=t.map(Au);Yi.error(`Firestore (${Or}): ${e}`,...n)}}function Au(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function bu(e="Unexpected state"){const t=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+e;throw Bo(t),new Error(t)}function Hs(e,t){e||bu()}/**
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
 */const Xe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Je extends ft{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class an{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class vm{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Im{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class Em{constructor(t){this.t=t,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new an;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new an,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new an)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Hs(typeof i.accessToken=="string"),new vm(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Hs(t===null||typeof t=="string"),new Ee(t)}}class wm{constructor(t,n,i){this.h=t,this.l=n,this.m=i,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Tm{constructor(t,n,i){this.h=t,this.l=n,this.m=i}getToken(){return Promise.resolve(new wm(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Am{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const i=s=>{s.error!=null&&Ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,Ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):Ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Hs(typeof n.token=="string"),this.T=n.token,new Cm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function bm(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Sm{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=bm(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function Su(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Rm{constructor(t,n,i,r,s,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qi{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Qi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var tl,F;(F=tl||(tl={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ym([4294967295,4294967295],0);function rs(){return typeof document<"u"?document:null}/**
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
 */class Om{constructor(t,n,i=1e3,r=1.5,s=6e4){this.si=t,this.timerId=n,this.vo=i,this.Po=r,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(t){this.cancel();const n=Math.floor(this.Vo+this.No()),i=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-i);r>0&&Ae("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),t())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class jo{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new jo(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Je(Xe.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function km(e,t){if(Bo("AsyncQueue",`${t}: ${e}`),Su(e))return new Je(Xe.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Pm{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=Ee.UNAUTHENTICATED,this.clientId=Sm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Ae("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Ae("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Je(Xe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=km(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}/**
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
 */const nl=new Map;function Dm(e,t,n,i){if(t===!0&&i===!0)throw new Je(Xe.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class il{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Je(Xe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Je(Xe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Nm{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Je(Xe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Je(Xe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Im;switch(n.type){case"firstParty":return new Tm(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Je(Xe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=nl.get(t);n&&(Ae("ComponentProvider","Removing Datastore"),nl.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Lm{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new Om(this,"async_queue_retry"),this.Yc=()=>{const n=rs();n&&Ae("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const t=rs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xc(),this.Zc(t)}enterRestrictedMode(t){if(!this.Qc){this.Qc=!0,this.Hc=t||!1;const n=rs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(t){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new an;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Gc.push(t),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(t){if(!Su(t))throw t;Ae("AsyncQueue","Operation failed with retryable error: "+t)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(t){const n=this.Kc.then(()=>(this.Wc=!0,t().catch(i=>{this.zc=i,this.Wc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Bo("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Wc=!1,i))));return this.Kc=n,n}enqueueAfterDelay(t,n,i){this.Xc(),this.Jc.indexOf(t)>-1&&(n=0);const r=jo.createAndSchedule(this,t,n,i,s=>this.ea(s));return this.jc.push(r),r}Xc(){this.zc&&bu()}verifyOperationInProgress(){}async na(){let t;do t=this.Kc,await t;while(t!==this.Kc)}sa(t){for(const n of this.jc)if(n.timerId===t)return!0;return!1}ia(t){return this.na().then(()=>{this.jc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.na()})}ra(t){this.Jc.push(t)}ea(t){const n=this.jc.indexOf(t);this.jc.splice(n,1)}}class Mm extends Nm{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new Lm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xm(this),this._firestoreClient.terminate()}}function xm(e){var t,n,i;const r=e._freezeSettings(),s=function(o,a,l,c){return new Rm(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new Pm(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){Or=n})(_n),fn(new zt("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Mm(new Em(n.getProvider("auth-internal")),new Am(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Je(Xe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(a.options.projectId,l)}(s,i),s);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),At(el,"3.11.0",e),At(el,"3.11.0","esm2017")})();function Ho(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function Ru(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Um=Ru,Ou=new Zn("auth","Firebase",Ru());/**
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
 */const Zi=new fo("@firebase/auth");function Fm(e,...t){Zi.logLevel<=$.WARN&&Zi.warn(`Auth (${_n}): ${e}`,...t)}function Ni(e,...t){Zi.logLevel<=$.ERROR&&Zi.error(`Auth (${_n}): ${e}`,...t)}/**
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
 */function Fe(e,...t){throw $o(e,...t)}function Ye(e,...t){return $o(e,...t)}function Bm(e,t,n){const i=Object.assign(Object.assign({},Um()),{[t]:n});return new Zn("auth","Firebase",i).create(t,{appName:e.name})}function $o(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Ou.create(e,...t)}function O(e,t,...n){if(!e)throw $o(t,...n)}function st(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ni(t),new Error(t)}function ut(e,t){e||st(t)}/**
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
 */function $s(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function jm(){return rl()==="http:"||rl()==="https:"}function rl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Hm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||ep()||"connection"in navigator)?navigator.onLine:!0}function $m(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ci{constructor(t,n){this.shortDelay=t,this.longDelay=n,ut(n>t,"Short delay should be less than long delay!"),this.isMobile=Zd()||tp()}get(){return Hm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vo(e,t){ut(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class ku{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;st("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;st("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;st("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Vm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wm=new ci(3e4,6e4);function ui(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function En(e,t,n,i,r={}){return Pu(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=ei(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ku.fetch()(Du(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Pu(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Vm),t);try{const r=new Km(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Si(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Si(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Si(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Si(e,"user-disabled",o);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bm(e,f,c);Fe(e,f)}}catch(r){if(r instanceof ft)throw r;Fe(e,"network-request-failed",{message:String(r)})}}async function kr(e,t,n,i,r={}){const s=await En(e,t,n,i,r);return"mfaPendingCredential"in s&&Fe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Du(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Vo(e.config,r):`${e.config.apiScheme}://${r}`}class Km{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Ye(this.auth,"network-request-failed")),Wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Si(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Ye(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */async function zm(e,t){return En(e,"POST","/v1/accounts:delete",t)}async function qm(e,t){return En(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Un(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Gm(e,t=!1){const n=dt(e),i=await n.getIdToken(t),r=Wo(i);O(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Un(ss(r.auth_time)),issuedAtTime:Un(ss(r.iat)),expirationTime:Un(ss(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ss(e){return Number(e)*1e3}function Wo(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Ni("JWT malformed, contained fewer than 3 sections"),null;try{const r=gc(n);return r?JSON.parse(r):(Ni("Failed to decode base64 JWT payload"),null)}catch(r){return Ni("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Xm(e){const t=Wo(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Jn(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof ft&&Jm(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Jm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Ym{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function er(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Jn(e,qm(n,{idToken:i}));O(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?e_(s.providerUserInfo):[],a=Zm(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function Qm(e){const t=dt(e);await er(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Zm(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function e_(e){return e.map(t=>{var{providerId:n}=t,i=Ho(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function t_(e,t){const n=await Pu(e,{},async()=>{const i=ei({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=Du(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Xm(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await t_(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Yn;return i&&(O(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(O(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return st("not implemented")}}/**
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
 */function gt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Kt{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=Ho(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ym(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Jn(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Gm(this,t)}reload(){return Qm(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await er(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Jn(this,zm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,c,f;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,y=(r=n.email)!==null&&r!==void 0?r:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,X=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,H=(c=n.createdAt)!==null&&c!==void 0?c:void 0,ge=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:D,emailVerified:q,isAnonymous:re,providerData:Be,stsTokenManager:Pe}=n;O(D&&Pe,t,"internal-error");const M=Yn.fromJSON(this.name,Pe);O(typeof D=="string",t,"internal-error"),gt(p,t.name),gt(y,t.name),O(typeof q=="boolean",t,"internal-error"),O(typeof re=="boolean",t,"internal-error"),gt(A,t.name),gt(N,t.name),gt(b,t.name),gt(X,t.name),gt(H,t.name),gt(ge,t.name);const Q=new Kt({uid:D,auth:t,email:y,emailVerified:q,displayName:p,isAnonymous:re,photoURL:N,phoneNumber:A,tenantId:b,stsTokenManager:M,createdAt:H,lastLoginAt:ge});return Be&&Array.isArray(Be)&&(Q.providerData=Be.map(J=>Object.assign({},J))),X&&(Q._redirectEventId=X),Q}static async _fromIdTokenResponse(t,n,i=!1){const r=new Yn;r.updateFromServerResponse(n);const s=new Kt({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await er(s),s}}/**
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
 */const sl=new Map;function ot(e){ut(e instanceof Function,"Expected a class definition");let t=sl.get(e);return t?(ut(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sl.set(e,t),t)}/**
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
 */class Lu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lu.type="NONE";const ol=Lu;/**
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
 */function Li(e,t,n){return`firebase:${e}:${t}:${n}`}class ln{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Li(this.userKey,r.apiKey,s),this.fullPersistenceKey=Li("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Kt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new ln(ot(ol),t,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||ot(ol);const o=Li(i,t.config.apiKey,t.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Kt._fromJSON(t,f);c!==s&&(a=p),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ln(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ln(s,t,i))}}/**
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
 */function al(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Uu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bu(t))return"Blackberry";if(ju(t))return"Webos";if(Ko(t))return"Safari";if((t.includes("chrome/")||xu(t))&&!t.includes("edge/"))return"Chrome";if(Fu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Mu(e=pe()){return/firefox\//i.test(e)}function Ko(e=pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xu(e=pe()){return/crios\//i.test(e)}function Uu(e=pe()){return/iemobile/i.test(e)}function Fu(e=pe()){return/android/i.test(e)}function Bu(e=pe()){return/blackberry/i.test(e)}function ju(e=pe()){return/webos/i.test(e)}function Pr(e=pe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function n_(e=pe()){var t;return Pr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function i_(){return np()&&document.documentMode===10}function Hu(e=pe()){return Pr(e)||Fu(e)||ju(e)||Bu(e)||/windows phone/i.test(e)||Uu(e)}function r_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $u(e,t=[]){let n;switch(e){case"Browser":n=al(pe());break;case"Worker":n=`${al(pe())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_n}/${i}`}async function Vu(e,t){return En(e,"GET","/v2/recaptchaConfig",ui(e,t))}function ll(e){return e!==void 0&&e.enterprise!==void 0}class Wu{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function s_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ku(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=Ye("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",s_().appendChild(i)})}function o_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const a_="https://www.google.com/recaptcha/enterprise.js?render=",l_="recaptcha-enterprise",c_="NO_RECAPTCHA";class zu{constructor(t){this.type=l_,this.auth=hi(t)}async verify(t="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Vu(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Wu(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;ll(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(c_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&ll(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ku(a_+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cl(e,t,n,i=!1){const r=new zu(e);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class u_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class h_{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ul(this),this.idTokenSubscription=new ul(this),this.beforeStateQueue=new u_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ou,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ln.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await er(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$m()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?dt(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}async initializeRecaptchaConfig(){const t=await Vu(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Wu(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new zu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Zn("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ot(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,i,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Fm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(e){return dt(e)}class ul{constructor(t){this.auth=t,this.observer=null,this.addObserver=cp(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function f_(e,t){const n=vc(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Hi(s,t??{}))return r;Fe(r,"already-initialized")}return n.initialize({options:t})}function d_(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function p_(e,t,n){const i=hi(e);O(i._canInitEmulator,i,"emulator-config-failed"),O(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=qu(t),{host:o,port:a}=g_(t),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||m_()}function qu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function g_(e){const t=qu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:hl(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:hl(o)}}}function hl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function m_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class zo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return st("not implemented")}_getIdTokenResponse(t){return st("not implemented")}_linkToIdToken(t,n){return st("not implemented")}_getReauthenticationResolver(t){return st("not implemented")}}async function __(e,t){return En(e,"POST","/v1/accounts:update",t)}/**
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
 */async function os(e,t){return kr(e,"POST","/v1/accounts:signInWithPassword",ui(e,t))}/**
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
 */async function y_(e,t){return kr(e,"POST","/v1/accounts:signInWithEmailLink",ui(e,t))}async function v_(e,t){return kr(e,"POST","/v1/accounts:signInWithEmailLink",ui(e,t))}/**
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
 */class Qn extends zo{constructor(t,n,i,r=null){super("password",i),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new Qn(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new Qn(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await cl(t,i,"signInWithPassword");return os(t,r)}else return os(t,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await cl(t,i,"signInWithPassword");return os(t,s)}else return Promise.reject(r)});case"emailLink":return y_(t,{email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return __(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return v_(t,{idToken:n,email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function cn(e,t){return kr(e,"POST","/v1/accounts:signInWithIdp",ui(e,t))}/**
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
 */const I_="http://localhost";class Gt extends zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Gt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r}=n,s=Ho(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Gt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return cn(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,cn(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,cn(t,n)}buildRequest(){const t={requestUri:I_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ei(n)}return t}}/**
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
 */function E_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w_(e){const t=On(kn(e)).link,n=t?On(kn(t)).deep_link_id:null,i=On(kn(e)).deep_link_id;return(i?On(kn(i)).link:null)||i||n||t||e}class qo{constructor(t){var n,i,r,s,o,a;const l=On(kn(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(i=l.oobCode)!==null&&i!==void 0?i:null,p=E_((r=l.mode)!==null&&r!==void 0?r:null);O(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=w_(t);try{return new qo(n)}catch{return null}}}/**
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
 */class wn{constructor(){this.providerId=wn.PROVIDER_ID}static credential(t,n){return Qn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=qo.parseLink(n);return O(i,"argument-error"),Qn._fromEmailAndCode(t,i.code,i.tenantId)}}wn.PROVIDER_ID="password";wn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fi extends Gu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class _t extends fi{constructor(){super("facebook.com")}static credential(t){return Gt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
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
 */class yt extends fi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Gt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return yt.credential(n,i)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
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
 */class vt extends fi{constructor(){super("github.com")}static credential(t){return Gt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vt.credentialFromTaggedObject(t)}static credentialFromError(t){return vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vt.credential(t.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
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
 */class It extends fi{constructor(){super("twitter.com")}static credential(t,n){return Gt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return It.credential(n,i)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
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
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await Kt._fromIdTokenResponse(t,i,r),o=fl(i);return new dn({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=fl(i);return new dn({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function fl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class tr extends ft{constructor(t,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,tr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new tr(t,n,i,r)}}function Xu(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tr._fromErrorAndOperation(e,s,t,i):s})}async function T_(e,t,n=!1){const i=await Jn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dn._forOperation(e,"link",i)}/**
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
 */async function C_(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Jn(e,Xu(i,r,t,e),n);O(s.idToken,i,"internal-error");const o=Wo(s.idToken);O(o,i,"internal-error");const{sub:a}=o;return O(e.uid===a,i,"user-mismatch"),dn._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fe(i,"user-mismatch"),s}}/**
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
 */async function Ju(e,t,n=!1){const i="signIn",r=await Xu(e,i,t),s=await dn._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function A_(e,t){return Ju(hi(e),t)}function b_(e,t,n){return A_(dt(e),wn.credential(t,n))}function S_(e,t,n,i){return dt(e).onIdTokenChanged(t,n,i)}function R_(e,t,n){return dt(e).beforeAuthStateChanged(t,n)}function O_(e,t,n,i){return dt(e).onAuthStateChanged(t,n,i)}function k_(e){return dt(e).signOut()}const nr="__sak";/**
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
 */class Yu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nr,"1"),this.storage.removeItem(nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function P_(){const e=pe();return Ko(e)||Pr(e)}const D_=1e3,N_=10;class Qu extends Yu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=P_()&&r_(),this.fallbackToPolling=Hu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);i_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,N_):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Qu.type="LOCAL";const L_=Qu;/**
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
 */class Zu extends Yu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Zu.type="SESSION";const eh=Zu;/**
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
 */function M_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new Dr(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await M_(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dr.receivers=[];/**
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
 */function Go(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class x_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Go("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const y=p;if(y.data.eventId===c)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(y.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function U_(e){Qe().location.href=e}/**
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
 */function th(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function F_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function j_(){return th()?self:null}/**
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
 */const nh="firebaseLocalStorageDb",H_=1,ir="firebaseLocalStorage",ih="fbase_key";class di{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nr(e,t){return e.transaction([ir],t?"readwrite":"readonly").objectStore(ir)}function $_(){const e=indexedDB.deleteDatabase(nh);return new di(e).toPromise()}function Vs(){const e=indexedDB.open(nh,H_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(ir,{keyPath:ih})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(ir)?t(i):(i.close(),await $_(),t(await Vs()))})})}async function dl(e,t,n){const i=Nr(e,!0).put({[ih]:t,value:n});return new di(i).toPromise()}async function V_(e,t){const n=Nr(e,!1).get(t),i=await new di(n).toPromise();return i===void 0?null:i.value}function pl(e,t){const n=Nr(e,!0).delete(t);return new di(n).toPromise()}const W_=800,K_=3;class rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>K_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dr._getInstance(j_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await F_(),!this.activeServiceWorker)return;this.sender=new x_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((t=i[0])===null||t===void 0)&&t.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||B_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vs();return await dl(t,nr,"1"),await pl(t,nr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>dl(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>V_(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>pl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Nr(r,!1).getAll();return new di(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rh.type="LOCAL";const z_=rh;new ci(3e4,6e4);/**
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
 */function q_(e,t){return t?ot(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Xo extends zo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return cn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return cn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return cn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function G_(e){return Ju(e.auth,new Xo(e),e.bypassAuthState)}function X_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),C_(n,new Xo(e),e.bypassAuthState)}async function J_(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),T_(n,new Xo(e),e.bypassAuthState)}/**
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
 */class sh{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return G_;case"linkViaPopup":case"linkViaRedirect":return J_;case"reauthViaPopup":case"reauthViaRedirect":return X_;default:Fe(this.auth,"internal-error")}}resolve(t){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y_=new ci(2e3,1e4);class tn extends sh{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const t=Go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Y_.get())};t()}}tn.currentPopupAction=null;/**
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
 */const Q_="pendingRedirect",Mi=new Map;class Z_ extends sh{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Mi.get(this.auth._key());if(!t){try{const i=await ey(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Mi.set(this.auth._key(),t)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ey(e,t){const n=iy(t),i=ny(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function ty(e,t){Mi.set(e._key(),t)}function ny(e){return ot(e._redirectPersistence)}function iy(e){return Li(Q_,e.config.apiKey,e.name)}async function ry(e,t,n=!1){const i=hi(e),r=q_(i,t),o=await new Z_(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const sy=10*60*1e3;class oy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ay(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!oh(t)){const r=((i=t.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sy&&this.cachedEventUids.clear(),this.cachedEventUids.has(gl(t))}saveEventToCache(t){this.cachedEventUids.add(gl(t)),this.lastProcessedEventTime=Date.now()}}function gl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function oh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ay(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oh(e);default:return!1}}/**
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
 */async function ly(e,t={}){return En(e,"GET","/v1/projects",t)}/**
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
 */const cy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uy=/^https?/;async function hy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ly(e);for(const n of t)try{if(fy(n))return}catch{}Fe(e,"unauthorized-domain")}function fy(e){const t=$s(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!uy.test(n))return!1;if(cy.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const dy=new ci(3e4,6e4);function ml(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function py(e){return new Promise((t,n)=>{var i,r,s;function o(){ml(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ml(),n(Ye(e,"network-request-failed"))},timeout:dy.get()})}if(!((r=(i=Qe().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=o_("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(Ye(e,"network-request-failed"))},Ku(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw xi=null,t})}let xi=null;function gy(e){return xi=xi||py(e),xi}/**
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
 */const my=new ci(5e3,15e3),_y="__/auth/iframe",yy="emulator/auth/iframe",vy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Iy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ey(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vo(t,yy):`https://${e.config.authDomain}/${_y}`,i={apiKey:t.apiKey,appName:e.name,v:_n},r=Iy.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ei(i).slice(1)}`}async function wy(e){const t=await gy(e),n=Qe().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:Ey(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vy,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Ye(e,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},my.get());function l(){Qe().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cy=500,Ay=600,by="_blank",Sy="http://localhost";class _l{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ry(e,t,n,i=Cy,r=Ay){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ty),{width:i.toString(),height:r.toString(),top:s,left:o}),c=pe().toLowerCase();n&&(a=xu(c)?by:n),Mu(c)&&(t=t||Sy,l.scrollbars="yes");const f=Object.entries(l).reduce((y,[A,N])=>`${y}${A}=${N},`,"");if(n_(c)&&a!=="_self")return Oy(t||"",a),new _l(null);const p=window.open(t||"",a,f);O(p,e,"popup-blocked");try{p.focus()}catch{}return new _l(p)}function Oy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const ky="__/auth/handler",Py="emulator/auth/handler",Dy=encodeURIComponent("fac");async function yl(e,t,n,i,r,s){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:_n,eventId:r};if(t instanceof Gu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",lp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(t instanceof fi){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),c=l?`#${Dy}=${encodeURIComponent(l)}`:"";return`${Ny(e)}?${ei(a).slice(1)}${c}`}function Ny({config:e}){return e.emulator?Vo(e,Py):`https://${e.authDomain}/${ky}`}/**
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
 */const as="webStorageSupport";class Ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eh,this._completeRedirectFn=ry,this._overrideRedirectResult=ty}async _openPopup(t,n,i,r){var s;ut((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yl(t,n,i,$s(),r);return Ry(t,o,Go())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await yl(t,n,i,$s(),r);return U_(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ut(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await wy(t),i=new oy(t);return n.register("authEvent",r=>(O(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(as,{type:as},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[as];o!==void 0&&n(!!o),Fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hu()||Ko()||Pr()}}const My=Ly;var vl="@firebase/auth",Il="0.23.1";/**
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
 */class xy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Uy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fy(e){fn(new zt("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),O(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$u(e)},c=new h_(i,r,s,l);return d_(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),fn(new zt("auth-internal",t=>{const n=hi(t.getProvider("auth").getImmediate());return(i=>new xy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(vl,Il,Uy(e)),At(vl,Il,"esm2017")}/**
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
 */const By=5*60,jy=mc("authIdTokenMaxAge")||By;let El=null;const Hy=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>jy)return;const r=n==null?void 0:n.token;El!==r&&(El=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $y(e=lg()){const t=vc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=f_(e,{popupRedirectResolver:My,persistence:[z_,L_,eh]}),i=mc("authTokenSyncURL");if(i){const s=Hy(i);R_(n,s,()=>s(n.currentUser)),S_(n,o=>s(o))}const r=Jd("auth");return r&&p_(n,`http://${r}`),n}Fy("Browser");const Vy=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n},Wy={data(){return{email:"",password:"",auth:"",user:"",loggedIn:!1}},created(){Ic({apiKey:"AIzaSyALV08bfPkleXurrp4q-ZZqLB1buSChfhU",authDomain:"restlist-ab369.firebaseapp.com",projectId:"restlist-ab369",storageBucket:"restlist-ab369.appspot.com",messagingSenderId:"1032725124554",appId:"1:1032725124554:web:304b9b702ca638157aab33",measurementId:"G-7FGCH3NTKT"}),this.auth=$y(),O_(this.auth,t=>{t?(this.loggedIn=!0,t.uid):this.loggedIn=!1})},methods:{logIn(){b_(this.auth,this.email,this.password).then(e=>{this.user=e.user}).catch(e=>{this.errorCode=e.code,this.errorMessage=e.message}),console.log(this.email),console.log(this.password)},logOut(){k_(this.auth).then(()=>{}).catch(e=>{})}}};console.log("hello?");const Ky={class:"h-screen bg-slate-900 p-20"},zy={class:"border bg-slate-500 max-w-"},qy={key:0},Gy={class:"flex"};function Xy(e,t,n,i,r,s){return Rn(),wi("div",Ky,[Zt("div",zy,[r.loggedIn?$r("",!0):(Rn(),wi("div",qy,[da(Zt("input",{class:"mt-3 ml-5 rounded bg-slate-100 border w-[calc(100%-2.5rem)] font-bold","onUpdate:modelValue":t[0]||(t[0]=o=>r.email=o),placeholder:"E-Mail"},null,512),[[Pa,r.email]]),da(Zt("input",{class:"ml-5 mt-1 rounded bg-slate-100 border w-[calc(100%-2.5rem)]",type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>r.password=o),placeholder:"Password"},null,512),[[Pa,r.password]])])),Zt("div",Gy,[r.loggedIn?$r("",!0):(Rn(),wi("button",{key:0,class:"p-1 mx-[30%] my-3 w-full rounded-xl bg-slate-100",onClick:t[2]||(t[2]=o=>s.logIn())},"Log In")),r.loggedIn?(Rn(),wi("button",{key:1,class:"p-1 mx-[30%] my-3 w-full rounded-xl bg-slate-100",onClick:t[3]||(t[3]=o=>s.logOut())},"Log Out")):$r("",!0)])])])}const Jy=Vy(Wy,[["render",Xy]]);Hd(Jy).mount("#app");
