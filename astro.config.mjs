// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // TODO: change if your repo is not named romyr05.github.io (then also set `base`).
  site: "https://romyr05.github.io",
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
