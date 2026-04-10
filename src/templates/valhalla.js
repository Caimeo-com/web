import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero hero--product hero--valhalla">
      <span class="hero__label">Caimeo Valhalla</span>
      <h1>Turn specs into shipped outcomes<br>with a governed agent room</h1>
      <p class="hero__sub">
        Clarify, plan, build, audit, and converge with explicit roles,
        persistent memory, and controlled tool access.
      </p>
      <div class="hero__actions">
        <a href="#contact" class="btn btn--valhalla">Apply for a build room</a>
        <a href="#how-it-works" class="btn btn--ghost">See the delivery loop</a>
      </div>
    </section>

    <!-- ===== WHY ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--valhalla);">The Problem</p>
          <h2>Multi-agent demos skip the hard part</h2>
          <p>Unanswered questions, conflicting opinions, missing memory, and shallow audits.
          Most multi-agent systems treat these as friction. Valhalla treats them as first-class
          product concerns that determine whether the output is actually shippable.</p>
        </div>

        <div class="img-placeholder fade-in" style="min-height:260px;max-width:900px;margin:0 auto;" role="img"
          alt="Wide horizontal split-comparison illustration on dark navy background, approximately 900x260px. A vertical dividing line in the center with a 'VS' label. LEFT HALF - 'Typical multi-agent' (rendered in muted grays and dull reds): 5-6 identical generic robot/agent avatars clustered in a disorganized blob, all talking at once (overlapping speech bubbles with conflicting text fragments: 'I think we should...', 'Already done!', 'Wait, who is doing...', 'What was the plan?'). No visible structure - lines of communication cross randomly like tangled spaghetti. Below: scattered output artifacts (code snippets, documents) with red X marks and '?' symbols. Labels around the chaos: 'No roles', 'No memory', 'No turn order', 'No audit trail', 'No done criteria'. The overall impression is entropy. RIGHT HALF - 'Valhalla delivery room' (rendered with warm amber/gold accents): A clean circular arrangement of 5 distinct role avatars, each with a unique icon and label: LEAD (crown icon, gold) at 12 o'clock position, PLANNER (blueprint/map icon, warm amber) at 2 o'clock, DEVELOPER (code brackets icon, amber) at 5 o'clock, DEVELOPER 2 (gear icon, amber) at 7 o'clock, AUDITOR (magnifying glass icon, amber) at 10 o'clock. Clean directional arrows flow clockwise between them showing turn order. CENTER of the circle: A glowing gold cylinder labeled 'Project Memory' with sub-labels: 'Decisions', 'Questions', 'Artifacts', 'Failures'. Lines connect each role to the memory core. Below the circle: neat, stacked output artifacts with green checkmarks. Labels: 'Named roles', 'Turn order', 'Persistent memory', 'Convergence criteria'. Style: the contrast should be dramatic - left side feels anxious and messy, right side feels calm, structured, and professional.">
          Freestyle agent chaos vs. structured delivery with roles, memory, and convergence
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section section--alt" id="how-it-works">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--valhalla);">How It Works</p>
          <h2>A delivery loop, not a chat room</h2>
        </div>

        <div class="flow-steps flow-steps--valhalla fade-in">
          <div class="flow-step">
            <div class="flow-step__number">1</div>
            <h4>Q&amp;A Rounds</h4>
            <p>Roles read the spec, surface ambiguity, and force unanswered questions into a visible register before building starts.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">2</div>
            <h4>Build Loop</h4>
            <p>Lead, planner, developers, and specialists take turns with explicit output contracts rather than collapsing into one undifferentiated agent blob.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">3</div>
            <h4>Audit + Convergence</h4>
            <p>Security, performance, DX, UX, and other auditors report objections until the room can justify stopping.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STATE MACHINE DIAGRAM ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <div class="img-placeholder" style="min-height:340px;max-width:900px;margin:0 auto;" role="img"
          alt="Detailed state machine diagram on dark navy background, approximately 900x340px, rendered as a horizontal flow with a prominent loop-back. Uses amber/gold accent lines throughout. STAGE 1 - 'Intake' (left edge): A document stack icon with items listed: 'Load PRD/spec', 'Clone repository', 'Parse constraints', 'Set budgets'. An arrow labeled 'start' enters from the left. A gold-bordered box. STAGE 2 - 'Interrogation': A question mark cluster icon inside a gold-bordered box. Inside: 'Structured Q&A rounds' with sub-items: 'Each role reads the spec', 'Ambiguity surfaced into Question Register', 'Owner answers or defers', 'Repeat until questions < threshold'. A counter shows 'Round 3/5'. Small avatar icons of Lead, Planner, Auditor each contribute questions. STAGE 3 - 'Planning': A blueprint/gantt icon in gold-bordered box. Inside: 'Milestone plan', 'Task decomposition', 'Risk map', 'Dependency graph'. Shows a mini task board with 3-4 task cards. Arrow leads to the loop section. THE RALPH LOOP (visually emphasized with thicker borders and a subtle gold background glow): Three boxes arranged in a cycle: STAGE 4 - 'Build': Code brackets icon, 'Developer turns in isolated worktrees', 'Explicit output contracts per task', 'Lead reviews and integrates'. Shows a mini code diff. STAGE 5 - 'Audit': Magnifying glass icon, 'Named specialist passes' with sub-labels in a vertical list: 'Security auditor', 'Performance auditor', 'DX auditor', 'UX auditor', 'Edge-case auditor'. Each produces a finding. STAGE 6 - 'Ralph Decision': A diamond/decision node with two exits: 'Unresolved issues?' YES arrow loops back to Build (labeled 'Convert findings → fix tasks, loop++'), NO arrow exits the loop. A loop counter shows 'Ralph iteration 2, budget: 7/10 remaining'. The loop-back arrow is thick and prominent, curving from Ralph back to Build with a gold glow. STAGE 7 - 'Done' (right edge): A checkmark in a circle, gold-bordered. Criteria listed: 'All acceptance criteria met', 'No unresolved audit objections', 'Budget not exceeded', 'Operator sign-off received'. BELOW THE FLOW (spanning the full width): A horizontal bar labeled 'Persistent Project Memory' (gold, slightly transparent) with icons for each memory type: 'Decision log', 'Question register', 'Artifact index', 'Failure memory', 'Role memory'. Thin vertical lines connect this bar to every stage above, showing all stages read and write to memory. Style: technical state-machine aesthetic, the Ralph Loop is the visual centerpiece, conveying iterative improvement under governance.">
          Valhalla state machine - Intake → Interrogation → Planning → Build → Audit → Ralph Loop → Done
        </div>
      </div>
    </section>

    <!-- ===== CAPABILITIES ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--valhalla);">Capabilities</p>
          <h2>What Valhalla gives your team</h2>
        </div>

        <div class="proof-points fade-in">
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9733;</div>
            <div>
              <h4>Config-driven project rooms</h4>
              <p>Per-project role rosters, model adapters, budgets, and done criteria defined in config rather than hidden chat state.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9733;</div>
            <div>
              <h4>First-class question rounds</h4>
              <p>Building starts only after ambiguity has been pushed down enough to be actionable. Clarification is the product, not friction.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9733;</div>
            <div>
              <h4>Persistent project memory</h4>
              <p>Decision log, question register, artifact index, failure memory, and role memory - all inspectable and versioned.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9733;</div>
            <div>
              <h4>Ralph-loop iteration</h4>
              <p>If unresolved issues remain, the system generates the next task pack and loops - bounded by budgets, stop rules, and escalation thresholds.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9733;</div>
            <div>
              <h4>Governed tool access</h4>
              <p>Dangerous actions flow through Forseti. Evaluation loops run through Tyche harnesses. No ad hoc privileged execution.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9733;</div>
            <div>
              <h4>Named specialist roles</h4>
              <p>Lead, planner, developers, and auditors each have a job, a model adapter, a budget, and a turn in the loop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== USE CASES ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--valhalla);">Use Cases</p>
          <h2>Where Valhalla creates the most value</h2>
        </div>

        <div class="use-cases fade-in">
          <div class="use-case">
            <h4>Selective partner builds</h4>
            <p>Run one high-value spec through a more disciplined agent room than ordinary single-agent coding allows.</p>
          </div>
          <div class="use-case">
            <h4>Audit-heavy builds</h4>
            <p>Ideal when security, performance, edge cases, and product clarity all matter enough to deserve named specialist passes.</p>
          </div>
          <div class="use-case">
            <h4>Internal delivery engine</h4>
            <p>Use Valhalla on your own projects to harden the loop and prove better output before wider deployment.</p>
          </div>
          <div class="use-case">
            <h4>Suite pull-through</h4>
            <p>Valhalla generates plans and changes, Tyche rehearses and measures them, and Forseti governs anything that touches live systems.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PREMIUM POSITIONING ===== -->
    <section class="section">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--valhalla);">Positioning</p>
          <h2>Selective and premium by design</h2>
          <p>Valhalla is not a mass-market coding assistant. It is a managed delivery room
          for teams with valuable specs, meaningful delivery risk, and a willingness to
          engage in a premium structured model. Early access is selective.</p>
        </div>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--valhalla);">FAQ</p>
          <h2>Common questions</h2>
        </div>

        <div class="faq-list fade-in">
          <div class="faq-item">
            <button class="faq-item__q">Is Valhalla fully autonomous?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. It is built around clarification, governance, and inspectable loops rather than unchecked autonomy. The clarification stage is part of the product, not friction.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Can Valhalla act on live systems directly?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Only through governed pathways. Anything dangerous flows through Forseti instead of ad hoc tool access. No bypasses.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Is Valhalla available as self-serve?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Not yet. The first commercial shape is high-touch and selective - one spec, one active room, fixed role roster, weekly operator review - until the operating model is proven.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">What makes Valhalla different from other multi-agent tools?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Valhalla has structured turn order, persistent project memory, explicit done criteria, mandatory question rounds before building, and governed tool access through Forseti. It is a project room with discipline, not just many models in a chat.
            </div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section" id="contact">
      <div class="container fade-in">
        <p class="section-label" style="color:var(--valhalla);">Get Started</p>
        <h2>Bring a real spec. See if it belongs in a Valhalla room.</h2>
        <p>Selective pilot: one active spec, fixed room roster, weekly operator review, and explicit convergence criteria.</p>
        <div class="hero__actions">
          <a href="mailto:hello@caimeo.com" class="btn btn--valhalla">Apply for a build room</a>
          <a href="/" class="btn btn--ghost">Back to suite overview</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Valhalla - Governed Multi-Agent Delivery Room',
    description: 'Turn specs into shipped outcomes with structured Q&A rounds, named specialist roles, persistent project memory, and convergence loops governed by Forseti.',
    path: '/valhalla/',
    accent: 'valhalla',
    body,
  });
}
