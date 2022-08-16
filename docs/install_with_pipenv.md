---
title: Install and run Atri using pipenv
description: How to install Atri Framework when you are using pipenv virtual environment
slug: getting-started/installation/using-pipenv
---
### 1. Create a project directory

Create an empty directory anywhere in your repository. It will later contain all the files for your app. In this example, we are creating a directory called `my_app`. You can choose any name for this directory.

```
mkdir my_app
```

### 2. Install `atri` CLI

From inside the project directory, `my_app` in this example, run the following command:

```
cd my_app
pipenv install atri
```

:::success 
Congratulations! Atri framework has been successfully installed. 
:::

### 3. Activate virtual environment

From your project root directory, activate the virtual environment. 

```
pipenv shell
```

### 4. Start Atri engine 

Let us check if the installation worked and start the engine by running the following command. 

```
atri start
```

You will be asked to select the virtual environment tool you are using. Please select `pipenv`. 

:::success
Congratulations! Atri framework is now ready to use. The visual editor is now available at `http://localhost:4002`.
:::

### Summary 

Below is a quick review of the sequence of steps we followed in this page. 

![New project using pipenv](/snapshots/new_proj_pipenv.png)

### Next Steps

If you are using the framework for the first time, we strongly recommend you follow the upcoming [tutorial to create a simple app](/create-app.md). 

### Problems?

If you faced any problems during installation or have any other queries, you may reach out to us in our [Slack community](https://join.slack.com/t/atricommunity/shared_invite/zt-1e756m1at-bZBxngvw7KWWO0riI4pc0w). 