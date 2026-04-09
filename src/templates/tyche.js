import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero hero--product hero--tyche">
      <span class="hero__label">Caimeo Tyche</span>
      <h1>Rehearse your agent<br>before you let it act</h1>
      <p class="hero__sub">
        Run deterministic scenario sweeps, compare strategies under fixed conditions,
        and export replay bundles you can actually trust.
      </p>
      <div class="hero__actions">
        <a href="mailto:contact@bitfalls.com" class="btn btn--tyche">Design a Tyche pilot</a>
        <a href="#how-it-works" class="btn btn--ghost">See a replay bundle</a>
      </div>
    </section>

    <!-- ===== WHY ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--tyche);">The Problem</p>
          <h2>Lucky demos don&rsquo;t prove production readiness</h2>
          <p>Without a rehearsal layer, agent systems jump from prompt experiments straight
          to production. Tyche creates the missing middle: a repeatable, measurable
          environment where decisions, memory, and evaluator outcomes can be inspected and rerun.</p>
        </div>

        <div class="img-placeholder fade-in" style="min-height:260px;max-width:900px;margin:0 auto;" role="img"
          alt="Wide horizontal illustration on dark navy background, approximately 900x260px. LEFT SIDE: A chaotic cluster representing unstructured experimentation — 4-5 scattered chat bubble icons in different sizes with question marks inside, a dice icon suggesting randomness, a small 'demo' label with a thumbs-up that has a question mark overlay, and sparkle effects suggesting lucky outcomes. The word 'Experiments' appears below in muted gray. Scattered prompt text fragments float around in small monospace font: 'Try this prompt...', 'It worked once!', 'Cannot reproduce'. CENTER: A dramatic vertical gap/chasm with a subtle purple/violet warning glow at the edges. The label 'No rehearsal layer' floats in the void. A broken bridge icon suggests missing infrastructure. An arrow tries to cross labeled 'Straight to prod' with a danger symbol. RIGHT SIDE: Production system icons (server, database, API gateway) rendered with pulsing red warning rings, suggesting blind operation. Small labels: 'Running blind', 'No baseline', 'No replay capability', 'Incidents unexplainable'. BELOW THE GAP: A glowing violet/purple bridge labeled 'Tyche' with icons representing its capabilities: a seed icon (determinism), a branching comparison icon (sweeps), and a replay/rewind icon (replay bundles). The bridge is solid and structured, contrasting the chaos above. Style: premium vector illustration, subtle depth, not cartoonish. Muted gray for chaos, red for danger, violet/purple for the solution.">
          The rehearsal gap — from experiments straight to production, with nothing in between
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="section section--alt" id="how-it-works">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--tyche);">How It Works</p>
          <h2>From scenario to evidence in three steps</h2>
        </div>

        <div class="flow-steps flow-steps--tyche fade-in">
          <div class="flow-step">
            <div class="flow-step__number">1</div>
            <h4>Scenario Pack</h4>
            <p>Define the environment, starting state, tools, memory settings, and scoring rules for the run.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">2</div>
            <h4>Sweeps + Comparison</h4>
            <p>Run the same scenario across prompts, models, policies, or tool chains under controlled conditions.</p>
          </div>
          <div class="flow-step">
            <div class="flow-step__number">3</div>
            <h4>Replay Bundle</h4>
            <p>Export deterministic run evidence with state snapshots, decisions, and outcomes for review or postmortem.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== DIAGRAM ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <div class="img-placeholder" style="min-height:300px;max-width:900px;margin:0 auto;" role="img"
          alt="Detailed horizontal technical architecture diagram on dark navy background, approximately 900x300px. Rendered as a left-to-right pipeline with branching paths, using violet/purple accent lines. STAGE 1 — 'Scenario Spec' (left edge): A document icon with a purple border containing a structured list in small monospace text: 'actors: [analyst, coder]', 'tools: [search, execute]', 'environment: sandbox-v2', 'start_state: {...}', 'evaluators: [accuracy, cost]', 'seed: 0xA3F1'. A version tag 'v1.4' sits in the corner. STAGE 2 — 'Deterministic Event Loop': A circular/loop icon with a seed crystal inside, labeled 'Seeded execution'. Arrows show turn-by-turn flow: actor picks action → tool executes → state updates → loop or stop. A counter shows 'Turn 4/12'. STAGE 3 — 'Runner Layer' (branching): The flow splits into 3-4 parallel paths, each representing a different strategy variant. Path labels: 'GPT-4o + aggressive prompt', 'Claude + conservative prompt', 'Local Llama + default prompt'. Each path shows a small adapter plug icon. The paths run in parallel horizontal lines. STAGE 4 — 'Memory & Tracing' (spans all parallel paths): A horizontal band across all paths showing memory types as stacked layers: 'Working memory (per-turn)', 'Episode memory (per-run)', 'Run memory (cross-run)'. Token budget gauges show fill levels. Tracing captures: 'transcript', 'state snapshots', 'tool call logs', 'token counts'. STAGE 5 — 'Evaluation': The parallel paths converge into a comparison table/grid showing scorecards. Columns for each strategy, rows for metrics: 'Accuracy: 0.87 / 0.92 / 0.71', 'Cost: $0.43 / $1.20 / $0.08', 'Steps: 8 / 12 / 6'. A winner highlight on the best row. STAGE 6 — 'Replay Bundle' (right edge): A package/archive icon with a download arrow, containing: 'run_manifest.json', 'transcripts/', 'state_snapshots/', 'scores.json', 'comparison.html'. A checkmark and timestamp indicate completeness. OVERALL: Purple/violet accent for all lines and active elements. Parallel paths are the visual centerpiece showing strategy comparison. Style is technical, data-rich but organized, suitable for enterprise AI platform teams.">
          Tyche architecture — Scenario → Runners → Memory → Tracing → Evaluation → Replay
        </div>
      </div>
    </section>

    <!-- ===== CAPABILITIES ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--tyche);">Capabilities</p>
          <h2>What Tyche gives your team</h2>
        </div>

        <div class="proof-points fade-in">
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9830;</div>
            <div>
              <h4>Deterministic seeds and loop controls</h4>
              <p>Runs carry seeds, scenario versions, adapter versions, and replay manifests so results can be reproduced.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9830;</div>
            <div>
              <h4>Scenario packs and fixtures</h4>
              <p>Versioned definitions of actors, tools, environment rules, start states, stop conditions, and evaluator criteria.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9830;</div>
            <div>
              <h4>Replay bundles with evidence</h4>
              <p>Run metadata, scoring, state snapshots, and enough context to explain the result and justify decisions.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9830;</div>
            <div>
              <h4>Token and context accounting</h4>
              <p>Memory budgets, context windows, and cost are visible per-run, not mystical. Know what each strategy costs.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9830;</div>
            <div>
              <h4>Hardware-neutral runners</h4>
              <p>API runners first, with local and self-hosted options as deployment choices, not the product definition.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9830;</div>
            <div>
              <h4>Before and after production</h4>
              <p>Use for pre-production rehearsal and post-incident reconstruction. One tool for both confidence and accountability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== USE CASES ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--tyche);">Use Cases</p>
          <h2>Where Tyche creates the most value</h2>
        </div>

        <div class="use-cases fade-in">
          <div class="use-case">
            <h4>Pre-production rehearsal</h4>
            <p>Test whether an agent workflow behaves acceptably before it is allowed anywhere near live systems.</p>
          </div>
          <div class="use-case">
            <h4>Post-incident replay</h4>
            <p>Reconstruct what happened after a bad run so the team can fix policy, prompts, tools, or memory settings.</p>
          </div>
          <div class="use-case">
            <h4>Strategy comparison</h4>
            <p>Measure multiple prompts, models, or tool chains under the same conditions instead of arguing from vibes.</p>
          </div>
          <div class="use-case">
            <h4>Cost and privacy tuning</h4>
            <p>Use local or self-hosted runners where the economics or data sensitivity justify it, without making hardware the core story.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SUITE FIT ===== -->
    <section class="section">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--tyche);">Suite Fit</p>
          <h2>Better together with Forseti</h2>
          <p>Forseti tells you whether an agent may act. Tyche tells you how that agent
          is likely to behave before you let it act. Together they form a credible enterprise
          control and rehearsal story. Winning policies from Tyche runs can graduate directly
          into Forseti policy packs.</p>
        </div>

        <div class="img-placeholder fade-in" style="min-height:200px;" role="img"
          alt="Circular feedback loop diagram on dark navy background, approximately 900x200px. Four nodes arranged in a clockwise cycle, connected by curved arrows with gradient colors transitioning between purple and cyan. TOP-LEFT NODE (purple/violet): 'Tyche Simulates' — a prism icon with branching paths, label: 'Run scenario sweeps, discover optimal policies and thresholds. Test prompt variants, model choices, and tool configurations under controlled conditions.' Arrow flows clockwise toward top-right. TOP-RIGHT NODE (transitioning purple→cyan): 'Policies Graduate' — a diploma/graduation cap icon over an arrow pointing into a shield, label: 'Winning policies from simulation runs are exported as Forseti policy packs. Approval thresholds, allowlists, and risk rules move from theory to production.' Arrow flows to bottom-right. BOTTOM-RIGHT NODE (cyan): 'Forseti Governs' — a shield/gate icon with a checkmark, label: 'Production agent actions flow through graduated policies. Real-world execution is governed with deterministic allow/deny/approve decisions.' Arrow flows to bottom-left. BOTTOM-LEFT NODE (transitioning cyan→purple): 'Tyche Replays' — a rewind/replay icon, label: 'When incidents occur, Tyche reconstructs the scenario from audit traces. Root cause analysis feeds back into improved scenarios and tighter policies.' Arrow flows back to top-left, completing the cycle. CENTER of the cycle: A small infinity or loop icon with text 'Continuous governance improvement'. The gradient transition between purple (Tyche) and cyan (Forseti) sections creates a visual sense of the two products working as one system. Style: clean, minimal, the arrows are the visual focus.">
          The Forseti + Tyche feedback loop — rehearse, govern, replay, improve
        </div>
      </div>
    </section>

    <!-- ===== FAQ ===== -->
    <section class="section section--alt">
      <div class="container container--narrow">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--tyche);">FAQ</p>
          <h2>Common questions</h2>
        </div>

        <div class="faq-list fade-in">
          <div class="faq-item">
            <button class="faq-item__q">Do we need special hardware to use Tyche?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. API-backed runners are enough for the first pilots. Local hardware is an optional optimization path, not the product definition.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Is Tyche for model training?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              No. The core job is rehearsal, replay, comparison, and evidence generation around agent behavior — not training new models.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">Can Tyche work with Forseti?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              Yes. The strongest story is Tyche before production for rehearsal, Forseti at the execution boundary for governance, and Tyche again for replay or postmortem after incidents.
            </div></div>
          </div>
          <div class="faq-item">
            <button class="faq-item__q">What does a pilot look like?</button>
            <div class="faq-item__a"><div class="faq-item__a__inner">
              One scenario family, one scoring rubric, one comparison pack, and a replay bundle fit for operator review. Most discovery sprints run 1-2 weeks.
            </div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section" id="contact">
      <div class="container fade-in">
        <p class="section-label" style="color:var(--tyche);">Get Started</p>
        <h2>Bring one workflow. Get a replay bundle.</h2>
        <p>Bring one high-value workflow or incident scenario and we will turn it into a reproducible simulation and replay package.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--tyche">Contact about Tyche</a>
          <a href="/" class="btn btn--ghost">Back to suite overview</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Tyche — Deterministic Simulation & Replay for AI Agents',
    description: 'Rehearse agent behavior before production. Run deterministic scenario sweeps, compare strategies under fixed conditions, and export replay bundles you can trust.',
    path: '/tyche/',
    accent: 'tyche',
    body,
  });
}
