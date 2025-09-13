import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  server: {
    host: true,       // allows listening on all local IPs (0.0.0.0)
    port: 5173,       // optional: change port if needed
  }

})
