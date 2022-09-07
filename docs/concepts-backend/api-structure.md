---
title: API structure
description: Components API explained
---
### Folder structure
All the pages we create in the visual editor are available at `controllers/routes`. We can write the backend code for each page in its `main.py` file.

### Writing backend
There are three functions in the `main.py` file - `init_state` ,`handle_page_request` and `handle_event`. 

`init_state()` function is called when a user visits the page for the first time. Hence, to change the initial state of the app, we make modifications here. For example, when we add a `Button` component in our app, the default value of its custom property is set to `Submit`. However, if we wish to change it to `Click me`, we can either do so from the custom panel in the visual editor or from this function here by writing the following code:

```python
def init_state(at: Atri):
    at.Button3.custom.text = "Click here"
```
`handle_page_request()` function is called whenever the page is loaded/reloaded. For example, you want a specific component to have display `none` whenever tha page loads, or you want the data in the charts to the pre-defined data whenever the page reloads you can write code for that under this function

```python
def handle_page_request(at: Atri, req: Request, res: Response, query: str):
    at.Flex.styles.display = 'none'
```

`handle_event()` function is called when an event occurs. For example, a button has been clicked thus generating a `click` event. We can now make modifications to the Flex in our app by making it appear on the screen:

```python
def handle_event(at: Atri, req: Request, res: Response, query: str):
    # Display Success in textbox if button is clicked
    if at.Button1.onClick:
        at.Flex.styles.display = "flex"
```