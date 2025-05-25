import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';


export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
    session: true,  // habilita sesiones en el adaptador
  }),
  experimental: {
    session: true, // habilita la feature experimental de sesiones
  },
  integrations: [tailwind()],
});