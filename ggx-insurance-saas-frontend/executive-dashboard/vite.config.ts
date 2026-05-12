import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ggx-insurance-saas-frontend/executive-dashboard/',
  server: { port: 3003, proxy: { '/api': 'http://localhost:8505' } }
})
