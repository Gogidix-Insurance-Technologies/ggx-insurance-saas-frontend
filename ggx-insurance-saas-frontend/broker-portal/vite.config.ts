import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], base: '/ggx-insurance-saas-frontend/broker-portal/', server: { port: 3004, proxy: { '/api': 'http://localhost:8505' } } })
