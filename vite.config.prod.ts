import { defineConfig } from 'vite'
import { mergeConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import baseConfig from './vite.config.base'
import { WORKSHEET_ID } from './vite.config.base'
import type { Plugin } from 'vite'
import puppeteer from 'puppeteer'

// Validate single worksheet and get its metadata
const validateWorksheet = () => {
  if (!WORKSHEET_ID) {
    throw new Error('WORKSHEET_ID is required for production build. Usage: WORKSHEET_ID=your_worksheet_id npm run build')
  }

  const worksheetDir = path.resolve(process.cwd(), `src/worksheets/${WORKSHEET_ID}`)
  if (!fs.existsSync(worksheetDir)) {
    throw new Error(`Worksheet directory not found: ${worksheetDir}`)
  }

  // Check for required files
  const requiredFiles = [
    'entries/index.tsx',
    'entries/worksheet.tsx',
    'entries/answer-key.tsx',
    'entries/tips.tsx',
    'entries/thumbnail.tsx',
    'title.txt',
    'description.txt'
  ]

  const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(worksheetDir, file)))
  if (missingFiles.length > 0) {
    throw new Error(`Missing required files for worksheet ${WORKSHEET_ID}:\n${missingFiles.join('\n')}`)
  }

  // Parse worksheet metadata from folder name
  const [grade, subject, ...rest] = WORKSHEET_ID.split('_')
  const difficulty = rest.pop() || ''
  const topic = rest.join('_')

  // Read title and description
  const title = fs.readFileSync(path.join(worksheetDir, 'title.txt'), 'utf-8').trim()
  const description = fs.readFileSync(path.join(worksheetDir, 'description.txt'), 'utf-8').trim()

  return {
    id: WORKSHEET_ID,
    title,
    description,
    metadata: {
      grade,
      subject,
      topic,
      difficulty
    }
  }
}

// Create HTML files for this worksheet
const createHtmlFiles = (worksheetInfo: ReturnType<typeof validateWorksheet>): Plugin => {
  return {
    name: 'create-html-files',
    generateBundle() {
      const pages = ['worksheet', 'answer_key', 'tips', 'thumbnail'] as const;
      type Page = typeof pages[number];
      
      // Generate title based on metadata
      const getTitle = (page: Page) => {
        const baseTitle = worksheetInfo.title

        switch (page) {
          case 'worksheet': return baseTitle
          case 'answer_key': return `${baseTitle} - Answer Key`
          case 'tips': return `${baseTitle} - Teaching Tips`
          case 'thumbnail': return `${baseTitle} Preview`
        }
      }

      const timestamp = Date.now();

      pages.forEach(page => {
        const isThumbail = page === 'thumbnail';
        const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${getTitle(page)}</title>
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <link rel="stylesheet" href="style.css?v=${timestamp}">
    <script>
      window.WORKSHEET_VIEW = '${page}';
      window.WORKSHEET_METADATA = ${JSON.stringify(worksheetInfo)};
    </script>
  </head>
  <body>
    ${isThumbail ? '<div id="thumbnail-content">' : ''}
    <div id="root"></div>
    ${isThumbail ? '</div>' : ''}
    <script src="script.js?v=${timestamp}"></script>
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

// Copy metadata files
const copyFiles = (worksheetInfo: ReturnType<typeof validateWorksheet>): Plugin => ({
  name: 'copy-files',
  closeBundle: () => {
    const srcDir = path.resolve(process.cwd(), `src/worksheets/${worksheetInfo.id}`)
    const destDir = path.resolve(process.cwd(), `dist/${worksheetInfo.id}`)
    
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }

    // Copy metadata files
    ;['title.txt', 'description.txt'].forEach(file => {
      const srcFile = path.join(srcDir, file)
      const destFile = path.join(destDir, file)
      fs.copyFileSync(srcFile, destFile)
    })

    // Create build info file
    const buildInfo = {
      ...worksheetInfo,
      buildTime: new Date().toISOString(),
      files: fs.readdirSync(destDir)
    }
    fs.writeFileSync(
      path.join(destDir, 'build-info.json'),
      JSON.stringify(buildInfo, null, 2)
    )

    // Log build summary
    console.log('\nWorksheet build completed successfully! 🎉')
    console.log('\nWorksheet Information:')
    console.log(`Title: ${worksheetInfo.title}`)
    console.log(`ID: ${worksheetInfo.id}`)
    console.log(`Grade: ${worksheetInfo.metadata.grade}`)
    console.log(`Subject: ${worksheetInfo.metadata.subject}`)
    console.log(`Topic: ${worksheetInfo.metadata.topic}`)
    console.log(`Difficulty: ${worksheetInfo.metadata.difficulty}`)
    console.log(`\nOutput directory: dist/${worksheetInfo.id}`)
    console.log('\nGenerated files:')
    fs.readdirSync(destDir).forEach(file => console.log(`- ${file}`))
  }
})

// Generate thumbnail image
const generateThumbnail = (worksheetInfo: ReturnType<typeof validateWorksheet>): Plugin => ({
  name: 'generate-thumbnail',
  closeBundle: async () => {
    const destDir = path.resolve(process.cwd(), `dist/${worksheetInfo.id}`)
    const thumbnailHtml = path.join(destDir, 'thumbnail.html')
    const thumbnailPng = path.join(destDir, 'thumbnail.png')
    
    console.log('\nGenerating thumbnail image...')
    
    let browser;
    try {
      // Launch browser and create screenshot
      browser = await puppeteer.launch()
      const page = await browser.newPage()
      
      // Set viewport size for thumbnail
      await page.setViewport({
        width: 500,
        height: 375,
        deviceScaleFactor: 1
      })
      
      console.log('Loading thumbnail HTML...')
      // Load the thumbnail HTML
      await page.goto(`file://${thumbnailHtml}`)
      
      // Wait for content to load
      await page.waitForSelector('#thumbnail-content')
      
      console.log('Taking screenshot...')
      // Take screenshot
      await page.screenshot({
        path: thumbnailPng,
        type: 'png'
      })
      
      console.log(`Thumbnail generated successfully: ${thumbnailPng}`)
    } catch (error) {
      console.error('Error generating thumbnail:', error)
      throw error
    } finally {
      if (browser) {
        await browser.close()
      }
    }
  }
})

// Validate and get worksheet info
const worksheetInfo = validateWorksheet()

// Production build configuration
export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      rollupOptions: {
        input: path.resolve(process.cwd(), `src/worksheets/${worksheetInfo.id}/entries/index.tsx`),
        output: {
          dir: `dist/${worksheetInfo.id}`,
          format: 'iife',
          entryFileNames: 'script.js',
          chunkFileNames: 'script.js',
          manualChunks: undefined,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'style.css';
            return `assets/[name]-[hash].[ext]`;
          }
        }
      },
      sourcemap: false,
      emptyOutDir: false,
      cssCodeSplit: false,
      minify: true
    },
    plugins: [
      createHtmlFiles(worksheetInfo),
      copyFiles(worksheetInfo),
      generateThumbnail(worksheetInfo)
    ]
  })
) 