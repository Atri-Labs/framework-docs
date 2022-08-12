---
title: Install using conda
description: How to install Atri Framework locally for app development
slug: getting-started/installation/using-conda
---

### Create a virtual environment

You can directly jump to the next step if you have already have a conda environment for your app.

If you are using `conda` then run the following command to create an environment. In this example we are giving the environment the name `my_env`. You can choose any name for this environment.

```
conda create -y -n my_env python
```

### Install `atri` CLI

Run the following command to activate the environment and install `atri` CLI.

```
conda activate my_env
pip install atri
```

:::info
Replace `my_env` with your own environment name that you created using `conda create ...` command in previous step.
:::
