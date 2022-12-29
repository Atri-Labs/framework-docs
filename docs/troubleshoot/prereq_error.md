---
title: Prerequisites bugs
description: How to debug errors faced during installation
---

Please refer to the Frequently Asked Questions in this page. If the provided solution does not resolve your error or you do not find your error discussed here, please submit a [new Discussion](https://github.com/Atri-Labs/atrilabs-engine/discussions/categories/help-installation-start).

### OSError: [WinError 2] The system cannot find the file specified: 'c:\python39\Scripts\virtualenv.exe'

**Description**: On running `pip install pipenv`, the Terminal shows `OSError`. 

**Fix**:

1. Add `C:\python39\Scripts\` to the PATH environment variable.

2. If that doesn’t work, follow [this Stack overflow answer](https://stackoverflow.com/a/64585018).