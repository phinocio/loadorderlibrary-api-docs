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
						{ label: "Lists Overview", link: "/lists/overview/" },
						{ label: "View Lists", link: "/lists/view/" },
						{ label: "Create Lists", link: "/lists/create/" },
						{ label: "Update Lists", link: "/lists/update/" },
						{ label: "Delete Lists", link: "/lists/delete/" },
						{ label: "Compare Lists", link: "/lists/compare/" },
					],
				},
			],
		}),
	],
});
