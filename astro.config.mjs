// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://veterans-labs.github.io/Veterans-Landing/',
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
        defaultLocale: 'en',
        locales: ['es', 'en', 'hi', 'zh'],
        routing: {
            prefixDefaultLocale: true,
        }
    },
});