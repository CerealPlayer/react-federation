import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import pkg from "./package.json";
const dependencies = pkg["dependencies"];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-2",
      exposes: {
        "./App": "./src/main.tsx",
      },
      remotes: {
        remote: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: {
        react: {
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          requiredVersion: dependencies["react-dom"],
        },
      },
      filename: "remoteEntry.js",
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 3002,
  },
});
