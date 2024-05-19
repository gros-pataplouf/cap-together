import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    // setupFiles: ['./tests/setup.ts'],
    // testMatch: ['./tests/**/*.test.tsx'],
    globals: true
    },
  build: {
    outDir: '../capsite/static',
    assetsDir: '',
    manifest: true,
    emptyOutDir: false,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: './src/main.jsx',
        animations: './src/animations.js',
        styles: './src/index.css' 
      },
      output: {
        entryFileNames: `capsite/[name].js`,
        chunkFileNames: `capsite/[name].js`,
        assetFileNames: `capsite/[name].[ext]`
      },
    },
  },
})
