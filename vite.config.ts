import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { cpSync, existsSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    // Copy content directory to public on build
    {
      name: 'copy-content',
      apply: 'build',
      generateBundle() {
        const sourceDir = path.join(__dirname, 'content')
        const destDir = path.join(__dirname, 'dist', 'content')
        
        if (existsSync(sourceDir)) {
          cpSync(sourceDir, destDir, { recursive: true })
          console.log('✓ Content files copied to dist')
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: 'public',
})
