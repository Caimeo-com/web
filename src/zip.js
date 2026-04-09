import { execSync } from 'child_process';
import { join } from 'path';

const WEB = join(import.meta.dir, '..');
const OUT = join(WEB, 'caimeo-web.zip');

// Zip the web directory excluding:
// - dist/ (build output)
// - node_modules/
// - .cache, .DS_Store
// - public/ images (visual assets)
// - the zip file itself
// - bun.lockb
const excludes = [
  'dist/*',
  'node_modules/*',
  '.cache/*',
  '*.DS_Store',
  'public/images/*',
  'public/*.png',
  'public/*.jpg',
  'public/*.jpeg',
  'public/*.gif',
  'public/*.svg',
  'public/*.webp',
  'public/*.ico',
  'public/*.avif',
  'caimeo-web.zip',
  'bun.lockb',
].map(p => `-x "${p}"`).join(' ');

try {
  execSync(`cd "${WEB}" && zip -r "${OUT}" . ${excludes}`, { stdio: 'inherit' });
  console.log(`\nZipped → ${OUT}`);
} catch (e) {
  console.error('Zip failed:', e.message);
  process.exit(1);
}
