---
title: Highlights
description: Some desc
---

# Gotchas

1. This version has been tested in Chrome 100+ versions. It might not work in Firefox etc.

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

## Test the build

To check if the server side code has built properly, we can the output of server side rendering. To do server side rendering, open up NodeJS shell using `node` in your terminal and then write the following code:

```nodejs
> const index = require("dist/app-build/server/index.js")
> const html = index.default.renderPage()
```
# Serve your application in production

```shell
npm run serve
```

You will get the HTML code in `html` variable above.

# Publish a React drag-drop component package

To publish your React package to `npm` so that other users can install it in their Atri project, you will have to create a project with following directory structure.

```
project-dir
|--src
|	|-- manifests
|	|	|-- Some.jsx			# A component
|	|	|-- Some.manifest.jsx	# Manifest for Some component
|	|	|-- Other.jsx			# Another component
|	|	|-- Other.manifest.jsx	# Manifest for Other component
|	|-- manifest.config.json
|--package.json
```

The `package.json` should look like this:

```json
{
	"name": "npm_package_name",
	"version": "1.0.0",
	"description": "description",
	"author": "author_name <author_email>",
	"homepage": "https://github.com/cruxcode/atrilabs-engine#readme",
	"main": "./src/manifest.config.js",
	"files": [
		"src",
		"dist/manifests.bundle.js",
		"dist/manifests.bundle.js.map"
	],
	"publishConfig": {
		"access": "public"
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/cruxcode/atrilabs-engine.git"
	},
	"scripts": {
		"build": "gen-py-classes -n ../../node_modules -i '@atrilabs/utils' -a '@atrilabs/utils'"
	},
	"dependencies": {
		"@atrilabs/app-design-forest": "^1.0.0-alpha.13",
		"@atrilabs/commands": "^1.0.0-alpha.13",
		"@atrilabs/component-icon-manifest-schema": "^1.0.0-alpha.13",
		"@atrilabs/core": "^1.0.0-alpha.13",
		"@atrilabs/design-system": "^1.0.0-alpha.13",
		"@atrilabs/layer-types": "^1.0.0-alpha.13",
		"@atrilabs/react-component-manifest-schema": "^1.0.0-alpha.13",
		"typescript": "^4.6.4"
	},
	"devDependencies": {
		"@babel/cli": "^7.17.10",
		"@babel/core": "^7.18.5",
		"@babel/preset-env": "^7.18.2",
		"@babel/preset-react": "^7.17.12",
		"@babel/preset-typescript": "^7.17.12",
		"@types/react": "18.0.5",
		"react": "18.0.0",
		"react-dom": "18.0.0",
		"react-router-dom": "^6.6.2"
	},
	"atriConfig": {
		"pythonPackageName": "python_package_name"
	}
}
```

In the above `package.json`, the `name` field will be used by `npm` to name your package in the npm's repository. The `atriConfig.pythonPackageName` will be used to name the python package to be published in `pip`/`conda` etc.

The steps to create a component is the same as described in this [section](#create-a-new-drag-drop-component-in-react).

You can publish your code to npm by running (there is no build step):

```shell
npm run publish
```

You might have to login into `npm` before running the above code.

TODO: Create a utility tool that creates a scaffold for creating component package.

# Install a third-party React drag-drop component package

You will have to install both the React package and Python package for a component library. You can skip installing Python package if you don't plan to write a backend for your code.

```shell
npm install package_name
pip install package_name
```

Once you have installed a component package, change the `package.json` of your Atri project as show below:

```json
scripts: {
	    "dev": "dev-editor -i '@atrilabs/pwa-builder-manager:@atrilabs/design-system:@atrilabs/forest:@atrilabs/app-design-forest:@atrilabs/utils' -d '../example-atri-app/manifests:package_name'",
}
```

# Create a plugin for visual builder

Developers can create plugins for the visual builder.

# Create your own visual builder

Developers can create their own visual builder by using the building blocks from `Atri-Labs/atrilabs-engine`.

# Plans on how backend can be extended
