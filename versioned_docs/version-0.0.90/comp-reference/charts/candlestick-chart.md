---
title: Candlestick Chart
description: Adding custom properties to a component
---

## Custom properties of candlestick chart

All the custom properties of candlestick chart must be accessed using `Candlestick.custom`.

### `Candlestick.custom.data`

Put data into the candlestick chart by following the example shown below:

```python
at.Candlestick.custom.data = [
    {
        "min": 100,
        "lowerQuartile": 200,
        "median": 250,
        "upperQuartile": 450,
        "max": 650,
        "average": 150,
        "name": "Page A",
    },
    {
        "min": 200,
        "lowerQuartile": 400,
        "median": 600,
        "upperQuartile": 700,
        "max": 800,
        "average": 550,
        "name": "Page B",
    },
    {
        "min": 0,
        "lowerQuartile": 200,
        "median": 400,
        "upperQuartile": 600,
        "max": 800,
        "average": 400,
        "name": "Page C",
    },
    ]
```

### `Candlestick.custom.options`

We can set the colors for different parts of candlestick chart as follows:

```python
at.Candlestick.custom.options = {
    "animate": True,
    "dot": {
        "stroke": "red",
        "fill": "red"
    },
    "box": {
        "fill": "green",
    },
    "whisker": {
        "fill": "blue",
        "stroke": "blue",
        "strokeWidth": 2
    }
}
```

### `at.Candlestick.custom.toolTip`

You can show or hide tooltip that appears when we hover over the chart.

```python
at.Candlestick.custom.toolTip = {"show": True}
```

### `at.Candlestick.custom.legend`

You can show or hide legend for the chart.

```python
at.Candlestick.custom.legend = {"show": True}
```

### `at.Candlestick.custom.xAxis` & `at.Candlestick.custom.yAxis`

You can show or hide y-axis of the chart.

```python
at.Candlestick.custom.xAxis = {"show": True}

at.Candlestick.custom.yAxis = {"show": True}
```
