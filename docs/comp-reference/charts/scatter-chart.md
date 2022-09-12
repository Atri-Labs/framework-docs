---
title: Scatter Chart
description: Adding custom properties to a component
---

## Custom properties of scatter chart

All the custom properties of scatter chart must be accessed using `Scatter.custom`.

### `Scatter.custom.data`

Put data into the scatter chart by following the example shown below. Here we are plotting `x` field on x-axis. The field names in the provided are fixed to `x`, `y` and `z`. The `x` value will be plotted on x-axis, `y` on y-axis and `z` value will determine the diameter of the cirle.

```python
at.scatter.custom.data = [
    # set 1 of point
    [
        { "x": 100, "y": 200, "z": 200 },
        { "x": 120, "y": 100, "z": 260 },
        { "x": 170, "y": 300, "z": 400 },
        { "x": 140, "y": 250, "z": 280 },
        { "x": 150, "y": 400, "z": 500 },
        { "x": 110, "y": 200, "z": 280 },
    ],
    # set 2 of point
    [
        { "x": 200, "y": 260, "z": 300 },
        { "x": 240, "y": 290, "z": 350 },
        { "x": 190, "y": 290, "z": 350 },
        { "x": 198, "y": 250, "z": 270 },
        { "x": 180, "y": 280, "z": 340 },
        { "x": 210, "y": 220, "z": 280 },
    ]
    ]
```

### `Scatter.custom.options`

Continuing from the previous example, you can select set of points to animate when the page loads by setting `Scatter.custom.options`. In this example, we are animating "max" for but not for "min".

```python
# The order of options should match the order in data
at.Scatter.custom.options = {
    # options for set 1 of point
    {"name": "min", "animate": False},
    # you can keep the dictionary empty if you want the defaults to kick-in
    # options for set 2 of point
    {}
}
```

Similarly, we can set other fields in `Scatter.custom.options`.

```python
at.Bar.custom.options = {
    [
        {
            "name": "min"
            "fill": "red",
            "stroke": "orange",
            "shape": "circle"
        },
        {
            "name": "max"
            "fill": "red",
            "stroke": "orange",
            "shape": "cross"
        }
    ]
}
```

The available values for `shape` option are 'circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye'.

## Styling properties for bar chart

Same as other components with some fields removed as deemed not applicable for charts.
