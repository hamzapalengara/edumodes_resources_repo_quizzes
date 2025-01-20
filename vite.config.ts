import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import devConfig from './vite.config.dev'
import prodConfig from './vite.config.prod'

// Get worksheet ID from environment variable
const WORKSHEET_ID = process.env.WORKSHEET_ID || process.env.VITE_WORKSHEET_ID

// Validate worksheet directory if ID is provided
const worksheetDir = WORKSHEET_ID ? path.resolve(`src/worksheets/${WORKSHEET_ID}`) : null
if (worksheetDir && !fs.existsSync(worksheetDir)) {
  throw new Error(`Worksheet directory not found: ${worksheetDir}`)
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return devConfig
  } else {
    return prodConfig
  }
})
