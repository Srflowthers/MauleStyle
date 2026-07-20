import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base helps GitHub Pages avoid 404s when assets are referenced relatively.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
