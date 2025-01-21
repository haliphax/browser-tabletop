import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		emptyOutDir: true,
		outDir: "../../dist",
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, ".."),
		},
	},
});
