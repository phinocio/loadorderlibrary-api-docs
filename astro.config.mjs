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
		}),
	],
});
