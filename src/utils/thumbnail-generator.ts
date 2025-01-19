import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const THUMBNAIL_SPECS = {
  dimensions: {
    width: 500,
    height: 375,
    innerWidth: 420,
    innerHeight: 240
  },
  format: 'png',
  quality: 90,
  deviceScaleFactor: 2 // For retina quality
};

export async function generateThumbnail(htmlPath: string, outputPath: string): Promise<void> {
  let browser = null;
  try {
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({
      width: THUMBNAIL_SPECS.dimensions.width,
      height: THUMBNAIL_SPECS.dimensions.height,
      deviceScaleFactor: THUMBNAIL_SPECS.deviceScaleFactor
    });

    // Load HTML file
    const fileUrl = `file://${path.resolve(htmlPath)}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // Wait for content and any animations to complete
    await page.waitForSelector('#thumbnail-content', { timeout: 5000 });
    // Use setTimeout instead of waitForTimeout
    await new Promise(resolve => setTimeout(resolve, 500));

    // Take screenshot
    await page.screenshot({
      path: outputPath,
      type: 'png',
      omitBackground: false,
      clip: {
        x: 0,
        y: 0,
        width: THUMBNAIL_SPECS.dimensions.width,
        height: THUMBNAIL_SPECS.dimensions.height
      }
    });

    console.log(`✅ Generated thumbnail: ${outputPath}`);
  } catch (error: unknown) {
    console.error('❌ Thumbnail generation failed:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate thumbnail: ${error.message}`);
    }
    throw new Error('Failed to generate thumbnail: Unknown error');
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export async function generateWorksheetThumbnails(distDir: string): Promise<void> {
  try {
    // Find all worksheet directories
    const worksheetDirs = fs.readdirSync(distDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => path.join(distDir, dirent.name));

    // Generate thumbnails for each worksheet
    for (const worksheetDir of worksheetDirs) {
      const htmlPath = path.join(worksheetDir, 'thumbnail.html');
      const pngPath = path.join(worksheetDir, 'thumbnail.png');

      if (fs.existsSync(htmlPath)) {
        await generateThumbnail(htmlPath, pngPath);
      } else {
        console.warn(`⚠️ No thumbnail.html found in ${worksheetDir}`);
      }
    }
  } catch (error: unknown) {
    console.error('❌ Failed to generate worksheet thumbnails:', error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate worksheet thumbnails: Unknown error');
  }
} 