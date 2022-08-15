---
title: Create your first app
description: Tutorial to help you create your first app using Atri framework
slug: getting-started/create-app
---
Now that we have installed and started the Atri engine, we will create a very simple app to introduce you to the framework. It is a single page app that contains a bar chart.

## Creating frontend of the app

Let us go to the visual editor started at `http://localhost:4002`. We will create the frontend of our app here. 

1. To add the bar chart, click the `Component Picker` icon in the top menu. 

![alt text](/snapshots/component_picker.png)

This will open the `Component Manager`. Drag-and-drop the bar chart onto the canvas.

2. When we drop the chart onto the canvas, it is selected by default and style panel gets opened. 

    a. Let us make a style related modification here - we will add a top margin of 20px.

    b. Let us also change the title of the graph from the custom panel. 

:::note
We will refer this chart by the same name in the code as mentioned here. 
:::

3. Click <i>Publish</i> in the top menu. 

Our app is now built and deployed at `http://localhost:4005/`. 

:::info
Everything that we built visually has now been converted into frontend code and saved in your local repository. 
:::

## Creating backend of the app

Let us now feed data to the chart in our app. 

We can make changes to any component in the app through the file at `my_app/controllers/routes/main.py`

1. Since we always want the chart to display this data instead of the the time an event occurs, we will define the X and Y values in the `init_state()`. 

```python
at.bar1.custom.x = ['a', 'b', 'c']
at.bar1.custom.y = [10, 20, 30]
```

:::tip
We can use the help of Intellisense provided by our code editor and avoid remembering the API structure.
:::

# Problems?

Slack
Documentation