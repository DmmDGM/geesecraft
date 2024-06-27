// Imports
import adapter from "@sveltejs/adapter-node";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	onwarn: (warning, handler) => {
        if (warning.code !== "css-unused-selector") handler(warning);
    },
	preprocess: sveltePreprocess()
};

export default config;
