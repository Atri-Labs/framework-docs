"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[4935],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,m=d["".concat(i,".").concat(y)]||d[y]||c[y]||a;return t?n.createElement(m,p(p({ref:r},u),{},{components:t})):n.createElement(m,p({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8990:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={title:"Deploy manually",description:"Deploy app manually"},p=void 0,l={unversionedId:"deploy-app/deploy-manual",id:"version-0.0.90/deploy-app/deploy-manual",title:"Deploy manually",description:"Deploy app manually",source:"@site/versioned_docs/version-0.0.90/deploy-app/deploy-manual.md",sourceDirName:"deploy-app",slug:"/deploy-app/deploy-manual",permalink:"/deploy-app/deploy-manual",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/versioned_docs/version-0.0.90/deploy-app/deploy-manual.md",tags:[],version:"0.0.90",frontMatter:{title:"Deploy manually",description:"Deploy app manually"},sidebar:"docs",previous:{title:"Deploy using docker",permalink:"/deploy-app/deploy-using-docker"},next:{title:"Deploy to GitHub Pages",permalink:"/deploy-app/deploy-ghpages"}},i={},s=[{value:"Run python server",id:"run-python-server",level:3},{value:"Run NodeJS server",id:"run-nodejs-server",level:3}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Running you application involves two steps - starting up the python server and starting up the Node server. Make sure that you have published the app from the visual editor as discussed here ",(0,o.kt)("a",{parentName:"p",href:"/concepts-visual-editor/publish-app"},"Publish App")," and ran ",(0,o.kt)("inlineCode",{parentName:"p"},"atri build ssg"),". To run it on your system you must have ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeJS 16+")," installed."),(0,o.kt)("h3",{id:"run-python-server"},"Run python server"),(0,o.kt)("p",null,"Change directory into the app's root directory. An app's root directory is the directory where you ",(0,o.kt)("inlineCode",{parentName:"p"},"atri.app.json")," file. Also, make sure that the python virtual environment is activated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python -m controllers.server serve\n")),(0,o.kt)("h3",{id:"run-nodejs-server"},"Run NodeJS server"),(0,o.kt)("p",null,"Change directory into ",(0,o.kt)("inlineCode",{parentName:"p"},"<app_root>/atri_app"),". Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn run server\n")))}c.isMDXComponent=!0}}]);