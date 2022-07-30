import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      web3: 'web3/dist/web3.min.js',
    },
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
});