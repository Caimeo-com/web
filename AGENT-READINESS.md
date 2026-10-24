# Public agent discovery

The build creates Markdown from each page's visible main content. There is no model call or runtime HTML conversion. Use Node 24.22.1, `npm ci --ignore-scripts`, `npm run build`, and `npm test`. Pages runs `functions/_middleware.js` only on document/discovery routes listed in generated `_routes.json`; static images, video, CSS and JavaScript remain static assets. The existing Idea Explorer Worker and PostHog routes stay in place.

HTML negotiation respects Accept quality values, sends Vary: Accept and uses separate physical Markdown assets. Public responses declare search=yes and ai-input=yes, leaving training preferences unspecified. Root robots.txt excludes Idea Explorer APIs/auth/private assets and analytics. Sitemaps retain all existing product/docs pages and add Idea Explorer. Root API-catalog and agent-skills URLs redirect to the app's public documents. Unknown pages now return a real 404 instead of the homepage.

Only actual public read capabilities are advertised. No delegated authorization, MCP server, outbound bot identity or automated checkout is invented to improve a scanner score. Tests cover negotiation, discovery, HEAD, private/API pass-through and sitemap/robots output.
