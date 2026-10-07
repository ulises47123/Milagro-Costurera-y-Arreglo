import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Para deploy en GitHub Pages:
  base: '/Milagro-Costurera-y-Arreglo/',
  vite: {
    plugins: [tailwindcss()],
  },
});
