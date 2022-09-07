---
title: Install and run Atri using conda
description: How to install Atri Framework when you are using conda virtual environment
---
If you are using `pipenv` virtual environment, you should skip this page. 

### 1. Create a project directory

Create an empty directory anywhere in your repository. It will later contain all the files for your app. In this example, we are creating a directory called `my_app`. You can choose any name for this directory.

```bash
mkdir my_app
```

### 2. Create a virtual environment

Run the following command to create an environment. In this example, we are creating a conda environment called `my_env`. You can choose any name for this environment.

```bash
cd my_app
conda create -y -n my_env python
```

### 3. Install `atri` CLI

Run the following commands to activate the environment and install `atri` CLI. Replace `my_env` with your own environment name that you created using `conda create ...` command in previous step.

```bash
conda activate my_env
pip install atri
```

:::success 
Congratulations! Atri framework has been successfully installed. 
:::

### 4. Start Atri engine 

Let us check if the installation worked and start the engine by running the following command. 

```bash
atri start
```

You will be asked to select the virtual environment tool you are using. Please select `conda`. 

:::success
Congratulations! Atri framework is now ready to use. The visual editor is now available at `http://localhost:4002`.
:::

### Summary 

Below is a quick review of the steps we followed to install and run Atri engine using conda. 

![New project using conda](/snapshots/new_proj_conda.png)

### Next Steps

If you are using the framework for the first time, we strongly recommend you follow the upcoming [tutorial to create a simple app](getting-started/create-app.md). 

### Problems?

If you faced any problems during installation or have any other queries, you may reach out to us in our [Slack community](https://join.slack.com/t/atricommunity/shared_invite/zt-1e756m1at-bZBxngvw7KWWO0riI4pc0w). 