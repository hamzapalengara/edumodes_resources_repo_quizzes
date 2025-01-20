import { defineConfig } from 'vite'
import { mergeConfig } from 'vite'
import type { ViteDevServer, Connect } from 'vite'
import type { ServerResponse } from 'http'
import baseConfig from './vite.config.base'
import { WORKSHEET_ID } from './vite.config.base'
import path from 'path'
import fs from 'fs'
import chokidar from 'chokidar'

export default mergeConfig(
  baseConfig,
  defineConfig({
    server: {
      port: 5173,
      hmr: true,
      watch: {
        // Watch for changes in the worksheets directory
        ignored: ['!**/src/worksheets/**']
      }
    },
    plugins: [
      {
        name: 'configure-server',
        configureServer(server: ViteDevServer) {
          // Watch for new worksheet folders
          const worksheetsDir = path.resolve(process.cwd(), 'src/worksheets')
          const watcher = chokidar.watch(worksheetsDir, {
            ignored: /(^|[\/\\])\../, // ignore dotfiles
            persistent: true,
            depth: 1 // Only watch immediate subdirectories
          })

          // When a new worksheet folder is added
          watcher.on('addDir', (dirPath) => {
            if (dirPath !== worksheetsDir) {
              // Invalidate module cache for the dashboard
              const moduleId = path.resolve(process.cwd(), 'src/main.tsx')
              const module = server.moduleGraph.getModuleById(moduleId)
              if (module) {
                server.moduleGraph.invalidateModule(module)
              }
              // Trigger HMR update
              server.ws.send({
                type: 'full-reload'
              })
            }
          })

          // Development server middleware
          server.middlewares.use((req: Connect.IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
            // If no worksheet ID is provided, serve the dashboard
            if (!WORKSHEET_ID) {
              if (req.url === '/') {
                const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Worksheet Dashboard</title>
    <script type="module">
      import RefreshRuntime from '/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
                res.setHeader('Content-Type', 'text/html');
                res.end(html);
                return;
              }
              next();
              return;
            }

            // Handle worksheet-specific routes when WORKSHEET_ID is provided
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
                worksheet: WORKSHEET_ID?.includes('addition') ? 'Addition Worksheet' : 'Color Exploration Worksheet',
                answer_key: 'Answer Key',
                tips: 'Tips & Guidance',
                thumbnail: 'Worksheet Preview'
              };

              const isThumbail = page === 'thumbnail';
              const entryFile = page === 'answer_key' ? 'answer-key' : page;
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
    <script>
      window.WORKSHEET_VIEW = '${page}';
    </script>
  </head>
  <body>
    ${isThumbail ? '<div id="thumbnail-content">' : ''}
    <div id="root"></div>
    ${isThumbail ? '</div>' : ''}
    <script type="module" src="src/worksheets/${WORKSHEET_ID}/entries/${entryFile}.tsx"></script>
  </body>
</html>`;
              
              res.setHeader('Content-Type', 'text/html');
              res.end(html);
              return;
            }
            
            next();
          });
        }
      }
    ],
    build: {
      sourcemap: true
    }
  })
) 