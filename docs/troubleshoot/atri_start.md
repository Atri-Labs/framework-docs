---
title: Other bugs
description: How to debug errors faced while using Atri framework
---

Please refer to the Frequently Asked Questions in this page. If the provided solution does not resolve your error or you do not find your error discussed here, please jump to [the last section](#still-need-help).

### TypeError: Cannot read properties of undefined (reading 'text')

**Description**: On running `atri start`, a new tab opens in the browser at port 4005 (as expected) but instead of the visual editor opening at that port, TypeError is received.

![Error](https://user-images.githubusercontent.com/102641692/194763928-994a98a1-b3fb-4426-af22-16f76ceeeb2a.png)

**Fix**: Please refresh the page once. Sometimes, the link opens on the browser before the entire build is complete which results in this error.

### ModuleNotFoundError: No module named atri_utils

**Description**: On running `atri start`, the Terminal shows `ModuleNotFoundError`. 

**Fix**: Python installation seems to have failed. Please install it manually.

### ModuleNotFoundError: No module named 'fastapi'

**Description**: On running `atri start`, the Terminal shows `ModuleNotFoundError: No module named 'fastapi'. Error occured while running python -m controllers.server serve`. 

![Error](https://user-images.githubusercontent.com/102641692/198579801-01e3b0f1-4a9b-4d94-8bef-0d08ecea1d39.png)

**Fix**: It seems Python packages did not get installed correctly. You will have to install them manually.

### Still Need Help?

1. Stop the current development session by pressing `Ctrl + C` in the Terminal.

2. Run `atri start --debug` instead to get detailed error messages in your Terminal. 

3. Recreate the process where you were facing an error. 

4. Check if your error has already been asked before [here](https://github.com/Atri-Labs/atrilabs-engine/discussions/categories/help-installation-start). Else, submit a new Discussion.