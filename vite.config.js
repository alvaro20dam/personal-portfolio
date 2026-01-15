import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// 1. Import fileURLToPath
import { fileURLToPath } from "url";

// 2. Recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Now you can use __dirname safely
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
