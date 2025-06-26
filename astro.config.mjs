import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://lunamerino.github.io/aguadoSoluciones',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});