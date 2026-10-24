const origin = 'https://caimeo.com';
const aliases = {
  '/.well-known/api-catalog': '/ideas/.well-known/api-catalog',
  '/.well-known/agent-skills/index.json': '/ideas/.well-known/agent-skills/index.json',
};
export function prefersMarkdown(accept = '') {
  const ranges = accept.toLowerCase().split(',').map(item => {
    const [type, ...params] = item.trim().split(';');
    const raw = params.find(p=>p.trim().startsWith('q='))?.trim().slice(2);
    const q = raw === undefined ? 1 : Number(raw);
    return {type: type.trim(), q: raw !== '' && Number.isFinite(q) && q >= 0 && q <= 1 ? q : 0};
  });
  const md = Math.max(0, ...ranges.filter(r=>r.type==='text/markdown').map(r=>r.q));
  const html = ['text/html','text/*','*/*'].map(t=>ranges.filter(r=>r.type===t)).find(r=>r.length) || [];
  return md > 0 && md >= Math.max(0,...html.map(r=>r.q));
}
export async function onRequest(context) {
  const { request } = context;
  if (!['GET','HEAD'].includes(request.method)) return context.next();
  const url = new URL(request.url);
  if (aliases[url.pathname]) return Response.redirect(origin + aliases[url.pathname], 302);
  const page = url.pathname.endsWith('/') && (url.pathname==='/' || /^\/(forseti|tyche|brainstack|docs)\//.test(url.pathname));
  const wantsMarkdown = page && prefersMarkdown(request.headers.get('Accept') || '');
  if (wantsMarkdown) url.pathname += 'index.md';
  const response = await context.next(new Request(url, request));
  const result = new Response(request.method==='HEAD' ? null : response.body, response);
  if (!response.ok) return result;
  if (page || url.pathname.endsWith('.md') || url.pathname==='/llms.txt') {
    result.headers.set('Content-Signal','search=yes, ai-input=yes');
    result.headers.set('X-Content-Type-Options','nosniff');
    if (page) {
      const canonical = new URL(request.url).pathname;
      result.headers.set('Vary', [...new Set((result.headers.get('Vary')||'').split(',').map(x=>x.trim()).filter(Boolean).concat('Accept'))].join(', '));
      result.headers.set('Cache-Control','public, max-age=0, must-revalidate');
      result.headers.set('Link', `<${origin}${canonical}>; rel="canonical", <${origin}${canonical}index.md>; rel="alternate"; type="text/markdown", <${origin}/sitemap.xml>; rel="sitemap", <${origin}/.well-known/api-catalog>; rel="api-catalog", <${origin}/.well-known/agent-skills/index.json>; rel="describedby"`);
    }
    if (url.pathname.endsWith('.md')) result.headers.set('Content-Type','text/markdown; charset=utf-8');
    if (url.pathname==='/llms.txt') result.headers.set('Content-Type','text/plain; charset=utf-8');
  }
  return result;
}
