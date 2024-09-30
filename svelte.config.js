// Imports
import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: "404.html"
		})
	},
	onwarn: (warning, handler) => {
        if (warning.code !== "css-unused-selector") handler(warning);
    },
	preprocess: sveltePreprocess()
};

export default config;
