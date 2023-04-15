/// <reference types="Vite/client" />

import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  },
  build: {
    outDir: '../dist'
  }
});
