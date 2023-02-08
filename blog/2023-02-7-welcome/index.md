---
slug: journey-atri
title: My journey of creating a web framework like NextJS
authors: [cruxcode]
tags: [atri, web-framework, full-stack, nextjs, visual-builder, python]
---

Many situations demand certain portion of the website to be easily editable by employees who do not know how to code. At the same time, developers need to code the complicated portion of the website. We have seen many companies juggling between NextJS and Webflow and cooking up hacks such as deploying different portions of their website in different domains.

## What did I learn from the NextJS repo before I started out creating my framework?

I was more focused on how things are working under the hood during dev time. Creating a build is easy, but, creating a dev server with the development experience same as NextJS was challenging.

NextJS runs three webpack compilers concurrently during development - one for app, one for server and one for edge runtime. We can ignore the edge runtime compiler for the time being.

- The compiler for app creates webpack runtime chunk that also has the react related libraries in it. It also creates a bundle for each page that runs on client side to hydrate the DOM. This bundle for a page, when runs in the client, adds a new route in the NextJS router. The Link component from `next/link` waits for the bundle of page to load and run before navigating to the new page. The compiler for app has a accompanying webpack-dev-server like server while we don’t need any such server for the compiler for server.

- The compiler for server creates a JS bundle for each page that is run on the server side to produce HTML that can be sent to the browser upon a first request. For example, when a GET request for /careers is received by the server, the server will create a JS bundle for the career page if not already created and run that JS bundle on the server side to get the HTML string to be sent to the browser. If the career page has changes, then it first deletes the career page from require.cache and reloads it when the compilation has finished.

NextJS does not use webpack-dev-server. Instead, it has it’s own version of webpack-dev-server where it uses packages like webpack-dev-middleware and webpack-hot-middleware.

The NextJS server handles six types of requests during development -

1. Request for HTML upon first request (referred to as page request from here on).
2. Request for JS that can hydrate the HTML on the client (referred to as JS request from here on).
3. Request for JSON that has the data needed during hydration. This data comes from getStaticProps, getServerSideProps functions.
4. Request for API routes.
5. Request for assets such as CSS files.
6. Request for HMR hot update files.

The entry field in webpack configuration of compilers is an async function that adds new pages in the entry “on-demand”. By “on-demand”, it is meant that a page is compiled only when a request for that page arrives to the NextJS server. Upon receiving a request for page that has not been compiled already, the NextJS server calls `compiler.wataching.invalidate()`. Upon an invalidate call, webpack runs the entry async function again to get new entries.

Other minor details that helped:
- The NextJS compilers relies heavily on using a loader with query as entry points.
- The _document.jsx file is only used to render the page on the server side and is never sent to the client side.

## What are the similarities between NextJS framework and Atri framework?

- The Atri framework follows the same page directory convention with minor inspirations from the remix framework such as dynamic segments are not represented using `[ ]` but `$`.
- The internal process during development is almost similar. Like NextJS we rely heavily on webpack’s features such as dynamic entry, loder entry with query etc.

## How has Atri implemented it’s development server?

The Atri framework has three webpack configs for all it’s needs:
1. Config that creates a browser app. This is used for compiling JS bundles that hydrate the DOM in the browser.
2. Config that creates a NodeJS library. This is used for compiling JS bundles that are run in the server to create HTML string.
3. Config that create a NodeJS app. The code for development server is in TS/TSX, hence, we cannot run it in NodeJS until it’s compiled to JS. A simple compiler like `tsc` would have worked but I wanted a more uniform build process for the React code running in frontend and backend.

The development server has to act on following events:
1. Network request - Mostly from browser.
2. File System changes - Watching the pages directory etc.
3. Webpack compiler events - Webpack emits events such as “done”, “invalid” etc.

Since there are diverse sources of events, it was quite complicated to have the development server in a deterministic state at all times. Hence, Atri framework uses an awesome state management library called XState.

The state contains a `routeObjectPaths` field that essentially represents the page directory in react router format i.e. `/pages/carrers/$id.js` will be represented as `/careers/$id`. When file system change event is emitted, the route configuration is updated but no compilation is triggered. A compilation is triggered only when a newtork request for a page arrives.

The server is in ready state only after:
1. The pages directory has been scanned and route configuration has been updated.
2. The app compiler and server compiler has completed an initial compilation. Initially, no pages are compiled unless a request for a page arrives.

All the network requests before server enters into ready state is saved in `requests` field. For each request, the triplet (Request, Response, NextFunction) is saved. These requests will be processed once the server is ready. The requests for HMR hot updates are handled directly by the webpack-dev-server, otherwise, all other requests are handled by the Atri framework.

A network request is processed only if the server is in idle state. A page request can be handled in two ways:
1. If the page is already compiled, then it will be served.
2. If the page is not compiled, the request will be put in a separate queue called `requestReservoir`.

While NextJS has it’s own router, Atri framework uses the router from `react-router-dom` internally. The last piece that was needed to be figured out was Link component. Whenever a Link component is clicked, the on-click handler first checks if the link already exists in the router’s configuration on the client side otherwise it will fetch the client side JS by hitting the link “/atri/js/pages${path_to_page}”. This link serves a JS file for that page built with the app compiler.

## Conclusion

Needless to say, creating Atri framework has been an incredible learning experience for me. 

If you're interested, try out Atri framework and share your feedback! 