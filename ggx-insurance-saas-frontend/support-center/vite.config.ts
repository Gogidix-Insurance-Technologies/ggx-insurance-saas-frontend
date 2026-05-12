import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], base: '/ggx-insurance-saas-frontend/support-center/', server: { port: 3013, proxy: { '/api': 'http://localhost:8505' } } })
