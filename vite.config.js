import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0", // Mengikat ke semua alamat IP lokal
    port: 5173, // Port yang Anda inginkan
    strictPort: true, // Menjaga agar port tetap konsisten
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      bootstrap: fileURLToPath(
        new URL("./node_modules/bootstrap", import.meta.url)
      ),
    },
  },
});
