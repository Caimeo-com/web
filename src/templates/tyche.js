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

        <figure class="product-visual fade-in">
          <picture>
            <source
              srcset="/product/tyche-transcripts-mobile.webp"
              media="(max-width: 640px)"
              width="760"
              height="1240"
            >
            <img
              src="/product/tyche-transcripts.webp"
              alt="Two transcript cards comparing a lucky Tyche demo run with a rerun where the invoice amount changes from 4,200 to 42,000."
              aria-describedby="tyche-transcripts-desc"
              width="1800"
              height="640"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="tyche-transcripts-desc" class="sr-only">The left transcript is titled Lucky demo, March 12. It uses seed default, searches vendor X invoice, summarizes total 4,200 dollars due March 30, schedules payment, and reports verdict PASS. The right transcript is titled Same code, rerun March 14. It has the same seed and steps, but the summary line changes to total 42,000 dollars due March 30 while the verdict still says PASS. The message below says Tyche fixes this with seeds, replay manifests, and reproducible verdicts.</p>
          <figcaption>Same agent. Same code. Two runs. One bug nobody noticed.</figcaption>
        </figure>
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
        <figure class="product-visual">
          <picture>
            <source
              srcset="/product/tyche-replay-bundle-mobile.webp"
              media="(max-width: 640px)"
              width="760"
              height="1380"
            >
            <img
              src="/product/tyche-replay-bundle.webp"
              alt="Tyche replay bundle image showing a file tree and compare-runs table with strategy, accuracy, cost, steps, and failures."
              aria-describedby="tyche-replay-desc"
              width="1800"
              height="840"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="tyche-replay-desc" class="sr-only">Replay bundle file tree: manifest.json with seed 0xA3F1 and scenario version 1.4, transcripts run_01 through run_03, state snapshots turn_00 and turn_01 through turn_12, scorecard.csv, comparison.html, and README.md. Compare-runs table columns are strategy, accuracy, cost, steps, and failures. gpt-4o plus aggressive scores 0.87, costs 0.43 dollars, 8 steps, 1 failure. claude plus conservative scores 0.92, costs 1.20 dollars, 12 steps, 0 failures and is marked as winner. llama-local plus default scores 0.71, costs 0.08 dollars, 6 steps, 3 failures.</p>
          <figcaption>The replay bundle — file tree + compare-runs grid, exactly as delivered</figcaption>
        </figure>
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

        <figure class="product-visual fade-in">
          <picture>
            <source
              srcset="/product/tyche-timeline-mobile.webp"
              media="(max-width: 640px)"
              width="760"
              height="1400"
            >
            <img
              src="/product/tyche-timeline.webp"
              alt="Linear Tyche and Forseti timeline showing scenario authoring, sweep completion, policy extraction, production release, and incident replay."
              aria-describedby="tyche-timeline-desc"
              width="1800"
              height="600"
              loading="lazy"
              decoding="async"
            >
          </picture>
          <p id="tyche-timeline-desc" class="sr-only">Timeline: March 2, Tyche scenario authored for invoice-review version 0.1. March 5, Tyche sweep complete with 24 runs and claude-conservative winning. March 6, Forseti policy extracted: pay requires approval and payments of 5,000 dollars or more need 2 C-level approvals or 10 member approvals. March 12, Forseti live in production and first governed intent released. March 18, Tyche incident replay reconstructs a denied intent and patches the scenario.</p>
          <figcaption>Two products, one timeline — how a policy actually travels from Tyche into Forseti and back</figcaption>
        </figure>
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
