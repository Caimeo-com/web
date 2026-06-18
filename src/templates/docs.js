import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import { basename, join, relative } from 'path';
import { Marked } from 'marked';
import { layout } from './layout.js';

const ROOT = join(import.meta.dir, '..');
const DOCS_ROOT = join(ROOT, 'docs');

const PROJECTS = [
  {
    key: 'brainstack',
    name: 'Brainstack',
    summary: 'Shared memory, local capabilities, skills, and private fleet control for agent harnesses.',
    href: '/docs/brainstack/',
  },
  {
    key: 'forseti',
    name: 'Forseti',
    summary: 'Typed intents, policy decisions, human approvals, and evidence bundles for agent actions.',
    href: '/docs/forseti/',
  },
  {
    key: 'tyche',
    name: 'Tyche',
    summary: 'Deterministic scenario packs, replay bundles, and comparison runs for agent behavior.',
    href: '/docs/tyche/',
  },
  {
    key: 'valhalla',
    name: 'Valhalla',
    summary: 'A governed multi-agent delivery room with roles, audits, and convergence criteria.',
    href: '/docs/valhalla/',
  },
];

const docsMarked = new Marked({ gfm: true });

function isSafeDocsUrl(value) {
  if (!value) return false;
  const trimmed = String(value).trim();
  if (trimmed.startsWith('//')) return false;
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) return true;
  try {
    const url = new URL(trimmed, 'https://caimeo.com');
    return ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol);
  } catch {
    return false;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

docsMarked.use({
  renderer: {
    html(token) {
      return escapeHtml(token.raw || token.text || '');
    },
    link(token) {
      const text = escapeHtml(token.text || '');
      if (!isSafeDocsUrl(token.href)) return text;
      const title = token.title ? ` title="${escapeHtml(token.title)}"` : '';
      return `<a href="${escapeHtml(token.href)}"${title}>${text}</a>`;
    },
    image(token) {
      if (!isSafeDocsUrl(token.href)) return escapeHtml(token.text || '');
      const title = token.title ? ` title="${escapeHtml(token.title)}"` : '';
      return `<img src="${escapeHtml(token.href)}" alt="${escapeHtml(token.text || '')}"${title}>`;
    },
  },
});

function parseFrontmatter(source) {
  if (!source.startsWith('---\n')) {
    return { data: {}, body: source };
  }
  const end = source.indexOf('\n---\n', 4);
  if (end === -1) {
    return { data: {}, body: source };
  }
  const raw = source.slice(4, end).split('\n');
  const data = {};
  for (const line of raw) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (/^-?\d+$/.test(value)) {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  }
  return { data, body: source.slice(end + 5).trim() };
}

function collectDocFiles(dir = DOCS_ROOT) {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir).sort();
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      files.push(...collectDocFiles(full));
    } else if (/\.(md|mdx)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

function docUrlFromFile(file) {
  const rel = relative(DOCS_ROOT, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  const invalidPart = rel.split('/').find(part => !/^[a-z0-9-]+$/.test(part));
  if (invalidPart) {
    throw new Error(`Invalid docs filename segment "${invalidPart}" in ${file}. Use lowercase slugs, hyphens, and index.mdx.`);
  }
  const path = rel === 'index'
    ? '/docs/'
    : rel.endsWith('/index')
      ? `/docs/${rel.slice(0, -6)}/`
      : `/docs/${rel}/`;
  return path.replace(/\/+/g, '/');
}

function outputFromUrl(url) {
  return `${url.replace(/^\//, '')}index.html`;
}

function loadDocs() {
  return collectDocFiles().map((file) => {
    const { data, body } = parseFrontmatter(readFileSync(file, 'utf8'));
    const url = docUrlFromFile(file);
    const project = data.project || (url.split('/')[2] || 'overview');
    return {
      file,
      url,
      out: outputFromUrl(url),
      title: data.title || basename(file).replace(/\.(md|mdx)$/, ''),
      description: data.description || '',
      project,
      order: typeof data.order === 'number' ? data.order : 100,
      body,
    };
  }).sort((a, b) => {
    const projectDelta = projectRank(a.project) - projectRank(b.project);
    if (projectDelta) return projectDelta;
    return a.order - b.order || a.title.localeCompare(b.title);
  });
}

function projectRank(project) {
  if (project === 'overview') return -1;
  const index = PROJECTS.findIndex(item => item.key === project);
  return index === -1 ? 99 : index;
}

function docsByProject(docs) {
  const grouped = new Map();
  for (const doc of docs) {
    if (doc.url === '/docs/') continue;
    if (!grouped.has(doc.project)) grouped.set(doc.project, []);
    grouped.get(doc.project).push(doc);
  }
  return grouped;
}

function renderSidebar(docs, currentUrl) {
  const grouped = docsByProject(docs);
  const groups = PROJECTS.map((project) => {
    const items = grouped.get(project.key) || [];
    if (!items.length) return '';
    return `
        <div class="docs-sidebar__group">
          <h2>${escapeHtml(project.name)}</h2>
          ${items.map(item => `<a href="${item.url}"${item.url === currentUrl ? ' aria-current="page"' : ''}>${escapeHtml(item.title)}</a>`).join('\n          ')}
        </div>`;
  }).join('');
  return `
      <aside class="docs-sidebar" aria-label="Documentation sections">
        <a class="docs-sidebar__home" href="/docs/">Docs home</a>
        ${groups}
      </aside>`;
}

function renderProjectCards() {
  return `
      <div class="docs-project-grid">
        ${PROJECTS.map(project => `
        <a class="docs-project-card docs-project-card--${project.key}" href="${project.href}">
          <span>${escapeHtml(project.name)}</span>
          <p>${escapeHtml(project.summary)}</p>
        </a>`).join('\n        ')}
      </div>`;
}

function renderBreadcrumb(doc, project) {
  if (doc.url === '/docs/') return '';
  const projectLabel = project ? project.name : 'Docs';
  return `
          <nav class="docs-breadcrumb" aria-label="Documentation breadcrumb">
            <a href="/docs/">Docs</a>
            <span aria-hidden="true">/</span>
            ${project ? `<a href="${project.href}">${escapeHtml(projectLabel)}</a><span aria-hidden="true">/</span>` : ''}
            <span>${escapeHtml(doc.title)}</span>
          </nav>`;
}

function renderDoc(doc, docs) {
  const isIndex = doc.url === '/docs/';
  const project = PROJECTS.find(item => item.key === doc.project);
  const docsBody = docsMarked.parse(doc.body);
  const pageTitle = isIndex ? 'Caimeo Docs' : `${doc.title} - Caimeo Docs`;
  const body = `
    <section class="docs-hero">
      <div class="container">
        <p class="section-label">${escapeHtml(project ? project.name : 'Caimeo docs')}</p>
        <h1>${escapeHtml(doc.title)}</h1>
        ${doc.description ? `<p>${escapeHtml(doc.description)}</p>` : ''}
      </div>
    </section>

    <section class="docs-layout-section">
      <div class="container docs-layout">
        ${renderSidebar(docs, doc.url)}
        <article class="docs-content">
          ${renderBreadcrumb(doc, project)}
          ${docsBody}
          ${isIndex ? renderProjectCards() : ''}
        </article>
      </div>
    </section>
  `;
  return layout({
    title: pageTitle,
    description: doc.description || 'Caimeo product documentation.',
    path: doc.url,
    accent: doc.project === 'brainstack' ? 'brainstack' : doc.project === 'tyche' ? 'tyche' : doc.project === 'valhalla' ? 'valhalla' : 'forseti',
    body,
  });
}

export function buildDocsPages() {
  const docs = loadDocs();
  return docs.map(doc => ({
    out: doc.out,
    html: renderDoc(doc, docs),
    url: doc.url,
  }));
}
