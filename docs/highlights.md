---
title: Highlights
description: Some desc
---

# Gotchas

1. This version has been tested extensively on Chrome 100+ versions and it is fully functional. However, it is possible that it may not work as intended on other browsers like Firefox..

# Creating an Atri app

## Pre-requisites Needed

To get started, it is important to have certain tools installed on your system. These includes:
* `NodeJS >= 16`, 
* `npm`, `npx`,
* `Python >= 3.7` 

These tools are essential for running the necessary software and ensuring smooth execution of programs.

## Creating an initial scaffold

```shell
npx @atrilabs/new
```

When creating a package, you'll be asked a few questions, including what name you'd like to give it. It's important to note that the name you select will also be used for the corresponding directory that will be generated.

The Structure of the directory will look as shown below:

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

## Installing NodeJS packages
Before installing the NodeJS packages, it is important to be in the project directory.

```shell
cd \<project_dir\>
npm install
```

## Creating a python virtual environment (optional)

```shell
python -m venv venv
```

You can use any virtual enviornment manager you like such as:
* `conda` 
* `pipenv` 
* `poetry` 
* and more.

## Install Python packages

If you are using a virtual environment, you need to activate the virtual environment by running the command shown below.

```shell
cd \<project_dir\> # It isimportant to be in the project directory

# activating virtual environment
source ./venv/bin/activate

# Now you can install the requirements
python -m pip install -r controllers/requirements.txt
```

# Start the development servers

it is required to initiate four development servers, with each server being responsible for handling a specific task.

1. Starting the python backend server


To begin, start the Python backend server. This will enable you to establish the necessary foundation for your project and ensure that the backend is functioning correctly

```shell
cd \<project_dir\> # Important to be in the project dir
# activate the virtual environment before you run the code below

python -m controllers.main serve
```

2. Starting the frontend server

This will launch the server and make your website accessible via your browser.

```shell
npm run dev
```

This will open up `http://localhost:3000` in your browser.

3. Starting Python glue code generator


```shell
npm run dev-py-app
```

4. Starting the visual editor


```shell
npm run editor
```

Visit `http://localhost:4000` in your browser to use the visual builder.
This will allow you to create and edit content with a more user-friendly interface, including features such as drag-and-drop and formatting tools.

# CanvasZone - One of Atri's innovation

The rectangular shape present in the editor originates from the `<CanvasZone id={"main"}/>` defined in the `pages/index.jsx` file of the React codebase. It is worth noting that `CanvasZone` can be instantiated at any desired location within a React application. Additionally, styles can be passed to the `CanvasZone` component using the `styles` attribute.

```jsx
import { CanvasZone } from "@atrilabs/canvas-zone";

<CanvasZone
	id={"main"}
	styles={{ height: "400px", width: "400px", display: "inline-block" }}
/>;
```

# Drag-Drop components in the CanvasZone

Within the editor, you will notice a rectangle (CanvasZone). You can start by dropping a component in that rectangle. To drop a component, click on the `+` icon on top-left corner of the editor. Subsequently, you will find a grid of components for drag-drop.

# Writing React code

Within the `pages/index.jsx` file, you can modify the existing code to anything that you usually write in any React codebase.

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

Note: Each CanvasZone in a page must have a unique id.

# Creating a new drag-drop component in React

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

2. Creating a manifest for the React Component. A manifest serves as a description of how the component should behave inside the editor and how the build tools should handle it.

Create a `manifests/Some.manifest.jsx` file with the following code (Notice the file name pattern):

```jsx
import { createComponentManifest } from "@atrilabs/utils";

export default createComponentManifest({ name: "Some" });
```

3. Create a development React component. This step is optional because you might need it only for components that might have to behave a bit different inside editor and in actual app. 
An example could be the Flex component that is available in the editor. The `Flex` component must have some `height`, if there are no children element inside it so that it provides some room for the user to drop a new component.

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

Note: It is essential to stop the development server and restart it everytime you add a new component. You don't need to do this when you modify a component and hot-reloading will kick in whenever you make a change.

4. Add a Python class for the React component

Once you have created the React component by following the steps above, a python class can be generated for this component. This Python class will act as the data representation of the component in the backend. This class has the data transformation logic and delta calculator.

```shell
npm gen-py-classes
```

The Python class gets generated in `dist/atri-py-pkg`. This package must be installed locally to be able to use this component in Python. 

To install a python package locally, run the following command:

```shell
pip install -e ./dist/atri-py-pkg
```

Note: The Python package should only be installed locally once. If you create another React component, you only need to run `npm gen-py-classes`.

# Handling user event in the backend using Python

Currently only FastAPI is supported in the backend and Django will be added in later updates. Check out this video to know more on how the backend is being developed.

# Building your applicaton

Once you all changes you want in the app is made, you can run the following code to build your application.

```
npm run build
```

If you are using a virtual environment, make sure the command is run inside the virtual environment after activating it.

## Testing the build

To verify the successful build of server-side code, we can examine the output of server-side rendering. To perform server-side rendering, access the NodeJS shell by executing the `node` command in your terminal, and then enter the following code:

```nodejs
> const index = require("dist/app-build/server/index.js")
> const html = index.default.renderPage()
```
# Serving your application in production

```shell
npm run serve
```

You will get the HTML code in `html` variable above.

# Publishing a React drag-drop component package

To publish your React package to `npm` so other users can install it in their Atri project, you will have to create a project with following directory structure.

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

The steps to create a component is the same as described in this [section](#creating-a-new-drag-drop-component-in-react).

You can publish your code to npm by running (there is no build step):

```shell
npm run publish
```

You might have to login into `npm` before running the above code.

TODO: Create a utility tool that creates a scaffold for creating component package.

# Installing a third-party React drag-drop component package

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
