import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero hero--product hero--brainstack">
      <span class="hero__label">Caimeo Brainstack</span>
      <h1>Brainstack</h1>
      <p class="hero__sub">
        Share context between AI coding tools, keep the source of truth in git,
        and run Codex or Claude on private machines without losing track of what happened.
      </p>
      <div class="hero__actions">
        <a href="#how-it-works" class="btn btn--brainstack">See the workflow</a>
        <a href="#install" class="btn btn--ghost">Review single-node path</a>
      </div>
      <ul class="brainstack-hero-points" aria-label="Brainstack outcomes">
        <li>One git-backed memory for agent tools</li>
        <li>One CLI for install, health, backup, and recovery</li>
        <li>Optional Telegram control, private by default</li>
      </ul>
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
          <p id="brainstack-hero-desc" class="sr-only">Brainstack product view with an operator panel, a shared-brain repo and search service, optional telemux, three tailnet workers, doctor output, search results for runbooks, and worker status rows.</p>
        </figure>
      </div>
    </section>

    <!-- ===== WHAT IT IS ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">What it is</p>
          <h2>Shared memory without giving up local control</h2>
          <p>Brainstack gives agent tools a durable place to remember what happened and find it again. The source of truth is a git repo with markdown, skills, transcripts, and artifacts. Brainstack adds fast local search, install tooling, health checks, and optional worker routing.</p>
        </div>

        <div class="brainstack-split fade-in">
          <div class="brainstack-lede">
            <h3>Product code and brain data stay separate</h3>
            <p>The Brainstack repo contains the services and CLI. Your shared brain remains its own repo. That split matters: upgrades can refresh services and runtime files without rewriting the knowledge base your tools depend on.</p>
          </div>
          <ul class="brainstack-facts" aria-label="Brainstack facts">
            <li><strong>braind</strong><span>Local service that lets tools search and read the shared brain.</span></li>
            <li><strong>brainctl</strong><span>CLI for install, upgrades, health checks, backup, and recovery.</span></li>
            <li><strong>client bootstrap</strong><span>Codex, Claude, and Cursor get the same shared-brain instructions.</span></li>
            <li><strong>telemux</strong><span>Optional Telegram topics mapped to durable Codex or Claude contexts.</span></li>
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

    <!-- ===== INSTALL ===== -->
    <section class="section" id="install">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Install</p>
          <h2>Linux single-node path</h2>
          <p>This is the Linux/systemd control-host path. Clone the open-source Brainstack repo to <code>~/brainstack</code>, generate a config, smoke-test it, review it, and only then install services.</p>
        </div>

        <div class="brainstack-prereqs fade-in">
          <strong>Before these commands:</strong>
          <span>Read the <a href="https://github.com/Caimeo-com/brainstack/blob/main/docs/fresh-machine-install.md">fresh-machine install guide</a> first. Install Bun, Git, OpenSSH, Tailscale, <code>sshd</code>, and the selected harness CLI. The single-node/control provision path requires passwordless sudo and runs the harness sudo proof by default. macOS clients should use the <code>client-macos</code> bootstrap path instead of <code>systemctl</code>.</span>
        </div>

        <div class="brainstack-install fade-in">
          <div class="code-card">
            <h3>1. Generate config</h3>
            <pre><code>git clone https://github.com/Caimeo-com/brainstack ~/brainstack
cd ~/brainstack
bun install --frozen-lockfile
bun run packages/brainctl/src/main.ts provision \\
  --profile single-node \\
  --out ~/.config/brainstack/brainstack.yaml \\
  --harness codex</code></pre>
          </div>
          <div class="code-card">
            <h3>2. Smoke-test in /tmp</h3>
            <pre><code>cd ~/brainstack
bun run packages/brainctl/src/main.ts smoke \\
  --profile single-node \\
  --config ~/.config/brainstack/brainstack.yaml</code></pre>
          </div>
          <div class="code-card">
            <h3>3. Review, then install</h3>
            <pre><code>cd ~/brainstack
less ~/.config/brainstack/brainstack.yaml
bun run packages/brainctl/src/main.ts init \\
  --profile single-node \\
  --config ~/.config/brainstack/brainstack.yaml
systemctl --user daemon-reload
systemctl --user enable --now braind.service
loginctl enable-linger "$USER"</code></pre>
          </div>
          <div class="code-card">
            <h3>4. Verify and upgrade later</h3>
            <pre><code>cd ~/brainstack
bun run packages/brainctl/src/main.ts doctor \\
  --config ~/.config/brainstack/brainstack.yaml
curl -fsS http://127.0.0.1:8080/healthz
curl -fsS http://127.0.0.1:8080/readyz

# Later product updates:
bun run packages/brainctl/src/main.ts upgrade \\
  --profile single-node \\
  --config ~/.config/brainstack/brainstack.yaml
systemctl --user daemon-reload
systemctl --user restart braind.service</code></pre>
          </div>
        </div>

        <figure class="product-visual product-visual--wide product-visual--simulated brainstack-install-shot fade-in">
          <img
            src="/product/brainstack-install.webp"
            alt="Brainstack install workflow screen with four panels: generate config, smoke-test config, review and install, verify and activate."
            aria-describedby="brainstack-install-desc"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          >
          <p id="brainstack-install-desc" class="sr-only">Install screen showing the same high-level flow as the commands above: generate config, smoke-test the generated config, review and install user services, verify health, and activate later runtime updates.</p>
        </figure>
      </div>
    </section>

    <!-- ===== TRUST BOUNDARY ===== -->
    <section class="section section--alt" id="security">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Trust boundary</p>
          <h2>Private first, explicit when dangerous</h2>
          <p>Brainstack is for trusted private machines. In <code>trusted-tailnet</code> mode, anyone who can reach <code>braind</code> on the private mesh is trusted to read the brain. Tailnet routing, grants, and firewall policy are the read boundary.</p>
        </div>

        <div class="brainstack-trust-grid fade-in">
          <div class="brainstack-trust-card">
            <strong>Start without Telegram</strong>
            <span>The shared-brain service and <code>brainctl</code> work without telemux. Add Telegram only if remote topic control is worth the extra authority.</span>
          </div>
          <div class="brainstack-trust-card">
            <strong>Restrict the control user</strong>
            <span>Telemux accepts messages only from the configured Telegram user. Keep the bot token private and treat compromise as a visibility and disruption risk.</span>
          </div>
          <div class="brainstack-trust-card">
            <strong>Know what yolo mode means</strong>
            <span>If Codex or Claude can run unattended, Telegram becomes a remote path into that harness. Passwordless sudo raises that authority again.</span>
          </div>
          <div class="brainstack-trust-card">
            <strong>Keep workers on the tailnet</strong>
            <span>Use normal OpenSSH over Tailscale, pinned host keys, and <code>doctor --workers</code> before dispatching jobs.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TELEGRAM EXAMPLE ===== -->
    <section class="section" id="telegram">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Telegram control</p>
          <h2>A topic becomes a durable work context</h2>
          <p>Bind a Telegram topic to a host, scratch space, or repo. After that, messages from the allowed user can resume the stored Codex or Claude session for that context.</p>
        </div>

        <figure class="product-visual product-visual--wide product-visual--simulated fade-in">
          <picture>
            <source
              srcset="/product/brainstack-telegram-mobile.webp"
              media="(max-width: 640px)"
              width="853"
              height="1844"
            >
            <img
              src="/product/brainstack-telegram.webp"
              alt="Telegram-style dark topic showing slash commands, worker status, a Codex working state, and a final disk pressure summary."
              aria-describedby="brainstack-telegram-desc"
              width="1672"
              height="941"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="brainstack-telegram-desc" class="sr-only">Telegram-style interface with an ops-worker topic. The operator checks workers and runs a disk-pressure check on build-ubuntu. Brainstack replies with worker health, Codex working state, and a final disk-pressure summary.</p>
        </figure>

        <div class="brainstack-command-grid fade-in">
          <div class="brainstack-command">
            <code>/newctx ops-worker control host</code>
            <span>Create or bind a reusable topic to a machine context.</span>
          </div>
          <div class="brainstack-command">
            <code>/workers</code>
            <span>Check worker reachability, outbox state, and harness readiness.</span>
          </div>
          <div class="brainstack-command">
            <code>/run check the deploy logs</code>
            <span>Send one job into the stored harness session for that topic.</span>
          </div>
          <div class="brainstack-command">
            <code>/crons</code>
            <span>List scheduled reminders or proactive Codex jobs owned by telemux.</span>
          </div>
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
              <h4>Offline outbox</h4>
              <p>If the local Brainstack service is temporarily unavailable, client tools can queue saved items and flush them later.</p>
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
              <h4>Harness bootstrap</h4>
              <p>Codex, Claude, and Cursor get concrete shared-brain guidance from checked-in templates, not vague onboarding prose.</p>
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
            <button class="faq-item__q">Do we need Telegram?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. The core shared-brain service and brainctl CLI work without telemux. Telegram is for operators who want phone-friendly control topics and scheduled routines.
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
        <p>That is enough for the first pass: install Brainstack, prove doctor is clean, connect one harness, then decide whether Telegram and remote workers are worth adding.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--brainstack">Talk about Brainstack</a>
          <a href="/#products" class="btn btn--ghost">Compare the suite</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Brainstack - Shared Brain and Telegram Control Plane',
    description: 'Brainstack is a private shared-brain service, brainctl installer, and optional Telegram control plane for Codex, Claude, Cursor, and tailnet workers.',
    path: '/brainstack/',
    accent: 'brainstack',
    body,
  });
}
