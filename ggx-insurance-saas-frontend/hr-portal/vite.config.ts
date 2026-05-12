import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], base: '/ggx-insurance-saas-frontend/hr-portal/', server: { port: 3010, proxy: { '/api': 'http://localhost:8505' } } })
