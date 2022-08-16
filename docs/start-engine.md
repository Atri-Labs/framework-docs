---
title: Development flow for an existing project
description: How to continue using Atri framework
slug: getting-started/existing-project
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you have installed `atri` CLI, everytime you return to work on an existing project (or are working on a new project), you always begin by following the instructions in this page.  

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

### 2. Start Atri engine 

Once the the virtual environment is activated, please run the following command from inside `my_app` directory.

```
atri start
```

At the start of a new project, you will be asked to select the virtual environment you are using. 

:::info
The visual editor is now available at `http://localhost:4002`. If the editor doesn't open automatically, please manually open `http://localhost:4002` in the browser.
:::

Congratulations! Atri framework is now ready to use. 

### Next Steps

If you are using the framework for the first time, we strongly recommend you follow the upcoming tutorial to create a simple app. 