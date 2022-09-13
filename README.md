# About the documentation

This is the home to the documentation of Atri engine and its surrounding ecosystem. This includes the following :

- Tutorials: A walkthrough of beginner and advanced examples of websites and apps that can be created using Atri framework
- Guides: Practical steps to help users accomplish specific tasks in frontend or backend development or deployment. We also cover utility functions that make backend development through Python easy. 
- Reference: API reference of frontend components available in visual editor and how to interact with them from backend
- Concepts: Concepts of visual editor and backend 

## How to contribute?

1. Create a [fork of this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository). 

2. [Clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#cloning-a-fork) your fork. 

```shell
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/framework-docs.git
```

3. Configure the remotes. 

```shell
# Navigate to the newly cloned directory
cd framework-docs

# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/Atri-Labs/framework-docs.git
```

4. Install `yarn`. 
```shell
$ yarn
```

5. Start local development. 

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

6. Build the site

Before opening a Pull Request (PR), build the site to ensure there are no issues in your code. 

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

7. Open a [Pull Request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) with clear title and description.

## References
- This documentation follows [Diátaxis framework for technical writing](https://diataxis.fr/). 
- This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.