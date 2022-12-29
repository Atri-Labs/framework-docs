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
						"getting-started/installation/video-guide",
						"getting-started/installation/install_prereqs",
						"getting-started/installation/install_with_pipenv",
						"getting-started/installation/install_with_conda",
					],
				},
				"getting-started/create-app",
			],
		},
		{
			type: "category",
			label: "Troubleshooting",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				"troubleshoot/prereq_error",
				"troubleshoot/installation_error",
				"troubleshoot/start_error",
			],
		},
		{
			type: "category",
			label: "Existing Project",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"existing-project/dev-flow-existing-proj",
				"existing-project/update-atri",
			],
		},
		{
			type: "category",
			label: "Deploy app",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				"deploy-app/deploy-using-docker",
				"deploy-app/deploy-manual",
				"deploy-app/deploy-ghpages",
			],
		},
		{
			type: "category",
			label: "Component Reference",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Basics",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: ["comp-reference/basics/upload", "comp-reference/basics/dropdown"],
				},
				{
					type: "category",
					label: "Data",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: [
						"comp-reference/charts/area-chart",
						"comp-reference/charts/bar-chart",
						"comp-reference/charts/line-chart",
						"comp-reference/charts/scatter-chart",
						"comp-reference/charts/histogram-chart",
						"comp-reference/charts/pie-chart",
						"comp-reference/charts/candlestick-chart",
						"comp-reference/data/table",
					],
				},
			],
		},
		{
			type: "category",
			label: "Frontend guides",
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
						"guides-frontend/page/add-page",
						"guides-frontend/page/edit-page-details",
						"guides-frontend/page/delete-page",
					],
				},
				{
					type: "category",
					label: "Component",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: ["guides-frontend/component/add-component"],
				},
				{
					type: "category",
					label: "Template",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"guides-frontend/template/add-template",
						"guides-frontend/template/use-template",
						"guides-frontend/template/responsive-navbar-example",
					],
				},
				{
					type: "category",
					label: "Asset",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						"guides-frontend/asset/add-bkg-img",
						"guides-frontend/asset/add-static-asset",
						"guides-frontend/asset/add-font",
					],
				},
				"guides-frontend/guide-publish",
			],
		},
		{
			type: "category",
			label: "Backend guides",
			link: {
				type: "generated-index",
			},
			collapsed: false,
			items: [
				"guides-backend/navigate",
				"guides-backend/send-image-from-backend",
			],
		},
		{
			type: "category",
			label: "Backend utilities",
			link: {
				type: "generated-index",
				description:
					"Utility functions to make backend development easy",
			},
			collapsed: false,
			items: [
				{
					type: "category",
					label: "Chart",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: [
						"utilities/chart-data-utils/draw-chart",
						"utilities/chart-data-utils/parse-charts-data"
					],
				},
				{
					type: "category",
					label: "Image",
					link: {
						type: "generated-index",
					},
					collapsed: false,
					items: [
						"utilities/image-utils/create-media-response",
						"utilities/image-utils/parse-uploaded-file",
						"utilities/image-utils/change-background",
						"utilities/image-utils/remove-background",
					],
				},
			],
		},
		{
			type: "category",
			label: "Concepts of visual editor",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"concepts-visual-editor/page-manager",
				"concepts-visual-editor/component-manager",
				"concepts-visual-editor/template-manager",
				"concepts-visual-editor/breakpoints",
				"concepts-visual-editor/publish-app",
				"concepts-visual-editor/custom-panel",
				"concepts-visual-editor/actions-panel",
			],
		},
		{
			type: "category",
			label: "Concepts of Python backend",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				"concepts-backend/api-structure",
				"concepts-backend/intellisense",
			],
		},
	],
	tutorials: [{type: 'autogenerated', dirName: 'tutorials'}],  // foldername
};
module.exports = sidebars;
