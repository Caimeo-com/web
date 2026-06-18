const POSTHOG_SNIPPET = `<script>
!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="Ii init Di qi Sr Bi Zi Pi capture calculateEventProperties Yi register register_once register_for_session unregister unregister_for_session Xi getFeatureFlag getFeatureFlagPayload getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Ji identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Wi Vi createPersonProfile setInternalOrTestUser Gi Fi Ki opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing $i debug Tr Ui getPageViewId captureTraceFeedback captureTraceMetric Ri".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
if (window.location.hostname === 'caimeo.com' || window.location.hostname.endsWith('.caimeo.com')) {
  posthog.init('phc_Dhh2yQTXf7praScQ5FdXjwqMXpQPN9vL8BpDE3E4Uxs2', {
    api_host: '/ph',
    ui_host: 'https://eu.posthog.com',
    defaults: '2026-01-30',
    person_profiles: 'identified_only',
  });
}
</script>`;

const ASSET_VERSION = '20260618-menu-app-size';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Shared HTML shell for all pages
export function layout({ title, description, path, accent, body, css, schema = [], canonicalBase = 'https://caimeo.com' }) {
  const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  const canonicalUrl = `${canonicalBase}${normalizedPath}`;
  const contactEmail = 'contact@bitfalls.com';
  const logoUrl = `${canonicalBase}/icon-512.png`;
  const ogImageUrl = `${canonicalBase}/og-image.png`;
  const ogImageSquareUrl = `${canonicalBase}/og-image-square.png`;
  const socialImageAlt = 'Caimeo crest logo and wordmark on a dark background.';
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const safeCanonicalUrl = escapeHtml(canonicalUrl);
  const safeOgImageUrl = escapeHtml(ogImageUrl);
  const safeSocialImageAlt = escapeHtml(socialImageAlt);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/forseti/', label: 'Forseti' },
    { href: '/tyche/', label: 'Tyche' },
    { href: '/brainstack/', label: 'Brainstack' },
    { href: '/docs/', label: 'Docs' },
    { label: 'Valhalla', badge: 'Coming soon', disabled: true },
  ];

  const accentVar = accent ? `<style>:root{--accent:var(--${accent});--accent-glow:var(--${accent}-glow);}</style>` : '';
  const organizationId = `${canonicalBase}/#organization`;
  const websiteId = `${canonicalBase}/#website`;
  const extraSchema = (Array.isArray(schema) ? schema : [schema]).filter(Boolean);
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Caimeo',
        url: canonicalBase,
        description: 'Governed agent infrastructure for teams that ship real outcomes.',
        logo: logoUrl,
        image: [ogImageUrl, ogImageSquareUrl],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'Caimeo',
        url: canonicalBase,
        description: 'Governed agent infrastructure for teams that ship real outcomes.',
        publisher: { '@id': organizationId },
        image: ogImageUrl,
      },
      {
        '@type': normalizedPath === '/docs/' ? 'CollectionPage' : 'WebPage',
        '@id': `${canonicalUrl}#page`,
        name: title,
        url: canonicalUrl,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': organizationId },
        primaryImageOfPage: ogImageUrl,
      },
      ...extraSchema,
    ],
  }).replace(/</g, '\\u003c');
  const renderNavLink = (link) => {
    if (link.disabled) {
      return `<span class="site-nav__disabled" aria-disabled="true">${escapeHtml(link.label)}<span class="site-nav__badge">${escapeHtml(link.badge)}</span></span>`;
    }
    const isCurrent = normalizedPath === link.href || (link.href !== '/' && normalizedPath.startsWith(link.href));
    const currentAttrs = isCurrent
      ? ` class="active"${normalizedPath === link.href ? ' aria-current="page"' : ''}`
      : '';
    return `<a href="${escapeHtml(link.href)}"${currentAttrs}>${escapeHtml(link.label)}</a>`;
  };
  const renderFooterLink = (link) => {
    if (link.disabled) {
      return `<span class="site-footer__disabled" aria-disabled="true">${escapeHtml(link.label)}<span class="site-nav__badge">${escapeHtml(link.badge)}</span></span>`;
    }
    return `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`;
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDescription}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="theme-color" content="#0a0b0f">
  <link rel="canonical" href="${safeCanonicalUrl}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Open Graph -->
  <meta property="og:site_name" content="Caimeo">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${safeCanonicalUrl}">
  <meta property="og:image" content="${safeOgImageUrl}">
  <meta property="og:image:secure_url" content="${safeOgImageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${safeSocialImageAlt}">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDescription}">
  <meta name="twitter:image" content="${safeOgImageUrl}">
  <meta name="twitter:image:alt" content="${safeSocialImageAlt}">

  <!-- Preload critical font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <script type="application/ld+json">${structuredData}</script>
  ${POSTHOG_SNIPPET}
  <link rel="stylesheet" href="/styles/main.css?v=${ASSET_VERSION}">
  ${accentVar}
  ${css || ''}
</head>
<body>

  <div class="nav-overlay" id="nav-overlay"></div>

  <nav class="site-nav" id="mobile-nav" role="navigation" aria-label="Main navigation" aria-hidden="true" inert>
    ${navLinks.map(renderNavLink).join('\n    ')}
    <a href="mailto:${contactEmail}" class="btn btn--primary">Contact</a>
  </nav>

  <header class="site-header">
    <div class="site-header__inner">
      <a href="/" class="site-logo" aria-label="Caimeo home">
        <img
          class="site-logo__image"
          src="/logo-mark.png"
          alt=""
          width="40"
          height="40"
          fetchpriority="high"
          decoding="async"
        >
        <span class="site-logo__text">CAIMEO</span>
      </a>

      <button class="nav-toggle" aria-label="Toggle navigation" aria-controls="mobile-nav" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <nav class="site-nav site-nav--desktop" role="navigation" aria-label="Main navigation">
        ${navLinks.map(renderNavLink).join('\n        ')}
        <a href="mailto:${contactEmail}" class="btn btn--primary">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    ${body}
  </main>

  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <div class="site-logo">
            <img
              class="site-logo__image"
              src="/logo-mark.png"
              alt=""
              width="40"
              height="40"
              decoding="async"
            >
            <span class="site-logo__text">CAIMEO</span>
          </div>
          <p>Governed agent infrastructure for teams that ship real outcomes.</p>
        </div>
        <div class="site-footer__links">
          <h4>Products</h4>
          ${navLinks.slice(1).map(renderFooterLink).join('\n          ')}
        </div>
        <div class="site-footer__links">
          <h4>Company</h4>
          <a href="mailto:${contactEmail}">contact@bitfalls.com</a>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>&copy; ${new Date().getFullYear()} Caimeo. All rights reserved.</span>
        <span>Self-hosted &middot; Vendor-agnostic &middot; Enterprise-ready</span>
      </div>
    </div>
  </footer>

  <script src="/scripts/main.js?v=${ASSET_VERSION}"></script>
</body>
</html>`;
}
