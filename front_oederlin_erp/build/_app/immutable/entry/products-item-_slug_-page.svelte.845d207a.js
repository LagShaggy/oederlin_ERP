import{S as de,i as me,s as he,I as te,F as ee,k as y,a as P,l as C,m as k,h as d,c as w,K as pe,p,b as E,a2 as g,M as H,N as le,O as se,P as ae,Q as Te,g as D,w as qe,d as j,f as je,T as Ae,D as ke,a3 as Oe,G as ue,L as xe,H as T,r as B,u as N,v as ce,E as ze,n as J,a9 as He,W as ye,z as K,X as Ce,A as M,B as Q,C as R}from"../chunks/index.4d4008ef.js";import{c as fe}from"../chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.js";import{w as Se}from"../chunks/index.c32d5541.js";const Fe=s=>({}),Ee=s=>({});function Ue(s){let e;return{c(){e=B(s[1])},l(t){e=N(t,s[1])},m(t,i){E(t,e,i)},p(t,i){i&2&&ce(e,t[1])},d(t){t&&d(e)}}}function Ie(s){let e,t,i,o,a;const r=s[10].default,c=te(r,s,s[9],null);return{c(){e=y("div"),t=y("div"),c&&c.c(),this.h()},l(f){e=C(f,"DIV",{class:!0});var l=k(e);t=C(l,"DIV",{});var u=k(t);c&&c.l(u),u.forEach(d),l.forEach(d),this.h()},h(){p(e,"class","hidden tab_content_placeholder")},m(f,l){E(f,e,l),g(e,t),c&&c.m(t,null),i=!0,o||(a=xe(s[3].call(null,t)),o=!0)},p(f,l){c&&c.p&&(!i||l&512)&&le(c,r,f,f[9],i?ae(r,f[9],l,null):se(f[9]),null)},i(f){i||(D(c,f),i=!0)},o(f){j(c,f),i=!1},d(f){f&&d(e),c&&c.d(f),o=!1,a()}}}function Ge(s){let e,t,i,o,a,r,c;const f=s[10].title,l=te(f,s,s[9],Ee),u=l||Ue(s);let n=[{type:"button"},{role:"tab"},s[5],{class:s[2]}],m={};for(let h=0;h<n.length;h+=1)m=ee(m,n[h]);let v=s[0]&&Ie(s);return{c(){e=y("li"),t=y("button"),u&&u.c(),i=P(),v&&v.c(),this.h()},l(h){e=C(h,"LI",{class:!0,role:!0});var I=k(e);t=C(I,"BUTTON",{type:!0,role:!0,class:!0});var V=k(t);u&&u.l(V),V.forEach(d),i=w(I),v&&v.l(I),I.forEach(d),this.h()},h(){pe(t,m),p(e,"class",o=fe("group",s[4].class)),p(e,"role","presentation")},m(h,I){E(h,e,I),g(e,t),u&&u.m(t,null),t.autofocus&&t.focus(),g(e,i),v&&v.m(e,null),a=!0,r||(c=[H(t,"click",s[21]),H(t,"blur",s[11]),H(t,"click",s[12]),H(t,"contextmenu",s[13]),H(t,"focus",s[14]),H(t,"keydown",s[15]),H(t,"keypress",s[16]),H(t,"keyup",s[17]),H(t,"mouseenter",s[18]),H(t,"mouseleave",s[19]),H(t,"mouseover",s[20])],r=!0)},p(h,[I]){l?l.p&&(!a||I&512)&&le(l,f,h,h[9],a?ae(f,h[9],I,Fe):se(h[9]),Ee):u&&u.p&&(!a||I&2)&&u.p(h,a?I:-1),pe(t,m=Te(n,[{type:"button"},{role:"tab"},I&32&&h[5],(!a||I&4)&&{class:h[2]}])),h[0]?v?(v.p(h,I),I&1&&D(v,1)):(v=Ie(h),v.c(),D(v,1),v.m(e,null)):v&&(qe(),j(v,1,1,()=>{v=null}),je()),(!a||I&16&&o!==(o=fe("group",h[4].class)))&&p(e,"class",o)},i(h){a||(D(u,h),D(v),a=!0)},o(h){j(u,h),j(v),a=!1},d(h){h&&d(e),u&&u.d(h),v&&v.d(),r=!1,Ae(c)}}}function Je(s,e,t){const i=["open","title","activeClasses","inactiveClasses","defaultClass"];let o=ke(e,i),{$$slots:a={},$$scope:r}=e,{open:c=!1}=e,{title:f="Tab title"}=e,{activeClasses:l=void 0}=e,{inactiveClasses:u=void 0}=e,{defaultClass:n="inline-block text-sm font-medium text-center disabled:cursor-not-allowed"}=e;const m=Oe("ctx")??{},v=m.selected??Se();function h(_){return v.set(_),{destroy:v.subscribe(L=>{L!==_&&t(0,c=!1)})}}let I;function V(_){T.call(this,s,_)}function W(_){T.call(this,s,_)}function x(_){T.call(this,s,_)}function F(_){T.call(this,s,_)}function X(_){T.call(this,s,_)}function Y(_){T.call(this,s,_)}function Z(_){T.call(this,s,_)}function O(_){T.call(this,s,_)}function S(_){T.call(this,s,_)}function U(_){T.call(this,s,_)}const z=()=>t(0,c=!0);return s.$$set=_=>{t(4,e=ee(ee({},e),ue(_))),t(5,o=ke(e,i)),"open"in _&&t(0,c=_.open),"title"in _&&t(1,f=_.title),"activeClasses"in _&&t(6,l=_.activeClasses),"inactiveClasses"in _&&t(7,u=_.inactiveClasses),"defaultClass"in _&&t(8,n=_.defaultClass),"$$scope"in _&&t(9,r=_.$$scope)},s.$$.update=()=>{s.$$.dirty&449&&t(2,I=fe(n,c?l??m.activeClasses:u??m.inactiveClasses,c&&"active"))},e=ue(e),[c,f,I,h,e,o,l,u,n,r,a,V,W,x,F,X,Y,Z,O,S,U,z]}class oe extends de{constructor(e){super(),me(this,e,Je,Ge,he,{open:0,title:1,activeClasses:6,inactiveClasses:7,defaultClass:8})}}const Ke=s=>({style:s&2}),Le=s=>({style:s[1]}),Me=s=>({style:s&2}),De=s=>({style:s[1]});function Ve(s){let e;const t=s[9].divider,i=te(t,s,s[8],Le),o=i||Qe();return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,r){o&&o.m(a,r),e=!0},p(a,r){i&&i.p&&(!e||r&258)&&le(i,t,a,a[8],e?ae(t,a[8],r,Ke):se(a[8]),Le)},i(a){e||(D(o,a),e=!0)},o(a){j(o,a),e=!1},d(a){o&&o.d(a)}}}function Qe(s){let e;return{c(){e=y("div"),this.h()},l(t){e=C(t,"DIV",{class:!0}),k(e).forEach(d),this.h()},h(){p(e,"class","h-px bg-gray-200 dark:bg-gray-700")},m(t,i){E(t,e,i)},p:J,d(t){t&&d(e)}}}function Re(s){let e,t,i,o,a,r,c;const f=s[9].default,l=te(f,s,s[8],De);let u=s[0]&&Ve(s);return{c(){e=y("ul"),l&&l.c(),t=P(),u&&u.c(),i=P(),o=y("div"),this.h()},l(n){e=C(n,"UL",{class:!0});var m=k(e);l&&l.l(m),m.forEach(d),t=w(n),u&&u.l(n),i=w(n),o=C(n,"DIV",{class:!0,role:!0,"aria-labelledby":!0}),k(o).forEach(d),this.h()},h(){p(e,"class",s[3]),p(o,"class",s[2]),p(o,"role","tabpanel"),p(o,"aria-labelledby","id-tab")},m(n,m){E(n,e,m),l&&l.m(e,null),E(n,t,m),u&&u.m(n,m),E(n,i,m),E(n,o,m),a=!0,r||(c=xe(s[4].call(null,o)),r=!0)},p(n,[m]){l&&l.p&&(!a||m&258)&&le(l,f,n,n[8],a?ae(f,n[8],m,Me):se(n[8]),De),(!a||m&8)&&p(e,"class",n[3]),n[0]?u?(u.p(n,m),m&1&&D(u,1)):(u=Ve(n),u.c(),D(u,1),u.m(i.parentNode,i)):u&&(qe(),j(u,1,1,()=>{u=null}),je()),(!a||m&4)&&p(o,"class",n[2])},i(n){a||(D(l,n),D(u),a=!0)},o(n){j(l,n),j(u),a=!1},d(n){n&&d(e),l&&l.d(n),n&&d(t),u&&u.d(n),n&&d(i),n&&d(o),r=!1,c()}}}const We={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white",pill:"py-3 px-4 text-white bg-blue-600 rounded-lg",underline:"p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500",none:""},Xe={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",pill:"py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",underline:"p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",none:""};function Ye(s,e,t){let i,{$$slots:o={},$$scope:a}=e,{style:r="none"}=e,{defaultClass:c="flex flex-wrap space-x-2"}=e,{contentClass:f="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4"}=e,{divider:l=!0}=e,{activeClasses:u="p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500"}=e,{inactiveClasses:n="p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"}=e;const m={activeClasses:We[r]||u,inactiveClasses:Xe[r]||n,selected:Se()};ze("ctx",m);function v(h){return{destroy:m.selected.subscribe(V=>{V&&h.replaceChildren(V)})}}return s.$$set=h=>{t(11,e=ee(ee({},e),ue(h))),"style"in h&&t(1,r=h.style),"defaultClass"in h&&t(5,c=h.defaultClass),"contentClass"in h&&t(2,f=h.contentClass),"divider"in h&&t(0,l=h.divider),"activeClasses"in h&&t(6,u=h.activeClasses),"inactiveClasses"in h&&t(7,n=h.inactiveClasses),"$$scope"in h&&t(8,a=h.$$scope)},s.$$.update=()=>{s.$$.dirty&3&&t(0,l=["full","pill"].includes(r)?!1:l),t(3,i=fe(c,r==="underline"&&"-mb-px",e.class))},e=ue(e),[l,r,f,i,v,c,u,n,a,o]}class Ze extends de{constructor(e){super(),me(this,e,Ye,Re,he,{style:1,defaultClass:5,contentClass:2,divider:0,activeClasses:6,inactiveClasses:7})}}function Pe(s,e,t){const i=s.slice();return i[3]=e[t][0],i[4]=e[t][1],i}function we(s){let e,t,i=s[3]+"",o,a,r,c=s[4]+"",f,l,u;return{c(){e=y("div"),t=y("p"),o=B(i),a=P(),r=y("p"),f=B(c),l=P(),u=y("hr"),this.h()},l(n){e=C(n,"DIV",{class:!0});var m=k(e);t=C(m,"P",{class:!0});var v=k(t);o=N(v,i),v.forEach(d),a=w(m),r=C(m,"P",{});var h=k(r);f=N(h,c),h.forEach(d),m.forEach(d),l=w(n),u=C(n,"HR",{}),this.h()},h(){p(t,"class","font-semibold"),p(e,"class","items-top mt-2 mb-6 flex justify-between gap-4 pb-2")},m(n,m){E(n,e,m),g(e,t),g(t,o),g(e,a),g(e,r),g(r,f),E(n,l,m),E(n,u,m)},p(n,m){m&1&&i!==(i=n[3]+"")&&ce(o,i),m&1&&c!==(c=n[4]+"")&&ce(f,c)},d(n){n&&d(e),n&&d(l),n&&d(u)}}}function $e(s){let e,t,i,o;const a=s[2].default,r=te(a,s,s[1],null);let c=Object.entries(s[0]),f=[];for(let l=0;l<c.length;l+=1)f[l]=we(Pe(s,c,l));return{c(){e=y("div"),t=y("h2"),r&&r.c(),i=P();for(let l=0;l<f.length;l+=1)f[l].c();this.h()},l(l){e=C(l,"DIV",{});var u=k(e);t=C(u,"H2",{class:!0});var n=k(t);r&&r.l(n),n.forEach(d),i=w(u);for(let m=0;m<f.length;m+=1)f[m].l(u);u.forEach(d),this.h()},h(){p(t,"class","mb-4")},m(l,u){E(l,e,u),g(e,t),r&&r.m(t,null),g(e,i);for(let n=0;n<f.length;n+=1)f[n].m(e,null);o=!0},p(l,[u]){if(r&&r.p&&(!o||u&2)&&le(r,a,l,l[1],o?ae(a,l[1],u,null):se(l[1]),null),u&1){c=Object.entries(l[0]);let n;for(n=0;n<c.length;n+=1){const m=Pe(l,c,n);f[n]?f[n].p(m,u):(f[n]=we(m),f[n].c(),f[n].m(e,null))}for(;n<f.length;n+=1)f[n].d(1);f.length=c.length}},i(l){o||(D(r,l),o=!0)},o(l){j(r,l),o=!1},d(l){l&&d(e),r&&r.d(l),He(f,l)}}}function et(s,e,t){let{$$slots:i={},$$scope:o}=e,{description:a}=e;return s.$$set=r=>{"description"in r&&t(0,a=r.description),"$$scope"in r&&t(1,o=r.$$scope)},[a,o,i]}class tt extends de{constructor(e){super(),me(this,e,et,$e,he,{description:0})}}function Be(s,e,t){const i=s.slice();return i[3]=e[t],i}function Ne(s){let e,t=s[3]+"",i,o;return{c(){e=y("p"),i=B(t),o=P()},l(a){e=C(a,"P",{});var r=k(e);i=N(r,t),o=w(r),r.forEach(d)},m(a,r){E(a,e,r),g(e,i),g(e,o)},p:J,d(a){a&&d(e)}}}function lt(s){let e,t,i,o;return{c(){e=y("p"),t=y("b"),i=B("News:"),o=B(` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),this.h()},l(a){e=C(a,"P",{class:!0});var r=k(e);t=C(r,"B",{});var c=k(t);i=N(c,"News:"),c.forEach(d),o=N(r,` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),r.forEach(d),this.h()},h(){p(e,"class","text-sm ")},m(a,r){E(a,e,r),g(e,t),g(t,i),g(e,o)},p:J,d(a){a&&d(e)}}}function st(s){let e,t,i,o;return{c(){e=y("p"),t=y("b"),i=B("Sales:"),o=B(` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),this.h()},l(a){e=C(a,"P",{class:!0});var r=k(e);t=C(r,"B",{});var c=k(t);i=N(c,"Sales:"),c.forEach(d),o=N(r,` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),r.forEach(d),this.h()},h(){p(e,"class","text-sm")},m(a,r){E(a,e,r),g(e,t),g(t,i),g(e,o)},p:J,d(a){a&&d(e)}}}function at(s){let e,t,i,o;return{c(){e=y("p"),t=y("b"),i=B("Logistics:"),o=B(` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`)},l(a){e=C(a,"P",{});var r=k(e);t=C(r,"B",{});var c=k(t);i=N(c,"Logistics:"),c.forEach(d),o=N(r,` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),r.forEach(d)},m(a,r){E(a,e,r),g(e,t),g(t,i),g(e,o)},p:J,d(a){a&&d(e)}}}function it(s){let e,t,i,o;return{c(){e=y("p"),t=y("b"),i=B("Disabled:"),o=B(` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),this.h()},l(a){e=C(a,"P",{class:!0});var r=k(e);t=C(r,"B",{});var c=k(t);i=N(c,"Disabled:"),c.forEach(d),o=N(r,` Lorem ipsum dolor sit amet, consectetur\r
					adipiscing elit, sed do eiusmod tempor incididunt ut\r
					labore et dolore magna aliqua.`),r.forEach(d),this.h()},h(){p(e,"class","text-sm text-gray-500 dark:text-gray-400")},m(a,r){E(a,e,r),g(e,t),g(t,i),g(e,o)},p:J,d(a){a&&d(e)}}}function rt(s){let e,t;return{c(){e=y("span"),t=B("Next Feature"),this.h()},l(i){e=C(i,"SPAN",{slot:!0,class:!0});var o=k(e);t=N(o,"Next Feature"),o.forEach(d),this.h()},h(){p(e,"slot","title"),p(e,"class","text-gray-400 dark:text-gray-500")},m(i,o){E(i,e,o),g(e,t)},p:J,d(i){i&&d(e)}}}function nt(s){let e,t,i,o,a,r,c,f;return e=new oe({props:{open:!0,title:"News",$$slots:{default:[lt]},$$scope:{ctx:s}}}),i=new oe({props:{title:"Sales",$$slots:{default:[st]},$$scope:{ctx:s}}}),a=new oe({props:{title:"Logistics",$$slots:{default:[at]},$$scope:{ctx:s}}}),c=new oe({props:{disabled:!0,$$slots:{title:[rt],default:[it]},$$scope:{ctx:s}}}),{c(){K(e.$$.fragment),t=P(),K(i.$$.fragment),o=P(),K(a.$$.fragment),r=P(),K(c.$$.fragment)},l(l){M(e.$$.fragment,l),t=w(l),M(i.$$.fragment,l),o=w(l),M(a.$$.fragment,l),r=w(l),M(c.$$.fragment,l)},m(l,u){Q(e,l,u),E(l,t,u),Q(i,l,u),E(l,o,u),Q(a,l,u),E(l,r,u),Q(c,l,u),f=!0},p(l,u){const n={};u&64&&(n.$$scope={dirty:u,ctx:l}),e.$set(n);const m={};u&64&&(m.$$scope={dirty:u,ctx:l}),i.$set(m);const v={};u&64&&(v.$$scope={dirty:u,ctx:l}),a.$set(v);const h={};u&64&&(h.$$scope={dirty:u,ctx:l}),c.$set(h)},i(l){f||(D(e.$$.fragment,l),D(i.$$.fragment,l),D(a.$$.fragment,l),D(c.$$.fragment,l),f=!0)},o(l){j(e.$$.fragment,l),j(i.$$.fragment,l),j(a.$$.fragment,l),j(c.$$.fragment,l),f=!1},d(l){R(e,l),l&&d(t),R(i,l),l&&d(o),R(a,l),l&&d(r),R(c,l)}}}function ot(s){let e,t,i,o,a,r,c=s[0].name+"",f,l,u,n,m,v,h,I,V,W,x,F,X,Y,Z,O,S,U;V=new tt({props:{description:s[0].description}});let z=s[1],_=[];for(let b=0;b<z.length;b+=1)_[b]=Ne(Be(s,z,b));return S=new Ze({props:{style:"underline",defaultClass:"flex space-x-2",activeClasses:"p-4 text-blue-600 rounded-t-lg",contentClass:"p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4",inactiveClasses:"p-4 text-red-800 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",$$slots:{default:[nt]},$$scope:{ctx:s}}}),{c(){e=y("a"),t=ye("svg"),i=ye("path"),o=P(),a=y("div"),r=y("h1"),f=B(c),l=P(),u=y("div"),n=y("div"),m=y("div"),v=y("h2"),h=B("Basic Information"),I=P(),K(V.$$.fragment),W=P(),x=y("div"),F=y("h2"),X=B("Variants"),Y=P();for(let b=0;b<_.length;b+=1)_[b].c();Z=P(),O=y("div"),K(S.$$.fragment),this.h()},l(b){e=C(b,"A",{class:!0,href:!0});var L=k(e);t=Ce(L,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0});var A=k(t);i=Ce(A,"path",{fill:!0,d:!0}),k(i).forEach(d),A.forEach(d),L.forEach(d),o=w(b),a=C(b,"DIV",{class:!0});var $=k(a);r=C($,"H1",{class:!0});var q=k(r);f=N(q,c),q.forEach(d),$.forEach(d),l=w(b),u=C(b,"DIV",{class:!0});var G=k(u);n=C(G,"DIV",{class:!0});var ie=k(n);m=C(ie,"DIV",{class:!0});var re=k(m);v=C(re,"H2",{});var ge=k(v);h=N(ge,"Basic Information"),ge.forEach(d),I=w(re),M(V.$$.fragment,re),re.forEach(d),W=w(ie),x=C(ie,"DIV",{class:!0});var ne=k(x);F=C(ne,"H2",{});var be=k(F);X=N(be,"Variants"),be.forEach(d),Y=w(ne);for(let _e=0;_e<_.length;_e+=1)_[_e].l(ne);ne.forEach(d),ie.forEach(d),Z=w(G),O=C(G,"DIV",{class:!0});var ve=k(O);M(S.$$.fragment,ve),ve.forEach(d),G.forEach(d),this.h()},h(){p(i,"fill","currentColor"),p(i,"d","m11.3 12l3.5-3.5c.4-.4.4-1 0-1.4c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4L11.3 12z"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"width","40"),p(t,"height","40"),p(t,"viewBox","0 0 24 24"),p(e,"class","absolute z-10"),p(e,"href","/products"),p(r,"class",""),p(a,"class","relative mb-4 inline-flex w-full place-items-center items-center justify-center"),p(m,"class","mb-2"),p(x,"class","border-b"),p(n,"class","sm:w-1/3"),p(O,"class","p-5 sm:w-2/3"),p(u,"class","flex flex-col justify-around justify-items-start sm:flex-row")},m(b,L){E(b,e,L),g(e,t),g(t,i),E(b,o,L),E(b,a,L),g(a,r),g(r,f),E(b,l,L),E(b,u,L),g(u,n),g(n,m),g(m,v),g(v,h),g(m,I),Q(V,m,null),g(n,W),g(n,x),g(x,F),g(F,X),g(x,Y);for(let A=0;A<_.length;A+=1)_[A].m(x,null);g(u,Z),g(u,O),Q(S,O,null),U=!0},p(b,[L]){(!U||L&1)&&c!==(c=b[0].name+"")&&ce(f,c);const A={};if(L&1&&(A.description=b[0].description),V.$set(A),L&2){z=b[1];let q;for(q=0;q<z.length;q+=1){const G=Be(b,z,q);_[q]?_[q].p(G,L):(_[q]=Ne(G),_[q].c(),_[q].m(x,null))}for(;q<_.length;q+=1)_[q].d(1);_.length=z.length}const $={};L&64&&($.$$scope={dirty:L,ctx:b}),S.$set($)},i(b){U||(D(V.$$.fragment,b),D(S.$$.fragment,b),U=!0)},o(b){j(V.$$.fragment,b),j(S.$$.fragment,b),U=!1},d(b){b&&d(e),b&&d(o),b&&d(a),b&&d(l),b&&d(u),R(V),He(_,b),R(S)}}}function ut(s,e,t){let{data:i}=e,{item:o}=i,a=["something","somethingElse"];return s.$$set=r=>{"data"in r&&t(2,i=r.data)},s.$$.update=()=>{s.$$.dirty&4&&t(0,{item:o}=i,o)},[o,a,i]}class mt extends de{constructor(e){super(),me(this,e,ut,ot,he,{data:2})}}export{mt as default};
