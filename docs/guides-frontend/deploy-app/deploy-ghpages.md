---
title: Deploy to Github Pages
description: Deploy server side generated pages to GitHub
---

GitHub provides a free service to host your static website. Atri framework helps you to use this feature to quickly deploy this website. Each GitHub repository can have one static website. The website is by default deployed on url `https://<username>.github.io/<repo-name>`. It is easy to deploy your webiste on a custom domain for which you can follow the steps here.

You have to specifiy your GitHub repository details such as organization name in the `atri_app/atri-server-info.json` file.

```json
{
	"port": 4005,
	"pythonPort": 4007,
	"publicDir": "dist/app",
	"pages": {
		"/": {
			"name": "Home"
		}
	},
	"publicUrlAssetMap": {
		"/app-assets": "../assets"
	},
	// highlight-start
	"organizationName": "Atri-Apps",
	"projectName": "personal_blog"
	// highlight-end
}
```

The field `organizationName` is either your GitHub username or your GitHub organization name. The field `projectName` is your repository name.

### Build

First you need to build pages before you can deploy it to GitHub pages. To build the pages you can run the following command:

```shell
ASSET_URL_PREFIX="/<your-repo-name>" atri build ssg
```

Providing `ASSET_URL_PREFIX` environment variable, changes the `basename` for your website. You don't need to provide `ASSET_URL_PREFIX` if you are making your repository name is `<username>.github.io`, in other words, if you are deploying to your GitHub home page, the generated url will not have any basename.

### Deploy

Next, you can run the following command:

```shell
cd project_root

pipenv shell

GIT_USER=<username> atri deploy ssg --gh-pages
```

Once this command is successfully completed, you can go ahead and check the `Actions` tab in GitHub for the status of your deployment. By default, the static pages are deployed using `gh-pages` branch. If you want to deploy using a different branch, you can add `deploymentBranch` field in the `atri_app/atri-server-info.json` file.

On running the above command, Github might prompt you to enter your password for your GitHub account. Due to recent changes in GitHub's policy, you actually need to provide a `token` as your password. You can open this Github link to generate a new token once you are logged into GitHub in your browser.
