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

        <div class="img-placeholder fade-in" style="min-height:320px;max-width:900px;margin:0 auto;" role="img"
          alt="Target dimensions: 900x320px, rendered flat (no glow, no gradients). Two code cards side by side on the dark navy page background. Each card is ~430px wide, has a 1px subtle border, a dark panel background (slightly lighter than the page), a small header strip with a title, and a monospace code body. LEFT CARD, titled 'Before Forseti' in muted gray, body: a Python snippet calling slack.post_message() with channel='#payments' and text='Paid invoice 4821 for $12,400', followed immediately by stripe.charge(customer='cus_9f…', amount=1240000). Code is in a neutral off-white monospace, no syntax highlighting. Below the code, a one-line caption in small dim gray: 'No audit. No review. No verdict. The agent already moved money.' RIGHT CARD, titled 'With Forseti' in cyan, with a 1px cyan border accent on the title strip only (rest of the border is the same neutral hairline). Body: a Python snippet calling forseti.submit_intent() with a dict literal: action='payments.transfer', amount=12_400, currency='USD', recipient='cus_9f…', reason='Invoice 4821', risk='high'. Below the snippet, a comment line in cyan: '# verdict: REQUIRES_APPROVAL (finance quorum, 2-of-3)'. Below that, a one-line caption in small dim gray: 'Typed. Inspectable. Gated. Replayable.' The two cards are separated by 24px of empty space. No icons, no arrows, no bridges, no glows. The whole image should look like a cropped slide from an engineering README, not a marketing illustration.">
          Before / After — what governed execution actually changes in the agent code
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

    <!-- ===== SEQUENCE DIAGRAM ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <div class="img-placeholder" style="min-height:380px;max-width:900px;margin:0 auto;" role="img"
          alt="Target dimensions: 900x380px. A UML-style sequence diagram on the dark navy page background, drawn as if on a whiteboard. No glows, no icons, no gradients. Four vertical lanes across the top, equally spaced, each with a small header label in neutral off-white: 'Agent', 'Forseti', 'Slack approvers', 'n8n action plane'. Each lane has a thin dashed vertical lifeline dropping down to the bottom of the image. Horizontal message arrows between lanes from top to bottom, each labelled in small monospace text. Message 1 (Agent to Forseti): solid arrow labelled 'submit_intent(payments.transfer, $12,400)'. Message 2 (Forseti self-call, small loop arrow on the Forseti lane): labelled 'policy_eval() → REQUIRES_APPROVAL (amount > $10k)'. Message 3 (Forseti to Slack approvers): solid arrow labelled 'approval_request(quorum=2/3)'. Message 4 (Slack approvers to Forseti): dashed return arrow labelled 'approve(alice)'. Message 5 (Slack approvers to Forseti): dashed return arrow labelled 'approve(bob)'. Message 6 (Forseti to n8n action plane): THICK solid arrow labelled 'release(intent_id)' — this is the visual centerpiece of the gate, slightly heavier stroke than the other arrows, and coloured cyan. Message 7 (n8n action plane to Forseti): dashed return arrow labelled 'execution_complete'. Message 8 (Forseti self-call, small loop arrow): labelled 'audit.write(trace_id=t_8f21…)'. Right-margin annotations in dim gray: next to Message 3, small label 'async'; next to Message 6, small label 'P50: 2m 14s'; at the very bottom, a small row 'audit hash: 0x4b7e…a1' in dim gray monospace. Colour: the cyan accent is used ONLY on the release arrow, the audit hash row, and the Forseti lane header. Everything else is off-white on navy. The visual language should be unmistakably 'engineer-drawn sequence diagram', not a marketing illustration.">
          One real intent, end to end — sequence through Forseti
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
              <h4>Full audit trail</h4>
              <p>Trace-level event history, vote records, callback delivery tracking, and replayable approval context for every request that ever reached policy.</p>
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
          your execution systems - n8n, custom tools, CLI agents, and future runtimes all benefit
          from the same typed-intent boundary.</p>
        </div>

        <div class="img-placeholder fade-in" style="min-height:260px;" role="img"
          alt="Target dimensions: 900x260px. A clean five-row layered stack diagram, like a system architecture page in engineering documentation. No glows, no 3D, no pulses, no shields. Five equal-height horizontal rows, each row is a simple rectangle with a 1px hairline border on the dark navy page background. Each row has three columns of text: a LEFT label (layer name, bold off-white), a CENTRE label (one-line role, dim gray), and a RIGHT label (comma-separated list of real vendors in smaller monospace dim gray). Row 1 (top): 'Model layer' | 'Any LLM' | 'Anthropic, OpenAI, Mistral, Llama, local'. Row 2: 'Agent framework' | 'Any framework' | 'LangChain, CrewAI, Claude Agent SDK, custom'. Row 3 (middle, THIS IS THE FORSETI ROW): 'Forseti' | 'Governance boundary' | 'typed intents · deterministic policy · approvals · audit'. This row has ONE distinguishing feature only: a 1px CYAN border instead of the neutral hairline, and a very slightly darker background panel. No glow. No shield. No lock icons. The emphasis comes purely from the border colour change. Row 4: 'Workflow runner' | 'Any orchestration' | 'n8n, Temporal, Make, GitHub Actions, custom'. Row 5 (bottom): 'Real world' | 'Side-effects' | 'prod systems, money movement, external APIs, customer comms'. Between rows, thin vertical connector lines (1px, neutral gray) run down the centre of the stack from row 1 all the way to row 5. Where the connector enters row 3 from row 2, and where it exits row 3 into row 4, the line is cyan instead of gray. That is the only other cyan in the image. The whole thing should look like a page from a design doc, not from a pitch deck.">
          The agent stack, labelled honestly — Forseti is one clean row, not a glowing centrepiece
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
        <h2>Bring one workflow. We&rsquo;ll tell you whether it belongs in Forseti.</h2>
        <p>If it does, the design-partner pilot is 4&ndash;6 weeks: one governed workflow, a Slack approval path, a policy pack, and an auditable release flow. If it doesn&rsquo;t, we&rsquo;ll tell you whether Tyche or Valhalla fits better.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--forseti">Scope a Forseti pilot</a>
          <a href="/#products" class="btn btn--ghost">Compare the suite</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Forseti - Governed Execution Gateway for AI Agents',
    description: 'Put every high-stakes agent action behind typed intent, deterministic policy, human approval when required, and a replayable audit trail.',
    path: '/forseti/',
    accent: 'forseti',
    body,
  });
}
