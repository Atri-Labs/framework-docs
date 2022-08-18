---
title: Development flow for an existing project
description: How to continue using Atri framework
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Everytime you return to work on an existing project, make sure you follow the instructions in this page.  

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

:::info
The visual editor is now available at `http://localhost:4002`.
:::

### Summary 

Below is a quick review of the steps we followed.

<Tabs>
<TabItem value="pipenv" label="pipenv" default>

![existing project pipenv](/snapshots/existing_proj_pipenv.png)

</TabItem>
<TabItem value="conda" label="conda">

![existing project conda](/snapshots/existing_proj_conda.png)

</TabItem>
</Tabs>


### Deactivate virtual environment at the end of a development session

After each development session, make sure you deactivate your virtual environment. 

<Tabs>
<TabItem value="pipenv" label="pipenv" default>

```
exit
```

</TabItem>
<TabItem value="conda" label="conda">

```
conda deactivate
```

</TabItem>
</Tabs>