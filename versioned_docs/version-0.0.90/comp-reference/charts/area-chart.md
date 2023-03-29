---
title: Area Chart
description: Adding custom properties to an area chart component
---

## Custom properties of area chart

All the custom properties of area chart must be accessed using `Area.custom`.

### `Area.custom.data`

Put data into the bar chart by following the example shown below:

```python
at.Area.custom.data = [
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

### `Area.custom.options`

Continuing from the previous example, you can select areas to animate when the page loads by setting `Area.custom.options`. In this example, we are animating area for temperature but not for rainfall.

```python
at.Area.custom.options = {
    "temperature": {
        "animate": True
    }
}
```

Similarly, we can set other fields in `Area.custom.options`. The `order` property allows you to control the sequence in which different areas will be stacked.

```python
at.Area.custom.options = {
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

### `at.Area.custom.toolTip`

You can show or hide tooltip that appears when we hover over the chart.

```python
at.Area.custom.toolTip = {"show": True}
```

### `at.Area.custom.legend`

You can show or hide legend for the chart.

```python
at.Area.custom.legend = {"show": True}
```

### `at.Area.custom.yAxis`

You can show or hide y-axis of the chart.

```python
at.Area.custom.yAxis = {"show": True}
```

### `at.Area.custom.xAxis`

By default the field/key of x-axis in the `at.Area.custom.data` is `x`, but, this can be changed to a different name.

```python
at.Area.custom.xAxis = {"key": "year", "show": True}

# The same data with different key for x-axis
at.Area.custom.data = [
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

### `at.Area.custom.cartesianGrid`

We can show cartesian grid in the graph and set the size of the dashes.

```python
at.Area.custom.cartesianGrid = {"show": True, "strokeDasharray": 5}
```

## Styling properties for area chart

Same as other components with some fields removed as deemed not applicable for charts.
