import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default defineConfig(
  { ignores: ["dist/", ".astro/", "node_modules/"] },

  js.configs.recommended,
  tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    files: ["src/**/*.{astro,js,ts}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["*.{js,mjs,ts}"],
    languageOptions: { globals: globals.node },
  },

  // Must be last: turns off rules that conflict with Prettier.
  prettier,
);
