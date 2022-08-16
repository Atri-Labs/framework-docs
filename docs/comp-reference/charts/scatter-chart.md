---
title: Scatter Chart
description: Adding custom properties to a component
---

## Custom properties of scatter chart

All the custom properties of scatter chart must be accessed using `Scatter.custom`.

### `Scatter.custom.data`

Put data into the scatter chart by following the example shown below. Here we are plotting `x` field on x-axis. The `min` & `max` values will be drawn on the y-axis as two different set of points. You can add as many set of points as you want.

```python
at.scatter.custom.data = [
    # set 1 of point
    [
        { x: 100, "min": 200, "max": 200 },
        { x: 120, "min": 100, "max": 260 },
        { x: 170, "min": 300, "max": 400 },
        { x: 140, "min": 250, "max": 280 },
        { x: 150, "min": 400, "max": 500 },
        { x: 110, "min": 200, "max": 280 },
    ],
    # set 2 of point
    [
        { x: 200, "min": 260, "max": 300 },
        { x: 240, "min": 290, "max": 350 },
        { x: 190, "min": 290, "max": 350 },
        { x: 198, "min": 250, "max": 270 },
        { x: 180, "min": 280, "max": 340 },
        { x: 210, "min": 220, "max": 280 },
    ]
    ]
```

### `Scatter.custom.options`

Continuing from the previous example, you can select set of points to animate when the page loads by setting `Scatter.custom.options`. In this example, we are animating "max" for but not for "min".

```python
at.Scatter.custom.options = {
    [
        { "max": { "animate": True } }
    ]
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
