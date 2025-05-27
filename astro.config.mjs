import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone', host: '0.0.0.0', port: process.env.PORT || 4321 }),
  integrations: [tailwind()],
});
