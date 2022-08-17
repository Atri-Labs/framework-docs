---
title: Create your first app
description: Tutorial to help you create your first app using Atri framework
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Now that we have installed and started the Atri engine, we will create a very simple app - a single page app that contains a bar chart - to get a quick introduction to the framework.

## Video tutorial

You may follow the video tutorial or skip to the documentation below.
<iframe width="560" height="315" src="https://www.youtube.com/embed/cNCUVF9o8oY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Creating frontend of the app

Let us go to the visual editor started at `http://localhost:4002`. We will create the frontend of our app here.

1. To add the bar chart, click on the `Open Component Picker` icon in the top menu.

![Open Component Picker](/snapshots/open_component_picker.png)

This will open the `Component Picker`. Drag-and-drop the bar chart from the Data section onto the canvas.

![Add graph](/snapshots/bar_chart.png)

2. When we drop the chart onto the canvas, its name is visible in the right panel. Let us rename it to `bar1`.

![Variable name](/snapshots/variable_name.png)

:::note
We always refer a component by the same name in the code as the name that appears on the right panel.
:::

3. Click `Publish` in the top menu.

![Publish](/snapshots/publish.png)

Our app is now built and is running at `http://localhost:4005/`.

:::info
The frontend code for our app has been auto-generated and saved in our local repository.
:::

## Creating backend of the app

Let us now feed data to the chart in our app.

We can make changes to any component in the app through the file at `controllers/routes/main.py`

1. Since this is a historical time series, it is static data and it will not change. Hence, we will provide this dataset in the `init_state()`.

<Tabs>
<TabItem value="controllers/routes/main.py" label="controllers/routes/main.py" default>

```python
from .atri import Atri
from fastapi import Request, Response

def init_state(at: Atri):
    # highlight-start
    at.bar1.custom.data = [{"x":2010, "category1":40, "category2":50}, 
                           {"x":2011, "category1":30, "category2":60}]
    # highlight-end

def handle_page_request(at: Atri, req: Request, res: Response):
    pass

def handle_event(at: Atri, req: Request, res: Response):
    pass
```

</TabItem>
</Tabs>

As soon as we save this file, the changes reflect in our app. 

:::success Congratulations!
We successfully created an app in a few minutes.
:::

## Next Steps

Atri framework can be used to create powerful multi-page, responsive apps. We are very excited to see the incredible projects you will build.

Here are a few immediate next steps to consider:

-   Create your [portfolio](https://atrilabs.com) to showcase your data science, machine learning or web development skills to the world.
-   Join our [Slack community](https://join.slack.com/t/atricommunity/shared_invite/zt-1e756m1at-bZBxngvw7KWWO0riI4pc0w) to ask questions, share your projects and get inspired.
-   Refer the [guides](/category/how-to-guides) to get answers to frequently asked questions.
-   Learn concepts of the [visual editor](/category/concepts-of-visual-editor) and [Python backend](/category/concepts-of-python-backend).
