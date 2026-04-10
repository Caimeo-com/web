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

        <div class="img-placeholder fade-in" style="min-height:320px;max-width:900px;margin:0 auto;" role="img"
          alt="Target dimensions: 900x320px, rendered flat (no glow, no gradients, no sparkles, no dice). Two transcript cards side by side on the dark navy page background, each ~430px wide. Each card has a 1px hairline border, a small header strip with a title, and a monospace code body styled like a terminal transcript. LEFT CARD, titled 'Lucky demo — Mar 12' in muted gray: body contains a short agent trace, one log line per row in off-white monospace: 'seed: default', 'turn 1: agent.search(\"vendor X invoice\")', 'turn 2: agent.summarize(results) → \"total: $4,200, due Mar 30\"', 'turn 3: agent.schedule_payment(...) → ✓ scheduled', 'verdict: PASS'. Underneath, a small caption in dim gray: 'Nobody wrote down the seed. Nobody can rerun it.' RIGHT CARD, titled 'Same code, rerun Mar 14' in violet, with a 1px violet border accent on the title strip only: body is the SAME trace BUT with ONE changed line, highlighted with a subtle violet left-edge marker: 'turn 2: agent.summarize(results) → \"total: $42,000, due Mar 30\"'. The last line still reads 'verdict: PASS'. Underneath, a small caption in dim gray: 'Same code. Different run. Nobody noticed the extra zero.' Below both cards, centred, a single line of body copy in slightly larger dim gray: 'This is what Tyche fixes: seeds, replay manifests, reproducible verdicts.' No chasms, no bridges, no prisms, no icons. Just two terminal cards and the quiet horror of a missed zero.">
          Same agent. Same code. Two runs. One bug nobody noticed.
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

    <!-- ===== REPLAY BUNDLE ARTEFACT ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <div class="img-placeholder" style="min-height:420px;max-width:900px;margin:0 auto;" role="img"
          alt="Target dimensions: 900x420px. A two-panel layout showing the literal deliverable of a Tyche pilot. No icons, no glows, no prisms, no seed crystals, no pipelines. TOP PANEL (~180px tall): a file-browser style tree view in monospace off-white on the dark navy page background, rendered as if copied from a 'tree' command output. Header line in dim gray: 'replay-bundles/invoice-review-v1.4/'. Body lines, using box-drawing characters (├── └──): 'manifest.json' with a dim-gray inline comment '(seed: 0xA3F1, scenario_v: 1.4)', 'transcripts/' as a sub-directory with three children indented once: 'run_01.jsonl', 'run_02.jsonl', 'run_03.jsonl', then 'state_snapshots/' as a sub-directory with indented children 'turn_00.json', 'turn_01.json … turn_12.json', then back at top level: 'scorecard.csv', 'comparison.html', 'README.md'. Thin 1px hairline border around the whole tree. A small violet label in the top-right corner of this panel reads 'the replay bundle, on disk'. BOTTOM PANEL (~220px tall): a compare-runs table with a 1px hairline border and a thin violet header row. The header row has four columns: 'strategy', 'accuracy', '$ cost', 'steps', 'failures'. Three body rows, one per strategy. Row 1: 'gpt-4o + aggressive', '0.87', '$0.43', '8', '1'. Row 2: 'claude + conservative', '0.92' (this cell has a tiny violet dot to the left marking the winner), '$1.20', '12', '0'. Row 3: 'llama-local + default', '0.71', '$0.08', '6', '3'. Table uses off-white monospace numbers and a slightly more humanist label font for the strategy column. Below the table, a small caption in dim gray, left-aligned: 'What teams get back from a Tyche pilot.' The two panels are separated by 24px of empty space. Violet is used ONLY on the two labels and the winning-row marker. Everything else is neutral. The whole image should look like two cropped screenshots from a real deliverable, not an architecture illustration.">
          The replay bundle — file tree + compare-runs grid, exactly as delivered
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
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9673;</div>
            <div>
              <h4>Deterministic seeds and loop controls</h4>
              <p>Runs carry seeds, scenario versions, adapter versions, and replay manifests so results can be reproduced — not just described.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9635;</div>
            <div>
              <h4>Scenario packs and fixtures</h4>
              <p>Versioned definitions of actors, tools, environment rules, start states, stop conditions, and evaluator criteria. Sharable, reviewable, diffable.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#8635;</div>
            <div>
              <h4>Replay bundles with evidence</h4>
              <p>Run metadata, scoring, state snapshots, and enough context to explain the result and justify the decision to widen autonomy.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#8721;</div>
            <div>
              <h4>Token and context accounting</h4>
              <p>Memory budgets, context windows, and cost are visible per-run, not mystical. Know what each strategy costs before production does.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9654;</div>
            <div>
              <h4>Hardware-neutral runners</h4>
              <p>API runners first, with local and self-hosted options as deployment choices, not the product definition. No hardware shopping list required.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#8596;</div>
            <div>
              <h4>Before and after production</h4>
              <p>Pre-production rehearsal and post-incident reconstruction use the same primitives. One tool for both confidence and accountability.</p>
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
            <p>An approved agent sent the wrong vendor message on a Tuesday. The team grabs the trace, feeds its seed and scenario version into Tyche, reruns with alternate prompts, and within an afternoon has three candidate fixes, a scorecard comparing them, and a replay bundle the incident review can cite. The patched scenario becomes the next regression test.</p>
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

        <div class="img-placeholder fade-in" style="min-height:240px;" role="img"
          alt="Target dimensions: 900x240px. A LINEAR timeline (not a loop — loops are the single most overused B2B marketing diagram and we are deliberately not drawing one here). One horizontal time axis running the full width, rendered as a thin neutral-gray line with five equally spaced tick marks. Each tick mark has a date label below in small dim-gray monospace and a two-line checkpoint label above the line. The five checkpoints, left to right: TICK 1 — date 'Mar 02' — label 'Tyche: scenario authored / invoice-review v0.1'. This tick and label are coloured violet. TICK 2 — date 'Mar 05' — label 'Tyche: sweep complete / 24 runs, claude-conservative wins'. Violet. TICK 3 — date 'Mar 06' — label 'Forseti: policy extracted / amount ≤ $10k auto-allow; > $10k quorum 2/3'. This tick and label are coloured cyan (handoff point). TICK 4 — date 'Mar 12' — label 'Forseti: live in prod / first governed intent released'. Cyan. TICK 5 — date 'Mar 18' — label 'Tyche: incident replay / denied intent reconstructed, scenario patched'. Violet again (loops back to Tyche not via a circular arrow but via the next tick on the same linear axis). Between tick 3 and tick 4 the axis line is coloured cyan; between tick 4 and tick 5 the axis line transitions back to violet. Above the axis, small lane labels in dim gray: 'Tyche' on the left half, 'Forseti' on the right half, 'Tyche' again on the far right. Below the whole timeline, centred, a single caption in slightly larger off-white: 'One scenario. One seed. One policy. Across both products, on real dates.' No curved arrows, no circular motion, no infinity symbols. The diagram should read like a project timeline in a runbook.">
          Two products, one timeline — how a policy actually travels from Tyche into Forseti and back
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
              No. The core job is rehearsal, replay, comparison, and evidence generation around agent behavior - not training new models.
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
        <h2>Bring one workflow or one incident. Leave with a replay bundle.</h2>
        <p>A Tyche discovery sprint is 1&ndash;2 weeks. We take one high-value scenario or one real incident, turn it into a seeded, reproducible simulation, and hand back a replay bundle your team can open, rerun, and cite. If the problem actually belongs upstream, we&rsquo;ll say so.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--tyche">Scope a Tyche sprint</a>
          <a href="/#products" class="btn btn--ghost">Compare the suite</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo Tyche - Deterministic Simulation & Replay for AI Agents',
    description: 'Rehearse agent behavior before production. Run deterministic scenario sweeps, compare strategies under fixed conditions, and export replay bundles you can trust.',
    path: '/tyche/',
    accent: 'tyche',
    body,
  });
}
