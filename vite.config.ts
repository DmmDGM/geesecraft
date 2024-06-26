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
		host: process.env.HOST || "localhost",
		port: +process.env.PORT || 3000,
		strictPort: true
	}
});
