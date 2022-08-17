---
title: Deploy manually
description: Deploy app manually
---

Running you application involves two steps - starting up the python server and starting up the Node server. Make sure that you have published the app from the visual editor as discussed here [Publish App](/concepts-visual-editor/publish). To run it on your system you must have `python` and `NodeJS 16+` installed.

### Run python server

Change directory into the app's root directory. An app's root directory is the directory where you `atri.app.json` file. Also, make sure that the python virtual environment is activated.

```
python -m controllers.server serve
```

### Run NodeJS server

Change directory into `<app_root>/atri_app`. Run the following command:

```
yarn run server
```
