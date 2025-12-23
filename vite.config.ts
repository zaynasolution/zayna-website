import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD
=======
import { visualizer } from 'rollup-plugin-visualizer'
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      compressionOptions: { level: 11 },
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
<<<<<<< HEAD
=======
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'dist/stats.html',
    }),
>>>>>>> f5e6d0fc18cdbec6d14ab87a8190ce7bb081bfe8
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'react'
          if (id.includes('node_modules/framer-motion')) return 'motion'
        },
      },
    },
  },
})
