---
sidebar_position: 2
title: Getting Started
description: A short guide to start using Atri Framework for app development
slug: /
---

## Install Pre-Requisites

### Install Docker

The Atri engine hosts visual editor and all the app generation logic and runs inside a docker container, hence, we need to install docker desktop in our system. Installing docker desktop is very easy. Please follow OS specific instructions from docker's official website.

-   [Install Docker Desktop on Linux](https://docs.docker.com/desktop/install/linux-install/)
-   [Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/)
-   [Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/)

### Install Python 3.7+

The Atri framework supports Python 3.7+. If you don't have Python installed already please download latest version of Python from [python.org](https://www.python.org/downloads/).

### Install virtual environment package

We enforce best practices for app development, hence, `atri` CLI works only from inside a virtual environment. We currently support two virtual environment packages - `pipenv`(preferred) and `conda`.

#### Install Pipenv (preferred)

```
pip install --user pipenv
```

#### Install Conda

Please visit [this link](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation) to `conda`.

## Create an App

Create an empty directory. This directory will contain all the files for your app. You can create this empty directory anywhere in your repository. In this example, we are creating a directory called `my_app` and then move into that directory. You can choose any name for this directory.

```
mkdir my_app
cd my_app
```

### Create a virtual environment

If you are using `pipenv` then run the following command to create an environment.

```
pipenv install
```

If you are using `conda` then run the following command to create an environment. In this example we are giving the environment the name `my_env`. You can choose any name for this environment.

```
conda create -y -n my_env python
```

### Install `atri` CLI

If you are using `pipenv` then run the following command to install `atri` CLI.

```
pipenv install atri
```

If you are using `conda` then run the following command to activate the environment and install `atri` CLI.

```
conda activate my_env
pip install atri
```

:::info
Replace `my_env` with your own environment name that you created using `conda create ...` command in previous step.
:::

### Start the Atri engine

Start Docker if it is not already running. Make sure that you have activated the virutal environment.

#### Activate pipenv environment

From inside `my_app` directory, run

```
pipenv shell
```

#### Activate conda environment

```
conda activate my_env
```

Once the docker is running and the virtual environment is activated, please run the following command from inside `my_app` directory.

```
atri start
```

:::info
This will start the visual editor at `http://localhost:4002`. If the editor doesn't open automatically in the browser, please open `http://localhost:4002` in the browser.
:::
