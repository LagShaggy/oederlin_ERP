import{S as pt,i as ht,s as _t,a as mt,e as B,c as gt,b as X,g as ge,t as K,d as we,f as G,h as J,j as wt,o as Ue,k as yt,l as bt,m as vt,n as Ie,p as H,q as Et,r as kt,u as Rt,v as Le,w as Q,x,y as De,z as ee,A as te,B as _e}from"./chunks/index-35e85642.js";import{S as it,a as lt,I as F,g as Qe,f as xe,b as Ae,c as me,s as $,i as et,d as se,e as Z,P as tt,h as St,j as It}from"./chunks/singletons-42384215.js";import{_ as M}from"./chunks/preload-helper-41c905a7.js";import{s as Lt,a as At}from"./chunks/shared-52caabc7.js";function Ot(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Pt(a){return a.split("%25").map(decodeURI).join("%25")}function Nt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Tt=["href","pathname","search","searchParams","toString","toJSON"];function Ut(a,e){const n=new URL(a);for(const i of Tt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return jt(n),n}function jt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Dt="/__data.json";function Vt(a){return a.replace(/\/$/,"")+Dt}function ct(a){try{return JSON.parse(sessionStorage[a])}catch{}}function nt(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Ct(...a){let e=5381;for(const n of a)if(typeof n=="string"){let i=n.length;for(;i;)e=e*33^n.charCodeAt(--i)}else if(ArrayBuffer.isView(n)){const i=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=i.length;for(;s;)e=e*33^i[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ie.delete(Ve(a)),ye(a,e));const ie=new Map;function qt(a,e){const n=Ve(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...p}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ie.set(n,{body:s,init:p,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,p))}return ye(a,e)}function Ft(a,e,n){if(ie.size>0){const i=Ve(a,n),s=ie.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ie.delete(i)}}return ye(e,n)}function Ve(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const s=[];e.headers&&s.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&s.push(e.body),i+=`[data-hash="${Ct(...s)}"]`}return i}const Ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Mt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Bt(a).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,m)=>{if(m%2){if(h.startsWith("x+"))return Oe(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return Oe(String.fromCharCode(...h.slice(2).split("-").map(I=>parseInt(I,16))));const y=Ht.exec(h);if(!y)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,T,D,V]=y;return e.push({name:D,matcher:V,optional:!!E,rest:!!T,chained:T?m===1&&t[0]==="":!1}),T?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Oe(h)}).join("")}).join("")}/?$`),params:e}}function $t(a){return!/^\([^)]+\)$/.test(a)}function Bt(a){return a.slice(1).split("/").filter($t)}function Kt(a,e,n){const i={},s=a.slice(1);let p=0;for(let t=0;t<e.length;t+=1){const u=e[t],h=s[t-p];if(u.chained&&u.rest&&p){i[u.name]=s.slice(t-p,t+1).filter(m=>m).join("/"),p=0;continue}if(h===void 0){u.rest&&(i[u.name]="");continue}if(!u.matcher||n[u.matcher](h)){i[u.name]=h;continue}if(u.optional&&u.chained){p++;continue}return}if(!p)return i}function Oe(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Gt(a,e,n,i){const s=new Set(e);return Object.entries(n).map(([u,[h,m,y]])=>{const{pattern:E,params:T}=Mt(u),D={id:u,exec:V=>{const I=E.exec(V);if(I)return Kt(I,T,i)},errors:[1,...y||[]].map(V=>a[V]),layouts:[0,...m||[]].map(t),leaf:p(h)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function p(u){const h=u<0;return h&&(u=~u),[h,a[u]]}function t(u){return u===void 0?u:[s.has(u),a[u]]}}function Jt(a){let e,n,i;var s=a[1][0];function p(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=Q(s,p(a)),a[12](e)),{c(){e&&x(e.$$.fragment),n=B()},l(t){e&&De(e.$$.fragment,t),n=B()},m(t,u){e&&ee(e,t,u),X(t,n,u),i=!0},p(t,u){const h={};if(u&8&&(h.data=t[3]),u&4&&(h.form=t[2]),s!==(s=t[1][0])){if(e){ge();const m=e;K(m.$$.fragment,1,0,()=>{te(m,1)}),we()}s?(e=Q(s,p(t)),t[12](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&K(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&J(n),e&&te(e,t)}}}function zt(a){let e,n,i;var s=a[1][0];function p(t){return{props:{data:t[3],$$slots:{default:[Yt]},$$scope:{ctx:t}}}}return s&&(e=Q(s,p(a)),a[11](e)),{c(){e&&x(e.$$.fragment),n=B()},l(t){e&&De(e.$$.fragment,t),n=B()},m(t,u){e&&ee(e,t,u),X(t,n,u),i=!0},p(t,u){const h={};if(u&8&&(h.data=t[3]),u&8215&&(h.$$scope={dirty:u,ctx:t}),s!==(s=t[1][0])){if(e){ge();const m=e;K(m.$$.fragment,1,0,()=>{te(m,1)}),we()}s?(e=Q(s,p(t)),t[11](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&K(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&J(n),e&&te(e,t)}}}function Yt(a){let e,n,i;var s=a[1][1];function p(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=Q(s,p(a)),a[10](e)),{c(){e&&x(e.$$.fragment),n=B()},l(t){e&&De(e.$$.fragment,t),n=B()},m(t,u){e&&ee(e,t,u),X(t,n,u),i=!0},p(t,u){const h={};if(u&16&&(h.data=t[4]),u&4&&(h.form=t[2]),s!==(s=t[1][1])){if(e){ge();const m=e;K(m.$$.fragment,1,0,()=>{te(m,1)}),we()}s?(e=Q(s,p(t)),t[10](e),x(e.$$.fragment),G(e.$$.fragment,1),ee(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){i||(e&&G(e.$$.fragment,t),i=!0)},o(t){e&&K(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&J(n),e&&te(e,t)}}}function at(a){let e,n=a[6]&&rt(a);return{c(){e=yt("div"),n&&n.c(),this.h()},l(i){e=bt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=vt(e);n&&n.l(s),s.forEach(J),this.h()},h(){Ie(e,"id","svelte-announcer"),Ie(e,"aria-live","assertive"),Ie(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(i,s){X(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=rt(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&J(e),n&&n.d()}}}function rt(a){let e;return{c(){e=Et(a[7])},l(n){e=kt(n,a[7])},m(n,i){X(n,e,i)},p(n,i){i&128&&Rt(e,n[7])},d(n){n&&J(e)}}}function Wt(a){let e,n,i,s,p;const t=[zt,Jt],u=[];function h(y,E){return y[1][1]?0:1}e=h(a),n=u[e]=t[e](a);let m=a[5]&&at(a);return{c(){n.c(),i=mt(),m&&m.c(),s=B()},l(y){n.l(y),i=gt(y),m&&m.l(y),s=B()},m(y,E){u[e].m(y,E),X(y,i,E),m&&m.m(y,E),X(y,s,E),p=!0},p(y,[E]){let T=e;e=h(y),e===T?u[e].p(y,E):(ge(),K(u[T],1,1,()=>{u[T]=null}),we(),n=u[e],n?n.p(y,E):(n=u[e]=t[e](y),n.c()),G(n,1),n.m(i.parentNode,i)),y[5]?m?m.p(y,E):(m=at(y),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null)},i(y){p||(G(n),p=!0)},o(y){K(n),p=!1},d(y){u[e].d(y),y&&J(i),m&&m.d(y),y&&J(s)}}}function Xt(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:p}=e,{components:t=[]}=e,{form:u}=e,{data_0:h=null}=e,{data_1:m=null}=e;wt(i.page.notify);let y=!1,E=!1,T=null;Ue(()=>{const R=i.page.subscribe(()=>{y&&(n(6,E=!0),n(7,T=document.title||"untitled page"))});return n(5,y=!0),R});function D(R){Le[R?"unshift":"push"](()=>{t[1]=R,n(0,t)})}function V(R){Le[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}function I(R){Le[R?"unshift":"push"](()=>{t[0]=R,n(0,t)})}return a.$$set=R=>{"stores"in R&&n(8,i=R.stores),"page"in R&&n(9,s=R.page),"constructors"in R&&n(1,p=R.constructors),"components"in R&&n(0,t=R.components),"form"in R&&n(2,u=R.form),"data_0"in R&&n(3,h=R.data_0),"data_1"in R&&n(4,m=R.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,p,u,h,m,y,E,T,i,s,D,V,I]}class Zt extends pt{constructor(e){super(),ht(this,e,Xt,Wt,_t,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const Qt={},be=[()=>M(()=>import("./chunks/0-9a1e318f.js"),["./chunks\\0-9a1e318f.js","./components\\pages\\_layout.svelte-0db3398b.js","./chunks\\index-35e85642.js","./chunks\\Indicator.svelte_svelte_type_style_lang-d67eaa5e.js","./assets\\Indicator-42c4c800.css"],import.meta.url),()=>M(()=>import("./chunks/1-014fbb59.js"),["./chunks\\1-014fbb59.js","./components\\error.svelte-ba03328f.js","./chunks\\index-35e85642.js","./chunks\\stores-6e96ab06.js","./chunks\\singletons-42384215.js","./chunks\\shared-52caabc7.js"],import.meta.url),()=>M(()=>import("./chunks/2-2e98ccf6.js"),["./chunks\\2-2e98ccf6.js","./chunks\\_page-c2dbc2da.js","./chunks\\supabaseClient-73cf1f8c.js","./chunks\\browser-ponyfill-10e9505f.js","./chunks\\preload-helper-41c905a7.js","./chunks\\shared-52caabc7.js","./components\\pages\\_page.svelte-a4e2208f.js","./chunks\\index-35e85642.js"],import.meta.url),()=>M(()=>import("./chunks/3-58aee613.js"),["./chunks\\3-58aee613.js","./chunks\\_page-c6e2732a.js","./chunks\\supabaseClient-73cf1f8c.js","./chunks\\browser-ponyfill-10e9505f.js","./chunks\\preload-helper-41c905a7.js","./chunks\\shared-52caabc7.js","./components\\pages\\orders\\_page.svelte-ae39266a.js","./chunks\\index-35e85642.js"],import.meta.url),()=>M(()=>import("./chunks/4-ad885c71.js"),["./chunks\\4-ad885c71.js","./chunks\\_page-12b10ff1.js","./components\\pages\\orders\\create\\_page.svelte-95ee5206.js","./chunks\\index-35e85642.js"],import.meta.url),()=>M(()=>import("./chunks/5-8927b661.js"),["./chunks\\5-8927b661.js","./chunks\\_page-b6f1a59e.js","./components\\pages\\orders\\view\\_page.svelte-e2754198.js","./chunks\\index-35e85642.js"],import.meta.url),()=>M(()=>import("./chunks/6-5f545cab.js"),["./chunks\\6-5f545cab.js","./chunks\\_page-4316365f.js","./chunks\\supabaseClient-73cf1f8c.js","./chunks\\browser-ponyfill-10e9505f.js","./chunks\\preload-helper-41c905a7.js","./chunks\\shared-52caabc7.js","./components\\pages\\products\\_page.svelte-f217b7b5.js","./chunks\\index-35e85642.js","./chunks\\Indicator.svelte_svelte_type_style_lang-d67eaa5e.js","./assets\\Indicator-42c4c800.css"],import.meta.url),()=>M(()=>import("./chunks/7-999f8247.js"),["./chunks\\7-999f8247.js","./chunks\\_page-37bc3011.js","./chunks\\supabaseClient-73cf1f8c.js","./chunks\\browser-ponyfill-10e9505f.js","./chunks\\preload-helper-41c905a7.js","./chunks\\shared-52caabc7.js","./chunks\\stores-6e96ab06.js","./chunks\\index-35e85642.js","./chunks\\singletons-42384215.js","./components\\pages\\products\\item\\_slug_\\_page.svelte-3f5b1c09.js"],import.meta.url),()=>M(()=>import("./chunks/8-bfbed975.js"),["./chunks\\8-bfbed975.js","./chunks\\_page-44e214a8.js","./chunks\\supabaseClient-73cf1f8c.js","./chunks\\browser-ponyfill-10e9505f.js","./chunks\\preload-helper-41c905a7.js","./chunks\\shared-52caabc7.js","./components\\pages\\users\\_page.svelte-d027e241.js","./chunks\\index-35e85642.js"],import.meta.url)],ft=[],xt={"/":[2],"/orders":[3],"/orders/create":[4],"/orders/view":[5],"/products":[6],"/products/item/[slug]":[7],"/users":[8]},en={handleError:({error:a})=>{console.error(a)}};let le=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},ot=class{constructor(e,n){this.status=e,this.location=n}};async function tn(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,s])=>[i,await s])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const nn=-1,an=-2,rn=-3,on=-4,sn=-5,ln=-6;function cn(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(s,p=!1){if(s===nn)return;if(s===rn)return NaN;if(s===on)return 1/0;if(s===sn)return-1/0;if(s===ln)return-0;if(p)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const h=new Set;n[s]=h;for(let E=1;E<t.length;E+=1)h.add(i(t[E]));break;case"Map":const m=new Map;n[s]=m;for(let E=1;E<t.length;E+=2)m.set(i(t[E]),i(t[E+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const y=Object.create(null);n[s]=y;for(let E=1;E<t.length;E+=2)y[t[E]]=i(t[E+1]);break}else{const u=new Array(t.length);n[s]=u;for(let h=0;h<t.length;h+=1){const m=t[h];m!==an&&(u[h]=i(m))}}else{const u={};n[s]=u;for(const h in t){const m=t[h];u[h]=i(m)}}return n[s]}return i(0)}function fn(a){return a.filter(e=>e!=null)}const Pe=Gt(be,ft,xt,Qt),ut=be[0],je=be[1];ut();je();const W=ct(it)??{},re=ct(lt)??{};function Ne(a){W[a]=se()}function un({target:a}){var We;const e=document.documentElement,n=[],i=[];let s=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,h=!1,m=!0,y=!1,E=!1,T=!1,D=!1,V,I=(We=history.state)==null?void 0:We[F];I||(I=Date.now(),history.replaceState({...history.state,[F]:I},"",location.href));const R=W[I];R&&(history.scrollRestoration="manual",scrollTo(R.x,R.y));let z,Ce,ce;async function qe(){ce=ce||Promise.resolve(),await ce,ce=null;const r=new URL(location.href),o=de(r,!0);s=null,await $e(o,r,[])}function Fe(r){i.some(o=>o==null?void 0:o.snapshot)&&(re[r]=i.map(o=>{var c;return(c=o==null?void 0:o.snapshot)==null?void 0:c.capture()}))}function He(r){var o;(o=re[r])==null||o.forEach((c,l)=>{var d,f;(f=(d=i[l])==null?void 0:d.snapshot)==null||f.restore(c)})}async function ve(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:d={},invalidateAll:f=!1},g,_){return typeof r=="string"&&(r=new URL(r,Qe(document))),he({url:r,scroll:o?se():null,keepfocus:l,redirect_chain:g,details:{state:d,replaceState:c},nav_token:_,accepted:()=>{f&&(D=!0)},blocked:()=>{},type:"goto"})}async function Me(r){const o=de(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Ge(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function fe(...r){const c=Pe.filter(l=>r.some(d=>l.exec(d))).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function $e(r,o,c,l,d,f={},g){var b,w;Ce=f;let _=r&&await Ge(r);if(_||(_=await Ye(o,{id:null},await oe(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ce!==f)return!1;if(_.type==="redirect")if(c.length>10||c.includes(o.pathname))_=await ue({status:500,error:await oe(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ve(new URL(_.location,o).href,{},[...c,o.pathname],f),!1;else((w=(b=_.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await $.updated.check()&&await ae(o);if(n.length=0,D=!1,y=!0,l&&(Ne(l),Fe(l)),d&&d.details){const{details:k}=d,A=k.replaceState?0:1;if(k.state[F]=I+=A,history[k.replaceState?"replaceState":"pushState"](k.state,"",o),!k.replaceState){let P=I+1;for(;re[P]||W[P];)delete re[P],delete W[P],P+=1}}if(s=null,h?(t=_.state,_.props.page&&(_.props.page.url=o),V.$set(_.props)):Be(_),d){const{scroll:k,keepfocus:A}=d,{activeElement:P}=document;await _e();const L=document.activeElement!==P&&document.activeElement!==document.body;if(!A&&!L&&await Te(),m){const v=o.hash&&document.getElementById(decodeURIComponent(o.hash.slice(1)));k?scrollTo(k.x,k.y):v?v.scrollIntoView():scrollTo(0,0)}}else await _e();m=!0,_.props.page&&(z=_.props.page),g&&g(),y=!1}function Be(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),z=r.props.page,V=new Zt({target:a,props:{...r.props,stores:$,components:i},hydrate:!0}),He(I);const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(d=>d(c)),h=!0}async function ne({url:r,params:o,branch:c,status:l,error:d,route:f,form:g}){let _="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(_=L.slash);r.pathname=Ot(r.pathname,_),r.search=r.search;const b={type:"loaded",state:{url:r,params:o,branch:c,error:d,route:f},props:{constructors:fn(c).map(L=>L.node.component)}};g!==void 0&&(b.props.form=g);let w={},k=!z,A=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const v=c[L],U=t.branch[L];(v==null?void 0:v.data)!==(U==null?void 0:U.data)&&(k=!0),v&&(w={...w,...v.data},k&&(b.props[`data_${A}`]=w),A+=1)}return(!t.url||r.href!==t.url.href||t.error!==d||g!==void 0&&g!==z.form||k)&&(b.props.page={error:d,params:o,route:{id:(f==null?void 0:f.id)??null},status:l,url:new URL(r),form:g??null,data:k?w:z.data}),b}async function Ee({loader:r,parent:o,url:c,params:l,route:d,server_data_node:f}){var w,k,A;let g=null;const _={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((w=b.universal)!=null&&w.load){let P=function(...v){for(const U of v){const{href:C}=new URL(U,c);_.dependencies.add(C)}};const L={route:{get id(){return _.route=!0,d.id}},params:new Proxy(l,{get:(v,U)=>(_.params.add(U),v[U])}),data:(f==null?void 0:f.data)??null,url:Ut(c,()=>{_.url=!0}),async fetch(v,U){let C;v instanceof Request?(C=v.url,U={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...U}):C=v;const q=new URL(C,c);return P(q.href),q.origin===c.origin&&(C=q.href.slice(c.origin.length)),h?Ft(C,q.href,U):qt(C,U)},setHeaders:()=>{},depends:P,parent(){return _.parent=!0,o()}};g=await b.universal.load.call(null,L)??null,g=g?await tn(g):null}return{node:b,loader:r,server:f,universal:(k=b.universal)!=null&&k.load?{type:"data",data:g,uses:_}:null,data:g??(f==null?void 0:f.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(f==null?void 0:f.slash)}}function Ke(r,o,c,l,d){if(D)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const f of l.params)if(d[f]!==t.params[f])return!0;for(const f of l.dependencies)if(n.some(g=>g(new URL(f))))return!0;return!1}function ke(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ge({id:r,invalidating:o,url:c,params:l,route:d}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:f,layouts:g,leaf:_}=d,b=[...g,_];f.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,A=t.route?d.id!==t.route.id:!1;let P=!1;const L=b.map((S,j)=>{var Y;const O=t.branch[j],N=!!(S!=null&&S[0])&&((O==null?void 0:O.loader)!==S[1]||Ke(P,A,k,(Y=O.server)==null?void 0:Y.uses,l));return N&&(P=!0),N});if(L.some(Boolean)){try{w=await st(c,L)}catch(S){return ue({status:S instanceof le?S.status:500,error:await oe(S,{url:c,params:l,route:{id:d.id}}),url:c,route:d})}if(w.type==="redirect")return w}const v=w==null?void 0:w.nodes;let U=!1;const C=b.map(async(S,j)=>{var Re;if(!S)return;const O=t.branch[j],N=v==null?void 0:v[j];if((!N||N.type==="skip")&&S[1]===(O==null?void 0:O.loader)&&!Ke(U,A,k,(Re=O.universal)==null?void 0:Re.uses,l))return O;if(U=!0,(N==null?void 0:N.type)==="error")throw N;return Ee({loader:S[1],url:c,params:l,route:d,parent:async()=>{var Ze;const Xe={};for(let Se=0;Se<j;Se+=1)Object.assign(Xe,(Ze=await C[Se])==null?void 0:Ze.data);return Xe},server_data_node:ke(N===void 0&&S[0]?{type:"skip"}:N??null,O==null?void 0:O.server)})});for(const S of C)S.catch(()=>{});const q=[];for(let S=0;S<b.length;S+=1)if(b[S])try{q.push(await C[S])}catch(j){if(j instanceof ot)return{type:"redirect",location:j.location};let O=500,N;if(v!=null&&v.includes(j))O=j.status??O,N=j.error;else if(j instanceof le)O=j.status,N=j.body;else{if(await $.updated.check())return await ae(c);N=await oe(j,{params:l,url:c,route:{id:d.id}})}const Y=await Je(S,q,f);return Y?await ne({url:c,params:l,branch:q.slice(0,Y.idx).concat(Y.node),status:O,error:N,route:d}):await Ye(c,{id:d.id},N,O)}else q.push(void 0);return await ne({url:c,params:l,branch:q,status:200,error:null,route:d,form:o?void 0:null})}async function Je(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ue({status:r,error:o,url:c,route:l}){const d={};let f=null;if(ft[0]===0)try{const w=await st(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;f=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await ae(c)}const _=await Ee({loader:ut,url:c,params:d,route:l,parent:()=>Promise.resolve({}),server_data_node:ke(f)}),b={node:await je(),loader:je,universal:null,server:null,data:null};return await ne({url:c,params:d,branch:[_,b],status:r,error:o,route:null})}function de(r,o){if(et(r,Z))return;const c=pe(r);for(const l of Pe){const d=l.exec(c);if(d)return{id:r.pathname+r.search,invalidating:o,route:l,params:Nt(d),url:r}}}function pe(r){return Pt(r.pathname.slice(Z.length)||"/")}function ze({url:r,type:o,intent:c,delta:l}){var _,b;let d=!1;const f={from:{params:t.params,route:{id:((_=t.route)==null?void 0:_.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(f.delta=l);const g={...f,cancel:()=>{d=!0}};return E||p.before_navigate.forEach(w=>w(g)),d?null:f}async function he({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:d,type:f,delta:g,nav_token:_,accepted:b,blocked:w}){const k=de(r,!1),A=ze({url:r,type:f,delta:g,intent:k});if(!A){w();return}const P=I;b(),E=!0,h&&$.navigating.set(A),await $e(k,r,l,P,{scroll:o,keepfocus:c,details:d},_,()=>{E=!1,p.after_navigate.forEach(L=>L(A)),$.navigating.set(null)})}async function Ye(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!u?await ue({status:l,error:c,url:r,route:o}):await ae(r)}function ae(r){return location.href=r.href,new Promise(()=>{})}function dt(){let r;e.addEventListener("mousemove",f=>{const g=f.target;clearTimeout(r),r=setTimeout(()=>{l(g,2)},20)});function o(f){l(f.composedPath()[0],1)}e.addEventListener("mousedown",o),e.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(f=>{for(const g of f)g.isIntersecting&&(fe(pe(new URL(g.target.href))),c.unobserve(g.target))},{threshold:0});function l(f,g){const _=xe(f,e);if(!_)return;const{url:b,external:w}=Ae(_,Z);if(w)return;const k=me(_);k.reload||(g<=k.preload_data?Me(b):g<=k.preload_code&&fe(pe(b)))}function d(){c.disconnect();for(const f of e.querySelectorAll("a")){const{url:g,external:_}=Ae(f,Z);if(_)continue;const b=me(f);b.reload||(b.preload_code===tt.viewport&&c.observe(f),b.preload_code===tt.eager&&fe(pe(g)))}}p.after_navigate.push(d),d()}return{after_navigate:r=>{Ue(()=>(p.after_navigate.push(r),()=>{const o=p.after_navigate.indexOf(r);p.after_navigate.splice(o,1)}))},before_navigate:r=>{Ue(()=>(p.before_navigate.push(r),()=>{const o=p.before_navigate.indexOf(r);p.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(y||!h)&&(m=!1)},goto:(r,o={})=>ve(r,o,[]),invalidate:r=>{if(typeof r=="function")n.push(r);else{const{href:o}=new URL(r,location.href);n.push(c=>c.href===o)}return qe()},invalidateAll:()=>(D=!0,qe()),preload_data:async r=>{const o=new URL(r,Qe(document));await Me(o)},preload_code:fe,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const d=await Je(t.branch.length,c,l.errors);if(d){const f=await ne({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:l});t=f.state,V.$set(f.props),_e().then(Te)}}else if(r.type==="redirect")ve(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...z,form:r.data,status:r.status}};V.$set(o),r.type==="success"&&_e().then(Te)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!E){const d={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};p.before_navigate.forEach(f=>f(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(Ne(I),nt(it,W),Fe(I),nt(lt,re))}),(r=navigator.connection)!=null&&r.saveData||dt(),e.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=xe(o.composedPath()[0],e);if(!c)return;const{url:l,external:d,target:f}=Ae(c,Z);if(!l)return;if(f==="_parent"||f==="_top"){if(window.parent!==window)return}else if(f&&f!=="_self")return;const g=me(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(d||g.reload){ze({url:l,type:"link"})||o.preventDefault(),E=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){T=!0,Ne(I),t.url=l,$.page.set({...z,url:l}),$.page.notify();return}he({url:l,scroll:g.noscroll?se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),e.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const f=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(et(f,Z))return;const g=o.target,{noscroll:_,reload:b}=me(g);if(b)return;o.preventDefault(),o.stopPropagation();const w=new FormData(g),k=l==null?void 0:l.getAttribute("name");k&&w.append(k,(l==null?void 0:l.getAttribute("value"))??""),f.search=new URLSearchParams(w).toString(),he({url:f,scroll:_?se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async o=>{var c;if((c=o.state)!=null&&c[F]){if(o.state[F]===I)return;const l=W[o.state[F]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[I]=se(),I=o.state[F],scrollTo(l.x,l.y);return}const d=o.state[F]-I;let f=!1;await he({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[F]},blocked:()=>{history.go(-d),f=!0},type:"popstate",delta:d}),f||He(I)}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[F]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&$.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:d,data:f,form:g})=>{u=!0;const _=new URL(location.href);({params:l={},route:d={id:null}}=de(_,!1)||{});let b;try{const w=c.map(async(k,A)=>{const P=f[A];return Ee({loader:be[k],url:_,params:l,route:d,parent:async()=>{const L={};for(let v=0;v<A;v+=1)Object.assign(L,(await w[v]).data);return L},server_data_node:ke(P)})});b=await ne({url:_,params:l,branch:await Promise.all(w),status:r,error:o,form:g,route:Pe.find(({id:k})=>k===d.id)??null})}catch(w){if(w instanceof ot){await ae(new URL(w.location,location.href));return}b=await ue({status:w instanceof le?w.status:500,error:await oe(w,{url:_,params:l,route:d}),url:_,route:d})}Be(b)}}}async function st(a,e){var p;const n=new URL(a);n.pathname=Vt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await ye(n.href),s=await i.json();if(!i.ok)throw new le(i.status,s);return(p=s.nodes)==null||p.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=cn(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function oe(a,e){return a instanceof le?a.body:en.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Te(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var s;i((s=getSelection())==null?void 0:s.removeAllRanges())})})}}async function wn({assets:a,env:e,hydrate:n,target:i,version:s}){Lt(e),It(a),At(s);const p=un({target:i});St({client:p}),n?await p._hydrate(n):p.goto(location.href,{replaceState:!0}),p._start_router()}export{wn as start};
