---
title: Update Atri
slug: /update-atri
---

## Steps

Update atri package using pipenv:

```
cd project_dir

pipenv shell

pipenv update atri
```

Update atri package using conda:

```
cd project_dir

conda activate env

pip install atri -U
```

Currently, the below process is manual, and soon these steps will be automated.

```shell
cd project_dir

rm -rf atri_app

rm controllers/server.py
```

Once the old generated files have been cleared, you can run the following from inside the virtual environment:

```shell
atri start
```

Hit `Publish` when the editor opens in the browser.
