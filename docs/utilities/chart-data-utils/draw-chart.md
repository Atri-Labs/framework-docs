---
title: Draw a chart
description: A function to draw a chart
---


The `draw_charts` function can be used to pass data and options to an instance of any type of charts that are provided in the Atri engine.
It can take the data in `pandas.DataFrame` format and convert it to the format accepted by the specific `Chart` instance.

For example, you want to plot a chart with a certain data that you have in a `pandas.DataFrame` format, you can do it by following 2 simple steps :-


### 1. Make sure atri-utils is imported on the top as:

```python
from atri_utils import *
```

### 2. Use the following code in the main.py to show the data and options reflected in the Chart on the frontend.

:::note
That the below code demonstrates only BarChart & PieChart, but we can use the same API just by passing different `type` parameter accordingly. 
:::note

#### For the BarChart:
Here the type parameter can be modified according to the type of chart being passed,
It can take values 'bar', 'scatter', 'line', 'area', 'histogram', 'candlestick', 'pie'.
Here the x parameter is the optional parameter which refers to the column in the DataFrame which will be plotted on the x-axis.
If you are not providing the x parameter make sure the column name of the column you want to plot on the x-axis is 'x'.

#### For the Pie Chart:
Here parameter name is optional to set the column to be used as the names of different sections.
If name is not passed make sure the column you want to use for name is named 'name'. 
The parameter value is optional to set the column to be used as the value/ratios of different sections.
If value is not passed make sure the column you want to use for value is named 'value'.
We are also passing outerData which is the DataFrame used for the Outer circle data. 
Pass outerData only if you want an inner pie and outer pie otherwise don't pass outerData.


```python
def init_state(at: Atri):
    # For Bar Chart
    draw_charts(at.BarChart,pd.DataFrame, type = 'bar', x='price')
    
    # For Pie Chart
    draw_charts(at.PieChart,pd.DataFrame, type='pie', name='price', value='sales', outerData=pd.DataFrame)

```

:::note
That you can also use the [`parse_charts_data`](/utilities/chart-data-utils/parse-charts-data) function if you just want the data to be returned as the accepted format for Atri chart instance.
:::note
