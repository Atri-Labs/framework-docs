---
title: Histogram Chart
description: Adding custom properties to a component
---

## Custom properties of histogram chart

All the custom properties of histogram chart must be accessed using `Histogram.custom`. It's actually a composite chart with bars and lines that can be controlled via the fields available in `Histogram.custom`.

### `Histogram.custom.data`

Histogram takes `x` & `y` values as shown below.

```python
at.Histogram.custom.data = {
    {
        "x": 0,
        "y": 4000,
    },
    {
        "x": 1,
        "y": 3000,
    },
    {
        "x": 2,
        "y": 2000,
    },
    {
        "x": 3,
        "y": 2780,
    },
}
```

### `Histogram.custom.xAxis` & `Histogram.custom.yAxis`

If the data has a key different than `x`, `y`, we can change the key as follows:

```python
at.Histogram.custom.xAxis = {
    "key": "temperature"
}

at.Histogram.custom.yAxis = {
    "key": "rainfall"
}
```

You can decide to show or hide an axis as follows:

```python
at.Histogram.custom.xAxis = {
    "show": True
}

at.Histogram.custom.yAxis = {
    "show": False
}
```

### `Histogram.custom.options`

If you want to change the color of the bars or the line, you can set it via the `options` field as shown below:

```python
at.Histogram.custom.options = {
    "line": {
        "stroke": "#DDD",
        "strokeWidth": 2
        "animate": True,
    },
    "bar": {
        "stroke": "blue",
        "fill": "blue",
        "animate": False,
    },
}
```

It's possible to hide bars or the line as required:

```python
at.Histogram.custom.options = {
    "line": {
        "hide": True,
    },
    "bar": {
        "hide": False,
    },
}
```

### `at.Histogram.custom.toolTip`

You can show or hide tooltip that appears when we hover over the chart.

```python
at.Histogram.custom.toolTip = {"show": True}
```

### `at.Histogram.custom.legend`

You can show or hide legend for the chart.

```python
at.Histogram.custom.legend = {"show": True}
```

### `at.Histogram.custom.cartesianGrid`

We can show cartesian grid in the graph and set the size of the dashes.
