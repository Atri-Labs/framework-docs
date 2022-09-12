---
title: Install Prerequisites
description: Prerequisities to satisfy before getting started with Atri Framework
---
Before we get started with the framework, please ensure that you satisfy the following prerequisities. 

### 1. Python 3.7+

The Atri framework supports Python version 3.7 or above. 

If you do not have Python installed already, please download its latest version from [python.org](https://www.python.org/downloads/).

If you have Python, you can check its version by running the following command in Terminal.

```bash
python --version
```

Depending on your system's configuration, you might write `python3` instead. 

### 2. Virtual environment manager

We enforce best practices for app development. Hence, `atri` Command Line Interface (CLI) works only from inside a virtual environment. We currently support two virtual environment tools - `pipenv` (preferred) and `conda`. 

#### Pipenv (preferred)
If you do not have `pipenv` installed already, please run the following command in the terminal. 

```bash
pip install --user pipenv
```

Depending on your system's configuration, you might write `pip3` instead. 

#### Conda

If you would like to use `conda` instead of `pipenv`, please follow the instructions provided [here](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation) to install `conda`.

### Next Steps

Perfect! Now that all the prerequisities have been satisfied, let us install `atri` CLI. Depending on the virtual environemnt package you are using, you can go to either of these two pages:

- [Install Atri using pipenv](getting-started/installation/install_with_pipenv.md)
- [Install Atri using conda](getting-started/installation/install_with_conda.md)
