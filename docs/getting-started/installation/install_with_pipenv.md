---
title: Install and run Atri using pipenv
description: How to install Atri Framework when you are using pipenv virtual environment
---
### 1. Create a project directory

Create an empty directory anywhere in your repository. It will later contain all the files for your app. In this example, we are creating a directory called `my_app`. You can choose any name for this directory.

```bash
mkdir my_app
```

### 2. Install `atri` CLI

:::note
Make sure that pipenv is installed and added to the `PATH` environment variable.
:::note
From inside the project directory, `my_app` in this example, run the following command:

```bash
cd my_app
pipenv install atri==0.0.78
```

:::success 
Congratulations! Atri framework has been successfully installed. 
:::

### 3. Activate virtual environment

From your project root directory, activate the virtual environment. 

```bash
pipenv shell
```

### 4. Start Atri engine 

Let us check if the installation worked and start the engine by running the following command. 

```bash
atri start
```

You will be asked to select the virtual environment tool you are using. Please select `pipenv`. 

:::success
Congratulations! Atri framework is now ready to use. The visual editor is now available at `http://localhost:4002`.
:::

### Summary 

Below is a quick review of the steps we followed to install and run Atri engine using pipenv. 

![New project using pipenv](/snapshots/new_proj_pipenv.jpeg)

### Next Steps

If you are using the framework for the first time, we strongly recommend you follow the upcoming [tutorial to create a simple app](getting-started/create-app.md). 

### Problems?

If you faced any problems during installation refer to the following FAQ:-

- Getting installation failed with error: ''pipenv' is not recognized as an internal or external command' ?[view answer](https://github.com/Atri-Labs/atrilabs-engine/discussions/340)
- Receiving TypeError upon running atri start ? [view answer](https://github.com/Atri-Labs/atrilabs-engine/discussions/334).
- Running pipenv install atri results in 'The term 'pipenv' is not recognized as the name of a cmdlet, function, script file, or operable program.' error ? [view answer](https://github.com/Atri-Labs/atrilabs-engine/discussions/338).

Also, if you still have some unresolved errors you can visit the other questions in the discussions [here,](https://github.com/Atri-Labs/atrilabs-engine/discussions/categories/help-installation-start)
or you may reach out to us at our [Slack community](https://join.slack.com/t/atricommunity/shared_invite/zt-1e756m1at-bZBxngvw7KWWO0riI4pc0w). 
