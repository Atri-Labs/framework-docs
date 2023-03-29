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

# Drag-Drop components in the CanvasZone

# Write React code

# Create a new drag-drop component in React

# Handle user event in the backend using Python

# Build your applicaton

# Create your own visual builder

# Plans on how backend can be extended
