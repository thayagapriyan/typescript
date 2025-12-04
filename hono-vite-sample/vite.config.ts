import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // Proxy API calls during dev to the Hono server running on port 3000
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
});