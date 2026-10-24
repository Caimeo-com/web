import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import TurndownService from 'turndown';

export function buildDiscovery(dist, pages) {
  const converter = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });
  converter.remove(['script', 'style', 'svg']);
  converter.addRule('absoluteLinks', { filter: 'a', replacement: (text, node) => `[${text}](${new URL(node.getAttribute('href'), 'https://caimeo.com/')})` });
  const entries = [];
  for (const page of pages) {
    const html = readFileSync(join(dist, page.out), 'utf8');
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
    if (!main) throw new Error(`Missing public content: ${page.out}`);
    const url = '/' + page.out.replace(/index\.html$/, '');
    const markdown = page.out.replace(/\.html$/, '.md');
    writeFileSync(join(dist, markdown), converter.turndown(main) + '\n');
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1] || url;
    entries.push(`- [${title}](https://caimeo.com/${markdown})`);
  }
  writeFileSync(join(dist, 'llms.txt'), '# Caimeo\n\nPublic product pages and documentation. Markdown is generated from the same visible HTML.\n\n' + entries.join('\n') + '\n- [Idea Explorer: ideas, artwork, plans and API](https://caimeo.com/ideas/index.md)\n- [Idea Explorer agent guide](https://caimeo.com/ideas/.well-known/agent-skills/explore-ideas/SKILL.md)\n');
  // Restrict function invocations to HTML negotiation and small discovery documents.
  writeFileSync(join(dist, '_routes.json'), JSON.stringify({version: 1, include: ['/', '/forseti/*', '/tyche/*', '/brainstack/*', '/docs/*', '/index.md', '/llms.txt', '/.well-known/api-catalog', '/.well-known/agent-skills/index.json'], exclude: ['/product/*', '/styles/*', '/scripts/*', '/carousels/*'] }));
  writeFileSync(join(dist, '404.html'), '<!doctype html><html lang="en"><meta charset="utf-8"><title>Not found — Caimeo</title><h1>Page not found</h1><a href="/">Caimeo home</a></html>');
}
