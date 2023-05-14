"use strict";(self.webpackChunkatriframework=self.webpackChunkatriframework||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"journey-atri","metadata":{"permalink":"/blog/journey-atri","editUrl":"https://github.com/Atri-Labs/framework-docs/tree/main/blog/2023-02-7-welcome/index.md","source":"@site/blog/2023-02-7-welcome/index.md","title":"My journey of creating a web framework like NextJS","description":"Many situations demand certain portion of the website to be easily editable by employees who do not know how to code. At the same time, developers need to code the complicated portion of the website. We have seen many companies juggling between NextJS and Webflow and cooking up hacks such as deploying different portions of their website in different domains.","date":"2023-02-07T00:00:00.000Z","formattedDate":"February 7, 2023","tags":[{"label":"atri","permalink":"/blog/tags/atri"},{"label":"web-framework","permalink":"/blog/tags/web-framework"},{"label":"full-stack","permalink":"/blog/tags/full-stack"},{"label":"nextjs","permalink":"/blog/tags/nextjs"},{"label":"visual-builder","permalink":"/blog/tags/visual-builder"},{"label":"python","permalink":"/blog/tags/python"}],"readingTime":5.65,"hasTruncateMarker":false,"authors":[{"name":"Shyam Swaroop","title":"Creator of Atri framework","url":"https://github.com/cruxcode","imageURL":"https://github.com/cruxcode.png","key":"cruxcode"}],"frontMatter":{"slug":"journey-atri","title":"My journey of creating a web framework like NextJS","authors":["cruxcode"],"tags":["atri","web-framework","full-stack","nextjs","visual-builder","python"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Many situations demand certain portion of the website to be easily editable by employees who do not know how to code. At the same time, developers need to code the complicated portion of the website. We have seen many companies juggling between NextJS and Webflow and cooking up hacks such as deploying different portions of their website in different domains.\\n\\n## What did I learn from the NextJS repo before I started out creating my framework?\\n\\nI was more focused on how things are working under the hood during dev time. Creating a build is easy, but, creating a dev server with the development experience same as NextJS was challenging.\\n\\nNextJS runs three webpack compilers concurrently during development - one for app, one for server and one for edge runtime. We can ignore the edge runtime compiler for the time being.\\n\\n- The compiler for app creates webpack runtime chunk that also has the react related libraries in it. It also creates a bundle for each page that runs on client side to hydrate the DOM. This bundle for a page, when runs in the client, adds a new route in the NextJS router. The Link component from `next/link` waits for the bundle of page to load and run before navigating to the new page. The compiler for app has a accompanying webpack-dev-server like server while we don\u2019t need any such server for the compiler for server.\\n\\n- The compiler for server creates a JS bundle for each page that is run on the server side to produce HTML that can be sent to the browser upon a first request. For example, when a GET request for /careers is received by the server, the server will create a JS bundle for the career page if not already created and run that JS bundle on the server side to get the HTML string to be sent to the browser. If the career page has changes, then it first deletes the career page from require.cache and reloads it when the compilation has finished.\\n\\nNextJS does not use webpack-dev-server. Instead, it has it\u2019s own version of webpack-dev-server where it uses packages like webpack-dev-middleware and webpack-hot-middleware.\\n\\nThe NextJS server handles six types of requests during development -\\n\\n1. Request for HTML upon first request (referred to as page request from here on).\\n2. Request for JS that can hydrate the HTML on the client (referred to as JS request from here on).\\n3. Request for JSON that has the data needed during hydration. This data comes from getStaticProps, getServerSideProps functions.\\n4. Request for API routes.\\n5. Request for assets such as CSS files.\\n6. Request for HMR hot update files.\\n\\nThe entry field in webpack configuration of compilers is an async function that adds new pages in the entry \u201con-demand\u201d. By \u201con-demand\u201d, it is meant that a page is compiled only when a request for that page arrives to the NextJS server. Upon receiving a request for page that has not been compiled already, the NextJS server calls `compiler.wataching.invalidate()`. Upon an invalidate call, webpack runs the entry async function again to get new entries.\\n\\nOther minor details that helped:\\n- The NextJS compilers relies heavily on using a loader with query as entry points.\\n- The _document.jsx file is only used to render the page on the server side and is never sent to the client side.\\n\\n## What are the similarities between NextJS framework and Atri framework?\\n\\n- The Atri framework follows the same page directory convention with minor inspirations from the remix framework such as dynamic segments are not represented using `[ ]` but `$`.\\n- The internal process during development is almost similar. Like NextJS we rely heavily on webpack\u2019s features such as dynamic entry, loder entry with query etc.\\n\\n## How has Atri implemented it\u2019s development server?\\n\\nThe Atri framework has three webpack configs for all it\u2019s needs:\\n1. Config that creates a browser app. This is used for compiling JS bundles that hydrate the DOM in the browser.\\n2. Config that creates a NodeJS library. This is used for compiling JS bundles that are run in the server to create HTML string.\\n3. Config that create a NodeJS app. The code for development server is in TS/TSX, hence, we cannot run it in NodeJS until it\u2019s compiled to JS. A simple compiler like `tsc` would have worked but I wanted a more uniform build process for the React code running in frontend and backend.\\n\\nThe development server has to act on following events:\\n1. Network request - Mostly from browser.\\n2. File System changes - Watching the pages directory etc.\\n3. Webpack compiler events - Webpack emits events such as \u201cdone\u201d, \u201cinvalid\u201d etc.\\n\\nSince there are diverse sources of events, it was quite complicated to have the development server in a deterministic state at all times. Hence, Atri framework uses an awesome state management library called XState.\\n\\nThe state contains a `routeObjectPaths` field that essentially represents the page directory in react router format i.e. `/pages/carrers/$id.js` will be represented as `/careers/$id`. When file system change event is emitted, the route configuration is updated but no compilation is triggered. A compilation is triggered only when a newtork request for a page arrives.\\n\\nThe server is in ready state only after:\\n1. The pages directory has been scanned and route configuration has been updated.\\n2. The app compiler and server compiler has completed an initial compilation. Initially, no pages are compiled unless a request for a page arrives.\\n\\nAll the network requests before server enters into ready state is saved in `requests` field. For each request, the triplet (Request, Response, NextFunction) is saved. These requests will be processed once the server is ready. The requests for HMR hot updates are handled directly by the webpack-dev-server, otherwise, all other requests are handled by the Atri framework.\\n\\nA network request is processed only if the server is in idle state. A page request can be handled in two ways:\\n1. If the page is already compiled, then it will be served.\\n2. If the page is not compiled, the request will be put in a separate queue called `requestReservoir`.\\n\\nWhile NextJS has it\u2019s own router, Atri framework uses the router from `react-router-dom` internally. The last piece that was needed to be figured out was Link component. Whenever a Link component is clicked, the on-click handler first checks if the link already exists in the router\u2019s configuration on the client side otherwise it will fetch the client side JS by hitting the link \u201c/atri/js/pages${path_to_page}\u201d. This link serves a JS file for that page built with the app compiler.\\n\\n## Conclusion\\n\\nNeedless to say, creating Atri framework has been an incredible learning experience for me. \\n\\nIf you\'re interested, try out Atri framework and share your feedback!"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/Atri-Labs/framework-docs/tree/main/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"atri","permalink":"/blog/tags/atri"},{"label":"framework","permalink":"/blog/tags/framework"},{"label":"visual-designer","permalink":"/blog/tags/visual-designer"},{"label":"python","permalink":"/blog/tags/python"},{"label":"web","permalink":"/blog/tags/web"}],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Shyam Swaroop","title":"Creator of Atri framework","url":"https://github.com/cruxcode","imageURL":"https://github.com/cruxcode.png","key":"cruxcode"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["cruxcode"],"tags":["atri","framework","visual-designer","python","web"]},"prevItem":{"title":"My journey of creating a web framework like NextJS","permalink":"/blog/journey-atri"}},"content":""}]}')}}]);