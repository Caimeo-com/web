import { watch } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const ROOT = import.meta.dir;
const WEB  = join(ROOT, '..');
const DIST = join(WEB, 'dist');
const PORT = parseInt(process.env.PORT || '3000', 10);

// Initial build
console.log('Building...');
execSync(`bun run ${join(ROOT, 'build.js')}`, { stdio: 'inherit', cwd: WEB });

// Serve from dist
const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;

    // Clean URLs: /forseti → /forseti/index.html
    if (!pathname.includes('.')) {
      if (!pathname.endsWith('/')) pathname += '/';
      pathname += 'index.html';
    }

    const filePath = join(DIST, pathname);
    const file = Bun.file(filePath);

    if (await file.exists()) {
      const ext = filePath.split('.').pop();
      const types = {
        html: 'text/html; charset=utf-8',
        css: 'text/css; charset=utf-8',
        js: 'text/javascript; charset=utf-8',
        json: 'application/json',
        xml: 'application/xml',
        txt: 'text/plain',
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        ico: 'image/x-icon',
        woff2: 'font/woff2',
        woff: 'font/woff',
      };
      return new Response(file, {
        headers: { 'Content-Type': types[ext] || 'application/octet-stream' },
      });
    }

    // 404 fallback
    return new Response('Not found', { status: 404 });
  },
});

console.log(`\nDev server running at http://localhost:${PORT}`);
console.log('Watching for changes...\n');

// Watch src for changes and rebuild
let debounce = null;
const srcDir = ROOT;

watch(srcDir, { recursive: true }, (eventType, filename) => {
  if (!filename || filename.includes('node_modules') || filename.startsWith('.')) return;
  if (debounce) clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log(`Changed: ${filename} - rebuilding...`);
    try {
      execSync(`bun run ${join(ROOT, 'build.js')}`, { stdio: 'inherit', cwd: WEB });
      console.log('Rebuild complete.\n');
    } catch (e) {
      console.error('Build error:', e.message);
    }
  }, 150);
});
