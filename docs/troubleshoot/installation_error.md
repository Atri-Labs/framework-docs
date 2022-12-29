---
title: Installation bugs
description: How to debug errors faced during installation
---

Please refer to the Frequently Asked Questions in this page. If the provided solution does not resolve your error or you do not find your error discussed here, please submit a [new Discussion](https://github.com/Atri-Labs/atrilabs-engine/discussions/categories/help-installation-start).

### pipenv is not recognized as an internal or external command, operable program or batch file

1. Check if pipenv is installed in your system. Make sure you [satisfy the prerequisites](getting-started/installation/install_prereqs).  
2. Check if pipenv is added in the PATH environment variable.
3. Refer to [this Stack overflow answer](https://stackoverflow.com/a/47676529).

### zsh: command not found: pipenv 

Your pre-requisites are not satisfied. Refer to [the documentation](https://docs.atrilabs.com/getting-started/installation/install_prereqs) for details. 

If you have installed `pipenv` but are still facing this issue, then add `pipenv` to the PATH environment variable. Refer this guide for [reference](https://datatofish.com/add-python-to-windows-path/). 

### Unable to create process error

Run `pipenv install atri` again. If it still doesn't work, upgrade your Python /`pipenv`.

### --system is intended to be used for pre-existing Pipfile installation, not installation of specific packages. Aborting.

This error occurs due to an existing virtual environment created for the same path. To resolve this error in Unix based OS, visit your `virtualenvs` and delete the folder with the same name to your projects directory.

### Failed building wheel for yarl

There seems to be a problem with the Python installed on your computer. Reinstall Python (refer the [prerequisites](getting-started/installation/install_prereqs) for more details).