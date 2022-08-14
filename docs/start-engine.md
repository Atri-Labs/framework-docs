---
title: Start Atri engine
description: How to start using Atri framework
slug: getting-started/start-engine
---
Once we have installed `atri` CLI, everytime you return to work on an existing project (or are working on a new project), you always begin by following the instructions in this page.  

### 1. Activate virtual environment

Go to your project root directory and activate the virtual environment. In this example, our project directory is `my_app`. 

#### Activate pipenv environment

If you are using `pipenv` virtual environment, activate it by running the following command from inside the `my_app` directory. 

```
pipenv shell
```
#### Activate conda environment

However, if you are using `conda` virtual environment instead, run the following command. 

```
conda activate my_env
```

### 2. Start Atri engine 

Once the the virtual environment is activated, please run the following command from inside `my_app` directory.

```
atri start
```

:::info
This will start the visual editor at `http://localhost:4002`. If the editor doesn't open automatically in the browser, please open `http://localhost:4002` in the browser.
:::

Congratulations! Atri framework is now ready to use. 

### Next Steps

If you are using the framework for the first time, we would strongly recommend you follow the upcoming tutorial to create a simple app. 