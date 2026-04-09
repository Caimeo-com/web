import { layout } from './layout.js';

export function render() {
  const body = `
    <!-- ===== HERO ===== -->
    <section class="hero">
      <span class="hero__label">Control &middot; Confidence &middot; Delivery</span>
      <h1>Governed agent infrastructure<br>for <span class="gradient">real outcomes</span></h1>
      <p class="hero__sub">
        Let agents work without giving them blind access to the real world.
        Caimeo governs execution, rehearses behavior, and is preparing a high-trust delivery room for the next layer up.
      </p>
      <div class="hero__actions">
        <a href="mailto:contact@bitfalls.com" class="btn btn--primary">Contact Caimeo</a>
        <a href="#products" class="btn btn--ghost">See the products</a>
      </div>
    </section>

    <!-- ===== TRUST BAR ===== -->
    <section class="section" style="padding-top:0;padding-bottom:3rem;">
      <div class="container">
        <div class="trust-bar fade-in">
          <div class="trust-bar__item">
            <span class="icon" aria-hidden="true">&#9679;</span>
            Self-hosted by default
          </div>
          <div class="trust-bar__item">
            <span class="icon" aria-hidden="true">&#9679;</span>
            Vendor-agnostic
          </div>
          <div class="trust-bar__item">
            <span class="icon" aria-hidden="true">&#9679;</span>
            Enterprise-ready audit trails
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SUITE VISUAL ===== -->
    <section class="diagram-section">
      <div class="container fade-in">
        <figure class="suite-diagram">
          <img
            src="/caimeo-suite-architecture.webp"
            alt="Caimeo suite architecture diagram showing a three-stage pipeline. Forseti governs live agent actions through intent, policy, approval, and release. Tyche turns those traces into seeded scenarios, runs deterministic comparisons, and outputs replay-backed policy packs. Valhalla takes validated patterns into a structured delivery room with intake, role loops, review, and shipped change."
            width="1600"
            height="1683"
            decoding="async"
          >
        </figure>
      </div>
    </section>

    <!-- ===== PRODUCT ACCORDION ===== -->
    <section class="section" id="products">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">The Suite</p>
          <h2>Three products. One governed stack.</h2>
        </div>

        <div class="product-accordion fade-in" data-product-accordion>
          <article class="product-pane product-pane--forseti is-active" data-product-pane data-product-name="forseti" tabindex="0" aria-expanded="true">
            <div class="product-pane__compact">
              <p class="product-pane__tag">Live now</p>
              <h3>Forseti</h3>
              <div class="product-pane__thumb" aria-hidden="true">
                <div class="product-pane__thumb-window">
                  <span></span><span></span><span></span>
                </div>
                <div class="product-pane__thumb-lines">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div class="product-pane__expanded">
              <p class="product-pane__eyebrow">Governed execution gateway</p>
              <div class="product-pane__media" aria-hidden="true">
                <div class="product-pane__screen">
                  <div class="product-pane__screen-bar"><span></span><span></span><span></span></div>
                  <div class="product-pane__screen-body">
                    <div class="product-pane__screen-chip-row">
                      <span class="product-pane__chip">Intent</span>
                      <span class="product-pane__chip">Policy</span>
                      <span class="product-pane__chip">Release</span>
                    </div>
                    <div class="product-pane__screen-lines">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div class="product-pane__filmstrip">
                  <span>Approvals</span>
                  <span>Policy packs</span>
                  <span>Audit replay</span>
                </div>
              </div>
              <p class="product-pane__summary">Put every high-stakes agent action behind typed intent, deterministic policy, approval routing, and a replayable audit trail.</p>
              <ul class="product-pane__features">
                <li>Typed intent envelopes for inspectable actions</li>
                <li>Deterministic allow / deny / approval decisions</li>
                <li>Slack-native approval flows with quorum support</li>
              </ul>
              <a href="/forseti/" class="product-pane__link">Explore Forseti <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>

          <article class="product-pane product-pane--tyche" data-product-pane data-product-name="tyche" tabindex="0" aria-expanded="false">
            <div class="product-pane__compact">
              <p class="product-pane__tag">Live now</p>
              <h3>Tyche</h3>
              <div class="product-pane__thumb" aria-hidden="true">
                <div class="product-pane__thumb-window">
                  <span></span><span></span><span></span>
                </div>
                <div class="product-pane__thumb-lines">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div class="product-pane__expanded">
              <p class="product-pane__eyebrow">Deterministic simulation and replay</p>
              <div class="product-pane__media" aria-hidden="true">
                <div class="product-pane__screen">
                  <div class="product-pane__screen-bar"><span></span><span></span><span></span></div>
                  <div class="product-pane__screen-body">
                    <div class="product-pane__screen-chip-row">
                      <span class="product-pane__chip">Seeded runs</span>
                      <span class="product-pane__chip">Compare</span>
                      <span class="product-pane__chip">Replay</span>
                    </div>
                    <div class="product-pane__screen-lines">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div class="product-pane__filmstrip">
                  <span>Scenario packs</span>
                  <span>Scorecards</span>
                  <span>Evidence bundles</span>
                </div>
              </div>
              <p class="product-pane__summary">Rehearse agent behavior before production, compare strategies under fixed conditions, and export replay bundles teams can trust.</p>
              <ul class="product-pane__features">
                <li>Seeded, reproducible scenario sweeps</li>
                <li>Strategy comparison under controlled conditions</li>
                <li>Replay bundles with full evidence trails</li>
              </ul>
              <a href="/tyche/" class="product-pane__link">Explore Tyche <span aria-hidden="true">&rarr;</span></a>
            </div>
          </article>

          <article class="product-pane product-pane--valhalla" data-product-pane data-product-name="valhalla" tabindex="0" aria-expanded="false">
            <div class="product-pane__compact">
              <p class="product-pane__tag">Coming soon</p>
              <h3>Valhalla</h3>
              <div class="product-pane__thumb" aria-hidden="true">
                <div class="product-pane__thumb-window">
                  <span></span><span></span><span></span>
                </div>
                <div class="product-pane__thumb-lines">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div class="product-pane__expanded">
              <p class="product-pane__eyebrow">Governed delivery room</p>
              <div class="product-pane__media" aria-hidden="true">
                <div class="product-pane__screen">
                  <div class="product-pane__screen-bar"><span></span><span></span><span></span></div>
                  <div class="product-pane__screen-body">
                    <div class="product-pane__screen-chip-row">
                      <span class="product-pane__chip">Questions</span>
                      <span class="product-pane__chip">Build</span>
                      <span class="product-pane__chip">Review</span>
                    </div>
                    <div class="product-pane__screen-lines">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
                <div class="product-pane__filmstrip">
                  <span>Room roster</span>
                  <span>Task loops</span>
                  <span>Operator review</span>
                </div>
              </div>
              <p class="product-pane__summary">A premium multi-agent delivery room for clarified specs, named specialist roles, persistent memory, and disciplined convergence.</p>
              <ul class="product-pane__features">
                <li>Structured Q&amp;A before implementation starts</li>
                <li>Role-based build and review loops</li>
                <li>Governed release paths fed by Forseti and Tyche</li>
              </ul>
              <span class="product-pane__link product-pane__link--disabled" aria-disabled="true">Coming soon</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== HOW THE SUITE FITS ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">Suite Architecture</p>
          <h2>Built to work together</h2>
          <p>Each layer has a clean job. Forseti controls action, Tyche provides evidence, and Valhalla is the governed delivery layer that ties them together.</p>
        </div>

        <div class="suite-row fade-in">
          <div class="suite-col">
            <div class="suite-col__num" style="color:var(--forseti);">01</div>
            <h3 style="color:var(--forseti);">Control</h3>
            <p>Forseti sits at the execution boundary. Agents propose intents; Forseti decides whether they proceed, require approval, or get denied.</p>
          </div>
          <div class="suite-col">
            <div class="suite-col__num" style="color:var(--tyche);">02</div>
            <h3 style="color:var(--tyche);">Confidence</h3>
            <p>Tyche rehearses before production and replays after incidents, replacing guesswork with deterministic evidence.</p>
          </div>
          <div class="suite-col">
            <div class="suite-col__num" style="color:var(--valhalla);">03</div>
            <h3 style="color:var(--valhalla);">Delivery</h3>
            <p>Valhalla is the next layer up: a governed build room for important specs, specialist roles, and high-trust execution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHO IT'S FOR ===== -->
    <section class="section">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">Audience</p>
          <h2>Built for teams deploying agents into real workflows</h2>
        </div>

        <div class="use-cases fade-in">
          <div class="use-case">
            <h4>Security &amp; Platform Engineering</h4>
            <p>Need an approval and audit layer before agents touch deployments, payments, tickets, or external APIs.</p>
          </div>
          <div class="use-case">
            <h4>AI Platform Teams</h4>
            <p>Need reproducible evidence before widening agent autonomy and a way to replay incidents after they happen.</p>
          </div>
          <div class="use-case">
            <h4>Finance &amp; IT Operations</h4>
            <p>Need quorum-based approvals before money moves or vendor communications go out, with a full audit trail.</p>
          </div>
          <div class="use-case">
            <h4>Product Engineering</h4>
            <p>Need a route from governed execution into repeatable, higher-trust delivery without losing operator control.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRINCIPLES ===== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header fade-in">
          <p class="section-label" style="color:var(--accent);">Principles</p>
          <h2>How we think about agent governance</h2>
        </div>

        <div class="proof-points fade-in">
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9632;</div>
            <div>
              <h4>Self-hosted by default</h4>
              <p>The control layer runs in your environment so the governance boundary survives model churn and vendor changes.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9632;</div>
            <div>
              <h4>Vendor-agnostic</h4>
              <p>Forseti sits above the model vendor, above the agent framework, and above the workflow runner. No lock-in.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9632;</div>
            <div>
              <h4>Operator-visible by design</h4>
              <p>Approvals, simulations, and delivery loops stay inspectable. No black-box handoff when the stakes rise.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--forseti-glow);color:var(--forseti);">&#9632;</div>
            <div>
              <h4>Deterministic decisions</h4>
              <p>Policy evaluation is deterministic: ALLOW, DENY, or REQUIRES_APPROVAL. No probabilistic guessing at the governance layer.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--tyche-glow);color:var(--tyche);">&#9632;</div>
            <div>
              <h4>Reproducible simulation</h4>
              <p>Every Tyche run carries a seed, scenario version, and replay manifest so results can be reproduced and compared.</p>
            </div>
          </div>
          <div class="proof-point">
            <div class="proof-point__icon" style="background:var(--valhalla-glow);color:var(--valhalla);">&#9632;</div>
            <div>
              <h4>Structured delivery loops</h4>
              <p>Valhalla is being shaped around named roles, question rounds, and convergence rules instead of freestyle agent chatter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section">
      <div class="container fade-in">
        <h2>Bring one workflow or one hard problem.</h2>
        <p>We will tell you whether it belongs in Forseti, Tyche, or the upcoming Valhalla track.</p>
        <div class="hero__actions">
          <a href="mailto:contact@bitfalls.com" class="btn btn--primary">contact@bitfalls.com</a>
          <a href="#products" class="btn btn--ghost">Review the suite</a>
        </div>
      </div>
    </section>
  `;

  return layout({
    title: 'Caimeo — Governed Agent Infrastructure',
    description: 'Governed agent infrastructure for teams that want real outcomes, not unchecked autonomy. Control execution with Forseti, rehearse with Tyche, and prepare for Valhalla.',
    path: '/',
    body,
  });
}
