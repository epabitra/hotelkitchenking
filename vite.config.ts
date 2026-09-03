import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from a custom domain (hotelkitchenking.epabitra.com) at the
  // root, not from a /hotelkitchenking/ project-page subpath.
  base: '/',
  plugins: [react(), tailwindcss()],
})
