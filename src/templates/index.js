import { layout } from './layout.js';

const CONTACT_HREF = 'mailto:contact@bitfalls.com?subject=Scope%20one%20governed%20workflow';
const SCOPED_CONTACT_HREF = `${CONTACT_HREF}&body=Workflow%3A%0AAction%3A%0ABlast%20radius%3A%0AApprovers%3A%0AEvidence%20needed%3A`;

export function render() {
  const year = new Date().getFullYear();
  const body = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="top-signal" aria-hidden="true"></div>

  <header class="site-header wrap">
    <a class="wordmark" href="#top" aria-label="Caimeo home">
      <span class="wordmark__mark" aria-hidden="true">C</span>
      <span>Caimeo</span>
    </a>
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#mechanism">How it works</a>
      <a href="#suite">The suite</a>
    </nav>
    <a class="header-action" href="${CONTACT_HREF}">Scope a workflow</a>
  </header>

  <main id="main" data-release="clarity-home-20261025">
    <section class="hero wrap" id="top">
      <div class="hero__copy">
        <h1><span>Govern agent </span><span>actions.</span></h1>
        <div class="hero__intro">
          <p>Caimeo is governance infrastructure that puts typed intent, deterministic policy, human approval and replayable evidence between an agent and the tools it can change.</p>
          <div class="hero__actions">
            <a class="button button--primary" href="${CONTACT_HREF}">Scope one workflow</a>
            <a class="text-link" href="/brainstack/">Explore Brainstack <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>

      <div class="decision" data-ui aria-label="Interactive governed payment example">
        <div class="decision__bar">
          <div>
            <p class="ui-label">Illustrative payment intent</p>
            <p class="decision__id">Invoice 4821</p>
          </div>
          <span class="status status--pending" data-status>Needs approval</span>
        </div>

        <div class="decision__body">
          <section class="intent-summary" aria-labelledby="intent-title">
            <p class="ui-label" id="intent-title">Requested action</p>
            <p class="intent-summary__amount"><span class="num">$7,500</span> to Microsoft</p>
            <dl class="intent-facts">
              <div><dt>Action</dt><dd>Pay invoice 4821</dd></div>
              <div><dt>Risk</dt><dd>High</dd></div>
              <div><dt>Requested by</dt><dd>Finance agent</dd></div>
            </dl>
          </section>

          <section class="policy-summary" aria-labelledby="policy-title">
            <p class="ui-label" id="policy-title">Policy decision</p>
            <p class="policy-summary__verdict">Requires approval</p>
            <p>The amount exceeds the <span class="num">$1,000</span> autonomous-payment limit.</p>
            <p class="policy-summary__route">CFO + COO approval required</p>
          </section>

          <section class="approval" aria-labelledby="approval-title">
            <p class="ui-label" id="approval-title">Example outcomes</p>
            <p class="approval__prompt">Inspect either terminal path.</p>
            <div class="approval__actions">
              <button class="ui-button ui-button--approve" type="button" data-decision="approved">Show approved</button>
              <button class="ui-button ui-button--reject" type="button" data-decision="rejected">Show rejected</button>
            </div>
          </section>
        </div>

        <div class="decision__outcome" aria-live="polite">
          <div>
            <p class="ui-label">Outcome</p>
            <p data-outcome>Waiting for a human decision. Nothing has been released.</p>
          </div>
          <button class="reset-button" type="button" data-reset hidden>Reset example</button>
        </div>

        <div class="evidence" data-evidence hidden>
          <span>Released to n8n action plane</span>
          <span>execution_complete</span>
          <span>Trace t_8f21</span>
          <span>Hash 0x4b7e…a1</span>
        </div>
      </div>
      <noscript><p class="noscript-note">This example is waiting for a human decision. JavaScript enables the approved and rejected example paths.</p></noscript>
    </section>

    <section class="mechanism" id="mechanism">
      <div class="wrap mechanism__intro">
        <h2>See the decision before the action.</h2>
        <p>One governed path makes the request, policy, approvers and evidence readable before autonomy gets wider.</p>
      </div>

      <ol class="gate-list wrap">
        <li>
          <div class="gate-list__copy">
            <h3>Typed intent</h3>
            <p>The agent asks to pay invoice 4821 instead of reaching the payment tool directly.</p>
          </div>
          <p class="gate-list__result">Recipient, amount, currency, risk and caller become inspectable data.</p>
        </li>
        <li>
          <div class="gate-list__copy">
            <h3>Policy decision</h3>
            <p>Forseti evaluates the request against deterministic rules.</p>
          </div>
          <p class="gate-list__result"><strong>REQUIRES_APPROVAL</strong> because <span class="num">$7,500</span> exceeds the <span class="num">$1,000</span> limit.</p>
        </li>
        <li>
          <div class="gate-list__copy">
            <h3>Human approval</h3>
            <p>The right people decide with the policy reason in view.</p>
          </div>
          <p class="gate-list__result">CFO and COO approval must both be terminal before release.</p>
        </li>
        <li>
          <div class="gate-list__copy">
            <h3>Replayable evidence</h3>
            <p>Only an approved action reaches the deterministic action plane.</p>
          </div>
          <p class="gate-list__result">Execution state, trace and audit hash stay available for review.</p>
        </li>
      </ol>

      <figure class="sequence-figure wrap">
        <picture>
          <source media="(max-width: 640px)" srcset="/product/forseti-sequence-mobile.webp">
          <img src="/product/forseti-sequence.webp" width="1800" height="760" alt="Sequence from agent intent through Forseti policy and Slack approvals to the n8n action plane and audit trace.">
        </picture>
        <figcaption>The same request remains traceable from intent to completed execution.</figcaption>
      </figure>
    </section>

    <section class="suite wrap" id="suite">
      <div class="suite__intro">
        <h2>Control, then confidence.</h2>
        <p>Start with governed execution. Add rehearsal and shared memory when the workflow earns it.</p>
      </div>

      <article class="suite-row suite-row--forseti">
        <div class="suite-row__copy">
          <h3>Forseti</h3>
          <p>Control consequential actions with typed intent, deterministic policy, human approval and an auditable release boundary.</p>
          <a class="text-link" href="/forseti/">Explore Forseti <span aria-hidden="true">→</span></a>
        </div>
        <picture class="suite-row__media">
          <source media="(max-width: 640px)" srcset="/product/forseti-before-after-mobile.webp">
          <img src="/product/forseti-before-after.webp" width="1800" height="640" alt="Comparison of an ungoverned payment action and the same action submitted to Forseti as a typed intent requiring approval.">
        </picture>
      </article>

      <article class="suite-row suite-row--tyche">
        <picture class="suite-row__media">
          <source media="(max-width: 640px)" srcset="/product/tyche-timeline-mobile.webp">
          <img src="/product/tyche-timeline.webp" width="1800" height="600" alt="Timeline showing a Tyche scenario, a controlled sweep, a Forseti policy extracted from the result, production release, and later incident replay.">
        </picture>
        <div class="suite-row__copy">
          <h3>Tyche</h3>
          <p>Rehearse agent behavior under fixed conditions, compare strategies and carry replay evidence into production review.</p>
          <a class="text-link" href="/tyche/">Explore Tyche <span aria-hidden="true">→</span></a>
        </div>
      </article>

      <article class="suite-row suite-row--brainstack">
        <div class="suite-row__copy">
          <h3>Brainstack</h3>
          <p>Give agents shared, inspectable memory across tools and machines without turning every local session into a silo.</p>
          <a class="text-link" href="/brainstack/">Explore Brainstack <span aria-hidden="true">→</span></a>
        </div>
        <picture class="suite-row__media">
          <source media="(max-width: 640px)" srcset="/product/brainstack-hero-mobile.webp">
          <img src="/product/brainstack-architecture.webp" width="1800" height="960" alt="Brainstack product views show agents and healthy workers sharing inspectable memory across tools and machines.">
        </picture>
      </article>

      <p class="valhalla-note"><strong>Valhalla is coming soon.</strong> It adds explicit roles, specialist review and stop conditions to larger delivery work.</p>
    </section>

    <section class="closing">
      <div class="wrap closing__inner">
        <h2>Govern one workflow.</h2>
        <p>Start with one consequential action. Bring its blast radius, the real approvers and the evidence you need after execution.</p>
        <a class="button button--dark" href="${SCOPED_CONTACT_HREF}">Scope one workflow</a>
      </div>
    </section>
  </main>

  <footer class="site-footer wrap">
    <p>Caimeo governs agentic work.</p>
    <div class="site-footer__links">
      <a href="/docs/">Docs</a>
      <a href="/ideas/">Idea Explorer</a>
      <a href="mailto:contact@bitfalls.com">Contact</a>
    </div>
    <p>© ${year} Caimeo</p>
  </footer>`;

  return layout({
    title: 'Caimeo — Govern agent actions',
    description: 'Caimeo governs agent actions with typed intent, deterministic policy, human approval, and replayable evidence.',
    path: '/',
    chrome: false,
    bodyClass: 'clarity-page',
    themeColor: '#151719',
    stylesheet: '/styles/home.css',
    script: '/scripts/home.js',
    schema: {
      '@type': 'ItemList',
      '@id': 'https://caimeo.com/#product-list',
      name: 'Caimeo governed agent suite',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Forseti', url: 'https://caimeo.com/forseti/' },
        { '@type': 'ListItem', position: 2, name: 'Tyche', url: 'https://caimeo.com/tyche/' },
        { '@type': 'ListItem', position: 3, name: 'Brainstack', url: 'https://caimeo.com/brainstack/' },
        { '@type': 'ListItem', position: 4, name: 'Valhalla', url: 'https://caimeo.com/docs/valhalla/' },
      ],
    },
    body,
  });
}
