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

### `at.Bar.custom.toolTip`

You can show or hide tooltip that appears when we hover over the chart.

```python
at.Bar.custom.toolTip = {"show": True}
```

### `at.Bar.custom.legend`

You can show or hide legend for the chart.

```python
at.Bar.custom.legend = {"show": True}
```

### `at.Bar.custom.yAxis`

You can show or hide y-axis of the chart.

```python
at.Bar.custom.yAxis = {"show": True}
```

### `at.Bar.custom.xAxis`

By default the field/key of x-axis in the `at.Bar.custom.data` is `x`, but, this can be changed to a different name like `year` below.

```python
at.Bar.custom.xAxis = {"key": "year", "show": True}

# The same data with different key for x-axis
at.Bar.custom.data = [
    {
        "year": "2010",
        "temperature": 20,
        "rainfall": 10
    },
    {
        "year": "2011",
        "temperature": 30,
        "rainfall": 20
    },
    {
        "year": "2012",
        "temperature": 20,
        "rainfall": 15
    }
    ]
```

### `at.Bar.custom.cartesianGrid`

We can show cartesian grid in the graph and set the size of the dashes.

## Styling properties for bar chart

Same as other components with some fields removed as deemed not applicable for charts.
