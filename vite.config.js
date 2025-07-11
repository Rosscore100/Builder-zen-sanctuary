import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "esbuild", // Use esbuild instead of terser (no extra dependencies)
  },
  base: "./", // Ensures assets work in any hosting environment
});
