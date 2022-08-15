---
title: Install Atri using conda
description: How to install Atri Framework when you are using conda virtual environment
slug: getting-started/installation/using-conda
---
If you are using `pipenv` virtual environment, you should skip this page. 

### Create a virtual environment

You can directly jump to the next step if you already have a conda environment for your app. Otherwise, run the following command to create an environment. In this example we are giving the environment the name `my_env`. You can choose any name for this environment.

```
conda create -y -n my_env python
```

### Install `atri` CLI

Run the following commands to activate the environment and install `atri` CLI.

```
conda activate my_env
pip install atri
```

:::info
Replace `my_env` with your own environment name that you created using `conda create ...` command in previous step.
:::

### Next Steps

Congratulations! Atri framework has been successfully installed. 

Let us now [start the Atri engine](/docs/start-engine.md). 