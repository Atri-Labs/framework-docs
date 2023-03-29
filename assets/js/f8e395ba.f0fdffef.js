"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[97],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Pie Chart",description:"Adding custom properties to a component"},i=void 0,c={unversionedId:"comp-reference/charts/pie-chart",id:"version-0.0.90/comp-reference/charts/pie-chart",title:"Pie Chart",description:"Adding custom properties to a component",source:"@site/versioned_docs/version-0.0.90/comp-reference/charts/pie-chart.md",sourceDirName:"comp-reference/charts",slug:"/comp-reference/charts/pie-chart",permalink:"/comp-reference/charts/pie-chart",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/versioned_docs/version-0.0.90/comp-reference/charts/pie-chart.md",tags:[],version:"0.0.90",frontMatter:{title:"Pie Chart",description:"Adding custom properties to a component"},sidebar:"docs",previous:{title:"Histogram Chart",permalink:"/comp-reference/charts/histogram-chart"},next:{title:"Candlestick Chart",permalink:"/comp-reference/charts/candlestick-chart"}},p={},l=[{value:"Custom properties of pie chart",id:"custom-properties-of-pie-chart",level:2},{value:"<code>Pie.custom.data</code>",id:"piecustomdata",level:3},{value:"<code>at.Pie.custom.toolTip</code>",id:"atpiecustomtooltip",level:3},{value:"<code>at.Pie.custom.legend</code>",id:"atpiecustomlegend",level:3}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-properties-of-pie-chart"},"Custom properties of pie chart"),(0,o.kt)("p",null,"All the custom properties of pie chart must be accessed using ",(0,o.kt)("inlineCode",{parentName:"p"},"Pie.custom"),"."),(0,o.kt)("h3",{id:"piecustomdata"},(0,o.kt)("inlineCode",{parentName:"h3"},"Pie.custom.data")),(0,o.kt)("p",null,"You can draw one or more circles in a pie chart as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'at.Pie.custom.data = [\n    # Inner circle\n    [\n        { "name": "Group A", "value": 400 },\n        { "name": "Group B", "value": 300 },\n        { "name": "Group C", "value": 300 },\n        { "name": "Group D", "value": 200 },\n    ],\n    # Outer circle\n    [\n        { "name": "A1", "value": 100 },\n        { "name": "A2", "value": 300 },\n        { "name": "B1", "value": 100 },\n        { "name": "B2", "value": 80 },\n    ]\n    ]\n\nat.Pie.custom.options = [\n    # options for first circle\n    {\n        "cx": "50%",            # center of the circle\'s x\n        "cy": "50%",            # center of the circle\'s y\n        "outerRadius": "40%",   # radius of the circle\n        "showLabel": true,\n        "animate": false,\n    },\n    # options for second circle\n    {\n        "cx": "50%",\n        "cy": "50%",\n        "innerRadius": "65%",\n        "showLabel": true,\n        "animate": false,\n    },\n    ]\n')),(0,o.kt)("p",null,"In the example above, when we use ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," value to set the size/position of circle, the ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," is relative to the size of the pie chart. For example, if your pie chart is of size ",(0,o.kt)("inlineCode",{parentName:"p"},"400")," in a direction, then ",(0,o.kt)("inlineCode",{parentName:"p"},"50%")," will be ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," in that direction."),(0,o.kt)("p",null,"If your data has the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," field named differently, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},'Pie.custom.keys.value = "OtherValue"'),"."),(0,o.kt)("h3",{id:"atpiecustomtooltip"},(0,o.kt)("inlineCode",{parentName:"h3"},"at.Pie.custom.toolTip")),(0,o.kt)("p",null,"You can show or hide tooltip that appears when we hover over the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'at.Pie.custom.toolTip = {"show": True}\n')),(0,o.kt)("h3",{id:"atpiecustomlegend"},(0,o.kt)("inlineCode",{parentName:"h3"},"at.Pie.custom.legend")),(0,o.kt)("p",null,"You can show or hide legend for the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'at.Pie.custom.legend = {"show": True}\n')))}u.isMDXComponent=!0}}]);