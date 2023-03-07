
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1`":"http://localhost:8080/",
    },
  },
})
