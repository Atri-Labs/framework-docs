---
title: Upload Button
description: Create an upload button to upload one or many files
---

## Upload one file

Drag & drop an `Upload` button from component picker onto the canvas. You can make changes to the look and feel of the `Upload` button in the styles panel. Once ready with your changes you can hit `Publish` on the top right corner.

Now, in the `main.py` file, the `handle_event` function will be called everytime user uploads a file. Let's assume the name of the `Upload` component is `upload1`, then, we can write the following python code -

```python
def handle_event(at: Atri, req: Request, res: Response):
    # some code for handling other events ...

    # check if file upload event has been triggered
    if at.upload1.onChange:
        # sanity check if user has successfully uploaded a file
        if at.upload1.io.files != None:
            files = at.upload1.io.files
            # check if user has uploaded one or more files
            if len(files) > 0:
                # grab the first file
                file = files[0].file
                # read the bytes in file
                data = file.read()
                # optional - convert bytes into utf-8 format
                data_utf8 = data.decode()
                # process data as you process bytes in python ...
                # process data_utf8 as you process strings in python ...
```

## Upload many files

If you want to allow user to upload multiple files, set the `multiple` checkbox in `Upload` button's custom panel to checked/ticked. Hit `Publish` when you are ready with your changes.

All the python code will stay the same, except, we can read all files in a loop.

```python
def handle_event(at: Atri, req: Request, res: Response):
    # some code for handling other events ...

    # check if file upload event has been triggered
    if at.upload1.onChange:
        # sanity check if user has successfully uploaded a file
        if at.upload1.io.files != None:
            files = at.upload1.io.files
            # here is the difference, we are looping over all files
            for i, file in enumerate(files):
                # read the bytes in file
                data = file.read()
                # optional - convert bytes into utf-8 format
                data_utf8 = data.decode()
                # process data as you process bytes in python ...
                # process data_utf8 as you process strings in python ...
```
