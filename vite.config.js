import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        leistungen: resolve(__dirname, "leistungen/index.html"),
        ueberUns: resolve(__dirname, "ueber-uns/index.html"),
        team: resolve(__dirname, "team/index.html"),
        kontakt: resolve(__dirname, "kontakt/index.html")
      }
    }
  }
});
