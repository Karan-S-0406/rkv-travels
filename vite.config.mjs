import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      target: "esnext", // Ensures the latest ES features are supported
    },
    optimizeDeps: {
          include: [
        '@emotion/react', 
        '@emotion/styled', 
        '@mui/material/Tooltip'
      ],
      esbuildOptions: {
        target: "esnext", // Ensures the latest ES features are supported during dependency optimization
        supported: {
          "top-level-await": true, // Explicitly enable top-level await
        },
      },
    },
    plugins: [react(), eslint(), svgr({ svgrOptions: { icon: true } })],
  };
});
