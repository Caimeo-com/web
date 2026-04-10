import { layout } from './layout.js';

// ---------- Product accordion data ----------
const PRODUCTS = [
  {
    slug: 'forseti',
    name: 'Forseti',
    tag: 'Live now',
    eyebrow: 'Governed execution gateway',
    tagline: 'Put AI agents behind typed intents, deterministic policy, approval logic, and an auditable execution boundary.',
    slides: [
      {
        chip: 'Intent',
        body: 'The agent submits a typed request instead of touching privileged tools directly - every action becomes inspectable before execution.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. LEFT: a stylized AI agent icon (neural-network shape in cool white) emitting a glowing cyan envelope labeled "Intent Envelope". CENTER: the envelope shown as a card with JSON-style fields - action: deploy, target: prod, amount: 12,400, risk: high, caller: agent-a17. The fields are rendered in monospace with field names in muted gray and values in crisp white/cyan. A small lock icon on the top-right of the envelope hints at signed provenance. RIGHT: three greyed-out privileged-tool icons (terminal, payment, API) sitting behind a translucent cyan barrier, indicating the agent cannot touch them directly. Thin cyan connector lines show the envelope flowing from agent to barrier. Style: clean vector, subtle grid backdrop, enterprise B2B polish, Forseti cyan (#00d4ff) as the accent.',
      },
      {
        chip: 'Policy + Approval',
        body: 'Forseti returns ALLOW, DENY, or REQUIRES_APPROVAL and routes the right approvers when needed.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. LEFT: an incoming intent envelope arrow enters a hexagonal policy engine node. The hexagon contains small monospace labels stacked vertically - allowlists, domain checks, amount ≤ $10k, secret detection, action limits. CENTER: three output paths branch from the hex, each rendered as a pill badge with its color - green ALLOW pill (upper path), red DENY pill with a small reason-text line (lower path), amber REQUIRES_APPROVAL pill (middle path). RIGHT: on the REQUIRES_APPROVAL path, a stylized Slack-card mockup shows an interactive approval request with two buttons (Approve/Deny) and three small icons below representing single-approver, quorum (2-of-3), and hierarchy routing. Dotted async-callback arrows loop back to the policy engine. Style: clean vector, high-contrast pills, Forseti cyan for the cards and engine, accent glows, enterprise-quality.',
      },
      {
        chip: 'Execution + Audit',
        body: 'Only approved requests reach the deterministic action plane, with a trace the team can replay later.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. LEFT: a glowing cyan execution gate icon in the open position - two vertical bars lifting to allow a cyan arrow through. A small "APPROVED" tag floats above it. CENTER: the released action flowing into four downstream runtime icons arranged in a compact row - n8n logo mark, a terminal/CLI prompt, a webhook symbol, and a REST API connector. Each runtime has a thin connecting line from the gate. RIGHT: a vertical audit-log scroll with 5–6 stacked horizontal trace entries, each with a small timestamp on the left and labels: "intent received", "policy evaluated", "approval requested", "votes recorded", "action released", "callback confirmed". A small replay/play button is overlayed on the log, suggesting the trace is replayable. Style: clean vector, Forseti cyan accents, subtle dark grid backdrop, enterprise polish.',
      },
    ],
    proofs: [
      { title: 'Typed intent envelopes', body: 'Agent actions become inspectable before execution.' },
      { title: 'Deterministic decisions', body: 'ALLOW / DENY / REQUIRES_APPROVAL with explicit reasons.' },
      { title: 'Flexible approval trees', body: 'Single approver, multisig, quorum, and hierarchy routing.' },
      { title: 'Slack-native approvals', body: 'Interactive cards, slash commands, async processing.' },
      { title: 'Execution gating', body: 'Release only after the latest required approval is terminal.' },
      { title: 'Full audit trail', body: 'Trace history, votes, callbacks, replayable context.' },
    ],
    pilot: {
      label: 'Pilot offer · 4–6 weeks',
      body: 'One governed workflow, Slack approval path, policy pack, and auditable release flow.',
    },
    cta: {
      primary: { label: 'Book a Forseti pilot', href: 'mailto:contact@bitfalls.com', className: 'btn--forseti' },
      secondary: { label: 'See how it works', href: '/forseti/' },
    },
    isActive: true,
  },

  {
    slug: 'tyche',
    name: 'Tyche',
    tag: 'Live now',
    eyebrow: 'Deterministic simulation and replay',
    tagline: 'Rehearse agent behavior, compare strategies under fixed conditions, and export replay bundles teams can trust.',
    slides: [
      {
        chip: 'Scenario pack',
        body: 'Define the environment, starting state, tools, memory settings, and scoring rules for the run.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. CENTER: a floating YAML-style spec card rendered with Tyche purple (#a855f7) accents. The card has a title bar reading "scenario.yaml" and shows about 10 monospace lines - name: invoice-dispute, seed: 42, actors: [agent-a, agent-b], tools: [email, crm, billing], memory_budget: 8k_tokens, stop_when: escalation_resolved, evaluators: [score_by_policy, score_by_tone]. LEFT of the card: three small icons representing the actors (two agent avatars) and tools (email, CRM, billing). RIGHT of the card: a tiny evaluator badge with a checkmark and a deterministic "seed pinned" lock icon. A subtle dotted bounding box around everything labeled "scenario pack" in small uppercase. Style: clean vector, monospace code rendering, Tyche purple as primary accent, dark grid backdrop.',
      },
      {
        chip: 'Sweeps + comparison',
        body: 'Run the same scenario across prompts, models, policies, or tool chains under controlled conditions.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. CENTER: a compare-runs grid/table with 2 columns labeled "Strategy A" and "Strategy B" at the top (each in a purple pill). Below the headers are 4–5 rows of small scorecards showing metrics: success rate (A: 87% / B: 92%, with the higher value in brighter purple), avg tokens, avg steps, policy violations, human-review rate. A small delta indicator (up/down arrow in purple/amber) sits between each metric pair. LEFT: a miniature play/loop icon labeled "same scenario, same seed". RIGHT: a small "export" icon next to the grid hinting at the next step. Style: clean vector, monospace numeric values, Tyche purple accents, dark grid backdrop, premium B2B feel.',
      },
      {
        chip: 'Replay bundle',
        body: 'Export deterministic run evidence with state snapshots, decisions, and outcomes for review or postmortem.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. CENTER: a stylized "bundle" card shown as a stacked set of 4 layered rectangles with a slight 3D depth shadow, labeled on the top one "replay-bundle-0042.tgz". Each stacked layer has a tiny label: manifest.json, snapshots/, decisions.log, scorecard.md. To the LEFT of the bundle: a small play/rewind button suggesting it can be replayed locally. RIGHT: a download arrow icon and three small persona avatars (operator, auditor, engineer) indicating the bundle is meant to be handed to humans for review. A faint dotted "deterministic · seeded" tag sits under the bundle title. Style: clean vector, Tyche purple accents, depth without skeuomorphism, enterprise polish.',
      },
    ],
    proofs: [
      { title: 'Deterministic seeds', body: 'Runs reproduce exactly instead of arguing from vibes.' },
      { title: 'Scenario packs', body: 'Fixtures and adapters for tools, models, memory, evaluators.' },
      { title: 'Replay bundles', body: 'Metadata, scoring, snapshots, and context for every run.' },
      { title: 'Token & memory accounting', body: 'Cost and behavior visible across every loop.' },
      { title: 'API and local runners', body: 'Start in cloud, move to self-host when privacy demands it.' },
      { title: 'Before and after prod', body: 'Rehearse before shipping, reconstruct after incidents.' },
    ],
    pilot: {
      label: 'Pilot offer · 4–6 weeks',
      body: 'One scenario family, one scoring rubric, one comparison pack, and a replay bundle fit for operator review.',
    },
    cta: {
      primary: { label: 'Design a Tyche pilot', href: 'mailto:contact@bitfalls.com', className: 'btn--tyche' },
      secondary: { label: 'See how it works', href: '/tyche/' },
    },
    isActive: false,
  },

  {
    slug: 'valhalla',
    name: 'Valhalla',
    tag: 'Coming soon',
    eyebrow: 'Governed multi-agent delivery room',
    tagline: 'Turn a spec into clarified questions, a plan, implementation, audits, and convergence - with explicit roles, memory, and stop conditions.',
    slides: [
      {
        chip: 'Q&A rounds',
        body: 'Roles read the spec, surface ambiguity, and force unanswered questions into a visible register before building starts.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. CENTER: a three-column question register table rendered as a stylized kanban board with headers "Open", "Answered", "Retired" - each header in a small pill. Each column contains 3–4 question cards with brief monospace text ("Which auth provider?", "Rate-limit policy?", "Rollback strategy?") and a small role-avatar indicating who raised the question. LEFT of the board: a stylized PRD document icon being "read" by three small agent avatars (labeled lead, planner, auditor) with speech-bubble indicators. RIGHT: a counter widget showing "12 open → 3 open" with an arrow, suggesting convergence. Style: clean vector, Valhalla amber (#f59e0b) accents, dark backdrop, premium B2B feel, kanban feels deliberate not playful.',
      },
      {
        chip: 'Build loop',
        body: 'Lead, planner, developers, and specialists take turns rather than collapsing into one undifferentiated agent blob.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. CENTER: a stylized YAML-style roster card rendered with Valhalla amber accents. Title bar reads "project.yaml". About 12 monospace lines showing: name: audit-tool-refactor, roles: [lead, planner, developer_codex, developer_claude, auditor_security, auditor_dx], budget: 4h_per_turn, forseti_required_for: [deploy, shell, external_http], tyche_scenarios: [regression_core, edge_cases]. LEFT of the card: 6 small role-avatar circles labeled with their role names, arranged in a circular "taking turns" arrangement with thin amber arrows showing rotation. RIGHT of the card: a small git-worktree icon and a diff preview strip, showing that each developer produces an isolated diff. Style: clean vector, monospace code, Valhalla amber accents, dark grid backdrop, config-driven feel.',
      },
      {
        chip: 'Audit + convergence',
        body: 'Security, performance, DX, UX, and other auditors report objections and fixes until the room can justify stopping.',
        artAlt: 'Horizontal illustration on dark navy background, 640x280px. CENTER: a Ralph-loop diagram rendered as a circular iteration flow - four stations arranged in a ring labeled "Build", "Audit", "Prioritize fixes", "Revise", with thin amber arrows showing the loop direction. The Audit station fans out into 4 specialist auditor badges: security (shield icon), performance (gauge), DX (gear), UX (eye). LEFT: a small "material objections: 7 → 2 → 0" counter showing convergence across iterations. RIGHT: a checkmark "done criteria" card with 4 bullets - all tests pass, no unresolved questions, audits signed off, Forseti gate green. A small lock/gate icon on the exit arrow indicates the Forseti hand-off for privileged actions. Style: clean vector, Valhalla amber accents, disciplined loop imagery (no chaotic swarms), premium B2B feel.',
      },
    ],
    proofs: [
      { title: 'Config-driven rosters', body: 'Roles, adapters, and budgets in YAML, not hidden chat state.' },
      { title: 'First-class Q&A rounds', body: 'Ambiguity surfaces before implementation starts.' },
      { title: 'Persistent project memory', body: 'Decision log, question register, artifact index, failures.' },
      { title: 'Ralph-loop iteration', body: 'Budgets, stop rules, and explicit leadership tie-breaking.' },
      { title: 'Forseti-gated actions', body: 'Privileged operations pass through the governance boundary.' },
      { title: 'Tyche regression harnesses', body: 'Repeatable evals and scenario sweeps baked into delivery.' },
    ],
    pilot: {
      label: 'Selective pilot · 4–8 weeks',
      body: 'One active spec, fixed room roster, weekly operator review, and explicit convergence criteria.',
    },
    cta: {
      primary: { label: 'Join the Valhalla waitlist', href: 'mailto:contact@bitfalls.com', className: 'btn--valhalla' },
      secondary: { label: 'Public brief coming soon', href: null },
    },
    isActive: false,
  },
];

function renderSlide(productSlug, slide, index, total) {
  const assetSlug = slide.chip.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const artSrc = `/carousels/${productSlug}-${assetSlug}.webp`;
  return `
            <li class="product-carousel__slide${index === 0 ? ' is-active' : ''}"
                data-slide
                role="group"
                aria-roledescription="slide"
                aria-label="${index + 1} of ${total}">
              <span class="product-carousel__chip">${slide.chip}</span>
              <div class="product-carousel__art">
                <img
                  src="${artSrc}"
                  alt="${slide.artAlt.replace(/"/g, '&quot;')}"
                  width="1536"
                  height="672"
                  loading="lazy"
                  decoding="async"
                >
              </div>
              <p class="product-carousel__body">${slide.body}</p>
            </li>`;
}

function renderCarousel(product) {
  const total = product.slides.length;
  const slides = product.slides.map((s, i) => renderSlide(product.slug, s, i, total)).join('');
  const dots = product.slides.map((_, i) =>
    `<button type="button"
                   class="product-carousel__dot${i === 0 ? ' is-active' : ''}"
                   data-slide-to="${i}"
                   aria-label="Go to slide ${i + 1}"></button>`
  ).join('\n                ');
  return `
          <div class="product-carousel" data-product-carousel aria-roledescription="carousel" aria-label="${product.name} - how it works">
            <div class="product-carousel__viewport">
              <ol class="product-carousel__track" data-carousel-track>${slides}
              </ol>
            </div>
            <div class="product-carousel__controls">
              <button type="button" class="product-carousel__arrow product-carousel__arrow--prev" data-carousel-prev aria-label="Previous slide">&#8249;</button>
              <div class="product-carousel__dots" role="tablist" aria-label="Slide selection">
                ${dots}
              </div>
              <button type="button" class="product-carousel__arrow product-carousel__arrow--next" data-carousel-next aria-label="Next slide">&#8250;</button>
            </div>
          </div>`;
}

function renderProofGrid(product) {
  const items = product.proofs.map(p => `
            <li class="product-pane__proof-point">
              <span class="product-pane__proof-icon" aria-hidden="true">&#9632;</span>
              <div>
                <strong>${p.title}</strong>
                <span>${p.body}</span>
              </div>
            </li>`).join('');
  return `
          <ul class="product-pane__proof-grid">${items}
          </ul>`;
}

function renderCtaRow(product) {
  const primary = `<a href="${product.cta.primary.href}" class="btn ${product.cta.primary.className}">${product.cta.primary.label}</a>`;
  const secondary = product.cta.secondary.href
    ? `<a href="${product.cta.secondary.href}" class="product-pane__link">${product.cta.secondary.label} <span aria-hidden="true">&rarr;</span></a>`
    : `<span class="product-pane__link product-pane__link--disabled" aria-disabled="true">${product.cta.secondary.label}</span>`;
  return `
          <div class="product-pane__cta-row">
            ${primary}
            ${secondary}
          </div>`;
}

function renderPane(product) {
  const activeClass = product.isActive ? ' is-active' : '';
  const expanded = product.isActive ? 'true' : 'false';
  return `
        <article class="product-pane product-pane--${product.slug}${activeClass}"
                 data-product-pane
                 data-product-name="${product.slug}"
                 tabindex="0"
                 aria-expanded="${expanded}">
          <div class="product-pane__compact">
            <p class="product-pane__tag">${product.tag}</p>
            <h3>${product.name}</h3>
            <div class="product-pane__thumb" aria-hidden="true">
              <div class="product-pane__thumb-window">
                <span></span><span></span><span></span>
              </div>
              <div class="product-pane__thumb-lines">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div class="product-pane__expanded">
            <p class="product-pane__eyebrow">${product.eyebrow}</p>
            <p class="product-pane__tagline">${product.tagline}</p>
${renderCarousel(product)}
${renderProofGrid(product)}
            <div class="product-pane__pilot">
              <p class="product-pane__pilot-label">${product.pilot.label}</p>
              <p class="product-pane__pilot-body">${product.pilot.body}</p>
            </div>
${renderCtaRow(product)}
            <p class="product-pane__trust">Self-hosted &middot; vendor-agnostic &middot; replayable</p>
          </div>
        </article>`;
}

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero">
      <span class="hero__label">Control &middot; Confidence &middot; Delivery</span>
      <h1>Governed agent infrastructure<br>for <span class="gradient">real outcomes</span></h1>
      <p class="hero__sub">
        Let agents work without giving them blind access to the real world.
        Caimeo governs execution, rehearses behavior, and is preparing a high-trust delivery room for the next layer up.
      </p>
      <div class="hero__actions">
        <a href="mailto:contact@bitfalls.com" class="btn btn--primary">Contact Caimeo</a>
        <a href="#products" class="btn btn--ghost">See the products</a>
      </div>
    </section>

    <!-- ===== TRUST BAR ===== -->
    <section class="section" style="padding-top:0;padding-bottom:3rem;">
      <div class="container">
        <div class="trust-bar fade-in">
          <div class="trust-bar__item">
            <span class="icon" aria-hidden="true">&#9679;</span>
            Self-hosted by default
          </div>
          <div class="trust-bar__item">
            <span class="icon" aria-hidden="true">&#9679;</span>
            Vendor-agnostic
          </div>
          <div class="trust-bar__item">
            <span class="icon" aria-hidden="true">&#9679;</span>
            Enterprise-ready audit trails
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SUITE VISUAL ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <figure class="suite-diagram">
          <img
            src="/caimeo-suite-architecture.webp"
            alt="Caimeo suite architecture diagram showing a three-stage pipeline. Forseti governs live agent actions through intent, policy, approval, and release. Tyche turns those traces into seeded scenarios, runs deterministic comparisons, and outputs replay-backed policy packs. Valhalla takes validated patterns into a structured delivery room with intake, role loops, review, and shipped change."
            width="1600"
            height="1683"
            decoding="async"
          >
        </figure>
      </div>
    </section>

    <!-- ===== PRODUCT ACCORDION ===== -->
    <section class="section" id="products">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">The Suite</p>
          <h2>Three products. One governed stack.</h2>
        </div>

        <div class="product-accordion fade-in" data-product-accordion>
${PRODUCTS.map(renderPane).join('')}
        </div>
      </div>
    </section>

    <!-- ===== HOW THE SUITE FITS ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">Suite Architecture</p>
          <h2>Built to work together</h2>
          <p>Each layer has a clean job. Forseti controls action, Tyche provides evidence, and Valhalla is the governed delivery layer that ties them together.</p>
        </div>

        <div class="suite-row fade-in">
          <div class="suite-col">
            <div class="suite-col__num" style="color:var(--forseti);">01</div>
            <h3 style="color:var(--forseti);">Control</h3>
            <p>Forseti sits at the execution boundary. Agents propose intents; Forseti decides whether they proceed, require approval, or get denied.</p>
          </div>
          <div class="suite-col">
            <div class="suite-col__num" style="color:var(--tyche);">02</div>
            <h3 style="color:var(--tyche);">Confidence</h3>
            <p>Tyche rehearses before production and replays after incidents, replacing guesswork with deterministic evidence.</p>
          </div>
          <div class="suite-col">
            <div class="suite-col__num" style="color:var(--valhalla);">03</div>
            <h3 style="color:var(--valhalla);">Delivery</h3>
            <p>Valhalla is the next layer up: a governed build room for important specs, specialist roles, and high-trust execution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHO IT'S FOR ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">Audience</p>
          <h2>Built for teams deploying agents into real workflows</h2>
        </div>

        <div class="use-cases fade-in">
          <div class="use-case">
            <h4>Security &amp; Platform Engineering</h4>
            <p>Need an approval and audit layer before agents touch deployments, payments, tickets, or external APIs.</p>
          </div>
          <div class="use-case">
            <h4>AI Platform Teams</h4>
            <p>Need reproducible evidence before widening agent autonomy and a way to replay incidents after they happen.</p>
          </div>
          <div class="use-case">
            <h4>Finance &amp; IT Operations</h4>
            <p>Need quorum-based approvals before money moves or vendor communications go out, with a full audit trail.</p>
          </div>
          <div class="use-case">
            <h4>Product Engineering</h4>
            <p>Need a route from governed execution into repeatable, higher-trust delivery without losing operator control.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRINCIPLES ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">Principles</p>
          <h2>How we think about agent governance</h2>
        </div>

        <div class="proof-points fade-in">
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9632;</div>
            <div>
              <h4>Self-hosted by default</h4>
              <p>The control layer runs in your environment so the governance boundary survives model churn and vendor changes.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9632;</div>
            <div>
              <h4>Vendor-agnostic</h4>
              <p>Forseti sits above the model vendor, above the agent framework, and above the workflow runner. No lock-in.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9632;</div>
            <div>
              <h4>Operator-visible by design</h4>
              <p>Approvals, simulations, and delivery loops stay inspectable. No black-box handoff when the stakes rise.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9632;</div>
            <div>
              <h4>Deterministic decisions</h4>
              <p>Policy evaluation is deterministic: ALLOW, DENY, or REQUIRES_APPROVAL. No probabilistic guessing at the governance layer.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9632;</div>
            <div>
              <h4>Reproducible simulation</h4>
              <p>Every Tyche run carries a seed, scenario version, and replay manifest so results can be reproduced and compared.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9632;</div>
            <div>
              <h4>Structured delivery loops</h4>
              <p>Valhalla is being shaped around named roles, question rounds, and convergence rules instead of freestyle agent chatter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section">
      <div class="container fade-in">
        <h2>Bring one workflow or one hard problem.</h2>
        <p>We will tell you whether it belongs in Forseti, Tyche, or the upcoming Valhalla track.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--primary">contact@bitfalls.com</a>
          <a href="#products" class="btn btn--ghost">Review the suite</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo - Governed Agent Infrastructure',
    description: 'Governed agent infrastructure for teams that want real outcomes, not unchecked autonomy. Control execution with Forseti, rehearse with Tyche, and prepare for Valhalla.',
    path: '/',
    body,
  });
}
