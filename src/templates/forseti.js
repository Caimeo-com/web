import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero hero--product hero--forseti">
      <span class="hero__label">Caimeo Forseti Evidence Plane</span>
      <h1>Audit-ready AI action governance</h1>
      <p class="hero__sub">
        Put every high-stakes agent action behind typed intent, deterministic policy,
        human approval when required, and exportable evidence for regulated workflows.
      </p>
      <div class="hero__actions">
        <a href="mailto:contact@bitfalls.com" class="btn btn--forseti">Book a Forseti pilot</a>
        <a href="/docs/forseti/" class="btn btn--ghost">Read the docs</a>
      </div>
    </section>

    <!-- ===== WHY ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">The Problem</p>
          <h2>Agents are useful enough to act.<br>Can you prove how they acted?</h2>
          <p>Most teams already have agents that can draft, plan, and suggest real work.
          But deploying them against production, payments, or outbound communications
          without an evidence-producing control layer leaves security, compliance, and platform teams guessing after the fact.</p>
        </div>

        <figure class="product-visual fade-in">
          <picture>
            <source
              srcset="/product/forseti-before-after-mobile.webp"
              media="(max-width: 640px)"
              width="760"
              height="1400"
            >
            <img
              src="/product/forseti-before-after.webp"
              alt="Before and after code comparison showing direct Slack and Stripe transfer calls replaced by a Forseti typed pay intent with an approval verdict."
              aria-describedby="forseti-before-after-desc"
              width="1800"
              height="640"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="forseti-before-after-desc" class="sr-only">Before Forseti, the agent posts to the payments Slack channel and calls stripe.transfer for invoice 4821 without review. With Forseti, the agent submits schema version 0.1, intent Pay invoice 4821, action type pay, risk high, recipient Microsoft, amount_usd 7500, and currency USD. Forseti returns REQUIRES_APPROVAL with 2 c_level or 10 member approvals.</p>
          <figcaption>Before / After — what governed execution actually changes in the agent code</figcaption>
        </figure>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section section--alt" id="how-it-works">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">How It Works</p>
          <h2>Three steps to audit-ready execution</h2>
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
            <p>Only approved requests reach the deterministic action plane. Forseti writes a hash-chained trace, evidence bundle, and incident pack when needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SEQUENCE DIAGRAM ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <figure class="product-visual">
          <picture>
            <source
              srcset="/product/forseti-sequence-mobile.webp"
              media="(max-width: 640px)"
              width="760"
              height="1580"
            >
            <img
              src="/product/forseti-sequence.webp"
              alt="Sequence diagram showing an agent submitting a pay intent to Forseti, approval in Slack, release to n8n, and audit writing."
              aria-describedby="forseti-sequence-desc"
              width="1800"
              height="760"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="forseti-sequence-desc" class="sr-only">Sequence: Agent submits pay intent amount_usd 7500 to Forseti. Forseti evaluates policy and returns REQUIRES_APPROVAL because pay requires approval and the amount is above the 1000 dollar policy limit. Forseti sends an approval request requiring either 2 c_level approvals or 10 member approvals. The CFO and COO approve. Forseti releases the intent to the n8n action plane, records execution_complete, and writes audit trace t_8f21 with hash 0x4b7e...a1.</p>
          <figcaption>One real intent, end to end — sequence through Forseti</figcaption>
        </figure>
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
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9993;</div>
            <div>
              <h4>Typed intent envelopes</h4>
              <p>Agent actions become inspectable, validatable data structures. Intents stay held until policy reaches a terminal verdict — no race conditions at the gate.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9878;</div>
            <div>
              <h4>Deterministic policy engine</h4>
              <p>Allowlists, domain checks, amount thresholds, action limits, secret detection, and high-risk handling with explicit reasons attached to every verdict.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#10070;</div>
            <div>
              <h4>Flexible approval trees</h4>
              <p>Single approver, multi-approver with quorum, any_of and all_of logic, and hierarchy-aware routing for organisations that already have one.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9672;</div>
            <div>
              <h4>Slack-native approval flows</h4>
              <p>Interactive approval cards, slash-command ingress, and async processing so the ACK path stays fast even under quorum voting.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#8644;</div>
            <div>
              <h4>Action plane integrations</h4>
              <p>Once released, intents fan out into your existing orchestration: n8n, Temporal, webhooks, GitHub Actions, custom runners. Forseti stays above them all.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#8801;</div>
            <div>
              <h4>Evidence bundle export</h4>
              <p>Hash-chained traces, vote records, callback delivery, signed JSON bundles, CSV timelines, and incident reconstruction packs for auditor review.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9638;</div>
            <div>
              <h4>Model, tool, and vendor registry</h4>
              <p>Attach model versions, prompt hashes, data classifications, owners, APIs, vendors, and workflow context to each governed action.</p>
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
            <p>A release agent proposes a Friday 17:00 deploy. Forseti routes it to the on-call SRE channel with quorum 2-of-3, holds the intent until two approvers ACK in Slack, then releases into the n8n deploy workflow. An automatic rollback intent is pre-armed if the post-deploy audit flag fires. Every step lands in the trace, including who approved and how long it took.</p>
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
          <div class="use-case">
            <h4>Regulated workflow evidence</h4>
            <p>Support NIS2/ZKS, DORA, and AI Act readiness with concrete records of what the agent intended, what policy decided, who approved, and what executed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY CAIMEO ===== -->
    <section class="section">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--forseti);">Positioning</p>
          <h2>Not a generic compliance platform</h2>
          <p>Caimeo sits at the risk boundary. Forseti governs whether an action is allowed to reach
          your execution systems and records the evidence around that decision. It supports regulated
          workflow readiness without pretending to replace legal counsel, your SIEM, or your GRC stack.</p>
        </div>

        <figure class="product-visual fade-in">
          <picture>
            <source
              srcset="/product/forseti-stack-mobile.webp"
              media="(max-width: 640px)"
              width="760"
              height="1040"
            >
            <img
              src="/product/forseti-stack.webp"
              alt="Five-row agent stack diagram showing Forseti as the governance boundary between agent frameworks and workflow runners."
              aria-describedby="forseti-stack-desc"
              width="1800"
              height="520"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="forseti-stack-desc" class="sr-only">Stack rows from top to bottom: Model layer, any LLM, Anthropic, OpenAI, Mistral, Llama, local. Agent framework, any framework, LangChain, CrewAI, Claude Agent SDK, custom. Forseti, governance boundary, typed intents, deterministic policy, approvals, audit. Workflow runner, any orchestration, n8n, Temporal, Make, GitHub Actions, custom. Real world, side effects, production systems, money movement, external APIs, customer communications.</p>
          <figcaption>The agent stack, labelled honestly — Forseti is one clean row, not a glowing centrepiece</figcaption>
        </figure>
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
            <button class="faq-item__q">Does Forseti make us NIS2, DORA, or AI Act compliant?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. Forseti gives regulated teams execution controls, human-approval trails, model/tool context, and exportable evidence bundles that support readiness work. It does not classify legal obligations or certify compliance.
            </div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section" id="contact">
      <div class="container fade-in">
        <p class="section-label" style="color:var(--forseti);">Get Started</p>
        <h2>Bring one regulated workflow. We&rsquo;ll turn it into an evidence pilot.</h2>
        <p>The design-partner pilot is 4&ndash;6 weeks: one governed workflow, a Slack approval path, one readiness-oriented control pack, an evidence dashboard, and an exportable audit bundle.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--forseti">Scope a Forseti pilot</a>
          <a href="/docs/forseti/" class="btn btn--ghost">Review Forseti docs</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Forseti - AI Action Governance and Approval Evidence',
    description: 'Forseti puts high-stakes AI agent actions behind typed intents, deterministic policy, human approval, execution release, and exportable evidence bundles.',
    path: '/forseti/',
    accent: 'forseti',
    schema: [
      {
        '@type': 'Service',
        '@id': 'https://caimeo.com/forseti/#service',
        name: 'Forseti',
        serviceType: 'AI action governance and approval evidence',
        url: 'https://caimeo.com/forseti/',
        description: 'AI action governance service for high-stakes agent workflows using typed intents, deterministic policy, human approvals, execution release, and evidence bundles.',
        areaServed: 'Worldwide',
        provider: { '@id': 'https://caimeo.com/#organization' },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://caimeo.com/forseti/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does Forseti replace n8n or other workflow tools?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Forseti governs whether an action is allowed to reach those systems and records the decision path around it. Existing workflow tools remain the deterministic action plane.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Forseti require a specific model vendor?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Forseti sits above the model layer and focuses on intent validation, policy, approvals, and execution release. It works with any LLM or agent framework.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can we start with a single workflow?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The preferred first engagement is one high-value workflow, narrow scope, and a fast proof of control. Most pilots run 4-6 weeks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Forseti make us NIS2, DORA, or AI Act compliant?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Forseti gives regulated teams execution controls, human-approval trails, model/tool context, and exportable evidence bundles that support readiness work. It does not classify legal obligations or certify compliance.',
            },
          },
        ],
      },
    ],
    body,
  });
}
