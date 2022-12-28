---
title: Installation bugs
description: How to debug errors faced during installation
---

### pipenv is not recognized as an internal or external command, operable program or batch file

1. Check if pipenv is installed in your system. Make sure you [satisfy the prerequisites](getting-started/installation/install_prereqs).  
2. Check if pipenv is added in the PATH environment variable.
3. Refer to [this Stack overflow answer](https://stackoverflow.com/a/47676529).

### zsh: command not found: pipenv 

Your pre-requisites are not satisfied. Refer to [the documentation](https://docs.atrilabs.com/getting-started/installation/install_prereqs) for details. 

If you have installed `pipenv` but are still facing this issue, then add `pipenv` to the PATH environment variable. Refer this guide for [reference](https://datatofish.com/add-python-to-windows-path/). 