"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[4992],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),k=n,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"Deploy using docker",description:"Deploy app using docker"},l=void 0,i={unversionedId:"guides-frontend/deploy-app/deploy-using-docker",id:"guides-frontend/deploy-app/deploy-using-docker",title:"Deploy using docker",description:"Deploy app using docker",source:"@site/docs/guides-frontend/deploy-app/deploy-using-docker.md",sourceDirName:"guides-frontend/deploy-app",slug:"/guides-frontend/deploy-app/deploy-using-docker",permalink:"/guides-frontend/deploy-app/deploy-using-docker",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/docs/guides-frontend/deploy-app/deploy-using-docker.md",tags:[],version:"current",frontMatter:{title:"Deploy using docker",description:"Deploy app using docker"},sidebar:"docs",previous:{title:"Deploy app",permalink:"/category/deploy-app"},next:{title:"Deploy manually",permalink:"/guides-frontend/deploy-app/deploy-manual"}},p={},u=[{value:"Create Dockerfile",id:"create-dockerfile",level:3},{value:"Create docker image",id:"create-docker-image",level:3},{value:"Use PaaS like Heroku",id:"use-paas-like-heroku",level:3},{value:"Heroku",id:"heroku",level:4},{value:"Prereqs",id:"prereqs",level:4},{value:"Log in heroku via command line",id:"log-in-heroku-via-command-line",level:4},{value:"Create an app instance in heroku",id:"create-an-app-instance-in-heroku",level:4},{value:"Create and push docker image",id:"create-and-push-docker-image",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"atri")," framework is agnostic of the platform you want to use for deployment. However, we suggest few ways to help you deploy your app qucikly with docker."),(0,n.kt)("h3",{id:"create-dockerfile"},"Create Dockerfile"),(0,n.kt)("p",null,"You can generate a Dockerfile for your app by running command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"atri create dockerfile\n")),(0,n.kt)("p",null,"This will create a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," at the root of your project."),(0,n.kt)("p",null,"If you want the generated ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to be named differently, you can use the command as shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"atri create dockerfile --file <filename>\n")),(0,n.kt)("p",null,"This will again create the file with the provided ",(0,n.kt)("inlineCode",{parentName:"p"},"filename")," at the root of the project."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You don't need to generate ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," everytime. Consider this an one time step.")),(0,n.kt)("p",null,"You can either create your own docker image or rely on some PaaS to handle everything from you. We will cover both the ways below."),(0,n.kt)("h3",{id:"create-docker-image"},"Create docker image"),(0,n.kt)("p",null,"You can jump directly to the next step if you want to use heroku to deploy your app."),(0,n.kt)("p",null,"If you want to build docker image, you must have ",(0,n.kt)("inlineCode",{parentName:"p"},"docker")," installed in your system. If you have a ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile")," ready from previous step, you can run the following command from the root of your project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker build -t <some_tag> -f <Dockerfile_name> .\n")),(0,n.kt)("h3",{id:"use-paas-like-heroku"},"Use PaaS like Heroku"),(0,n.kt)("h4",{id:"heroku"},"Heroku"),(0,n.kt)("h4",{id:"prereqs"},"Prereqs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker - If you don't have docker installed, you can install them from ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"here"),". All your application code gets bundled in a docker image that can be deployed easily in all popular PaaS including heroku."),(0,n.kt)("li",{parentName:"ul"},"Heroku account - Create an account in ",(0,n.kt)("a",{parentName:"li",href:"https://heroku.com"},"Heroku"),"."),(0,n.kt)("li",{parentName:"ul"},"Heroku CLI - It helps you to create and publish docker image to heroku. It can be installed by following the instructions ",(0,n.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli"},"here"),".")),(0,n.kt)("p",null,"In order to deploy, your website, you first need to create a Dockerfile that we have covered in the previous step above. Using this Dockerfile, we can create a docker image and finally we will upload this image to the PaaS like heroku."),(0,n.kt)("h4",{id:"log-in-heroku-via-command-line"},"Log in heroku via command line"),(0,n.kt)("p",null,"Running this command will take you to the browser where you can easily complete the login."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"heroku login\n")),(0,n.kt)("p",null,"Once logged in, run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"heroku container:login\n")),(0,n.kt)("h4",{id:"create-an-app-instance-in-heroku"},"Create an app instance in heroku"),(0,n.kt)("p",null,"Run the following command from inside the app's root directory. This is a one time step i.e. if you want to update your deployed app, you don't need to repeat this step."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"heroku create\n")),(0,n.kt)("h4",{id:"create-and-push-docker-image"},"Create and push docker image"),(0,n.kt)("p",null,"Run the following command from inside the app's root directory. These are also the steps that you need to follow everytime you want to update your app."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# create and publish the docker image\nheroku container:push web\n# update the app\nheroku container:release web\n")),(0,n.kt)("p",null,"Running above command will give you a link to the address where app is available."),(0,n.kt)("p",null,"You can learn more by visting heroku documentations."))}d.isMDXComponent=!0}}]);