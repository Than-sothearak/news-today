import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
    square: 'square',
    roman: 'upper-roman',
  }
  
});
