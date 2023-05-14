"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[4639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"Breakpoints",description:"Creating apps for different screen sizes"},o=void 0,l={unversionedId:"concepts-visual-editor/breakpoints",id:"version-0.0.90/concepts-visual-editor/breakpoints",title:"Breakpoints",description:"Creating apps for different screen sizes",source:"@site/versioned_docs/version-0.0.90/concepts-visual-editor/breakpoints.md",sourceDirName:"concepts-visual-editor",slug:"/concepts-visual-editor/breakpoints",permalink:"/concepts-visual-editor/breakpoints",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/versioned_docs/version-0.0.90/concepts-visual-editor/breakpoints.md",tags:[],version:"0.0.90",frontMatter:{title:"Breakpoints",description:"Creating apps for different screen sizes"},sidebar:"docs",previous:{title:"Template Manager",permalink:"/concepts-visual-editor/template-manager"},next:{title:"Publish App",permalink:"/concepts-visual-editor/publish-app"}},s={},p=[{value:"Add picture here",id:"add-picture-here",level:5}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"breakpoints")," section at the center of the top menu enable us to observe how our app will look in different screen sizes. The four supported sizes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desktop (default)"),(0,i.kt)("li",{parentName:"ul"},"Tablet"),(0,i.kt)("li",{parentName:"ul"},"Mobile landscape"),(0,i.kt)("li",{parentName:"ul"},"Mobile portrait")),(0,i.kt)("p",null,"Note: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Flexboxes have an innate quality to change their items\' width or height to best fill the available screen size, even when the size is unknown (thus the word "flex"). Since we use flex boxes as building blocks, our app is already responsive. ')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"However, there are cases when we want a materially different design in different screen size. The most common example is a navigation bar replaced by a hamburger menu in a mobile size screen. This can be done by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"Mobile portrait")," breakpoint and specifying the replacement. "))),(0,i.kt)("h5",{id:"add-picture-here"},"Add picture here"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"If a change is made in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tablet")," breakpoint, it flows down to all the smaller breakpoints. However, the breakpoint larger than ",(0,i.kt)("inlineCode",{parentName:"li"},"Tablet")," remains unchanged.")))}u.isMDXComponent=!0}}]);