"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[3799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),i=n(2389),l=n(7392),p=n(7094),s=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:y,groupId:g,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=y?y:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,p.U)(),[O,T]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=g){const e=N[g];null!=e&&e!==O&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=E.indexOf(t),a=f[n].value;a!==O&&(j(t),T(a),null!=g&&w(g,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:D,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},31:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),i=n(5162);const l={title:"Deploy to GitHub Pages",description:"Deploy server side generated pages to GitHub"},p=void 0,s={unversionedId:"deploy-app/deploy-ghpages",id:"version-0.0.90/deploy-app/deploy-ghpages",title:"Deploy to GitHub Pages",description:"Deploy server side generated pages to GitHub",source:"@site/versioned_docs/version-0.0.90/deploy-app/deploy-ghpages.md",sourceDirName:"deploy-app",slug:"/deploy-app/deploy-ghpages",permalink:"/deploy-app/deploy-ghpages",draft:!1,editUrl:"https://github.com/Atri-Labs/framework-docs/tree/main/versioned_docs/version-0.0.90/deploy-app/deploy-ghpages.md",tags:[],version:"0.0.90",frontMatter:{title:"Deploy to GitHub Pages",description:"Deploy server side generated pages to GitHub"},sidebar:"docs",previous:{title:"Deploy manually",permalink:"/deploy-app/deploy-manual"},next:{title:"Component Reference",permalink:"/category/component-reference"}},u={},c=[{value:"Step 1: Add your GitHub organization name and repository name",id:"step-1-add-your-github-organization-name-and-repository-name",level:3},{value:"Step 2: Build pages",id:"step-2-build-pages",level:3},{value:"Step 3: Deploy",id:"step-3-deploy",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GitHub provides a free service to host your static website. Atri framework helps you to use this feature to quickly deploy your website. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Each GitHub repository can have only one static website which is deployed by default at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<username>.github.io/<repo-name>"),". You can configure the settings of your repository to deploy to a custom domain by following the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site"},"here"),". ")),(0,r.kt)("p",null,"Let us now deploy your static site using Atri framework. "),(0,r.kt)("h3",{id:"step-1-add-your-github-organization-name-and-repository-name"},"Step 1: Add your GitHub organization name and repository name"),(0,r.kt)("p",null,"The field ",(0,r.kt)("inlineCode",{parentName:"p"},"organizationName")," is either your GitHub username or your GitHub organization name. The field ",(0,r.kt)("inlineCode",{parentName:"p"},"projectName")," is your repository name."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"atri_app/atri-server-info.json",label:"atri_app/atri-server-info.json",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "port": 4005,\n    "pythonPort": 4007,\n    "publicDir": "dist/app",\n    "pages": {\n        "/": {\n            "name": "Home"\n        }\n    },\n    "publicUrlAssetMap": {\n        "/app-assets": "../assets"\n    },\n    // highlight-start\n    "organizationName": "<your-organization-name>",\n    "projectName": "<your-repo-name>"\n    // highlight-end\n}\n')))),(0,r.kt)("h3",{id:"step-2-build-pages"},"Step 2: Build pages"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"User and organization sites are available at ",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://<username>.github.io")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://<organization>.github.io"),"."),(0,r.kt)("p",{parentName:"admonition"},"Project sites are available at ",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://<username>.github.io/<repository>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"http(s)://<organization>.github.io/<repository>"),". ")),(0,r.kt)("p",null,"Follow different instructions if you are deploying a user/organization site or a project site. "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"User/Organization site",label:"User / Organization site",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd project_root\npipenv shell\nexport MODE = production\natri build ssg\n"))),(0,r.kt)(i.Z,{value:"Project site",label:"Project site",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd project_root\npipenv shell\nexport MODE=production\nASSET_URL_PREFIX="/<your-repo-name>" atri build ssg\n')))),(0,r.kt)("p",null,"Providing ",(0,r.kt)("inlineCode",{parentName:"p"},"ASSET_URL_PREFIX")," environment variable changes the ",(0,r.kt)("inlineCode",{parentName:"p"},"basename")," for your website. You don't need to provide this variable if you are deploying a user/organization site. "),(0,r.kt)("h3",{id:"step-3-deploy"},"Step 3: Deploy"),(0,r.kt)("p",null,"Next, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GIT_USER = <username> atri deploy ssg --gh-pages\n")),(0,r.kt)("p",null,"Once this command is successfully completed, you can go ahead and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Actions")," tab in GitHub for the status of your deployment. By default, the static pages are deployed using ",(0,r.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to deploy using a different branch, you can add ",(0,r.kt)("inlineCode",{parentName:"p"},"deploymentBranch")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"atri_app/atri-server-info.json")," file.")),(0,r.kt)("p",null,"On running the above command, GitHub might prompt you to enter your password for your GitHub account. Due to recent changes in GitHub's policy, you actually need to provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," as your password. You can follow instructions provided ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"here")," to generate a new token once you are logged into GitHub in your browser."))}m.isMDXComponent=!0}}]);