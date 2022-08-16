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

You can jump directly to the next step if you want to use heroku to deploy your app.

If you want to build docker image, you must have `docker` installed in your system. If you have a `Dockerfile` ready from previous step, you can run the following command from the root of your project:

```
docker build -t <some_tag> -f <Dockerfile_name> .
```

### Use PaaS like Heroku

#### Heroku

#### Prereqs

-   Docker - If you don't have docker installed, you can install them from [here](https://docs.docker.com/engine/install/). All your application code gets bundled in a docker image that can be deployed easily in all popular PaaS including heroku.
-   Heroku account - Create an account in [Heroku](https://heroku.com).
-   Heroku CLI - It helps you to create and publish docker image to heroku. It can be installed by following the instructions [here](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

In order to deploy, your website, you first need to create a Dockerfile that we have covered in the previous step above. Using this Dockerfile, we can create a docker image and finally we will upload this image to the PaaS like heroku.

#### Log in heroku via command line

Running this command will take you to the browser where you can easily complete the login.

```shell
heroku login
```

Once logged in, run the following:

```shell
heroku container:login
```

#### Create an app instance in heroku

Run the following command from inside the app's root directory. This is a one time step i.e. if you want to update your deployed app, you don't need to repeat this step.

```shell
heroku create
```

#### Create and push docker image

Run the following command from inside the app's root directory. These are also the steps that you need to follow everytime you want to update your app.

```shell
# create and publish the docker image
heroku container:push web
# update the app
heroku container:release web
```

Running above command will give you a link to the address where app is available.

You can learn more by visting heroku documentations.
