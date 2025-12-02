import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'zustand'],
        },
      },
    },
    // 使用 esbuild 压缩（默认，更快）
    minify: 'esbuild',
    // chunk 大小警告阈值
    chunkSizeWarningLimit: 1000,
  },
})
