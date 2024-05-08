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
						{ label: "Creating a List", link: "/lists/create/" },
						{ label: "Viewing Lists", link: "/lists/view/" },
						{ label: "Updating List", link: "/lists/update/" },
						{ label: "Deleting a List", link: "/lists/delete/" },
						{ label: "Comparing Lists", link: "/lists/compare/" },
					],
				},
				{
					label: "Games",
					items: [{ label: "Viewing Games", link: "/games/view" }],
				},
				{
					label: "Users",
					items: [
						{ label: "Viewing User Info", link: "/users/view" },
						{ label: "Managing API Tokens", link: "/users/tokens" },
					],
				},
			],
		}),
	],
});
