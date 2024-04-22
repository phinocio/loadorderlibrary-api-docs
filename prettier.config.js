/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "es5",
	useTabs: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: [".*", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
	],
};
