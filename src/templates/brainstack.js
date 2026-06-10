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
        <a href="#install" class="btn btn--ghost">Deploy Brainstack</a>
      </div>
      <ul class="brainstack-hero-points" aria-label="Brainstack outcomes">
        <li>One shared brain that grows as work happens</li>
        <li>Same context for Codex, Claude, Cursor, and scripts</li>
        <li>Private control across Linux, Mac, Telegram, and tailnet workers</li>
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

    <!-- ===== INSTALL ===== -->
    <section class="section" id="install">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Deploy</p>
          <h2>Start with the shared brain, then add machines</h2>
          <p>The core Brainstack path is a private control host running <code>braind</code> over a shared-brain repo. After that, <code>brainctl</code> can enroll Mac or Linux clients, bootstrap harness instructions, check workers, and optionally connect Telegram through telemux.</p>
        </div>

        <div class="brainstack-role-split fade-in" aria-label="Choose your Brainstack install path">
          <a href="#control-host-install">
            <strong>1. Stand up Brainstack</strong>
            <span>Install <code>braind</code> on a private control host tied to the shared-brain repo.</span>
          </a>
          <a href="#client-install">
            <strong>2. Enroll clients</strong>
            <span>Add client machines; the Mac binary path avoids Bun and source checkout.</span>
          </a>
          <a href="#agent-install">
            <strong>Agent-assisted install</strong>
            <span>Give Codex or another harness this page and a private invite; it should ask for the missing role and prerequisites.</span>
          </a>
          <a href="#telegram-file-send">
            <strong>3. Add control surfaces</strong>
            <span>Enable Telegram topics, file relay, and workers only when they are useful.</span>
          </a>
        </div>

        <div class="brainstack-prereqs fade-in">
          <strong>Before you start:</strong>
          <span>The control host needs Bun, Git, OpenSSH, Tailscale, a selected harness, and the shared-brain repo. Client machines need Git, SSH, Tailscale, and the harness they will run. macOS clients can use the compiled <code>brainctl</code> installer without Bun or a Brainstack source checkout; Linux clients follow the fresh-machine/source-run path for now. If an AI harness is doing the install, it should ask whether this machine is joining an existing Brainstack or creating a new one, then ask for the role and a private invite when needed. Read the <a href="https://github.com/Caimeo-com/brainstack/blob/main/docs/fresh-machine-install.md">fresh-machine guide</a> and the <a href="https://github.com/Caimeo-com/brainstack/blob/main/docs/quickstart-client-macos.md">Mac client quickstart</a> for the full flow.</span>
        </div>

        <div class="brainstack-install fade-in" id="control-host-install">
          <div class="code-card">
            <h3>1. Generate control-host config</h3>
            <pre><code>git clone https://github.com/Caimeo-com/brainstack ~/brainstack
cd ~/brainstack
bun install --frozen-lockfile
bun run packages/brainctl/src/main.ts provision \\
  --profile single-node \\
  --out ~/.config/brainstack/brainstack.yaml \\
  --harness codex</code></pre>
          </div>
          <div class="code-card">
            <h3>2. Smoke-test, install, verify</h3>
            <pre><code>bun run packages/brainctl/src/main.ts smoke \\
  --profile single-node \\
  --config ~/.config/brainstack/brainstack.yaml

less ~/.config/brainstack/brainstack.yaml
bun run packages/brainctl/src/main.ts init \\
  --profile single-node \\
  --config ~/.config/brainstack/brainstack.yaml
systemctl --user daemon-reload
systemctl --user enable --now braind.service
loginctl enable-linger "$USER"

bun run packages/brainctl/src/main.ts doctor \\
  --config ~/.config/brainstack/brainstack.yaml</code></pre>
          </div>
        </div>

        <div class="brainstack-note fade-in">
          <strong>What this gives you:</strong>
          <span>A private shared-brain service, a versioned CLI, deterministic runtime files, and a doctor baseline before clients, Telegram topics, or remote workers are added.</span>
        </div>

        <details class="brainstack-secondary-install fade-in" id="agent-install" open>
          <summary><h3>Ask an AI harness to install Brainstack</h3></summary>
          <p>A fresh Codex, Claude, or other coding harness can help with setup, but it cannot invent private enrollment material. Point it at this page and the Brainstack docs, then expect it to ask for the missing role, invite, and prerequisites instead of guessing tokens, hostnames, or tailnet state.</p>
          <div class="brainstack-install">
            <div class="code-card">
              <h3>Good first prompt on a new MacBook</h3>
              <pre><code>Install Brainstack on this machine.
Use https://caimeo.com/brainstack/ and the GitHub docs.
This machine is joining an existing Brainstack.
Ask me for the private invite when you need it.
Default to client unless I say operator.</code></pre>
            </div>
            <div class="code-card">
              <h3>The harness should ask</h3>
              <pre><code>1. Existing Brainstack or new control host?
2. Role: client, operator, control, or worker?
3. Which harness should Brainstack bootstrap: Codex, Claude, or Cursor?
4. Do you have a private bs1_... invite file or paste?
5. Are Git, SSH, Tailscale, and the selected harness installed and logged in?</code></pre>
            </div>
            <div class="code-card">
              <h3>Private invite path</h3>
              <pre><code># The agent should avoid raw invite values in shell history.
chmod 600 ~/brainstack-invite.txt
RELEASE_TAG=vX.Y.Z
INSTALL_URL="https://github.com/Caimeo-com/brainstack/releases/download/$RELEASE_TAG/install.sh"
curl -fsSL "$INSTALL_URL" | sh -s -- \\
  --invite-file ~/brainstack-invite.txt \\
  --skills-profile client

brainctl doctor --config ~/.config/brainstack/brainstack.yaml</code></pre>
            </div>
            <div class="code-card">
              <h3>Stop when prerequisites are missing</h3>
              <pre><code>If Tailscale is missing or not logged in:
  tell the user exactly that
  wait for install/login
  rerun doctor after the user confirms

If there is no private invite:
  ask the control-host operator to create one
  do not fabricate tokens, remotes, or host pins</code></pre>
            </div>
          </div>
          <div class="brainstack-note">
            <strong>Role defaults:</strong>
            <span>Use <code>client</code> for ordinary machines, <code>operator</code> for an admin daily driver that should receive every public Brainstack skill, <code>control</code> for the private host running <code>braind</code>, and <code>worker</code> for a machine that mainly runs delegated jobs. Run <code>doctor --write-smoke</code> only when the user explicitly wants to prove mutating pushback.</span>
          </div>
        </details>

        <figure class="product-visual product-visual--wide product-visual--simulated brainstack-install-shot fade-in">
          <img
            src="/product/brainstack-install.webp"
            alt="Brainstack control-host install workflow screen with four panels: generate config, smoke-test config, review and install, verify and activate."
            aria-describedby="brainstack-install-desc"
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
          >
          <figcaption><span class="simulation-label">Simulated product view</span> Control-host setup flow for Brainstack admins building <code>braind</code> and runtime services.</figcaption>
          <p id="brainstack-install-desc" class="sr-only">Control-host install screen showing the high-level service setup flow: generate config, smoke-test the generated config, review and install user services, verify health, and activate later runtime updates.</p>
        </figure>

        <details class="brainstack-secondary-install fade-in" id="client-install">
          <summary><h3>Enroll client machines</h3></summary>
          <p>Create a private invite on the control host, then hand the <code>bs1_...</code> value to the client operator over a private channel. The invite can carry shared-brain config, an optional import token, pinned SSH host keys, and control-host details for file relay. macOS gets the lowest-friction binary path; Linux clients can use the same config model through the fresh-machine/source-run path.</p>
          <div class="brainstack-install">
            <div class="code-card">
              <h3>Create the invite</h3>
              <pre><code>brainctl invite create \\
  --config ~/.config/brainstack/brainstack.yaml \\
  --import-token-file ~/brain-import-token.txt \\
  --control-ssh operator@brain-control \\
  --ssh-known-hosts-file ~/.config/brainstack/control_ssh_known_hosts \\
  --control-repo ~/brainstack</code></pre>
            </div>
            <div class="code-card">
              <h3>On macOS, install brainctl and enroll</h3>
              <pre><code># After your operator publishes a Brainstack release:
BASE=https://github.com/Caimeo-com/brainstack
RELEASE_TAG=vX.Y.Z
REL="releases/download/$RELEASE_TAG/install.sh"
curl -fsSL "$BASE/$REL" | sh

# Paste the bs1_... invite your operator gave you.</code></pre>
            </div>
            <div class="code-card">
              <h3>Verify any enrolled client</h3>
              <pre><code>brainctl doctor --config ~/.config/brainstack/brainstack.yaml</code></pre>
            </div>
            <div class="code-card">
              <h3>Optional Codex skills</h3>
              <pre><code>brainctl skills install --target codex --profile client</code></pre>
            </div>
          </div>
        </details>

        <details class="brainstack-secondary-install fade-in" id="telegram-file-send">
          <summary><h3>Optional: Telegram control and file relay</h3></summary>
          <p>When telemux is enabled on the control host and a Telegram control chat or context exists, enrolled machines can stream files to telemux and receive them in Telegram without storing Telegram bot secrets locally. Telegram is a control surface on top of Brainstack, not a requirement for the shared brain.</p>
          <div class="brainstack-install">
            <div class="code-card">
              <h3>Enable telemux on the control host</h3>
              <pre><code># After enabling telemux in brainstack.yaml:
bun run packages/brainctl/src/main.ts apply-runtime \\
  --config ~/.config/brainstack/brainstack.yaml
vi ~/.config/brainstack/telemux.secrets.env
systemctl --user enable --now telemux.service</code></pre>
            </div>
            <div class="code-card">
              <h3>Send a file from an enrolled machine</h3>
              <pre><code>brainctl telegram send-file \\
  --config ~/.config/brainstack/brainstack.yaml \\
  --file ~/Downloads/report.pdf \\
  --caption "Report from my machine"</code></pre>
            </div>
          </div>
        </details>

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
          <div class="brainstack-trust-card">
            <strong>Keep bot secrets on control</strong>
            <span>Client file send uses SSH to reach telemux. Telegram provider credentials stay on the control host, not on every enrolled machine.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TELEGRAM EXAMPLE ===== -->
    <section class="section" id="telegram">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--brainstack);">Telegram control</p>
          <h2>A topic becomes a durable work context and file drop</h2>
          <p>Bind a Telegram topic to a host, scratch space, or repo. After that, messages from the allowed user are routed before the harness starts: simple liveness and usage checks are answered locally, lightweight context questions stay cheap, and real work resumes the stored Codex or Claude session. Enrolled machines can also send files back to your phone through the control host.</p>
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
          <figcaption><span class="simulation-label">Simulated product view</span> Telegram topic control for a private Brainstack context.</figcaption>
          <p id="brainstack-telegram-desc" class="sr-only">Telegram-style interface with an ops-worker topic. The operator checks workers and runs a disk-pressure check on build-ubuntu. Brainstack replies with worker health, Codex working state, and a final disk-pressure summary.</p>
        </figure>

        <div class="brainstack-command-panel fade-in">
          <h3>From Telegram</h3>
          <div class="brainstack-command-grid">
            <div class="brainstack-command">
              <code>/newctx ops-worker control host</code>
              <span>Create or bind a reusable topic to a machine context.</span>
            </div>
            <div class="brainstack-command">
              <code>/workers</code>
              <span>Check worker reachability, outbox state, and harness readiness.</span>
            </div>
            <div class="brainstack-command">
              <code>You up?</code>
              <span>Get a local control-plane answer without waking a full harness session.</span>
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
          <h3>From an enrolled machine</h3>
          <div class="brainstack-command-grid brainstack-command-grid--single">
            <div class="brainstack-command">
              <code>brainctl telegram send-file --config ~/.config/brainstack/brainstack.yaml --file ~/Downloads/report.pdf</code>
              <span>Stream a local file over SSH to telemux so Telegram receives it without client-side bot secrets.</span>
            </div>
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
    title: 'Caimeo Brainstack - Shared Brain and Agent Context Engine',
    description: 'Brainstack is a private shared-brain service and context engine with local search, brainctl operations, optional Telegram control, file relay, and tailnet workers for Codex, Claude, and Cursor.',
    path: '/brainstack/',
    accent: 'brainstack',
    body,
  });
}
