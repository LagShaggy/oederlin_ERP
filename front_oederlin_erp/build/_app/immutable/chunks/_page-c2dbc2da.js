import{s as r}from"./supabaseClient-73cf1f8c.js";const t=!0;async function s(){const{data:e}=await r.from("users").select();return{users:e??[]}}const o=Object.freeze(Object.defineProperty({__proto__:null,load:s,prerender:t},Symbol.toStringTag,{value:"Module"}));export{o as _,s as l,t as p};