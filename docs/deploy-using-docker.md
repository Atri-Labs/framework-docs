---
title: Deploy using docker
description: Deploy app using docker
slug: guides/deploy-using-docker
---

The `atri` framework is agnostic of the platform you want to use for deployment. However, we suggest few ways to help you deploy your app qucikly with docker.

### Create Dockerfile

You can generate a Dockerfile for your app by running command:

```
atri create dockerfile
```

This will create a file named `Dockerfile` at the root of your project.

If you want the generated `Dockerfile` to be named differently, you can use the command as shown below:

```
atri create dockerfile --file <filename>
```

This will again create the file with the provided `filename` at the root of the project.

:::info
You don't need to generate `Dockerfile` everytime. Consider this an one time step.
:::

You can either create your own docker image or rely on some PaaS to handle everything from you. We will cover both the ways below.

### Create docker image

If you want to build docker image, you must have `docker` installed in your system. If you have a `Dockerfile` ready from previous step, you can run the following command from the root of your project:

```
docker build -t <some_tag> -f <Dockerfile_name> .
```

### Use PaaS like Heroku
