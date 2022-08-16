---
title: Line Chart
description: Adding custom properties to an line chart component
---

## Custom properties of line chart

All the custom properties of line chart must be accessed using `Line.custom`.

### `Line.custom.data`

Put data into the line chart by following the example shown below:

```python
at.Line.custom.data = [
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

### `Line.custom.options`

Continuing from the previous example, you can select lines to animate when the page loads by setting `Line.custom.options`. In this example, we are animating line for temperature but not for rainfall.

```python
at.Line.custom.options = {
    "temperature": {
        "animate": True
    }
}
```

Similarly, we can set other fields in `Line.custom.options`. The `order` property allows you to control the sequence in which different line will be drawn.

```python
at.Line.custom.options = {
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

### `at.Line.custom.toolTip`

You can show or hide tooltip that appears when we hover over the chart.

```python
at.Line.custom.toolTip = {"show": True}
```

### `at.Line.custom.legend`

You can show or hide legend for the chart.

```python
at.Line.custom.legend = {"show": True}
```

### `at.Line.custom.yAxis`

You can show or hide y-axis of the chart.

```python
at.Line.custom.yAxis = {"show": True}
```

### `at.Line.custom.xAxis`

By default the field/key of x-axis in the `at.Line.custom.data` is `x`, but, this can be changed to a different name.

```python
at.Line.custom.xAxis = {"key": "year", "show": True}

# The same data with different key for x-axis
at.Line.custom.data = [
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

### `at.Line.custom.cartesianGrid`

We can show cartesian grid in the graph and set the size of the dashes.

```python
at.Line.custom.cartesianGrid = {"show": True, "strokeDasharray": 5}
```

## Styling properties for area chart

Same as other components with some fields removed as deemed not applicable for charts.
