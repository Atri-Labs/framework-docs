const sidebars = {
	docs: [
		"intro",
		{
			type: "category",
			label: "Getting Started",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Installation",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: [
						"video-guide",
						"install_prereqs",
						"install_with_pipenv",
						"install_with_conda",
					],
				},
				"start-engine",
				"create-app",
			],
		},
		{
			type: "category",
			label: "Component Reference",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: ["comp-reference/charts/bar-chart"],
		},
		{
			type: "category",
			label: "How-to guides",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Page",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"add-page",
						"use-existing-page",
						"edit-page-details",
						"delete-page",
					],
				},
				{
					type: "category",
					label: "Component",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: ["add-component"],
				},
				{
					type: "category",
					label: "Template",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: ["add-template", "use-template"],
				},
				{
					type: "category",
					label: "Asset",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: ["add-bkg-img", "add-static-asset"],
				},
				{
					type: "category",
					label: "Deploy app",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: ["deploy-using-docker", "deploy-manual"],
				},
				"guide-publish",
				"guide-breakpoint",
			],
		},
		{
			type: "category",
			label: "Concepts of visual editor",
			link: {
				type: "generated-index",
				description: "Add a labeled picture with names of all icons.",
			},
			collapsed: false,
			items: [
				"page-manager",
				"component-manager",
				"template-manager",
				"breakpoints",
				"publish-app",
				"custom-panel",
				"actions-panel",
			],
		},
		{
			type: "category",
			label: "Concepts of Python backend",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: ["api-structure", "intellisense"],
		},
	],
};
module.exports = sidebars;
