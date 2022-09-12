---
title: Update Atri
description: How to update version
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When a new version of Atri engine is released and you wish to update the version being used in your existing project, you can follow the steps mentioned here. 

### 1. Activate virtual environment

Go to your project root directory and activate the virtual environment you are using. In this example, our project directory is `my_app`. 

<Tabs>
<TabItem value="pipenv" label="pipenv" default>

```
cd my_app
pipenv shell
```

</TabItem>
<TabItem value="conda" label="conda">

```
cd my_app
conda activate my_env
```

</TabItem>
</Tabs>

### 2. Update Atri engine 

Once the the virtual environment is activated, please run the following command from inside `my_app` directory.

<Tabs>
<TabItem value="pipenv" label="pipenv" default>

```
pipenv update atri
```

</TabItem>
<TabItem value="conda" label="conda">

```
pip install atri -U
```

</TabItem>
</Tabs>

### 3. Remove previously auto-generated files 

Currently, the below process is manual, and soon these steps will be automated.

```shell
cd project_dir

rm -rf atri_app

rm controllers/server.py
```

### 4. Start Atri engine 

You can now start the engine. 

```shell
atri start
```

:::success
You have successfully updated Atri engine and the visual editor is now available at `http://localhost:4002`.
:::