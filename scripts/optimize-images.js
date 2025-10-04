import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync, statSync, existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get input directory from command line or default to assets
const inputArg = process.argv[2] || 'assets';
const inputDir = join(__dirname, `../src/assets/${inputArg}`);
const outputDir = join(__dirname, `../src/assets/${inputArg}/optimized`);

// Create optimized directory if it doesn't exist
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = statSync(inputPath);
    const inputSizeKB = Math.round(stats.size / 1024);
    
    await sharp(inputPath)
      .resize(1200, 800, { // Max dimensions for web
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ 
        quality: 75, // Good balance of quality/size
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const outputStats = statSync(outputPath);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const savings = Math.round(((inputSizeKB - outputSizeKB) / inputSizeKB) * 100);
    
    console.log(`✅ ${inputPath.split('/').pop()}: ${inputSizeKB}KB → ${outputSizeKB}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🖼️  Starting image optimization...\n');
  
  const files = readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(file)
  );
  
  for (const file of files) {
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file.replace(/\.(jpe?g|png)$/i, '.jpg'));
    
    await optimizeImage(inputPath, outputPath);
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log('📁 Optimized images saved to: src/assets/optimized/');
  console.log('💡 Update your imports to use the optimized versions');
}

optimizeAllImages().catch(console.error);