/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

// getViteConfig lets tests resolve the same path aliases as the site.
export default getViteConfig({
  test: {
    include: ["src/**/*.test.ts"],
  },
});
