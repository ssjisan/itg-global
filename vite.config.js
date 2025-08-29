import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  esbuild: {
    loader: "jsx", // 👈 allow JSX inside .js
    include: /src\/.*\.(js|jsx)$/, // 👈 apply to both js & jsx
  },
});
