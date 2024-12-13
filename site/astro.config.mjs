import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://www.westtownwebsites.com/",
  integrations: [sitemap(),react()],
  output: "static",
  adapter: vercel(),
});
