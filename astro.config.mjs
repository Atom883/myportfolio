// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Atom883.github.io', // ここ
  base: '/myportfolio/',   // ここ
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
