import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	test: {
		coverage: {
			reporter: ["clover", "html", "text"],
			reportOnFailure: true,
			skipFull: true,
		},
		environment: "happy-dom",
		globals: true,
		onConsoleLog: () => false,
		outputFile: "coverage/junit.xml",
		reporters: ["default", "junit"],
	},
});
