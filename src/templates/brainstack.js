import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero hero--product hero--brainstack">
      <span class="hero__label">Caimeo Brainstack</span>
      <h1>Brainstack</h1>
      <p class="hero__sub">
        Shared memory and operational context for AI agents running on your own machines.
        Brainstack turns a git-backed brain into searchable, reusable context for Codex,
        Claude, Cursor, scripts, Telegram, and private workers.
      </p>
      <div class="hero__actions">
        <a href="#how-it-works" class="btn btn--brainstack">See how it works</a>
        <a href="/docs/brainstack/" class="btn btn--ghost">Read the docs</a>
      </div>
      <ul class="brainstack-hero-points" aria-label="Brainstack outcomes">
        <li>One shared brain that grows as work happens</li>
        <li>Same context for Codex, Claude, Cursor, and scripts</li>
        <li>Private control across Linux, Mac, Telegram, and tailnet workers</li>
      </ul>
    </section>

    <!-- ===== PITCH VIDEO ===== -->
    <section class="pitch-section" aria-label="Brainstack pitch video">
      <div class="container">
        <figure class="pitch-video fade-in">
          <div class="pitch-video__frame" data-pitch-video>
            <video
              class="pitch-video__media"
              playsinline
              preload="none"
              poster="/product/brainstack-pitch-poster.webp"
              width="1920"
              height="1080"
              aria-label="Brainstack pitch: why shared memory makes your AI agents compound."
            >
              <source src="/product/brainstack-pitch.mp4" type="video/mp4">
              Your browser does not support embedded video. <a href="/product/brainstack-pitch.mp4">Download the pitch video</a>.
            </video>
            <button type="button" class="pitch-video__play" data-pitch-play aria-label="Play the Brainstack pitch video">
              <span class="pitch-video__play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor"><path d="M8 5.14v13.72c0 .79.87 1.27 1.54.84l10.79-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z"/></svg>
              </span>
              <span class="pitch-video__play-label">Watch the 36-second pitch</span>
            </button>
          </div>
        </figure>
      </div>
    </section>

    <!-- ===== HERO VISUAL ===== -->
    <section class="diagram-section brainstack-hero-shot">
      <div class="container">
        <figure class="product-visual product-visual--wide product-visual--simulated">
          <picture>
            <source
              srcset="/product/brainstack-hero-mobile.webp"
              media="(max-width: 640px)"
              width="941"
              height="1672"
            >
            <img
              src="/product/brainstack-hero.webp"
              alt="Brainstack product view showing brainctl doctor output, shared-brain search results, worker status, and a private tailnet status line."
              aria-describedby="brainstack-hero-desc"
              width="1672"
              height="941"
              fetchpriority="high"
              decoding="async"
            >
          </picture>
          <figcaption><span class="simulation-label">Simulated product view</span> Brainstack operator view with doctor output, shared-brain search, worker status, and private tailnet state.</figcaption>
          <p id="brainstack-hero-desc" class="sr-only">Brainstack product view with an operator panel, a shared-brain repo and search service, optional telemux, three tailnet workers, doctor output, search results for runbooks, and worker status rows.</p>
        </figure>
      </div>
    </section>

    <!-- ===== WHAT IT IS ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">What it is</p>
          <h2>A private shared brain for tools and machines</h2>
          <p>Brainstack gives agent tools a durable place to remember what happened, save useful context, and find it again. The source of truth is a git repo with markdown, skills, transcripts, and artifacts. Brainstack adds local search, write paths, health checks, client bootstrap, optional Telegram control, file relay, and worker routing.</p>
        </div>

        <div class="brainstack-split fade-in">
          <div class="brainstack-lede">
            <h3>Product code and brain data stay separate</h3>
            <p>The Brainstack repo contains the services and CLI. Your shared brain remains its own repo. That split matters: upgrades can refresh services and runtime files without rewriting the knowledge base your tools depend on.</p>
          </div>
          <ul class="brainstack-facts" aria-label="Brainstack facts">
            <li><strong>braind</strong><span>Local service that lets tools search and read the shared brain.</span></li>
            <li><strong>brainctl</strong><span>CLI for provisioning, enrollment, health checks, backups, recovery, and file relay.</span></li>
            <li><strong>client bootstrap</strong><span>Codex gets installable Brainstack skills; Claude and Cursor get checked-in shared-brain guidance.</span></li>
            <li><strong>telemux</strong><span>Optional Telegram topics mapped to durable work contexts and file delivery.</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section section--alt" id="how-it-works">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">How it works</p>
          <h2>Three simple pieces</h2>
        </div>

        <div class="flow-steps flow-steps--brainstack fade-in">
          <div class="flow-step">
            <div class="flow-step__number">1</div>
            <h4>Git is the memory</h4>
            <p>Everything you store, from LLM chat transcripts to markdown pages, skills, notes, and artifacts, lives in the shared-brain repo and feeds fast local search.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">2</div>
            <h4>Tools share the same context</h4>
            <p>Codex, Claude, Cursor, and scripts can all read the same memory instead of each tool starting over with its own scattered notes.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">3</div>
            <h4>Your machines do the work</h4>
            <p>Run jobs on your own Mac, Linux box, or private tailnet workers. Telegram is optional; it is just a phone-friendly control surface.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MAC MENU APP ===== -->
    <section class="section brainstack-menu-section">
      <div class="container">
        <div class="brainstack-menu-showcase fade-in">
          <div class="brainstack-menu-copy">
            <p class="section-label" style="color:var(--brainstack);">Mac companion app</p>
            <h2>Keep the shared brain visible without living in the terminal</h2>
            <p>The Brainstack Menu app gives macOS operators a lightweight control surface for health, proposals, hooks, Telegram routing, fleet freshness, and safe repair actions.</p>
            <ul class="brainstack-menu-list" aria-label="Brainstack Menu capabilities">
              <li>See whether your local client, control host, and workers are current.</li>
              <li>Open the wiki or proposal review flow from the menu bar.</li>
              <li>Run common repairs without remembering the exact brainctl command.</li>
            </ul>
            <a href="/docs/brainstack/menu-app/" class="btn btn--brainstack">Read the Mac app docs</a>
          </div>
          <figure class="product-visual product-visual--menu">
            <img
              src="/product/brainstack-menu-app.png"
              alt="Brainstack macOS menu bar app showing shared-brain health, proposal count, local checks, control status, Telegram routing, and fleet freshness."
              width="796"
              height="1434"
              loading="lazy"
              decoding="async"
            >
            <figcaption>Brainstack Menu turns status, proposal review, fleet freshness, and repair actions into a small macOS control surface.</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ===== DOCS / INSTALL PATHS ===== -->
    <section class="section" id="install">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Docs</p>
          <h2>Choose the right Brainstack setup path</h2>
          <p>Brainstack has a lot of operating surface: install roles, Mac enrollment, capabilities, skills, hooks, curation, Telegram, workers, and trust boundaries. The docs split those flows into focused pages so you can start with the path that matches your machine and role.</p>
        </div>

        <div class="brainstack-role-split fade-in" aria-label="Brainstack documentation paths">
          <a href="/docs/brainstack/install/">
            <strong>Install and enroll</strong>
            <span>Choose a role, set up a control host, enroll a Mac client, or ask a harness to install Brainstack safely.</span>
          </a>
          <a href="/docs/brainstack/capabilities/">
            <strong>Capabilities</strong>
            <span>Install local or worker-backed powers such as voice transcription without changing the harness surface.</span>
          </a>
          <a href="/docs/brainstack/skills/">
            <strong>Skills and hooks</strong>
            <span>Use public Brainstack skills, import shared skills, and keep harness context fresh in the background.</span>
          </a>
          <a href="/docs/brainstack/menu-app/">
            <strong>Mac menu app</strong>
            <span>Watch shared-brain health, proposals, Telegram routing, and fleet updates from the macOS menu bar.</span>
          </a>
          <a href="/docs/brainstack/proposals/">
            <strong>Proposals</strong>
            <span>Turn raw evidence into scoped, reviewable memory and wiki proposals instead of unmanaged notes.</span>
          </a>
        </div>

        <div class="brainstack-note fade-in">
          <strong>Fastest proof:</strong>
          <span>Install Brainstack on one private control host, enroll one Mac client, run <code>brainctl doctor</code>, then try one concrete capability such as local voice transcription. The docs walk through that path without crowding this page.</span>
        </div>
      </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Features</p>
          <h2>The parts operators usually end up building by hand</h2>
        </div>

        <div class="proof-points proof-points--brainstack fade-in">
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#8981;</div>
            <div>
              <h4>Local search over the shared brain</h4>
              <p>Search uses derived local indexes, while markdown and artifacts remain reviewable in git.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#8693;</div>
            <div>
              <h4>Agent-friendly save path</h4>
              <p>Agents can save transcripts, notes, artifacts, and draft changes without pushing directly to the shared-brain repo.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#9635;</div>
            <div>
              <h4>Quiet Telegram control plane</h4>
              <p>Short status, liveness, usage, and recap messages avoid accidental full-session resumes; file, machine, scheduling, and code work still take the durable path.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#9635;</div>
            <div>
              <h4>Machine-to-Telegram file relay</h4>
              <p>Send yourself a PDF, log, image, or build artifact from an enrolled machine; the file streams through the control host's telemux path.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#9881;</div>
            <div>
              <h4>Deterministic runtime rendering</h4>
              <p>Generated runtime env files are separate from operator-owned secrets env files, and services run without ambient repo env files.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#128187;</div>
            <div>
              <h4>Agent-ready runbooks</h4>
              <p>Codex gets installable Brainstack skills, while Claude and Cursor get concrete shared-brain guidance from checked-in templates.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--brainstack-glow);color:var(--brainstack);">&#10003;</div>
            <div>
              <h4>Doctor-first operations</h4>
              <p>Health checks report Bun, Git, SSH, Tailscale, harness paths, worker trust, services, and queued work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ARCHITECTURE ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <figure class="product-visual product-visual--wide product-visual--simulated">
          <img
            src="/product/brainstack-architecture.webp"
            alt="Brainstack architecture diagram showing agent tools, brainctl, braind, the shared-brain git repository, Telegram control, and private workers."
            aria-describedby="brainstack-architecture-desc"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          >
          <figcaption><span class="simulation-label">Simulated architecture view</span> Private shared-brain architecture with optional Telegram control and tailnet workers.</figcaption>
          <p id="brainstack-architecture-desc" class="sr-only">Architecture diagram with agent tools on the left, brainctl and braind in the middle, the shared-brain git repository as the memory source, optional Telegram control, and private workers on the tailnet.</p>
        </figure>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">FAQ</p>
          <h2>Common questions</h2>
        </div>

        <div class="faq-list fade-in">
          <div class="faq-item">
            <button class="faq-item__q">Does Brainstack replace Codex or Claude?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. Brainstack gives those harnesses shared context, a write path, worker routing, and operational checks. The harness still does the reasoning and code work.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Where does the brain live?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              In a separate shared-brain git repo. Brainstack keeps product code and your memory data separate, then builds fast local search over that repo.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Do client machines need Bun?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Ordinary Mac clients can use a compiled <code>brainctl</code> binary with client bootstrap assets and public skills embedded, so they do not need Bun or a Brainstack source checkout. Control hosts and source-run workers still need Bun because they run Brainstack services from source.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Can I just ask Codex to install Brainstack?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Yes, if Codex has local machine permissions and you can provide the private invite for an existing Brainstack. It should ask whether the machine is a <code>client</code>, <code>operator</code>, <code>control</code>, or <code>worker</code>; check Git, SSH, Tailscale, and the selected harness; stop for missing Tailscale login or other prerequisites; enroll with <code>--invite-file</code>; then run <code>brainctl doctor</code>. It should not invent tokens, hostnames, or SSH pins.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Are Brainstack skills private?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              The packaged skills are generic product runbooks: shared-brain usage, client discipline, operator checks, curation, worker ops, and file relay. Exact hostnames, Telegram routing, local paths, and personal topology belong in a private overlay skill.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Do we need Telegram?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. The core shared-brain service and brainctl CLI work without telemux. Telegram is for operators who want phone-friendly control topics and scheduled routines.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Can BrainCTL send a file to Telegram?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Yes, when telemux is enabled and the invite includes the control-host SSH config. <code>brainctl telegram send-file</code> streams the file over SSH to the control host and lets telemux deliver it. The command rejects symlinks, oversized files, and sensitive-looking filenames unless you explicitly override the guard.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Is this meant to be public SaaS?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              The default posture is private: loopback bind, trusted tailnet exposure, and operator-owned machines. Do not put it on the public internet unless you deliberately add the app-layer controls for that posture.
            </div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section" id="contact">
      <div class="container fade-in">
        <p class="section-label" style="color:var(--brainstack);">Get started</p>
        <h2>Bring one private machine and one shared-brain repo.</h2>
        <p>That is enough for the first pass: bring up one control host, connect the shared-brain repo, prove doctor is clean, then decide which Mac, Linux, Telegram, and worker surfaces are worth adding.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--brainstack">Talk about Brainstack</a>
          <a href="/#products" class="btn btn--ghost">Compare the suite</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Brainstack - Shared Brain for AI Agent Memory',
    description: 'Brainstack gives Codex, Claude, Cursor, scripts, and private machines one shared brain for searchable memory, skills, proposals, local capabilities, and fleet context.',
    path: '/brainstack/',
    accent: 'brainstack',
    schema: [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://caimeo.com/brainstack/#software',
        name: 'Brainstack',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'macOS, Linux',
        url: 'https://caimeo.com/brainstack/',
        description: 'Private shared-brain software for AI agent memory, skills, proposals, local capabilities, and fleet context across Codex, Claude, Cursor, scripts, Telegram, and private workers.',
        featureList: [
          'Shared-brain search',
          'AI harness skill refresh',
          'Proposal curation',
          'Local capability installation',
          'Tailnet worker context',
          'macOS menu bar status app',
          'Optional Telegram control',
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://caimeo.com/brainstack/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does Brainstack replace Codex or Claude?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Brainstack gives those harnesses shared context, a write path, worker routing, and operational checks. The harness still does the reasoning and code work.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where does the brain live?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In a separate shared-brain git repo. Brainstack keeps product code and memory data separate, then builds fast local search over that repo.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do client machines need Bun?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ordinary Mac clients can use a compiled brainctl binary with client bootstrap assets and public skills embedded, so they do not need Bun.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do we need Telegram?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The core shared-brain service and brainctl CLI work without telemux. Telegram is for operators who want phone-friendly control topics and scheduled routines.',
            },
          },
        ],
      },
    ],
    body,
  });
}
