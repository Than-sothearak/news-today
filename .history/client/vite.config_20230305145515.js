
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://127.0.0.1:8080',
  },
})
