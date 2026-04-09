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

// Shared HTML shell for all pages
export function layout({ title, description, path, accent, body, css, canonicalBase = 'https://caimeo.com' }) {
  const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
  const canonicalUrl = `${canonicalBase}${normalizedPath}`;
  const contactEmail = 'contact@bitfalls.com';
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/forseti/', label: 'Forseti' },
    { href: '/tyche/', label: 'Tyche' },
    { label: 'Valhalla', badge: 'Coming soon', disabled: true },
  ];

  const accentVar = accent ? `<style>:root{--accent:var(--${accent});--accent-glow:var(--${accent}-glow);}</style>` : '';
  const organizationId = `${canonicalBase}/#organization`;
  const websiteId = `${canonicalBase}/#website`;
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'Caimeo',
        url: canonicalBase,
        description: 'Governed agent infrastructure for teams that ship real outcomes.',
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'Caimeo',
        url: canonicalBase,
        description: 'Governed agent infrastructure for teams that ship real outcomes.',
        publisher: { '@id': organizationId },
      },
      ...(normalizedPath === '/'
        ? []
        : [
            {
              '@type': 'WebPage',
              '@id': `${canonicalUrl}#page`,
              name: title,
              url: canonicalUrl,
              description,
              isPartOf: { '@id': websiteId },
              about: { '@id': organizationId },
            },
          ]),
    ],
  }).replace(/</g, '\\u003c');
  const renderNavLink = (link) => {
    if (link.disabled) {
      return `<span class="site-nav__disabled" aria-disabled="true">${link.label}<span class="site-nav__badge">${link.badge}</span></span>`;
    }
    return `<a href="${link.href}">${link.label}</a>`;
  };
  const renderFooterLink = (link) => {
    if (link.disabled) {
      return `<span class="site-footer__disabled" aria-disabled="true">${link.label}<span class="site-nav__badge">${link.badge}</span></span>`;
    }
    return `<a href="${link.href}">${link.label}</a>`;
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">

  <!-- Open Graph -->
  <meta property="og:site_name" content="Caimeo">
  <meta property="og:locale" content="en_US">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <!-- Preload critical font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <script type="application/ld+json">${structuredData}</script>
  ${POSTHOG_SNIPPET}
  <link rel="stylesheet" href="/styles/main.css">
  ${accentVar}
  ${css || ''}
</head>
<body>

  <div class="nav-overlay"></div>

  <nav class="site-nav" role="navigation" aria-label="Main navigation">
    ${navLinks.map(renderNavLink).join('\n    ')}
    <a href="mailto:${contactEmail}" class="btn btn--primary">Contact</a>
  </nav>

  <header class="site-header">
    <div class="site-header__inner">
      <a href="/" class="site-logo" aria-label="Caimeo home">
        <span class="site-logo__mark" aria-hidden="true"></span>
        CAIMEO
      </a>

      <button class="nav-toggle" aria-label="Toggle navigation">
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
            <span class="site-logo__mark" aria-hidden="true"></span>
            CAIMEO
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

  <script src="/scripts/main.js"></script>
</body>
</html>`;
}
