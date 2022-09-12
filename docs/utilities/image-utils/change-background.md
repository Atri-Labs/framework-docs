---
title: Change Background
description: A function to change the background of the given image to the background provided
---

### UseCase
The `change_background` function can be used to switch the background of the given image with a custom background image provided

For example, you want to use an image of a person but the background must be of a desert/snowfall etc. it can be done with just 2 simple steps:-


##### 1. Make sure atri-utils is imported on the top as:

```python
from atri_utils import *
```

##### 2. Code for the main.py to get the Changed Background image

```python
def handle_event(at: Atri, req: Request, res: Response):
    if at.Upload1.onChange:
        if at.Upload1.io.files != None:
            file = at.Upload.io.files[0]
            changed_bg_img = (file.file.read(), back_img)
```

:::info
The back_img can be of type `bytes`, `PIL.Image`, `str:file_path`
:::info
