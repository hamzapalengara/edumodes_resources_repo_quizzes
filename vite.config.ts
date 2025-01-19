import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { generateWorksheetThumbnails } from './src/utils/thumbnail-generator'

// Get worksheet ID from environment variable
const WORKSHEET_ID = process.env.WORKSHEET_ID || process.env.VITE_WORKSHEET_ID

if (!WORKSHEET_ID) {
  console.warn('No WORKSHEET_ID provided. Using default worksheet for development.')
}

const worksheetDir = WORKSHEET_ID ? path.resolve(`src/worksheets/${WORKSHEET_ID}`) : null
if (worksheetDir && !fs.existsSync(worksheetDir)) {
  throw new Error(`Worksheet directory not found: ${worksheetDir}`)
}

// Create HTML files plugin
const createHtmlFiles = (): Plugin => {
  return {
    name: 'create-html-files',
    configureServer(server) {
      // Serve HTML files in development
      server.middlewares.use((req, res, next) => {
        if (req.url === '/') {
          res.statusCode = 302;
          res.setHeader('Location', '/worksheet.html');
          res.end();
          return;
        }
        
        const pages = ['worksheet', 'answer_key', 'tips', 'thumbnail'];
        const page = pages.find(p => req.url === `/${p}.html`);
        
        if (page) {
          const titles: Record<string, string> = {
            worksheet: 'Addition Worksheet',
            answer_key: 'Answer Key',
            tips: 'Tips & Guidance',
            thumbnail: 'Worksheet Preview'
          };

          const isThumbail = page === 'thumbnail';
          const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${titles[page]}</title>
    <script type="module">
      import RefreshRuntime from '/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
  </head>
  <body>
    ${isThumbail ? '<div id="thumbnail-content">' : ''}
    <div id="root"></div>
    ${isThumbail ? '</div>' : ''}
    <script>
      window.WORKSHEET_VIEW = '${page}';
    </script>
    <script type="module" src="/src/worksheets/${WORKSHEET_ID || 'grade2_mathematics_addition_beginner'}/entries/index.tsx"></script>
  </body>
</html>`;
          
          res.setHeader('Content-Type', 'text/html');
          res.end(html);
          return;
        }
        
        next();
      });
    },
    generateBundle() {
      // Generate HTML files for production build
      const pages = ['worksheet', 'answer_key', 'tips', 'thumbnail'] as const;
      type Page = typeof pages[number];
      const titles: Record<Page, string> = {
        worksheet: 'Addition Worksheet',
        answer_key: 'Answer Key',
        tips: 'Tips & Guidance',
        thumbnail: 'Worksheet Preview'
      };

      pages.forEach(page => {
        const isThumbail = page === 'thumbnail';
        const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${titles[page]}</title>
    <link rel="stylesheet" href="styles.css">
    <script>
      window.WORKSHEET_VIEW = '${page}';
    </script>
  </head>
  <body>
    ${isThumbail ? '<div id="thumbnail-content">' : ''}
    <div id="root"></div>
    ${isThumbail ? '</div>' : ''}
    <script src="script.js"></script>
  </body>
</html>`;

        this.emitFile({
          type: 'asset',
          fileName: `${page}.html`,
          source: html
        });
      });
    }
  };
};

// Copy additional files after build
const copyFiles = () => ({
  name: 'copy-files',
  closeBundle: () => {
    const srcDir = path.resolve(`src/worksheets/${WORKSHEET_ID}`)
    const destDir = path.resolve(`dist/${WORKSHEET_ID}`)
    
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }

    ;['title.txt', 'description.txt'].forEach(file => {
      const srcFile = path.join(srcDir, file)
      const destFile = path.join(destDir, file)
      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile)
      }
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    createHtmlFiles(),
    copyFiles(),
    {
      name: 'generate-thumbnails',
      closeBundle: async () => {
        if (process.env.NODE_ENV === 'production') {
          try {
            const distDir = path.resolve(__dirname, 'dist')
            await generateWorksheetThumbnails(distDir)
          } catch (error) {
            console.error('Failed to generate thumbnails:', error)
            throw error
          }
        }
      }
    }
  ],
  build: {
    rollupOptions: {
      input: path.resolve(`src/worksheets/${WORKSHEET_ID}/entries/index.tsx`),
      output: {
        dir: `dist/${WORKSHEET_ID}`,
        format: 'iife',
        entryFileNames: 'script.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles.css'
          }
          return 'assets/[name][extname]'
        }
      }
    },
    sourcemap: false,
    emptyOutDir: true,
    cssCodeSplit: false,
    minify: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: ''
})
