import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { onRequest, prefersMarkdown } from '../functions/_middleware.js';
function context(path, accept='text/html', method='GET') {
  return { request:new Request('https://caimeo.com'+path,{method,headers:{Accept:accept}}), next: async req=> {
    const pathname=new URL((req||context.request).url).pathname;
    try { return new Response(readFileSync(`dist${pathname.endsWith('/') ? pathname+'index.html' : pathname}`),{headers:{'Content-Type':pathname.endsWith('.md')?'text/plain':'text/html',Vary:'Accept-Encoding'}}); }
    catch { return new Response('Not found',{status:404}); }
  }};
}
test('negotiates public HTML with quality and cache isolation',async()=>{
  for(const a of ['text/markdown','text/html;q=0,text/*;q=1,text/markdown;q=.1'])assert.equal(prefersMarkdown(a),true);
  for(const a of ['*/*','text/markdown;q=0','text/markdown;q=','text/markdown;q=.2,text/html;q=.8'])assert.equal(prefersMarkdown(a),false);
  for(const path of ['/','/brainstack/','/docs/brainstack/']) {
    const html=await onRequest(context(path));
    const md=await onRequest(context(path,'text/markdown'));
    assert.match(html.headers.get('content-type'),/text\/html/);
    assert.match(md.headers.get('content-type'),/text\/markdown/);
    assert.match(md.headers.get('vary'),/Accept-Encoding, Accept/);
    assert.match(md.headers.get('link'),/api-catalog/);
    assert.ok((await md.text()).length>100);
    assert.equal(await (await onRequest(context(path,'text/markdown','HEAD'))).text(),'');
  }
});
test('root discovery points at the existing Idea Explorer worker',async()=>{
  for(const path of ['/.well-known/api-catalog','/.well-known/agent-skills/index.json']) {
    const r=await onRequest(context(path));assert.equal(r.status,302);assert.equal(r.headers.get('location'),'https://caimeo.com/ideas'+path);
  }
  assert.match(readFileSync('dist/robots.txt','utf8'),/Disallow: \/ideas\/api\//);
  assert.match(readFileSync('dist/sitemap.xml','utf8'),/https:\/\/caimeo.com\/ideas\//);
  assert.match(readFileSync('dist/llms.txt','utf8'),/Idea Explorer/);
});
test('does not intercept app APIs or advertise nonexistent services',async()=>{
  let calls=0;
  for(const path of ['/ideas/api/me','/ph/static/array.js','/.well-known/oauth-authorization-server']) {
    const r=await onRequest({request:new Request('https://caimeo.com'+path,{headers:{Accept:'text/markdown'}}),next:async()=>{calls++;return new Response('existing response')}});
    assert.equal(await r.text(),'existing response');assert.equal(r.headers.get('content-signal'),null);
  }
  assert.equal(calls,3);
});
