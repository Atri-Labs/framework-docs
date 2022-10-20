---
title: Dropdown
description: Create a Dropdown component
---

## Adding choices to the dropdown

Drag & drop a `Dropdown` from component picker onto the canvas. You can make changes to the look and feel of the `Dropdown` in the styles panel. Once ready with your changes you can hit `Build & Run` on the top right corner.

Now, in the `main.py` file, the `init_state` function will set the values of the dropdown. Let's assume the name of the `Dropdown` component is `Dropdown1`, then, we can write the following python code -


```python
def init_state(at: Atri):
    #Assign .custom.values an array containing the choices you want the dropdown to display.
    at.Dropdown1.custom.values = ['Apple', 'Banana', 'Orange', 'Papaya']

```

## Setting default value in the dropdown

Default value refers to the value that will show on the dropdown before clicking on it.
:::note
If the user does not use the dropdown, the value set in the `selectedValue` will be set by default.
:::note
```python
def handle_page_request(at: Atri, req: Request, res: Response):
    at.Dropdown1.custom.selectedValue = 'Apple'
```

:::info
To get the selected value in the backend from the dropdown use `Dropdown.custom.selectedValue`.
:::info