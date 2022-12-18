import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [sitemap(), partytown()],
});
