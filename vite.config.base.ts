import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Get worksheet ID from environment variable
export const WORKSHEET_ID = process.env.WORKSHEET_ID || process.env.VITE_WORKSHEET_ID

if (!WORKSHEET_ID) {
  console.info('No WORKSHEET_ID provided. Running in dashboard mode.')
}

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    {
      name: 'html-transform',
      transformIndexHtml(html: string) {
        return html.replace(
          '</head>',
          `
          <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
          <meta http-equiv="Pragma" content="no-cache">
          <meta http-equiv="Expires" content="0">
          </head>
          `
        );
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: ''
}) 