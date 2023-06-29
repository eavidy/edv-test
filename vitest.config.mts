import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        watch: false,
        exclude: ["**/dist/**", "**/node_modules/**", "out"],
    },
});
