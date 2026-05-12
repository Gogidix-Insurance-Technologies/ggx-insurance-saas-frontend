import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ggx-insurance-saas-frontend/admin-console/',
  server: {
    port: 3001,
    proxy: {
      '/api': 'http://localhost:8505'
    }
  }
})
