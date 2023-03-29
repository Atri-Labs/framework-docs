---
title: Highlights
description: Some desc
---

# Gotchas

1. It only works in Unix based systems currently. It won't work in Windows.

# Create an Atri app

## Pre-requisites

You need `NodeJS >= 16`, `npm`, `npx` & `python >= 3.7` installed.

## Create an initial scaffold

```shell
npx @atrilabs/new
```

This will promt you few questions such as the name of your pacakge. The name you choose for your package will be the same as the directory that gets created.

The initial directory structure will look as shown below:

```
project_dir
|-- controllers
|	|-- routes				# this directory contains backend controller python files
|	|-- __init__.py
|	|-- app.py				# Contains the FastAPI app
|	|-- main.py				# This is the entry file to start the uvicorn server
|	|-- requirements.tx		# Contains initial list of python packages for Atri project
|	|-- utils.py			# Some utility code required by app.py & main.py
|-- manifests				# New React components are created here for drag-drop
|-- pages					# Works almost like NextJS
|-- public					# It contiains assets & some CSS files
|-- .eslintrc.json
|-- package.json
```

## Install NodeJS packages

```shell
cd \<project_dir\>
npm install
```

## Create a python virtual environment (optional)

```shell
python -m venv venv
```

You can use any virtual enviornment manager you like such as `conda`, `pipenv`, `poetry` etc.

## Install Python packages

If you are using a virtual environment, please activate the virtual environment before you run the command shown below.

```shell
cd \<project_dir\>

# activate virtual environment if you are using any
source ./venv/bin/activate

python -m pip install -r controllers/requirements.txt
```

# Start the development servers

Currently, you need to start four development servers, each handling a different task.

1. Start the python backend server

Let's first start the python backend server.

```shell
cd \<project_dir\>
# activate the virtual environment before you run the code below

python -m controllers.main serve
```

2. Start the frontend server

```shell
npm run dev
```

This will open up `http://localhost:3000` in your browser.

3. Start Python glue code generator

```shell
npm run dev-py-app
```

4. Start the visual editor

```shell
npm run editor
```

Visit `http://localhost:4000` in your browser to use the visual builder.

# CanvasZone - One of Atri's innovation

The rectangle in the editor comes from the `<CanvasZone id={"main"}/>` in the React code in `pages/index.jsx` file. You can create a `CanvasZone` anywhere in your React code. You can pass `styles` attribute to the `CanvasZone` component like this

```jsx
import { CanvasZone } from "@atrilabs/canvas-zone";

<CanvasZone
	id={"main"}
	styles={{ height: "400px", width: "400px", display: "inline-block" }}
/>;
```

# Drag-Drop components in the CanvasZone

You will notice a rectangle (CanvasZone) in the editor. You can start by dropping a component in that rectangle. To drop a component, click on the `+` icon on top-left side of the editor. You will find a grid of components for drag-drop.

# Write React code

In the `pages/index.jsx` file you can modify the existing code to anything that you usually write in any React codebase.

For example,

```jsx
import { CanvasZone } from "@atrilabs/canvas-zone";
import { useEffect } from "react";

export default function () {
	useEffect(() => {
		// handle your side effects here like you usually do
	}, []);

	return (
		<div>
			<div>You can add your own code here!</div>
			<CanvasZone id={"main"} />
		</div>
	);
}
```

You can add as many `CanvasZone` as you want:

```jsx
import { CanvasZone } from "@atrilabs/canvas-zone";
import { useEffect } from "react";

export default function () {
	return (
		<div>
			<div>You can add your own code here!</div>
			<CanvasZone id={"main"} />
			<div>Some other code here</div>
			<CanvasZone id={"main2"} />
		</div>
	);
}
```

Note that each CanvasZone in a page must have a unique id.

# Create a new drag-drop component in React

You can write your React code the way you write them in any other framework, for example, you can make API calls and handle side effects in `useEffect`. There are two steps (three steps in some cases) to create a drag-drop component:

1. Create the React component inside `manifests` directory. The React component must be wrapped around `React.forwardRef` and it must assign `ref` to the topmost element.

Create a `manifests/Some.jsx` file with the following code:

```jsx
const SomeComponent = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className={props.className}>
			Some Component
		</div>
	);
});

export default SomeComponent;
```

2. Create a manifest for the React Component. A manifest describes how the component should behave inside the editor and how the build tools should handle it.

Create a `manifests/Some.manifest.jsx` file with the following code (Notice the file name pattern):

```jsx
import { createComponentManifest } from "@atrilabs/utils";

export default createComponentManifest({ name: "Some" });
```

3. Create a development React component. This step is optional because you might need it only for components that might have to behave a bit different inside editor and in actual app. One example could be the Flex component that we provide in the editor. The `Flex` component must have some `height` if there are no children element inside it so that it provides some room for the user to drop a new component.

To create a development component, create `manifests/Some.dev.jsx` file with following code.

```jsx
const SomeDevComponent = React.forwardRef((props, ref) => {
	return (
		<div ref={ref} className={props.className}>
			Some Dev Component
		</div>
	);
});

export default SomeDevComponent;
```

Note: You need to stop the development server and restart it whenever you add a new component. You don't need to do this when you modify a component and hot-reloading will kick in whenever you make a change.

# Handle user event in the backend using Python

Currently we support FastAPI in the backend and have plans to support Django as well in the near future. You can see this video to know more about how we are writing backend.

# Build your applicaton

Once you have made all the changes you want in the app, you can run the following code to build your application.

```
npm run build
```

If you are using a virtual environment, make sure you run this command from inside the virtual environment.

To check if the server side code has built properly, we can the output of server side rendering. To do server side rendering, open up NodeJS shell using `node` in your terminal and then write the following code:

```nodejs
> const index = require("dist/app-build/server/index.js")
> const html = index.default.renderPage()
```

You will get the HTML code in `html` variable above.

# Create your own visual builder

We have plans to allow developers to create plugins for the visual builder and also allow developers to create their own visual builder.

# Plans on how backend can be extended
