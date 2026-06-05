import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://karry-z.github.io",
  output: "static",
  devToolbar: {
    enabled: false
  },
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false
    }
  }
});
