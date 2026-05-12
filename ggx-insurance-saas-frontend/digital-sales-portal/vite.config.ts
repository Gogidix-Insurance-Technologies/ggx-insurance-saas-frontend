import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], base: '/ggx-insurance-saas-frontend/digital-sales-portal/', server: { port: 3011, proxy: { '/api': 'http://localhost:8505' } } })
