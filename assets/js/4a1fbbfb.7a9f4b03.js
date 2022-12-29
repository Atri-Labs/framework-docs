"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[5324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Prerequisites bugs",description:"How to debug errors faced during installation"},a=void 0,s={unversionedId:"troubleshoot/prereq",id:"troubleshoot/prereq",title:"Prerequisites bugs",description:"How to debug errors faced during installation",source:"@site/docs/troubleshoot/prereq.md",sourceDirName:"troubleshoot",slug:"/troubleshoot/prereq",permalink:"/troubleshoot/prereq",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/troubleshoot/prereq.md",tags:[],version:"current",frontMatter:{title:"Prerequisites bugs",description:"How to debug errors faced during installation"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/category/troubleshooting"},next:{title:"Installation bugs",permalink:"/troubleshoot/installation_error"}},l={},p=[{value:"OSError: WinError 2 The system cannot find the file specified: &#39;c:python39Scripts\virtualenv.exe&#39;",id:"oserror-winerror-2-the-system-cannot-find-the-file-specified-cpython39scriptsvirtualenvexe",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Please refer to the Frequently Asked Questions in this page. If the provided solution does not resolve your error or you do not find your error discussed here, please submit a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Atri-Labs/atrilabs-engine/discussions/categories/help-installation-start"},"new Discussion"),"."),(0,o.kt)("h3",{id:"oserror-winerror-2-the-system-cannot-find-the-file-specified-cpython39scriptsvirtualenvexe"},"OSError: ","[WinError 2]"," The system cannot find the file specified: 'c:\\python39\\Scripts\\virtualenv.exe'"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description"),": On running ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install pipenv"),", the Terminal shows ",(0,o.kt)("inlineCode",{parentName:"p"},"OSError"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fix"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\python39\\Scripts\\")," to the PATH environment variable.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If that doesn\u2019t work, follow ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/64585018"},"this Stack overflow answer"),"."))))}u.isMDXComponent=!0}}]);