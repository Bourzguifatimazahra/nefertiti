import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    tanstackStart({
      router: {
        enableRouteGeneration: true,
      },
    }),
    tailwindcss(),
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    hmr: {
      overlay: false,
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true,
  },

  preview: {
    port: 4173,
  },
});