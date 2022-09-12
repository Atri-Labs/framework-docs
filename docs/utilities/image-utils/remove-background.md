---
title: Remove Background
description: A function to remove the background of the given image to the background provided
---

### UseCase
The `remove_background` function can be used to remove the background of the given image 

For example, you want to use an image of a person but not the background. it can be done with just 2 simple steps:-


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
            removed_bg_img = remove_background(file.file.read())
```

