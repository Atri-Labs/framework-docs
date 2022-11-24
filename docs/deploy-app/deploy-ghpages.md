---
title: Deploy to GitHub Pages
description: Deploy server side generated pages to GitHub
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

GitHub provides a free service to host your static website. Atri framework helps you to use this feature to quickly deploy your website. 

:::info
Each GitHub repository can have only one static website which is deployed by default at `https://<username>.github.io/<repo-name>`. You can configure the settings of your repository to deploy to a custom domain by following the instructions [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). 
:::

Let us now deploy your static site using Atri framework. 

### Step 1: Add your GitHub organization name and repository name

The field `organizationName` is either your GitHub username or your GitHub organization name. The field `projectName` is your repository name.

<Tabs>
<TabItem value="atri_app/atri-server-info.json" label="atri_app/atri-server-info.json" default>

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
	"organizationName": "<your-organization-name>",
	"projectName": "<your-repo-name>"
	// highlight-end
}
```
</TabItem>
</Tabs>

### Step 2: Build pages

:::info
User and organization sites are available at `http(s)://<username>.github.io` or `http(s)://<organization>.github.io`.

Project sites are available at `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`. 
:::

Follow different instructions if you are deploying a user/organization site or a project site. 

<Tabs>
<TabItem value="User/Organization site" label="User / Organization site" default>

```shell
cd project_root
pipenv shell
export MODE = production
atri build ssg
```

</TabItem>
<TabItem value="Project site" label="Project site" default>

```shell
cd project_root
pipenv shell
export MODE=production
ASSET_URL_PREFIX="/<your-repo-name>" atri build ssg
```

</TabItem>
</Tabs>

Providing `ASSET_URL_PREFIX` environment variable changes the `basename` for your website. You don't need to provide this variable if you are deploying a user/organization site. 

### Step 3: Deploy

Next, you can run the following command:

```shell
GIT_USER = <username> atri deploy ssg --gh-pages
```

Once this command is successfully completed, you can go ahead and check the `Actions` tab in GitHub for the status of your deployment. By default, the static pages are deployed using `gh-pages` branch. 

:::info
If you want to deploy using a different branch, you can add `deploymentBranch` field in the `atri_app/atri-server-info.json` file.
:::

On running the above command, GitHub might prompt you to enter your password for your GitHub account. Due to recent changes in GitHub's policy, you actually need to provide a `token` as your password. You can follow instructions provided [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to generate a new token once you are logged into GitHub in your browser.
