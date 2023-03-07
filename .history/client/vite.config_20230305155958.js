import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  proxy: {
    // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
    '/api/v1': 'http://localhost:8080',
    // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
   
}});
