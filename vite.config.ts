import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => {
  if (command === 'serve') {
    const { default: devConfig } = await import('./vite.config.dev')
    return devConfig
  } else {
    const { default: prodConfig } = await import('./vite.config.prod')
    return prodConfig
  }
})
