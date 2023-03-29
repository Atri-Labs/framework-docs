---
title: Send images from backend to client components
description: How to use the utility function to help send image from backend to the client
---

In many situations we might want to send image from backend to frontend, to make it simpler for the framework user we have simplified the task and did all the heavy lifting for the user all you have to do is follow the below-mentioned 3 steps :-


#### 1. Make sure atri_utils is installed and imported otherwise run the following command in the terminal

```shell
pipenv install atri_utils
```

#### 2. Make sure you have imported * from atri_utils otherwise add the following piece of code at the top of the main.py file of the route you want to use it in

```python
from atri_utils import *
```

#### 3. Now all you have to do is add the following code in the handle_event/handle_page_request function.

```python
# if the image is at some location inside the project
def handle_event(at: Atri, req: Request, res: Response):
    at.Image.custom.src = create_media_response(file_path, mime_type='image/jpeg')


# if the image is being uploaded using the upload button of our engine
def handle_event(at: Atri, req: Request, res: Response):
    if at.Upload.onChange:
        img = at.Upload.io.files[0].file
        at.Image.custom.src = create_media_response(img.read())

```

Note:- Replace Image/Upload with the specific Image/Upload component you want to send image to 



