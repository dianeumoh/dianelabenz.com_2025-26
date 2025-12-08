import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'selected-works': resolve(__dirname, 'selected-works.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        'compliance-manager': resolve(__dirname, 'compliance-manager.html'),
        'data-security': resolve(__dirname, 'data-security.html'),
        'wellness-dashboard': resolve(__dirname, 'wellness-dashboard.html'),
        authz: resolve(__dirname, 'authz.html'),
        'open-disclosure': resolve(__dirname, 'open-disclosure.html'),
        'wash-day': resolve(__dirname, 'wash-day.html'),
      },
    },
  },
})
