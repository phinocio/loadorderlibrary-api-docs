import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.loadorderlibrary.com",
	integrations: [
		starlight({
			title: "API Docs",
			logo: {
				src: "./src/assets/logo.svg",
			},
			social: {
				github: "https://github.com/withastro/starlight",
				twitter: "https://bsky.app/profile/phinoc.io",
			},
			sidebar: [
				{ label: "Introduction", link: "/" },
				{
					label: "Basics",
					items: [
						{ label: "General Usage", link: "/basics/general-usage/" },
						{ label: "Authentication", link: "/basics/authentication/" },
						{ label: "Error Codes", link: "/basics/error-codes/" },
					],
				},
				{
					label: "Lists",
					items: [
						{ label: "Overview", link: "/lists/overview/" },
						{ label: "Creating", link: "/lists/create/" },
						{ label: "Viewing", link: "/lists/view/" },
						{ label: "Updating", link: "/lists/update/" },
						{ label: "Deleting", link: "/lists/delete/" },
						{ label: "Comparing", link: "/lists/compare/" },
					],
				},
			],
		}),
	],
});
