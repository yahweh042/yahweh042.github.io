import{d as p,q as d,E as m,a as f,s as r,w as _,u as k,o as x,f as y}from"./index-5dca5c56.js";import{r as E,E as h,a as v}from"./request-7e2482e6.js";function C(s){let n={cmd:"index",...s};return E(n)}const g=p({__name:"index",setup(s){const n=["h5openid","h5token"],a=d(""),l=()=>{let t={};return a.value.split(";").forEach(e=>{let o=e.trim().split("=");n.includes(o[0])&&(t[o[0]]=o[1])}),t},i=async()=>{if(a.value)try{let t=l();const{data:e}=await C(t);e.result===0?k().setCurrentUser(e):v(e.msg)}catch{}};return(t,e)=>{const o=h,u=m;return x(),f("div",null,[r(o,{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=c=>a.value=c),rows:2,type:"textarea",placeholder:"Please input cookie"},null,8,["modelValue"]),r(u,{onClick:i,type:"primary"},{default:_(()=>[y("Primary")]),_:1})])}}});export{g as default};
