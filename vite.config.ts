
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get the base path from environment variable or use the default for GitHub Pages
  const baseUrl = process.env.BASE_URL || "/";
  
  return {
    base: baseUrl, // Use the correct base path for GitHub Pages
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
    ],
    build: {
      outDir: "dist",
      assetsDir: "assets",
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
