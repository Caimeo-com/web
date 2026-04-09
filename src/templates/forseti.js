import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero hero--product hero--forseti">
      <span class="hero__label">Caimeo Forseti</span>
      <h1>Governed execution<br>for AI agents</h1>
      <p class="hero__sub">
        Put every high-stakes agent action behind typed intent, deterministic policy,
        human approval when required, and a replayable audit trail.
      </p>
      <div class="hero__actions">
        <a href="mailto:contact@bitfalls.com" class="btn btn--forseti">Book a Forseti pilot</a>
        <a href="#how-it-works" class="btn btn--ghost">See how it works</a>
      </div>
    </section>

    <!-- ===== WHY ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">The Problem</p>
          <h2>Agents are useful enough to act.<br>But should they?</h2>
          <p>Most teams already have agents that can draft, plan, and suggest real work.
          But deploying them against production, payments, or outbound communications
          without a control layer is a liability waiting to happen.</p>
        </div>

        <div class="img-placeholder fade-in" style="min-height:260px;max-width:900px;margin:0 auto;" role="img"
          alt="Wide horizontal illustration on dark navy background, approximately 900x260px. LEFT SIDE: A stylized AI agent icon (brain or neural network shape, rendered in cool white/gray) with 5-6 capability labels radiating outward as small pill-shaped tags: 'Deploy to production', 'Send customer emails', 'Process payments', 'Modify database', 'Call external APIs', 'Delete resources'. Each tag has a small lightning bolt icon indicating power. CENTER: A dramatic vertical gap or chasm rendered with a subtle red/orange warning glow at the edges, with the label 'No governance layer' floating in the void. Thin broken lines cross the gap representing uncontrolled actions. A caution/warning triangle icon sits at the top of the gap. RIGHT SIDE: Real-world system icons arranged vertically — a server rack, a dollar sign, an envelope, a database cylinder, a cloud API symbol — each with a subtle red pulse effect suggesting vulnerability. BELOW THE GAP: A glowing cyan bridge labeled 'Forseti' spans the chasm, with a shield checkpoint icon at its center, suggesting the solution. Style: clean vector illustration, premium B2B feel, not cartoonish. Muted colors except for the red warning tones and cyan solution accent.">
          The governance gap — agents can act, but nothing governs whether they should
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section section--alt" id="how-it-works">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">How It Works</p>
          <h2>Three steps to governed execution</h2>
        </div>

        <div class="flow-steps flow-steps--forseti fade-in">
          <div class="flow-step">
            <div class="flow-step__number">1</div>
            <h4>Intent</h4>
            <p>The agent submits a typed request instead of touching privileged tools directly. Every action becomes inspectable before execution.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">2</div>
            <h4>Policy + Approval</h4>
            <p>Forseti applies deterministic policy and returns ALLOW, DENY, or REQUIRES_APPROVAL. The right approvers are routed when needed.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">3</div>
            <h4>Execution</h4>
            <p>Only approved requests reach the deterministic action plane. Every step is recorded to a trace the team can replay later.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== DIAGRAM ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <div class="img-placeholder" style="min-height:300px;max-width:900px;margin:0 auto;" role="img"
          alt="Detailed horizontal technical architecture diagram on dark navy background, approximately 900x300px. Rendered as a left-to-right pipeline with 6 stages connected by glowing cyan flow lines. STAGE 1 — 'Intent Envelope' (left edge): A rounded rectangle with a code/JSON bracket icon, showing a stylized typed request with fields like 'action: deploy', 'target: prod', 'risk: high'. A small agent avatar emits this envelope. STAGE 2 — 'Policy Engine': A hexagonal processing node with sub-items listed vertically in small monospace text: 'allowlists', 'domain checks', 'amount thresholds ≤ $10k', 'secret detection', 'action frequency limits'. Thin branching lines inside suggest evaluation logic. STAGE 3 — 'Decision': Three output paths emerge from the policy engine, each as a colored badge: 'ALLOW' (green pill), 'DENY' (red pill with reason text below), 'REQUIRES_APPROVAL' (amber pill). The DENY path terminates with a stop icon. STAGE 4 — 'Approval Flow' (only on the REQUIRES_APPROVAL path): A Slack-branded card mockup showing approve/deny buttons, with icons below representing three approval modes: single approver (one person icon), quorum (three people with '2 of 3' label), hierarchy (org chart mini-icon). Thin dotted lines show async callback arrows. STAGE 5 — 'Execution Gate': A glowing cyan gate/barrier icon that opens only when approval is terminal. Below it, small icons for n8n, CLI, webhook, and REST API represent the downstream action plane. STAGE 6 — 'Audit Trail' (right edge): A scroll/log icon with stacked horizontal lines representing trace entries, with labels: 'intent received', 'policy evaluated', 'approval requested', 'votes recorded', 'action released', 'callback confirmed'. Each line has a timestamp. OVERALL: Cyan accent color for all lines and active elements. Background is dark with subtle grid texture. Labels use a clean sans-serif for headings and monospace for technical details. Style is technical but polished, suitable for an enterprise B2B audience.">
          Forseti architecture — Intent → Policy → Decision → Approval → Execution → Audit
        </div>
      </div>
    </section>

    <!-- ===== CAPABILITIES ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">Capabilities</p>
          <h2>What Forseti gives your team</h2>
        </div>

        <div class="proof-points fade-in">
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9737;</div>
            <div>
              <h4>Typed intent envelopes</h4>
              <p>Agent actions become inspectable, validatable data structures instead of ad hoc tool calls.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9737;</div>
            <div>
              <h4>Deterministic policy engine</h4>
              <p>Allowlists, domain checks, amount thresholds, action limits, secret detection, and high-risk handling with explicit reasons.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9737;</div>
            <div>
              <h4>Flexible approval trees</h4>
              <p>Single approver, multi-approver with quorum, any_of and all_of logic, and hierarchy-aware routing.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9737;</div>
            <div>
              <h4>Slack-native approval flows</h4>
              <p>Interactive approval cards, slash-command ingress, and async processing so the ACK path stays fast.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9737;</div>
            <div>
              <h4>Execution gating</h4>
              <p>Downstream execution starts only after the latest required approval reaches a terminal state. No race conditions.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9737;</div>
            <div>
              <h4>Full audit trail</h4>
              <p>Trace-level event history, vote records, callback delivery tracking, and replayable approval context for every request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== USE CASES ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">Use Cases</p>
          <h2>Start with the actions that have real-world blast radius</h2>
        </div>

        <div class="use-cases fade-in">
          <div class="use-case">
            <h4>Production deploy approvals</h4>
            <p>Gate deploy, rollback, and destructive maintenance actions before they hit live environments.</p>
          </div>
          <div class="use-case">
            <h4>Payments &amp; vendor operations</h4>
            <p>Require the right quorum before money moves or a vendor communication goes out.</p>
          </div>
          <div class="use-case">
            <h4>Outbound agent communications</h4>
            <p>Let teams review customer or supplier messages when the action crosses a risk threshold.</p>
          </div>
          <div class="use-case">
            <h4>Privileged tool access</h4>
            <p>Keep shells, workflow invocations, tickets, and external APIs behind policy instead of implicit trust.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY CAIMEO ===== -->
    <section class="section">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">Positioning</p>
          <h2>Not another workflow builder</h2>
          <p>Caimeo sits at the risk boundary. Forseti governs whether an action is allowed to reach
          your execution systems — n8n, custom tools, CLI agents, and future runtimes all benefit
          from the same typed-intent boundary.</p>
        </div>

        <div class="img-placeholder fade-in" style="min-height:200px;" role="img"
          alt="Vertical stack diagram on dark navy background, approximately 900x200px. Five horizontal bars stacked vertically with subtle depth shadows, each representing a layer in the agent stack. TOP BAR (thin, muted gray): 'Model Layer' with small logos suggesting OpenAI, Anthropic, open-source models — label reads 'Any LLM'. SECOND BAR (thin, muted gray): 'Agent Framework' with icons for LangChain, CrewAI, custom agents — label reads 'Any framework'. THIRD BAR (prominent, double-height, glowing cyan border and background tint): 'FORSETI — Governance Boundary' in bold text, with a shield/gate icon on the left. This bar visually dominates the stack with a pulsing cyan glow effect and thicker borders to emphasize it as the critical checkpoint. A lock icon sits on each side. FOURTH BAR (thin, muted gray): 'Workflow Runner' with icons for n8n, Make, custom tools, webhooks — label reads 'Any orchestration'. BOTTOM BAR (thin, muted gray): 'Real World' with icons for servers, payment processors, email services, databases, external APIs. Thin vertical arrows connect each layer, but the arrow passing through Forseti is rendered as a checkpoint gate (the arrow breaks and resumes after passing through). Style: clean, layered, subtle 3D depth on each bar, enterprise-quality. The visual emphasis is clearly on Forseti as the critical governance insertion point.">
          Forseti sits above the model vendor, above the agent framework, above the workflow runner
        </div>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">FAQ</p>
          <h2>Common questions</h2>
        </div>

        <div class="faq-list fade-in">
          <div class="faq-item">
            <button class="faq-item__q">Does Forseti replace n8n or other workflow tools?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. Forseti governs whether an action is allowed to reach those systems and records the decision path around it. Your existing workflow tools remain the deterministic action plane.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Does Forseti require a specific model vendor?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. Forseti sits above the model layer and focuses on intent validation, policy, approvals, and execution release. It works with any LLM or agent framework.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Can we start with a single workflow?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Yes. That is the preferred first engagement: one high-value workflow, narrow scope, fast proof of control. Most pilots run 4-6 weeks.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">How does Forseti work with Tyche and Valhalla?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Forseti provides the execution governance for Tyche's simulation-to-production pipeline and for the upcoming Valhalla delivery rooms. Winning policies discovered in Tyche can graduate into Forseti policy packs.
            </div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section" id="contact">
      <div class="container fade-in">
        <p class="section-label" style="color:var(--forseti);">Get Started</p>
        <h2>Put one real workflow behind governed execution</h2>
        <p>Design-partner pilot: one governed workflow, Slack approval path, policy pack, and auditable release flow.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--forseti">Contact about Forseti</a>
          <a href="/" class="btn btn--ghost">Back to suite overview</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Forseti — Governed Execution Gateway for AI Agents',
    description: 'Put every high-stakes agent action behind typed intent, deterministic policy, human approval when required, and a replayable audit trail.',
    path: '/forseti/',
    accent: 'forseti',
    body,
  });
}
