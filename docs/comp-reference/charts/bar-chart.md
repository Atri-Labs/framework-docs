---
title: Bar Chart
description: Adding custom properties to a component
---

## Custom properties of bar chart

All the custom properties of bar chart must be accessed using `Bar.custom`.

### `Bar.custom.data`

Put data into the bar chart by following the example shown below:

```python
at.bar.custom.data = [
    {
        "x": "2010",
        "temperature": 20,
        "rainfall": 10
    },
    {
        "x": "2011",
        "temperature": 30,
        "rainfall": 20
    },
    {
        "x": "2012",
        "temperature": 20,
        "rainfall": 15
    }
    ]
```

### `Bar.custom.stacked`

We can convert bar chart into stacked bar chart by setting `Bar.custom.stacked` to `True`.

### `Bar.custom.options`

Continuing from the previous example, you can select bars to animate when the page loads by setting `Bar.custom.options`. In this example, we are animating bars for temperature but not for rainfall.

```python
at.Bar.custom.options = {
    "temperature": {
        "animate": True
    }
}
```

Similarly, we can set other fields in `Bar.custom.options`. The `order` property allows you to control the sequence in which different bars will be drawn.

```python
at.Bar.custom.options = {
    "temperature": {
        "fill": "red",
        "stroke": "orange",
        "order": 0
    },
    "rainfall": {
        "fill": "red",
        "stroke": "orange",
        "order": 1
    }
}
```

### `Bar.styles`

Same as other components with some fields removed as deemed not applicable for charts.
