---
title: Navigation via backend
description: How to navigate from one page to another using Atri framework's controller
---

In some situations we might want to navigate from one page to another, but, the `url` to navigate to is only known upon a user event i.e. the `url` is dynamic. If you want to navigate to a fixed url you can see [navigate internally](/concepts-visual-editor/actions-panel#4-internal-navigation) or [navigate externally](https://docs.atrilabs.com/concepts-visual-editor/actions-panel#5-external-navigation) in editor.

For example, the `url` to navigate to should contain some query parameter.

## Navigate internally

If the `url` you want to navigate to is one of the pages from your app, then you can simply provide an email like this:

```python
def handle_event(at: Atri, req: Request, res: Response):
    url = "/pagename"
    res.headers.append("location", url)
```

You can pass query as well:

```python
import urllib.parse

def handle_event(at: Atri, req: Request, res: Response):
    query = {
        "param1": "value1",
        "param2": "value2"
    }

    url = "/pagename" + "?" + urllib.parse.urlencode(query)
    res.headers.append("location", url)
```

## Navigate externally

If you want to navigate to an external url, simply pass in the full url.

```python
def handle_event(at: Atri, req: Request, res: Response):
    url = "https://atrilabs.com"
    res.headers.append("location", url)
```
