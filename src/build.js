import { mkdirSync, cpSync, writeFileSync, existsSync, rmSync, readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { buildDocsPages } from './templates/docs.js';

const ROOT = import.meta.dir;
const WEB  = join(ROOT, '..');
const DIST = join(WEB, 'dist');

// Clean & create dist
if (existsSync(DIST)) {
  rmSync(DIST, { recursive: true, force: true });
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
  { module: './templates/brainstack.js', out: 'brainstack/index.html' },
];
const docsPages = buildDocsPages();

for (const page of pages) {
  const mod = await import(page.module);
  const html = mod.render();
  const outPath = join(DIST, page.out);
  mkdirSync(join(outPath, '..'), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');
  console.log(`  ✓ ${page.out}`);
}

for (const page of docsPages) {
  const outPath = join(DIST, page.out);
  mkdirSync(join(outPath, '..'), { recursive: true });
  writeFileSync(outPath, page.html, 'utf-8');
  console.log(`  ✓ ${page.out}`);
}

validateGeneratedAssetReferences();

// Generate sitemap.xml
const baseUrl = 'https://caimeo.com';
const urls = ['/', '/forseti/', '/tyche/', '/brainstack/', ...docsPages.map(page => page.url)];
const escapeXml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${escapeXml(`${baseUrl}${u}`)}</loc></url>`).join('\n')}
</urlset>`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf-8');
console.log('  ✓ sitemap.xml');

// Generate robots.txt
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`, 'utf-8');
console.log('  ✓ robots.txt');

console.log('\nBuild complete → dist/');

function validateGeneratedAssetReferences() {
  const htmlFiles = collectFiles(DIST).filter(file => file.endsWith('.html'));
  const missing = [];
  const assetPattern = /\b(?:src|href|poster)=["'](\/[^"'?#]+\.(?:css|gif|ico|jpeg|jpg|js|json|mp4|png|svg|txt|webmanifest|webm|webp|woff|woff2|xml))[^"']*["']/gi;
  const srcsetPattern = /\bsrcset=["']([^"']+)["']/gi;

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    collectMatches(html, assetPattern, 1, ref => {
      if (!existsSync(join(DIST, decodeAssetPath(ref)))) missing.push({ file, ref });
    });
    collectMatches(html, srcsetPattern, 1, value => {
      for (const ref of parseSrcsetRefs(value)) {
        if (ref.startsWith('/') && !existsSync(join(DIST, decodeAssetPath(ref)))) {
          missing.push({ file, ref });
        }
      }
    });
  }

  if (missing.length) {
    const details = missing
      .map(item => `  - ${item.ref} referenced by ${item.file.replace(`${DIST}/`, '')}`)
      .join('\n');
    throw new Error(`Generated HTML references missing local assets:\n${details}`);
  }
}

function collectFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      files.push(...collectFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function collectMatches(source, pattern, group, callback) {
  pattern.lastIndex = 0;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    callback(match[group]);
  }
}

function decodeAssetPath(ref) {
  return decodeURIComponent(ref.replace(/^\//, ''));
}

function parseSrcsetRefs(value) {
  return value
    .split(',')
    .map(part => part.trim().split(/\s+/)[0])
    .filter(Boolean);
}
