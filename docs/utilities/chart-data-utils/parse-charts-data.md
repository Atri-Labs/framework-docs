---
title: Parse Charts Data
description: A function to generate data for Atri chart instances
---

The `parse_charts_data` function can be used to convert your DataFrame data to the format which is accepted by the Atri chart instances.
The data can be generated accordingly for each chart by passing the `type` parameter accordingly.

For example, you want the data for a Bar chart in the format accepted by the Atri instance, you can do it by following 2 simple steps:-


### 1. Make sure atri-utils is imported on the top as:

```python
from atri_utils import *
```

### 2. Use the following code in the main.py file to generate the required data.

```python
def init_state(at: Atri):
    
    # For Bar Chart
    at.BarChart.custom.data = parse_charts_data(pd.DataFrame, type='bar', x='price')
    
    # Here x is optional parameter referring to the column name of the column to be plotted on the x-axis.
    # If you are not passing the x parameter make sure the column name of the column to be plotted on the x-axis is 'x'.

```

:::note
The above example only refers to using the function for BarChart, but it can be used for all sorts of charts offered in the Atri Engine.
This can be done by passing the `type` parameter accordingly.
:::note