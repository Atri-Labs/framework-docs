---
title: API structure
description: Components API explained
slug: concepts-api/api-structure
---
### Folder structure
All the pages we create in the visual editor are available at `controllers/routes`. We can write the backend code for each page in its `main.py` file.

### Writing backend
There are two functions in the `main.py` file - `init_state` and `handle_event`. 

`init_state()` function is called when a user visits the page for the first time. Hence, to change the initial state of the app, we make modifications here. For example, when we add a `Button` component in our app, the default value of its custom property is set to `Submit`. However, if we wish to change it to `Click me`, we can either do so from the custom panel in the visual editor or from this function here by writing the following code:

```
def init_state(at):
    at.Button3.custom.text = "Click here"
```

`handle_event` function is called when an event occurs. For example, a button has been clicked thus generating a `click` event. We can now make modifications to the Textbox in our app by writing the following code in this function:

```
def handle_event(at):
    # Display Success in textbox if button is clicked
    if at.Button1.onClick:
        at.TextBox1.custom.text = "Success"
```