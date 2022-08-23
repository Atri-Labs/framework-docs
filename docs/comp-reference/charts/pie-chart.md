---
title: Pie Chart
description: Adding custom properties to a component
---

## Custom properties of pie chart

All the custom properties of pie chart must be accessed using `Pie.custom`.

### `Pie.custom.data`

You can draw one or more circles in a pie chart as shown below:

```python
at.Pie.custom.data = [
    # Inner circle
    [
        { "name": "Group A", "value": 400 },
        { "name": "Group B", "value": 300 },
        { "name": "Group C", "value": 300 },
        { "name": "Group D", "value": 200 },
    ],
    # Outer circle
    [
        { "name": "A1", "value": 100 },
        { "name": "A2", "value": 300 },
        { "name": "B1", "value": 100 },
        { "name": "B2", "value": 80 },
    ]
    ]

at.Pie.custom.options = [
    # options for first circle
    {
        "cx": "50%",            # center of the circle's x
        "cy": "50%",            # center of the circle's y
        "outerRadius": "40%",   # radius of the circle
        "showLabel": true,
        "animate": false,
    },
    # options for second circle
    {
        "cx": "50%",
        "cy": "50%",
        "innerRadius": "65%",
        "showLabel": true,
        "animate": false,
    },
    ]
```

In the example above, when we use `%` value to set the size/position of circle, the `%` is relative to the size of the pie chart. For example, if your pie chart is of size `400` in a direction, then `50%` will be `200` in that direction.

If your data has the `value` field named differently, you can set `Pie.custom.keys.value = "OtherValue"`.

### `at.Pie.custom.toolTip`

You can show or hide tooltip that appears when we hover over the chart.

```python
at.Pie.custom.toolTip = {"show": True}
```

### `at.Pie.custom.legend`

You can show or hide legend for the chart.

```python
at.Pie.custom.legend = {"show": True}
```
