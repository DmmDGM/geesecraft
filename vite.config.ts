// Imports
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// Exports
export default defineConfig({
	plugins: [
		sveltekit(),
		enhancedImages()
	],
	server: {
		host: "localhost",
		port: 3000,
		strictPort: true
	}
});
