---
title: Parse Uploaded File
description: A function of the uploaded_files in atri-utils
---

### UseCase
The `parse_uploaded_file` function can be used to convert `file` or `image-data` into a numpy array format which is the format required by most ML models for the input image


For example, you want to use a user uploaded image as input for the ML model or some task that specifically required numpy array format


:::info
Cross-check the type of data you are passing through the function as it currently only accepts `bytes`, `BinaryIO`, `BufferedReader`, `str: filename`
:::info

##### Make sure atri-utils is imported on the top as:

```python
from atri_utils import *
```

##### 2. Code for the main.py to get the numpy array from the uploaded image 

```python
def handle_event(at: Atri, req: Request, res: Response):
    if at.Upload1.onChange:
        if at.Upload1.io.files != None:
            file = at.Upload.io.files[0]
            nparray_img = parse_uploaded_file(file.file.read())
```


