---
title: Draw a chart
description: A function to draw a chart
---

### UseCase
The `draw_charts` function can be used to pass Data and Options to an Instance of any type of charts that are provided in the Atri Engine.
It can take the data in `pandas.DataFrame` format and convert it to the format accepted by the specific `Chart` Instance.

For example, you want to plot a chart with a certain Data that you have in a `pandas.DataFrame` format, you can do it by following 2 simple steps :-


##### 1. Make sure atri-utils is imported on the top as:

```python
from atri_utils import *
```

##### 2. Code for the main.py to show the Data and options reflected in the Chart on the frontend

:::info
Note that the below code demonstrates only BarChart & PieChart.
:::info

```python
def init_state(at: Atri):
    # For Bar Chart
    draw_charts(at.BarChart,pd.DataFrame, type = 'bar', x='price')
    # Here the type parameter can be modified according to the type of chart being passed
    # It can take values 'bar', 'scatter', 'line', 'area', 'histogram', 'candlestick', 'pie'
    
    # Here the x parameter is the optional parameter which refers to the column in the DataFrame which will be plotted on the x-axis
    # If you are not providing x parameter make sure the column name of the xolumn you want to plot on the x-axis is 'x'
    
    
    # For Pie Chart
    draw_charts(at.PieChart,pd.DataFrame, type='pie', name='price', value='sales', outerData=pd.DataFrame)
    
    # Here parameter name is optional to set the column to be used as the names of different sections.
    # If name is not passed make sure the column you want to use for name is names 'name'
    # Here parameter value is optional to set the column to be used as the value/ratios of different sections.
    # If value is not passed make sure the column you want to use for value is names 'value'
    
    # Here we are also passing outerData which is the DataFrame used for the Outer circle data.
    # Pass outer data only if you want an inner pie and outside pie otherwise don't pass outerData

```

:::info
Note that you can also use the `parse_charts_data` function if you just want the data to be returned in the accepted format and not set the data to the Chart Instance.
:::info
