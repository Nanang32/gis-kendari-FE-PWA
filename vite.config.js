import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from 'vite-plugin-pwa'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  VitePWA()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@libs": path.resolve(__dirname, "./src/libs"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@layouts": path.resolve(__dirname, "./src/layouts")
    },
  },
});
