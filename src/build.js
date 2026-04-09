import { mkdirSync, cpSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = import.meta.dir;
const WEB  = join(ROOT, '..');
const DIST = join(WEB, 'dist');

// Clean & create dist
if (existsSync(DIST)) {
  const { execSync } = await import('child_process');
  execSync(`rm -rf ${DIST}`);
}
mkdirSync(DIST, { recursive: true });

// Copy static assets
mkdirSync(join(DIST, 'styles'), { recursive: true });
mkdirSync(join(DIST, 'scripts'), { recursive: true });

cpSync(join(ROOT, 'styles', 'main.css'), join(DIST, 'styles', 'main.css'));
cpSync(join(ROOT, 'scripts', 'main.js'), join(DIST, 'scripts', 'main.js'));

// Copy public dir if exists
const publicDir = join(WEB, 'public');
if (existsSync(publicDir)) {
  cpSync(publicDir, DIST, { recursive: true });
}

// Build pages
const pages = [
  { module: './templates/index.js', out: 'index.html' },
  { module: './templates/forseti.js', out: 'forseti/index.html' },
  { module: './templates/tyche.js', out: 'tyche/index.html' },
];

for (const page of pages) {
  const mod = await import(page.module);
  const html = mod.render();
  const outPath = join(DIST, page.out);
  mkdirSync(join(outPath, '..'), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  console.log(`  ✓ ${page.out}`);
}

// Generate sitemap.xml
const baseUrl = 'https://caimeo.com';
const urls = ['/', '/forseti/', '/tyche/'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${baseUrl}${u}</loc></url>`).join('\n')}
</urlset>`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');
console.log('  ✓ sitemap.xml');

// Generate robots.txt
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`, 'utf-8');
console.log('  ✓ robots.txt');

console.log('\nBuild complete → dist/');
