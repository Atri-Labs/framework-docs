---
sidebar_position: 3
title: Start the engine
slug: /
---

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